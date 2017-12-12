export class Programmplanung {

    public planning: [number];
    public demand: [number];


    constructor( planning: [number] ) {
        // Der erwartete Wert wird natürlich auch bei Demand angenommen zuerst
        this.planning = planning;
        this.demand = Object.assign([], planning); // Kopie statt Referenzkopie
    }

    public getDiff() {
        const result = Object.assign([], this.planning);

        for (let i = 0; i < result.length; ++i) {
            result[i] -= this.demand[i];
        }

        return result;
    }

    // TODO MS: Ausgabe mit Gettern in Tages + Monatsweise, Berechnung über ExtendedDate

    /*
        Dazu gibt es einen Getter bei dem man ein Startdatum auswählen kann, sonst wird der 1.1. genommen
        Dann wird genau gerechnet für jeden Monat wie es aussieht, runter auf jeden Tag und als Array
        [
            [
                Tag1Output,
                Tag2Output
            ],
            Monat2,
            Monat 3
        ]
    */
}
