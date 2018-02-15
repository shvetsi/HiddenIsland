import { Http, Response, RequestOptions, Headers } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

import { Guest } from "./guest"
import { Island } from "./island";
import { forEach } from "@angular/router/src/utils/collection";
import { Dictionary } from "./dictionary";

@Injectable()
export class GuestService{
    private url = "http://localhost:2403/guests";
    


    constructor(private http: Http){}

    public getGuests():Promise<Guest[]>{   
        let guests = this.http.get(this.url)
        .toPromise()
        .then(res => this.extractGuests(res, this))
        //.catch(res => alert(res.json));
        return guests;
    }

    public getOneGuest(guestId: any):Promise<Guest>{
        let result = this.http.get(this.url + "/" + guestId)
        .toPromise()
        .then(res => this.extractGuest(res, this));
        return result;
    }

    private extractGuest(response: Response, self: any){
        let json = response.json();
        return self.createGuest(json);
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
        return Observable.throw(message);
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