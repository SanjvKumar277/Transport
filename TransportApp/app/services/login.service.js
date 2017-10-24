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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/catch");
var configuration_service_1 = require("./configuration.service");
var LoginEndpoint = (function () {
    function LoginEndpoint(http, configurations, injector) {
        this.http = http;
        this.configurations = configurations;
        this.injector = injector;
        this._usersUrl = "/api/Values";
    }
    Object.defineProperty(LoginEndpoint.prototype, "usersUrl", {
        get: function () { return this.configurations.baseUrl + this._usersUrl; },
        enumerable: true,
        configurable: true
    });
    LoginEndpoint.prototype.getUserEndpoint = function (userId) {
        var endpointUrl = this.usersUrl + "/" + userId;
        return this.http.get(endpointUrl)
            .map(function (response) {
            return response;
        })
            .catch(function (err, caught) {
            alert(err.status);
            if (err.status === 401) {
                return Observable_1.Observable.throw("401 Unauthorized");
            }
            return Observable_1.Observable.throw(caught); // <-----
        });
    };
    return LoginEndpoint;
}());
LoginEndpoint = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, configuration_service_1.ConfigurationService, core_1.Injector])
], LoginEndpoint);
exports.LoginEndpoint = LoginEndpoint;
//# sourceMappingURL=login.service.js.map