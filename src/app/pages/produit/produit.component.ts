import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entities/Product';
import { ProduitserviceService } from 'src/app/services/produitservice.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  switch:any="SELLABLE";
  outOf=true;
  produitsFilter:any;
  ngOnInit(): void {
   this.active.paramMap.subscribe(params => {
    this.id = params.get('id');
    console.log('Category:', this.id);
    this.produitservice.getallProduit().subscribe({
      next : (r) => {
        if(this.id!=null){
          this.produits= r.filter((v)=> v.id_Categorie.nom_Categorie==this.id );
          this.produitsFilter= r.filter((v)=> v.id_Categorie.nom_Categorie==this.id );

        }else{
          this.produits= r;
          this.produitsFilter= r.filter((v)=> v.product_Type==this.switch );
        }

      },
      error : (e) => console.log(e)
    })    
  });
  }
  produits:Product[];
  id:any
  constructor(private produitservice:ProduitserviceService,private router:Router,private active:ActivatedRoute){
   
  }
  
  switchTo(value:any){
    if(value=="SELLABLE"){
      this.switch="RENTABLE"
      this.produitsFilter= this.produits.filter((v)=> v.product_Type==this.switch);
    }
    else if(value=="RENTABLE"){
      this.switch="SELLABLE";      
      this.produitsFilter= this.produits.filter((v)=> v.product_Type==this.switch);  
    }

    if(this.outOf==false){
      this.produitsFilter= this.produitsFilter.filter((v)=> v.product_Type==this.switch && v.quantiter>0);  
    }else{
      this.produitsFilter= this.produitsFilter; 
    }    

  }
  showOut(){
    if(this.outOf==true){
      this.produitsFilter= this.produits.filter((v)=> v.product_Type==this.switch && v.quantiter>0);  
      this.outOf=false;
    }else{
      this.produitsFilter= this.produits.filter((v)=> v.product_Type==this.switch );  
      this.outOf=true
    }
  }
  redirect(){
    this.router.navigate(["/addproduit"]);
  }

}
