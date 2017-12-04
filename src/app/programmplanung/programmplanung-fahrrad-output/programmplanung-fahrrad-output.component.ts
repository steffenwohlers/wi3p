import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';
import { ProgrammplanungInput } from '../../shared/programmplanung-input.model';

@Component({
  selector: 'app-programmplanung-fahrrad-output',
  templateUrl: './programmplanung-fahrrad-output.component.html',
  styles: []
})

export class ProgrammplanungFahrradOutputComponent implements OnInit {

  @Input() monatsInput: ProgrammplanungInput;

  constructor() { }

  ngOnInit() {
  }

}
