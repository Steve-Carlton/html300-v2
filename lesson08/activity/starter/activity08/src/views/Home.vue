<template>
  <div class="home">
    <post></post>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
//import components
import post from '../components/Post.vue'

export default {
  name: 'Home',
  components: { post, },
  data() {
    return {
      articleArray: [
        {id: 0, article: '1'},
        {id: 1, article: '2'},
        {id: 2, article: '3'}
      ]
    }
  }
}
</script>
