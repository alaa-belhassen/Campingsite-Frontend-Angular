import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.routing';
import { TestLayoutComponent } from './test-layout.component';
import { ComponentsModule } from "../../components/components.module";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        TestLayoutComponent,
       
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TestRoutingModule),
        FormsModule,
        ComponentsModule,
        ReactiveFormsModule,
        HttpClientModule,
       
    ]
})
export class TestModule { }
