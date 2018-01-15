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
        const tempDate = this.berechneStartFahrtKalendertage(date, this.lieferdaten.supplychain[1].anzahl);
        console.log(tempDate.getDay());

        let day = tempDate.getDay();

        // while (!(day === (3 || 5))) {
        //     tempDate.setDate(tempDate.getDate() - 1);
        //     day = tempDate.getDay();
        // }

        if (day === 3 || day === 5) {
            return tempDate;
        } else {
            if ((day > 5) || (day < 3))  {
                while (!(day === 5)) {
                    tempDate.setDate(tempDate.getDate() - 1);
                    day = tempDate.getDay();
                }
                return tempDate;
            } else {
                while (!(day === 3)) {
                    tempDate.setDate(tempDate.getDate() - 1);
                    day = tempDate.getDay();
                }
                return tempDate;
            }

        }
    }

    private berechneStartLkwFahrt1(date: Date) {
        return this.berechneStartFahrtArbeitstage(date, this.lieferdaten.supplychain[0].anzahl);
    }

    private berechneStartLkwFahrt2(date: Date) {
        return this.berechneStartFahrtArbeitstage(date, this.lieferdaten.supplychain[2].anzahl);
    }

    ersterTransport(): Date {
        return this.startLkw1;
    }
}
