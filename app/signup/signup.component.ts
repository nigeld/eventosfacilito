import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
        console.log("Password : "+ this.password);
        console.log("Password confirmation : "+ this.passwordConfirmation);
        console.log("Email : "+ this.email);
    }

    ngOnInit(){

    }

}