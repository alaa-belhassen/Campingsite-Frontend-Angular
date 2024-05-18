import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {CampsiteComponent} from "../../pages/campsite/campsite.component";
import {ListCampsitesComponent} from "../../pages/list-campsites/list-campsites.component";
import {AllDetailsCampsiteComponent} from "../../pages/all-details-campsite/all-details-campsite.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
  { path: 'campsite',           component: CampsiteComponent },
  { path: 'listcampsite',           component: ListCampsitesComponent },
  { path: 'detaillistcampsite/:id', component: AllDetailsCampsiteComponent }


];
