import { Produktionsplanung } from './produktionsplanung.model';
import { DatumService } from './datum.service';
import { Lieferdaten } from './lieferdaten.model';
import { LieferdatenService } from './lieferdaten.service';

export class ScInboundSattel {
    lieferdaten: Lieferdaten;
    produktionsstartOem: Date;
    ankunftOEM: Date;
    startLkw1: Date;
    startSchiff: Date;
    startLkw2: Date;
    produktionsstartHersteller: Date;

    menge: number;

    constructor(private produktionsplanung: Produktionsplanung, private lieferdatenService: LieferdatenService ) {

        this.lieferdaten = lieferdatenService.lieferdatenSattel;
        this.produktionsstartOem = produktionsplanung.datum;
        this.ankunftOEM = this.berechneAnkunftBeiOem(this.produktionsstartOem);
        this.startLkw2 = this.berechneStartLkwFahrt2(this.ankunftOEM);
        this.startSchiff = this.berechneStartSchiffFahrt(this.startLkw2);
        this.startLkw1 = this.berechneStartLkwFahrt1(this.startSchiff);
        this.produktionsstartHersteller = this.berechneStartBeimHersteller(this.startLkw1, 0);
        // this.produktionsstartHersteller = new Date(1975, 0, 1);

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

        return this.berechneRetrogradesStartDatum(date, this.lieferdaten.supplychain[2].anzahl);
    }

    private berechneStartSchiffFahrt(date: Date) {
        let tempDate: Date;
        // tslint:disable-next-line:max-line-length
        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.supplychain[1].anzahl);

        return tempDate;
    }

    private berechneStartLkwFahrt1(date: Date) {

        return this.berechneRetrogradesStartDatum(date, this.lieferdaten.supplychain[0].anzahl);
    }

    public berechneStartBeimHersteller(date: Date, verzoegerungDurchLosgroesse: number) {

        let tempDate: Date;
        // tslint:disable-next-line:max-line-length
        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.bestelleingangBisProduktion.anzahl - verzoegerungDurchLosgroesse);

        tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);

        return tempDate;
      }

}
