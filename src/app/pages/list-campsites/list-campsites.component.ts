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
  public  id: number ;
   detailcampsiteInfos$: Observable<any>;




  constructor(private campsiteService:CampsiteService,private _liveAnnouncer: LiveAnnouncer ) { }



  ngOnInit(): void {
 // this.campsiteService.loadImageData()
  this.id=2;
    this.photos$ = this.campsiteService.getPhotosByDetailCampsite(this.id);
    this.campsiteInfos$ = this.campsiteService.getCampsiteByDetailCamp(this.id);
    this.detailcampsiteInfos$ = this.campsiteService.getDetailCampsite(this.id);

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


}
