import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
})

export class SignUpComponent implements OnInit{
    constructor(private router : Router) { }

    goToSignUp(){
        this.router.navigate(['login'])
    }

    ngOnInit(){

    }

}