import { FormInput, FormTextArea, FormSelect } from './../forms/entities/decorators';
export class Car{
    @FormSelect({label:'марка'})
    mark:'bmw'|'ferrari'|'lada'
    @FormInput({label:'модель'})
    model:string
    @FormTextArea({label:'описание'})
   description:string
    constructor(
        mark:'bmw'|'ferrari'|'lada' = 'bmw',
        model:string = 't1',
        description:string = 'Описание'
    ){
this.mark = mark
this.model = model
this.description = description
    }
}