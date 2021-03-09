<template>
  <div class="home">
    <post :postProp="myGreeting"></post>
    <p>{{test}}</p>
  </div>
</template>

<script>
//import components
import post from '../components/Post.vue'

export default {
  name: 'Home',
  components: { post },
  data() {
    return {
      test: "Another example of declarative rendering contained within the Home.vue views file",
      myGreeting: "The type in blue is bound to the prop of element post (postProp). The content will change given how the view file supplies the value for v-bind:postProp='...'",
      articleArray: [
        {id: 0, article: '1'},
        {id: 1, article: '2'},
        {id: 2, article: '3'}
      ],
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
</style>
