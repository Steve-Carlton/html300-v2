<template>
<main class="about">
  <navbar></navbar>
  <h1>About</h1>
  <section class="aboutContainer">
<section class="aboutCopy">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non erat ligula. Curabitur porta laoreet mi, vitae porttitor odio ultricies at. Phasellus mattis sit amet sapien ac convallis. Donec non tellus mollis, vestibulum nisl in, facilisis nisi. Morbi commodo egestas lectus, vel venenatis justo feugiat id. Vivamus consequat lobortis urna, sed dignissim turpis suscipit eget. Vestibulum vitae lorem blandit, maximus sem.
<br>
<br>
    Aliquam erat volutpat. Sed euismod placerat auctor. Donec bibendum rutrum ex, a finibus odio blandit malesuada. Fusce eget enim libero. Integer sagittis lectus vitae dui auctor imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum metus urna, vehicula in lorem vel, pharetra dignissim est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut pretium turpis, vitae pulvinar ex. Proin interdum pulvinar elit, ut congue eros blandit eget. Duis dignissim libero eu metus.
  </p>
  </section>
    <imageContainer v-for="item in imageArray"
      v-bind:imageprop="item"
      v-bind:key="item.id">
    </imageContainer>
  </section>
</main>
</template>
<script>
//import components
import navbar from '../components/Navbar.vue'
import imageContainer from '../components/ImageContainer.vue'

export default {
  el: 'About',
  components: { navbar, imageContainer },//filename of new and used component
  data() {
    return {
      imageArray: [
        { id: 0, image: '<img src="https://picsum.photos/500/300" alt="placeholder image">', },
        { id: 1, image: '<img src="https://picsum.photos/499/300" alt="placeholder image">', },
        { id: 2, image: '<img src="https://picsum.photos/501/300" alt="placeholder image">', }
      ]
    }
  }

  // ###### methods: {}

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

.aboutImageContainer {
  display: grid;
  grid-row-gap: 2rem;
}

.aboutImageContainer img {
  max-width: 100%;
  height: auto;
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
