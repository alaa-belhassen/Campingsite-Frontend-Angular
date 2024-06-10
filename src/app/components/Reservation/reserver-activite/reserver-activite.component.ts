import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation-service.service';


@Component({
  selector: 'app-reserver-activite',
  templateUrl: './reserver-activite.component.html',
  styleUrls: ['./reserver-activite.component.scss']
})
export class ReserverActiviteComponent implements OnInit {
  ResForm: FormGroup;

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.ResForm = this.fb.group({
      detailReservation: this.fb.group({
        dateArrivee: ['', Validators.required],
        dateDepart: ['', Validators.required],
        nombreCampeurs: [1, [Validators.required, Validators.min(1)]]
      })
    });
  }

  ngOnInit(): void {
   
  }

  SubmitForm() {
   console.log(this.ResForm.value)
      this.reservationService.reserverActivite( 1,this.ResForm.value, 1).subscribe(() => {
        alert('Campsite disponible a reserver');
      }, error => {
        console.error('Error fetching reservations:', error);
      });
   
    
}
}