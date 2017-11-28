export class ProgrammplanungInput {

    public changes: number;

    constructor(public month: number, public planning: number, public demand: number ) {
        this.changes = this.planning - this.demand;
    }
}
