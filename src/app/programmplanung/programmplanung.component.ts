import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';
import { Programmplanung } from '../shared/programmplanung.model';

@Component({
  selector: 'app-programmplanung',
  templateUrl: './programmplanung.component.html',
  styles: []
})
export class ProgrammplanungComponent implements OnInit {
  fahrraeder: Fahrrad[];

  constructor(private fahrradService: FahrradService) {
    Programmplanung.setStartDatum(new Date(2017, 0, 2));
  }

  ngOnInit() {
    this.fahrraeder = this.fahrradService.getFahrraeder();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  // Wenn ein neues Datum eingestellt wird, muss anschließend die Programmplanung neu berechnet werden
  saveStartdate(startDate: Date) {
    Programmplanung.setStartDatum(startDate);
    this.fahrraeder.forEach(fahrrad => {
      fahrrad.programmplanung.calculateOutput();
    });
  }

  public getStartDate(): Date {
    return Programmplanung.startDatum;
  }

}
