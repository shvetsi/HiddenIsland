import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Island } from "./island";
import { Observable } from "rxjs/Observable";

@Injectable()
export class IslandService{
    private url = "http://localhost:2403/islands";
    constructor(private http: Http){

    }

    public getIslands(): Observable<Island[]>{
        let islands = this.http.get(this.url).
        map(this.mapIslands);
        return islands;
    }

    public getOneIsland(islandId: any): Observable<Island>{
        return this.http.get(this.url + '/' + islandId).
        map(res => {
            let item = res.json();
            return new Island(item.id, item.name, item.level)
        });
    }

    private mapIslands(response: Response): Island[]{
        let result = response.json();
        let islands: Island[] = [];
        result.forEach(item => {
            islands.push(new Island(item.id, item.name, item.level));
        });
        return islands;
    }

    private handleError(response: Response){

    }
}