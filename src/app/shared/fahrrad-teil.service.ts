import { FahrradTeil } from './fahrrad-teil.model';
import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';
import { element } from 'protractor';
import { LieferdatenService } from './lieferdaten.service';
import { Injectable } from '@angular/core';


@Injectable()
export class FahrradTeilService {

  private teile: FahrradTeil[];

  constructor(private lieferdatenService: LieferdatenService) {



  this.teile = [
    new FahrradTeil('Aluminium 7005DB', FahrradTeilTyp.Rahmen, this.lieferdatenService.lieferdatenRahmen, 1000),
    new FahrradTeil('Aluminium 7005TB', FahrradTeilTyp.Rahmen, this.lieferdatenService.lieferdatenRahmen, 1000),
    new FahrradTeil('Carbon Monocoque', FahrradTeilTyp.Rahmen, this.lieferdatenService.lieferdatenRahmen, 1000),

    new FahrradTeil('Fizik Tundra', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel, 1000),
    new FahrradTeil('Race Line', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel, 1000),
    new FahrradTeil('Spark', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel, 1000),
    new FahrradTeil('Speed Line', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel, 1000),

    new FahrradTeil('Fox32 F100', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000),
    new FahrradTeil('Fox32 F80', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000),
    new FahrradTeil('Fox Talas140', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000),
    new FahrradTeil('Rock Schox Reba', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000),
    new FahrradTeil('Rock Schox Recon351', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000),
    new FahrradTeil('Rock Schox ReconSL', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000),
    new FahrradTeil('SR Suntour Raidon', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel, 1000)
  ];

 }

  getFahrradTeile() {
    return this.teile;
  }

  getFahrradTeil(name: string): FahrradTeil {
    let result: FahrradTeil;
    // tslint:disable-next-line:no-shadowed-variable
    this.teile.forEach ( element => {
      if (name === element.name) {
        result = element;
      }
    });
    return result;
  }

  entnehmeAusLager(name: string, menge: number) {

    const tempTeil = this.getFahrradTeil(name);

    tempTeil.lagerbestand = tempTeil.lagerbestand - menge;

  }

  getAnzahl(name: string): number {

    const tempTeil = this.getFahrradTeil(name);

    return tempTeil.lagerbestand;
  }

  fuegeHinzu (name: string, menge: number) {
    const tempTeil = this.getFahrradTeil(name);
    tempTeil.lagerbestand = tempTeil.lagerbestand + menge;
  }

}
