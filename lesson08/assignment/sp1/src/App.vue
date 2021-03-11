<template>
<div id="app">
  <!-- v-binds the prop to tag. the '=' assigns the text interpolation -->
  <bannerTop v-bind:brandTitle="brandTitle"></bannerTop>
  <!-- ##### Vue Router ##### only in app.vue template -->
  <router-view></router-view>
</div>
</template>

<script>
// ###### Link to Component File ######
// import filename and path
import BannerTop from './components/BannerTop.vue'

// ###### VUE.js
export default {
  el: '#app',
  components: {BannerTop},//filename of new and used components
  data() {
    return {
      brandTitle: "Seattle Playgrounds", //content of prop brandTitle of bannerTop tag
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
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  background-color: #f7f7f7;
}

main {
  border: 2px solid green;
}

.aboutImageContainer {
  display: grid;
  grid-row-gap: 2rem;
}

.aboutImageContainer img {
  max-width: 100%;
  height: auto;
}
</style>
