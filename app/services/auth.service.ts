import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

@Injectable()
export class AuthService{
    constructor(){

    }

    isLoggedIn() : boolean {
        return AuthService.token != null;
    }
    login(token : string){
        AuthService.token = token;
    }

    logout(){
        AuthService.token = null;
    }

    static get token() : string{
        return getString("token");
    }

    static set token(token : string){
        setString("token", token);
    }

}