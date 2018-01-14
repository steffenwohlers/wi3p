import * as moment from '../../../node_modules/moment';
import '../../../node_modules/moment/locale/de';
import { DatumService } from './datum.service';
import { Produktionsplanung } from './produktionsplanung.model';
import { ScInboundRahmen } from './sc-inbound-rahmen.model';
import { ScInboundGabel } from './sc-inbound-gabel.model';
import { ScInboundSattel } from './sc-inbound-sattel.model';
import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';
import { FahrradTeil } from './fahrrad-teil.model';
import { ParameterComponent } from '../parameter/parameter.component';




export class Programmplanung {
    public static startDatum: Date = new Date(2017, 0, 2);

    public vorlage: [number];
    public jahresWerte = [];
    public werte = [];
    public produktionsplanung = [];

    public rahmen: ScInboundRahmen[];
    public gabel: ScInboundGabel[];
    public sattel: ScInboundSattel[];

    static setStartDatum(start: Date) {
        // Durch die Planung auf Wochenbasis wird nur ein Montag als Startdatum akzeptiert
        if (start.getDay() === 1) {
            Programmplanung.startDatum = start;
        }
    }

    // Nimmt Planwerte für Jahr entgegen und speichert ab, startet dann Outputberechnung
    // tslint:disable-next-line:max-line-length
    constructor(vorlage: [number], public teile: FahrradTeil[], rahmen: ScInboundRahmen[], gabel: ScInboundGabel[], sattel: ScInboundSattel[]) {

        this.vorlage = vorlage;

        // console.log('Berechne für dieses Fahrrad', teile);

        this.rahmen = rahmen;
        this.gabel = gabel;
        this.sattel = sattel;

        moment.locale('de');

        this.calculateOutput();
    }

    /**
     * Die Methode generiert ein großes 3-dim Array mit jedem Jahr, jedem Monat und jedem Tag und dem jeweiligen Output
     * Das Array wird einmal generiert, dann wird nur noch der entsprechende Wert zurückgegeben
     */
    private getOutputPerDay(datum: Date) {
        const jahr = datum.getFullYear();
        const monat = datum.getMonth();
        const tag = datum.getDate();

        // Prüfe, ob in den Jahreswerten ein Eintrag für dieses Jahr ist
        if (typeof this.jahresWerte[jahr] !== 'undefined') {

            // Da für dieses Jahr schon Werte errechnet wurden, gebe den entsprechenden Wert zurück
            return this.jahresWerte[jahr][monat][tag];

        } else {

            // Da in diesem Jahr noch nichts berechnet wurde, tue dies jetzt
            // Erstelle Leere Arrays jeweils als Initialisierung
            this.jahresWerte[jahr] = [];
            for (let m = 0; m < 12; ++m) {
                this.jahresWerte[jahr][m] = [];

                // Berechne, wie der theoretische Output pro Tag wäre
                const monthlyOutput = this.vorlage[m];
                const arbeitsTageVonMonat = DatumService.getArbeitstageMonat(datum);
                const dailyOutput = monthlyOutput / arbeitsTageVonMonat;

                // Iteriere durch jeden Tag und weise den Tagesoutput zu
                // Runde jede Zahl ab und merke die Differenz, um diese auf den nächsten Wert drauf zu addieren
                const anzahlTage = new Date(jahr, m + 1, 0).getDate();
                let rest = 0;
                for (let t = 1; t <= anzahlTage; ++t) {
                    const aktuellerTag = new Date(jahr, m, t);
                    if (DatumService.istArbeitstag(aktuellerTag)) {
                        const abgerundet = Math.floor(dailyOutput + rest);
                        this.jahresWerte[jahr][m][t] = abgerundet;

                        rest += dailyOutput - abgerundet;
                    } else {
                        this.jahresWerte[jahr][m][t] = 0;
                    }
                }
            }

            // Nach der Berechnung: Gebe den passenden Wert jetzt aus
            return this.jahresWerte[jahr][monat][tag];
        }
    }

