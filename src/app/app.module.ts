import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

=======
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> origin/Sarra
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
<<<<<<< HEAD

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterCentreCampingComponent } from './pages/register-centre-camping/register-centre-camping.component';

import { ProduitComponent } from './pages/produit/produit.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { ChartComponent } from './pages/chart/chart.component';
import { PayementDoneComponent } from './pages/payement-done/payement-done.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DashbordAdminComponent } from './pages/dashbord-admin/dashbord-admin.component';
import { MatTabsModule } from '@angular/material/tabs';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UpdateResComponent } from './components/Reservation/liste-reservation/update-res/update-res.component';
import { ListeReservationComponent } from './components/Reservation/liste-reservation/liste-reservation.component';
import { ChartPipeComponent } from './components/Reservation/chart-pipe/chart-pipe.component';
import { FilterPipe } from './filter-reservation.pipe';

=======
import { CampsiteComponent } from './pages/campsite/campsite.component';
import { ListCampsitesComponent } from './pages/list-campsites/list-campsites.component';
import { ClickimgDirective } from './clickimg.directive';
import { AllDetailsCampsiteComponent } from './pages/all-details-campsite/all-details-campsite.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
>>>>>>> origin/Sarra

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
<<<<<<< HEAD

    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,

    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatSlideToggleModule
   
=======
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSortModule
>>>>>>> origin/Sarra
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
<<<<<<< HEAD
    RegisterCentreCampingComponent,
    ProduitComponent,
    AddProduitComponent,
    ChartComponent,
    PayementDoneComponent,
    DashbordAdminComponent,
    
    ListeReservationComponent,
    UpdateResComponent,
    UpdateResComponent,
    FilterPipe,
    ChartPipeComponent,
  
   
   
=======
    CampsiteComponent,
    ListCampsitesComponent,
    ClickimgDirective,
    AllDetailsCampsiteComponent,

>>>>>>> origin/Sarra
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
