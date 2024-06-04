import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, Location } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AfficherReclamationAdminComponent } from './pages/reclamation/afficher-reclamation-admin/afficher-reclamation-admin.component';
import { AjoutReclamationComponent } from './pages/reclamation/ajout-reclamation/ajout-reclamation.component';
import { ChartComponent } from './pages/chart/chart.component';
import { ActiviteCardsComponent } from './Activites/activite-cards/activite-cards.component';
import { UpdateActiviteComponent } from './Activites/update-activite/update-activite.component';
import { AddActiviteComponent } from './Activites/add-activite/add-activite.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterPipe } from './filter-activite.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { ClickimgDirective } from './clickimg.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
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



@NgModule({
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
    RefundComponent,
    AdminProduitComponent,
    DetailsComposentComponent,
    DashboardProduitComponent,
    FilteruserPipe,
    OpenReclamationComponent,
    AfficherReclamationClientComponent,
    AfficherUneReclamationClientComponent,
    SuccessPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    ComponentsModule,
    MatDialogModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatButtonToggleModule
  ],
  providers: [Location], // Add Location to providers
    
    
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }