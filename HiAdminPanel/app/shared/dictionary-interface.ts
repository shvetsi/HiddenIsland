export interface DictionaryInterface<T>{
    add(key: string, value: T);
    containsKey(key:string): boolean;
    count(): number;
    item(key: string): T;
    keys : string[];
}