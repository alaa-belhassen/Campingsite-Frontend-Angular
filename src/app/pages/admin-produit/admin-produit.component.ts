import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Panier } from 'src/app/entities/panier';
import { ProduitserviceService } from 'src/app/services/produitservice.service';

@Component({
  selector: 'app-admin-produit',
  templateUrl: './admin-produit.component.html',
  styleUrls: ['./admin-produit.component.scss']
})
export class AdminProduitComponent implements OnInit {


    paniers:any;
    hideProp=true;
    paniersFilter:any;
    editmode=false;
    @ViewChild('quantier') myInput: ElementRef;
    panier:Panier;
    switch:any='sellable';
    constructor(private servicePanier:ProduitserviceService) { }
  
    ngOnInit(): void {

      this.getAll();
    }
    
    getAll(){
      this.servicePanier.getallProduit().subscribe({
        next:(r)=>{this.paniers=r
          console.log(r)
          this.paniersFilter = this.paniers.filter((e)=> e.product_Type=='SELLABLE')
        }
      })
    }
    
    hide(){
      this.hideProp=false;
    }
    remove(id:any){
      this.servicePanier.deleteProduit(id).subscribe({
        next:(p)=>this.paniersFilter=this.paniersFilter.filter((e)=>e.idProduct!=id) ,
        error:(e)=>console.log(e)
      })
    }
    buy(){
  
    }
    edit(quantiter:any,idproduit:any){
      if ( this.editmode==true){
        this.editmode=false;
      }else{
        this.editmode=true;
      }
      if(this.myInput){
      const value = this.myInput.nativeElement.value;
        if(quantiter!=value){
          this.panier = new Panier(value,idproduit);
          console.log(value)
          this.servicePanier.updatequantiter(this.panier).subscribe({
            next:()=>{
             let foundvalue = this.paniers.filter((panier)=> panier.idProduct==idproduit );
             console.log(foundvalue)
             foundvalue[0].quantiter=value;
            },
            error:(e)=> console.log(e)
          })
        }
      }
    }
    switchTo(value:any){
      if(value=="sellable"){
        this.switch="rentable"
        this.paniersFilter = this.paniers.filter((e)=> e.product_Type!='SELLABLE')
      }
      else{
        this.switch="sellable"
        this.paniersFilter = this.paniers.filter((e)=> e.product_Type=='SELLABLE')
      }
    }
  
  
  }
  


