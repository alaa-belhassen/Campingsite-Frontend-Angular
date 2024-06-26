import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  constructor(private token : TokenStorageService ,private service:ProduitserviceService,private router:Router,private _formBuilder: FormBuilder) { }
  categories:any;
  produit:any;
  @ViewChild('stepper') private myStepper: MatStepper;

  ngOnInit(): void {
    this.getAllcategories()
  }
  select(value:String){
    this.formGroup.get('product_Type').setValue(value);
  }
  selectCategorie(value:any){
    this.formGroup.patchValue({
      id_Categorie: {
        id_Categorie: value.id_Categorie,
        nom_Categorie: value.nom_Categorie,
      },
    });
  }
  formGroup:FormGroup = new FormGroup({
    nomProduct : new FormControl("",Validators.required),
    product_Type : new FormControl("",Validators.required),
    id_Categorie : new FormGroup({
      id_Categorie : new FormControl(),
      nom_Categorie : new FormControl(),
    }),
    quantiter : new FormControl(0,Validators.required),
    prix : new FormControl(0,Validators.required),
    prixdachat : new FormControl(0,Validators.required),
    description : new FormControl("",Validators.required),

  })


  add(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value);
      this.service.addProduit(this.formGroup.value).subscribe({
        next:(r)=> {
          this.produit=r
          this.nextStep()
          },
        error:(e) => console.log(e)
      })
    }
  }
  getAllcategories(){
    this.service.getAllCategorie().subscribe({
      next:(r)=>this.categories=r
    })
  }
  nextStep() {
    this.myStepper.next();
  }
  redirect(){
    this.router.navigate(["/addproduit"]);
    if(    this.token.getRole()      =="ADMIN"){
      this.router.navigate(["/adminProduit"]);
    }else{
      this.router.navigate(["/addproduit"]);

    }
  }

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

}
