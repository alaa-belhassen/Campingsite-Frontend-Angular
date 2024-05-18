import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CampsiteService} from "../../services/campsite.service";
import {StepperSelectionEvent} from "@angular/cdk/stepper";

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.scss']
})
export class CampsiteComponent implements OnInit {

  isLinear = false;

  thirdFormGroup: FormGroup;
  previousIndex: number = 0;


  constructor(private  campsiteservice:CampsiteService,private _formBuilder: FormBuilder) {

  }

  onSubmit() {
    console.log('Form Submitted');
    // Handle form submission
  }

  ngOnInit(): void {


  }

  secondFormGroup:FormGroup= new FormGroup({
    description:new FormControl(),
    coordonne:new FormControl(),
    duree:new FormControl(),
    heuredepart:new FormControl()

  })



  firstformgrp:FormGroup= new FormGroup({

    lieu: new FormControl(),
    region:new FormControl(),
    prix:new FormControl(),
    status:new FormControl(),
    places:new FormControl(),
    date_prevu:new FormControl()

  })



  AjoutCampsite(){
    this.campsiteservice.ajout(this.firstformgrp.value).subscribe({
      next:()=>{
        console.log("done")

      },
      error:(e)=>{
        console.log(e)
      }

    })
  }


  AjoutDetailCampsite(){
    console.log(this.firstformgrp.value)
    this.campsiteservice.ajoutDetailCampsite(this.secondFormGroup.value,this.firstformgrp.value.lieu).subscribe({
      next:()=>{
        console.log("done")

      },
      error:(e)=>{
        console.log(e)
      }

    })
  }

  onStepChange(event: StepperSelectionEvent) {
    if (event.selectedIndex > this.previousIndex) {

      if (event.selectedIndex === 1) {
        console.log(this.firstformgrp.value.lieu)
        this.AjoutCampsite();
      } else if (event.selectedIndex === 2) {

//ajout detailCampsite + affecter  campsite l detail campsite
        console.log(this.secondFormGroup.value.id)
        this.AjoutDetailCampsite();

      } else if (event.selectedIndex === 3) {
//rules w nzid stepper l images

      }
    }
    this.previousIndex = event.selectedIndex;

  }
}
