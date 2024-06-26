import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatDialogModule } from '@angular/material/dialog';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CommonModule, Location } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AfficherReclamationAdminComponent } from './pages/reclamation/afficher-reclamation-admin/afficher-reclamation-admin.component';
import { AjoutReclamationComponent } from './pages/reclamation/ajout-reclamation/ajout-reclamation.component';
import { ChartComponent } from './pages/chart/chart.component';
import { ActiviteCardsComponent } from './Activites/activite-cards/activite-cards.component';
import { UpdateActiviteComponent } from './Activites/update-activite/update-activite.component';
import { AddActiviteComponent } from './Activites/add-activite/add-activite.component';
import { FilterPipe } from './filter-activite.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartPrixComponent } from './Activites/chart-prix/chart-prix.component';
import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';



import {GoogleMapsModule} from "@angular/google-maps";


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
import { CampsiteAdminComponent } from './pages/campsite-admin/campsite-admin.component';
import { CampsiteUserComponent } from './pages/campsite-user/campsite-user.component';
import { ViewcampsiteReserveComponent } from './pages/viewcampsite-reserve/viewcampsite-reserve.component';
import { RefundComponent } from './pages/refund/refund.component';
import { AdminProduitComponent } from './pages/admin-produit/admin-produit.component';
import { DetailsComposentComponent } from './pages/details-composent/details-composent.component';
import { DashboardProduitComponent } from './pages/dashboard-produit/dashboard-produit.component';
import { FilteruserPipe } from './filteruser-.pipe';
import { OpenReclamationComponent } from './pages/reclamation/open-reclamation/open-reclamation.component';
import { AfficherReclamationClientComponent } from './pages/reclamation/afficher-reclamation-client/afficher-reclamation-client.component';
import { AfficherUneReclamationClientComponent } from './pages/reclamation/afficher-une-reclamation-client/afficher-une-reclamation-client.component';
import { SuccessPopupComponent } from './pages/reclamation/popups/success-popup/success-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClickimgDirective } from './clickimg.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { ResClientComponent } from './components/Reservation/res-client/res-client.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { heatmapComponent } from './components/Reservation/heatmap/heatmap.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
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
    MatTabsModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatTabsModule,
    GoogleMapsModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AjoutReclamationComponent,
    AfficherReclamationAdminComponent,
    RegisterCentreCampingComponent,
    ProduitComponent,
    AddProduitComponent,
    PayementDoneComponent,
    DashbordAdminComponent,
    ListeReservationComponent,
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
    ChartPrixComponent,
    SpinningWheelComponent,
    RefundComponent,
    AdminProduitComponent,
    DetailsComposentComponent,
    DashboardProduitComponent,
    FilteruserPipe,
    OpenReclamationComponent,
    AfficherReclamationClientComponent,
    AfficherUneReclamationClientComponent,
    SuccessPopupComponent,
    CampsiteAdminComponent,
    CampsiteUserComponent,
    ViewcampsiteReserveComponent,
    ResClientComponent,
  ],
  providers: [Location], // Add Location to providers
    
    
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }