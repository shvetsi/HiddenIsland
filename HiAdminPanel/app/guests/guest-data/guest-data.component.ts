import { Component, OnInit, Input, Output } from "@angular/core";
import { Route, ActivatedRoute, Router } from "@angular/router";
import { GuestService } from "../../shared/services/guest.servise";
import { Guest } from "../../shared/guest";
import { ProficiencyLevel } from "../../shared/enums/proficiency-level";
import { IslandService } from "../../shared/services/island.service";
import { Island } from "../../shared/island";
import { CanDeactivateComponent } from "../../shared/guards/can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";
import { Dictionary } from "../../shared/dictionary";
import { Characteristics } from "../../shared/enums/characteristics";
import { EventEmitterService } from "../../shared/services/event-emitter.service";

@Component({
    moduleId: module.id,
    selector: "guest-data",
    templateUrl: "guest-data.component.html",
    styleUrls:["guest-data.component.css"],
})
export class GuestDataComponent implements OnInit, CanDeactivateComponent{
    public dices: number[] = [4,6,8,10,12];
    public guest: Guest = null;
    public islands: Island[];
    @Input()
    public message: string;
    public editMode: boolean = false;
    private mouseOverValue: { key: string, value: ProficiencyLevel };
    private initId: string;

    constructor(private guestsService: GuestService,
        private islandService: IslandService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private eventEmitter: EventEmitterService){}

    
    ngOnInit(): void {
        if(this.activeRoute.params != undefined)
        this.activeRoute.params.subscribe(p => {
            this.initId = p["id"];
            if(this.initId && this.initId != "new"){
                this.guestsService.getOneGuest(this.initId).subscribe(
                    success => {this.guest = success;},
                    error => {this.message = error.data;}
                )
            }
            else if(this.initId){
                this.guest = new Guest(null, null, true);
                this.switchEditMode();
            }
        })
        
    }
    
    public switchEditMode(){
        if(this.editMode){
            this.guestsService.updateGuest(this.guest)
            .subscribe(
                success=> {
                    this.message = undefined;                
                    this.eventEmitter.dataEmitter.emit(success)
                    error => this.message = error.message
                }
            );
        }

        this.editMode = !this.editMode;
        if(this.islands == undefined){
            this.islandService.getIslands().subscribe(
                result => this.islands = result
            );
        }
        if(!this.editMode && this.initId == 'new'){
            this.router.navigate(["/guests"]);
        }
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

    public onIslandSelest(islandId: any){
        this.guest.island = this.islands.find(island => island.id == islandId);
    }

    public canDeactivate(): Observable<boolean> | boolean{
        let canDeactivate = this.editMode ? confirm("You haven't saved your changes yet. Discard them and leave?") : true;
        if (this.editMode && canDeactivate)
            this.editMode = false;
        return canDeactivate;
    }
}