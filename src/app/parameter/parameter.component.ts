import { Component, OnInit } from '@angular/core';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';
import { ProduktionskapazitaetenService } from '../shared/produktionskapazitaeten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styles: []
})
export class ParameterComponent implements OnInit {
  lieferdatenSattel: Lieferdaten;
  lieferdatenGabel: Lieferdaten;
  lieferdatenRahmen: Lieferdaten;


  constructor(private lieferdatenService: LieferdatenService, public produktionskapazitaetenService: ProduktionskapazitaetenService) { }

  ngOnInit() {
    this.lieferdatenSattel = this.lieferdatenService.lieferdatenSattel;
    this.lieferdatenGabel = this.lieferdatenService.lieferdatenGabel;
    this.lieferdatenRahmen = this.lieferdatenService.lieferdatenRahmen;
  }

  add(value: number): number {
    value += 1;

    return value;
  }

}
