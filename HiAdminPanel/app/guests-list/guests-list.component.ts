import { Component } from "@angular/core"
import { Guest } from "../shared/guest"

@Component({
    moduleId: module.id,
    selector: "guests-list",
    templateUrl: "guests-list.component.html"
})
export class GuestsListComponent{
    public guests: Guest[] = [];

    constructor(){
        
        alert("test");
    }

    public onSelect(){

    }
}