<template>

  <div class="p-5 lg:p-20 container mx-auto" v-if="loaded">

    <UserTopBar/>

    <div>
      <h4 class="font-bold text-2xl uppercase text-green-500 pt-5">Message</h4>
      <hr class="w-12 mb-5">
    </div>

    <div class="flex flex-col-reverse 2xl:flex-row">

      <div  class="p-5 w-full mt-5 xl:mt-0 2xl:w-2/3 mr-5 border-2 dark:bg-gray-900 border-green-500 rounded">
        <p v-html="this.purify(message.text)"></p>
      </div>

      <div class="mt-5 2xl:mt-0">
        <UserSmall
            :def="message.user.name.title"
            :email="message.user.email"
            :firstName="message.user.name.first"
            :lastName="message.user.name.last"
            :picture="message.user.picture.thumbnail"
        />
        <UserNav>
          <li class="hover:text-green-700"><router-link to="/">Home</router-link></li>
          <li class="hover:text-green-700"><router-link to="/new">New Message</router-link></li>
        </UserNav>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios";
import UserTopBar from '@/components/UserTopBar.vue';
import UserSmall from '@/components/UserSmall.vue';
import UserNav from '@/components/UserNav.vue';
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
    UserSmall,
    UserTopBar,
    UserNav
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