import { Programmplanung } from './programmplanung.model';
import { FahrradTeilService } from './fahrrad-teil.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProgrammplanungService {

    mtbAllrounder: Programmplanung;
    mtbCompetition: Programmplanung;
    mtbDownhill: Programmplanung;
    mtbExtreme: Programmplanung;
    mtbFreeride: Programmplanung;
    mtbMarathon: Programmplanung;
    mtbPerformance: Programmplanung;
    mtbTrail: Programmplanung;

    constructor (private fahrradTeilService: FahrradTeilService) {

        this.mtbAllrounder = new Programmplanung([
            2220,
            3330,
            5550,
            8880,
            7770,
            7215,
            6660,
            4995,
            3330,
            1665,
            2220,
            1665
        ],
        [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
        this.fahrradTeilService.getFahrradTeil('Spark'),
        this.fahrradTeilService.getFahrradTeil('Fox32 F100')
        ]
    );

    this.mtbCompetition = new Programmplanung([
        1110,
        1665,
        2775,
        4440,
        3885,
        3607.5,
        3330,
        2497.5,
        1665,
        832.5,
        1110,
        832.5
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
        this.fahrradTeilService.getFahrradTeil('Speed Line'),
        this.fahrradTeilService.getFahrradTeil('Fox Talas140')
    ]);

    this.mtbDownhill = new Programmplanung([
        740,
        1110,
        1850,
        2960,
        2590,
        2405,
        2220,
        1665,
        1110,
        555,
        740,
        555
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
        this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
        this.fahrradTeilService.getFahrradTeil('Fox Talas140')
    ]);

    this.mtbExtreme = new Programmplanung([
        518,
        777,
        1295,
        2072,
        1813,
        1683.5,
        1554,
        1165.5,
        777,
        388.5,
        518,
        388.5
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
        this.fahrradTeilService.getFahrradTeil('Spark'),
        this.fahrradTeilService.getFahrradTeil('Rock Schox Reba')
    ]);

    this.mtbFreeride = new Programmplanung([
        370,
        555,
        925,
        1480,
        1295,
        1202.5,
        1110,
        832.5,
        555,
        277.5,
        370,
        277.5
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
        this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
        this.fahrradTeilService.getFahrradTeil('Fox32 F80')
    ]);

    this.mtbMarathon = new Programmplanung([
        592,
        888,
        1480,
        2368,
        2072,
        1924,
        1776,
        1332,
        888,
        444,
        592,
        444
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
        this.fahrradTeilService.getFahrradTeil('Race Line'),
        this.fahrradTeilService.getFahrradTeil('Rock Schox ReconSL')
    ]);

    this.mtbPerformance = new Programmplanung([
        888,
        1332,
        2220,
        3552,
        3108,
        2886,
        2664,
        1998,
        1332,
        666,
        888,
        666
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
        this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
        this.fahrradTeilService.getFahrradTeil('Rock Schox Reba')
    ]);

    this.mtbTrail = new Programmplanung([
        962,
        1443,
        2405,
        3848,
        3367,
        3126.5,
        2886,
        2164.5,
        1443,
        721.5,
        962,
        721.5
    ],
    [
        this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
        this.fahrradTeilService.getFahrradTeil('Speed Line'),
        this.fahrradTeilService.getFahrradTeil('SR Suntour Raidon')
    ]);

    }
}
