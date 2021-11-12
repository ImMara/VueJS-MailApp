<template>
  <div class="flex p-3 hover:bg-gray-800">
    <div>
      <img :src="`${picture}`" class="object-cover rounded-full" alt="">
    </div>
    <div class="ml-3">
      <h4 class="text-lg font-bold">{{ lastName + ' ' + firstName }}</h4>
      <p class="font-thin text-xs font-mono lg:w-max">{{ short }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'UserMedium',
  props: ['picture', 'firstName', 'lastName', 'short']

})

</script>