import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { Produktionsplanung } from '../shared/produktionsplanung.model';

@Component({
  selector: 'app-produktionsplanung',
  templateUrl: './produktionsplanung.component.html',
  styles: []
})
export class ProduktionsplanungComponent implements OnInit {
  fahrraeder: Fahrrad[];

  constructor(private fahrradService: FahrradService) { }

  ngOnInit() {
    this.fahrraeder = this.fahrradService.getFahrraeder();
    console.log(this.fahrraeder);
  }

}
