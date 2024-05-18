import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatComponent } from './card-stat/card-stat.component';
import { ChartComponent } from './chart/chart.component';
import { ChartPipesComponent } from './chart-pipes/chart-pipes.component';
<<<<<<< HEAD
import { ListUsersComponent } from '../pages/list-users/list-users.component';
import { CardProduitComponent } from './card-produit/card-produit.component';
import {MatDialogModule} from '@angular/material/dialog';

import { RouterModule } from '@angular/router';
=======
import { ImageComponentComponent } from './image-component/image-component.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialFileInputModule} from "ngx-material-file-input";
>>>>>>> origin/Sarra

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
<<<<<<< HEAD
    MatDialogModule
=======
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule
>>>>>>> origin/Sarra
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
<<<<<<< HEAD
    ListUsersComponent,
    CardProduitComponent,
    
  
=======
    ImageComponentComponent
>>>>>>> origin/Sarra
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
<<<<<<< HEAD
    CardProduitComponent,
    
=======
    ImageComponentComponent
>>>>>>> origin/Sarra
  ]
})
export class ComponentsModule { }
