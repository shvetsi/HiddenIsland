import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { FormsModule } from "@angular/forms"
import { AppComponent } from "./app.component"
import { GuestService } from "./shared/guest.servise";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModle } from "./app-routing.module";
import { GuestsModule } from "./guests/guests.module";
import { HttpModule } from "@angular/http";
import { IslandService } from "./shared/island.service";
import { CanDeactivateGuard } from "./shared/guards/can-deactivate-guard.service";

import "./rx-js.operators";

@NgModule({
    imports : [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModle,
        GuestsModule],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [ GuestService, IslandService, CanDeactivateGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}