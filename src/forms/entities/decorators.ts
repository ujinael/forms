import {FormItem} from "./form_item.entity"
import "reflect-metadata"
export function Form(){
return <TFunction extends Function>(constructor:TFunction)=>{
    return constructor 
}


}

export const FormInput = (options?:{label?:string}):PropertyDecorator=>{ 
   return (target:any,key:string|symbol)=>{
Reflect.defineMetadata("form_item:type",{
type:"f-input",label:options?.label??key} as FormItem,target,key)
}
}
export const FormTextArea = (options?:{label?:string}):PropertyDecorator=>{ 
    return (target:any,key:string|symbol)=>{
 Reflect.defineMetadata("form_item:type",{
 type:"f-textarea",label:options?.label??key} as FormItem,target,key)
 }
 }
 export const FormSelect = (options?:{label?:string}):PropertyDecorator=>{ 
    return (target:any,key:string|symbol)=>{
 Reflect.defineMetadata("form_item:type",{
 type:"f-select",label:options?.label??key} as FormItem,target,key)
 }
 }
// @Form()
// export class FormObject{
// @FormInput()
// name:string
// constructor(name:string = ""){
//     this.name = name
// }
// }
