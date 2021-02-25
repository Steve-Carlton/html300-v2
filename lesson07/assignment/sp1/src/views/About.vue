<template>
  <main class="about">
    <navbar></navbar>
    <h1>About</h1>
  </main>
</template>
<script>
//import components
import navbar from '../components/Navbar.vue'

export default {
  el: 'About',
  components: { navbar },//filename of new and used component
  data() {
    return {
    }
  }

  // ###### methods: {}

}
</script>

<style scoped>

html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  background-color: ivory;
}

main {
  border: 2px solid teal;
}
</style>
