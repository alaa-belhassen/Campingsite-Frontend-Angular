import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  
  
  title: string;
  isLoggedIn = false;
  isLoginFailed = false;
  role !: string ;
  erreur :boolean = false;
  ResetedPassword :boolean = false ;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
  
   
  });
  
  
  constructor(private formBuilder: FormBuilder , private userService : UserServiceService , private tokenStorage : TokenStorageService , private router : Router ) {

    
  }

  ngOnInit() {
   
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
    }
   
  }
  resetPassword() {
    this.userService.forgetPassword(this.loginForm.value.email).subscribe (
      (response: string) => {
        console.log("Response from forgetPassword:", response);
        // Si la réponse contient un message de réussite
        if (response.includes("succès")) {
          console.log("Le mot de passe a été réinitialisé avec succès.");
          this.ResetedPassword = true;
          setTimeout(() => {
            this.ResetedPassword = false;
          }, 10000);
        } else {
          // Sinon, afficher un message d'erreur
          console.log("Une erreur est survenue lors de la réinitialisation du mot de passe.");
          this.erreur = true;
          setTimeout(() => {
            this.erreur = false;
          }, 10000);
        }
      },
      (error) => {
        console.error("Error in resetPassword:", error);
        // Traitez l'erreur comme vous le souhaitez
      }
    );
  }
  
  

  ngOnDestroy() {
 
  }

}
