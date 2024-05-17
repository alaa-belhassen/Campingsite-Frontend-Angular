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
import { ActiviteCardsComponent } from './Activites/activite-cards/activite-cards.component';
import { UpdateActiviteComponent } from './Activites/update-activite/update-activite.component';
import { AddActiviteComponent } from './Activites/add-activite/add-activite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterPipe } from './filter-activite.pipe';





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
    MatDialogModule,

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ActiviteCardsComponent,
    UpdateActiviteComponent,
    AddActiviteComponent,
    FilterPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
