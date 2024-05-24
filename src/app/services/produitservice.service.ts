import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../entities/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  constructor(private http:HttpClient) { }
  getallProduit(){
    return this.http.get<Product[]>(environment.url+'product/retrieve-all-products') ;
  }
  addProduit(value:any){
    return this.http.post(environment.url+'product/add-products',value);
  }
  addToChart(panier:any){
    return this.http.post(environment.url+'panier/add-paniers',panier);
  }
  getAllPanier(){
    return this.http.get(environment.url+'panier/retrieve-all-paniers');
  }
  updatequantiter(value:any){
    return this.http.put(environment.url+'panier/update-paniers',value);
  }
  deletePanier(id:any){
    return this.http.delete(environment.url+'panier/delete-paniers/'+id);
  }
  addCategorie(categorie:any){
    return this.http.post(environment.url+'categorieProduct/add-categorieProducts',categorie);
  }
  getAllCategorie(){
    return this.http.get(environment.url+'categorieProduct/retrieve-all-categorieProducts');
  }
  getAllCommande(){
    return this.http.get(environment.url+'commande/retrieve-all-commandes');
  }
  uploadAndAffecttoDetailCampsite(image:File,idProduit:any){
    const formData=new FormData();
    formData.append("multipartFile",image);
    return this.http.post<any>(environment.url+`photos/uploadToproduct/${idProduit}`,formData);
  }

}
