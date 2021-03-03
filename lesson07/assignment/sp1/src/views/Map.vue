<template>
  <main>
    <navbar></navbar>
    <section class="mapContainer"><h2 class="map">Map</h2></section>
    <section class="playgroundsContainer"> <h2 class="playgrounds">List container</h2> </section>
  </main>
</template>

<script>
//import components
import navbar from '../components/Navbar.vue'

export default {
  el: 'Map',
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

main {
  border: 2px solid teal;

}

.mapContainer, .playgroundsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10%;
}

.map {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 8rem;
  height: 8rem;
  color: white;
  background: blue;
  margin: 1rem, auto;
}

.playgrounds {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: 8rem;
  padding: 2rem;
  color: white;
  background: green;
  margin: 1rem, auto;
}
</style>
