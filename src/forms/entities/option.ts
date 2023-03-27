export interface IOptionObject{
    id?:string
    
    }
    export type OptionObject = Record<keyof IOptionObject|string|symbol,any>
    export type Option = OptionObject|string