import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AfficherReclamationAdminComponent } from './pages/reclamation/afficher-reclamation-admin/afficher-reclamation-admin.component';
import { DashboardReclammationComponent } from './pages/reclamation/dashboard-reclammation/dashboard-reclammation.component';
import {AjoutReclamationComponent} from './pages/reclamation/ajout-reclamation/ajout-reclamation.component';
import {ChartPipesComponent} from './components/chart-pipes/chart-pipes.component';
import {ChartComponent} from './components/chart/chart.component';
import {CardStatComponent} from './components/card-stat/card-stat.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AjoutReclamationComponent,
    AfficherReclamationAdminComponent,
    DashboardReclammationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
