// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@Injectable()
var Utilities = (function () {
    function Utilities() {
    }
    Utilities.uniqueId = function () {
        return this.randomNumber(1000000, 9000000).toString();
    };
    Utilities.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Utilities.baseUrl = function () {
        if (window.location.origin)
            return window.location.origin + "/" + window.location.pathname.split('/')[1];
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    };
    return Utilities;
}());
Utilities.captionAndMessageSeparator = ":";
Utilities.noNetworkMessageCaption = "No Network";
Utilities.noNetworkMessageDetail = "The server cannot be reached";
Utilities.accessDeniedMessageCaption = "Access Denied!";
Utilities.accessDeniedMessageDetail = "";
exports.Utilities = Utilities;
//# sourceMappingURL=utilities.js.map