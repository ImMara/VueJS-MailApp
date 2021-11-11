<template>
<div id="app">
    <nav class="main-nav">
      <Burger/>
    </nav>
    <Navbar>
        <ul class="sidebar-panel-nav">
          <li v-for="(message,index) in messages" :key="index">
            <router-link :to="`/post/${message.id}`">{{message.title}}</router-link>
          </li>
      </ul>
    </Navbar>
    <div class="p-20" :class="{'w-1/2 ml-auto':isOpen,'w-full':!isOpen }">
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade"  mode="out-in" appear>
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import Navbar from './components/Menu/Navbar.vue'
import Burger from '@/components/Menu/Burger.vue'
import axios from "axios"

declare interface Messages {
  id:number,
  title:string,
  userId:number
}

export default defineComponent({
  components: {
    Navbar,
    Burger
  },
  data () {
    return {
      messages: [] as Messages[]
    }
  },
  mounted(){
    axios
      .get('https://jsonplaceholder.typicode.com/todos/')
      .then(r =>{
        console.log(r.data);
        this.messages.push(...r.data)
      })
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
