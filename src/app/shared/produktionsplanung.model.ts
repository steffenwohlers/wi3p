export class Produktionsplanung {

    public realOutput: number;
    public needToOrder = false;
    public notAvailable = false;

    constructor(public datum: Date, public menge: number, public teile) {

        const maxOutput = [];
        let needToOrder = false;
        let notAvailable = false;
        // Iteriere durch Teile dieses Fahrrads
        this.teile.forEach(teil => {
            // Frage im FahrradTeilService, ob noch "menge" im Lager ist?
            if (teil.lagerbestand < this.menge) {
                // if (nochLieferBar()) {
                /*    maxOutput.push(this.menge);
                    needToOrder = true;
                } else {
                    maxOutput.push(teil.lagerbestand);
                    notAvailable = true;
                }*/

                // Vorläufig:
                maxOutput.push(this.menge);
            } else {
                maxOutput.push(this.menge);
            }
        });

        const output = this.min(maxOutput);

        if (notAvailable) {
            this.notAvailable = true;
        } else if (needToOrder) {
            this.needToOrder = true;
        }

        this.teile.forEach(teil => {
            teil.lagerbestand -= output;
        });

        this.realOutput = output;

        // Wenn ja, entnehme aus Lager und setze "realOutput" auf "menge"
        // Wenn nein, entnehme Maximum aus Lager. Frage SC Inbound, ob dieses Teil bis "datum" lieferbar ist?
        // Wenn ja, setze realOutput auf "menge" und needToOrder auf true
        // Wenn nein, setze realOutput auf Maximum und notAvailable auf true 
    }

    private min(arr): number {
        let min;
        arr.forEach(elem => {
            if (elem < min || min == null) {
                min = elem;
            }
        });
        return min;
    }
}
