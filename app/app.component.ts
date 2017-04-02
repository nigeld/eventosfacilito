import { Component, ViewChild} from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    @ViewChild(RadSideDrawerComponent) public drawerComponent : RadSideDrawerComponent;

    private _drawer : SideDrawerType;

    ngAfterViewInit(){
      this._drawer = this.drawerComponent.sideDrawer;
    }

    openDrawer(){
      this._drawer.toggleDrawerState();
    }
 }
