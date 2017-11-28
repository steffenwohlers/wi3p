import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-programmplanung-input',
  templateUrl: './programmplanung-input.component.html',
  styles: []
})
export class ProgrammplanungInputComponent implements OnInit {

  @Input() fahrrad: Fahrrad;

  constructor() { }

  ngOnInit() {

    }

  onChange(form: NgForm) {


  }
}
