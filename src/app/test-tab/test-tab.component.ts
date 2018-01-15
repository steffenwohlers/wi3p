import { Component, OnInit } from '@angular/core';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradTeil } from '../shared/fahrrad-teil.model';
import { Programmplanung } from '../shared/programmplanung.model';
import { ProgrammplanungService } from '../shared/programmplanung.service';
import { FahrradTeilService } from '../shared/fahrrad-teil.service';
import { loadavg } from 'os';


@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})

export class TestTabComponent {

  fahrrad1: Fahrrad;
  date1: Date;
  fahrradTeil: FahrradTeil;
  result: boolean;
  programmplanung: Programmplanung;
  teil: FahrradTeil;
  teile: FahrradTeil[];

  constructor(fahrradService: FahrradService, programmplanungService: ProgrammplanungService, fahrradTeilService: FahrradTeilService) {

    this.programmplanung = programmplanungService.mtbTrail;
    this.teile = this.programmplanung.teile;
    this.teil = this.programmplanung.teile[0];

    console.log('----------------------------------------------------------------------');
    console.log('----------------------------------------------------------------------');
    console.log('----------------------------------------------------------------------');
    console.log(programmplanungService.nachbestellungGabel);

  }
}
