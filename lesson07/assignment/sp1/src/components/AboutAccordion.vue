<template>
  <div>
    <div v-for="accordion in accordions" :key="accordion.title">
      <BaseAccordian>
        <template v-slot:title>{{ accordion.title }}</template>

        <template v-slot:content>
          <div>{{ accordion.copy }}</div>
        </template>
      </BaseAccordian>
    </div>
  </div>
</template>

<script>
import BaseAccordian from "../components/BaseAccordion.vue";

export default {
  components: {
    BaseAccordian
  },
  name: 'aboutAccordion',//name of file, component, html tag
data() {
  return {
      accordions: [
        { id: 0, title: "̄About this project.", image: '<img src="../assets/img/alex-mertz-Hf0VFk1kCUQ-unsplash.jpg" class="img-fluid" alt="Responsive image">', copy: "blah blah blah"},
        { id: 1, title: "̄Resources.", image: '<img src="https://picsum.photos/500/300" class="img-fluid" alt="Responsive image">', copy: "yep blah blah"},
        { id: 2, title: "̄What's the latest?", image: '<img src="https://picsum.photos/499/300" class="img-fluid" alt="Responsive image">', copy: "uh-huh"}
      ]
    }
  }
}
</script>
<style scoped>
</style>
