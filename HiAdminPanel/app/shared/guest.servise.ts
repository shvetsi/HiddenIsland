import { Http, Response } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

import { Guest } from "./guest"
import { forEach } from "@angular/router/src/utils/collection";
import { Dictionary } from "./dictionary";
<<<<<<< HEAD
import { ProficiencyLevel } from "./proficiency-level";
import { IslandService } from "./island.service";
=======
>>>>>>> e1dfbcb67eb865fbd4632d8e8ca2872ab2d3d417

@Injectable()
export class GuestService{
    private url = "http://localhost:2403/guests";
    


    constructor(private http: Http, private islandService: IslandService){}

    public getGuests():Observable<Guest[]>{   
        let guests = this.http.get(this.url)
        .map(res => this.extractGuests(res, this))
        .catch(this.handleError)
        return guests;
    }

    public getOneGuest(guestId: any):Observable<Guest>{
        let result = this.http.get(this.url + "/" + guestId)
        .map(res => this.extractGuest(res, this))
        .catch(this.handleError);
        return result;
    }

<<<<<<< HEAD
    public updateGuest(guest: Guest): Observable<any>{
        return this.http.put(this.url + '/' + guest.id,
        {
            id: guest.id,
            name: guest.name,
            age: guest.age,
            level: guest.level,
            xp: guest.xp,
            islandId: guest.island.id,
            strength:guest.stats.item("Strength"),
            smarts:guest.stats.item("Smarts"),
            spirit:guest.stats.item("Spirit"),
            toughness:guest.stats.item("Toughness"),
            agility:guest.stats.item("Agility")
        }).catch(this.handleError);
=======
    public updateGuest(guest: Guest){
        this.http.put(this.url + '/' + guest.id,
    {
        id: guest.id,
        name: guest.name,
        age: guest.age,
        level: guest.level,
        xp: guest.xp,
        islandId: guest.island,
        strength:guest.stats.item("Strength"),
        smarts:guest.stats.item("Smarts"),
        spirit:guest.stats.item("Spirit"),
        toughness:guest.stats.item("Toughness"),
        agility:guest.stats.item("Agility")
    }).catch(this.handleError);
>>>>>>> e1dfbcb67eb865fbd4632d8e8ca2872ab2d3d417
    }

    private extractGuest(response: Response, self: any){
        let json = response.json();
<<<<<<< HEAD
        let guest = self.createGuest(json);
        self.islandService.getOneIsland(json.islandId)
        .subscribe(
            result => guest.island = result
        );
        return guest;
=======
        return self.createGuest(json);
>>>>>>> e1dfbcb67eb865fbd4632d8e8ca2872ab2d3d417
    }

    private extractGuests(response: Response, self: any){
        let guests: Guest[] = [];
        if(response != undefined)
        {        
            let json = response.json();
            json.forEach(g => 
            {
                guests.push(self.createGuest(g));
            });
        }
        return guests;
    }

    private handleError(error: any, caught: Observable<any>): any{        
        let message = "";
        alert(caught);
        return Observable.throw(caught);
    }

    private createGuest(json: any) {
        let guest: Guest = new Guest(json.id, json.name);
        guest.age = json.age;
        guest.level = json.level;
        guest.xp = json.xp;
        guest.stats = new Dictionary<ProficiencyLevel>();
        guest.stats.add("Strength", json.strength);
        guest.stats.add("Smarts", json.smarts);
        guest.stats.add("Spirit", json.spirit);
        guest.stats.add("Toughness", json.toughness);
        guest.stats.add("Agility", json.agility);
        return guest;
    }
}