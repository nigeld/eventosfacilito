"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SignUpComponent = (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.goToSignUp = function () {
        this.router.navigate(['login']);
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    core_1.Component({
        selector: "ns-signup",
        moduleId: module.id,
        templateUrl: "./signup.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFRekMsSUFBYSxlQUFlO0lBQ3hCLHlCQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUFJLENBQUM7SUFFeEMsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx5QkFBeUI7S0FDekMsQ0FBQztxQ0FHK0IsZUFBTTtHQUQxQixlQUFlLENBVzNCO0FBWFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtc2lnbnVwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zaWdudXAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgZ29Ub1NpZ25VcCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=