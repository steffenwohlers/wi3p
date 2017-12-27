import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';
import { ScInboundService } from '../shared/sc-inbound.service';
import { ScInboundSattel } from '../shared/sc-inbound-sattel.model';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { log } from 'util';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {

  // Test1
  value1 = 0;
  value2 = 0;
  value3 = this.value2 + this.value1;

  // Test2
  scInboundSattel: ScInboundSattel[];
  tempArray: number[];
  tempArray2: number[];
  losgroesse: number;
  lagerbestandSattel: number;

  constructor(private scInboundService: ScInboundService) {

    // Test2
    this.scInboundSattel = scInboundService.getScInboundSattel();
    this.tempArray = new Array(this.scInboundSattel.length);
    this.tempArray2 = new Array(this.scInboundSattel.length);
    this.losgroesse = 200;
    this.lagerbestandSattel = 0;

  }

  ngOnInit() {
    this.berechneRueckwaerts();
    this.berechneLosgroesse();

  }

  aendereLosgroesse() {
    this.value3 = this.value1 + this.value2;
  }

  kloneArray(array: Array<ScInboundSattel>): Array<number> {
    const klon: Array<number> = new Array(array.length);
    for ( let i = 0; i < array.length; i++) {
      klon[i] = array[i].menge;
    }
    return klon;
  }

  xxx() {
    // Mengen-Werte des Datums zum Abgleich
    const wertArr = this.kloneArray(this.scInboundSattel);

    // Iteriere von hinten durch das Original-Array
    for (let i = this.scInboundSattel.length - 1; i >= 0; i--) {
      // Hersteller produziert die benötigte Menge und legt sie ins Lager
      this.lagerbestandSattel = + this.scInboundSattel[i].menge;
      // Falls der Lagerbestand kleiner ist als die Losgröße mache nichts..
      if (this.lagerbestandSattel < this.losgroesse) {

        // ...ansonsten...
      } else {
        // nimm die Losgröße aus dem Lager (weil sie versandt wird). TODO SW: Was passiert wenn lagerbestand >= 2xLosgroesse?
        this.lagerbestandSattel = - this.losgroesse;
        // Wert um die Losgröße aufzuteilen auf die Bestelltage
        let tempValue = this.losgroesse;
        // Iteriere von hinten durch das Werte Array
        for (let ii = wertArr.length - 1; tempValue > 0; ii--) {
          // Falls der Wert darin 0 ist mache nichts (Ware für den Tag wurde also schon vesandt)
          if (wertArr[ii] === 0) {

          // ... ansonsten ...
          } else {
            // Falls der der TempValue größer gleich dem Wert ist...
            if (tempValue >= wertArr[ii]) {
              // reduziere den tempValue um den Wert
              tempValue = - wertArr[ii];
              // Setze den Wert auf 0
              wertArr[ii] = 0;
              // Berechne wie lange die Verzögerung gedauert hat
              const verzoegerungDurchLosgroesse = ii - i;
              // Berechne das Datum für den Produktionstag
              this.scInboundSattel[ii].berechneStartBeimHersteller(this.scInboundSattel[ii].startLkw1, verzoegerungDurchLosgroesse);

              // ... ansonsten ...
            } else {
              // Verringere den den Wert (Ein Teil der bestellten Menge für den Produktionstag wird verschickt)
              wertArr[ii] = - tempValue;
              // Setze tempValue auf 0 damit die Schleife beendet wird
              tempValue = 0;
            }
          }
        }

      }
    }
  }

  berechneRueckwaerts() {
    let result = 0;
    for (let i = this.scInboundSattel.length - 1; i >= 0; i--) {
      result = result + this.scInboundSattel[i].menge;
      this.tempArray[i] = result;
    }
  }

  berechneLosgroesse() {
    let result = 0;

    for (let i = this.scInboundSattel.length - 1; i >= 0; i--) {
      // console.log('Vor Berechnung: ' + result);
      result = result + this.scInboundSattel[i].menge;
      // console.log('Nach Berechnung: ' + result);
      if (result < this.losgroesse) {
        this.tempArray2[i] = 0;
      // console.log('In if ' + result);
      } else {
        result = result - this.losgroesse;
        // console.log('In else ' + result);
        this.tempArray2[i] = result;
      }
    }

  }
}
