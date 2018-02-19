import { CanDeactivate } from "@angular/router"
import { Observable } from "rxjs/Observable"
import { Injectable } from "@angular/core";

export interface CanDeactivateComponent{
    canDeactivate(): Observable<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent>{
    public canDeactivate(component: CanDeactivateComponent) : Observable<boolean> | boolean{
        return component.canDeactivate ? component.canDeactivate() : true;

    }
}