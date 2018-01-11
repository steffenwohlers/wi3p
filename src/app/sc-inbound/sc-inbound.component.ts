import { Component, OnInit } from '@angular/core';
import { Produktionsplanung } from '../shared/produktionsplanung.model';
import { LieferdatenService } from '../shared/lieferdaten.service';
import { Lieferdaten } from '../shared/lieferdaten.model';
import { DatumService } from '../shared/datum.service';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';
import { Programmplanung } from '../shared/programmplanung.model';

import { ScInboundSattel } from '../shared/sc-inbound-sattel.model';
import { ScInboundGabel } from '../shared/sc-inbound-gabel.model';
import { ScInboundRahmen } from '../shared/sc-inbound-rahmen.model';
import { ProgrammplanungService } from '../shared/programmplanung.service';

@Component({
  selector: 'app-sc-inbound',
  templateUrl: './sc-inbound.component.html',
  styles: []
})
export class ScInboundComponent implements OnInit {

  scInboundSattel: ScInboundSattel[];
  scInboundGabel: ScInboundGabel[];
  scInboundRahmen: ScInboundRahmen[];
  startDatum: Date;

  lieferdatenSattel: Lieferdaten;
  lieferdatenGabel: Lieferdaten;
  lieferdatenRahmen: Lieferdaten;

  // tslint:disable-next-line:max-line-length
  constructor(private fahrradService: FahrradService, public scInboundService: ProgrammplanungService, private lieferdatenService: LieferdatenService) {

      this.scInboundSattel = scInboundService.getScInboundSattel();
      this.scInboundGabel = scInboundService.getScInboundGabel();
      this.scInboundRahmen = scInboundService.getScInboundRahmen();
      this.startDatum = Programmplanung.startDatum;
      this.lieferdatenSattel = this.lieferdatenService.lieferdatenSattel;
      this.lieferdatenGabel = this.lieferdatenService.lieferdatenGabel;
      this.lieferdatenRahmen = this.lieferdatenService.lieferdatenRahmen;
  }

  ngOnInit() {

  }



  /**
   * HILFSFUNKTIONEN
   */

  /**
   * Datum im Format  Day,  DD.MM.YYYY
   */
  datumAsString(date: Date): String {
    let result: string;

    switch (date.getDay()) {
      case 0 :
      result = 'Sonntag, ';
      break;

      case 1 :
      result = 'Montag, ';
      break;

      case 2 :
      result = 'Dienstag, ';
      break;

      case 3 :
      result = 'Mittwoch, ';
      break;

      case 4 :
      result = 'Donnerstag, ';
      break;

      case 5 :
      result = 'Freitag, ';
      break;

      case 6 :
      result = 'Samstag, ';
      break;

      default:
      result = 'falsch';
      console.log(date.getDate + '');
      break;
    }

    result = result + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    return result;

  }
}


