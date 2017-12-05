export class ProgrammplanungInput {

    public date: Date;

    constructor( month: number, public planning: number, public demand: number ) {
        this.date = new Date();
        this.date.setFullYear(2017, month, 1);
    }
}
