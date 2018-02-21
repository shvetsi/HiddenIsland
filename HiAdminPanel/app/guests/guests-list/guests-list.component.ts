import { Component, OnInit, OnDestroy } from "@angular/core"
import { Guest } from "../../shared/guest"
import { GuestService } from "../../shared/services/guest.servise";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { EventEmitterService } from "../../shared/services/event-emitter.service";

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
        private activatedRoute: ActivatedRoute,
        private eventEmitter: EventEmitterService){
    }

    ngOnInit(): void {
        this.getGuests();
        this.eventEmitter.dataEmitter.subscribe((data: any )=> {
            let guestId = this.guests.findIndex(g => g.id == data.id);
            if(guestId >= 0)
                this.guests[guestId] = data;
            else
                this.guests.push(data);

            this.onSelect(data);
        });
    }

    private getGuests(){        
            this.guestService.getGuests().subscribe(
            guests => {this.guests = guests},
            error => {this.errorMessage = error;}
        );
    }

    public createNewClick(){        
        this.router.navigate(["/guests", "new"]).then(
            success => this.selectedItem = undefined);
    }

    public onSelect(guest: Guest){
        this.router.navigate(["/guests", guest.id]).then(
            success => this.selectedItem = success ? guest : this.selectedItem);
    }

    public goBack(){
        this.router.navigate(["/home"])
    }
}