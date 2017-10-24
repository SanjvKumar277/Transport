// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';


//@Injectable()
export class Utilities {

    public static readonly captionAndMessageSeparator = ":";
    public static readonly noNetworkMessageCaption = "No Network";
    public static readonly noNetworkMessageDetail = "The server cannot be reached";
    public static readonly accessDeniedMessageCaption = "Access Denied!";
    public static readonly accessDeniedMessageDetail = "";
    public static uniqueId() {
        return this.randomNumber(1000000, 9000000).toString();
    }


    public static randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    public static baseUrl() {
        if (window.location.origin)
            return window.location.origin + "/" + window.location.pathname.split('/')[1];

        return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
}