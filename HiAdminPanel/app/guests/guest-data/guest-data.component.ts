import { Component, OnInit } from "@angular/core";
import { Route, ActivatedRoute } from "@angular/router";
import { GuestService } from "../../shared/guest.servise";
import { Guest } from "../../shared/guest";

@Component({
    moduleId: module.id,
    selector: "guest-data",
    templateUrl: "guest-data.component.html",
    styleUrls:["guest-data.component.css"]
})
export class GuestDataComponent implements OnInit{
    public dices: number[] = [4,6,8,10,12];
    public guest: Guest;
    public error: string;
    public editMode: boolean = false;
    private mouseOverValue: { key: string, value: ProficiencyLevel };

    constructor(private guestsService: GuestService,
    private activeRoute: ActivatedRoute){}

    
    ngOnInit(): void {
        this.activeRoute.params.forEach(p => {
            let id = p["id"];
            if(id){
                this.guestsService.getOneGuest(id).subscribe(
                    success => {this.guest = success;},
                    error => {this.error = error;}
                )
            }
            else{
                this.guest = null;
            }
        })
        
    }
    
    public switchEditMode(){
        this.editMode = !this.editMode;
    }

    public onStatsClick(characteristic: string, value: any){
        if(this.editMode){
            this.mouseOverValue = undefined;
            this.changeCharacteristic(characteristic, value);
        }
    }

    public onStatsMouseEnter(characteristic: string, value: any){
        if(this.editMode){
            this.mouseOverValue = { key: characteristic, value: this.guest.stats.item(characteristic)};
            this.changeCharacteristic(characteristic, value);
        }
    }

    public onStatsMouseLeave(){
        if(this.editMode && this.mouseOverValue != undefined){
            this.changeCharacteristic(this.mouseOverValue.key, this.mouseOverValue.value);
            this.mouseOverValue = undefined;
        }
    }    

    private changeCharacteristic(characteristic: string, value: any)
    {
        if(this.guest.stats.containsKey(characteristic))
            this.guest.stats.add(characteristic, value);
    }
}