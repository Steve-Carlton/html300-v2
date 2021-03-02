<template>
  <section>
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
        <li class="nav-item">
          <button class="btn btn-info nav-link" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" data-placement="bottom" title="Click to Show/Hide">
            Spread the word!
          </button>
        </li>
      </ul>
    </nav>


    <!-- JUMOBTRON 1 CTA generic twitter button-->
    <div class="collapse" id="collapseExample">
        <div class="card card-body container jumbotron jumbotron-fluid CTAcontainer">
          <div class="container">
            <h1 class="display-4">Your newest little lifehack.</h1>
            <span class="lead">Spread the love.</span>
            <div class="CTAcontainer">
              <p><i class="fab fa-twitter fa-5x twitterCTA"></i></p>
              <a href="https://twitter.com/intent/tweet?button_hashtag=SeattlePGs&ref_src=twsrc%5Etfw" class="twitterIcon twitter-hashtag-button button" data-size="large" data-text="Hi! I just discovered Seattle&#39;s best resource for local playgrounds!"
                data-related="" data-show-count="false" target="_blank">Tweet #SeattlePGs</a>
            </div>

            <p class='twitterIcon'>Hey there smartypants! Want to help this project? Go on and tweet about it! It's a win-win! ;D</p>
          </div>
        </div>
    </div>

  </section>
</template>

<script>
// ###### Link to Component File ######
// import filename and path


export default {
  name: 'navbar',//name of file, component, html tag

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

.card {
  margin: 3rem auto 3rem;
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
</style>
