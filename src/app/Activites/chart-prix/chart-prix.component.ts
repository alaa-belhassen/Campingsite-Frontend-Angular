import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js';


// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { ActiviteService } from '../../activite-service.service';

@Component({
  selector: 'app-chart-prix',
  templateUrl: './chart-prix.component.html',
  styleUrls: ['./chart-prix.component.scss']
})

export class ChartPrixComponent implements OnInit {
  @Input() chartNumber;
  public datasets: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor(private activiteService: ActiviteService) {}

  ngOnInit() {
    parseOptions(Chart, chartOptions());

    // Initialize chart
    var chartSales = document.getElementById('chart-sales');
    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: {
        labels: this.getMonthNames(), // Labels for x-axis (months)
        datasets: [{
          label: 'Prix of activities',
          data: [], // Placeholder for y-axis data
          borderColor: '#51cbce',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#51cbce',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#51cbce',
        }]
      }
    });

    this.prixActivite();
  }

  prixActivite() {
    this.activiteService.getPrixActiviteByMonth().subscribe((data) => {
      // Populate y-axis data with the fetched data
      this.salesChart.data.datasets[0].data = data;
      this.salesChart.update();
    });
  }

  // Helper function to get month names
  getMonthNames(): string[] {
    return [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }
}
