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
   months:any = [
    { name: 'January', start: '2024-01-01', end: '2024-02-01' ,value:0},
    { name: 'February', start: '2024-02-01', end: '2024-03-01' ,value:0},
    { name: 'March', start: '2024-03-01', end: '2024-04-01' ,value:0},
    { name: 'April', start: '2024-04-01', end: '2024-05-01' ,value:0},
    { name: 'May', start: '2024-05-01', end: '2024-06-01' ,value:0},
    { name: 'June', start: '2024-06-01', end: '2024-07-01' ,value:0},
    { name: 'July', start: '2024-07-01', end: '2024-08-01' ,value:0},
    { name: 'August', start: '2024-08-01', end: '2024-09-01' ,value:0},
    { name: 'September', start: '2024-09-01', end: '2024-10-01',value:0 },
    { name: 'October', start: '2024-10-01', end: '2024-11-01' ,value:0},
    { name: 'November', start: '2024-11-01', end: '2024-12-01',value:0 },
    { name: 'December', start: '2024-12-01', end: '2025-01-01' ,value:0},
  ];

  CommandeByMonths:any=[];

  RentableProducts:any;
  SelllableProducts:any;
  profit:any;
  commandeValue:any;
  sellable:any;
  rentable:any;
  today:any;
  constructor(private formBuilder: FormBuilder,private statserive:StatsProduitService ) {
    this.getRentable();
    this.getSellable();
    this.getProfit();
    this.loadStatistics();
    this.getProfitSellable();
    this.getProfitRentable();
    this.today=new Date();
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

  getProfitSellable(){
    this.statserive.getProfitType("SELLABLE").subscribe({
      next:(r)=>{this.sellable = r ;console.log(r)} ,
      error:(e)=>console.log(e)
    })
  }

  getProfitRentable(){
    this.statserive.getProfitType("RENTABLE").subscribe({
      next:(r)=>{this.rentable = r ;console.log(r)} ,
      error:(e)=>console.log(e)
    })
  }


  findTotalCommandeBetweenDates(dd:any,df:any,type:any){
    this.statserive.findTotalCommandeBetweenDates(dd,df,type).subscribe({
      next:(r)=>{return r } ,
      error:(e)=>console.log(e)
    })
  }

  findTotalCommandeBetweenDates2(dd: any, df: any, type: any): Promise<any> {
    return this.statserive.findTotalCommandeBetweenDates(dd, df, type).toPromise();
  }


  async loadStatistics() {
    this.months.forEach(async (month: { end: string | number | Date; start: string | number | Date; value: any; }) => {
      const result = new Date(month.end);
      let commandeValue  = await this.findTotalCommandeBetweenDates2(new Date(month.start),new Date(result.setDate(result.getDate() - 1)),"SELLABLE");
      if(commandeValue==null){
        commandeValue=0;
      }
      month.value= commandeValue;
      console.log(commandeValue)
      this.CommandeByMonths.push(commandeValue)
      
    });
    console.log(this.CommandeByMonths)

}
  ngOnInit(): void {
  
  }

}
