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
                new ProgrammplanungInput(0, 2220, 2220),
                new ProgrammplanungInput(1, 3330, 3330),
                new ProgrammplanungInput(2, 5550, 5550),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3)

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
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3)
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
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3),
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 3)
            ]
        )
    ];

    getFahrraeder() {
        return this.fahrraeder;
    }
}