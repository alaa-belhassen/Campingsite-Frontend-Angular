import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuiviReclamation } from '../models/suivi-reclamation.model';

@Injectable({
  providedIn: 'root'
})
export class SuiviReclamationService {
  private apiUrl = 'http://localhost:8082/api/suiviReclamation'; // Align the URL with your Spring Boot server

  constructor(private http: HttpClient) { }

  getSuiviReclamations(): Observable<SuiviReclamation[]> {
    return this.http.get<SuiviReclamation[]>(`${this.apiUrl}/read`);
  }

  getSuiviReclamation(id: number): Observable<SuiviReclamation> {
    return this.http.get<SuiviReclamation>(`${this.apiUrl}/${id}`);
  }

  createSuiviReclamation(suiviReclamation: SuiviReclamation): Observable<SuiviReclamation> {
    return this.http.post<SuiviReclamation>(`${this.apiUrl}/add-suivireclamation`, suiviReclamation);
  }

  updateSuiviReclamation(id: number, suiviReclamation: SuiviReclamation): Observable<SuiviReclamation> {
    return this.http.put<SuiviReclamation>(`${this.apiUrl}/${id}`, suiviReclamation);
  }

  deleteSuiviReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
