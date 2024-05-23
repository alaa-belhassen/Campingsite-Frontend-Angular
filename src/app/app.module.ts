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


import { ChartComponent } from './pages/chart/chart.component';
import { ActiviteCardsComponent } from './Activites/activite-cards/activite-cards.component';
import { UpdateActiviteComponent } from './Activites/update-activite/update-activite.component';
import { AddActiviteComponent } from './Activites/add-activite/add-activite.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FilterPipe } from './filter-activite.pipe';
import { MatTabsModule } from '@angular/material/tabs';





import { Ng2SearchPipeModule } from 'ng2-search-filter';


import {MatStepperModule} from '@angular/material/stepper';



import { MatDialog } from '@angular/material/dialog';



import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';


import { ClickimgDirective } from './clickimg.directive';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { ChartPipeComponent } from './components/Reservation/chart-pipe/chart-pipe.component';
import { ListeReservationComponent } from './components/Reservation/liste-reservation/liste-reservation.component';
import { UpdateResComponent } from './components/Reservation/liste-reservation/update-res/update-res.component';

import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { AllDetailsCampsiteComponent } from './pages/all-details-campsite/all-details-campsite.component';
import { CampsiteComponent } from './pages/campsite/campsite.component';
import { DashbordAdminComponent } from './pages/dashbord-admin/dashbord-admin.component';
import { ListCampsitesComponent } from './pages/list-campsites/list-campsites.component';
import { PayementDoneComponent } from './pages/payement-done/payement-done.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { RegisterCentreCampingComponent } from './pages/register-centre-camping/register-centre-camping.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


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
    MatSlideToggleModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    RegisterCentreCampingComponent,
    ProduitComponent,
    AddProduitComponent,
    PayementDoneComponent,
    DashbordAdminComponent,
    ListeReservationComponent,
    UpdateResComponent,
    UpdateResComponent,
    FilterPipe,
    ChartPipeComponent,
    ChartComponent,
    CampsiteComponent,
    ListCampsitesComponent,
    ClickimgDirective,
    AllDetailsCampsiteComponent,

    ActiviteCardsComponent,
    UpdateActiviteComponent,
    AddActiviteComponent,
    FilterPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
