import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';
import { Lieferdaten } from './lieferdaten.model';


export class FahrradTeil {

    // TODO: Hier müssen noch Daten zum Lieferanten & Co implementiert werden

    constructor(
        public name: string,
        public type: FahrradTeilTyp,
        public lieferdaten: Lieferdaten
    ) { }
}
