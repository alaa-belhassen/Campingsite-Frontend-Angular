import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TestLayoutComponent } from './layouts/test-layout/test-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ActiviteCardsComponent } from './Activites/activite-cards/activite-cards.component';
import { AddActiviteComponent } from './Activites/add-activite/add-activite.component';
import { UpdateActiviteComponent } from './Activites/update-activite/update-activite.component';
import {ListCampsitesComponent} from "./pages/list-campsites/list-campsites.component";
import { AdminGuardGuard } from './services/admin-guard.guard';
import { CampeurGuardGuard } from './services/campeur-guard.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
{
    path: '',
    canActivate: [AdminGuardGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '',
    component: TestLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/test-layout/test.module').then(m => m.TestModule)
      }
    ]
  },
  {
    path: 'activite',
    component: AddActiviteComponent
  }, {
    path: 'update-activite/:id',
    component: UpdateActiviteComponent
  },{
    path: 'card-activite',
    component:ActiviteCardsComponent
  }, {
    path: '**',
    redirectTo: 'login'
  },


];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
