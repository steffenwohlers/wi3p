import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';

@Component({
  selector: 'app-programmplanung-output',
  templateUrl: './programmplanung-output.component.html',
  styles: []
})

export class ProgrammplanungOutputComponent implements OnInit {

  @Input() fahrrad: Fahrrad;

  constructor() { }

  ngOnInit() {
  }

}
