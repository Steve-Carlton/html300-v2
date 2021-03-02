<template>
<main class="about">
  <navbar></navbar>
<h2>What would you like to know?</h2>
  <section class="aboutContainer">
  <!-- ##### ACCORDION ##### -->
  <section class="aboutCopy">

    <accordion v-for="item in accordionArray"
      v-bind:accordionprop="item"
        v-bind:key="item.id"
    ></accordion>
  </section>
    <section class="aboutImageContainer">
      <h2 visibility="hidden"></h2>
      <imageContainer v-for="item in imageArray"
        v-bind:imageprop="item"
        v-bind:key="item.id">
      </imageContainer>
    </section>
      </section>
</main>
</template>
<script>
//import components
import navbar from '../components/Navbar.vue'
import imageContainer from '../components/ImageContainer.vue'
import accordion from '../components/Accordion.vue'

export default {
  el: 'About',
  components: { navbar, imageContainer, accordion },//filename of new and used component
  data() {
    return {
      imageArray: [
        { id: 0, image: '<img src="https://picsum.photos/500/300" alt="placeholder image">', },
        { id: 1, image: '<img src="https://picsum.photos/499/300" alt="placeholder image">', },
        { id: 2, image: '<img src="https://picsum.photos/501/300" alt="placeholder image">', }
      ],
      accordionArray: [
        { id: 0, title: "̄About this project.", copy: "blah blah blah"},
        { id: 1, title: "̄Resources.", copy: "yep blah blah"},
        { id: 2, title: "̄What's the latest?", copy: "uh-huh"}
      ],
      counterToken: 0,
    }
  },

  methods: {
    accordionCounter: function() {
        this.counterToken ++;
        console.log("{{counterToken}}");
    }
  }

}
</script>

<style scoped>

.aboutContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;
  grid-row-gap: 3rem;
  margin: 2rem 10%;
}

@media only screen and (max-width: 800px) {
  .aboutContainer {
    grid-template-columns: 1fr;
  }
  .aboutImageContainer {
    justify-content: center;
  }
}
</style>
