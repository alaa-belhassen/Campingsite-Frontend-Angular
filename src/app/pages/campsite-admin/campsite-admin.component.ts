import { Component, OnInit } from '@angular/core';
import {CampsiteService} from "../../services/campsite.service";

import {
  MatDialog,
} from '@angular/material/dialog';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-campsite-admin',
  templateUrl: './campsite-admin.component.html',
  styleUrls: ['./campsite-admin.component.scss']
})
export class CampsiteAdminComponent implements OnInit {

  searchText:any;
  pendingcampsites: any;

  constructor(private campsiteService:CampsiteService,private fb: FormBuilder,public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.campsiteService.getAllPendingCampsites().subscribe((datas) => {
      this.pendingcampsites = datas;
    }, error => {
      console.error('Error fetching reservations:', error);
    });



  }


//refresh pending list
  getAllPendingCampsite(){
    this.campsiteService.getAllPendingCampsites().subscribe((datas) => {
      this.pendingcampsites = datas;
    }, error => {
      console.error('Error fetching reservations:', error);
    });
  }

  DesapprouveCampsite(id:any){
    this.campsiteService.depprouveCampsite(id).subscribe(data=>{
        alert(" campsite disapprouved  !");
        this.getAllPendingCampsite();
        console.log(id);}
      , error => {
        console.error('Error fetching pending campsites:', error);
      });
  }


  approuveCampsite(id:any){
    this.campsiteService.approuveCampsite(id).subscribe(data=>{
        alert(" campsite approuved  !");
        this.getAllPendingCampsite();
        console.log(id);}
      , error => {
        console.error('Error fetching pending campsites:', error);
      });
  }



}


