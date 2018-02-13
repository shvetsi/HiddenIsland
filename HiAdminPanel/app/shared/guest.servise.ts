import { Http, Response, RequestOptions, Headers } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

import { Guest } from "./guest"
import { Island } from "./island";

@Injectable()
export class GuestService{
    private url = "http://localhost:2403/guests";
    


    constructor(private http: Http){}

    public getGuests():Promise<Guest[]>{   
        let guests = this.http.get(this.url)
        .toPromise()
        .then(this.extractGuests)
        // .catch(this.handleError);
        return guests;
    }

    private extractGuests(response: Response){
        let guests: Guest[] = [];
        if(response != undefined)
        {        
            let json = response.json();
            json.forEach(g => {
                guests.push(new Guest(g.name, new Island("11")))
            });
        }
        return guests;
    }

    private handleError(error: any, caught: Observable<any>): any{        
        alert("error");
        let message = "";
        return Observable.throw(message);
    }
}