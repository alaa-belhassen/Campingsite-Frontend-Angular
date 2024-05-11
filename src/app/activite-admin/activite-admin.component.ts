import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../activite.service';

@Component({
  selector: 'app-activite-admin',
  templateUrl: './activite-admin.component.html',
  styleUrls: ['./activite-admin.component.scss']
})
export class ActiviteAdminComponent implements OnInit {



  constructor(private activiteService: ActiviteService) {

  }

  ngOnInit(): void {
  }

  activite: any = {
    nomActivite: "",
    description: "",
    date: "",
    participants: 0, // Assuming participants is a number
    lieu: "",
    status: false,
    pre_requis: ""
  };

  Activite: any[] = [];

  addactivity(activite: any) {
    this.activiteService.addactivite(activite).subscribe(() => {
      alert("activite added");
    }, error => {
      console.error('Zaffer rahi khlett', error);
    });
  }

}
