import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../shared/parameter.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styles: []
})
export class ParameterComponent implements OnInit {

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
  }

}
