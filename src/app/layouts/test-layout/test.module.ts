import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TestRoutingModule } from './test-routing.routing';
import { TestLayoutComponent } from './test-layout.component';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    declarations: [
        TestLayoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(TestRoutingModule),
        FormsModule,
        ComponentsModule
    ]
})
export class TestModule { }
