import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Photo } from 'src/app/model/photo';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register-campeur',
  templateUrl: './register-campeur.component.html',
  styleUrls: ['./register-campeur.component.scss']
})
export class RegisterCampeurComponent implements OnInit {

  onFileChange($event: any) {
    throw new Error('Method not implemented.');
    }
    
      email : any;
      addUserForm: any;
      DetailsUserForm: any;
      user={
        idUser :0, 
      }
    
      ajoutReussi: boolean = false;
      erreurAjout: boolean = false;
      userByEmail : boolean=false;
      showImage : boolean =false;
      

      image:File | null =null;
    imageMin:File | null =null;
      images: Photo[] = []
    
      constructor( private userService:UserServiceService , private tokenStorage : TokenStorageService , private formBuilder :FormBuilder) { }
    
      ngOnInit() {
        this.addUserForm = new FormGroup({
          firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]),
          lastName:new FormControl( "", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')]),
          email:new FormControl("", [ Validators.email, Validators.required]),
          adresse:new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
          telephone:new FormControl("", [ Validators.required, Validators.pattern('[0-9]{8}')]), // Validates 8 digits
          role:new FormControl("CAMPEUR"),
          password: new FormControl( "", [Validators.required]),
          date_naissance:new FormControl( "", Validators.required) 
        });
    
        this.email=this.addUserForm.value.email;
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
        this.showImage=true;
        console.log(true)
        console.log(this.addUserForm.value.email)
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
                        console.log(this.showImage);
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
    
      
      
      public showOtherForm()
      {
        document.getElementById('secondForm').style.display = 'block';
        
      }
      getPasswordStrength(): string {
        if (this.addUserForm.value.password.length < 5) {
            return 'faible';
        } else {
            return 'fort';
        }
    }
    addPhoto() {
     
      }    
        
}
