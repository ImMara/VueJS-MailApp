<template>
  <div id="app">
    <nav class="main-nav">
      <Burger/>
    </nav>
    <Navbar>
      <ul class="sidebar-panel-nav">
        <li class="py-5 text-2xl font-bold text-green-400">
          <router-link to="/">Home</router-link>
          <hr class="mt-2">
        </li>
        <li v-for="(message,index) in messages" :key="index">
          <router-link :to="`/post/${message.id}`" v-on:click="closeNav">

            <div class="flex p-3 hover:bg-gray-800">
              <div>
                <img :src="`${message.user.picture}`" class="object-cover rounded-full" alt="">
              </div>
              <div class="ml-3">
                <h4 class="text-xl font-bold">{{ message.user.lastName+" - "+message.user.firstName }}</h4>
                <p class="font-thin text-sm font-mono w-max">{{ message.summary }}</p>
              </div>
            </div>

          </router-link>
        </li>
      </ul>
    </Navbar>
    <div :class="{'w-full lg:w-auto ml-524':isOpen,'w-full':!isOpen }">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in" appear>
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {store} from '@/store'
import Navbar from './components/Menu/Navbar.vue'
import Burger from '@/components/Menu/Burger.vue'
import axios from "axios"

declare interface Messages {
  id: string,
  summary: string,
  user: {
    firstName: string,
    lastName: string,
    picture: string
  }
}

export default defineComponent({
  components: {
    Navbar,
    Burger
  },
  data() {
    return {
      messages: [] as Messages[],
      size: window.innerWidth
    }
  },
  methods: {
    closeNav: store.mutations.setActive
  },
  mounted() {
    axios
        .get('https://svm-demo-api.herokuapp.com/api/messages')
        .then(r => {
          this.messages.push(...r.data)
        });
    window.addEventListener('resize', () => {
      this.size = window.innerWidth
    })
  },
  computed: {
    isOpen() {
      if (this.size > 1024) {
        return store.mutations.setActive
      }
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
  @apply min-h-screen;
  overflow-x: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  @apply bg-gray-100 min-h-screen;
}

.main-nav {
  padding: 0.5rem 0.8rem;
  @apply flex justify-end fixed z-50 w-full lg:hidden;
}

.sidebar-panel-nav {
  @apply text-white;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
