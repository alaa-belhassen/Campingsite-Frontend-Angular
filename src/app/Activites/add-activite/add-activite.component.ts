import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiviteService } from 'src/app/activite-service.service';
import { UpdateActiviteComponent } from '../update-activite/update-activite.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.scss'],

})
export class AddActiviteComponent implements OnInit {
  activite: any[];
  searchText:any;
  preRequisOptions: string[] = [];
  activiteForm: FormGroup;

  constructor(
    private activiteService: ActiviteService,
    private dialog: MatDialog,
    private fb: FormBuilder

  ) {}

  ngOnInit(): void {
    this.getallactivite();

    this.activiteService.getPreRequis().subscribe({
      next: (preRequis) => {
        this.preRequisOptions = preRequis;
      },
      error: (error) => console.error('Error fetching pre_requis options:', error)
    });
    this.activiteForm = this.fb.group({
      idActivite: [''],
      nomActivite: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      participants: ['', Validators.required],
      lieu: ['', Validators.required],
      status: [false],
      prix: ['', Validators.required],
      pre_requis: ['', Validators.required]
    });
  }



  Activite: any[] = [];

  addactivity() {
    this.activiteService.addActivite(this.activiteForm.value).subscribe(() => {
      alert("activite added");
    this.getallactivite();
    }, error => {
      console.error('Zaffer rahi khlett', error);
    });
  }


  getallactivite() {
    this.activiteService.getActivite().subscribe({
      next: (datas) => {
        this.activite = datas;
      },
      error: (error) => {
        console.error('Error fetching activites:', error);
      }
    });
  }

  deleteActivite(id: any) {
    this.activiteService.deleteActivite(id).subscribe({
      next: () => {
        alert('Supprimé avec succes');
        this.getallactivite();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateActivite(ID: any) {
    const dialogRef = this.dialog.open(UpdateActiviteComponent, {
      width: '600px',
      data: { id: ID },
    });
    console.log(ID)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getallactivite(); // Refresh the list after updating
      }
    });
  }
}
