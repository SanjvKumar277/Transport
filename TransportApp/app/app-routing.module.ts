import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { LoginComponent } from "./components/login/login.component";
import { CustomerComponent } from "./components/customer/customer.component";
const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'customer',
        component: CustomerComponent,
    }
    //{
    //    path: 'app',
    //  component: AppComponent,
    //  outlet: 'popup'
    //}
    //,
    //{
    //    path: 'two',
    //    component: LoginComponent, children: [
    //        {
    //            path: 'three',
    //            component: AppComponent,

    //        }
    //    ]
    //}
    //{
    //  path: 'admin',
    //  loadChildren: 'app/admin/admin.module#AdminModule',
    //  canLoad: [LoginComponent]
    //},
    //{
    //  path: 'crisis-center',
    //  loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    //  data: { preload: true }
    //},

    //,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
                //preloadingStrategy: SelectivePreloadingStrategy,

            }
        )
    ],
    exports: [
        RouterModule
    ]

    //  ,
    //providers: [
    //  CanDeactivateGuard,
    //  SelectivePreloadingStrategy
    //]
})
export class AppRoutingModule { }
