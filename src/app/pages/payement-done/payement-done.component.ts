import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
interface Commande {
  date_Commande: Date;
  total_Commande: number;
  type_Commande: string;
  paymentMethode: string;
  payment_token: string;
  transaction: number;
  dateDeRetour?:Date;
}
@Component({
  selector: 'app-payement-done',
  templateUrl: './payement-done.component.html',
  styleUrls: ['./payement-done.component.scss']
})
export class PayementDoneComponent implements OnInit {
  transaction:any;
  payment_token:string;
  rentableParam: string;
  dateRetour:any;
  idproduit:any;
  ngOnInit(): void {

    this.route.url.subscribe(urlSegments => {
      this.rentableParam = urlSegments[1].path;
      console.log(this.rentableParam); // Should log 'RENTABLE'
    });

    this.route.queryParams.subscribe(params => {
      this.transaction = params['transaction'];
      this.payment_token = params['payment_token'];
      this.dateRetour = params['dateDeRetour'];
      this.idproduit = params['idproduit'];
    });
    if(this.rentableParam=="RENTABLE"){
      this.book()
    }else{
      this.addCommande();
    }
    console.log(this.dateRetour);
    
    console.log(this.removePrefix(this.payment_token,"?payment_token="));

    console.log(this.idproduit);
  }
  constructor(private commandeService:CommandeService,private route: ActivatedRoute){}
  addCommande(){
    const newCommande: Commande = {
      date_Commande: new Date(),
      total_Commande: 0,
      type_Commande: this.rentableParam,
      paymentMethode: "string",
      payment_token: this.removePrefix(this.payment_token,"?payment_token="),
      transaction: this.transaction
    };
    this.commandeService.createCommande(newCommande).subscribe({
      next:(v)=> console.log(v),
      error:(e)=>console.log(e)
    }) 
  }

  book(){
    if(this.dateRetour!=''){
      const newCommande: Commande = {
        date_Commande: new Date(),
        total_Commande: 0,
        type_Commande: this.rentableParam,
        paymentMethode: "string",
        payment_token: this.removePrefix(this.payment_token,"?payment_token="),
        transaction: this.transaction,
        dateDeRetour: this.dateRetour

      };
      this.commandeService.createSingleRentableCommande(newCommande,this.idproduit).subscribe({
        next:(v)=> console.log(v),
        error:(e)=>console.log(e)
      })
    }
  }
 removePrefix(queryString: string, prefix: string): string {
    if (queryString.startsWith(prefix)) {
      return queryString.slice(prefix.length);
    }
    return queryString;
  }
  
}
