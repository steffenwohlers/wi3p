import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {
  date: Date = new Date();
  weeks: number[];

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
