import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import firebase = require('nativescript-plugin-firebase');


@Component({
    selector: "ns-signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
})

export class SignUpComponent implements OnInit{
    email : string;
    password : string;
    passwordConfirmation : string;
    error : string;
    constructor(private router : Router) { }

    goToSignUp(){
        this.router.navigate(['login'])
    }

    signUp(){
        if(this.password != this.passwordConfirmation){
            return this.error = "No coinciden las contraseñas";
        }

        this.error = "";
        firebase.createUser({
            email: this.email,
            password: this.password
        }).then( result => {
            console.log("Resultado de la autenticacion "+ JSON.stringify(result));
        }).catch( err => {
            this.error = JSON.stringify(err);
        })
    }

    ngOnInit(){

    }

}