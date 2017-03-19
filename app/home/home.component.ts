import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {

    constructor(private router : Router) { }

    goToSignUp(){
        this.router.navigate(['signup'])
    }

    ngOnInit(): void {
        
    }
}