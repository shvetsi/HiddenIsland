import { Guest } from "./guest"

export class Island{
    public owner:Guest;
    public guests:Guest[] = [];

    constructor(public id: string,
        public name: string,
        public level: number){
    }
}