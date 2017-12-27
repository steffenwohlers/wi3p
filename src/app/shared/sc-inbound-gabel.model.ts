import { Lieferdaten } from './lieferdaten.model';
import { LieferdatenService } from './lieferdaten.service';

import { Produktionsplanung } from './produktionsplanung.model';
import { DatumService } from './datum.service';
import { ScInbound } from './sc-inbound.model';

export class ScInboundGabel extends ScInbound {

    startZug: Date;

    constructor(private produktion: Produktionsplanung, lieferdatenS: LieferdatenService) {
        super(produktion, lieferdatenS);

        this.startZug = this.berechneStartZugFahrt(this.ankunftOEM);
        this.produktionsstartHersteller = this.berechneStartBeimHersteller(this.startZug, 0);
    }

    private berechneStartZugFahrt(date: Date) {
        return this.berechneStartFahrtKalendertage(date, this.lieferdaten.supplychain[0].anzahl);
    }
}
