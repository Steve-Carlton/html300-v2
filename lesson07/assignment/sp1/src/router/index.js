import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Map from '../views/Map.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

//This is your router file. It's a hub that delivers your views to your Vue app.vue file.

const routes = [
  // "/" is always the path to home
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
