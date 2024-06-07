import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  
} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { FormBuilder } from '@angular/forms';
import { ListeReservationComponent } from '../liste-reservation.component';
import { ReservationService } from '../../reservation-service.service';

@Component({
  selector: 'app-update-res',
  templateUrl: './update-res.component.html',
  styleUrls: ['./update-res.component.scss']
})
export class UpdateResComponent implements OnInit {
cancel() {
  this.dialogRef.close();
throw new Error('Method not implemented.');
}

  dialog: any;
  reservation: any;
ResForm: any;
res:any
reservations: any[] = [];
  constructor(public dialogRef: MatDialogRef<ListeReservationComponent>,private reservationService:ReservationService,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder
  ) {}
   
  ngOnInit(): void {
    this.reservationService.GetById(this.data.id).subscribe({
      next: (data) => this.reservation = data,
      error: (error) => console.error('Error fetching reservation:', error)  });




      this.reservationService.getReservation().subscribe((datas) => {
        this.reservations = datas;
      }, error => {
        console.error('Error fetching reservations:', error);
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
          statusReservation: [''],
          prix: ['']
        })
      });
  }

  GetAllReservation(){
    this.reservationService.getReservation().subscribe((datas) => {
      this.reservations = datas;
    }, error => {
      console.error('Error fetching reservations:', error);
    });
  }

SubmitForm() {
  this.reservationService.UpdateReservationById(this.ResForm.get('idReservation').value,this.ResForm.value).subscribe(() => {
    alert("added");
    this.dialogRef.close();
    this.GetAllReservation();
  }, error => {
    console.error('Error fetching reservations:', error);
  });
}



  
}

