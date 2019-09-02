import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pets from './views/Pets.vue'
import Dog from './views/Dog.vue'
import Cat from './views/Cat.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cat',
      name: 'cat',
      component: Cat
    },
    {
      path: '/dog',
      name: 'dog',
      component: Dog
    },
    {
      path: '/pets/:species/:id',
      name:'pet',
      component: Pets
    }
  ]
})
