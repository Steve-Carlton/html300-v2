<template>
  <section>
    <h2>{{jumboprop.jumboTagline}}</h2>
    <h3 class="lead">{{jumboprop.jumboSubTag}}</h3>
    <div class="CTAcontainer">
      <a href="https://www.twitter.com/" target="blank"><i class="fab fa-twitter fa-5x twitterCTA"></i></a>
      <p><a href="https://www.twitter.com" target="_blank">{{jumboprop.jumboGraphics}}</a></p>
    </div>
    <p>{{ jumboprop.jumboCopy }}</p>

  </section>
  <!-- ##### how to include below block for jumboGraphics? -->
  <!-- <p><a href="https://www.twitter.com/" target="blank"><i class="fab fa-twitter fa-5x twitterCTA"></i></a></p><a href="https://twitter.com/intent/tweet?button_hashtag=SeattlePGs&ref_src=twsrc%5Etfw" class="twitterIcon twitter-hashtag-button" data-size="large" data-text="Hi! I just discovered Seattle&#39;s best resource for local playgrounds!" data-related="" data-show-count="false" target="blank"> -->
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

  .CTAcontainer a.twitterIcon.twitter-hashtag-button {
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
