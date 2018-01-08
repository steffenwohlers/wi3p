import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';
import { ScInboundService } from '../shared/sc-inbound.service';
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


  constructor(fahrradTeilService: FahrradTeilService) {
    this.fahrradTeil1 = fahrradTeilService.getFahrradTeil('Aluminium 7005DB');

  }

}
