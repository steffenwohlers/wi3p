import { Fahrrad } from '../shared/fahrrad.model';
import { Programmplanung } from './programmplanung.model';
import { FahrradTeilService } from './fahrrad-teil.service';
import { FahrradTeil } from './fahrrad-teil.model';

export class FahrradService {

    private fahrradTeilService: FahrradTeilService = new FahrradTeilService();

    private fahrraeder: Fahrrad[] = [
        new Fahrrad(
            'MTBAllrounder',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
            this.fahrradTeilService.getFahrradTeil('Spark'),
            this.fahrradTeilService.getFahrradTeil('Fox32 F100'),
            [
                new Programmplanung(0, 2220),
                new Programmplanung(1, 3330),
                new Programmplanung(2, 5550),
                new Programmplanung(3, 8880),
                new Programmplanung(4, 7770),
                new Programmplanung(5, 7215),
                new Programmplanung(6, 6660),
                new Programmplanung(7, 4995),
                new Programmplanung(8, 3330),
                new Programmplanung(9, 1665),
                new Programmplanung(10, 2220),
                new Programmplanung(11, 1665)

            ]
        ),
        new Fahrrad(
            'MTBCompetition',
            this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
            this.fahrradTeilService.getFahrradTeil('Speed line'),
            this.fahrradTeilService.getFahrradTeil('Fox Talas140'),
            [
                new Programmplanung(0, 1110),
                new Programmplanung(1, 1665),
                new Programmplanung(2, 2775),
                new Programmplanung(3, 4440),
                new Programmplanung(4, 3885),
                new Programmplanung(5, 3607.5),
                new Programmplanung(6, 3330),
                new Programmplanung(7, 2497.5),
                new Programmplanung(8, 1665),
                new Programmplanung(9, 832.5),
                new Programmplanung(10, 1110),
                new Programmplanung(11, 832.5)
            ]
        ),
        new Fahrrad(
            'MTBDownhill',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
            this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
            this.fahrradTeilService.getFahrradTeil('Fox Talas140'),

            [
                new Programmplanung(0, 740),
                new Programmplanung(1, 1110),
                new Programmplanung(2, 1850),
                new Programmplanung(3, 2960),
                new Programmplanung(4, 2590),
                new Programmplanung(5, 2405),
                new Programmplanung(6, 2220),
                new Programmplanung(7, 1665),
                new Programmplanung(8, 1110),
                new Programmplanung(9, 555),
                new Programmplanung(10, 740),
                new Programmplanung(11, 555)
            ]
        ),
        new Fahrrad(
            'MTBExtreme',
            this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
            this.fahrradTeilService.getFahrradTeil('Spark'),
            this.fahrradTeilService.getFahrradTeil('Rock Schox Reba'),
            [
                new Programmplanung(0, 518),
                new Programmplanung(1, 777),
                new Programmplanung(2, 1295),
                new Programmplanung(3, 2072),
                new Programmplanung(4, 1813),
                new Programmplanung(5, 1683.5),
                new Programmplanung(6, 1554),
                new Programmplanung(7, 1165.5),
                new Programmplanung(8, 777),
                new Programmplanung(9, 388.5),
                new Programmplanung(10, 518),
                new Programmplanung(11, 388.5)
            ]
        ),
        new Fahrrad(
            'MTBFreeride',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
            this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
            this.fahrradTeilService.getFahrradTeil('Fox32 F80'),
            [
                new Programmplanung(0, 370),
                new Programmplanung(1, 555),
                new Programmplanung(2, 925),
                new Programmplanung(3, 1480),
                new Programmplanung(4, 1295),
                new Programmplanung(5, 1202.5),
                new Programmplanung(6, 1110),
                new Programmplanung(7, 832.5),
                new Programmplanung(8, 555),
                new Programmplanung(9, 277.5),
                new Programmplanung(10, 370),
                new Programmplanung(11, 277.5)
            ]
        ),
        new Fahrrad(
            'MTB Marathon',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
            this.fahrradTeilService.getFahrradTeil('Race line'),
            this.fahrradTeilService.getFahrradTeil('Rock Schox ReconSL'),
            [
                new Programmplanung(0, 592),
                new Programmplanung(1, 888),
                new Programmplanung(2, 1480),
                new Programmplanung(3, 2368),
                new Programmplanung(4, 2072),
                new Programmplanung(5, 1924),
                new Programmplanung(6, 1776),
                new Programmplanung(7, 1332),
                new Programmplanung(8, 888),
                new Programmplanung(9, 444),
                new Programmplanung(10, 592),
                new Programmplanung(11, 444)
            ]
        ),
        new Fahrrad(
            'MTBPerformance',
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
            this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
            this.fahrradTeilService.getFahrradTeil('Rock Schox Reba'),
            [
                new Programmplanung(0, 888),
                new Programmplanung(1, 1332),
                new Programmplanung(2, 2220),
                new Programmplanung(3, 3552),
                new Programmplanung(4, 3108),
                new Programmplanung(5, 2886),
                new Programmplanung(6, 2664),
                new Programmplanung(7, 1998),
                new Programmplanung(8, 1332),
                new Programmplanung(9, 666),
                new Programmplanung(10, 888),
                new Programmplanung(11, 666)
            ]
        ),
        new Fahrrad(
            'MTBTrail',
            this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
            this.fahrradTeilService.getFahrradTeil('Speed line'),
            this.fahrradTeilService.getFahrradTeil('SR Suntour Raidon'),
            [
                new Programmplanung(0, 962),
                new Programmplanung(1, 1443),
                new Programmplanung(2, 2405),
                new Programmplanung(3, 3848),
                new Programmplanung(4, 3367),
                new Programmplanung(5, 3126.5),
                new Programmplanung(6, 2886),
                new Programmplanung(7, 2164.5),
                new Programmplanung(8, 1443),
                new Programmplanung(9, 721.5),
                new Programmplanung(10, 962),
                new Programmplanung(11, 721.5)
            ]
        ),
    ];

    getFahrraeder() {
        return this.fahrraeder;
    }

    getFahrrad(id: number) {
        return this.fahrraeder[id];
    }
}
