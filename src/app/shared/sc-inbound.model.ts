import { Produktionsplanung } from './produktionsplanung.model';
import { LieferdatenService } from './lieferdaten.service';
import { DatumService } from './datum.service';
import { Lieferdaten } from './lieferdaten.model';

export class ScInbound {

    lieferdaten: Lieferdaten;
    produktionsstartOem: Date;
    ankunftOEM: Date;
    produktionsstartHersteller: Date;
    menge: number;

    constructor(private produktionsplanung: Produktionsplanung, private lieferdatenService: LieferdatenService) {

        this.lieferdaten = lieferdatenService.lieferdatenSattel;
        this.produktionsstartOem = produktionsplanung.datum;
        this.ankunftOEM = this.berechneAnkunftBeiOem(this.produktionsstartOem);
        this.menge = this.produktionsplanung.menge;

    }

    berechneRetrogradesStartDatum(date: Date, dauer: number): Date {
        let tempDate: Date;
        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - dauer);
        tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);
        return tempDate;
    }


    berechneVorherigenLetztenArbeitstag(date: Date): Date {
        let tempDate: Date;
        tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate());
        while (!DatumService.istArbeitstag(tempDate)) {
          tempDate.setDate(tempDate.getDate() - 1);
        }
        return tempDate;
    }

    berechneAnkunftBeiOem(date: Date) {
        return this.berechneRetrogradesStartDatum(date, 1);
    }

    berechneStartFahrtKalendertage(date: Date, dauer: number) {
        let resultDate: Date;
        resultDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - dauer);
        return resultDate;
    }

    berechneStartFahrtArbeitstage(date: Date, dauer: number) {
        return this.berechneRetrogradesStartDatum(date, dauer);
    }

    berechneStartBeimHersteller(date: Date, verzoegerungDurchLosgroesse: number) {
        let resultDate: Date;
        // tslint:disable-next-line:max-line-length
        resultDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.bestelleingangBisProduktion.anzahl - verzoegerungDurchLosgroesse);

        resultDate = this.berechneVorherigenLetztenArbeitstag(resultDate);

        return resultDate;
      }
}
