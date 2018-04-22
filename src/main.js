// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

import firebase from 'firebase/app'
import 'firebase/firestore'
import VueFire from 'vuefire'

import 'vuetify/dist/vuetify.min.css'
import './theme/main.sass'

import router from './router'
import store from './store'

firebase.initializeApp({
  apiKey: 'AIzaSyCQPaJwAnY_CFgGXdWg0R6MitqUbGYVbqQ',
  databaseURL: 'https://trainings-tracker.firebaseio.com',
  projectId: 'trainings-tracker'
})

Vue.use(Vuetify)
Vue.use(VueFire)

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
