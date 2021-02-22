<template>
<div id="app">
  <!-- v-binds the prop to tag. the '=' assigns the text interpolation -->
  <bannerTop v-bind:brandTitle="brandTitle"></bannerTop>

  <navbar></navbar>
  <main>
    <jumbotron v-bind:jumboCopy="jumboCopy" :jumboTagline="jumboTagline" :jumboSubTag="jumboSubTag"></jumbotron>


    <jumbotron></jumbotron>

    <todoitem v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">{{todoitem}}
    </todoitem>
  </main>
</div>
</template>

<script>
// ###### Link to Component File ######
// import filename and path
import BannerTop from './components/BannerTop.vue'
import navbar from './components/Navbar.vue'
import jumbotron from './components/Jumbotron.vue'
import todoitem from './components/todoitem.vue'

// ###### VUE.js
export default {
  el: '#app',
  components: {BannerTop, navbar, jumbotron, todoitem},//filename of new component
  data() {
    return {
      brandTitle: "Seattle Playgrounds", //content of prop branTitle of bannerTop tag
      jumboTagline: "Your newest little lifehack.",
      jumboSubTag: "Spread the Love!",
      // jumboGraphics: []
      jumboCopy: "Hey smartypants! Want to be awesome and help this project? Go on and tweet about it! It's simple, it's easy, and it's a win-win! ;D",

      groceryList: [//this is an objects
   { id: 0, text: 'Vegetables' },
   { id: 1, text: 'Cheese' },
   { id: 2, text: 'Whatever else humans are supposed to eat' }
 ]

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

main {
  border: 2px solid green;
}
</style>
