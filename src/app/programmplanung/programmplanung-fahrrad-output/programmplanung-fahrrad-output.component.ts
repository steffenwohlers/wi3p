import { Component, OnInit, Input } from '@angular/core';
import { Fahrrad } from '../../shared/fahrrad.model';
import { ProgrammplanungInput } from '../../shared/programmplanung-input.model';
import { ActivatedRoute } from '@angular/router';
import { ProgrammplanungOutput } from '../../shared/programmplanung-output.model';
import { FahrradService } from '../../shared/fahrrad.service';

@Component({
  selector: 'app-programmplanung-fahrrad-output',
  templateUrl: './programmplanung-fahrrad-output.component.html',
  styles: []
})

export class ProgrammplanungFahrradOutputComponent implements OnInit {

  selectedProgrammplanungOutput:  ProgrammplanungOutput;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fahrradService: FahrradService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      // params => this.selectedProgrammplanungOutput = this.fahrradService.getFahrrad(+params['id']);
    );
  }

}
