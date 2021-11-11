<template>
  <div class="p-20">
    <h1>{{ posts.summary }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios"; // @ is an alias to /src

declare interface Posts {
  id: number,
  title: string,
  userId: number,
  body: string
}

export default defineComponent({
  name: 'Post',
  data() {
    return {
      posts: {} as Posts
    }
  },
  watch: {
    $route() {
      axios
          .get('https://svm-demo-api.herokuapp.com/api/messages/' + this.$route.params.id)
          .then(r => {
            this.posts = r.data
          })
    }
  },
  mounted() {
    axios
        .get('https://svm-demo-api.herokuapp.com/api/messages/' + this.$route.params.id)
        .then(r => {
          this.posts = r.data
        })
  }
});
</script>