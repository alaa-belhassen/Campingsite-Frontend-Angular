import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddActiviteComponent } from 'src/app/Activites/add-activite/add-activite.component';
import { SpinningWheelComponent } from 'src/app/spinning-wheel/spinning-wheel.component';
import { ActiviteCardsComponent } from 'src/app/Activites/activite-cards/activite-cards.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'activite',       component:  AddActiviteComponent  },
    { path: 'Spinning wheel', component:  SpinningWheelComponent  },
    {path :'card-activite' , component: ActiviteCardsComponent }
];
