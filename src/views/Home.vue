<template>
  <div class="home">
      <h1>Front-end Test</h1>
      <p>Responsive message panel using :</p>
      <ul class="list">
        <li>Vue.js 3,</li>
        <li> Typescript,</li>
        <li>Tailwind,</li>
        <li>Vue Router,</li>
        <li>Axios,</li>
        <li>DOMPurify</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home'
});
</script>
<style>
  .home{
    @apply flex flex-col justify-center items-center w-full min-h-screen;
  }
  .home h1{
    @apply text-5xl font-bold text-green-400
  }
  .home p{
    @apply text-lg font-thin mt-5
  }
  .list{
    @apply text-lg font-thin flex mt-2
  }
</style>
