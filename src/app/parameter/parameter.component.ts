import { Component, OnInit } from '@angular/core';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';
import { ProduktionskapazitaetenService } from '../shared/produktionskapazitaeten.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styles: []
})
export class ParameterComponent implements OnInit {
  fahrrad: Fahrrad;

  constructor(private fahrradService: FahrradService, public produktionskapazitaetenService: ProduktionskapazitaetenService) { }

  ngOnInit() {
    this.fahrrad = this.fahrradService.getFahrrad(0);
    console.log(this.fahrrad.gabel.lieferdaten.vorlaufzeit);
  }

}
