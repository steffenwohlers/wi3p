import { Component, OnInit } from '@angular/core';
import { ProduktionsplanungService } from '../shared/produktionsplanung.service';
import { Produktionsplanung } from '../shared/produktionsplanung.model';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';
import { DatumService } from '../shared/datum.service';

@Component({
  selector: 'app-sc-inbound',
  templateUrl: './sc-inbound.component.html',
  styles: []
})
export class ScInboundComponent implements OnInit {

  produktionsplanungSattel: Produktionsplanung[];


  // Lieferdaten
  lieferdatenSattel: Lieferdaten;

  werkVerzoegerung = 0;
  transport1Verzoegerung = 0;

  // Testdaten
  dateTest: Date = new Date(2017, 6, 12);


  constructor(
    private produktionsplanungService: ProduktionsplanungService,
    private lieferdatenService: LieferdatenService
    ) {
    this.produktionsplanungSattel = produktionsplanungService.getSattel();
    this.lieferdatenSattel = lieferdatenService.lieferdatenSattel;

  }

  ngOnInit() {

  }


  berechneAnkunftBeiOem(date: Date) {

    return this.berechneRetrogradesStartDatum(date, 1);
  }


  berechneStartLkwFahrt2(date: Date) {

    return this.berechneRetrogradesStartDatum(date, this.lieferdatenSattel.supplychain[2].anzahl);
  }

  berechneStartSchiffFahrt(date: Date) {
    let tempDate: Date;
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdatenSattel.supplychain[1].anzahl);

    return tempDate;
  }

  berechneStartLkwFahrt1(date: Date) {

    return this.berechneRetrogradesStartDatum(date, 2);
  }

  berechneStartImWerk(date: Date) {

    let tempDate: Date;
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - 5);

    tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);

    return tempDate;
  }

  /**
   *
   *
   *
   *
   * HILFSFUNKTIONEN
   *
   *
   *
   *
   */

  private berechneRetrogradesStartDatum(date: Date, dauer: number): Date {
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

  /**
   * Datum im Format  Day,  DD.MM.YYYY
   */
  datumAsString(date: Date): String {
    let result: string;

    switch (date.getDay()) {
      case 0 :
      result = 'Sonntag, ';
      break;

      case 1 :
      result = 'Montag, ';
      break;

      case 2 :
      result = 'Dienstag, ';
      break;

      case 3 :
      result = 'Mittwoch, ';
      break;

      case 4 :
      result = 'Donnerstag, ';
      break;

      case 5 :
      result = 'Freitag, ';
      break;

      case 6 :
      result = 'Samstag, ';
      break;

      default:
      result = 'falsch';
      console.log(date.getDate + '');
      break;
    }

    result = result + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    return result;

  }
}


