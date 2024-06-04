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
  ngOnInit(): void {
   this.active.paramMap.subscribe(params => {
    this.id = params.get('id');
    console.log('Category:', this.id);
    this.produitservice.getallProduit().subscribe({
      next : (r) => {
        if(this.id!=null)
          this.produits= r.filter((v)=> v.id_Categorie.nom_Categorie==this.id);
        else
          this.produits= r;
      },
      error : (e) => console.log(e)
    })    
  });
  }
  produits:Product[];
  id:any
  constructor(private produitservice:ProduitserviceService,private router:Router,private active:ActivatedRoute){
   
  }

  redirect(){
    this.router.navigate(["/addproduit"]);
  }

}
