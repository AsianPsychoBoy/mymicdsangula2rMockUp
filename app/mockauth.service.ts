import {Injectable} from '@angular/core'

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    loginSuccessful: boolean;
    logoutSuccessful: boolean;

    getUser() {return {
        firstName: "Cack",
        lastName: "Jai",
        email: "cjai@micds.org",
        gradYear: 9,
    } }

    logIn() {
        const p: Promise<string> = new Promise (
            (resolve: (msg:any)=>void, reject: (rsn:any)=>void) => {
                this.isLoggedIn = true;
                resolve('')
                //this is gaurenteed to be successful bacause its only mockup
            }
        );
        p.then((msg)=>{this.loginSuccessful=true})
        .catch((e)=>{this.loginSuccessful=false})
    }

    logOut() {
        const p: Promise<string> = new Promise (
            (resolve: (msg:any)=>void, reject: (rsn:any)=>void) => {
                this.isLoggedIn = false;
                resolve('')
                //this is gaurenteed to be successful bacause its only mockup
            }
        );
        p.then((msg)=>{this.logoutSuccessful=true})
        .catch((e)=>{this.logoutSuccessful=false})
    }
}