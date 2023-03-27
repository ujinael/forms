<template>
 <select
      v-bind="$attrs" :value="getOptionValue(value)" class="v-input">
    <option disabled>- select -</option>
    <option v-for="option in options" :value="getOptionValue(option)">
    {{getOptionTitle(option)  }}
    </option>
    </select>
    </template>
    <script setup lang="ts">
import { Option } from '../entities/option';

        
    const props = withDefaults(defineProps<{
        propertyName?:string
        options:Array<Option>
            value:any
    }>(),{propertyName:'title'}
    )

    const getOptionTitle = (option:Option)=>{
    if(typeof option ==="string")return option
    else return option[props.propertyName]
    
    }
    
    const getOptionValue = (option:Option)=>{
    if(typeof option ==="string")return option
    else return option
    
    }
    </script>
    <style scoped lang="scss">
    @import "../styles/v-input.scss";
   
    </style>