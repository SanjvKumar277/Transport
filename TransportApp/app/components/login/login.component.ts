import { Component } from '@angular/core';
import { LoginEndpoint } from '../../services/login.service';
import { ConfigurationService } from '../../services/configuration.service';
import { Http, Response } from '@angular/http';
import { User } from "../../models/user.model";
@Component({
    selector: 'my-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    moduleId: module.id
})
export class LoginComponent {
    constructor(private loginEndpoint: LoginEndpoint) {
    }
    title = 'Login Component';
    user: User = new User();
    errorMessage: string;
    MyClick(e: string) {
        if (e == 'undefined') {
            this.errorMessage = "Invalid Input";
            return;
        }
        this.errorMessage = '';
        this.loginEndpoint.getUserEndpoint(e)
            .subscribe(
            user => {
                this.toUser(user.text());
            },
            error => {
                //this.errorMessage = error.data;
                //alert(error);
            });
    };


    public toUser(data: string): User {
        let jsonData = JSON.parse(data);
        this.user = new User(jsonData.ID, jsonData.UserName);
        return this.user;
    }

    MyChange(value: any) {
        console.log(value.target.value);
    }
}
