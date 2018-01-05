import { Produktionsplanung } from './produktionsplanung.model';
import { Injectable } from '@angular/core';
import { FahrradService } from './fahrrad.service';
import { Fahrrad } from './fahrrad.model';
import { Programmplanung } from './programmplanung.model';

@Injectable()
export class ProduktionsplanungService {

    private fahrraeder: Fahrrad[];

    private sattel: Produktionsplanung[];
    private gabel: Produktionsplanung[];
    private rahmen: Produktionsplanung[];

    constructor(private fahrradService: FahrradService) {

        this.fahrraeder = this.fahrradService.getFahrraeder();

        this.sattel = new Array(this.fahrraeder[0].programmplanung.produktionsplanung.length);
        this.gabel = new Array(this.fahrraeder[0].programmplanung.produktionsplanung.length);
        this.rahmen = new Array(this.fahrraeder[0].programmplanung.produktionsplanung.length);


        // für jeden Fahrrad-Typ
        for (let i = 0; i < this.fahrraeder.length; i++) {

            // für jede Produktionsplanung
            for (let ii = 0; ii < this.fahrraeder[i].programmplanung.produktionsplanung.length; ii++) {

                // Speichere sie in das jeweilige Array
                this.sattel[ii] = this.fahrraeder[i].programmplanung.produktionsplanung[ii];
                this.gabel[ii] = this.fahrraeder[i].programmplanung.produktionsplanung[ii];
                this.rahmen[ii] = this.fahrraeder[i].programmplanung.produktionsplanung[ii];
            }
        }
    }

    public getSattel(): Produktionsplanung[] {
        return this.sattel;
    }

    public getGabel(): Produktionsplanung[] {
        return this.sattel;
    }

    public getRahmen(): Produktionsplanung[] {
        return this.sattel;
    }



}
