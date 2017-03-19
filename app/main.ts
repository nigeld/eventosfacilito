// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import { AuthService} from "./services/auth.service";

import firebase = require('nativescript-plugin-firebase');

firebase.init({
    persist: false,
    onAuthStateChanged: (data : any) => {
        console.log("LOGIN DATA : "+ JSON.stringify(data))
        if(data.loggedIn){
            AuthService.token = data.user.uid;
        }else{
            AuthService.token = null;
        }
    }
}).then(instance => console.log("Firebase inicializado"))
.catch(err=> console.log(err));

platformNativeScriptDynamic().bootstrapModule(AppModule);

