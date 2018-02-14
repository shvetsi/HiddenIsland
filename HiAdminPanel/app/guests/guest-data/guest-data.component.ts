import { Component, OnInit } from "@angular/core";
import { Route, ActivatedRoute } from "@angular/router";
import { GuestService } from "../../shared/guest.servise";
import { Guest } from "../../shared/guest";

@Component({
    moduleId: module.id,
    selector: "guest-data",
    templateUrl: "guest-data.component.html"
})
export class GuestDataComponent implements OnInit{
    public guest: Guest;
    public error: string;
    constructor(private guestsService: GuestService,
    private activeRoute: ActivatedRoute){}

    
    ngOnInit(): void {
        this.activeRoute.params.forEach(p => {
            let id = p["id"];
            if(id){
                this.guestsService.getOneGuest(id).then(
                    success => {this.guest = success;},
                    error => {this.error = error;}
                )
            }
            else{
                this.guest = null;
            }
        })
        
    }
    private getGuests(){
        
            
    }
}