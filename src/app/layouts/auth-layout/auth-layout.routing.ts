import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';

import { RegisterComponent } from '../../pages/register/register.component';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
import { RegisterCentreCampingComponent } from 'src/app/pages/register-centre-camping/register-centre-camping.component';
import { ErreurComponent } from 'src/app/pages/erreur/erreur.component';
import { RegisterCampeurComponent } from 'src/app/pages/register-campeur/register-campeur.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'registerCamper',       component: RegisterCampeurComponent },
    {path : 'resetPassword' , component :ResetPasswordComponent},
    {path : 'registeCentreCamping' , component :RegisterCentreCampingComponent},
    { path: 'erreur',       component:  ErreurComponent  }
   
];
