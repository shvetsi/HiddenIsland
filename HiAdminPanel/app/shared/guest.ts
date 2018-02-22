import { Skill } from "./skill"
import { Island } from "./island"
import { Dictionary } from "./dictionary";
import { ProficiencyLevel } from "./enums/proficiency-level";
import { Characteristics } from "./enums/characteristics";

export class Guest {
    constructor (public id: string, public name: string, createStats: boolean = false){         
        this.stats = new Dictionary<ProficiencyLevel>();
        this.stats.add("Strength", 4);
        this.stats.add("Toughness", 4);
        this.stats.add("Agility", 4);
        this.stats.add("Smarts", 4);
        this.stats.add("Spirit", 4);
    }
    
    public islandId: string;
    public island: Island;
    public age: number;    
    public level: number = 0;
    public xp: number = 0;
    public stats: Dictionary<ProficiencyLevel>;
    public skills: Skill[];
}