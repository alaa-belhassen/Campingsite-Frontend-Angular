import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StatsProduitService } from 'src/app/services/stats-produit.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
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
  constructor(private formBuilder: FormBuilder,private statserive:StatsProduitService ) {
    this.getRentable();
    this.getSellable();
    this.getProfit();
    this.loadStatistics();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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







 

 
}
