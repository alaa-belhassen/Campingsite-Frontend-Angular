import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { FormBuilder, FormGroup } from '@angular/forms';
>>>>>>> 04053d5d936f1418425884daafe194d157729e5d
import { ReservationService } from '../reservation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res-client',
  templateUrl: './res-client.component.html',
  styleUrls: ['./res-client.component.scss']
})
export class ResClientComponent implements OnInit {
  ResForm: FormGroup;
<<<<<<< HEAD

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.ResForm = this.fb.group({
      detailReservation: this.fb.group({
        dateArrivee: ['', Validators.required],
        dateDepart: ['', Validators.required],
        nombreCampeurs: [1, [Validators.required, Validators.min(1)]]
=======
 
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
>>>>>>> 04053d5d936f1418425884daafe194d157729e5d
      })
    });
  }

<<<<<<< HEAD
  ngOnInit(): void {
   
  }

  SubmitForm() {
   console.log(this.ResForm.value)
      this.reservationService.Reserver(this.ResForm.value, 1, 1).subscribe(() => {
        alert('Campsite disponible a reserver');
      }, error => {
        console.error('Error fetching reservations:', error);
      });
   
    
}
}
=======
 
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
>>>>>>> 04053d5d936f1418425884daafe194d157729e5d
