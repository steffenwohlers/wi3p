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
