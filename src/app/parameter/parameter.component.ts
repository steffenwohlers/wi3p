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

  public static lieferzeitSattel = 49;
  public static lieferzeitGabel = 14;
  public static lieferzeitRahmen = 7;

  lieferdatenSattel: Lieferdaten;
  lieferdatenGabel: Lieferdaten;
  lieferdatenRahmen: Lieferdaten;

  constructor(private lieferdatenService: LieferdatenService, public produktionskapazitaetenService: ProduktionskapazitaetenService) { }

  ngOnInit() {
    this.lieferdatenSattel = this.lieferdatenService.lieferdatenSattel;
    this.lieferdatenGabel = this.lieferdatenService.lieferdatenGabel;
    this.lieferdatenRahmen = this.lieferdatenService.lieferdatenRahmen;

    ParameterComponent.lieferzeitSattel = this.lieferdatenSattel.vorlaufzeit.anzahl;
    ParameterComponent.lieferzeitGabel = this.lieferdatenGabel.vorlaufzeit.anzahl;
    ParameterComponent.lieferzeitRahmen = this.lieferdatenRahmen.vorlaufzeit.anzahl;
  }

  setSattelVorlaufzeit() {
    ParameterComponent.lieferzeitSattel = this.lieferdatenSattel.vorlaufzeit.anzahl;
    console.log(ParameterComponent.lieferzeitSattel);
  }

  setGabelVorlaufzeit() {
    ParameterComponent.lieferzeitGabel = this.lieferdatenGabel.vorlaufzeit.anzahl;
    console.log(ParameterComponent.lieferzeitGabel);
  }

  setRahmenVorlaufzeit() {
    ParameterComponent.lieferzeitRahmen = this.lieferdatenRahmen.vorlaufzeit.anzahl;
    console.log(ParameterComponent.lieferzeitRahmen);
  }

  add(value: number): number {
    value += 1;

    return value;
  }

}
