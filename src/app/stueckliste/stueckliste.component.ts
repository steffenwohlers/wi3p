import { Component, OnInit } from '@angular/core';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';

@Component({
  selector: 'app-stueckliste',
  templateUrl: './stueckliste.component.html',
  styles: []
})
export class StuecklisteComponent implements OnInit {
  fahrraeder: Fahrrad[];

  constructor(private fahrradService: FahrradService) { }

  ngOnInit() {
    this.fahrraeder = this.fahrradService.getFahrraeder();
  }

}