    /**
     *  Berechnet den Output auf Wochenbasis ab dem aktuellen Startdatum und speichert Ihn unter planning ab
     */
    public calculateOutput() {
        const aktuellesDatum = new Date(Programmplanung.startDatum);

        // Gehe durch die nächsten 52 Wochen für die Programmplanung
        for (let woche = 0; woche < 52; ++woche) {
            const montag = new Date(aktuellesDatum);
            let output = 0;

            // Finde Anzahl Arbeitstage in diesem Zeitraum heraus und iteriere für jeden
            for (let i = 0; i < 7; ++i) {
                output += this.getOutputPerDay(aktuellesDatum); // Addiere diesen Wert
                aktuellesDatum.setDate(aktuellesDatum.getDate() + 1);
            }

            // Speichere Werte ab
            this.werte[woche] = {
                startDate: montag,
                planning: output,
                demand: output,
                calendarWeek: moment(montag).format('ww'),
                calendarYear: moment(montag).format('YY')
            };
        }

        // Test: Mache das Lager wieder voll
        this.teile.forEach(teil => {
            teil.lagerbestand = 5000;
        });
        // Kalkuliere die Produktionsplanung
        const datum = new Date(Programmplanung.startDatum);
        for (let tage = 0; tage < 364; ++tage) {

            let rueckstand;
            if (tage === 0) {
                rueckstand = 0;
            } else {
                rueckstand = this.produktionsplanung[tage - 1].rueckstand;
            }

            const plannedOutput = this.getOutputPerDay(datum);
            const needToProduce = plannedOutput + rueckstand;
            const maxOutput = this.getMaxOutput(datum);
            let real;

            if (needToProduce < maxOutput) {
                real = needToProduce;
            } else {
                real = maxOutput;
            }

            this.entnehmeTeileAusLager(real);

            this.produktionsplanung[tage] = new Produktionsplanung(
                new Date(datum),
                // this.teile,
                plannedOutput,
                real, // <- where magic happens
                needToProduce - real
            );

            datum.setDate(datum.getDate() + 1);
        }
    }

    private getMaxOutput(datum: Date): number {

        // Wenn an dem Tag kein Arbeitstag ist, dann gebe 0 zurück
        if (!DatumService.istArbeitstag(datum)) {
            return 0;
        } else {
            // Der maximal am Tag zu produzierende Wert
            const maxKapazität = 8 * 64;

            // Das lager-Array fängt die maximalen Werte die mit dem Lager produziert werden können je Teil
            const lager = [];
            this.teile.forEach(teil => {
                let maxTeil = teil.lagerbestand;

                // Wenn der Bestand im Lager unter der maxKapazität liegt, finde heraus ob das Teil rechtzeitig geliefert wäre
                if (maxTeil < maxKapazität) {

                    if (this.lieferungMoeglich(datum, teil)) {
                        maxTeil = maxKapazität;
                    }
                }

                // Füge den maximalen Produktionswert für dieses Teil in das Array ein
                lager.push(maxTeil);
            });

            // Nehme den minimalen Wert aus dem Lager als letztendlichen Wert vom Lager - denn wenn noch 1000 Gabeln da sind,
            // aber nur 10 Rahmen und diese auch nicht nachgeliefert werden können, können nur 10 Einheiten produziert werden
            const maxLager = this.min(lager);

            const result = this.min([maxLager, maxKapazität]);

            // Gebe diesen Wert zurück
            return result;
        }
    }

    public entnehmeTeileAusLager(anzahl: number) {
        this.teile[0].lagerbestand = this.teile[0].lagerbestand - anzahl;
        this.teile[1].lagerbestand = this.teile[1].lagerbestand - anzahl;
        this.teile[2].lagerbestand = this.teile[2].lagerbestand - anzahl;
    }

