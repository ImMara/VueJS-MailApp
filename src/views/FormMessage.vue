<template>
  <div>
    <h1 @submitForm="console.log('test')">Form</h1>
    <form action="">
      <label>
        <input type="text" v-model="form.name">
      </label>
    </form>

    <a @click="submit()">btn</a>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent ( {
  name: "FormMessage",
  data (){
    return{
      form:{
        name:''
      }
    }},
  methods:{
    submit() {
      this.$emit('submited',this.form);
    }
  }
})


</script>

<style scoped>

</style>