import { ProgrammplanungInput } from './programmplanung-input.model';
import { FahrradTeil } from './fahrrad-teil.model';

export class Fahrrad {
    constructor(public modell: string,
        public rahmen: String,
        public sattel: String,
        public gabel: String,
        public progammplanungInputArray: ProgrammplanungInput[] ) {}
}
