import { Fahrrad } from '../shared/fahrrad.model';
import { Programmplanung } from './programmplanung.model';
import { FahrradTeilService } from './fahrrad-teil.service';
import { FahrradTeil } from './fahrrad-teil.model';
import { Injectable } from '@angular/core';
import { ProgrammplanungService } from './programmplanung.service';

@Injectable()
export class FahrradService {

    private fahrraeder: Fahrrad[];

    constructor(private fahrradTeilService: FahrradTeilService, private programmplanungService: ProgrammplanungService) {
        this.fahrraeder = [
            new Fahrrad(
                'MTBAllrounder',
                this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
                this.fahrradTeilService.getFahrradTeil('Spark'),
                this.fahrradTeilService.getFahrradTeil('Fox32 F100'),
                this.programmplanungService.mtbAllrounder
            ),
            new Fahrrad(
                'MTBCompetition',
                this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
                this.fahrradTeilService.getFahrradTeil('Speed Line'),
                this.fahrradTeilService.getFahrradTeil('Fox Talas140'),
                this.programmplanungService.mtbCompetition
            ),
            new Fahrrad(
                'MTBDownhill',
                this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
                this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
                this.fahrradTeilService.getFahrradTeil('Fox Talas140'),
                this.programmplanungService.mtbDownhill
            ),
            new Fahrrad(
                'MTBExtreme',
                this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
                this.fahrradTeilService.getFahrradTeil('Spark'),
                this.fahrradTeilService.getFahrradTeil('Rock Schox Reba'),
                this.programmplanungService.mtbExtreme
            ),
            new Fahrrad(
                'MTBFreeride',
                this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
                this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
                this.fahrradTeilService.getFahrradTeil('Fox32 F80'),
                this.programmplanungService.mtbFreeride
            ),
            new Fahrrad(
                'MTBMarathon',
                this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
                this.fahrradTeilService.getFahrradTeil('Race Line'),
                this.fahrradTeilService.getFahrradTeil('Rock Schox ReconSL'),
                this.programmplanungService.mtbMarathon
            ),
            new Fahrrad(
                'MTBPerformance',
                this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
                this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
                this.fahrradTeilService.getFahrradTeil('Rock Schox Reba'),
                this.programmplanungService.mtbPerformance
            ),
            new Fahrrad(
                'MTBTrail',
                this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
                this.fahrradTeilService.getFahrradTeil('Speed Line'),
                this.fahrradTeilService.getFahrradTeil('SR Suntour Raidon'),
                this.programmplanungService.mtbTrail
            ),
        ];

    }

    getFahrraeder() {
        return this.fahrraeder;
    }

    getFahrrad(id: number) {
        return this.fahrraeder[id];
    }
}
