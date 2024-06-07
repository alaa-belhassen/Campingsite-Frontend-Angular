import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../reservation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res-client',
  templateUrl: './res-client.component.html',
  styleUrls: ['./res-client.component.scss']
})
export class ResClientComponent implements OnInit {
  ResForm: FormGroup;
 
  constructor(private fb: FormBuilder, private reservationService: ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.ResForm = this.fb.group({
      idReservation: [''],
      campeurId: [1],
      campsiteId: [1],
      detailReservation: this.fb.group({
        detailResId: [''],
        dateArrivee: [''],
        dateDepart: [''],
        nombreCampeurs: [''],
        statusReservation: [''],
        prix: [450.6]
      })
    });
  }

 
  SubmitForm() {
    this.reservationService.addReservation(this.ResForm.value).subscribe(() => {
      alert("Campsite disponible a reserver");
     
      this.router.navigate(['/usercampsite'])

    }, error => {
      console.error('Error fetching reservations:', error);
    });
  }
  
  alert(){
    alert("Campsite disponible a reserver");

  }
  
    
  }