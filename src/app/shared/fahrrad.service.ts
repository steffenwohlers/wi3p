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
                new ProgrammplanungInput(0, 2, 2),
                new ProgrammplanungInput(1, 2, 2),
                new ProgrammplanungInput(2, 3, 2)
            ]
        )
    ];

    getFahrraeder() {
        return this.fahrraeder;
    }
}
