import {Component, Input, OnInit} from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import {FixerService} from "../../../api/fixer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-graph',
  templateUrl: './detail-graph.component.html',
  styleUrls: ['./detail-graph.component.css']
})
export class DetailGraphComponent implements OnInit{

  title = 'ng2-charts-demo';
  from: any = '';
  to: any = '';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '', '', '', '', '', '', '','','','','','' ],
    datasets: [
      { data: [0,0,0,0,0,0,0,0,0,0,0,0], label: this.to },
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private fixerService: FixerService) {
  }

  ngOnInit(): void {
    this.updateFromTo();
    this.updateLabel();
    this.updateData();
  }
  updateFromTo(){
    const urlParam = this.route.snapshot.paramMap.get('detail');
    if (urlParam){
      this.from= urlParam.split("-")[0];
      this.to= urlParam.split('-')[1];
      this.barChartData.datasets[0].label = this.to + 'exchange rate';
    }
  }
  updateData(){
    if (this.barChartData.labels){
      this.barChartData.labels.forEach((date, index)=> {
        this.fixerService.historic(this.from, date).subscribe(resut=>{
          this.barChartData.datasets[0].data[index] = resut.rates[this.to];
          this.barChartData.datasets[0].data = this.barChartData.datasets[0].data.slice();
          console.log(resut.rates[this.to]);
        })
      });
    }
  }
  updateLabel(){
    if (this.barChartData.labels) {
      for (let i = 12; i > 0; i--) {
        let date = this.subtractMonths(i);
        let lastDayofLastMonth = this.getLastDayOfMonth(date.getFullYear(), date.getMonth());
        this.barChartData.labels[12-i] = `${lastDayofLastMonth.getFullYear()}-${lastDayofLastMonth.getMonth() + 1}-${lastDayofLastMonth.getDate()}`;
        this.barChartData.labels = this.barChartData.labels.slice();
      }
    }
  }
  getLastDayOfMonth(year:number, month:number) {
    return new Date(year, month + 1, 0);
  }
  subtractMonths(numOfMonths: number) {
    let date = new Date()
    date.setMonth(date.getMonth() - numOfMonths);
    return date;
  }
}
