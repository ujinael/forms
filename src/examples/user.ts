import { FormSelect, FormTextArea } from './../forms/entities/decorators';
import { FormInput } from "../forms"

export class User{
    @FormInput({label:'имя'})
    firstName:string
    @FormInput({label:'фамилия'})
    lastName:string
    @FormSelect({label:'пол'})
    gender:'male'|'female'
    constructor(
    firstName:string = 'Джон',
    lastName:string = 'Малкович',
    gender:'male'|'female' = 'male'
    ){
this.firstName = firstName
this.lastName = lastName
this.gender = gender

    }
}

