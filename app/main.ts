// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

import firebase = require('nativescript-plugin-firebase');

firebase.init({
    persist: false
}).then(instance => console.log("Firebase inicializado"))
.catch(err=> console.log(err));

platformNativeScriptDynamic().bootstrapModule(AppModule);

