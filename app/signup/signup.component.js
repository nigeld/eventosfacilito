"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var SignUpComponent = (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.goToSignUp = function () {
        this.router.navigate(['login']);
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        if (this.password != this.passwordConfirmation) {
            return this.error = "No coinciden las contraseñas";
        }
        this.error = "";
        firebase.createUser({
            email: this.email,
            password: this.password
        }).then(function (result) {
            console.log("Resultado de la autenticacion " + JSON.stringify(result));
        }).catch(function (err) {
            _this.error = JSON.stringify(err);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMsdURBQTBEO0FBUzFELElBQWEsZUFBZTtJQUt4Qix5QkFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBSSxDQUFDO0lBRXhDLG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUEsQ0FBQztZQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyw4QkFBOEIsQ0FBQztRQUN2RCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQSxNQUFNO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLFVBQUEsR0FBRztZQUNULEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtLQUN6QyxDQUFDO3FDQU8rQixlQUFNO0dBTDFCLGVBQWUsQ0ErQjNCO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1zaWdudXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIGVtYWlsIDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQgOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbiA6IHN0cmluZztcclxuICAgIGVycm9yIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIGdvVG9TaWduVXAoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pXHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCl7XHJcbiAgICAgICAgaWYodGhpcy5wYXNzd29yZCAhPSB0aGlzLnBhc3N3b3JkQ29uZmlybWF0aW9uKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IgPSBcIk5vIGNvaW5jaWRlbiBsYXMgY29udHJhc2XDsWFzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVycm9yID0gXCJcIjtcclxuICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgfSkudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHRhZG8gZGUgbGEgYXV0ZW50aWNhY2lvbiBcIisgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgfSkuY2F0Y2goIGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBKU09OLnN0cmluZ2lmeShlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuXHJcbiAgICB9XHJcblxyXG59Il19