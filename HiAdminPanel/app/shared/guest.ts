import { Skill } from "./skill"
import { Island } from "./island"
import { Dictionary } from "./dictionary";

export class Guest {
    constructor (public id: string, public name: string){ }
    
    public island: Island;
    public age: number;    
    public level: number = 0;
    public xp: number = 0;
    public stats: Dictionary<ProficiencyLevel>;
    public skills: Skill[];
}