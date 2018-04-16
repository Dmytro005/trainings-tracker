import Vue from 'vue'
import Router from 'vue-router'

import About from '@/screens/About/AboutView'
import Session from '@/screens/Session/SessionView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    }
  ]
})
