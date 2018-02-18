import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GuestsListComponent } from "./guests-list/guests-list.component";
import { GuestDataComponent } from "./guest-data/guest-data.component";
import { GuestsRoutingModule } from "./guests-routing.module";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        GuestsRoutingModule
    ],
    declarations:[
        GuestsListComponent,
        GuestDataComponent,
    ]
})
export class GuestsModule{}