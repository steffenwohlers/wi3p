import { Component, OnInit } from '@angular/core';
import { ProduktionsplanungService } from '../shared/produktionsplanung.service';
import { Produktionsplanung } from '../shared/produktionsplanung.model';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';
import { DatumService } from '../shared/datum.service';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';

@Component({
  selector: 'app-sc-inbound',
  templateUrl: './sc-inbound.component.html',
  styles: []
})
export class ScInboundComponent implements OnInit {

  produktionsplanungSattel: Produktionsplanung[];
  produktionsplanungGabel: Produktionsplanung[];
  produktionsplanungRahmen: Produktionsplanung[];

  // Lieferdaten
  lieferdaten: Fahrrad;

  constructor(
    private produktionsplanungService: ProduktionsplanungService,
    private lieferdatenService: LieferdatenService,
    private fahrradService: FahrradService
    ) {
      this.produktionsplanungSattel = produktionsplanungService.getSattel();
      this.produktionsplanungGabel = produktionsplanungService.getGabel();
      this.produktionsplanungRahmen = produktionsplanungService.getRahmen();

      this.lieferdaten = fahrradService.getFahrrad(0);

  }

  ngOnInit() {

  }


  berechneAnkunftBeiOem(date: Date) {

    return this.berechneRetrogradesStartDatum(date, 1);
  }


/**
 * Funktionen Sattel
 */

  berechneStartLkwFahrt2Sattel(date: Date) {

    return this.berechneRetrogradesStartDatum(date, this.lieferdaten.sattel.lieferdaten.supplychain[2].anzahl);
  }

  berechneStartSchiffFahrtSattel(date: Date) {
    let tempDate: Date;
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.sattel.lieferdaten.supplychain[1].anzahl);

    return tempDate;
  }

  berechneStartLkwFahrt1Sattel(date: Date) {

    return this.berechneRetrogradesStartDatum(date, this.lieferdaten.sattel.lieferdaten.supplychain[0].anzahl);
  }

  berechneStartImWerkSattel(date: Date) {

    let tempDate: Date;
    // tslint:disable-next-line:max-line-length
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.sattel.lieferdaten.bestelleingangBisProduktion.anzahl);

    // Wenn Losgröße nicht erreicht, summiere mit folgendem Tag


    tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);

    return tempDate;
  }

  /**
   * Funktionen Gabel
   */

  berechneStartZugFahrtGabel(date: Date) {
    let tempDate: Date;
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.gabel.lieferdaten.supplychain[0].anzahl);

    return tempDate;
  }

  berechneStartImWerkGabel(date: Date) {

    let tempDate: Date;
    // tslint:disable-next-line:max-line-length
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.gabel.lieferdaten.bestelleingangBisProduktion.anzahl);

    tempDate = this.berechneVorherigenLetztenArbeitstag(tempDate);

    return tempDate;
  }


  /**
   * Funktionen Rahmen
   */

  berechneStartLkwFahrtRahmen(date: Date) {
    let tempDate: Date;
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.rahmen.lieferdaten.supplychain[0].anzahl);

    return tempDate;
  }

  berechneStartImWerkRahmen(date: Date) {

    let tempDate: Date;
    // tslint:disable-next-line:max-line-length
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.lieferdaten.rahmen.lieferdaten.bestelleingangBisProduktion.anzahl);

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

    // TODO SW: testValue entfernen
    tempDate = new Date (date.getFullYear(), date.getMonth(), date.getDate() - dauer - this.testValue);

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

    /**
   *
   *
   *
   *
   * TESTS
   *
   *
   *
   *
   */


  // tslint:disable-next-line:member-ordering
  testValue = 0;

  vorherigerTag(date: Date) {
    const resultDate: Date = new Date (date.getFullYear(), date.getMonth(), date.getDate() - this.testValue);

    return resultDate;
  }

}


