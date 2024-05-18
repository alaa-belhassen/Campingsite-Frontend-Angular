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
import { ImageComponentComponent } from './image-component/image-component.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialFileInputModule} from "ngx-material-file-input";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
    ImageComponentComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CardStatComponent,
    ChartComponent,
    ChartPipesComponent,
    ImageComponentComponent
  ]
})
export class ComponentsModule { }
