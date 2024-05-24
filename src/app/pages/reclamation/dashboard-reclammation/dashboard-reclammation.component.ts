import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-dashboard-reclammation',
  templateUrl: './dashboard-reclammation.component.html',
  styleUrls: ['./dashboard-reclammation.component.scss']
})
export class DashboardReclammationComponent implements OnInit {

  reclamations: any[] = [];
  displayedReclamations: any[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;
  pages: number[] = [];
  enAttenteCount: number = 0;
  SolvedReclamationNumberThisMonth: number = 0;
  reclamationCounts: { name: string, value: number }[] = [];

  constructor(private reclamationService: ReclamationService) { }
  ngOnInit(): void {
    this.initChart();
  }

  
  initChart() {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    this.reclamationService.getStatisticsByReclamationType().subscribe((data: { [key: string]: number }) => {
      this.reclamationCounts = Object.entries(data).map(([name, value]) => ({ name, value }));
      option = {
        title: {
          text: 'Reclamation Types',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Reclamations',
            type: 'pie',
            radius: '50%',
            data: this.reclamationCounts,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      option && myChart.setOption(option);
    });
  }

}
