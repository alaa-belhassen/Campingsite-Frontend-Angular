
import { AfficherReclamationAdminComponent } from 'src/app/pages/reclamation/afficher-reclamation-admin/afficher-reclamation-admin.component';
import { AjoutReclamationComponent } from 'src/app/pages/reclamation/ajout-reclamation/ajout-reclamation.component';

import { DashbordAdminComponent } from 'src/app/pages/dashbord-admin/dashbord-admin.component'
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddActiviteComponent } from 'src/app/Activites/add-activite/add-activite.component';
import { SpinningWheelComponent } from 'src/app/spinning-wheel/spinning-wheel.component';
import { ActiviteCardsComponent } from 'src/app/Activites/activite-cards/activite-cards.component';

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
import {CampsiteAdminComponent} from "../../pages/campsite-admin/campsite-admin.component";
import {CampsiteUserComponent} from "../../pages/campsite-user/campsite-user.component";
import {ViewcampsiteReserveComponent} from "../../pages/viewcampsite-reserve/viewcampsite-reserve.component";
import { RefundComponent } from 'src/app/pages/refund/refund.component';
import { AdminProduitComponent } from 'src/app/pages/admin-produit/admin-produit.component';
import { DetailsComposentComponent } from 'src/app/pages/details-composent/details-composent.component';
import { DashboardProduitComponent } from 'src/app/pages/dashboard-produit/dashboard-produit.component';
import { AdminGuardGuard } from 'src/app/services/admin-guard.guard';
import { ErreurComponent } from 'src/app/pages/erreur/erreur.component';
import { OpenReclamationComponent } from 'src/app/pages/reclamation/open-reclamation/open-reclamation.component';
import { AfficherReclamationClientComponent } from 'src/app/pages/reclamation/afficher-reclamation-client/afficher-reclamation-client.component';
import { AfficherUneReclamationClientComponent } from 'src/app/pages/reclamation/afficher-une-reclamation-client/afficher-une-reclamation-client.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'afficher-reclamation',           component: AfficherReclamationAdminComponent },
 
    //dhashboard reclamation abdelwareth fix the component plz

    { path: 'addproduit',      component: AddProduitComponent },
    { path: 'reservation',      component: ListeReservationComponent },
    { path: 'activite',       component:  AddActiviteComponent  },
    { path : 'ListUser' ,   component :ListUsersComponent},
    { path: 'dashboardAdmin',      component: DashbordAdminComponent },
    { path: 'campsite',           component: CampsiteComponent },
    { path: 'listcampsite/:id_user',           component: ListCampsitesComponent },
    { path: 'detaillistcampsite/:id', component: AllDetailsCampsiteComponent },
    { path: 'admincampsite', component: CampsiteAdminComponent },
    { path: 'adminProduit',       component:  AdminProduitComponent  },
    { path: 'details',       component:  DetailsComposentComponent  },
    { path: 'produitDashboard',       component:  DashboardProduitComponent  },
    { path: 'erreur',       component:  ErreurComponent  },
    { path: 'open_reclamation/:id', component: OpenReclamationComponent },
    { path: 'dashbord-admin',       component:  DashbordAdminComponent}

];
