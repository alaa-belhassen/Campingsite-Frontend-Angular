import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TestLayoutComponent } from './layouts/test-layout/test-layout.component';
import { ActiviteAdminComponent } from './activite-admin/activite-admin.component';
import { AddActiviteComponent } from './add-activite/add-activite.component';
import { ModifyActiviteComponent } from './modify-activite/modify-activite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: 'test',
    component: TestLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/test-layout/test.module').then(m => m.TestModule)
      }
    ]
  },
  {
    path: 'AddActivite',
    component: ActiviteAdminComponent
  },
  {
    path: 'Activite',
    component: AddActiviteComponent
  },
  {
    path: 'ModifyActivite',
    component: ModifyActiviteComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
