<template>
  <div class="v-form">
  <form :id="id" @submit.prevent="onSubmit" class="form">
<VFormItem
:style ="styleObject ?getStyle(styleObject[key]) :undefined"
 v-for="[key,item] in formMap.entries()" :key="key" :label="item.label" >
<component :is="item.type" :name="key"
:options="item.type==='f-select' ? optionsObject[key]:undefined"
:value ="item.value"
></component>
</VFormItem>

</form>
<div class="controls ">
<VButton :form="id" type="submit" :v-style="'accept'">Сохранить</VButton>
<VButton :form="id" type="button" :v-style="'delete'"  @click.stop ="emit('cancel')" >Отмена</VButton>

</div>
  
  </div>

</template>
<script setup lang="ts">
import { onMounted,ref } from "vue";
import {FormItem} from "./entities"
import VFormItem from "./components/VFormItem.vue";
import VButton from "./components/VButton.vue";
import { Option } from "./entities/option";
type Value = {
  value:string|number|Date
}
type Grid = {rowStart:number
,columnStart:number,
rowEnd:number,
columnEnd:number
}
const props = defineProps<{
id:string,
formObject:Object,
optionsObject:Record<string|symbol,Array<Option>>
styleObject?:Record<string|symbol,Grid>
}>()
const getStyle = (grid:Grid|undefined)=>{
  if(!grid) return undefined
  return {
    'grid-area':`${grid.rowStart}/${grid.columnStart}/${grid.rowEnd}/${grid.columnEnd}`
  }
}
const emit = defineEmits<{
  (event:"save", object:Object):void
  (event:"cancel"):void
}>()

const formMap = ref(new Map<string,FormItem&Value>()) 
const onSubmit = (e:Event)=>{
const formData = new FormData(e.target as HTMLFormElement)
const object = Object.fromEntries(formData)
emit("save",object)
}
onMounted(()=>{

Object.entries(props.formObject).forEach(([key,value])=>{
const meta = Reflect.getMetadata("form_item:type",props.formObject,key) as FormItem
if(meta)
formMap.value.set(key,{...meta,value})
})

})
</script>
<style scoped lang="scss">
.v-form{
 padding: 1rem;
 display: flex;
 flex-direction: column;
 gap:1em;
}
.form{
   
    display: grid;
    gap:.8em;
    min-width: 300px;
}
.controls{
  display: flex;
  gap: 1rem;
}
</style>