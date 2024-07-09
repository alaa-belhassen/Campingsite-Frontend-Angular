import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  readonly API_URL ="http://localhost:8082/projet"
  readonly ENDPOINT ="/getAll"

  constructor(private httpClient : HttpClient) { }
  getReservation(): Observable<any>{
    return this.httpClient.get(this.API_URL+this.ENDPOINT)
  }


  addReservation(reservation:any): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/addReservation`, reservation);
  }

  Reserver(reservation:any,CampsiteId,CampeurId): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/reserver/`+CampsiteId+`/`+CampeurId, reservation);
  }

  DeleteReservationById(ID:any):Observable<any> {
    return this.httpClient.delete(this.API_URL+"/deleteReservation/"+ID)
  }

  UpdateReservationById(ID:any,reservation:any):Observable<any>{
    return this.httpClient.put(this.API_URL+"/updateReservation/"+ID,reservation)
  }
  GetById(ID:any):Observable<any>{
    return this.httpClient.get(this.API_URL+"/getReservation/"+ID)
  }
  getFutureReservations():Observable<any>{
    return this.httpClient.get(this.API_URL+"/reservations/getFutureReservations")
  }
  getUser():Observable<any>{
    return this.httpClient.get(this.API_URL+"/reservations/getUser")
  }
  nbrReservationInprogress():Observable<any>{
    return this.httpClient.get(this.API_URL+"/reservations/nbrReservationInprogress")
  }
  nbrReservationCampsite():Observable<any>{
    return this.httpClient.get(this.API_URL+"/reservations/findcampsites")
  }
  nbrReservation():Observable<any>{
    return this.httpClient.get(this.API_URL+"/reservations/getNbrReservationByMonth")
  }
  reserverActivite(idActivite:any,reservation:any,campeurID:any){
    return this.httpClient.post(this.API_URL+"/reserverActivite/"+campeurID+"?activiteListId="+idActivite,reservation)
  }
}
