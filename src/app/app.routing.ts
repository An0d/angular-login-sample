import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { Feature1Component } from './main/feature1/feature1.component';
import { Feature2Component } from './main/feature2/feature2.component';

import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'feature1',
                component: Feature1Component
            },
            {
                path: 'feature2',
                component: Feature2Component
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [LoginComponent, MainComponent, DashboardComponent, Feature1Component, Feature2Component];
