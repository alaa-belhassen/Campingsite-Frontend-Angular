import {Component, OnInit, ViewChild} from '@angular/core';
import {CampsiteService} from "../../services/campsite.service";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";




@Component({
  selector: 'app-list-campsites',
  templateUrl: './list-campsites.component.html',
  styleUrls: ['./list-campsites.component.scss']
})
export class ListCampsitesComponent implements OnInit {

  photos$: Observable<string[]>;
  campsiteInfos$: Observable<any>;
  public  id_detailcamp: number ;
   detailcampsiteInfos$: Observable<any>;

   //liste qui va stocker liste des campsites du centre de camping
  campsitesUser: any;
  public id_user:any;


  constructor(private campsiteService:CampsiteService,private _liveAnnouncer: LiveAnnouncer,private route: ActivatedRoute,) { }



  ngOnInit(): void {
 // this.campsiteService.loadImageData()
  this.id_detailcamp=1;
    this.photos$ = this.campsiteService.getPhotosByDetailCampsite(this.id_detailcamp);
    this.campsiteInfos$ = this.campsiteService.getCampsiteByDetailCamp(this.id_detailcamp);
    this.detailcampsiteInfos$ = this.campsiteService.getDetailCampsite(this.id_detailcamp);


    //updated
    this.route.params.subscribe(params => {
      this.id_user = params['id_user']; // Récupère l'ID à partir des paramètres de route
      //this.photos$ = this.campsiteService.getPhotosByDetailCampsite(this.id);
    //  this.getCampsiteInfos(this.id)
    });

    this.getCampsitesByUSer()

  }




  getBase64Image(photo: string): string {
    // Assuming the photo string is already in base64 format, you may need additional processing here
    return photo;
  }

    getImageUrl(): String {
      return this.campsiteService.getImageUrl();
    }



  nextSeeAll() {
    this.campsiteService.getAll().subscribe({
      next: () => {
        console.log("done")
      },
      error: (e) => {
        console.log(e)
      }

    })
  }
  //lister les campsites qui appartiennent au centre de camping (user)
  getCampsitesByUSer(){
return this.campsiteService.getCampsitesByUSer(this.id_user).subscribe({
  next: (r) => {
    //pour reccuperer liste des campsite
    this.campsitesUser=r;
    console.log(r)
  },
  error: (e) => {
    console.log(e)
  }
})
  }
/**
detail:any
  //get les details campsites qui appartient a un campsite (avec l'id)
  getDetailCampsitesById_Camp(id_camp:any){
    return this.campsiteService.getDetailCampsitesByCampsite_id(id_camp).subscribe({
      next: (r) => {
        console.log(r)
        this.detail=r;
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
**/

}
