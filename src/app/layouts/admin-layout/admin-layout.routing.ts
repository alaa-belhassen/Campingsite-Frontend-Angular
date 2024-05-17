import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { ProduitComponent } from 'src/app/pages/produit/produit.component';
import { AddProduitComponent } from 'src/app/pages/add-produit/add-produit.component';
import { ChartComponent } from 'src/app/pages/chart/chart.component';
import { ConfirmComponent } from 'src/app/components/dialog/confirm/confirm.component';
import { PayementDoneComponent } from 'src/app/pages/payement-done/payement-done.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'produit',      component: ProduitComponent },
    { path: 'produit/:id',  component: ProduitComponent },
    { path: 'modal',      component: ConfirmComponent },
    { path: 'payementdone/:type',      component: PayementDoneComponent },
    { path: 'chart',      component: ChartComponent },
    { path: 'addproduit',      component: AddProduitComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path : 'ListUser',      component :ListUsersComponent}
];
