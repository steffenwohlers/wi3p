import { Component, OnInit } from '@angular/core';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradTeil } from '../shared/fahrrad-teil.model';
import { Programmplanung } from '../shared/programmplanung.model';
import { ProgrammplanungService } from '../shared/programmplanung.service';
import { FahrradTeilService } from '../shared/fahrrad-teil.service';


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

  constructor(fahrradService: FahrradService, programmplanungService: ProgrammplanungService, fahrradTeilService: FahrradTeilService) {

    this.fahrrad1 = fahrradService.getFahrrad(0);
    this.date1 = new Date(2017, 5, 3);
    this.programmplanung = programmplanungService.mtbTrail;
    this.teil = this.programmplanung.teile[0];




    console.log('----------------------------------------------------------------------');
    console.log('----------------------------------------------------------------------');
    console.log('----------------------------------------------------------------------');

    this.result = this.programmplanung.lieferungMoeglich(this.date1, this.teil);

    console.log(this.result);
  }
}
