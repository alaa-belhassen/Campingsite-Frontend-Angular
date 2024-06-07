import { Component, OnInit } from '@angular/core';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    childrens?:any;
    roles?: string[];
}
export const ROUTES: RouteInfo[] = [
   
    //admin sidebar 
    { path: '/dashbord-admin', title: 'Dashbord',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['ADMIN']},
    { path: '/activite', title: 'Activite',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['ADMIN']},
    { path: '/ListUser', title: 'Liste des utilisateurs',  icon:'ni-bullet-list-67 text-blue', class: ''  , roles: ['ADMIN'] },
    { path: '/reservation', title: 'Reservation',  icon:'ni-bullet-list-67 text-blue', class: '', roles: ['ADMIN'] },
    { path: '/admincampsite', title: 'AdminCampsite',  icon:'ni-bullet-list-67 text-blue', class: '', roles: ['ADMIN'] },
    { path: '/campsite', title: 'campsite',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['ADMIN']  },
    { path: '/adminProduit', title: 'adminproduit',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['ADMIN']  },
    { path: '/produitDashboard', title: 'produitDashboard',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['ADMIN']  },

    //camper sidebar
    { path: '/Spinning wheel', title: 'Spinning Wheel',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['CAMPEUR']},
    { path: '/card-activite', title: 'activite-cards',  icon:'ni-bullet-list-67 text-blue', class: '', roles: ['CAMPEUR'] },
    { path: '/usercampsite', title: 'UserCampsite',  icon:'ni-bullet-list-67 text-blue', class: '' , roles: ['CAMPEUR']},
    { path: '/ajout-reclamation', title: 'Ajout Reclamation', icon: 'ni-bullet-list-67 text-blue', class: '' , roles: ['CAMPEUR']},
    { path: '/afficher-reclamation-client', title: 'Afficher Reclamation Client', icon: 'ni-bullet-list-67 text-blue', class: '' , roles: ['CAMPEUR']},
    //everywhere exempt admin
    { path: '/produit', title: 'Produit',  icon:'ni-bullet-list-67 text-blue', class: '', roles: ['CAMPEUR'] ,childrens:[]},
    
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
 
  role: any;
  constructor(private router: Router,private active:ActivatedRoute,private categoriesService:ProduitserviceService ,  private tokenStorage : TokenStorageService) {
   
  }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    this.navigateToProductDetail();
    // Get user role from AuthService
    this.filterRoutesByRole();
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.role = this.tokenStorage.getRole(); // Update role on navigation change
        this.navigateToProductDetail();
      }

      this.isCollapsed = true;
   });

}

filterRoutesByRole() {
  return ROUTES.filter(menuItem => !menuItem.roles || menuItem.roles.includes(this.role));
}

  navigate(path:any){
    this.router.navigate([path]).then(  ()=>  this.navigateToProductDetail());
  }
  navigateToProductDetail() {
    this.produiturl = this.router.url;
    console.log(this.produiturl)
    if (this.produiturl.includes('/produit') ) {
      this.getCategories();
      this.drop = true;
    } else {
      const produitMenuItem = ROUTES.find(menuItem => menuItem.title === 'Produit');
      if (produitMenuItem && produitMenuItem.childrens) {
        produitMenuItem.childrens = [];
      }
      this.drop = false;
    }
    this.menuItems = ROUTES.filter(menuItem => !menuItem.roles || menuItem.roles.includes(this.role));
  }
  isChildActive(parentRoute: string) {
    console.log(this.active.firstChild)

  }
 getCategories(){
   if(!this.drop){
    this.categoriesService.getAllCategorie().subscribe({
      next:(categories:any)=>{
        const  produitMenuItem= ROUTES.find(menuItem => menuItem.title === 'Produit');
        console.log(produitMenuItem)
        console.log(categories)
        if (produitMenuItem && produitMenuItem.childrens) {
          categories.forEach((category:any) => {
            produitMenuItem.childrens.push({
              path:`/produit/${category.nom_Categorie}`, // Adjust the path as needed
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
