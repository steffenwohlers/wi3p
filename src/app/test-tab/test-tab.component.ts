import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {
  fahrraeder: Fahrrad[];
  fahrrad: Fahrrad;

    constructor(private fahrradService: FahrradService) { }

    ngOnInit() {
      this.fahrraeder = this.fahrradService.getFahrraeder();

      this.fahrrad = this.fahrraeder[0];
    }

}
