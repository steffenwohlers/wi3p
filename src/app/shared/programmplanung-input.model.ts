export class ProgrammplanungInput {

    public changes: number;
    public date: Date;

    constructor( month: number, public planning: number, public demand: number ) {
        this.changes = this.planning - this.demand;
        this.date = new Date();
        this.date.setFullYear(2017, month, 1);
    }
}
