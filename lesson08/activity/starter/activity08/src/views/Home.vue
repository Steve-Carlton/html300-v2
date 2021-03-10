<template>
  <div class="home">
    <!-- <post :postProp="myGreeting"></post> -->
    <!-- <p>{{test}}</p> -->
    <section class="sampleArray">
      <post v-for="article in articleArray"
      v-bind:postProp="article"
      v-bind:key="article.id">
    </post>
    </section>
  </div>
</template>

<script>
//import components
import post from '../components/Post.vue'

export default {
  name: 'Home',
  components: { post },
  data() {
    return {
      // test: "Another example of declarative rendering contained within the Home.vue views file",
      // myGreeting: "The type in blue is bound to the prop of element post (postProp). The content will change given how the view file supplies the value for v-bind:postProp='...'",
      articleArray: [
      { id: 1, author: 'Robin Rendle', title: 'A Conspiracy to Kill IE6', likes: 10, category: 'browsers', excerpt: 'Chris Zacharias published a few notes about why the team at YouTube added a banner that asked users to switch from IE6 to a more modern browser back in 2009' },
      { id: 2, author: 'Raymond Camden', title: 'Making the Move from jQuery to Vue', likes: 15, category: 'vue', excerpt: 'As someone who has used jQuery for many. years and has recently become a Vue convert, I thought it would be an interesting topic to discuss the migration process of working with one to the other.' },
      { id: 3, author: 'Chris Coyier', title: 'Naming things to improve accessibility', likes: 13, category: 'accessibility', excerpt: 'In modern browsers, our markup becomes an accessibility tree that ultimately informs what our interface looks like to assistive technologies. It doesn’t matter as much whether you’ve written this markup' },
      { id: 4, author: 'Dan Englishby', title: 'The Many Ways of Getting Data Into Charts', likes: 9, category: 'apis', excerpt: 'Data is available everywhere nowadays, whether it’s in a plain text file, a REST API, an online Google sheet... you name it! It’s that variety of context that makes building graphs more than simply having a database in your local project — where there is data, there is a way.' }
      ],
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}

.sampleArray * {
  color: black;
}
</style>
