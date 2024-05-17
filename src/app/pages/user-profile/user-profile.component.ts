import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UserServiceService } from 'src/services/user-service.service';
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

  constructor(private userService:UserServiceService , private tokenStorage : TokenStorageService , private formBuilder :FormBuilder) {     this.currentUser = this.tokenStorage.getUser();
  }

  ngOnInit() {
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
  console.log(this.editUserForm.value);
  this.userService.updateUser(this.editUserForm.value).subscribe( (data) =>
    {
     console.log(this.editUserForm);
     this.currentUser.prenom=this.editUserForm.value.prenom;
     this.currentUser.nom=this.editUserForm.value.nom;
     this.currentUser.adresse=this.editUserForm.value.adresse;
     this.currentUser.telephone=this.editUserForm.value.telephone;
     this.ValidProfil = true;
        setTimeout(() => {
          this.ValidProfil = false;
        }, 8000);
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
    this.ShowFormPassword=true;
  }
  annuler ()
  {
    this.ShowFormPassword=false;
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
   scrollToChangePasswordForm() {
    // Get the position of the change password form
    const changePasswordForm = document.getElementById('changePasswordForm');
    const position = this.PasswordForm.offsetTop;
  
    // Scroll to the change password form
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Smooth scrolling
    });
  }


}