import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-chart-pipes',
  templateUrl: './chart-pipes.component.html',
  styleUrls: ['./chart-pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChartPipesComponent implements OnInit  {

  @Input() datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
 
  ngOnInit() {

    console.log(this.datasets)

    this.data = this.datasets;

    console.log(this.data)

    parseOptions(Chart, chartOptions());
    const monthNames= [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
      'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    if(this.datasets!=undefined){
      chartExample2.data.datasets[0].data = this.data;
      chartExample2.data.labels = monthNames;

    }
   
  
    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
