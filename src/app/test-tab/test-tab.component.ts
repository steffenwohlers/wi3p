import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {

  value1 = 0;
  value2 = 0;
  value3 = this.value2 + this.value1;

  fahrrad: Fahrrad;
  lieferdatenSattel: Lieferdaten;

  constructor(private fahrradService: FahrradService, public lieferdatenService: LieferdatenService) {
    this.fahrrad = fahrradService.getFahrrad(0);
    this.lieferdatenSattel = lieferdatenService.lieferdatenSattel;
  }

  ngOnInit() {

  }

  aendereLosgroesse() {
    this.value3 = this.value1 + this.value2;
  }
}
