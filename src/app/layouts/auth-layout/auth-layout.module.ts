import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RegisterCampeurComponent } from 'src/app/pages/register-campeur/register-campeur.component';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatButtonToggleModule,
    ComponentsModule
   
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    RegisterCampeurComponent
    ]
})
export class AuthLayoutModule { }
