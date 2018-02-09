import { Stats } from "./stats"

export class Guest {
    constructor (public id: number,
    public name: string){ }

    public age: number;
    public stats: Stats[];

}