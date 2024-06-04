
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
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'ajout-reclamation',           component: AjoutReclamationComponent },
    { path: 'afficher-reclamation',           component: AfficherReclamationAdminComponent },
    { path: 'dashboard_reclamation',           component: DashboardComponent },
    //dhashboard reclamation abdelwareth fix the component plz
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
    { path: 'activite',       component:  AddActiviteComponent  },
    { path: 'Spinning wheel', component:  SpinningWheelComponent  },
    {path :'card-activite' , component: ActiviteCardsComponent },
    { path : 'ListUser',      component :ListUsersComponent},
    { path : 'ListUser',   canActivate: [AdminGuardGuard] ,   component :ListUsersComponent},
    { path: 'dashboardAdmin',      component: DashbordAdminComponent },
    { path: 'campsite',           component: CampsiteComponent },
    { path: 'listcampsite/:id_user',           component: ListCampsitesComponent },
    { path: 'detaillistcampsite/:id', component: AllDetailsCampsiteComponent },
  { path: 'admincampsite', component: CampsiteAdminComponent },
  { path: 'usercampsite', component: CampsiteUserComponent },
    { path: 'activite',       component:  AddActiviteComponent  },
  { path: 'viewcampsite_reserver/:id',       component:  ViewcampsiteReserveComponent  }

    { path: 'refund',       component:  RefundComponent  },
    { path: 'activite',       component:  AddActiviteComponent  },
    { path: 'adminProduit',       component:  AdminProduitComponent  },
    { path: 'details',       component:  DetailsComposentComponent  },
    { path: 'produitDashboard',       component:  DashboardProduitComponent  },
    { path: 'erreur',       component:  ErreurComponent  },
    { path: 'activite',       component:  AddActiviteComponent  },
    { path: 'open_reclamation/:id', component: OpenReclamationComponent },
    { path: 'afficher-reclamation-client', component: AfficherReclamationClientComponent },
    { path: 'afficher-une-reclamation-client/:id', component: AfficherUneReclamationClientComponent },


    


];
