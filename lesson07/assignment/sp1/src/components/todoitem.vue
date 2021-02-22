<template>
  <section>
    <li>{{ todo.text }}</li>

  </section>

</template>

<script>

export default {
  name: 'todoitem',//name of file, component, html tag
  props: {
    todo: String
    //my prop name : data type
    // can also list names
    // try an array
  }
}
</script>

<style scoped>

</style>
