import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../activite.service';

@Component({
  selector: 'app-modify-activite',
  templateUrl: './modify-activite.component.html',
  styleUrls: ['./modify-activite.component.scss']
})
export class ModifyActiviteComponent implements OnInit {

  activite: any[];
  activiteID: any;

  constructor(private act: ActivatedRoute , private activiteService: ActiviteService ) { }

  updateActivity(){
    // Assuming this.activiteService.updateactivite() takes two parameters: the current activity to update, and the updated activity itself
    //const updatedActivity = /* Logic to update the activity */;
    //this.activiteService.updateactivite(this.activite, updatedActivity);
    // Assuming you want to update this.activite to the updated activity
    //this.activite = updatedActivity;
};




  ngOnInit(): void {
  //   this.activiteID = this.act.snapshot.paramMap.get('id')
  //   this.activiteService.getActiviteById(this.activiteID)
  //   .subscribe
  //   res => {
  //     this.activite = res;
  //   }
  //   err=> {
  //     console.log(err)
  //   }

    }

}
