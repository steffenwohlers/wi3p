import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';
import { ScInboundSattel } from '../shared/sc-inbound-sattel.model';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { log } from 'util';
import { FahrradTeilService } from '../shared/fahrrad-teil.service';
import { FahrradTeil } from '../shared/fahrrad-teil.model';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})

export class TestTabComponent {

  fahrradTeil1: FahrradTeil;
  bwert1: boolean;
  bwert2: boolean;

  datum1 = new Date(2017, 0, 1);
  datum2 = new Date(2017, 0, 2);
  datum3 = new Date(2017, 0, 1);


  constructor(fahrradTeilService: FahrradTeilService) {
    this.fahrradTeil1 = fahrradTeilService.getFahrradTeil('Aluminium 7005DB');
    console.log(this.fahrradTeil1.type);

  if (this.datum1.getTime() === this.datum2.getTime()) {
    this.bwert1 = true;
  } else {
    this.bwert1 = false;
  }

  if (this.datum1.getTime() === this.datum3.getTime()) {
    this.bwert2 = true;
  } else {
    this.bwert2 = false;
  }
  console.log(this.datum2.getTime());

  }

}
