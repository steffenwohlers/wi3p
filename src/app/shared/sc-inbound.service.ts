import { ScInboundSattel } from './sc-inbound-sattel.model';
import { ProduktionsplanungService } from './produktionsplanung.service';
import { FahrradService } from './fahrrad.service';
import { Injectable, OnInit } from '@angular/core';
import { LieferdatenService } from './lieferdaten.service';
import { Lieferdaten } from './lieferdaten.model';
import { ScInboundGabel } from './sc-inbound-gabel.model';
import { ScInboundRahmen } from './sc-inbound-rahmen.model';

@Injectable()
export class ScInboundService {


  scInboundSattel: ScInboundSattel[] = new Array<ScInboundSattel>();
  lagerbestandSattel: number;
  losgroesseSattel: number;
  lieferdatenSattel: Lieferdaten;

  scInboundGabel: ScInboundGabel[] = new Array<ScInboundGabel>();
  lagerbestandGabel: number;
  losgroesseGabel: number;
  lieferdatenGabel: Lieferdaten;

  scInboundRahmen: ScInboundRahmen[] = new Array<ScInboundRahmen>();
  lagerbestandRahmen: number;
  losgroesseRahmen: number;
  lieferdatenRahmen: Lieferdaten;


  // tslint:disable-next-line:max-line-length
  constructor(private produktionsplanungService: ProduktionsplanungService, private lieferdatenService: LieferdatenService) {
    this.berechne();
  }

  berechne() {

    /**
    * Sattel
    */
    const produktionsplanungSattel = this.produktionsplanungService.getSattel();
    this.lagerbestandSattel = 0;
    this.lieferdatenSattel = this.lieferdatenService.lieferdatenSattel;
    // TODO SW: Hier die richtige Losgröße wieder verwenden
    this.losgroesseSattel = 200;
    // this.losgroesseSattel = this.lieferdatenSattel.losgroesseHersteller;
    for (let i = 0; i < produktionsplanungSattel.length; i++) {
      this.scInboundSattel[i] = new ScInboundSattel(produktionsplanungSattel[i], this.lieferdatenService);
    }
    this.beachteLosgroesseHersteller(this.scInboundSattel, this.lagerbestandSattel, this.losgroesseSattel);

    /**
    * Gabel
    */
    const produktionsplanungGabel = this.produktionsplanungService.getGabel();
    this.lagerbestandGabel = 0;
    this.lieferdatenGabel = this.lieferdatenService.lieferdatenGabel;
    // TODO SW: Hier die richtige Losgröße wieder verwenden
    this.losgroesseGabel = 200;
    // this.losgroesseGabel = this.lieferdatenGabel.losgroesseHersteller;
    for (let i = 0; i < produktionsplanungGabel.length; i++) {
      this.scInboundGabel[i] = new ScInboundGabel(produktionsplanungGabel[i], this.lieferdatenService);
    }
    this.beachteLosgroesseHersteller(this.scInboundGabel, this.lagerbestandGabel, this.losgroesseGabel);

    /**
    * Rahmen
    */
    const produktionsplanungRahmen = this.produktionsplanungService.getRahmen();
    this.lagerbestandRahmen = 0;
    this.lieferdatenRahmen = this.lieferdatenService.lieferdatenRahmen;
    // TODO SW: Hier die richtige Losgröße wieder verwenden
    this.losgroesseRahmen = 200;
    // this.losgroesseRahmen = this.lieferdatenRahmen.losgroesseHersteller;
    for (let i = 0; i < produktionsplanungRahmen.length; i++) {
      this.scInboundRahmen[i] = new ScInboundRahmen(produktionsplanungRahmen[i], this.lieferdatenService);
    }
    this.beachteLosgroesseHersteller(this.scInboundRahmen, this.lagerbestandRahmen, this.losgroesseRahmen);

  }

  kloneArray(array: Array<any>): Array<number> {
    const klon: Array<number> = new Array(array.length);
    for ( let i = 0; i < array.length; i++) {
      klon[i] = array[i].menge;
    }
    return klon;
  }


  beachteLosgroesseHersteller(scInbound: Array<any>, lagerbestand: number, losgroesse: number) {
    // Mengen-Werte des Datums zum Abgleich
    const wertArr = this.kloneArray(scInbound);
    // Iteriere von hinten durch das Original-Array
    for (let i = scInbound.length - 1; i >= 0; i--) {
    // Hersteller produziert die benötigte Menge und legt sie ins Lager
    lagerbestand = lagerbestand + scInbound[i].menge;
    // Falls der Lagerbestand kleiner ist als die Losgröße mache nichts..
      if (lagerbestand < losgroesse) {
        // ...ansonsten...
      } else {
        // nimm die Losgröße aus dem Lager (weil sie versandt wird). TODO SW: Was passiert wenn lagerbestand >= 2xLosgroesse?
        lagerbestand = lagerbestand - losgroesse;
        // Wert um die Losgröße aufzuteilen auf die Bestelltage
        let tempValue = losgroesse;
        // Iteriere von hinten durch das Werte Array
        for (let ii = wertArr.length - 1; tempValue > 0; ii--) {
          // Falls der Wert darin 0 ist mache nichts (Ware für den Tag wurde also schon vesandt)
          if (wertArr[ii] === 0) {
          // ... ansonsten ...
          } else {
            // Falls der der TempValue größer gleich dem Wert ist...
            if (tempValue >= wertArr[ii]) {
              // reduziere den tempValue um den Wert
              tempValue = tempValue - wertArr[ii];
              // Setze den Wert auf 0
              wertArr[ii] = 0;
              // Berechne wie lange die Verzögerung gedauert hat
              const verzoegerungDurchLosgroesse = ii - i;
              // TODO SW: Hier den Testwert löschen
              // tslint:disable-next-line:max-line-length
              // scInbound[ii].produktionsstartHersteller =  scInbound[ii].berechneStartBeimHersteller(scInbound[ii].startLkw1, verzoegerungDurchLosgroesse);
              scInbound[ii].produktionsstartHersteller =  scInbound[ii].berechneStartBeimHersteller(scInbound[ii].produktionsstartOem, verzoegerungDurchLosgroesse);
              // ... ansonsten ...
            } else {
              // Verringere den den Wert (Ein Teil der bestellten Menge für den Produktionstag wird verschickt)
              wertArr[ii] = wertArr[ii] - tempValue;
              // Setze tempValue auf 0 damit die Schleife beendet wird
              tempValue = 0;
            }
          }
        }
      }
    }
  }

  getScInboundSattel(): ScInboundSattel[] {
    return this.scInboundSattel;
  }

  getScInboundGabel(): ScInboundGabel[] {
    return this.scInboundGabel;
  }

  getScInboundRahmen(): ScInboundRahmen[] {
    return this.scInboundRahmen;
  }


}
