import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';

@Component({
  selector: 'app-programmplanung-test',
  templateUrl: './programmplanung-test.component.html',
  styles: []
})
export class ProgrammplanungTestComponent implements OnInit {

  @Input() fahrrad: Fahrrad;
  constructor() { }

  ngOnInit() {
  }

}
