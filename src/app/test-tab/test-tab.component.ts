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
  value3 = this.value2 + this.value1;

  testArray: number[] = [100, 200, 300, 400, 500];

  losgroesse = 0;


  constructor(private fahrradService: FahrradService, public lieferdatenService: LieferdatenService) {

    this.fahrraeder = fahrradService.getFahrraeder();
    this.fahrrad = this.fahrraeder[0];
    this.fahrrad2 = this.fahrraeder[1];
  }

  ngOnInit() {

  }

  aendereLosgroesse() {
    this.value3 = this.value1 + this.value2;
  }

  berechne(index: number): number {

    let result = 0;

    for ( let i = index; i > 0; i--) {
      result = result + this.testArray[i];
    }
    return result;
  }

  berechne2(index: number): number {

    // let result = 0;

    for ( let i = index; i > 0; i--) {
      this.losgroesse = this.losgroesse + 1;
    }
    return this.losgroesse;
  }
}
