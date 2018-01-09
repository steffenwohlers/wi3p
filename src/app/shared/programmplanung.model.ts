import * as moment from '../../../node_modules/moment';
import '../../../node_modules/moment/locale/de';
import { DatumService } from './datum.service';
import { Produktionsplanung } from './produktionsplanung.model';


export class Programmplanung {
    public static startDatum: Date = new Date(2017, 0, 2);

    public vorlage: [number];
    public jahresWerte = [];
    public werte = [];
    public produktionsplanung = [];

    static setStartDatum(start: Date) {
        // Durch die Planung auf Wochenbasis wird nur ein Montag als Startdatum akzeptiert
        if (start.getDay() === 1) {
            Programmplanung.startDatum = start;
        }
    }

    // Nimmt Planwerte für Jahr entgegen und speichert ab, startet dann Outputberechnung
    constructor(vorlage: [number], public teile) {
        moment.locale('de');

        this.vorlage = vorlage;
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
                    if ( DatumService.istArbeitstag( aktuellerTag ) ) {
                        // tslint:disable-next-line:max-line-length
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

        // Gehe durch die nächsten 52 Wochen
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

        // Kalkuliere die Produktionsplanung
        const datum = new Date(Programmplanung.startDatum);
        for (let tage = 0; tage < 364; ++tage) {
            this.produktionsplanung[tage] = new Produktionsplanung( // Hier stattdessen Datum, planned, real, rueckstand
                new Date(datum),
                this.getOutputPerDay(datum),
                this.teile
            );
            datum.setDate(datum.getDate() + 1);
        }
    }

    /**
     * Where Magic happens: Methode rechnet von diesem Tag an in der Produktionsplanung durch
     * und addiert jeweils Rückstand etc. auf, guckt im Lager, checkt maxKapazität
     */
    public applyChanges(aktuellerTag: Date, wochenDemand: number) {

        // Die Referenz wird überschrieben, um keine ungewollten Wechselwirkungen zu ermöglichen
        aktuellerTag = new Date(aktuellerTag);

        // Wie viele Arbeitstage gibt es in diesem Monat?
        let arbeitsTageWoche = 0;
        const arbeitsTag = new Date(aktuellerTag);
        for (let tag = 0; tag < 7; ++tag) {
            if ( DatumService.istArbeitstag( arbeitsTag ) ) {
                arbeitsTageWoche += 1;
            }
            arbeitsTag.setDate(arbeitsTag.getDate() + 1);
        }

        // Berechne benötigten Tagesoutput
        const dailyOutput = wochenDemand / arbeitsTageWoche;

        let rest = 0;
        for (let tag = 0; tag < 7; ++tag) {
            if ( DatumService.istArbeitstag( aktuellerTag ) ) {
                const abgerundet = Math.floor(dailyOutput + rest);
                this.updateProduktionsPlanung(aktuellerTag, abgerundet);
                rest += dailyOutput - abgerundet;
            } else {
                this.updateProduktionsPlanung(aktuellerTag, 0);
            }
            aktuellerTag.setDate(aktuellerTag.getDate() + 1);
        }
    }

    private updateProduktionsPlanung(tag: Date, output: number) {
        for (let i = 0; i < this.produktionsplanung.length; ++i) {
            if (this.produktionsplanung[i].datum.getTime() === tag.getTime()) {
                this.produktionsplanung[i] = new Produktionsplanung(new Date(tag), output, this.teile);
                return;
            }
        }
    }
}
