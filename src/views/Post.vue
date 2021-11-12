<template>
  <div class="p-5 lg:p-20 container mx-auto" v-if="loaded">
    <h4 class="font-bold text-2xl uppercase text-green-400 py-5">Message</h4>
    <hr>
    <div v-html="this.purify(message.text)" class="p-3"></div>
    <hr>
    <UserSmall
        :def="message.user.name.title"
        :email="message.user.email"
        :firstName="message.user.name.first"
        :lastName="message.user.name.last"
        :picture="message.user.picture.thumbnail"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios";
import UserSmall from '@/components/UserSmall.vue';
import DOMPurify from "dompurify";

declare interface Post {
  id: number,
  summary: string,
  text: string,
  user: {
    email: string,
    name: {
      first: string,
      last: string,
      title: string,
    }
    picture: {
      large: string,
      medium: string,
      thumbnail: string
    }
  },

}

export default defineComponent({
  name: 'Post',
  components: {
    UserSmall
  },
  data() {
    return {
      message: {} as Post,
      loaded: false
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    purify: (text: string) => DOMPurify.sanitize(text, {USE_PROFILES: {html: true}}),
    fetch() {
      axios
          .get('https://svm-demo-api.herokuapp.com/api/messages/' + this.$route.params.id)
          .then(r => {
            console.log(r.data)
            this.message = r.data
            this.loaded=true
          })
    }
  }
});
</script>