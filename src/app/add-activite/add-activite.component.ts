import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../activite.service';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.scss']
})
export class AddActiviteComponent implements OnInit {

  activite:any[];

  constructor(private activiteService: ActiviteService) {
  }

  ngOnInit(): void {
    this.activiteService.getactivite().subscribe((datas)=>{
        this.activite= datas;
    }, error => {
      console.error('Error zaffer rahi khlett', error);
    })
  }

  getallactivite(){
    this.activiteService.getactivite().subscribe((datas)=>{
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

}
