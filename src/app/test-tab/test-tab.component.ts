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
export class TestTabComponent {

  // Test1
  value1 = 0;
  value2 = 0;
  value3 = this.value2 + this.value1;

  // Test 2
  date1: Date;
  date2: Date;

  constructor(private scInboundService: ScInboundService) {
    this.date1 = new Date(2017, 0, 1);
    this.date2 = new Date(2017, 0, 2);

  }

  addiere() {
    this.value3 = this.value1 + this.value2;
  }
}
