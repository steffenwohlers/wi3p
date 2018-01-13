import { FahrradTeil } from './fahrrad-teil.model';



export class Produktionsplanung {


    constructor(
        public datum: Date,
        // public fahrradTeile: FahrradTeil,
        public planned: number,
        public real: number,
        public rueckstand: number

    ) {

    }
}
