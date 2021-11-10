<template>
<div id="app">
    <nav class="main-nav">
      <Burger/>
    </nav>
    <Navbar>
      <ul>
        <ul class="sidebar-panel-nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </ul>
    </Navbar>
    <div class="p-20" :class="{'w-1/2 ml-auto':isOpen,'w-full':!isOpen }">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import Navbar from './components/Menu/Navbar.vue'
import Burger from '@/components/Menu/Burger.vue'

export default defineComponent({
  components: {
    Navbar,
    Burger
  },
  data () {
    return {
      messages: [],
    }
  },
  computed:{
    isOpen(){
      return store.state.active
    }
  }
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  height: 100%;
 @apply bg-gray-100;
}

.main-nav {
  padding: 0.5rem 0.8rem;
  @apply flex justify-end;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

</style>
