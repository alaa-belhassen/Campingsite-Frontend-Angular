import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitserviceService } from 'src/app/services/produitservice.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  constructor(private service:ProduitserviceService,private router:Router,private _formBuilder: FormBuilder) { }
  categories:any;
  produit:any;
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
    nomProduct : new FormControl(),
    product_Type : new FormControl(),
    id_Categorie : new FormGroup({
      id_Categorie : new FormControl(),
      nom_Categorie : new FormControl(),
    }),
    quantiter : new FormControl(),
    prix : new FormControl(),
    description : new FormControl(),

  })


  add(){
    console.log(this.formGroup.value);
    this.service.addProduit(this.formGroup.value).subscribe({
      next:(r)=>  this.produit=r,
      error:(e) => console.log(e)
    })
  }
  getAllcategories(){
    this.service.getAllCategorie().subscribe({
      next:(r)=>this.categories=r
    })
  }


  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

}
