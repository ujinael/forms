<template>
   <div class="form__item">
      <label :for="id">{{label}} </label>
      <slot>

      </slot>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
label?:string
id?:string
}>()
</script>
<style scoped lang="scss">
   @import "../styles/forms.scss";

</style>