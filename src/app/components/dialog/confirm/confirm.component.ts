import { Component, ElementRef, Inject, inject, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
	standalone: true,
	encapsulation: ViewEncapsulation.None
		
})
export class ConfirmComponent  {

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {}
  closeDialog(result:any): void {
    this.dialogRef.close(result);
  }
   
  }


