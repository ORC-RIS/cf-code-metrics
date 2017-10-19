<template>
  <div>
    <h1 class="hero title is-1">{{id}} datasources</h1>
    <div>
      <ul v-for="ds in filteredDatasources" :key="ds">
        <li>{{ds}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from './../api'

export default {
  name: 'ApplicationDatasources',
  props: ['id', 'searchTerm'],
  
  data: function () {
    return {
      datasources: []
    }    
  },
  mounted: function () {
    var that = this
    api.getProject(this.id).then(project => {
      that.datasources = project.datasources.sort()
    })
  },
  computed: {
    filteredDatasources() {
      return this.datasources.filter(d => {        
         return (this.searchTerm === '' 
          || d.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
      })
    }
  }
}
</script>