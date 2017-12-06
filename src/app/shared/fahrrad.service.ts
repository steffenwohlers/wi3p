import { Fahrrad } from '../shared/fahrrad.model';
import { ProgrammplanungInput } from './programmplanung-input.model';

export class FahrradService {
    private fahrraeder: Fahrrad[] = [
        new Fahrrad(
            'MTBAllrounder',
            'Aluminium 7005DB',
            'spark',
            'Fox32 F100',
            [
                new ProgrammplanungInput(0, 2220),
                new ProgrammplanungInput(1, 3330),
                new ProgrammplanungInput(2, 5550),
                new ProgrammplanungInput(3, 8880),
                new ProgrammplanungInput(4, 7770),
                new ProgrammplanungInput(5, 7215),
                new ProgrammplanungInput(6, 6660),
                new ProgrammplanungInput(7, 4995),
                new ProgrammplanungInput(8, 3330),
                new ProgrammplanungInput(9, 1665),
                new ProgrammplanungInput(10, 2220),
                new ProgrammplanungInput(11, 1665)

            ]
        ),
        new Fahrrad(
            'MTBCompetition',
            'Carbon Monocoque',
            'Speed line',
            'Fox Talas140',
            [
                new ProgrammplanungInput(0, 1110, 1110),
                new ProgrammplanungInput(1, 1665, 1665),
                new ProgrammplanungInput(2, 2775, 2775),
                new ProgrammplanungInput(3, 2, 2),
                new ProgrammplanungInput(4, 2, 2),
                new ProgrammplanungInput(5, 3, 3),
                new ProgrammplanungInput(6, 2, 2),
                new ProgrammplanungInput(7, 2, 2),
                new ProgrammplanungInput(8, 3, 3),
                new ProgrammplanungInput(9, 2, 2),
                new ProgrammplanungInput(10, 2, 2),
                new ProgrammplanungInput(11, 3, 3)
            ]
        ),
        new Fahrrad(
            'MTBDownhill',
            'Aluminium 7005TB',
            'Fizik Tundra',
            'Fox Talas140',
            [
                new ProgrammplanungInput(0, 740, 740),
                new ProgrammplanungInput(1, 1110, 1110),
                new ProgrammplanungInput(2, 1850, 1850),
                new ProgrammplanungInput(3, 2, 2),
                new ProgrammplanungInput(4, 2, 2),
                new ProgrammplanungInput(5, 3, 3),
                new ProgrammplanungInput(6, 2, 2),
                new ProgrammplanungInput(7, 2, 2),
                new ProgrammplanungInput(8, 3, 3),
                new ProgrammplanungInput(9, 2, 2),
                new ProgrammplanungInput(10, 2, 2),
                new ProgrammplanungInput(11, 3, 3)
            ]
        )
    ];

    getFahrraeder() {
        return this.fahrraeder;
    }

    getFahrrad(id: number) {
        return this.fahrraeder[id];
    }
}
