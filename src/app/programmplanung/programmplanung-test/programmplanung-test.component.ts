import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-programmplanung-test',
  templateUrl: './programmplanung-test.component.html',
  styles: []
})
export class ProgrammplanungTestComponent implements OnInit {

  @Input() fahrrad: Fahrrad;
  oldFahrrad: Fahrrad;
  constructor() { }

  ngOnInit() {
    this.oldFahrrad = this.fahrrad;
    }

  onChange(form: NgForm) {
    this.fahrrad.progammplanungInputArray[0].planning = form.value.fahrradProgammplanungInputArray0Planning;
    this.fahrrad.progammplanungInputArray[1].planning = form.value.fahrradProgammplanungInputArray1Planning;
    this.fahrrad.progammplanungInputArray[2].planning = form.value.fahrradProgammplanungInputArray2Planning;

    this.fahrrad.progammplanungInputArray[0].demand = form.value.fahrradProgammplanungInputArray0Demand;
    this.fahrrad.progammplanungInputArray[1].demand = form.value.fahrradProgammplanungInputArray1Demand;
    this.fahrrad.progammplanungInputArray[2].demand = form.value.fahrradProgammplanungInputArray2Demand;

    this.oldFahrrad = this.fahrrad;
  }
}
