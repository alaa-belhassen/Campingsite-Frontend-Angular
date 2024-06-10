import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../../activite-service.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ResClientComponent } from 'src/app/components/Reservation/res-client/res-client.component';
import { ReserverActiviteComponent } from 'src/app/components/Reservation/reserver-activite/reserver-activite.component';

@Component({
  selector: 'activite-cards',
  templateUrl: './activite-cards.component.html',
  styleUrls: ['./activite-cards.component.scss']
})
export class ActiviteCardsComponent implements OnInit {

  activite:any[];
  activiteRecommended:any[];

  title = 'Activites-cards'

  constructor(private activiteService: ActiviteService,public dialog: MatDialog) {
  }


  openDialog() {
    this.dialog.open(ReserverActiviteComponent);
  }
  ngOnInit(): void {
    this.activiteService.getActivite().subscribe((datas)=>{
        this.activite= datas;
        this.activiteRecommended=this.activite.slice(0, 3);
    }, error => {
      console.error('Error zaffer rahi khlett', error);
    });


  }

  getallactivite(){
    this.activiteService.getActivite().subscribe((datas)=>{
      this.activite= datas;
  }, error => {
    console.error('Error zaffer rahi khlett', error);
  })
  }

  deleteactivite(id: any) { // Corrected function name
    this.activiteService.deleteActivite(id)
      .subscribe(
        res => { alert('Supprimé avec succes')
          this.getallactivite();
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  ReserverActivite(activiteID:any){
 
  }

}
