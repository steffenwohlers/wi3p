import { Component, OnInit } from '@angular/core';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styles: []
})
export class ParameterComponent implements OnInit {
  fahrrad: Fahrrad;

  constructor(private fahrradService: FahrradService) { }

  ngOnInit() {
    this.fahrrad = this.fahrradService.getFahrrad(0);
    console.log(this.fahrrad.gabel.lieferdaten.vorlaufzeit);
  }

}
