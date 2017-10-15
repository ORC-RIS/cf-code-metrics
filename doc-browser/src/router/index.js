import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './../components/Dashboard.vue'
import Application from './../components/Application.vue'
import ApplicationDatasources from './../components/Datasources.vue'
import ApplicationQueries from './../components/Queries.vue'
import ApplicationComponents from './../components/Components.vue'

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
        },
        { 
          path: 'components',
          component: ApplicationComponents,
          props: true
        }
      ]
    }
  ]
})
