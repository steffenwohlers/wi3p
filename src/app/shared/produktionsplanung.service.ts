import { Produktionsplanung } from './produktionsplanung.model';

export class ProduktionsplanungService {
    private sattel: Produktionsplanung[] = [
        new Produktionsplanung( new Date(2017, 0, 1), 100),
        new Produktionsplanung( new Date(2017, 0, 2), 90),
        new Produktionsplanung( new Date(2017, 0, 3), 80),
        new Produktionsplanung( new Date(2017, 0, 4), 110),
        new Produktionsplanung( new Date(2017, 0, 5), 100),
        new Produktionsplanung( new Date(2017, 0, 6), 95),
    ];

    public getSattel(): Produktionsplanung[] {
        return this.sattel;
    }
}
