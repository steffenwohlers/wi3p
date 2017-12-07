import { Fahrrad } from '../shared/fahrrad.model';
import { ProgrammplanungInput } from './programmplanung-input.model';
import { FahrradTeilService } from './fahrrad-teil.service';
import { FahrradTeil } from './fahrrad-teil.model';

export class FahrradService {

    private fahrradTeilService: FahrradTeilService = new FahrradTeilService();

    private fahrraeder: Fahrrad[] = [
        new Fahrrad(
            'MTBAllrounder',
            // 'Aluminium 7005DB',
            // 'Spark',
            // 'Fox32 F100',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
            this.fahrradTeilService.getFahrradTeil('Spark'),
            this.fahrradTeilService.getFahrradTeil('Fox32 F100'),

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
            // 'Carbon Monocoque',
            // 'Speed line',
            // 'Fox Talas140',
            this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
            this.fahrradTeilService.getFahrradTeil('Speed line'),
            this.fahrradTeilService.getFahrradTeil('Fox Talas140'),

            [
                new ProgrammplanungInput(0, 1110),
                new ProgrammplanungInput(1, 1665),
                new ProgrammplanungInput(2, 2775),
                new ProgrammplanungInput(3, 4440),
                new ProgrammplanungInput(4, 3885),
                new ProgrammplanungInput(5, 3607.5),
                new ProgrammplanungInput(6, 3330),
                new ProgrammplanungInput(7, 2497.5),
                new ProgrammplanungInput(8, 1665),
                new ProgrammplanungInput(9, 832.5),
                new ProgrammplanungInput(10, 1110),
                new ProgrammplanungInput(11, 832.5)
            ]
        ),
        new Fahrrad(
            'MTBDownhill',
            // 'Aluminium 7005TB',
            // 'Fizik Tundra',
            // 'Fox Talas140',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
            this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
            this.fahrradTeilService.getFahrradTeil('Fox Talas140'),

            [
                new ProgrammplanungInput(0, 740),
                new ProgrammplanungInput(1, 1110),
                new ProgrammplanungInput(2, 1850),
                new ProgrammplanungInput(3, 2960),
                new ProgrammplanungInput(4, 2590),
                new ProgrammplanungInput(5, 2405),
                new ProgrammplanungInput(6, 2220),
                new ProgrammplanungInput(7, 1665),
                new ProgrammplanungInput(8, 1110),
                new ProgrammplanungInput(9, 555),
                new ProgrammplanungInput(10, 740),
                new ProgrammplanungInput(11, 555)
            ]
        ),
        new Fahrrad(
            'MTB Extreme',
            // 'Carbon Monocoque',
            // 'Spark',
            // 'Rock Schox Reba',
            this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
            this.fahrradTeilService.getFahrradTeil('Spark'),
            this.fahrradTeilService.getFahrradTeil('Rock Schox Reba'),

            [
                new ProgrammplanungInput(0, 518),
                new ProgrammplanungInput(1, 777),
                new ProgrammplanungInput(2, 1295),
                new ProgrammplanungInput(3, 2072),
                new ProgrammplanungInput(4, 1813),
                new ProgrammplanungInput(5, 1683.5),
                new ProgrammplanungInput(6, 1554),
                new ProgrammplanungInput(7, 1165.5),
                new ProgrammplanungInput(8, 777),
                new ProgrammplanungInput(9, 388.5),
                new ProgrammplanungInput(10, 518),
                new ProgrammplanungInput(11, 388.5)
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
