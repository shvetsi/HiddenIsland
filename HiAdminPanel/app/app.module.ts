import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"
import { HttpModule } from "@angular/http"

import { routes } from "./app.routes"
import { AppComponent } from "./app.component"

@NgModule({
    imports : [ BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}