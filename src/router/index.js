import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Lobby from '@/views/Lobby'
import Spring from '@/views/SpringRoom'
import Fall from '@/views/Fallroom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/lobby',
      name: 'Lobby',
      component: Lobby,
    },
    {
     path: '/lobby/springroom',
     name: 'Spring',
     component: Spring
    },
    {
    path: '/lobby/fallroom',
    name: 'Fall',
    component: Fall
    }
  ]
})
