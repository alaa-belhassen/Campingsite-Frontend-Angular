import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CampsiteService} from "../../services/campsite.service";

@Component({
  selector: 'app-viewcampsite-reserve',
  templateUrl: './viewcampsite-reserve.component.html',
  styleUrls: ['./viewcampsite-reserve.component.scss']
})
export class ViewcampsiteReserveComponent implements OnInit {
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

  })
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


}
