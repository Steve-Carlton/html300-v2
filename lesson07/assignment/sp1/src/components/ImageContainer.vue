<template>
  <section v-html= 'imageprop.image'>
  </section>
</template>

<script>

export default {
  name: 'imageContainer',//name of file, component, html tag
  props: {
    //prop is an object. it is attached to the array item in ...Array with a v-bind.
    imageprop: String,
    //my prop name : data type
  }
}


</script>

<style scoped>

</style>
