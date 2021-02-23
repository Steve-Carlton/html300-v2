<template>
<div id="app">
  <!-- v-binds the prop to tag. the '=' assigns the text interpolation -->
  <bannerTop v-bind:brandTitle="brandTitle"></bannerTop>

  <navbar></navbar>
  <main>
    <!-- <jumbotron v-bind:jumboCopy="jumboCopy" :jumboTagline="jumboTagline" :jumboSubTag="jumboSubTag" :jumboGraphics="jumboGraphics">
    </jumbotron> -->

<!-- Loop through an array of objects. create a prop to attach array items to. supply a key for vue. -->
    <jumbotron v-for="item in jumbotronArray"
      v-bind:jumboprop="item"
      v-bind:key="item.id">
      {{jumboTagline}}
    </jumbotron>

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
      brandTitle: "Seattle Playgrounds", //content of prop brandTitle of bannerTop tag
      // jumboTagline: "Your newest little lifehack.",
      // jumboSubTag: "Spread the Love!",
      // // jumboGraphics: [graphics here],
      // jumboCopy: "Hey there smartypants! Want to help this project? Go on and tweet about it! It's simple, it's easy, and it's a win-win! ;D",
      // jumboGraphics: "[insert graphics here]",

      groceryList: [//this is an array of objects
   { id: 4, text: 'Vegetables' },
   { id: 5, text: 'Cheese' },
   { id: 6, text: 'Whatever else humans are supposed to eat' }
 ],

 jumbotronArray: [//this is an array of objects
{ id: 0, jumboTagline: "Your newest little lifehack.", jumboSubTag: "Spread the Love!", jumboCopy: "Hey there smartypants! Want to help this project? Go on and tweet about it! It's simple, it's easy, and it's a win-win! ;D"},
{ id: 1, jumboTagline: "All local playground info in one place.", jumboSubTag: "You're too busy for multi-tabbing.", jumboCopy: "They're our playgrounds afterall—- let's make it easy to get there." },
{ id: 2, jumboTagline: "On the go from the ground up", jumboSubTag: "This site works across all devices. And does it well.", jumboCopy: "Seattle Playgrounds is the only playground resource thoughfully designed & fully operational across all your devices."}
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
