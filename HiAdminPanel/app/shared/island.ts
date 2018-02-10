import { Guest } from "./guest"

export class Island{
    public owner:Guest;
    public guests:Guest[] = [];
    public name: string;
    public level: number;

    constructor(name: string, guest: Guest){
        this.name = name;
        this.owner = guest;
        this.guests.push(guest);
    }
}