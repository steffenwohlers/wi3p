import { ProgrammplanungInput } from './programmplanung-input.model';

export class Fahrrad {
    constructor(public modell: string,
        public rahmen: string,
        public sattel: string,
        public gabel: string,
        public progammplanungInputArray: ProgrammplanungInput[] ) {}
}
