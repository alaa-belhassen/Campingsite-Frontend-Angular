import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatComponent } from './card-stat/card-stat.component';
import { ChartComponent } from './chart/chart.component';
import { ChartPipesComponent } from './chart-pipes/chart-pipes.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ShoploaderComponent } from './shoploader/shoploader.component';
import { CardHoverFancyProduitComponent } from './card-hover-fancy-produit/card-hover-fancy-produit.component';

import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MaterialFileInputModule} from "ngx-material-file-input";
import { ListUsersComponent } from '../pages/list-users/list-users.component';
import { CardProduitComponent } from './card-produit/card-produit.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    ConfirmComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
    ListUsersComponent,
    CardProduitComponent,
    ShoploaderComponent,
    CardHoverFancyProduitComponent,
    ImageComponentComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
    CardProduitComponent,
    ShoploaderComponent,
    CardHoverFancyProduitComponent,
    ImageComponentComponent
  ]
})
export class ComponentsModule { }