    private min(arr): number {
        let min = arr[0];
        arr.forEach(elem => {
            if (elem < min) {
                min = elem;
            }
        });
        return min;
    }

    /**
     * Where Magic happens: Methode rechnet von diesem Tag an in der Produktionsplanung durch
     * und addiert jeweils Rückstand etc. auf, guckt im Lager, checkt maxKapazität
     */
    public applyChanges(aktuellerTag: Date, wochenDemand: number) {

        // Die Referenz wird überschrieben, um keine ungewollten Wechselwirkungen zu ermöglichen
        aktuellerTag = new Date(aktuellerTag);

        // Test: Mache das Lager wieder voll
        this.teile.forEach(teil => {
            teil.lagerbestand = 5000;
        });

        // Wie viele Arbeitstage gibt es in dieser Woche?
        let arbeitsTageWoche = 0;
        const arbeitsTag = new Date(aktuellerTag);
        for (let tag = 0; tag < 7; ++tag) {
            if (DatumService.istArbeitstag(arbeitsTag)) {
                arbeitsTageWoche += 1;
            }
            arbeitsTag.setDate(arbeitsTag.getDate() + 1);
        }

        // Berechne benötigten Tagesoutput
        const dailyOutput = wochenDemand / arbeitsTageWoche;

        // Der Rückstand vom letzten Tag wird ermittelt - wenn heute der Start ist, dann ist der Rückstand 0
        let rueckstand = 0;
        if (aktuellerTag.getTime() !== Programmplanung.startDatum.getTime()) {
            const gestern = new Date(aktuellerTag);
            gestern.setDate(gestern.getDate() - 1);

            this.produktionsplanung.forEach(produktionsplanung => {
                if (produktionsplanung.datum.getTime() === gestern.getTime()) {
                    rueckstand = produktionsplanung.rueckstand;
                }
            });
        }

        // Berechne die neuen Werte für diese Woche
        let rest = 0;
        for (let tag = 0; tag < 7; ++tag) {
            if (DatumService.istArbeitstag(aktuellerTag)) {

                const planned = Math.floor(dailyOutput + rest);
                rest += dailyOutput - planned;

                let real;
                const needToProduce = planned + rueckstand;
                const maxOutput = this.getMaxOutput(aktuellerTag);
                if (needToProduce < maxOutput) {
                    real = needToProduce;
                } else {
                    real = maxOutput;
                }
                rueckstand += (planned - real);

                this.entnehmeTeileAusLager(real);

                this.updateProduktionsPlanung(aktuellerTag, planned, real, rueckstand);
            } else {
                this.updateProduktionsPlanung(aktuellerTag, 0, 0, rueckstand);
            }
            aktuellerTag.setDate(aktuellerTag.getDate() + 1);
        }

        // Gehe vom ersten Tag der nächsten Woche bis zum Ende und berechne real mithilfe von Rückstand neu
        for (let i = 0; i < this.produktionsplanung.length; ++i) {
            if (this.produktionsplanung[i].datum.getTime() >= aktuellerTag.getTime()) {

                // Nutze den letzten Rückstand vom Vortag
                // console.log(this.produktionsplanung[i - 1].datum, this.produktionsplanung[i - 1].rueckstand);
                const letzterRueckstand = this.produktionsplanung[i - 1].rueckstand;

                // Wenn der Rückstand 0 ist, muss nichts mehr aufgerechnet werden
                if (letzterRueckstand === 0) {
                    break;
                } else {
                    const real = this.produktionsplanung[i].real;
                    const maxOutput = this.getMaxOutput(this.produktionsplanung[i].datum);
                    const needToProduce = real + letzterRueckstand;

                    let neuesReal;
                    if (needToProduce < maxOutput) {
                        neuesReal = needToProduce;
                    } else {
                        neuesReal = maxOutput;
                    }

                    this.entnehmeTeileAusLager(neuesReal);

                    this.produktionsplanung[i].real = neuesReal;
                    this.produktionsplanung[i].rueckstand += needToProduce - neuesReal;
                }
            }
        }

    }

