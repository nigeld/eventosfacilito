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
    SignUpComponent.prototype.signUp = function () {
        console.log("Password : " + this.password);
        console.log("Password confirmation : " + this.passwordConfirmation);
        console.log("Email : " + this.email);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFRekMsSUFBYSxlQUFlO0lBS3hCLHlCQUFvQixNQUFlO1FBQWYsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUFJLENBQUM7SUFFeEMsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx5QkFBeUI7S0FDekMsQ0FBQztxQ0FPK0IsZUFBTTtHQUwxQixlQUFlLENBcUIzQjtBQXJCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1zaWdudXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGVtYWlsIDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbiA6IHN0cmluZztcclxuICAgIGVycm9yIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIGdvVG9TaWduVXAoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pXHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXNzd29yZCA6IFwiKyB0aGlzLnBhc3N3b3JkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3N3b3JkIGNvbmZpcm1hdGlvbiA6IFwiKyB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIDogXCIrIHRoaXMuZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==