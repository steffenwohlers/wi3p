import * as moment from '../../../node_modules/moment';
import '../../../node_modules/moment/locale/de';
import { DatumService } from './datum.service';

export class Programmplanung {
    public static startDatum: Date = new Date(2017, 0, 2);

    public vorlage: [number];
    public werte = [];

    static setStartDatum(start: Date) {
        // Durch die Planung auf Wochenbasis wird nur ein Montag als Startdatum akzeptiert
        if (start.getDay() === 1) {
            Programmplanung.startDatum = start;
        }

        // Wichtig: Wenn in Programmplanung ein Datum eingestellt wird, muss anschließend für jedes Fahrrad
        // die calculate Methode neu aufgerufen werden
    }

    // Nimmt Planwerte für Jahr entgegen und speichert ab, startet dann Outputberechnung
    constructor(vorlage: [number]) {
        this.vorlage = vorlage;
        this.calculateOutput();
    }

    /**
     *  Berechnet den Output auf Wochenbasis ab dem aktuellen Startdatum und speichert Ihn unter planning ab
     *  Problem: Ungerade Werte, Bugfixing
     */
    public calculateOutput() {
        const aktuellesDatum = new Date(Programmplanung.startDatum);

        let summe = 0;

        // Gehe durch die nächsten 52 Wochen
        for (let tag = 0; tag < 52; ++tag) {
            const montag = new Date(aktuellesDatum);
            let output = 0;

            // Finde Anzahl Arbeitstage in diesem Zeitraum heraus und iteriere für jeden
            for (let i = 0; i < 6; ++i) {
                if (DatumService.istArbeitstag(aktuellesDatum)) {
                    const monat = aktuellesDatum.getMonth();
                    const monthlyOutput = this.vorlage[monat];
                    const arbeitsTageVonMonat = DatumService.getArbeitstageMonat(aktuellesDatum);

                    output += (1 / arbeitsTageVonMonat) * monthlyOutput; // Addiere diesen Wert
                }
                aktuellesDatum.setDate(aktuellesDatum.getDate() + 1);
            }

            summe += output;

            // Speichere Werte ab
            moment.locale('de');
            this.werte[tag] = { startDate: montag,  planning: output, demand: output, calendarWeek: moment(montag).format('ww')};

            // Gehe weiter zur nächsten Woche
            aktuellesDatum.setDate(aktuellesDatum.getDate() + 1);
        }

        console.log(summe);
    }
}
