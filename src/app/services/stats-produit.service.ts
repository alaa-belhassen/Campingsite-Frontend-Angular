import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsProduitService {

  constructor(private http:HttpClient) { }

  getRentable(){
    return this.http.get(environment.url+'commande/countProductRented');
  }
  getSellable(){
    return this.http.get(environment.url+'commande/countProductBought');
  }
  getProfit(){
    return this.http.get(environment.url+'commande/getProfit');
  }
  findTotalCommandeBetweenDates(dateDebut:any,dateFin:any,type:any){
    return this.http.get(environment.url+'commande/findTotalCommandeBetweenDates/'+dateDebut+'/'+dateFin+'/'+type)
  }
  countProductBoughtBetteweenDates(dateDebut:any,dateFin:any,type:any){
    return this.http.get(environment.url+'commande/countProductBoughtBetteweenDates/'+dateDebut+'/'+dateFin+'/'+type)
  }
}
