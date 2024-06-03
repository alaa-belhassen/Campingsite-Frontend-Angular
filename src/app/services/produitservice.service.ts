import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../entities/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  constructor(private http:HttpClient) { }
  addProduit(value:any){
    return this.http.post(environment.url+'product/add-products',value);
  }
  addToChart(panier:any){
    return this.http.post(environment.url+'panier/add-paniers',panier);
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
  getallProduit(){
    return this.http.get<Product[]>(environment.url+'product/retrieve-all-products') ;
  }
  getAllPanier(){
    return this.http.get(environment.url+'panier/retrieve-all-paniers');
  }
  uploadAndAffecttoDetailCampsite(image:File,idProduit:any){
    const formData=new FormData();
    formData.append("multipartFile",image);
    return this.http.post<any>(environment.url+`photos/uploadToproduct/${idProduit}`,formData);
  }
  updatequantiter(value:any){
    return this.http.put(environment.url+'panier/update-paniers',value);
  }
  deletePanier(id:any){
    return this.http.delete(environment.url+'panier/delete-paniers/'+id);
  }
  deleteCommande(id:any){
    return this.http.delete(environment.url+'commande/delete-commandes/'+id);
  }
  deleteProduit(id:any){
    return this.http.delete(environment.url+'product/delete-products/'+id);
  }
  updateProduit(product:any){
    return this.http.put(environment.url+'product/update-products/',product);
  }
}
