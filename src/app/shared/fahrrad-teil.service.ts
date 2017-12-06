import { FahrradTeil } from './fahrrad-teil.model';
import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';



export class FahrradTeilService {

  private teile: FahrradTeil[] = [
    new FahrradTeil('Aluminium 7005DB', FahrradTeilTyp.Rahmen),
    new FahrradTeil('Aluminium 7005TB', FahrradTeilTyp.Rahmen),
    new FahrradTeil('Carbon Monocoque', FahrradTeilTyp.Rahmen),

    new FahrradTeil('Fizik Tundra', FahrradTeilTyp.Sattel),
    new FahrradTeil('Race line', FahrradTeilTyp.Sattel),
    new FahrradTeil('Spark', FahrradTeilTyp.Sattel),
    new FahrradTeil('Speed line', FahrradTeilTyp.Sattel),

    new FahrradTeil('Fox32 F100', FahrradTeilTyp.Gabel),
    new FahrradTeil('Fox32 F80', FahrradTeilTyp.Gabel),
    new FahrradTeil('Fox Talas140', FahrradTeilTyp.Gabel),
    new FahrradTeil('Rock Schox Reba', FahrradTeilTyp.Gabel),
    new FahrradTeil('Rock Schox Recon351', FahrradTeilTyp.Gabel),
    new FahrradTeil('Rock Schox ReconSL', FahrradTeilTyp.Gabel),
    new FahrradTeil('SR Suntour Raidon', FahrradTeilTyp.Gabel)
  ];

  getFahrradTeile() {
    return this.teile;
  }

  getFahrradTeil(name: String) {
    this.teile.forEach(element => {
      if (element.name === name) {
        return element;
      }
    });
  }

}
