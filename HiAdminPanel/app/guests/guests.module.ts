import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuestsListComponent } from "./guests-list/guests-list.component";
import { GuestsRoutingModule } from "./guests-routing.module";

@NgModule({
    imports:[
        CommonModule,
        GuestsRoutingModule
    ],
    declarations:[
        GuestsListComponent
    ]
})
export class GuestsModule{}