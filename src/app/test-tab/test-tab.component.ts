import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { ExtendedDate } from '../shared/extendedDate.model';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {
  weeks: number[];

  date: Date = new Date(2017, 1, 1);
  extendedDate: ExtendedDate = new ExtendedDate(this.date);


  fahrraeder: Fahrrad[];
  fahrrad: Fahrrad;

    constructor(private fahrradService: FahrradService) {
      this.weeks = Array(52).fill(0).map((x, i) => i);
      this.fahrraeder = fahrradService.getFahrraeder();
      this.fahrrad = this.fahrraeder[0];
     }

    ngOnInit() {

    }

}
