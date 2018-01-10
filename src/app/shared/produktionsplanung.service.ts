import { Produktionsplanung } from './produktionsplanung.model';
import { Injectable } from '@angular/core';
import { FahrradService } from './fahrrad.service';
import { Fahrrad } from './fahrrad.model';
import { Programmplanung } from './programmplanung.model';
import { ProgrammplanungService } from './programmplanung.service';

@Injectable()
export class ProduktionsplanungService {

    private fahrraeder: Fahrrad[];

    private programmplanung: Programmplanung[];

    private sattel: Produktionsplanung[];
    private gabel: Produktionsplanung[];
    private rahmen: Produktionsplanung[];

    constructor(private programmplanungService: ProgrammplanungService) {

        this.programmplanung = programmplanungService.programmplanungArray;

        this.sattel = new Array(this.programmplanung[0].produktionsplanung.length);
        this.gabel = new Array(this.programmplanung[0].produktionsplanung.length);
        this.rahmen = new Array(this.programmplanung[0].produktionsplanung.length);


        this.sattel = new Array(this.fahrraeder[0].programmplanung.produktionsplanung.length);
        this.gabel = new Array(this.fahrraeder[0].programmplanung.produktionsplanung.length);
        this.rahmen = new Array(this.fahrraeder[0].programmplanung.produktionsplanung.length);


        // für jeden Fahrrad-Typ
        for (let i = 0; i < this.programmplanung.length; i++) {

            // für jede Produktionsplanung
            for (let ii = 0; ii < this.programmplanung[i].produktionsplanung.length; ii++) {

                // Speichere sie in das jeweilige Array
                this.sattel[ii] = this.programmplanung[i].produktionsplanung[ii];
                this.gabel[ii] = this.programmplanung[i].produktionsplanung[ii];
                this.rahmen[ii] = this.programmplanung[i].produktionsplanung[ii];
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
