import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';

@Component({
  selector: 'app-stueckliste-item',
  templateUrl: './stueckliste-item.component.html',
  styles: []
})
export class StuecklisteItemComponent implements OnInit {
  @Input() fahrrad: Fahrrad;

  // TODO SW: Änderung, dass die Stückliste auch korrekt angezeigt ja

  constructor() { }

  ngOnInit() {
    console.log(this.fahrrad);
  }

}
