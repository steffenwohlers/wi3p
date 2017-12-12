import { Component, OnInit } from '@angular/core';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradService } from '../shared/fahrrad.service';

@Component({
  selector: 'app-programmplanung',
  templateUrl: './programmplanung.component.html',
  styles: []
})
export class ProgrammplanungComponent implements OnInit {
  fahrraeder: Fahrrad[];

  constructor(private fahrradService: FahrradService) { }

  ngOnInit() {
    this.fahrraeder = this.fahrradService.getFahrraeder();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
