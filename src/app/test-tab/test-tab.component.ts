import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styles: []
})
export class TestTabComponent implements OnInit {
  wochen = 52;

  constructor() { }

  ngOnInit() {
  }

}
