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

  // TODO: MS: Den wochenweisen Input von der Programmplanung auf den Tag herunterrechnen

  // TODO: Wenn für einen Tag Nachfrage > Planung && isFrozenZone && habe nicht genug auf Lager -> zeige Fehler
  // TODO: Nicht genug auf Lager wenn durch hohe Losgröße noch Rücklage im Lager || Wert nur 10 % höher durch Puffer

  ngOnInit() {
    this.fahrraeder = this.fahrradService.getFahrraeder();
    console.log(this.fahrraeder);
  }

}
