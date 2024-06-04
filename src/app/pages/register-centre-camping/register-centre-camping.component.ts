import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Photo } from 'src/app/model/photo';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-centre-camping',
  templateUrl: './register-centre-camping.component.html',
  styleUrls: ['./register-centre-camping.component.scss']
})
export class RegisterCentreCampingComponent implements OnInit {

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
      role:new FormControl("CENTRECAMPING"),
      password: new FormControl( "", [Validators.required]),
      date_naissance:new FormControl( "", Validators.required) 
    });

    this.email=this.addUserForm.value.email;
    
  }
  addUser() {
    this.showImage=true;
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
          this.erreurAjout = false;
          this.ajoutReussi = true;
          
          setTimeout(() => {
            this.ajoutReussi = false;
          }, 5000);
          
          this.userService.register(this.addUserForm.value).subscribe(
            (userData) => {
              this.user = userData.id; // Récupérer les données de l'utilisateur ajouté
              console.log("userData", userData.email);
           
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
    );  console.log(this.email)
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
