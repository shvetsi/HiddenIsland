import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuestsListComponent } from "./guests-list/guests-list.component";
import { GuestDataComponent } from "./guest-data/guest-data.component";
import { GuestsRoutingModule } from "./guests-routing.module";

@NgModule({
    imports:[
        CommonModule,
        GuestsRoutingModule
    ],
    declarations:[
        GuestsListComponent,
        GuestDataComponent,
    ]
})
export class GuestsModule{}