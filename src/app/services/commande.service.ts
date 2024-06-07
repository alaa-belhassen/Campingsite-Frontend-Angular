import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  createCommande(commande:any){
    
    return this.http.post(environment.url+'commande/add-commandes-ligneDeCommande',commande);
  }
  createSingleRentableCommande(commande:any,id:any){
    return this.http.post(environment.url+'commande/add-SingleRentedcommandes/'+id,commande);
  }
}
