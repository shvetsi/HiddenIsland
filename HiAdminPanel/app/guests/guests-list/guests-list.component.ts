import { Component, OnInit } from "@angular/core"
import { Guest } from "../../shared/guest"
import { GuestService } from "../../shared/guest.servise";

@Component({
    moduleId: module.id,
    selector: "my-guests",
    templateUrl: "guests-list.component.html",
    styleUrls:["guests-list.component.css", "../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class GuestsListComponent implements OnInit{
    
    public guests: any[] = [];
    public errorMessage: string;

    constructor(private guestService: GuestService){
        
    }
    ngOnInit(): void {
        this.getGuests();
    }
    private getGuests(){
        
        this.guestService.getGuests().then(
            guests => {this.guests = guests},
            error => {this.errorMessage = error; alert(error)}
        );
    }

    public onSelect(guest: Guest){

    }
}