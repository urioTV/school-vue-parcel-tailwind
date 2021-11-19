// src/App.vue

<template>
  <div class="container bg-gray-100 w-screen h-screen mx-auto">
    <h1 id="Hello" class="text-center mx-auto"> Random <b class="Reddit-font">Reddit</b> images</h1>
    <RedditImage />
  </div>
</template>

<script>
import RedditImage from './components/RedditImage.vue'
export default {
  name: 'App',
  components: {
      RedditImage
  },
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
};
</script>
