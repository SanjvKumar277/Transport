"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var customer_component_1 = require("./components/customer/customer.component");
var appRoutes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'customer',
        component: customer_component_1.CustomerComponent,
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
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, {
                enableTracing: true,
            })
        ],
        exports: [
            router_1.RouterModule
        ]
        //  ,
        //providers: [
        //  CanDeactivateGuard,
        //  SelectivePreloadingStrategy
        //]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map