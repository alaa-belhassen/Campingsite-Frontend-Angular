import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RefundComponent } from 'src/app/pages/refund/refund.component';
import { ProduitComponent } from 'src/app/pages/produit/produit.component';
import { SpinningWheelComponent } from 'src/app/spinning-wheel/spinning-wheel.component';
import { CampsiteUserComponent } from 'src/app/pages/campsite-user/campsite-user.component';
import { ActiviteCardsComponent } from 'src/app/Activites/activite-cards/activite-cards.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { AjoutReclamationComponent } from 'src/app/pages/reclamation/ajout-reclamation/ajout-reclamation.component';
import { AfficherReclamationClientComponent } from 'src/app/pages/reclamation/afficher-reclamation-client/afficher-reclamation-client.component';
import { AfficherUneReclamationClientComponent } from 'src/app/pages/reclamation/afficher-une-reclamation-client/afficher-une-reclamation-client.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { ViewcampsiteReserveComponent } from 'src/app/pages/viewcampsite-reserve/viewcampsite-reserve.component';
import { ChartComponent } from 'src/app/pages/chart/chart.component';
import { PayementDoneComponent } from 'src/app/pages/payement-done/payement-done.component';

export const TestRoutingModule: Routes = [
    { path: 'refund',       component:  RefundComponent  },
    { path: 'produit',      component: ProduitComponent , data:{animation:'animate'} },
    { path: 'produit/:id',  component: ProduitComponent },
    { path: 'Spinning wheel', component:  SpinningWheelComponent  },
    { path: 'usercampsite', component: CampsiteUserComponent },
    { path :'card-activite' , component: ActiviteCardsComponent },
    { path: 'dashboard_reclamation',           component: DashboardComponent },
    { path: 'ajout-reclamation',           component: AjoutReclamationComponent },
    { path: 'afficher-reclamation-client', component: AfficherReclamationClientComponent },
    { path: 'afficher-une-reclamation-client/:id', component: AfficherUneReclamationClientComponent },
    { path: 'welcome2',   component: DashboardComponent },
    { path: 'viewcampsite_reserver/:id',       component:  ViewcampsiteReserveComponent  },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'chart',      component: ChartComponent },
    { path: 'payementdone/:type',      component: PayementDoneComponent },

];
