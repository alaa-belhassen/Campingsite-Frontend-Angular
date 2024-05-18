import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterCentreCampingComponent } from './pages/register-centre-camping/register-centre-camping.component';

import { ProduitComponent } from './pages/produit/produit.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { ChartComponent } from './pages/chart/chart.component';
import { PayementDoneComponent } from './pages/payement-done/payement-done.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { DashbordAdminComponent } from './pages/dashbord-admin/dashbord-admin.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,

    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RegisterCentreCampingComponent,
    ProduitComponent,
    AddProduitComponent,
    ChartComponent,
    PayementDoneComponent,
    DashbordAdminComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
