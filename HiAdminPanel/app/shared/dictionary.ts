import { DictionaryInterface } from "./dictionary-interface";

export class Dictionary<T> implements DictionaryInterface<T> {

    private items: { [index: string]: T } = {};

    private itemsCount: number = 0;
 
    public containsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }
 
    public count(): number {
        return this.itemsCount;
    }
 
    public add(key: string, value: T) {
        if(!this.items.hasOwnProperty(key))
             this.itemsCount++;
 
        this.items[key] = value;
    }
 
    // public setValue(key: string, value: T) {
    //     if(!this.items.hasOwnProperty(key))
    //          this.add(key, value);
 
    //     this.items[key] = value;
    // }
 
    public item(key: string): T {
        return this.items[key];
    }
 
    public get keys(): string[] {
        var keySet: string[] = [];
 
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
 
        return keySet;
    }
}