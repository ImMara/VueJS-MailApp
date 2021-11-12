<template>
  <div class="flex items-center py-5">
    <img class="rounded-full mr-2" :src="`${picture}`" :alt="`${picture+'-'+lastName}`">
    <div class="flex flex-col justify-center mb-1">
      <small>{{ def + " " + lastName + " " + firstName }}</small>
      <small>{{ email }}</small>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'UserSmall',
  props: ['picture', 'def', 'firstName', 'lastName', 'email'],
})
</script>