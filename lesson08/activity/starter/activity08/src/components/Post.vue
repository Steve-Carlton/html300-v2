<template>
  <section>
    <!-- <p>{{msg}}</p> -->
    <!-- <h1>{{postProp}}</h1> -->
    <h2>{{postProp.title}}</h2>
    <h1>{{postProp.author}}</h1>
    <h5>{{postProp.excerpt}}</h5>
    <br>
  </section>
</template>

<script>
export default {
  name: "post",
  props: {
    postProp: String,
  },
  data() {
    return {
      // msg: "The type in red is a declarative rendering from the Post.vue component file. The variable and the content both reside in component 'post' and is not dynamic.",
    }
  }
}
</script>

<style>

p {
  color: red;
}


section {
  border: 1px solid grey;
  background-color: #f2f2f2;
}
</style>


<!-- DEV NOTES -->
<!-- -	 Create a `<post>` component (in its own file) with props for `title`, `excerpt`, `likes`, and `category`. (make sure to import the component to `App.vue`) -->
