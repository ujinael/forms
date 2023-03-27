

<template>
<div class="app_content">
<div class="form_1 forms">
<h3>Пользователь</h3>
<VForm 
:form-object="user" 
:options-object="{gender:['male','female']}"
@save="onSubmitForm"
:id="'user'"
/>
</div>
<div class="form_2 forms">
<h3>Машина</h3>
<VForm :form-object="car" :options-object="{mark:['bmv','ferrari','lada']}"
:style-object="{
  mark:{rowStart:1,rowEnd:2,columnStart:1,columnEnd:2},
  model:{rowStart:1,rowEnd:2,columnStart:2,columnEnd:3},
  description:{rowStart:2,rowEnd:3,columnStart:1,columnEnd:3}
  }"
  @save="onSubmitForm" :id="'cars'"

/>
</div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { User } from './examples/user';
import { Car } from './examples/car';
import VForm from './forms/VForm.vue';


const user = ref(new User())

const car = ref(new Car())
const onSubmitForm = (object:Record<string|symbol,any>)=>{
  console.log(object);
  
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.forms{
  background-color: gray;
  margin-top: 1rem;
  border: 2px solid gray;
  box-shadow: 2px 2px 5px gray;
}

</style>
