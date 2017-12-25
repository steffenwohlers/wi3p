import { ScInboundSattel } from './sc-inbound-sattel.model';
import { ProduktionsplanungService } from './produktionsplanung.service';
import { FahrradService } from './fahrrad.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ScInboundService {

    sattel: ScInboundSattel[] = new Array<ScInboundSattel>();

    constructor(produktionsplanungService: ProduktionsplanungService, private fahrradService: FahrradService) {
        const produktionsplanungSattel = produktionsplanungService.getSattel();

        for (let i = 0; i < produktionsplanungSattel.length; i++) {

            this.sattel[i] = new ScInboundSattel(produktionsplanungSattel[i], fahrradService);
        }
    }

    getScInboundSattel(): ScInboundSattel[] {
        return this.sattel;
    }
}
