import { Component } from "@angular/core"
import { Router } from "@angular/router"
import "./rx-js.operators"

import { GuestService } from "./shared/guest.servise"

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls:["app.component.css"]
})
export class AppComponent {
    constructor(private guestServise: GuestService,
    private router: Router){

    }
    public goToGuestsList(){
        this.router.navigate(["guests"])
    }

}