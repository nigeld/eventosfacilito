import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule} from "nativescript-angular/forms";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { HomeComponent } from "./home/home.component";

import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/signup.component";

import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        SignUpComponent,
        HomeComponent
    ],
    providers: [
        ItemService,
        AuthGuard,
        AuthService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
