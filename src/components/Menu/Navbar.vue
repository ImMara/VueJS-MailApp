<template>
  <div class="sidebar">
    <!--        <div class="sidebar-backdrop" @click="closeNav" v-if="isOpen"></div>-->
    <transition name="slide">
      <div v-if="isOpen"
           class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>

import {defineComponent} from 'vue'
import {store} from '@/store'

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      size: window.innerWidth
    }
  },
  methods: {
    closeNav: store.mutations.setActive
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.size = window.innerWidth
    })

  },
  computed: {
    isOpen() {
      if (this.size >= 1024) {
        return store.mutations.setActive
      }
      return store.state.active
    }
  }
})
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform .2s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  @apply w-screen fixed top-0 left-0 cursor-pointer min-h-screen;
}

.sidebar-panel {
  padding: 3rem 20px 2rem 20px;
  @apply fixed left-0 min-h-screen w-full lg:w-max top-0 bg-gray-900 z-40 overflow-y-auto;
}
</style>



