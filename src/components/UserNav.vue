<template>
  <nav class="user-nav">
    <h2 class="font-bold text-green-500">MENU</h2>
    <hr class="w-5 mb-3 ">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "UserNav"
}
</script>

<style scoped>
  .user-nav {
    @apply bg-gray-900 py-5 px-12 border-2 border-green-500 rounded lg:ml-0 lg:my-5 mt-5
  }
</style>