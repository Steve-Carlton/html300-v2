<template>
<main class="about">
  <navbar></navbar>
  <h2>What would you like to know?</h2>
  <section class="about__aboutContainer">
    <!-- ##### ACCORDION ##### -->
    <section class="aboutCopy">
      <aboutAccordion></aboutAccordion>
    </section>
    <!-- ##### IMAGE CONTAINER ##### -->
    <section class="aboutImageContainer">
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
  components: { navbar, imageContainer, aboutAccordion },//filename of new and used component
  data() {
    return {
      imageArray: [
        { id: 0, image: '<img src="https://picsum.photos/500/300" alt="placeholder image">', },
        { id: 1, image: '<img src="https://picsum.photos/499/300" alt="placeholder image">', },
        { id: 2, image: '<img src="https://picsum.photos/501/300" alt="placeholder image">', }
      ]
    }
  }
  // methods: {
  //   }
}


</script>

<style scoped lang="scss">

h2 {
  color: white;
  margin: 1rem;
  background-color: teal;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
}

.about{
  &__aboutContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5%;
    grid-row-gap: 3rem;
    margin: 2rem 5%;
    grid-row-gap: 2rem;
  }
}

  .aboutImageContainer {
    margin-top: .5rem;
    display: grid;
    grid-row-gap: 2rem;
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
