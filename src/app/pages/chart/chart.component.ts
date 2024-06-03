import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmComponent } from 'src/app/components/dialog/confirm/confirm.component';
import { PaymeRequest } from 'src/app/entities/PaymeRequest';
import { Panier } from 'src/app/entities/panier';
import { CommandeService } from 'src/app/services/commande.service';
import { PaymeService } from 'src/app/services/payme.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
interface Commande {
  date_Commande: Date;
  total_Commande: number;
  type_Commande: string;
  paymentMethode: string;
  payment_token: string;
  transaction: number;
  dateDeRetour:Date
}
@Component({
  selector: 'app-chart-panier',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('void', style({ opacity: 1 })),
      transition(':leave', [
        animate(300, style({ opacity: 0 }))
      ]),
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('300ms', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class ChartComponent implements OnInit {

  paniers:any;
  hideProp=true;
  paniersFilter:any;
  editmode=false;
  @ViewChild('quantier') myInput: ElementRef;
  @ViewChild('dateRetour') dateRetour: ElementRef;
  Invalid=false;
  valid=false;
  panier:Panier;
  switch:any='SELLABLE';
  total:any;
  message:any;
  constructor(private commandeService:CommandeService,private servicePanier:ProduitserviceService,private dialog: MatDialog,private payement:PaymeService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this.servicePanier.getAllPanier().subscribe({
      next:(r)=>{this.paniers=r
        console.log(r)
        this.paniersFilter = this.paniers.filter((e)=> e.produit.product_Type=='SELLABLE')
        console.log(this.paniersFilter)
        this.calculTotal();
      }
    })
  }

  remove(id:any){
    this.servicePanier.deletePanier(id).subscribe({
      next:()=> {this.paniersFilter = this.paniersFilter.filter((e)=>e.produit.idProduct !== id);
        this.calculTotal();
      } ,
      error:(e)=> console.log(e)
    })
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
           let foundvalue = this.paniers.filter((panier)=> panier.produit.idProduct==idproduit );
           console.log(foundvalue)
           this.valid=true;
           this.message='update successful';
           setTimeout(() => {
             this.valid = false;
           }, 2000);
           foundvalue[0].quantiter=value;
           this.calculTotal();
          },
          error:(e)=> {
            this.message="update failed"
            this.Invalid = true;
              setTimeout(() => {
                this.Invalid = false;
              }, 2000);
          }
        })  
      }
    }
  }
  switchTo(value:any){
    if(value=="SELLABLE"){
      this.switch="RENTABLE"
      this.paniersFilter = this.paniers.filter((e)=> e.produit.product_Type!='SELLABLE')
      this.calculTotal();

    }
    else{
      this.switch="SELLABLE"
      this.paniersFilter = this.paniers.filter((e)=> e.produit.product_Type=='SELLABLE')
      this.calculTotal();
    }
  }
  calculTotal(){
    
    this.total = this.paniersFilter.map((v)=>v.produit.prix*v.quantiter);
    this.total = this.total.reduce((acc, curr) => acc + curr, 0);
  }

  openDialog(produitId:any,productname:any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        prix: productname
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result=='accept'){
        this.remove(produitId);
      }
    });
  }



  

  paymeForm = new FormGroup({
    amount:new FormControl(0, Validators.required),
    note:new FormControl('', Validators.required),
    first_name:new FormControl('', Validators.required),
    last_name:new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    phone:new FormControl('', Validators.required),
    return_url:new FormControl('', Validators.required),
    cancel_url:new FormControl('', Validators.required),
    webhook_url:new FormControl('', Validators.required),
    order_id:new FormControl('', Validators.required)
  });

  processPayment(_idproduit?:any,amount?:any) {
    if(this.dateRetour?.nativeElement?.value==''&& amount!=0 && _idproduit){
      this.message="Set Retourn Date"
      this.Invalid = true;
        setTimeout(() => {
          this.Invalid = false;
        }, 2000);
    }
    if(this.dateRetour?.nativeElement?.value!=''){
      if(amount!=0 && _idproduit){
        let today = new Date()
        let selectedtoday = new Date(this.dateRetour?.nativeElement?.value)
        const dayDifference: number = Math.abs(Math.floor((today.getTime() - selectedtoday.getTime()) / (1000 * 60 * 60 * 24)));
        this.total=amount*dayDifference;

      }
      this.paymeForm.setValue({
        amount: this.total,
        note: 'Order #123',
        first_name: 'John',
        last_name: 'Doe',
        email: 'test@paymee.tn',
        phone: '+21611222333',
        return_url: "https://localhost:4200/payementdone/"+this.switch+"?dateDeRetour="+this.dateRetour?.nativeElement?.value+"&idproduit="+_idproduit+"&payment_token=",
        cancel_url: 'https://www.cancel_url.tn',
        webhook_url: 'https://www.webhook_url.tn',
        order_id: '244557'
      });
  
      this.payement.create(this.paymeForm.getRawValue()).subscribe(
            (response:any) => {
              console.log('Payment successful:', response);
              window.location.href = response.data.payment_url;
      
              // Handle successful payment response
            },
            error => {
              console.error('Payment failed:', error);
              // Handle payment error
            }
          );
    }
  }

}




