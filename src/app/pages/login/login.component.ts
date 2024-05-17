import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  
  title: string;
  isLoggedIn = false;
  isLoginFailed = false;
  role !: string ;
  erreur !:boolean;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("", [
      Validators.required,
     
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
  authentification() {
   
    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        console.log("here data after login", data);
        console.log("here data after login", data);

        this.tokenStorage.saveToken(data.accessToken);
       // console.log("Here decoded token", this.getDecodedAccessToken(data.accessToken));

        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().role;
        this.router.navigate(["/user-profile"]);
      },
      (err) => {
        console.log("here error after login", err);
        this.erreur= true ;
        setTimeout(() => {
         this.erreur = false;
       }, 3000); // 3000 ms = 3 secondes
        
      }
    );

    }

  ngOnDestroy() {
 
  }
}

