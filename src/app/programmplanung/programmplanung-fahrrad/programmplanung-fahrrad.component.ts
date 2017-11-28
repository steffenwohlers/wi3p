import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';

@Component({
  selector: 'app-programmplanung-fahrrad',
  templateUrl: './programmplanung-fahrrad.component.html',
  styles: []
})
export class ProgrammplanungFahrradComponent implements OnInit {
  @Input() fahrrad: Fahrrad;

  constructor() { }

  ngOnInit() {
  }

}
