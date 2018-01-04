import { Component, OnInit } from '@angular/core';
import { FahrradService } from '../shared/fahrrad.service';
import { Fahrrad } from '../shared/fahrrad.model';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styles: []
})
export class ReportingComponent implements OnInit {

  // Programmplanung Chart Werte
  public programmplanung: Array<any> = [];
  public programmplanungLabels: Array<any> = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  public programmplanungOptions: any = {
    responsive: true
  };
  public programmplanungColors: Array<any> = [
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
  public programmplanungChartType: String = 'line';

  // Pie Chart Werte
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: String = 'pie';


  constructor(private fahrradService: FahrradService) { }

  ngOnInit() {
    const fahrraeder: Fahrrad[] = this.fahrradService.getFahrraeder();

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
    });
  }


}
