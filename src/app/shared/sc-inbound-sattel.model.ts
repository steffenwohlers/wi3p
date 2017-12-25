import { Produktionsplanung } from './produktionsplanung.model';
import { Fahrrad } from './fahrrad.model';
import { FahrradService } from './fahrrad.service';
import { DatumService } from './datum.service';

export class ScInboundSattel {
    lieferdaten: Fahrrad;

    produktionsstartOem: Date;
    startLkw1: Date;
    startSchiff: Date;
    startLkw2: Date;
    ankunftOEM: Date;
    produktionsstartHersteller: Date;

    menge: number;

    constructor(produktionsplanung: Produktionsplanung, private fahrradService: FahrradService ) {

        this.lieferdaten = fahrradService.getFahrrad(0);

        this.produktionsstartOem = produktionsplanung.datum;
        this.ankunftOEM = this.berechneAnkunftBeiOem(this.produktionsstartOem);
        this.startLkw2 = this.berechneStartLkwFahrt2(this.ankunftOEM);
        this.startSchiff = this.berechneStartSchiffFahrt(this.startLkw2);
        this.startLkw1 = this.berechneStartLkwFahrt1(this.startSchiff);
        this.produktionsstartHersteller = this.berechneStartImWerk(this.startLkw1);

        this.menge = produktionsplanung.menge;

    }
    /**
     *
     */
    private  berechneRetrogradesStartDatum(date: Date, dauer: number): Date {
        let tempDate: Date;


        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - dauer);

        tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);

        return tempDate;
    }

    /**
     *
     * @param date
     */
    private berechneVorherigenLetztenArbeitstag(date: Date): Date {

        let tempDate: Date;

        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate());

        while (!DatumService.istArbeitstag(tempDate)) {
          tempDate.setDate(tempDate.getDate() - 1);
        }

        return tempDate;

    }

    private berechneAnkunftBeiOem(date: Date) {

        return this.berechneRetrogradesStartDatum(date, 1);
    }

    private berechneStartLkwFahrt2(date: Date) {

        return this.berechneRetrogradesStartDatum(date, this.lieferdaten.sattel.lieferdaten.supplychain[2].anzahl);
    }

    private berechneStartSchiffFahrt(date: Date) {
        let tempDate: Date;
        // tslint:disable-next-line:max-line-length
        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.sattel.lieferdaten.supplychain[1].anzahl);

        return tempDate;
    }

    private berechneStartLkwFahrt1(date: Date) {

        return this.berechneRetrogradesStartDatum(date, this.lieferdaten.sattel.lieferdaten.supplychain[0].anzahl);
    }

    private berechneStartImWerk(date: Date) {
        // const date = produktionsplanung.datum;
        let tempDate: Date;
        // tslint:disable-next-line:max-line-length
        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.sattel.lieferdaten.bestelleingangBisProduktion.anzahl);

        // Wenn Losgröße nicht erreicht, summiere mit folgendem Tag
        // if (this.losgroessErreichtSattel()) {

        // } else {
        //   this.kummullierteBestellmengeSattel = + produktionsplanung.menge;
        // }


        tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);

        return tempDate;
      }

}
