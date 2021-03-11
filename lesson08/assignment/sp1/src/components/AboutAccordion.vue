<template>
  <div>
    <!-- Link to a local image TESTING -->
    <img :src="img" alt="can't load local picture"  @click="myMessage">
    <!-- ACCORDION -->
    <div v-for="accordion in accordionArray" :key="accordion.title">
      <baseAccordian>
        <template v-slot:title>{{ accordion.title }}</template>
        <template v-slot:content>
          <div v-html="accordion.image"></div>
          <div>{{ accordion.copy }}</div>
        </template>
      </baseAccordian>
    </div>
  </div>
</template>

<script>
import baseAccordian from "../components/BaseAccordion.vue";

export default {
  components: {
    baseAccordian
  },
  name: 'aboutAccordion',//name of file, component, html tag
data() {
  return {
      img: "../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg",
      accordionArray: [
        { id: 0, title: 'About this project.', image: '<img v-bind:src="getImg" class="img-fluid" alt="Where\'s the picture?">', copy: "blah blah blah"},
        { id: 1, title: "Resources.", image: '<img src="https://picsum.photos/500/300" class="img-fluid" alt="Responsive image">', copy: "yep blah blah"},
        { id: 2, title: "What's the latest?", image: '<img src="https://picsum.photos/499/300" class="img-fluid" alt="Responsive image">', copy: "uh-huh"}
      ]
    }
  },
  methods: {
    getImg: function() {
      console.log("getImg function has run")
      return '../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg';
    }
  }
}
</script>
<style scoped>
</style>
