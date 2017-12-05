import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgrammplanungInput } from '../../shared/programmplanung-input.model';

@Component({
  selector: 'app-programmplanung-fahrrad-input',
  templateUrl: './programmplanung-fahrrad-input.component.html',
  styles: []
})
export class ProgrammplanungInputFahrradComponent implements OnInit {

  @Input() programmplanungInput: ProgrammplanungInput;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onOutput() {
    this.router.navigate(['/programmplanung', 'output']);
  }

}
