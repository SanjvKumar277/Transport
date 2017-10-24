// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================

export class User {
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    constructor(id?: string, userName?: string) {

        this.id = id;
        this.userName = userName;
    }
    //get friendlyName(): string {
    //    let name = this.fullName || this.userName;

    //    if (this.jobTitle)
    //        name = this.jobTitle + " " + name;

    //    return name;
    //}

    public id: string;
    public userName: string;
}