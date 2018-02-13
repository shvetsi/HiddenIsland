import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GuestsListComponent } from "./guests-list/guests-list.component";
import { GuestDataComponent } from "./guest-data/guest-data.component";

@NgModule({
    imports:[
        RouterModule.forChild([

            {
                path: "guests",
                component: GuestsListComponent
            },
            {
                path: "guests/:id",
                component: GuestDataComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class GuestsRoutingModule{}