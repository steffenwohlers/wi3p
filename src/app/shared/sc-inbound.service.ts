import { ScInboundSattel } from './sc-inbound-sattel.model';
import { ProduktionsplanungService } from './produktionsplanung.service';
import { FahrradService } from './fahrrad.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ScInboundService implements OnInit {


    scInboundSattel: ScInboundSattel[] = new Array<ScInboundSattel>();
    lagerbestandSattel: number;
    losgroesse: number;

    constructor(produktionsplanungService: ProduktionsplanungService, private fahrradService: FahrradService) {
        const produktionsplanungSattel = produktionsplanungService.getSattel();
        this.lagerbestandSattel = 0;

        // TODO SW: Hier die richtige Losgröße wieder verwenden
        this.losgroesse = 200;
        // this.losgroesse = fahrradService.getFahrrad(0).sattel.lieferdaten.losgroesse;


        for (let i = 0; i < produktionsplanungSattel.length; i++) {

            this.scInboundSattel[i] = new ScInboundSattel(produktionsplanungSattel[i], fahrradService);
        }
        this.beachteLosgroesseHersteller();
    }

    ngOnInit() {
    }


    kloneArray(array: Array<ScInboundSattel>): Array<number> {
        const klon: Array<number> = new Array(array.length);
        for ( let i = 0; i < array.length; i++) {
          klon[i] = array[i].menge;
        }
        return klon;
      }


    beachteLosgroesseHersteller() {
        console.log('In beachteLosgroesseHersteller');
        // Mengen-Werte des Datums zum Abgleich
        const wertArr = this.kloneArray(this.scInboundSattel);
        console.log('Vor erster Schleife');
        // Iteriere von hinten durch das Original-Array
        for (let i = this.scInboundSattel.length - 1; i >= 0; i--) {
          // Hersteller produziert die benötigte Menge und legt sie ins Lager
          this.lagerbestandSattel = this.lagerbestandSattel + this.scInboundSattel[i].menge;
          console.log(i + '. Iteration. Nach Lagerbestand = ' + this.lagerbestandSattel);
          // Falls der Lagerbestand kleiner ist als die Losgröße mache nichts..
          if (this.lagerbestandSattel < this.losgroesse) {

            // ...ansonsten...
          } else {
            // nimm die Losgröße aus dem Lager (weil sie versandt wird). TODO SW: Was passiert wenn lagerbestand >= 2xLosgroesse?
            console.log('in else');
            this.lagerbestandSattel = this.lagerbestandSattel - this.losgroesse;
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
                  tempValue = tempValue - wertArr[ii];
                  // Setze den Wert auf 0
                  wertArr[ii] = 0;
                  // Berechne wie lange die Verzögerung gedauert hat
                  const verzoegerungDurchLosgroesse = ii - i;
                  // Berechne das Datum für den Produktionstag

                  console.log('-----');
                  console.log(this.scInboundSattel[ii].produktionsstartHersteller);
                  // TODO SW: Hier den Testwert löschen
                  // tslint:disable-next-line:max-line-length
                  // this.scInboundSattel[ii].produktionsstartHersteller =  this.scInboundSattel[ii].berechneStartBeimHersteller(this.scInboundSattel[ii].startLkw1, verzoegerungDurchLosgroesse);
                  this.scInboundSattel[ii].produktionsstartHersteller =  this.scInboundSattel[ii].berechneStartBeimHersteller(this.scInboundSattel[ii].produktionsstartOem, verzoegerungDurchLosgroesse);
                  console.log(this.scInboundSattel[ii].produktionsstartHersteller);

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
}
