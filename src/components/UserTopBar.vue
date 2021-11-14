<template>
  <div class="top-nav">
    <div class="z-10 h-full flex flex-col justify-center">
      <h1 class="text-2xl font-black">Hello , User</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <img src="@/assets/dessin.svg" class="phone" alt="">
  </div>
</template>

<script>
export default {
name: "UserTopBar"
}
</script>

<style scoped>
  .top-nav{
    background: #1f4037;
    background: -webkit-linear-gradient(to right, #1f4037, #99f2c8);
    background: linear-gradient(to right, #1f4037, #99f2c8);
    @apply
    px-5 py-2 rounded relative items-center h-20 md:h-52
  }
  .phone{
    @apply hidden xl:block md:w-52 md:h-52  absolute bottom-0  top-0 right-0 self-center mr-12 z-0
  }
</style>