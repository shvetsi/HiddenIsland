import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import "./rx-js.operators";

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppComponent } from "./app.component"
import { GuestService } from "./shared/services/guest.servise";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModle } from "./app-routing.module";
import { GuestsModule } from "./guests/guests.module";
import { HttpModule } from "@angular/http";
import { IslandService } from "./shared/services/island.service";
import { CanDeactivateGuard } from "./shared/guards/can-deactivate-guard.service";
import { EventEmitterService } from "./shared/services/event-emitter.service";

@NgModule({
    imports : [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModle,
        GuestsModule],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [ GuestService, IslandService, CanDeactivateGuard, EventEmitterService],
    bootstrap: [AppComponent]
})
export class AppModule {

}