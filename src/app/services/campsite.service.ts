import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../model/photo";

@Injectable({
  providedIn: 'root'
})
export class CampsiteService {
  imageUrl: string = "";
  imageUrls: string[] = [];
  constructor(private http:HttpClient) { }

  getPhotosByDetailCampsite(id: any): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8082/camp/photos/list/${id}`);
  }

  //ajout campsite
  ajout(campsitevalue){
console.log(campsitevalue);
    return    this.http.post("http://localhost:8082/camp/campsites/add",campsitevalue)

}

//ajout avec affectation
  ajoutDetailCampsite(campsitevalue,lieu:any ){
    console.log(campsitevalue);
    return    this.http.post(`http://localhost:8082/camp/details/add/${lieu}`,campsitevalue,lieu)

  }

  getAll(){

    return    this.http.get("http://localhost:8082/camp/campsites/Consulter")


  }
/*

  loadImageData(): void {
    // Make a GET request to fetch image data from your Spring Boot backend
    this.http.get<any>('http://localhost:8082/camp/photos/get/1', { responseType: 'arraybuffer' as 'json' })
      .subscribe((data: ArrayBuffer) => {
        // Convert the received binary data to a base64 string
        const base64Image: string = btoa(String.fromCharCode.apply(null, new Uint8Array(data)));
        // Set the imageUrl property to the base64 string
        this.imageUrl = 'data:image/jpeg;base64,' + base64Image;
      }, error => {
        console.error('Error fetching image data:', error);
      });
  }
*/

  loadImageData(id: number): void {
    // Make a GET request to fetch image data from your Spring Boot backend
    this.http.get(`http://localhost:8082/camp/photos/get/${id}`, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        // Convert the received binary data to a base64 string
        const base64Image: string = this.arrayBufferToBase64(data);
        // Set the imageUrl property to the base64 string
        this.imageUrl = 'data:image/jpeg;base64,' + base64Image;
      }, error => {
        console.error('Error fetching image data:', error);
      });
  }

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  getImageUrls():string[]{
    return this.imageUrls;
  }

//ajout dans la liste favoris
  addToFavorite() {

    console.log('Added to favorites:');
  }

  archiver(id:any){
   return  this.http.put(`http://localhost:8082/camp/campsites/Supprimer/${id}`,null)
  }
  updateCampsite(){

  }
//utilise dans list-campsite component.ts affiche le campsite a partir de l'id du detail campsite
  getCampsiteByDetailCamp(id:any){
    return  this.http.get(`http://localhost:8082/camp/campsites/Rechercher/${id}`)
  }
//utilise dans list-campsite component.ts affiche les  detail du campsite a partir de l'id du detail campsite
  getDetailCampsite(id:any){
    return  this.http.get(`http://localhost:8082/camp/details/Rechercher/${id}`)
  }

  //cloudinary part
  public list():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.imageUrl)
  }

  public upload(image:File):Observable<any>{
    const formData=new FormData();
    formData.append("multipartFile",image);
    return this.http.post<any>('http://localhost:8082/camp/photos/upload',formData);
  }


  public uploadAndAffecttoDetailCampsite(image:File,descriptionDetailCampsite:any):Observable<any>{
    const formData=new FormData();
    formData.append("multipartFile",image);
    return this.http.post<any>(`http://localhost:8082/camp/photos/upload/${descriptionDetailCampsite}`,formData);
  }



  public delete(id:any):Observable<any> {
    return this.http.delete<any>(`http://localhost:8082/camp/photos/delete/${id}`)
  }





}
