<template>
<button v-bind="$attrs" :class="classes" :disabled="disabled">
    <slot>
    </slot>
</button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
disabled?:boolean
vStyle?:'accept'|'delete'|'cancel'|'default'
plain?:boolean
rounded?:boolean
}>()
const classes = computed(()=>{
    return {
 rounded:props.rounded,
 accept:props.vStyle === 'accept',
 default:props.vStyle === 'default' || !props.vStyle,
 delete:props.vStyle === 'delete',
 cancel:props.vStyle === 'cancel',
 disabled:props.disabled,
 plain:props.plain
    }
})


</script>
<style scoped lang="scss">
button{
box-sizing: border-box;
background-clip: border-box;
border-width: 1px;
border-style:solid;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: medium;
padding:.2rem .4rem;
box-shadow:.2px .2px 3px gray;
display: grid;
gap: .2rem;
justify-items: center;
align-items: center;
grid-auto-flow: column;
}
.disabled{
    background-color: white;
    color:lightgray
}
.disabled:hover{
cursor:not-allowed;
    color:lightgray

}

button:hover{
    cursor: pointer;
    box-shadow: 0rem 0rem .1rem gray;

    transition: all .1s ease-in;
}
.icon{
    width: 12px;
    height: 12px;
}
@import '../styles/button.styles.scss';

</style>