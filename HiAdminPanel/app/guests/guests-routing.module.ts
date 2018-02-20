import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GuestsListComponent } from "./guests-list/guests-list.component";
import { GuestDataComponent } from "./guest-data/guest-data.component";
import { CanDeactivateGuard } from "../shared/guards/can-deactivate-guard.service"; 

@NgModule({
    imports:[
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/guests",
                pathMatch: "full"
            },
            {
                path: "guests",
                component: GuestsListComponent,
                children: [
                    {
                        path:"",
                        component: GuestDataComponent,
                        canDeactivate: [CanDeactivateGuard]
                    },  
                    {
                        path:":id",
                        component: GuestDataComponent,
                        canDeactivate: [CanDeactivateGuard]
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class GuestsRoutingModule{}