"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("../../services/login.service");
var user_model_1 = require("../../models/user.model");
var LoginComponent = (function () {
    function LoginComponent(loginEndpoint) {
        this.loginEndpoint = loginEndpoint;
        this.title = 'Login Component';
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.MyClick = function (e) {
        var _this = this;
        if (e == 'undefined') {
            this.errorMessage = "Invalid Input";
            return;
        }
        this.errorMessage = '';
        this.loginEndpoint.getUserEndpoint(e)
            .subscribe(function (user) {
            _this.toUser(user.text());
        }, function (error) {
            //this.errorMessage = error.data;
            //alert(error);
        });
    };
    ;
    LoginComponent.prototype.toUser = function (data) {
        var jsonData = JSON.parse(data);
        this.user = new user_model_1.User(jsonData.ID, jsonData.UserName);
        return this.user;
    };
    LoginComponent.prototype.MyChange = function (value) {
        console.log(value.target.value);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [login_service_1.LoginEndpoint])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map