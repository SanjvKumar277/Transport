import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { LoginComponent } from "./components/login/login.component";
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from "./components/customer/customer.component";
import { LoginEndpoint } from './services/login.service';
import { ConfigurationService } from './services/configuration.service';


@NgModule({
    declarations: [AppComponent, LoginComponent, CustomerComponent],
    bootstrap: [AppComponent, LoginComponent, CustomerComponent],
    imports: [BrowserModule, AppRoutingModule, HttpModule],
    exports: [
        RouterModule
    ],
    providers: [
        ConfigurationService,
        LoginEndpoint
        ]
})
export class AppModule {
}
