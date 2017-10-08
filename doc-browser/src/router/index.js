import Vue from 'vue'
import Router from 'vue-router'
import Hello from './../components/Hello.vue'
import Dashboard from './../components/Dashboard.vue'
import Application from './../components/Application.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/:id',
      name: 'Application',
      component: Application,
      props: true
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
