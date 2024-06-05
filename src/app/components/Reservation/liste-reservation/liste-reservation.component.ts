import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatDialog,
} from '@angular/material/dialog';

import { ReservationService } from '../reservation-service.service';


@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.scss'],
  providers: [ReservationService],
 
 
})
export class ListeReservationComponent implements OnInit {
 

  searchText:any;
  title = 'mission';
  reservations: any[] = [];
  ResForm: any;
  campaignTwo :any;
  futureResrvation:any;
  user:any;
  ResPro: any;
  Resc:any;
  constructor(private reservationService: ReservationService, private fb: FormBuilder,public dialog: MatDialog) {
    
    const checked = true;
    const disabled = false;
   this.campaignTwo = new FormGroup({
      start: new FormControl(''),
      end: new FormControl(''),
    });
    this.ResForm = this.fb.group({
      idReservation: [''],
      campeurId: [''],
      campsiteId: [''],
      detailReservation: this.fb.group({
        detailResId: [''],
        dateArrivee: [''], // Add dateArrivée field
        dateDepart: [''], // Add dateDépart field
        nombreCampeurs: [''],
        prix: ['']
      })
    });
  }


  ngOnInit(): void {
    this.reservationService.getReservation().subscribe((datas) => {
      this.reservations = datas;
    }, error => {
      console.error('Error fetching reservations:', error);
    });

    this.getFutureReservations();
    this.getUser();
    this.getnbrReservationInprogress();
    this.nbrReservationCampsite();
  }
  
  getUser() {
    this.reservationService.getUser().subscribe((data)=>{
      this.user=data;}
    );
  }
  
  getnbrReservationInprogress() {
    this.reservationService.nbrReservationInprogress().subscribe((data)=>{
      this.ResPro=data;}
    ); 
  }

  nbrReservationCampsite() {
    this.reservationService.nbrReservationCampsite().subscribe((data)=>{
      this.Resc=data;}
    ); 
  }
  
  getFutureReservations() {
    this.reservationService.getFutureReservations().subscribe((data)=>{
      this.futureResrvation=data;}
    );console.log(this.futureResrvation);
  }
  SubmitForm() {
    this.reservationService.addReservation(this.ResForm.value).subscribe((datas) => {
      alert("added");
      this.GetAllReservation();
    }, error => {
      console.error('Error fetching reservations:', error);
    });
  }
  GetAllReservation(){
    this.reservationService.getReservation().subscribe((datas) => {
      this.reservations = datas;
    }, error => {
      console.error('Error fetching reservations:', error);
    });
  }
  
  DeleteReservation(ID:any){
    this.reservationService.DeleteReservationById(ID).subscribe(data=>{
      alert("Reservation deleted !");
      this.GetAllReservation();
      console.log(ID);}
      , error => {
        console.error('Error fetching reservations:', error);
      });
  }


  

}


