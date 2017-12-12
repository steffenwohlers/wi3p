import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { LieferdatenService } from '../shared/lieferdaten.service';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {

  fahrraeder: Fahrrad[];
  fahrrad: Fahrrad;
  fahrrad2: Fahrrad;

    constructor(private fahrradService: FahrradService, public lieferdatenService: LieferdatenService) {

      this.fahrraeder = fahrradService.getFahrraeder();
      this.fahrrad = this.fahrraeder[0];
      this.fahrrad2 = this.fahrraeder[1];
     }

    ngOnInit() {

    }

}
