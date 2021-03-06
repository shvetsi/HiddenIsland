import { Routes } from "@angular/router"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component";
import { GuestsModule } from "./guests/guests.module";

export const routes : Routes = [
    {
        path : "",
        redirectTo:"home",
        pathMatch: "full"
    },
    
    {
        path: "home",
        component: HomeComponent
    }
];