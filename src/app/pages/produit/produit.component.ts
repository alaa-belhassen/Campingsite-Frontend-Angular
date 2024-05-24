import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entities/Product';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
  animations:[
    trigger('routeAnimation',[
      transition('* <=> *',[
        query(':enter,:leave',[
          style({
            position:'absolute',
            left:0,
            width:'100%',
            opacity:0,
            transform:'scale(0) translateY(100%)'
          })
        ]),
        query(':enter',[
          animate('600ms ease',
            style({opacity:1,transform:'scale(1) translateY(0)'})
          )
        ])
      ])
    ])
  ]
})
export class ProduitComponent implements OnInit {
  switch:any="SELLABLE";
  outOf=true;
  produitsFilter: any[];
  produitsRecommended:any;
  currentUser: any;
  totalItems = 0;
  searchTerm = '';
  displayedProducts: any[];
  searchText:string ='';
  itemsPerPage: number = 3;
  totalPages: number = 1;
  currentPage: number = 1;
  pages: number[] = [];
 

  constructor(private produitservice:ProduitserviceService,private router:Router,private active:ActivatedRoute , private userService:UserServiceService , private tokenStorage : TokenStorageService){
    this.currentUser = this.tokenStorage.getUser();
  }
  ngOnInit(): void {
   this.active.paramMap.subscribe(params => {
    this.id = params.get('id');
    console.log('Category:', this.id);
    console.log(this.currentUser.id);
    this.userService.RecommenderProduit(this.currentUser.id).subscribe((data) =>
      {
       this.produitsRecommended=data;
       console.log(this.produitsRecommended);
       this.Pagination(); 


      });
      console.log(this.produitsRecommended);
    
    this.produitservice.getallProduit().subscribe({
      
      next : (r) => {
        
        if(this.id!=null){
          
          this.produits= r.filter((v)=> v.id_Categorie.nom_Categorie==this.id );
          this.produitsFilter= r.filter((v)=> v.id_Categorie.nom_Categorie==this.id );
          console.log(this.produitsFilter);
          this
        }else{
          this.produits= r;
          this.produitsFilter= r.filter((v)=> v.product_Type==this.switch );
          
         

        }

      },
      error : (e) => console.log(e)
    }
   
  ) ;
 
  });
  }
  produits:Product[];
  id:any;
  productsRecommend:Product[];

  
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
  Pagination () : void {
    this.totalPages = Math.ceil(this.produitsRecommended.length / this.itemsPerPage);
    this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    this.displayedProducts = this.getUsersForPage(this.currentPage);
   }
   getUsersForPage(page: number): any[] {
    // Calcul des utilisateurs à afficher pour la page donnée.
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.produitsRecommended.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    // Changement de la page actuelle.
    this.currentPage = page;
    this.displayedProducts = this.getUsersForPage(page);
  }

  nextPage(): void {
    // Passage à la page suivante.
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.displayedProducts = this.getUsersForPage(this.currentPage);
    }
  }

  prevPage(): void {
    // Passage à la page précédente.
    if (this.currentPage > 1) {
      this.currentPage--;
      this.displayedProducts = this.getUsersForPage(this.currentPage);
    }
  }

}
