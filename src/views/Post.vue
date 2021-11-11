<template>
  <div class="p-5 lg:p-20" v-if="loaded">
      <h4 class="font-bold text-2xl uppercase text-green-400 py-5">Message</h4>
      <hr>
      <div v-html="this.purify(message.text)" class="p-3"></div>
      <hr>
      <div class="flex items-center py-5">
        <img  class="rounded-full mr-2" :src="`${message.user.picture.thumbnail}`" alt="">
        <div class="flex flex-col justify-center mb-1">
          <small >{{ message.user.name.title+" "+message.user.name.last+" "+message.user.name.first }}</small><br>
          <small>{{ message.user.email }}</small>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios"; // @ is an alias to /src
import DOMPurify from "dompurify";

declare interface Post {
  id: number,
  summary: string,
  text: string,
  user:{
    email: string,
    name:{
      first: string,
      last: string,
      title: string,
    }
    picture:{
      large: string,
      medium: string,
      thumbnail: string
    }
  },

}

export default defineComponent({
  name: 'Post',
  data() {
    return {
      message: {} as Post,
      loaded:false
    }
  },
  mounted() {
    axios
        .get('https://svm-demo-api.herokuapp.com/api/messages/' + this.$route.params.id)
        .then(r => {
          console.log(r.data)
          this.message = r.data
          this.loaded = true
        })
  },
  methods:{
    purify:(text:string) => DOMPurify.sanitize(text,{USE_PROFILES: {html: true}})
  },
  watch: {
    $route() {
      axios
          .get('https://svm-demo-api.herokuapp.com/api/messages/' + this.$route.params.id)
          .then(r => {
            this.message = r.data
          })
    }
  },
});
</script>