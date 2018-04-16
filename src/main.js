// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import VueFire from 'vuefire'
import 'vuetify/dist/vuetify.min.css'
import './theme/main.sass'

import router from './router'
import store from './store'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCQPaJwAnY_CFgGXdWg0R6MitqUbGYVbqQ',
  authDomain: 'trainings-tracker.firebaseapp.com',
  databaseURL: 'https://trainings-tracker.firebaseio.com',
  projectId: 'trainings-tracker',
  storageBucket: 'trainings-tracker.appspot.com',
  messagingSenderId: '671859954787'
})

// const db = firebaseApp.database()

Vue.use(Vuetify)
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: firebaseApp,
  store,
  router,
  components: { App },
  template: '<App/>'
})
