import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GuestsListComponent } from "./guests-list/guests-list.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: "guests",
                component: GuestsListComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class GuestsRoutingModule{}