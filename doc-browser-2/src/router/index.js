import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
// import Project from '@/components/Project'
import Components from '@/components/Components'
import Includes from '@/components/Includes'
import DataSources from '@/components/DataSources'
import Queries from '@/components/Queries'
import StoredProcedures from '@/components/StoredProcedures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/:id/components',
      name: 'components',
      component: Components
    },
    {
      path: '/:id/datasources',
      name: 'datasources',
      component: DataSources
    },
    {
      path: '/:id/includes',
      name: 'includes',
      component: Includes
    },
    {
      path: '/:id/queries',
      name: 'queries',
      component: Queries
    },
    {
      path: '/:id/storedprocedures',
      name: 'sps',
      component: StoredProcedures
    }
  ]
})
