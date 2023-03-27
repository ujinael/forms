<template>
<input class="v-input"  
:value="value"
 >

</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
value:string
}>()

</script>
<style scoped lang="scss">
@import "../styles/v-input.scss";
</style>