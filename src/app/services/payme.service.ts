import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Token 3289bd31db5eba778f357f2f4b8b8909708e0aac`
});
@Injectable({
  providedIn: 'root'
})
export class PaymeService {
 
  constructor(private http:HttpClient) { }
  create(payme:any){
    
    return this.http.post('https://sandbox.paymee.tn/api/v2/payments/create',payme,{headers:headers});
  }

  check(){
    return this.http.get('https://sandbox.paymee.tn/api/v2/payments/bdbf254028447d21a092532b8f9f8d9c/check',{headers:headers});

  }
}
