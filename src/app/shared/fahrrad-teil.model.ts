import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';
import { Lieferdaten } from './lieferdaten.model';


export class FahrradTeil {

    constructor(
        public name: string,
        public type: FahrradTeilTyp,
        public lieferdaten: Lieferdaten
    ) { }
}
