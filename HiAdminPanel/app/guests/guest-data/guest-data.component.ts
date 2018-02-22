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
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

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
    public guestGroup: FormGroup;
    @Input()
    public message: string;
    public editMode: boolean = false;
    private mouseOverValue: { key: string, value: ProficiencyLevel };
    private initId: string;
    formErrors = {
        "name": "",
        "xp": "",
        "level": "",
        "islandId": ""
    }

    validationMessages = {        
        "name": {
            "required": "Name is a required field",
            "minlength": "Name must contains more than 1 symbol"
        },
        "xp": {
            "required": "XP is a required field",
            "pattern": "XP value must be a number below 399"
        },
        "level": {
            "required": "Level is a required field",
            "pattern": "Level value must be a number below 399"
        },
        "islandId": {
            "required": "Island is a required field",
        }
    }

    constructor(private guestsService: GuestService,
        private islandService: IslandService,
        private activeRoute: ActivatedRoute,
        private router: Router,
        private eventEmitter: EventEmitterService,
        private formBuilder: FormBuilder){

            this.guestGroup = this.formBuilder.group({
                name: ['', [Validators.required, Validators.minLength(2)]],
                xp: ['', [Validators.required, Validators.pattern("([0-9])|([0-9]{1,2})|([0-3]{1,1}\\d{1,2})")]],
                level: ['', [Validators.required, Validators.pattern("([0-9])|([0-9]{1,2})|([0-3]{1,1}\\d{1,2})")]],
                islandId: ['', Validators.required],
            });
        }

    
    ngOnInit(): void {
        if(this.activeRoute.params != undefined)
        this.activeRoute.params.subscribe(p => {
            this.initId = p["id"];
            if(this.initId && this.initId != "new"){
                this.guestsService.getOneGuest(this.initId).subscribe(
                    guestResult => {
                        this.guest = guestResult;
                        this.islandService.getOneIsland(this.guest.islandId)
                            .subscribe(
                                islandResult => {
                                    this.guest.island = islandResult;
                                    this.buildForm();
                                }
                            );
                    },
                    error => {this.message = error.data;}
                )
            }
            else if(this.initId){
                this.guest = new Guest(null, null, true);
                this.buildForm();
                this.switchEditMode();
            }
        })
        
    }

    private buildForm(){
        this.guestGroup = this.formBuilder.group({
            name: [this.guest.name, {
                    validators:[Validators.required, Validators.minLength(2)],
                    updateOn:'blur'
                }
            ],
            xp: [this.guest.xp, [Validators.required, Validators.pattern("([0-9]|[1-9][0-9]|[12][0-9]{2}|3[0-4][0-9]|350)")]],
            level: [this.guest.level, [Validators.required, Validators.pattern("([0-1]?[0-9])")]],
            islandId: [this.guest.islandId, Validators.required],
        });

        this.guestGroup.valueChanges.subscribe(
            data => this.onValueChanged()
        );
    }

    onValueChanged(){
        let form = this.guestGroup;

        for(let field in this.formErrors){
            this.formErrors[field] = "";
            let control = form.get(field);
            if(control && !control.valid && control.dirty){
                let message = this.validationMessages[field];
                for(let error in control.errors){
                    console.log(error);
                    this.formErrors[field] += message[error] + '. ';
                }
            }
        }
    }
    
    public switchEditMode(){
        console.log(this.guest);
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