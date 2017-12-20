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

  value1 = 0;
  value2 = 0;
  losgroesse = this.value2 + this.value1;
  constructor(private fahrradService: FahrradService, public lieferdatenService: LieferdatenService) {

    this.fahrraeder = fahrradService.getFahrraeder();
    this.fahrrad = this.fahrraeder[0];
    this.fahrrad2 = this.fahrraeder[1];
  }

  ngOnInit() {

  }

  losgroesseErreicht(): boolean {
    let result: boolean;

    if (this.losgroesse >= 500) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }

}
