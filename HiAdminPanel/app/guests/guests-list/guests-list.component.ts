import { Component, OnInit } from "@angular/core"
import { Guest } from "../../shared/guest"
import { GuestService } from "../../shared/guest.servise";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "guests-list",
    templateUrl: "guests-list.component.html",
    styleUrls:["guests-list.component.css"]
})
export class GuestsListComponent implements OnInit{
    private owner : Guest;
    private selectedItem: any;
    public guests: any[] = [];
    public errorMessage: string;

    constructor(private guestService: GuestService,
        private router: Router,
        private activatedRoute: ActivatedRoute){
        
    }
    ngOnInit(): void {
        this.getGuests();
    }
    private getGuests(){        
            this.guestService.getGuests().subscribe(
            guests => {this.guests = guests},
            error => {this.errorMessage = error;}
        );
    }

    public onSelect(guest: Guest){
        this.router.navigate(["/guests", guest.id]).then(
            success => this.selectedItem = success ? guest : this.selectedItem);
    }

    public goBack(){
        this.router.navigate(["/home"])
    }
}