import { ProgrammplanungInput } from './programmplanung-input.model';
import { FahrradTeil } from './fahrrad-teil.model';
import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';

export class Fahrrad {
    constructor(public modell: string,
        public rahmen: FahrradTeil,
        public sattel: FahrradTeil,
        public gabel: FahrradTeil,
        public progammplanungInputArray: ProgrammplanungInput[] ) {}
}
