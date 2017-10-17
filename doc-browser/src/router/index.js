import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './../components/Dashboard.vue'
import Application from './../components/Application.vue'
import ApplicationDatasources from './../components/Datasources.vue'
import ApplicationQueries from './../components/Queries.vue'
import ApplicationComponents from './../components/Components.vue'
import ApplicationIncludes from './../components/Includes.vue'
import ApplicationStoredProcedures from './../components/StoredProcedures.vue'

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
          name: 'Datasources',
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
        },
        { 
          path: 'includes',
          component: ApplicationIncludes,
          props: true
        },
        { 
          path: 'storedprocedures',
          component: ApplicationStoredProcedures,
          props: true
        }
      ]
    }
  ]
})
