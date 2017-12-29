import { Component, OnInit } from '@angular/core';
import { ScInboundService } from '../shared/sc-inbound.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private scInboundService: ScInboundService) { }

  ngOnInit() {
  }

  berechneScInboundService() {
    this.scInboundService.berechne();
  }

}
