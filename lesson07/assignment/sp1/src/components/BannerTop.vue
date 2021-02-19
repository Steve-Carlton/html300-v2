<template>
  <header>
    <div class="container">
      <div class="logo">
        <p>logo</p>
      </div>
      <h1>{{ brandTitle }}</h1>
    </div>
  </header>
</template>

<script>

export default {
  name: 'bannerTop',//name of file, component, html tag
  props: {
    brandTitle: String
    //my prop name : data type
    // can also list names
    // try an array
  }
}
</script>

<style>
  header {
    padding: 2rem;
    border: 2px solid magenta;
    margin: 0;
  }

  .container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
  }

  .logo {
    height: 8rem;
    width: 8rem;
    padding: 3rem;
    border-radius: 50%;
    color: white;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  p {
    margin: auto;
  }

  h1 {
    margin: auto;
  }
</style>
