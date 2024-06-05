import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';


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
    reservationsList:any[] = [
    {
        detailResID: 1,
        dateArrivee: new Date('2024-07-01'),
        dateDepart: new Date('2024-07-10'),
        nombreCampeurs: 4,
        prix: 300.0,
        idReservation: 101,
        campeurName: "jaouadi_tasnim",
        
        campSite: "tabarka"
    },
    {
        detailResID: 2,
        dateArrivee: new Date('2024-08-05'),
        dateDepart: new Date('2024-08-15'),
        nombreCampeurs: 2,
        prix: 200.0,
        idReservation: 102,
        campeurName: "mohamed salah",
        
        campSite: "SidiBouSaid"
    },
    {
        detailResID: 3,
        dateArrivee: new Date('2024-09-10'),
        dateDepart: new Date('2024-09-20'),
        nombreCampeurs: 6,
        prix: 450.0,
        idReservation: 103,
        campeurName: "user-2001",
       
        campSite: "Ain drahem"
    },{
      detailResID: 4,
      dateArrivee: new Date('2024-10-01'),
      dateDepart: new Date('2024-10-10'),
      nombreCampeurs: 3,
      prix: 250.0,
      idReservation: 104,
      campeurName: "John Doe",
      campSite: "Hammamet"
  },
  {
      detailResID: 5,
      dateArrivee: new Date('2024-11-15'),
      dateDepart: new Date('2024-11-25'),
      nombreCampeurs: 5,
      prix: 400.0,
      idReservation: 105,
      campeurName: "Alice Smith",
      campSite: "Djerba"
  },
  {
      detailResID: 6,
      dateArrivee: new Date('2024-12-05'),
      dateDepart: new Date('2024-12-15'),
      nombreCampeurs: 2,
      prix: 150.0,
      idReservation: 106,
      campeurName: "Emily Johnson",
      campSite: "Tozeur"
  }
];


  searchText:any;
  title = 'mission';
  reservations: any[] = [];
  ResForm: any;
  futureResrvation:any;
  user:any;
  ResPro: any;
  Resc:any;
  constructor(private reservationService: ReservationService, private fb: FormBuilder,public dialog: MatDialog) {
    
    const checked = true;
    const disabled = false;
    
  
  }


  ngOnInit(): void {
    this.reservationService.getReservation().subscribe((datas) => {
      this.reservations = datas;
    }, error => {
      console.error('Error fetching reservations:', error);
    });

    this.getFutureReservations();
    this.getUser();
  
    this.nbrReservationCampsite();
  }
  
  getUser() {
    this.reservationService.getUser().subscribe((data)=>{
      this.user=data;}
    );
  }
  
  // getnbrReservationInprogress() {
  //   this.reservationService.nbrReservationInprogress().subscribe((data)=>{
  //     this.ResPro=data;}
  //   ); 
  // }

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


