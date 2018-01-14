import { Programmplanung } from './programmplanung.model';
import { FahrradTeilService } from './fahrrad-teil.service';
import { Injectable } from '@angular/core';
import { ScInboundSattel } from './sc-inbound-sattel.model';
import { Lieferdaten } from './lieferdaten.model';
import { ScInboundGabel } from './sc-inbound-gabel.model';
import { ScInboundRahmen } from './sc-inbound-rahmen.model';
import { Produktionsplanung } from './produktionsplanung.model';
import { LieferdatenService } from './lieferdaten.service';
import { FahrradTeilTyp } from './fahrrad-teil-typ.enum';
import { FahrradTeil } from './fahrrad-teil.model';
import { ProduktionskapazitaetenService } from './produktionskapazitaeten.service';

@Injectable()
export class ProgrammplanungService {

    programmplanungArray: Programmplanung[];

    mtbAllrounder: Programmplanung;
    mtbCompetition: Programmplanung;
    mtbDownhill: Programmplanung;
    mtbExtreme: Programmplanung;
    mtbFreeride: Programmplanung;
    mtbMarathon: Programmplanung;
    mtbPerformance: Programmplanung;
    mtbTrail: Programmplanung;

    //
    // Inbound Start
    //
    private programmplanung: Programmplanung[];
    private sattel: Produktionsplanung[];
    private gabel: Produktionsplanung[];
    private rahmen: Produktionsplanung[];

    //
    // Inbound Ende
    //

    //
    // Inbound Start
    //

    // tslint:disable-next-line:member-ordering
    static scInboundGabel: any;
    // tslint:disable-next-line:member-ordering
    static scInboundSattel: any;
    // tslint:disable-next-line:member-ordering
    static scInboundRahmen: any;

    scInboundSattel: ScInboundSattel[] = new Array<ScInboundSattel>();
    lagerbestandSattelArray: number[];
    lagerbestandSattel: number;
    losgroesseSattel: number;
    lieferdatenSattel: Lieferdaten;

    scInboundGabel: ScInboundGabel[] = new Array<ScInboundGabel>();
    lagerbestandGabel: number;
    lagerbestandGabelArray: number[];
    losgroesseGabel: number;
    lieferdatenGabel: Lieferdaten;

    scInboundRahmen: ScInboundRahmen[] = new Array<ScInboundRahmen>();
    lagerbestandRahmenArray: number[];
    lagerbestandRahmen: number;
    losgroesseRahmen: number;
    lieferdatenRahmen: Lieferdaten;

    //
    // Inbound Ende
    //

    // tslint:disable-next-line:max-line-length
    constructor (private fahrradTeilService: FahrradTeilService, private lieferdatenService: LieferdatenService, private produktionskapazitaetenService: ProduktionskapazitaetenService) {

         const teileMtbAllrounder: Array<FahrradTeil> = [
            this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
            this.fahrradTeilService.getFahrradTeil('Spark'),
            this.fahrradTeilService.getFahrradTeil('Fox32 F100')
            ];

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
        teileMtbAllrounder,
        this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

        const teileMtbCompetition: Array<FahrradTeil> = [
            this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
            this.fahrradTeilService.getFahrradTeil('Speed Line'),
            this.fahrradTeilService.getFahrradTeil('Fox Talas140')
        ];

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
    teileMtbCompetition,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService
    );

    const teileMtbDownhill: Array<FahrradTeil> = [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
        this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
        this.fahrradTeilService.getFahrradTeil('Fox Talas140')
    ];

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
    teileMtbDownhill,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

    const teileMtbExtreme: Array<FahrradTeil> = [
        this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
        this.fahrradTeilService.getFahrradTeil('Spark'),
        this.fahrradTeilService.getFahrradTeil('Rock Schox Reba')
    ];

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
    teileMtbExtreme,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

    const teileMtbFreeride: Array<FahrradTeil> = [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
        this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
        this.fahrradTeilService.getFahrradTeil('Fox32 F80')
    ];

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
    teileMtbFreeride,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

    const teileMtbMarathon: Array<FahrradTeil> = [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005DB'),
        this.fahrradTeilService.getFahrradTeil('Race Line'),
        this.fahrradTeilService.getFahrradTeil('Rock Schox ReconSL')
    ];

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
    teileMtbMarathon,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

