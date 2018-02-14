import { Skill } from "./skill"
import { Island } from "./island"

export class Guest {
    constructor (public id: string, public name: string){ }
    
    public island: Island;
    public age: number;    
    public smarts: number = 8;
    public strength: number = 8;
    public toughness: number = 8;
    public agility: number = 8;
    public spirit: number = 8;
    public level: number = 0;
    public skills: Skill[];

}