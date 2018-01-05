import {Injectable} from '@angular/core';

@Injectable()
export class SessionServiceProvider {
    isLogged = false;
    user: any;
    first;
    last;

    constructor() {
        console.log('Hello SessionServiceProvider Provider');
    }

    con() {
        console.log(this.user.uid);
    }

    clear() {
        this.isLogged = false;
        this.user = {};

    }


}
