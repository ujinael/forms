<template>
   <textarea
   :value="value"
   class="v-input"
  /> 

</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    value?:string
}>()

</script>
<style lang="scss" scoped>
@import "../styles/v-input.scss";

</style>