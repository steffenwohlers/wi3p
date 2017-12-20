import { Produktionsplanung } from './produktionsplanung.model';

export class ProduktionsplanungService {
    private sattel: Produktionsplanung[] = [
        new Produktionsplanung( new Date(2017, 6, 1), 100),
        new Produktionsplanung( new Date(2017, 6, 2), 90),
        new Produktionsplanung( new Date(2017, 6, 3), 80),
        new Produktionsplanung( new Date(2017, 6, 4), 110),
        new Produktionsplanung( new Date(2017, 6, 5), 100),
        new Produktionsplanung( new Date(2017, 6, 6), 95),
    ];

    private gabel: Produktionsplanung[] = [
        new Produktionsplanung( new Date(2017, 6, 1), 30),
        new Produktionsplanung( new Date(2017, 6, 2), 60),
        new Produktionsplanung( new Date(2017, 6, 3), 50),
        new Produktionsplanung( new Date(2017, 6, 4), 200),
        new Produktionsplanung( new Date(2017, 6, 5), 90),
        new Produktionsplanung( new Date(2017, 6, 6), 50),
    ];

    private rahmen: Produktionsplanung[] = [
        new Produktionsplanung( new Date(2017, 6, 1), 60),
        new Produktionsplanung( new Date(2017, 6, 2), 90),
        new Produktionsplanung( new Date(2017, 6, 3), 80),
        new Produktionsplanung( new Date(2017, 6, 4), 100),
        new Produktionsplanung( new Date(2017, 6, 5), 90),
        new Produktionsplanung( new Date(2017, 6, 6), 70),
    ];

    public getSattel(): Produktionsplanung[] {
        return this.sattel;
    }

    public getGabel(): Produktionsplanung[] {
        return this.sattel;
    }

    public getRahmen(): Produktionsplanung[] {
        return this.sattel;
    }



}
