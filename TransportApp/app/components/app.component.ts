import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css'],
    moduleId: module.id
})
export class AppComponent { name = 'Angular 2'; }


//btnClick = function () {
//    this.router.navigateByUrl('/user');
//};