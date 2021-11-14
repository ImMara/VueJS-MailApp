<template>
  <div id="app" class="lg:flex dark:bg-gray-800">
    <nav class="main-nav">
      <Burger/>
    </nav>
    <Navbar v-if="loaded">
      <ul class="sidebar-panel-nav">
        <li class="py-5 text-2xl uppercase font-bold text-green-400">
          <router-link to="/" v-on:click="closeNav">Home</router-link>
          <hr class="mt-2">
        </li>
        <li v-for="(message,index) in messages" :key="index">
          <router-link
              :to="`/post/${message.id}`"
              v-on:click="closeNav">
            <UserMedium
                :short="message.summary"
                :picture="message.user.picture"
                :lastName="message.user.lastName"
                :firstName="message.user.firstName"/>
          </router-link>
        </li>
      </ul>
    </Navbar>
    <div class="min-h-screen pt-5 w-full dark:text-white">
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
import UserMedium from '@/components/UserMedium.vue'
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
    Burger,
    UserMedium
  },
  data() {
    return {
      messages: [] as Messages[],
      size: window.innerWidth,
      loaded:false,
    }
  },
  methods: {
    closeNav: store.mutations.setActive,
  },
  mounted() {
    axios
        .get('https://svm-demo-api.herokuapp.com/api/messages')
        .then(r => {
          this.messages.push(...r.data)
          this.loaded = true
        });
    window.addEventListener('resize', () => {
      this.size = window.innerWidth
    })
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

.router-link-active > div {
  @apply bg-gray-800;
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
