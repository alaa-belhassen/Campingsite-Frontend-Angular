import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from "../../components/components.module";
import { ListUsersComponent } from 'src/app/pages/list-users/list-users.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TablesComponent,
       
        IconsComponent,
        MapsComponent,
        
       
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ComponentsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
        
    ]
})

export class AdminLayoutModule {}
