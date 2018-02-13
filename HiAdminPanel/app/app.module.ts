import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { GuestService } from "./shared/guest.servise";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModle } from "./app-routing.module";
import { GuestsModule } from "./guests/guests.module";
import { HttpModule } from "@angular/http";

@NgModule({
    imports : [ 
        BrowserModule,
        HttpModule,
        AppRoutingModle,
        GuestsModule],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [ GuestService],
    bootstrap: [AppComponent]
})
export class AppModule {

}