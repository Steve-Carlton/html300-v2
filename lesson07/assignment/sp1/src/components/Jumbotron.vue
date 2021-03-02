<template>
  <section>
    <h2>{{jumboprop.jumboTagline}}</h2>
    <h3 class="lead">{{jumboprop.jumboSubTag}}</h3>
    <!-- if jumboGraphics array item present, render on page -->
    <div v-if="jumboprop.jumboGraphics" class="CTAcontainer">
      <a href="https://www.twitter.com/" target="blank"><i class="fab fa-twitter fa-5x twitterCTA"></i></a>
      <a class="button" href="https://www.twitter.com" target="_blank">{{jumboprop.jumboGraphics}}</a>
    </div>
    <p>{{ jumboprop.jumboCopy }}</p>
    <!-- if jumboButton array item present, render on page -->
    <!-- use router-link for link to other views -->
    <div class="jumboButton-container"><router-link class="jumboButton" v-if="jumboprop.jumboButton" to="/map">{{ jumboprop.jumboButton }}</router-link></div>
  </section>
</template>

<script>

export default {
  name: 'jumbotron',//name of file, component, html tag
  props: {
    //jumboprop is an object. it is attached to the array item in jumbotronArray with a v-bind.
    jumboprop: String,
    //my prop name : data type
  }
}
</script>

<style scoped>
  section {
    margin: 3rem;
    padding: 3rem;
    border-bottom: 40px solid #00c3a899;
    border-left: 40px solid #4b00c399;
    background: #f2f2f2;
    border-radius: 0 2rem 0 0;
  }

  .CTAcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fab {
    color: #1DA1F2;
  }

  .CTAcontainer .button {
    padding: .5rem;
    border-radius: 10px;
    color: white;
    background-color: #1DA1F2;
    font-weight: 800;
    margin-bottom: 1rem;
    text-align: center;
    border-bottom: 3px solid #0a6ca9;
    border-right: 2px solid #0a6ca9;
  }


.jumboButton-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 4rem;
}
.jumboButton {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  background: #0544ff;
  border-radius: 8px;
  width: 8rem;
  height: 4rem;
}


  @media only screen and (max-width: 330px) {
    section {
      margin: 1rem;
      padding: 1.5rem;
      border-bottom: 30px solid #00c3a899;
      border-left: 30px solid #4b00c399;
      font-size: 1rem;
    }
  }
</style>
