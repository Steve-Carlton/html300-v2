<template>
  <section>
    <h2>{{jumboTagline}}</h2>
    <h3 class="lead">{{jumboSubTag}}</h3>
    <div class="CTAcontainer"> {{jumboGraphics}}</div>
    <p>{{ jumboCopy }}</p>
    
  </section>
<!-- ##### Twitter graphic/button below -->
  <!-- <p><i class="fab fa-twitter fa-5x twitterCTA"></i></p>
  <a href="https://twitter.com/intent/tweet?button_hashtag=SeattlePGs&ref_src=twsrc%5Etfw" class="twitterIcon twitter-hashtag-button" data-size="large" data-text="Hi! I just discovered Seattle&#39;s best resource for local playgrounds!" data-related="" data-show-count="false">Tweet #SeattlePGs</a> -->
</template>

<script>

export default {
  name: 'jumbotron',//name of file, component, html tag
  props: {
    jumboTagline: String,
    jumboSubTag: String,
    jumboGraphics: String,
    jumboCopy: String,
    //my prop name : data type
    // can also list names
    // try an array
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

  .CTAcontainer a {
    padding: .5rem;
    border-radius: 10px;
    color: white;
    background-color: #1DA1F2;
    font-weight: 800;
    margin-bottom: 1rem;
    text-align: center;

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
