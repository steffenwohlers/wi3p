export class ProgrammplanungInput {

    public date: Date;

    constructor( month: number, public planning: number, public demand?: number ) {
        this.date = new Date();
        this.date.setFullYear(2017, month, 1);

        // Demand muss nicht mit angegeben werden, da häufig nicht klar am Anfang
        if ( !demand ) {
            this.demand = planning;
        }
    }
}
