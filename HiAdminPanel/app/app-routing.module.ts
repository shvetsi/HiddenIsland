import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GuestsListComponent } from "./guests/guests-list/guests-list.component";

@NgModule({
    imports:[RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        {
            path: "home",
            component: HomeComponent
        }
    ])],
exports: [RouterModule]
})
export class AppRoutingModle{}