import { Component, OnInit } from '@angular/core';
import { LieferdatenService } from '../shared/lieferdaten.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styles: []
})
export class ParameterComponent implements OnInit {

  constructor(public lieferdatenService: LieferdatenService) { }

  ngOnInit() {
  }

}
