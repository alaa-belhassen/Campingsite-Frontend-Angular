import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StatsProduitService } from 'src/app/services/stats-produit.service';
import { WebSocketService } from './web-socket.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard-produit',
  templateUrl: './dashboard-produit.component.html',
  styleUrls: ['./dashboard-produit.component.scss']
})
export class DashboardProduitComponent implements OnInit {
  favoriteSeasonStatistics: any[];
  favoriteSeason: any;
  favoriteLandscapeStatistics: any[];
  favoritLandscape:any;
  favoriteAccommodationTypeStatistics: any[];
  favoriteAccommodationType : any;



  RentableProducts:any;
  SelllableProducts:any;
  profit:any;
  constructor(private formBuilder: FormBuilder,private statserive:StatsProduitService ,private webSocketService: WebSocketService) {
    this.getRentable();
    this.getSellable();
    this.getProfit();
    this.loadStatistics();
  }
  getRentable(){
    this.statserive.getRentable().subscribe({
      next:(r)=> {this.RentableProducts = r ;console.log(r)},
      error:(e)=>console.log(e)
    })
  }
  getSellable(){
    this.statserive.getSellable().subscribe({
      next:(r)=>{this.SelllableProducts = r ;console.log(r)} ,
      error:(e)=>console.log(e)
    })
  }

  getProfit(){
    this.statserive.getProfit().subscribe({
      next:(r)=>{this.profit = r ;console.log(r)} ,
      error:(e)=>console.log(e)
    })
  }

  findTotalCommandeBetweenDates(dd:any,df:any,type:any){
    this.statserive.findTotalCommandeBetweenDates(dd,df,type).subscribe({
      next:(r)=>{console.log(r)} ,
      error:(e)=>console.log(e)
    })
  }
  loadStatistics(): void {
    const months = [
      { name: 'January', start: '2024-01-01', end: '2023-01-31' },
      { name: 'February', start: '2024-02-01', end: '2023-02-28' },
      { name: 'March', start: '2024-05-01', end: '2024-05-31' },
      // Ajoutez les autres mois ici
    ];

    months.forEach(month => {
      this.findTotalCommandeBetweenDates(new Date(month.start),new Date(month.end),"SELLABLE");
    });
  
}






  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Total Sales' },
    { data: [], label: 'Sales Count' }
  ];


  ngOnInit(): void {
    this.webSocketService.getMessages().subscribe(message => {
      const stats = JSON.parse(message);
      this.updateChart(stats);
    });
  }

  updateChart(stats: any): void {
    this.barChartData[0].data = stats.totalSales;
    this.barChartData[1].data = stats.salesCount;
    this.barChartData = [...this.barChartData];
  }
}
