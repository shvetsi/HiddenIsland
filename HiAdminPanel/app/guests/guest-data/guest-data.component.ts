import { Component, OnInit, Input, Output } from "@angular/core";
import { Route, ActivatedRoute } from "@angular/router";
import { GuestService } from "../../shared/guest.servise";
import { Guest } from "../../shared/guest";
import { ProficiencyLevel } from "../../shared/proficiency-level";
import { IslandService } from "../../shared/island.service";
import { Island } from "../../shared/island";
import { CanDeactivateComponent } from "../../shared/guards/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: "guest-data",
    templateUrl: "guest-data.component.html",
    styleUrls:["guest-data.component.css"],
})
export class GuestDataComponent implements OnInit, CanDeactivateComponent{
    public dices: number[] = [4,6,8,10,12];
    public guest: Guest;
    public islands: Island[];
    @Input() 
    public error: string;
    public editMode: boolean = false;
    private mouseOverValue: { key: string, value: ProficiencyLevel };

    constructor(private guestsService: GuestService,
        private islandService: IslandService,
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
<<<<<<< HEAD
        if(this.editMode)
            this.guestsService.updateGuest(this.guest)
            .subscribe(
                success=> this.error = undefined,
                error => this.error = error
            );

        this.editMode = !this.editMode;
        if(this.islands == undefined){
            this.islandService.getIslands().subscribe(
                result => this.islands = result
            );
        }
=======
        this.editMode = !this.editMode;
>>>>>>> e1dfbcb67eb865fbd4632d8e8ca2872ab2d3d417
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
<<<<<<< HEAD
    }

    public onIslandSelest(islandId: any){
        console.log(islandId);
        console.log(this.islands.find(island => island.id == islandId).id);
        this.guest.island = this.islands.find(island => island.id == islandId);
    }

    public canDeactivate(): Observable<boolean> | boolean{
        let canDeactivate = this.editMode ? confirm("You haven't saved your changes yet. Discard them and leave?") : true;
        if (this.editMode && canDeactivate)
            this.editMode = false;
        return canDeactivate;
=======
>>>>>>> e1dfbcb67eb865fbd4632d8e8ca2872ab2d3d417
    }
}