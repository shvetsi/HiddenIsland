import { Http, Response } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"

import { Guest } from "./guest"

@Injectable()
export class GuestService{
    private url = "http://localhost:2403/guests"

    constructor(private http: Http){}

    public getGuests(): Observable<Guest[]>{
        let guests = this.http.get(this.url)
        .map(this.extractGuests)
        .catch(this.handleError);
        return guests;
    }

    private extractGuests(response: Response){

    }

    private handleError(error: any, caught: Observable<any>): any{
        let message = "";
        return Observable.throw(message);
    }
}