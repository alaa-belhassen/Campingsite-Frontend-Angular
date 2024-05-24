import { Component, Input, OnInit } from '@angular/core';
import { Panier } from 'src/app/entities/panier';
import { ProduitserviceService } from 'src/app/services/produitservice.service';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.scss']
})
export class CardProduitComponent implements OnInit {

  constructor(private produitservice:ProduitserviceService) { }
  @Input() img;
  @Input() title;
  @Input() description;
  @Input() type;
  @Input() price;
  @Input() quantiter;
  @Input() id: number;
  @Input() urlImg:any;
  number=0;
  panier:Panier;
  ngOnInit(): void {
    console.log(this.id)
  }
  moin(){
    if(this.number>=1){
      this.number--;
    }
  }
  plus(){
    if(this.number+1<=this.quantiter)
      this.number ++;
  }
  add(){
    this.panier = new Panier(this.number,this.id)
    this.produitservice.addToChart(this.panier).subscribe(
      {
        next:()=>{console.log('done');
          this.quantiter=this.quantiter-this.number;
          this.number=0;
        },
        error:(e)=>{
          console.log(e);
          this.number=0;
        }
      }
    );
  }

}
