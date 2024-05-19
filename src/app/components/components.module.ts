import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatComponent } from './card-stat/card-stat.component';
import { ChartComponent } from './chart/chart.component';
import { ChartPipesComponent } from './chart-pipes/chart-pipes.component';
import { CardProduitComponent } from './card-produit/card-produit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ShoploaderComponent } from './shoploader/shoploader.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatDialogModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
    CardProduitComponent,
    ShoploaderComponent,
    
  
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

  ]
})
export class ComponentsModule { }
