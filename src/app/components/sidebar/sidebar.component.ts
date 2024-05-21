import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProduitserviceService } from 'src/app/services/produitservice.service';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    childrens?:any;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/produit', title: 'Produit',  icon:'ni ni-books text-green', class: '' ,childrens:[]},
    { path: '/reservation', title: 'Reservation',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/campsite', title: 'campsite',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  display=false;
  categories:any;
  produiturl:any;
  drop=false;
  constructor(private location: Location,private router: Router,private active:ActivatedRoute,private categoriesService:ProduitserviceService) {
   
  }

  ngOnInit() {

    this.navigateToProductDetail();
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   
}

  navigate(path:any){
    this.router.navigate([path]).then(  ()=>  this.navigateToProductDetail());
  }
  navigateToProductDetail() {
    
    this.produiturl=this.router.url;
    if(this.produiturl=='/produit'){
      this.getCategories();
      this.drop=true;
    }else{
      const produitMenuItem = ROUTES.find(menuItem => menuItem.title === 'Produit');
      if (produitMenuItem && produitMenuItem.childrens) {
        produitMenuItem.childrens=[];
      }        
      this.drop=false;
    } 
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }
  isChildActive(parentRoute: string) {
    console.log(this.active.firstChild)

  }
 getCategories(){
   if(!this.drop){
    this.categoriesService.getAllCategorie().subscribe({
      next:(categories:any)=>{
        const produitMenuItem = ROUTES.find(menuItem => menuItem.title === 'Produit');
        console.log(categories)
        if (produitMenuItem && produitMenuItem.childrens) {
          categories.forEach(category => {
            produitMenuItem.childrens.push({
              path: `/produit/${category.nom_Categorie}`, // Adjust the path as needed
              title: category.nom_Categorie,
              icon: 'ni ni-bold-right text-blue',
              class: ''
            });
          });
        }
        console.log(ROUTES);
        },
      error:(e)=>{
        console.log(e);
      }
    })
   }
   
  }

  
}
