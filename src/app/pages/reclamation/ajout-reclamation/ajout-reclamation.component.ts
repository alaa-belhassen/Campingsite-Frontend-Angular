import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.scss']
})
export class AjoutReclamationComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit() {
    // Set the default status to "En Attente"
    this.reclamation.statutReclamation = "Pending";
  }

  addReclamation(reclamationForm: NgForm, event: Event) {
    event.preventDefault(); // Prevent default form submission
    if (reclamationForm.valid) {
      // Set the current date, hour, and minute
      this.reclamation.dateReclamation = new Date();
      
      this.reclamationService.addReclamation(this.reclamation).subscribe(
        (response) => {
          console.log('Reclamation added successfully!', response);
          // Clear the form after adding reclamation
          reclamationForm.resetForm();
          // Reset reclamation object and set status again
          this.reclamation = new Reclamation();
          this.reclamation.statutReclamation = "Pending";
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
