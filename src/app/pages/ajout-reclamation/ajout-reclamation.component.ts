import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../models/reclamation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.scss']
})
export class AjoutReclamationComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit() {
  }

  addReclamation(reclamationForm: NgForm, event: Event) {
    event.preventDefault(); // Prevent default form submission
    if (reclamationForm.valid) {
      this.reclamationService.addReclamation(this.reclamation).subscribe(
        (response) => {
          console.log('Reclamation added successfully!', response);
          // Clear the form after adding reclamation
          reclamationForm.resetForm();
          this.reclamation = new Reclamation();
        },
        (error) => {
          console.log('Error adding reclamation:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
