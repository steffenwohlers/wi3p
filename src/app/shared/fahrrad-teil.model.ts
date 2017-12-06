import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';


export class FahrradTeil {

    // TODO: Hier müssen noch Daten zum Lieferanten & Co implementiert werden

    constructor(
        public name: string,
        public type: FahrradTeilTyp
    ) { }
}
