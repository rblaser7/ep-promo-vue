import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Music from '@/components/Music'
import About from '@/components/About'
import Downloads from '@/components/Downloads'
import Epitome from '@/components/Epitome'
import Instrument from '@/components/Instrument'
import Mistletoe from '@/components/Mistletoe'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/music/epitome',
      name: 'Epitome',
      component: Epitome
    },
    {
      path: '/music/instrument',
      name: 'Instrument',
      component: Instrument
    },
    {
      path: '/music/mistletoe',
      name: 'Mistletoe',
      component: Mistletoe
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
