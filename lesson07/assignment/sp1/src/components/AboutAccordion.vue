<template>
  <div>
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
      accordionArray: [
        { id: 0, title: 'About this project.', image: '<img src="../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg" class="img-fluid" alt="Responsive image">', copy: "blah blah blah"},
        { id: 1, title: "̄Resources.", image: '<img src="https://picsum.photos/500/300" class="img-fluid" alt="Responsive image">', copy: "yep blah blah"},
        { id: 2, title: "̄What's the latest?", image: '<img src="https://picsum.photos/499/300" class="img-fluid" alt="Responsive image">', copy: "uh-huh"}
      ]
    }
  }
}
</script>
<style scoped>
</style>
