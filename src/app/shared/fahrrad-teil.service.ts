import { FahrradTeil } from './fahrrad-teil.model';
import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';
import { element } from 'protractor';
import { LieferdatenService } from './lieferdaten.service';



export class FahrradTeilService {

  private lieferdatenService: LieferdatenService = new LieferdatenService()

  private teile: FahrradTeil[] = [
    new FahrradTeil('Aluminium 7005DB', FahrradTeilTyp.Rahmen, this.lieferdatenService.lieferdatenRahmen),
    new FahrradTeil('Aluminium 7005TB', FahrradTeilTyp.Rahmen, this.lieferdatenService.lieferdatenRahmen),
    new FahrradTeil('Carbon Monocoque', FahrradTeilTyp.Rahmen, this.lieferdatenService.lieferdatenRahmen),

    new FahrradTeil('Fizik Tundra', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel),
    new FahrradTeil('Race line', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel),
    new FahrradTeil('Spark', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel),
    new FahrradTeil('Speed line', FahrradTeilTyp.Sattel, this.lieferdatenService.lieferdatenSattel),

    new FahrradTeil('Fox32 F100', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel),
    new FahrradTeil('Fox32 F80', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel),
    new FahrradTeil('Fox Talas140', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel),
    new FahrradTeil('Rock Schox Reba', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel),
    new FahrradTeil('Rock Schox Recon351', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel),
    new FahrradTeil('Rock Schox ReconSL', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel),
    new FahrradTeil('SR Suntour Raidon', FahrradTeilTyp.Gabel, this.lieferdatenService.lieferdatenGabel)
  ];

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
}
