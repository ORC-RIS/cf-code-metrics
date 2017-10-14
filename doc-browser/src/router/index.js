import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './../components/Dashboard.vue'
import Application from './../components/Application.vue'
import ApplicationDatasources from './../components/ApplicationDatasources.vue'
import ApplicationQueries from './../components/ApplicationQueries.vue'

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
      props: true,
      children: [
        { 
          path: 'datasources',
          component: ApplicationDatasources,
          props: true
        },
        { 
          path: 'queries',
          component: ApplicationQueries,
          props: true
        }
      ]
    }
  ]
})
