import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActiviteService } from 'src/app/activite-service.service';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.scss']
})
export class UpdateActiviteComponent implements OnInit {
  activiteForm: FormGroup;
  activitee: any
  preRequisOptions: string[] = [];
  activiteList:any[];

  constructor(
    public dialogRef: MatDialogRef<UpdateActiviteComponent>,
    private activiteService: ActiviteService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getallactivite();
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

    this.activiteService.getActiviteById(this.data.id).subscribe({
      next: (activite) => {
        this.activitee = activite;
        console.log(this.activitee)
      },
      error: (error) => console.error('Error fetching activite:', error)
    });

    this.activiteService.getPreRequis().subscribe({
      next: (preRequis) => {
        this.preRequisOptions = preRequis;
      },
      error: (error) => console.error('Error fetching pre_requis options:', error)
    });
  }

  getallactivite() {
    this.activiteService.getActivite().subscribe({
      next: (datas) => {
        this.activiteList = datas;
      },
      error: (error) => {
        console.error('Error fetching activites:', error);
      }
    });
  }
  updateActivite() {
      this.activiteService.updateActiviteById(this.data.id, this.activiteForm.value).subscribe({
        next: () => {
          alert('Updated successfully');
          this.dialogRef.close();
          this.getallactivite();

        },
        error: (error) => console.error('Error updating activite:', error)
      });
    }

  cancel() {
    this.dialogRef.close();
  }
}
