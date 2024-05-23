import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addUserForm: any;
  DetailsUserForm: any;
  user={
    idUser :0, 
  }

  ajoutReussi: boolean = false;
  erreurAjout: boolean = false;
  userByEmail : boolean=false;



  constructor( private userService:UserServiceService , private tokenStorage : TokenStorageService , private formBuilder :FormBuilder) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
      lastName: ["", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]],
      email: ["", [Validators.email, Validators.required]],
      adresse: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      telephone: ["", [Validators.required, Validators.pattern('[0-9]{8}')]], // Validates 8 digits
      role: ["CAMPEUR"],
      password: [ "", [Validators.required]],
      date_naissance: ["", Validators.required] 
    });

    this.DetailsUserForm = this.formBuilder.group({
      paysage: [[], Validators.required], // Utilisez un tableau vide pour stocker les valeurs sélectionnées
      couleur: ['', Validators.required],
      alimentation: [[], Validators.required],
      compagnement: [[], Validators.required],
      saison: [[], Validators.required],
      type_hebergement: [[], Validators.required]
    });
    
  }
  addUser() {
    this.userService.findUser(this.addUserForm.value.email).subscribe(
      (data) => {
        if (data != null) {
          console.log("L'utilisateur existe déjà.");
          this.userByEmail = true;
          setTimeout(() => {
            this.userByEmail = false;
          }, 3000);
        } else {
          console.log("L'utilisateur n'existe pas, enregistrement en cours...");
          this.ajoutReussi = true;
          this.erreurAjout = false;
          
          setTimeout(() => {
            this.ajoutReussi = false;
          }, 10000);
          
          this.userService.register(this.addUserForm.value).subscribe(
            (userData) => {
              this.user = userData.id; // Récupérer les données de l'utilisateur ajouté
              console.log("userData", userData.email);
              
              const detailsUsers = [];
              const formValue = this.DetailsUserForm.value;
              
              // Parcourez les valeurs sélectionnées dans chaque champ multiple et créez un objet détail utilisateur
              formValue.paysage.forEach((paysage: string) => {
                formValue.alimentation.forEach((alimentation: string) => {
                  formValue.compagnement.forEach((compagnement: string) => {
                    formValue.saison.forEach((saison: string) => {
                      formValue.type_hebergement.forEach((type_hebergement: string) => {
                        detailsUsers.push({
                          paysage,
                          couleur: formValue.couleur,
                          alimentation,
                          compagnement,
                          saison,
                          type_hebergement
                        });
                      });
                    });
                  });
                });
              }); console.log(detailsUsers);
              
              // Appel de la méthode addDetailsUser pour chaque détail utilisateur dans la liste
              detailsUsers.forEach((detail) => {
                this.userService.addDetailsUser(detail, this.addUserForm.value.email).subscribe(
                  (detailsUserData) => {
                    console.log("Détails de l'utilisateur ajoutés avec succès :", detailsUserData);
                    this.addUserForm.reset();
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
            },
            (err) => {
              console.error(err);
              this.erreurAjout = true;
              this.ajoutReussi = false;
              setTimeout(() => {
                this.erreurAjout = false;
              }, 5000);
            }
          );
        }
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la recherche de l'utilisateur :", error);
        // Traitez l'erreur comme vous le souhaitez, par exemple, affichez un message d'erreur à l'utilisateur
      }
    );
}

  
  
 
  getPasswordStrength(): string {
    if (this.addUserForm.value.password.length < 4) {
        return 'faible';
    } else {
        return 'fort';
    }
}
     
    
  }
  


