import { Injectable, Injector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { ConfigurationService } from './configuration.service';
import { User } from "../models/user.model";

@Injectable()
export class LoginEndpoint {
    private readonly _usersUrl: string = "/api/Values";
    get usersUrl() { return this.configurations.baseUrl + this._usersUrl; }

    constructor(protected http: Http, protected configurations: ConfigurationService, protected injector: Injector) {
    }

    getUserEndpoint(userId?: string): Observable<Response> {
        let endpointUrl = `${this.usersUrl}/${userId}`;
        return this.http.get(endpointUrl)
            .map((response: Response) => {
                return response;
            })
            .catch((err: Response, caught: Observable<Response>) => {
                alert(err.status);
                if (err.status === 401) {
                    return Observable.throw("401 Unauthorized");
                }
                return Observable.throw(caught); // <-----
            })
    }

   
}