"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./components/app.component");
var login_component_1 = require("./components/login/login.component");
var app_routing_module_1 = require("./app-routing.module");
var customer_component_1 = require("./components/customer/customer.component");
var login_service_1 = require("./services/login.service");
var configuration_service_1 = require("./services/configuration.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, customer_component_1.CustomerComponent],
        bootstrap: [app_component_1.AppComponent, login_component_1.LoginComponent, customer_component_1.CustomerComponent],
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            configuration_service_1.ConfigurationService,
            login_service_1.LoginEndpoint
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map