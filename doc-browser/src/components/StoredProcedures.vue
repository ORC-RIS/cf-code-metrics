<template>
  <div>
    <h1 class="title is-1">Stored Procedures</h1>

    <div class="container" v-for="sp in filteredSps" :key="sp.row + sp.col">
      <p>name: {{sp.procedure}}</p>
      <p>db: {{sp.datasource}}</p>
      </br>
    </div>

  </div>
</template>

<script>
import api from './../api'


export default {
  name: 'ApplicationStoredProcedures',
  props: ['id', 'searchTerm'],

  data: function() {
    return {
      sps: []
    }
  },

  mounted: function() {
    var that = this

    api.getProject(this.id).then(project => {
      that.sps = project.sps
    })
  },

  computed: {
    filteredSps() {
      return this.sps.filter(p => {
        let term = this.searchTerm.toLowerCase()
        return (term === ''
            || (p.hasOwnProperty('procedure') && p.procedure.toLowerCase().indexOf(term) > -1)
            || (p.hasOwnProperty('datasource') && p.datasource.toLowerCase().indexOf(term) > -1))
      })
    }
  }
}
</script>