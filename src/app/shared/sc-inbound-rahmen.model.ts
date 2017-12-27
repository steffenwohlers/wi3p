import { ScInbound } from './sc-inbound.model';
import { Produktionsplanung } from './produktionsplanung.model';
import { LieferdatenService } from './lieferdaten.service';

export class ScInboundRahmen extends ScInbound {

    startLkw: Date;

    constructor(private produktion: Produktionsplanung, lieferdatenS: LieferdatenService) {
        super(produktion, lieferdatenS);

        this.startLkw = this.berechneStartLkwFahrt(this.ankunftOEM);
        this.produktionsstartHersteller = this.berechneStartBeimHersteller(this.startLkw, 0);
    }

    private berechneStartLkwFahrt(date: Date) {
        return this.berechneStartFahrtArbeitstage(date, this.lieferdaten.supplychain[0].anzahl);
    }
}