    const teileMtbPerfomance: Array<FahrradTeil> = [
        this.fahrradTeilService.getFahrradTeil('Aluminium 7005TB'),
        this.fahrradTeilService.getFahrradTeil('Fizik Tundra'),
        this.fahrradTeilService.getFahrradTeil('Rock Schox Reba')
    ];

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
    teileMtbPerfomance,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

    const teileMtbTrail: Array<FahrradTeil> = [
        this.fahrradTeilService.getFahrradTeil('Carbon Monocoque'),
        this.fahrradTeilService.getFahrradTeil('Speed Line'),
        this.fahrradTeilService.getFahrradTeil('SR Suntour Raidon')
    ];

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
    teileMtbTrail,
    this.scInboundRahmen, this.scInboundGabel, this.scInboundSattel, this.produktionskapazitaetenService);

    this.programmplanungArray = new Array();

    this.programmplanungArray[0] = this.mtbAllrounder;
    this.programmplanungArray[1] = this.mtbCompetition;
    this.programmplanungArray[2] = this.mtbDownhill;
    this.programmplanungArray[3] = this.mtbExtreme;
    this.programmplanungArray[4] = this.mtbFreeride;
    this.programmplanungArray[5] = this.mtbMarathon;
    this.programmplanungArray[6] = this.mtbPerformance;
    this.programmplanungArray[7] = this.mtbTrail;

    //
    // Produktionsplanung Start
    //

    this.programmplanung = this.programmplanungArray;

    this.sattel = new Array(this.programmplanung[0].produktionsplanung.length);
    this.gabel = new Array(this.programmplanung[0].produktionsplanung.length);
    this.rahmen = new Array(this.programmplanung[0].produktionsplanung.length);

    // für jeden Fahrrad-Typ
    for (let i = 0; i < this.programmplanung.length; i++) {

        // für jede Produktionsplanung
        for (let ii = 0; ii < this.programmplanung[i].produktionsplanung.length; ii++) {

            // Speichere sie in das jeweilige Array
            this.sattel[ii] = this.programmplanung[i].produktionsplanung[ii];
            this.gabel[ii] = this.programmplanung[i].produktionsplanung[ii];
            this.rahmen[ii] = this.programmplanung[i].produktionsplanung[ii];
        }
    }

    //
    // Produktionsplanung Ende
    //


    //
    // Inbound Start
    //

    this.berechne();

    //
    // Inbound Ende
    //

    for ( const e of this.programmplanungArray) {
      // e.calculateOutput();
    }

    }

    //
    // Produktionsplanung Start
    //

    public getSattel(): Produktionsplanung[] {
        return this.sattel;
    }

    public getGabel(): Produktionsplanung[] {
        return this.sattel;
    }

    public getRahmen(): Produktionsplanung[] {
        return this.sattel;
    }

    //
    // Produktionsplanung Ende
    //


    //
    // Inbound Start
    //

    berechne() {

        /**
        * Sattel
        */
        const produktionsplanungSattel = this.sattel;
        // Dient nur zur Anzeige
        this.lagerbestandSattelArray = new Array(ScInboundSattel.length);
        this.lagerbestandSattel = 0;
        this.lieferdatenSattel = this.lieferdatenService.lieferdatenSattel;
        this.losgroesseSattel = this.lieferdatenSattel.losgroesseHersteller;
        for (let i = 0; i < produktionsplanungSattel.length; i++) {
          this.scInboundSattel[i] = new ScInboundSattel(produktionsplanungSattel[i], this.lieferdatenService);
        }
        // tslint:disable-next-line:max-line-length
        this.beachteLosgroesseHersteller(this.scInboundSattel, this.lagerbestandSattelArray, this.lagerbestandSattel, this.losgroesseSattel);

        /**
        * Gabel
        */
        const produktionsplanungGabel = this.gabel;
            // Dient nur zur Anzeige
        this.lagerbestandGabelArray = new Array(ScInboundGabel.length);
        this.lagerbestandGabel = 0;
        this.lieferdatenGabel = this.lieferdatenService.lieferdatenGabel;
        this.losgroesseGabel = this.lieferdatenGabel.losgroesseHersteller;
        for (let i = 0; i < produktionsplanungGabel.length; i++) {
          this.scInboundGabel[i] = new ScInboundGabel(produktionsplanungGabel[i], this.lieferdatenService);
        }
        this.beachteLosgroesseHersteller(this.scInboundGabel, this.lagerbestandGabelArray, this.lagerbestandGabel, this.losgroesseGabel);

        /**
        * Rahmen
        */
        const produktionsplanungRahmen = this.rahmen;
        // Dient nur zur Anzeige
        this.lagerbestandRahmenArray = new Array(ScInboundRahmen.length);
        this.lagerbestandRahmen = 0;
        this.lieferdatenRahmen = this.lieferdatenService.lieferdatenRahmen;
        this.losgroesseRahmen = this.lieferdatenRahmen.losgroesseHersteller;
        for (let i = 0; i < produktionsplanungRahmen.length; i++) {
          this.scInboundRahmen[i] = new ScInboundRahmen(produktionsplanungRahmen[i], this.lieferdatenService);
        }
        // tslint:disable-next-line:max-line-length
        this.beachteLosgroesseHersteller(this.scInboundRahmen, this.lagerbestandRahmenArray, this.lagerbestandRahmen, this.losgroesseRahmen);
      }

      kloneArray(array: Array<any>): Array<number> {
        const klon: Array<number> = new Array(array.length);
        for ( let i = 0; i < array.length; i++) {
          klon[i] = array[i].menge;
        }
        return klon;
      }


      beachteLosgroesseHersteller(scInbound: Array<any>, lagerbestandArray: Array<number>, lagerbestand: number, losgroesse: number) {
        // Mengen-Werte des Datums zum Abgleich
        const wertArr = this.kloneArray(scInbound);
        // Iteriere von hinten durch das Original-Array
        for (let i = scInbound.length - 1; i >= 0; i--) {
          // Nur zur Anzeige in der GUI
          lagerbestandArray[i] = lagerbestand;
        // Hersteller produziert die benötigte Menge und legt sie ins Lager
        lagerbestand = lagerbestand + scInbound[i].menge;
        // Falls der Lagerbestand kleiner ist als die Losgröße mache nichts..
          if (lagerbestand < losgroesse) {
            // ...ansonsten...
          } else {
            // nimm die Losgröße aus dem Lager (weil sie versandt wird)
            while (lagerbestand >= losgroesse) {
              lagerbestand = lagerbestand - losgroesse;
              // NUr zur Anzeige
              lagerbestandArray[i] = lagerbestand;
            }
            // Wert um die Losgröße aufzuteilen auf die Bestelltage
            let tempValue = losgroesse;
            // Iteriere von hinten durch das Werte Array
            for (let ii = wertArr.length - 1; tempValue > 0; ii--) {
              // Falls der Wert darin 0 ist mache nichts (Ware für den Tag wurde also schon vesandt)
              if (wertArr[ii] === 0) {
              // ... ansonsten ...
              } else {
                // Falls der der TempValue größer gleich dem Wert ist...
                if (tempValue >= wertArr[ii]) {
                  // reduziere den tempValue um den Wert
                  tempValue = tempValue - wertArr[ii];
                  // Setze den Wert auf 0
                  wertArr[ii] = 0;
                  // Berechne wie lange die Verzögerung gedauert hat
                  const verzoegerungDurchLosgroesse = ii - i;
                  // tslint:disable-next-line:max-line-length
                  scInbound[ii].produktionsstartHersteller =  scInbound[ii].berechneStartBeimHersteller(scInbound[ii].ersterTransport(), verzoegerungDurchLosgroesse);
                  // scInbound[ii].produktionsstartHersteller =  scInbound[ii].berechneStartBeimHersteller(scInbound[ii].produktionsstartOem, verzoegerungDurchLosgroesse);
                  // ... ansonsten ...
                } else {
                  // Verringere den den Wert (Ein Teil der bestellten Menge für den Produktionstag wird verschickt)
                  wertArr[ii] = wertArr[ii] - tempValue;
                  // Setze tempValue auf 0 damit die Schleife beendet wird
                  tempValue = 0;
                }
              }
            }
          }
        }
      }

    getScInboundSattel(): ScInboundSattel[] {
        return this.scInboundSattel;
      }

      getScInboundGabel(): ScInboundGabel[] {
        return this.scInboundGabel;
      }

      getScInboundRahmen(): ScInboundRahmen[] {
        return this.scInboundRahmen;
      }
}
