import { Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { GuestsListComponent } from "./guests-list/guests-list.component"

export const routes : Routes = [
    {
        path : "",
        redirectTo:"home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: AppComponent
    }
];