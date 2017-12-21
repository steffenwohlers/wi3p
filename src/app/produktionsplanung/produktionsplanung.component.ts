import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produktionsplanung',
  templateUrl: './produktionsplanung.component.html',
  styles: []
})
export class ProduktionsplanungComponent implements OnInit {

  constructor() { }

  // TODO: MS: Den wochenweisen Input von der Programmplanung auf den Tag herunterrechnen

  // TODO: Wenn für einen Tag Nachfrage > Planung && isFrozenZone && habe nicht genug auf Lager -> zeige Fehler
  // TODO: Nicht genug auf Lager wenn durch hohe Losgröße noch Rücklage im Lager || Wert nur 10 % höher durch Puffer

  ngOnInit() {
  }

}
