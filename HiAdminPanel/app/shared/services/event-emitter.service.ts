import { Injectable, EventEmitter } from "@angular/core"
import { Guest } from "../guest";

@Injectable()
export class EventEmitterService{

    dataEmitter = new EventEmitter<Guest>();

    public sendData(guest: Guest){
        this.dataEmitter.emit(guest);
    }
}