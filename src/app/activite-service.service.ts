import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  readonly API_URL ="http://localhost:8085/Activite"
  readonly ENDPOINT ="/RetrieveActivite"

  constructor(private httpClient : HttpClient) {}

  getActivite(): Observable<any>{
    return this.httpClient.get(this.API_URL+this.ENDPOINT)
  }

  addActivite(activite: any): Observable<any>{
    return this.httpClient.post(this.API_URL+"/AjoutActivite",activite)
  }

  updateActivite(activite: any): Observable<any>{
    return this.httpClient.put(this.API_URL+"/UpdateActivite",activite)
  }

  deleteActivite(id:any): Observable<any> {
    return this.httpClient.delete(this.API_URL + "/DeleteActivite/"+id)
  }

  getActiviteById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL+"/RetrieveActivite/"+id)
  }

  approverActivite(Activite: any): Observable<any> {
    return this.httpClient.put(this.API_URL+"/ApprouverActivite" , Activite)
  }

  DesapprouverActivite(id: any): Observable<any> {
    return this.httpClient.put(this.API_URL+"/DesapprouverActivite", id)
  }

  getPreRequis(): Observable<any> {
    return this.httpClient.get(this.API_URL+"/api/pre-requis")
  }

  updateActiviteById(id: any , activite: any): Observable<any>{
    return this.httpClient.put(this.API_URL+"/UpdateActiviteById/" + id , activite)
  }

  getPrixActiviteByMonth(): Observable<any> {
    return this.httpClient.get(this.API_URL+"/getPrixActiviteByMonth")
  }

}

