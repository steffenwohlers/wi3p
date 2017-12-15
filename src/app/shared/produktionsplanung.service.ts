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

    public getSattel(): Produktionsplanung[] {
        return this.sattel;
    }
}
