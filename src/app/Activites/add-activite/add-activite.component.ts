import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActiviteService } from 'src/app/activite-service.service';
import { UpdateActiviteComponent } from '../update-activite/update-activite.component';


@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.scss'],

})
export class AddActiviteComponent implements OnInit {
  activite: any[];
  searchText:any;


  constructor(
    private activiteService: ActiviteService,
    private dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.getallactivite();
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
