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
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary',class: '',    },
    { path: '/ListUser', title: 'Liste des utilisateurs',  icon:'ni-bullet-list-67 text-red', class: ''  , roles: ['ADMIN'] },
    { path: '/produit', title: 'Produit',  icon:'ni ni-books text-green', class: '' ,childrens:[]},
    { path: '/reservation', title: 'Reservation',  icon:'ni-bullet-list-67 text-red', class: '' , roles: ['ADMIN']  },
    { path: '/campsite', title: 'campsite',  icon:'ni-bullet-list-67 text-red', class: '' , roles: ['CENTRECAMPING']  },
    { path: '/activite', title: 'Activite',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/dashboard_reclamation', title: 'Reclamations', icon: 'ni-single-02 text-yellow', class: 'dropdown' },
    { path: '/dashboard_reclamation', title: 'Dashboard', icon: '', class: '' },
    { path: '/ajout-reclamation', title: 'Ajout Reclamation', icon: '', class: '' },
    { path: '/afficher-reclamation', title: 'Afficher Reclamation', icon: '', class: '' },
    { path: '/afficher-reclamation-client', title: 'Afficher Reclamation Client', icon: 'ni-bullet-list-67 text-red', class: '' }
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
  this.menuItems = ROUTES.filter(menuItem => !menuItem.roles || menuItem.roles.includes(this.role));
}

  navigate(path:any){
    this.filterRoutesByRole();
    this.router.navigate([path]).then(  ()=>  this.navigateToProductDetail());
  }
  navigateToProductDetail() {
    this.produiturl = this.router.url;
    if (this.produiturl === '/produit') {
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
