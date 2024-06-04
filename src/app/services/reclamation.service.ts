import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseUrl = 'http://localhost:8082/api/reclamations';

  constructor(private http: HttpClient) { }


  getReclamationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reclamation/${id}`);
  }



  updateReclamation(reclamation: any): Observable<any> {
    const id = reclamation.idReclamation; // Assuming the reclamation object has an id field
    console.log(id);
    return this.http.put<any>(`${this.baseUrl}/updatereclamation/${id}`, reclamation);
  }
  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.baseUrl}/add`, reclamation);
  }

  getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/read`);
  }

  getEnAttenteReclamationNumber(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/statistics/enattente-count`);
  }

  getSolvedReclamationNumberThisMonth(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/statistics/solved-this-month-count`);
  }

  getStatisticsByReclamationType(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.baseUrl}/statistics/reclamation-type`);
  }
}
