import { Skill } from "./skill"
import { Island } from "./island"
import { Dictionary } from "./dictionary";
<<<<<<< HEAD
import { ProficiencyLevel } from "./proficiency-level";
=======
>>>>>>> e1dfbcb67eb865fbd4632d8e8ca2872ab2d3d417

export class Guest {
    constructor (public id: string, public name: string){ }
    
    public island: Island;
    public age: number;    
    public level: number = 0;
    public xp: number = 0;
    public stats: Dictionary<ProficiencyLevel>;
    public skills: Skill[];
}