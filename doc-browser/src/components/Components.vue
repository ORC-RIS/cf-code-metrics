<template>
  <div>

    <h1 class="title is-1">Components</h1>

    <div class="container" v-for="c in filteredComponents" :key="c.row + c.col">
      <p class="has-text-weight-semibold" >{{c.displayname}}</p>
      <p class="has-text-weight-light">{{c.hint}}</p>
      </br>
    </div>

  </div>
</template>

<script>
import api from './../api'

export default {
  name: 'ApplicationComponents',
  props:['id', 'searchTerm'],

  data: function() {
    return {
      components: []
    }
  },
  
  mounted: function() {
    var that = this
    api.getProject(this.id).then(project => {
      that.components = project.components
    }) 
  },

  computed: {
    filteredComponents() {
      return this.components.filter(c => {
        let term = this.searchTerm.toLowerCase()
        return (
               (c.hasOwnProperty('displayname') && c.displayname.toLowerCase().indexOf(term) > -1)
            || (c.hasOwnProperty('hint') && c.hint.toLowerCase().indexOf(term) > -1)  
          )
      })
    }
  }
  
}
</script>

