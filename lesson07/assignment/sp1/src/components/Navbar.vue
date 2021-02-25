<template>
  <!-- NAVBAR -->
  <nav class="nav">
    <ul class="nav nav-pills">
      <li class="nav-item"><a id="homeIcon" href="#" data-toggle="tooltip" data-placement="bottom" title="Home">index</a></li>
      <li class="nav-item">
        <!-- use router-link for link to other views -->
        <router-link to="/" class="nav-link">Landing</router-link>
      </li>
      <!-- "to" value is not a file path. it's a route. see index.js-->
      <li class="nav-item">
        <router-link to="/map" class="nav-link">Map</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">social</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'navbar',//name of file, component, html tag
  props: {
    //my prop name : data type
  }
}
</script>

<style scoped>
/* ~~~~~NAV~~~~~ */
nav {
  width: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 2px solid blue;
}

.nav-pills {
  width: 100%;
}

nav a, nav button {
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 10px;
  margin: 1rem;
}

#homeIcon {
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c3a899;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: none;
}

@media only screen and (max-width: 474px) {
  nav ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .nav-item a {
    text-align: center;
    width: 95%;
    margin: .5rem;
  }
}
</style>
