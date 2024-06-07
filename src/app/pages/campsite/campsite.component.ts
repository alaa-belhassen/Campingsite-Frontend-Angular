import {Component, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CampsiteService} from "../../services/campsite.service";
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import {MatStepHeader, MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-campsite',
  templateUrl: './campsite.component.html',
  styleUrls: ['./campsite.component.scss']
})
export class CampsiteComponent implements OnInit {

  isLinear = true;


  previousIndex: number = 0;

id_user:any;
  constructor(private  campsiteservice:CampsiteService,private _formBuilder: FormBuilder,private renderer: Renderer2) {

  }

  onSubmit() {
    console.log('Form Submitted');
    // Handle form submission
  }

  ngOnInit(): void {

this.id_user=1;
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

  thirdFormGroup:FormGroup= new FormGroup({

    numero:new FormControl(),
    descriptionrule:new FormControl()

  })
camp:any
  AjoutCampsite(){
    this.campsiteservice.ajout(this.firstformgrp.value,this.id_user).subscribe({
      next:(data:any)=>{
        this.camp=data

        console.log("done "+data)
        console.log("done "+this.firstformgrp.value.lieu)
      },
      error:(e)=>{
        console.log(e)
      }

    })
    this.completeStep(0);

  }

detail:any
  AjoutDetailCampsite(){
   // console.log(this.idcamp.campsiteId)
    this.campsiteservice.ajoutDetailCampsite(this.secondFormGroup.value,this.camp.campsiteid).subscribe({

      next:(data)=>{
        this.detail=data
        console.log("done"+this.detail)

      },
      error:(e)=>{
        console.log(e)
      }

    })
    this.completeStep(1);

  }
   ajoutRule() {
  this.campsiteservice.ajoutRule(this.thirdFormGroup.value,this.camp.campsiteid).subscribe({

    next:(r)=>{
      console.log("done"+r)

    },
    error:(e)=>{
      console.log(e)
    }

  })
     this.completeStep(2);

   }

  onStepChange(event: StepperSelectionEvent) {
    if (event.selectedIndex > this.previousIndex) {

      if (event.selectedIndex === 1) {
        console.log(this.firstformgrp.value.lieu)
        this.AjoutCampsite();
      } else if (event.selectedIndex === 2) {

//ajout detailCampsite + affecter  campsite l detail campsite
        console.log(this.secondFormGroup.value.description)
        this.AjoutDetailCampsite();

      } else if (event.selectedIndex === 3) {
//rules w nzid stepper l images
        console.log(this.thirdFormGroup.value)
        this.ajoutRule();

      }
    }
    this.previousIndex = event.selectedIndex;

  }
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChildren(MatStepHeader) stepHeaders: QueryList<MatStepHeader>;

  completeStep(stepIndex: number) {
    const step = this.stepper._steps.toArray()[stepIndex];
    const stepHeader = this.stepper._stepHeader.toArray()[stepIndex];

    // Add the green-step class to the step header
    this.renderer.addClass(stepHeader._elementRef.nativeElement, 'green-step');

    // Disable the step
    step.editable = false;
    step.completed = true;
  }

}
