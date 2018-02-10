import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { HttpModule } from "@angular/http"

import { routes } from "./app.routes"
import { AppComponent } from "./app.component"
import { GuestService } from "./shared/guest.servise";

@NgModule({
    imports : [ BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [ GuestService]
})
export class AppModule {

}