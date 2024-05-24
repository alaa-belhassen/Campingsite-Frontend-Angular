import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  constructor(private http: HttpClient) { }
  userURL: string = "http://localhost:8082/api/auth";
  URL : string ="http://localhost:8082/utilisateurs/";
  detailsUser : string="http://localhost:8082/detailsUser/";


  

  login(user : any ) {
    return this.http.post<{accessToken:any}>(this.userURL + "/login", user);
  }


  register(user : any ): Observable<any> {
    return this.http.post(this.userURL + "/addUser", user);
  }
  
  findUser (email : any ) : Observable<any>{
    return this.http.get(this.URL + "ExistUser/" + email);
  }
  forgetPassword (email :String) :Observable<String>{
    return this.http.get<String> (this.URL +"generateNewPassword/" +email);
  }

  addDetailsUser(detailsUser: any, email: String): Observable<any> {
   
    return this.http.post<any>(this.detailsUser +"Add-DetailsUser/" + email , detailsUser);
  }
  getFavoriteSeasonStatistics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.detailsUser}favorite-seasons`);
  }

  getFavoriteLandscapeStatistics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.detailsUser}favorite-landscapes`);
  }

  getFavoriteAccommodationTypeStatistics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.detailsUser}favorite-accommodation-types`);
  }
  ListUser () : Observable<any[]>{
    
    return this.http.get<any[]>(this.URL + "Consulter");
  }
 
  deleteUser(id: number): Observable<any>  {
   
    return this.http.put<any>(this.URL + "Supprimer/" + id, null);

  }
  updateUser (user :any):Observable<any>
  {
    return this.http.put<any>(this.URL + "Modifier", user);
  }
  getUserById(id:number) : Observable<any>

  { return this.http.get<any>(this.URL + "Rechercher/" + id, null); }

  changerMotDePasse(userId: number, ancienPassword: string, newPassword: string): Observable<any> {
    const url = `${this.URL}ChangePassword/${userId}/${ancienPassword}/${newPassword}`;
    return this.http.get<any>(url);
  }
  RecommenderProduit(id: number) : Observable<any> {
    return this.http.get<any>(this.detailsUser + "recommenderProduits/" + id);
  }
}
