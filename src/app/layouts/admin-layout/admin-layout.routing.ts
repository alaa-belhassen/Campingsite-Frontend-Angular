
import { AfficherReclamationAdminComponent } from 'src/app/pages/reclamation/afficher-reclamation-admin/afficher-reclamation-admin.component';
import { DashboardReclammationComponent } from 'src/app/pages/reclamation/dashboard-reclammation/dashboard-reclammation.component';
import { AjoutReclamationComponent } from 'src/app/pages/reclamation/ajout-reclamation/ajout-reclamation.component';

import { DashbordAdminComponent } from 'src/app/pages/dashbord-admin/dashbord-admin.component'
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ActiviteCardsComponent } from 'src/app/Activites/activite-cards/activite-cards.component';
import { AddActiviteComponent } from 'src/app/Activites/add-activite/add-activite.component';

import { Routes } from '@angular/router';

import {CampsiteComponent} from "../../pages/campsite/campsite.component";
import {ListCampsitesComponent} from "../../pages/list-campsites/list-campsites.component";
import {AllDetailsCampsiteComponent} from "../../pages/all-details-campsite/all-details-campsite.component";
import { ProduitComponent } from 'src/app/pages/produit/produit.component';
import { ConfirmComponent } from 'src/app/components/dialog/confirm/confirm.component';
import { PayementDoneComponent } from 'src/app/pages/payement-done/payement-done.component';
import { AddProduitComponent } from 'src/app/pages/add-produit/add-produit.component';
import { ListeReservationComponent } from 'src/app/components/Reservation/liste-reservation/liste-reservation.component';
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { ChartComponent } from 'src/app/pages/chart/chart.component';
import { RefundComponent } from 'src/app/pages/refund/refund.component';
import { OpenReclamationComponent } from 'src/app/pages/reclamation/open-reclamation/open-reclamation.component';
import { AfficherReclamationClientComponent } from 'src/app/pages/reclamation/afficher-reclamation-client/afficher-reclamation-client.component';
import { AfficherUneReclamationClientComponent } from 'src/app/pages/reclamation/afficher-une-reclamation-client/afficher-une-reclamation-client.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'ajout-reclamation',           component: AjoutReclamationComponent },
    { path: 'afficher-reclamation',           component: AfficherReclamationAdminComponent },
    { path: 'dashboard_reclamation',           component: DashboardReclammationComponent },
    { path: 'produit',      component: ProduitComponent , data:{animation:'animate'} },
    { path: 'produit/:id',  component: ProduitComponent },
    { path: 'modal',      component: ConfirmComponent },
    { path: 'payementdone/:type',      component: PayementDoneComponent },
    { path: 'chart',      component: ChartComponent },
    { path: 'addproduit',      component: AddProduitComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'reservation',      component: ListeReservationComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path : 'ListUser',      component :ListUsersComponent},
    { path: 'dashboardAdmin',      component: DashbordAdminComponent },
    { path: 'campsite',           component: CampsiteComponent },
    { path: 'listcampsite',           component: ListCampsitesComponent },
    { path: 'detaillistcampsite/:id', component: AllDetailsCampsiteComponent },
    { path: 'refund',       component:  RefundComponent  },
    { path: 'activite',       component:  AddActiviteComponent  },
    { path: 'open_reclamation/:id', component: OpenReclamationComponent },
    { path: 'afficher-reclamation-client', component: AfficherReclamationClientComponent },
    { path: 'afficher-une-reclamation-client/:id', component: AfficherUneReclamationClientComponent },


    


];
