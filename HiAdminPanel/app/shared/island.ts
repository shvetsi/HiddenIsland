import { Guest } from "./guest"

export class Island{
    public owner:Guest;
    public guests:Guest[] = [];
    public name: string;
    public level: number;

    constructor(name: string){
        this.name = name;
    }
}