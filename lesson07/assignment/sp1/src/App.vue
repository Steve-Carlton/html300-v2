<template>
<div id="app">
  <bannerTop v-bind:brandTitle="brandTitle"></bannerTop>

</div>
</template>

<script>
// ###### Link to Component File ######
// import filename and path
import BannerTop from './components/BannerTop.vue'

// ###### VUE.js
export default {
  el: '#app',
  components: {BannerTop}, //filename of new component
  data() {
    return {
      brandTitle: "Seattle Playgrounds" //content of prop branTitle of bannerTop tag
    }

  }

  // ###### methods: {}

}
</script>

<style>

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


</style>
