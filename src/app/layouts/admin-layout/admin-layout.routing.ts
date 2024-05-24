import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AjoutReclamationComponent } from 'src/app/pages/ajout-reclamation/ajout-reclamation.component';
import { AfficherReclamationAdminComponent } from 'src/app/pages/afficher-reclamation-admin/afficher-reclamation-admin.component';
import { DashboardReclammationComponent } from 'src/app/pages/dashboard-reclammation/dashboard-reclammation.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'ajout-reclamation',           component: AjoutReclamationComponent },
    { path: 'afficher-reclamation',           component: AfficherReclamationAdminComponent },
    { path: 'dashboard_reclamation',           component: DashboardReclammationComponent },

    


];
