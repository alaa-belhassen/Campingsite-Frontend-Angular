import { Component, OnInit } from '@angular/core';
import { PaymeService } from 'src/app/services/payme.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
interface Transaction {
  transaction_id: number;
  amount: number;
}

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
  commandeFilter:any;
  commande:any;
  constructor(public servicePanier:ProduitserviceService,private paymeService:PaymeService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.servicePanier.getAllCommande().subscribe({
      next:(r)=>{this.commande=r
        console.log(r)
        this.commandeFilter = this.commande;
        console.log(this.commandeFilter)
      }
    })
  }
  refund(transactionid:any,amount:any){
    const newCommande: Transaction = {
      transaction_id: transactionid,
      amount: amount,
    };
    this.paymeService.refund(newCommande).subscribe({
      next:(r)=>console.log(r),
      error:(e)=>console.log(e)
    })
  }

}