    private updateProduktionsPlanung(tag: Date, planned: number, real: number, rueckstand: number) {
        for (let i = 0; i < this.produktionsplanung.length; ++i) {
            if (this.produktionsplanung[i].datum.getTime() === tag.getTime()) {
                this.produktionsplanung[i] = new Produktionsplanung(
                    new Date(tag),
                    // this.teile,
                    planned,
                    real,
                    rueckstand
                );
                return;
            }
        }
    }

    lieferungMoeglich(datum: Date, typ: FahrradTeil): boolean {
        // console.log('+++++++++++++++++++++++');
        // console.log(typ);
        // console.log(datum);

        let result: boolean;

        switch (typ.type) {
            // Rahmen
            case 0:
                result = this.lieferungMöglichRahmen(datum);
                // console.log(result);
                // console.log('+++++++++++++++++++++++');
                return result;
            // Gabel
            case 1:
                result = this.lieferungMöglichGabel(datum);
                // console.log(result);
                // console.log('+++++++++++++++++++++++');
                return result;
            // Sattel
            case 2:

                result = this.lieferungMöglichSattel(datum);
                // console.log(result);
                // console.log('+++++++++++++++++++++++');
                return result;

            default:
                console.log('Im Default');
                break;
        }

    }

    // tslint:disable-next-line:member-ordering
    private lieferungMöglichSattel(datum: Date): boolean {

        const startDatum = new Date(Programmplanung.startDatum); // 2.1.2017
        startDatum.setDate(startDatum.getDate() + ParameterComponent.lieferzeitSattel); // Lieferung dann z.b. am 14.2.

        if (startDatum.getTime() < datum.getTime()) { // Wenn die Lieferung vor dem Produktionstag ankommt, passt es
            return true;
        } else {
            return false;
        }

        /*for (const e of this.sattel) {
            if (e.produktionsstartOem.getTime() === datum.getTime()) {
                // console.log(Programmplanung.startDatum);
                // console.log(e.produktionsstartHersteller);

                if (Programmplanung.startDatum > e.produktionsstartHersteller) {
                    return false;
                } else {
                    return true;
                }
            }
        }*/
    }

    // tslint:disable-next-line:member-ordering
    private lieferungMöglichGabel(datum: Date): boolean {

        const startDatum = new Date(Programmplanung.startDatum); // 2.1.2017
        startDatum.setDate(startDatum.getDate() + ParameterComponent.lieferzeitGabel); // Lieferung dann z.b. am 14.2.

        if (startDatum.getTime() < datum.getTime()) { // Wenn die Lieferung vor dem Produktionstag ankommt, passt es
            return true;
        } else {
            return false;
        }

        /*for (const e of this.gabel) {

            if (e.produktionsstartOem.getTime() === datum.getTime()) {
                // console.log(Programmplanung.startDatum);
                // console.log(e.produktionsstartHersteller);

                if (Programmplanung.startDatum > e.produktionsstartHersteller) {

                    return false;
                } else {

                    return true;
                }
            }
        }*/
    }
    private lieferungMöglichRahmen(datum: Date): boolean {

        const startDatum = new Date(Programmplanung.startDatum); // 2.1.2017
        startDatum.setDate(startDatum.getDate() + ParameterComponent.lieferzeitRahmen); // Lieferung dann z.b. am 14.2.

        if (startDatum.getTime() < datum.getTime()) { // Wenn die Lieferung vor dem Produktionstag ankommt, passt es
            return true;
        } else {
            return false;
        }

        /*for (const e of this.rahmen) {
            if (e.produktionsstartOem.getTime() === datum.getTime()) {
                // console.log(Programmplanung.startDatum);
                // console.log(e.produktionsstartHersteller);

                if (Programmplanung.startDatum > e.produktionsstartHersteller) {

                    return false;
                } else {

                    return true;
                }
            }
        }*/

    }
}
