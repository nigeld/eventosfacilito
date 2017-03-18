import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

    constructor(private router : Router) { }

    goToSignUp(){
        this.router.navigate(['signup'])
    }

    ngOnInit(): void {
        
    }
}