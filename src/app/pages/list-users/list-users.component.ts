import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from 'src/app/filter-activite.pipe';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  animations: [
    trigger('slideRight', [
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  hideProp = true;
  idUser :any;
  showConfirmationDialog = false ;
 
 
  totalItems = 0;
  searchTerm = '';
  switch: string = 'DetailsUser';
  searchText: any;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  currentPage: number = 1;
  pages: number[] = [];
  displayedUsers: any[];
  detailsUser : any [];
  infoUser : boolean =true;
  
  
  infoDetailsUser : boolean = false;
  originalUsers: any[];
 

  constructor(private tokenStorage: TokenStorageService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.ListUser().subscribe((data: any) => {
      this.users = data;
      this.originalUsers = [...data]; // Copie la liste complète des utilisateurs
      this.totalItems = data.total;
      this.Pagination();
    });
  }

 
  onSearch() {
    this.currentPage = 1;
    this.loadUsers();
  }
  Pagination () : void {
    
    this.totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
    this.displayedUsers = this.getUsersForPage(this.currentPage);
    
   }
   getUsersForPage(page: number): any[] {
    // Calcul des utilisateurs à afficher pour la page donnée.
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    // Changement de la page actuelle.
    this.currentPage = page;
    this.displayedUsers = this.getUsersForPage(page);
  }

  nextPage(): void {
    // Passage à la page suivante.
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.displayedUsers = this.getUsersForPage(this.currentPage);
    }
  }

  prevPage(): void {
    // Passage à la page précédente.
    if (this.currentPage > 1) {
      this.currentPage--;
      this.displayedUsers = this.getUsersForPage(this.currentPage);
    }
  }
  deleteUser(): void {
    console.log(this.idUser);
    this.userService.deleteUser(this.idUser).subscribe(
      () => { this.userService.ListUser().subscribe(data => {
      this.users = data;
      this.Pagination();
    }, error => {
      console.error('Une erreur s\'est produite lors de la récupération de la liste des utilisateurs : ', error);
      // Gérer l'erreur, si nécessaire
    });
        console.log('La requête de suppression a été exécutée avec succès.');
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la suppression : ', error);
        
      }
    );
    

   
    ;this.showConfirmationDialog = false;
  }
  
  openConfirmationDialog(id : any ){
    this.idUser=id;
    this.showConfirmationDialog = true;
  }

  closeConfirmationDialog(){
    this.showConfirmationDialog = false;
  }
  changeUserDetails() {
    this.switch = 'User'; 
    this.infoUser = false;
    this.infoDetailsUser = true;
   
  }
  
  changeUser() {
    this.switch = 'DetailsUser'; 
    this.infoUser = true;
    this.infoDetailsUser = false;
   
  }
  getFormattedDetails(detailsUser: any[], key: string): string {
    const uniqueValues = new Set<string>();

    // Ajoutez chaque valeur unique à l'ensemble
    detailsUser.forEach(detail => {
        if (detail[key]) {
            uniqueValues.add(detail[key]);
        }
    });

    // Convertissez l'ensemble en tableau et joignez les valeurs avec une virgule
    return Array.from(uniqueValues).join(', ');
}
onFilterChange() {
  if (!this.searchText.trim()) { // Vérifie si le champ de recherche est vide
    this.users = [...this.originalUsers]; // Restaure la liste complète des utilisateurs
  } else {
    this.displayedUsers = this.filterArrayByValue(this.displayedUsers, this.searchText);
  }
}

filterArrayByValue(array: any[], filterValue: any): any[] {
  if (!array || array.length === 0) {
    return [];
  }
  
  if (!filterValue || filterValue === '') {
    return array;
  }


  const lowercaseFilter = filterValue.toLowerCase();
  
  return array.filter(item => {
    // Convert the item to a string in lowercase and check if it includes the filter value
    return JSON.stringify(item).toLowerCase().includes(lowercaseFilter);
  });
}

  
}
