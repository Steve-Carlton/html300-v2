<template>
<main class="about">
  <navbar></navbar>
  <h2>What would you like to know?</h2>
  <section class="aboutContainer">
    <!-- ##### ACCORDION ##### -->
    <section class="aboutCopy">
      <aboutAccordion></aboutAccordion>
    </section>
    <!-- ##### IMAGE CONTAINER ##### -->
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
import aboutAccordion from '../components/AboutAccordion.vue'

export default {
  el: 'About',
  components: { navbar, imageContainer, aboutAccordion },//filename of new and used component
  data() {
    return {
      imageArray: [
        { id: 0, image: '<img src="https://picsum.photos/500/300" alt="placeholder image">', },
        { id: 1, image: '<img src="https://picsum.photos/499/300" alt="placeholder image">', },
        { id: 2, image: '<img src="https://picsum.photos/501/300" alt="placeholder image">', }
      ]
      // accordionArray: [
      //   { id: 0, title: "̄About this project.", image: '<img src="../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg" class="img-fluid" alt="Responsive image">', copy: "blah blah blah"},
      //   { id: 1, title: "̄Resources.", image: '<img src="https://picsum.photos/500/300" class="img-fluid" alt="Responsive image">', copy: "yep blah blah"},
      //   { id: 2, title: "̄What's the latest?", image: '<img src="https://picsum.photos/499/300" class="img-fluid" alt="Responsive image">', copy: "uh-huh"}
      // ]
    }
  }

  // methods: {
  //   }
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
