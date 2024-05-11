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

  getactivite(): Observable<any>{
    return this.httpClient.get(this.API_URL+this.ENDPOINT)
  }

  addactivite(activite: any): Observable<any>{
    return this.httpClient.post(this.API_URL+"/AjoutActivite",activite)
  }

  updateactivite(activite: any): Observable<any>{
    return this.httpClient.put(this.API_URL+"/UpdateActivite",activite)
  }

  deleteActivite(id:any): Observable<any> {
    return this.httpClient.delete(this.API_URL + "/DeleteActivite/"+id)
  }

  getActiviteById(id: any): Observable<any> {
    return this.httpClient.get(this.API_URL+"/retrieveActivite/"+id)
  }

  approverActivite(Activite: any): Observable<any> {
    return this.httpClient.put(this.API_URL+"/ApprouverActivite" , Activite)
  }

  DesapprouverActivite(id: any): Observable<any> {
    return this.httpClient.put(this.API_URL+"/DesapprouverActivite", id)
  }

}
