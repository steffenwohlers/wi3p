import { Component, OnInit } from '@angular/core';
import { ProgrammplanungService } from '../shared/programmplanung.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private scInboundService: ProgrammplanungService) { }

  ngOnInit() {
  }

  berechneScInboundService() {
    this.scInboundService.berechne();
  }

}
