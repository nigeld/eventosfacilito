"use strict";
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var AuthService = AuthService_1 = (function () {
    function AuthService() {
    }
    AuthService.prototype.isLoggedIn = function () {
        return AuthService_1.token != null;
    };
    AuthService.prototype.login = function (token) {
        AuthService_1.token = token;
    };
    AuthService.prototype.logout = function () {
        AuthService_1.token = null;
    };
    Object.defineProperty(AuthService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (token) {
            if (token == null) {
                application_settings_1.remove("token");
            }
            else {
                application_settings_1.setString("token", token);
            }
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = AuthService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
var AuthService_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQW9FO0FBR3BFLElBQWEsV0FBVztJQUNwQjtJQUVBLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLGFBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFDRCwyQkFBSyxHQUFMLFVBQU0sS0FBYztRQUNoQixhQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLGFBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBVyxvQkFBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFpQixLQUFjO1lBQzNCLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNkLDZCQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLGdDQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7UUFDTCxDQUFDOzs7T0FSQTtJQVVMLGtCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7O0dBQ0EsV0FBVyxDQTRCdkI7QUE1Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgcmVtb3ZlLCBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkgOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2UudG9rZW4gIT0gbnVsbDtcclxuICAgIH1cclxuICAgIGxvZ2luKHRva2VuIDogc3RyaW5nKXtcclxuICAgICAgICBBdXRoU2VydmljZS50b2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIEF1dGhTZXJ2aWNlLnRva2VuID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHRva2VuKCkgOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgdG9rZW4odG9rZW4gOiBzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRva2VuID09IG51bGwpe1xyXG4gICAgICAgICAgICByZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=