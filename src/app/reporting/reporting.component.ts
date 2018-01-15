import { Component, OnInit } from '@angular/core';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';
import { FahrradTeilService } from '../shared/fahrrad-teil.service';
import { FahrradTeil } from '../shared/fahrrad-teil.model';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styles: []
})
export class ReportingComponent implements OnInit {


  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public prodColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,0.8)'
    }
  ];

  // Programmplanung Chart Werte
  public programmplanung: Array<any> = [];
  public programmplanungLabels: Array<any> = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  public programmplanungOptions: any = {
    responsive: true
  };
  public programmplanungChartType: String = 'line';

  // Pie Chart Werte
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: String = 'pie';

    // Pie Chart Teile Werte
    public teile: Array<any> = [];
    public pieChartTeileLabels: string[] = [];
    public pieChartTeileData: number[] = [];
    public pieChartTeileType: String = 'pie';

    // Pie Chart Sattel Werte
    public sattel: Array<any> = [];
    public pieChartSattelLabels: string[] = [];
    public pieChartSattelData: number[] = [];
    public pieChartSattelType: String = 'pie';

    // Pie Chart Rahmen Werte
    public rahmen: Array<any> = [];
    public pieChartRahmenLabels: string[] = [];
    public pieChartRahmenData: number[] = [];
    public pieChartRahmenType: String = 'pie';

    // Pie Chart Gabeln Werte
    public gabeln: Array<any> = [];
    public pieChartGabelnLabels: string[] = [];
    public pieChartGabelnData: number[] = [];
    public pieChartGabelnType: String = 'pie';

  // Produktionsplanung Chart Werte
  public produktionsplanung: Array<any> = [];
  public produktionsplanungLabels = [];
  public produktionsplanungOptions: any = {
    responsive: true,
    animation: false,
    elements: {
      point: {
        radius: 0
      }
    }
  };
  public produktionsplanungChartType: String = 'line';

  constructor(private fahrradService: FahrradService, private fahrradTeilService: FahrradTeilService) { }

  ngOnInit() {
    const fahrraeder: Fahrrad[] = this.fahrradService.getFahrraeder();
    const fahrradTeile: FahrradTeil[] = this.fahrradTeilService.getFahrradTeile();

    fahrraeder.forEach(fahrrad => {
      // Programmplanung Line Chart
      const label = fahrrad.modell;
      const data = fahrrad.programmplanung.vorlage;
      this.programmplanung.push({data: data, label: label});

      // Pie Chart
      this.pieChartLabels.push(label);
      let monatsWert = 0;
      data.forEach(wert => {
        monatsWert += wert;
      });
      this.pieChartData.push(monatsWert);

      // Produktionsplanung Chart
      const fahrradName = fahrrad.modell;
      const werte = [];
      const planned = [];
      const real = [];
      const rueckstand = [];

      fahrrad.programmplanung.produktionsplanung.forEach(item => {
        if (item.planned !== 0) {
          planned.push(item.planned);
          real.push(item.real);
          rueckstand.push(item.rueckstand);
        }
      });

      werte.push({data: planned, label: 'Geplant'});
      werte.push({data: real, label: 'Tatsächlich'});
      werte.push({data: rueckstand, label: 'Rückstand'});

      this.produktionsplanung.push({fahrradName: fahrradName, data: werte});
    });

    // Stueckliste
    fahrradTeile.forEach( teil => {
      const label = teil.name;
      const data = teil.anzahlVerwendungInFahrrad;

      if (teil.type === 0) {
        this.pieChartRahmenLabels.push(label);
        this.pieChartRahmenData.push(data);
        console.log('0');

      }

      if (teil.type === 1) {
        this.pieChartGabelnLabels.push(label);
        this.pieChartGabelnData.push(data);
        console.log('1');

      }

      if (teil.type === 2) {
        this.pieChartSattelLabels.push(label);
        this.pieChartSattelData.push(data);
        console.log('2');

      }

      this.pieChartTeileLabels.push(label);
      this.pieChartTeileData.push(data);

    });

    // Produktionsplanung Chart - Label
    fahrraeder[0].programmplanung.produktionsplanung.forEach(item => {
      if (item.planned !== 0) {
        const tag = item.datum.getDate();
        const monat = item.datum.getMonth() + 1;
        this.produktionsplanungLabels.push(tag + '.' + monat + '.');
      }
    });
    console.log(this.produktionsplanungLabels);
  }


}
