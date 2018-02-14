import { Http, Response, RequestOptions, Headers } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

import { Guest } from "./guest"
import { Island } from "./island";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class GuestService{
    private url = "http://localhost:2403/guests";
    


    constructor(private http: Http){}

    public getGuests():Promise<Guest[]>{   
        let guests = this.http.get(this.url)
        .toPromise()
        .then(this.extractGuests)
        //.catch(res => alert(res.json));
        return guests;
    }

    public getOneGuest(guestId: any):Promise<Guest>{
        let result = this.http.get(this.url + "/" + guestId)
        .toPromise()
        .then(this.extractGuest);
        return result;
    }

    private extractGuest(response: Response){
        let guest: Guest;     
        let json = response.json();
        guest = new Guest(json.id, json.name);
        guest.age = json.age;
        guest.strength = json.strength;
        guest.smarts = json.smarts;
        guest.spirit = json.spirit;
        guest.toughness = json.toughness;
        guest.level = json.level;
        guest.agility = json.agility;     
        return guest;
    }

    private extractGuests(response: Response){
        let guests: Guest[] = [];
        if(response != undefined)
        {        
            let json = response.json();
            json.forEach(g => 
            {
                let guest = new Guest(g.id, g.name);
                guest.age = g.age;
                guest.strength = g.strength;
                guest.smarts = g.smarts;
                guest.spirit = g.spirit;
                guest.toughness = g.toughness;
                guest.level = g.level;
                guest.agility = g.agility;
                guests.push(guest);
            });
        }
        return guests;
    }

    private handleError(error: any, caught: Observable<any>): any{        
        let message = "";
        return Observable.throw(message);
    }

    private createGuest(json: any): Guest{
        let guest = new Guest(json.id, json.name);
        guest.age = json.age;
        guest.strength = json.strength;
        guest.smarts = json.smarts;
        guest.spirit = json.spirit;
        guest.toughness = json.toughness;
        guest.level = json.level;
        guest.agility = json.agility;
        return guest;
    }
}