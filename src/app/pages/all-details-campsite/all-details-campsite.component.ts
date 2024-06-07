import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {CampsiteService} from "../../services/campsite.service";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-all-details-campsite',
  templateUrl: './all-details-campsite.component.html',
  styleUrls: ['./all-details-campsite.component.scss']
})
export class AllDetailsCampsiteComponent implements OnInit {
  public id;
  photos$: Observable<string[]>;
  campsiteInfos: any;
  campsiteRules: any;
  searchText:any;

  constructor(private route: ActivatedRoute,private campsiteService:CampsiteService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Récupère l'ID à partir des paramètres de route
      this.photos$ = this.campsiteService.getPhotosByDetailCampsite(this.id);
      this.getCampsiteInfos(this.id)
      this.getRulesbyCampsite(this.id)
    });





}



  getBase64Image(photo: string): string {
    // Assuming the photo string is already in base64 format, you may need additional processing here
    return 'data:image/jpeg;base64,' + photo;
  }

  getImageUrl(): String {
    return this.campsiteService.getImageUrl();
  }


  setArchivedTrue(id:any) {
   this.campsiteService.archiver(id).subscribe({
     next:()=> {
       console.log('archived is set true');
    } ,
     error:(err)=>{
       console.log(err);

     }
   })
  }

  update() {
    this.campsiteService.updateCampsite();
    console.log('updated successfully');

  }


  getCampsiteInfos(id:any) {
    this.campsiteService.getCampsiteByDetailCamp(id).subscribe({
      next:(data)=> {
        this.campsiteInfos = data;
        console.log('afficher');
      } ,
      error:(err)=>{
        console.log(err);

      }
    })
  }
  idcamp:any
  getRulesbyCampsite(id:any) {
    this.campsiteService.getCampsiteByDetailCamp(id).subscribe({
      next:(data:any)=> {
        console.log(data.campsiteid)
        this.idcamp = data.campsiteid;
this.campsiteService.getAllRulesByIdCamp(this.idcamp).subscribe({
  next:(data1:any)=> {
    this.campsiteRules=data1
  },
  error(e){
    console.log(e)
  }
})
        console.log('afficher jjnk'+this.campsiteRules.length);
      } ,
      error:(err)=>{
        console.log(err);

      }
    })
  }

}
