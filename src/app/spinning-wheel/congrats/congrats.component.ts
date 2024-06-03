import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss'],

})
export class CongratsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
