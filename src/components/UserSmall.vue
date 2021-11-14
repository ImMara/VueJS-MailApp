<template>
  <div class="flex flex-col justify-between w-full md:flex-row text-center md:text-left items-center w-full dark:bg-gray-900 py-5 px-5 rounded border-2 border-green-500">
    <img class="rounded-full md:mr-2" :src="`${picture}`" :alt="`${picture+'-'+lastName}`">
    <div class="flex flex-col justify-center mb-1">
      <small>{{ def + " " + lastName + " " + firstName }}</small>
      <small>{{ email }}</small>
    </div>
    <div class="w-36 text-center">
      <a class="py-2 block px-4 bg-green-500 rounded hover:bg-green-700 ml-0 md:ml-5 cursor-pointer">Profile</a>
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