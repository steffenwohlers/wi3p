import { Produktionsplanung } from './produktionsplanung.model';
import { DatumService } from './datum.service';
import { Lieferdaten } from './lieferdaten.model';
import { LieferdatenService } from './lieferdaten.service';
import { ScInbound } from './sc-inbound.model';

export class ScInboundSattel extends ScInbound {

    startLkw1: Date;
    startSchiff: Date;
    startLkw2: Date;

    constructor(private produktion: Produktionsplanung, private lieferdatenS: LieferdatenService ) {
        super(produktion, lieferdatenS );

        this.startLkw2 = this.berechneStartLkwFahrt2(this.ankunftOEM);
        this.startSchiff = this.berechneStartSchiffFahrt(this.startLkw2);
        this.startLkw1 = this.berechneStartLkwFahrt1(this.startSchiff);
        this.produktionsstartHersteller = this.berechneStartBeimHersteller(this.startLkw1, 0);

    }

    private berechneStartSchiffFahrt(date: Date) {
        return this.berechneStartFahrtKalendertage(date, this.lieferdaten.supplychain[1].anzahl);
    }

    private berechneStartLkwFahrt1(date: Date) {
        return this.berechneStartFahrtArbeitstage(date, this.lieferdaten.supplychain[0].anzahl);
    }

    private berechneStartLkwFahrt2(date: Date) {
        return this.berechneStartFahrtArbeitstage(date, this.lieferdaten.supplychain[2].anzahl);
    }
}
