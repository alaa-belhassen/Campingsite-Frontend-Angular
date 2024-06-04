import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { mustMatch } from 'src/validators/mustMatch';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: any;
  editUserForm: any;
  ShowFormPassword : boolean=false;
  PasswordForm: any;
  ValidPassword:any = false;
  InvalidPassword: any = false;
  ValidProfil:any = false;
  InvalidProfil: any = false;
  UserAfterUpdate : any ;
  role : any ;
  DetailsUserForm: any;
  
  erreurAjout: boolean =false;
  ajoutReussi: boolean =false ;
  showFrom : boolean=false;
  

  constructor(private userService:UserServiceService , private tokenStorage : TokenStorageService , private formBuilder :FormBuilder) {     this.currentUser = this.tokenStorage.getUser();
  }

  ngOnInit() {
    this.role = this.tokenStorage.getRole();
    this.editUserForm = this.formBuilder.group({
      id :[this.currentUser.id],
      prenom: [this.currentUser.firstName, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
      nom: [this.currentUser.lastName, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
      
      adresse: [this.currentUser.adresse, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      telephone: [this.currentUser.telephone, [Validators.required, Validators.pattern('[0-9]{8}')]], // Validates 8 digits
      
    });
    this.PasswordForm= this.formBuilder.group({

      OldPassword : ["", [Validators.required]],
      NewPassword :["", [Validators.required ,Validators.minLength(5)]],
      ConfirmPassword : ["", [Validators.required ,Validators.minLength(5)]]
     },
     {
      validator: mustMatch("NewPassword", "ConfirmPassword"),
     }
     );

     // Fonction utilitaire pour filtrer les valeurs nulles ou vides
const filterValues = (values) => values.filter(value => value);

// Récupérez tous les détails fournis par l'utilisateur et existant dans this.currentUser.detailsUser
const paysagesUtilisateur = filterValues(this.currentUser.detailsUser.map(detail => detail.paysage));
const couleursUtilisateur = filterValues(this.currentUser.detailsUser.map(detail => detail.couleur));
const alimentationsUtilisateur = filterValues(this.currentUser.detailsUser.map(detail => detail.alimentation));
const accompagnementsUtilisateur = filterValues(this.currentUser.detailsUser.map(detail => detail.compagnement));
const saisonsUtilisateur = filterValues(this.currentUser.detailsUser.map(detail => detail.saison));
const typesHebergementUtilisateur = filterValues(this.currentUser.detailsUser.map(detail => detail.type_hebergement));

// Créez le formulaire avec les champs nécessaires
this.DetailsUserForm = this.formBuilder.group({
  paysage: [paysagesUtilisateur], 
  couleur: [couleursUtilisateur.length ? couleursUtilisateur[0] : ''], // Assuming there's only one couleur
  alimentation: [alimentationsUtilisateur],
  compagnement: [accompagnementsUtilisateur],
  saison: [saisonsUtilisateur],
  type_hebergement: [typesHebergementUtilisateur]
});

  }
  calculateAge(birthDate: Date): number {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }
  updateUser(){
    this.currentUser.firstName=this.editUserForm.value.nom;
    this.currentUser.lastName=this.editUserForm.value.prenom;
    this.currentUser.adresse=this.editUserForm.value.adresse;
    this.currentUser.telephone=this.editUserForm.value.telephone;
    this.tokenStorage.saveUser(this.currentUser);
    this.currentUser = this.tokenStorage.getUser();

  this.userService.updateUser(this.editUserForm.value).subscribe( (data) =>
    {
      this.ValidProfil = true;
      console.log("lavariable est ",this.ValidProfil )
        setTimeout(() => {
          this.ValidProfil = false;
        }, 8000);
      
      this.userService.getUserById(this.currentUser.id).subscribe((data) =>
      {
       

      })

    
    },
    error => {
      this.InvalidProfil = true;
        setTimeout(() => {
          this.InvalidProfil = false;
        }, 8000);
    }

  );

  }
  changePassword ()
  {
    const changePasswordForm = document.getElementById('changePasswordForm');
    const position = this.PasswordForm.offsetTop;
  
    // Scroll to the change password form
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Smooth scrolling
    });
    this.ShowFormPassword=true;
  }
  annuler ()
  {
    this.ShowFormPassword=false;
  }
  annulerPreferneces ()
  {
    this.showFrom=false;
  }
  valider(): void {
    this.userService.changerMotDePasse(this.currentUser.id, this.PasswordForm.value.OldPassword, this.PasswordForm.value.NewPassword).subscribe(
      response => {
        console.log(response);
        this.ValidPassword = true;
        setTimeout(() => {
          this.ValidPassword = false;
        }, 8000);
      },
      error => {
        console.error(error); 
        this.InvalidPassword = true;
        setTimeout(() => {
          this.InvalidPassword = false;
        }, 8000);
      }
    );
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
addDetailUser() {
  const formValue = this.DetailsUserForm.value;

  // Crée une fonction pour générer des combinaisons de valeurs
  function generateCombinations(arrays) {
    if (arrays.length === 0) {
      return [[]];
    }
    const combinations = [];
    const restCombinations = generateCombinations(arrays.slice(1));
    for (const value of arrays[0]) {
      for (const restCombination of restCombinations) {
        combinations.push([value, ...restCombination]);
      }
    }
    return combinations;
  }

  // Récupérer les valeurs de chaque champ
  const paysageValues = formValue.paysage;
  const alimentationValues = formValue.alimentation;
  const compagnementValues = formValue.compagnement;
  const saisonValues = formValue.saison;
  const typeHebergementValues = formValue.type_hebergement;

  // Crée des combinaisons de toutes les valeurs sélectionnées
  const allValues = [
    paysageValues,
    alimentationValues,
    compagnementValues,
    saisonValues,
    typeHebergementValues
  ];

  const combinations = generateCombinations(allValues);

  // Crée une liste de détails utilisateur
  const detailsUsers = combinations.map(combination => ({
    paysage: combination[0],
    couleur: formValue.couleur,
    alimentation: combination[1],
    compagnement: combination[2],
    saison: combination[3],
    type_hebergement: combination[4]
  }));

  console.log(detailsUsers);

  // Appel de la méthode addDetailsUser pour chaque détail utilisateur dans la liste
  detailsUsers.forEach((detail) => {
    this.userService.addDetailsUser(detail, this.currentUser.value.email).subscribe(
      (detailsUserData) => {
        console.log("Détails de l'utilisateur ajoutés avec succès :", detailsUserData);
      },
      (detailsUserError) => {
        console.error("Une erreur s'est produite lors de l'ajout des détails de l'utilisateur :", detailsUserError);
        this.erreurAjout = true;
        this.ajoutReussi = false;
        setTimeout(() => {
          this.erreurAjout = false;
        }, 5000);
      }
    );
  });
}

      

showPreferenceForm() {
    this.showFrom=true;
  }

}