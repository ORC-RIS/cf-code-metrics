import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
