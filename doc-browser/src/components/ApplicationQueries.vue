<template>
  <div>
    <h1 class="hero title is-1">{{id}} queries</h1>

    <div>
      <ul v-for="q in queries" :key="q.name">
        <li>{{q.name}}</li>
      </ul>
    </div>
  </div>  
</template>

<script>
import api from './../api'

export default {
  name: 'ApplicationQueries',
  props:['id'],

  data: function() {
    return {
      queries: []
    }
  },

  mounted: function() {
    var that = this
    api.getProject(this.id).then(project => {
      that.queries = project.queries
    }) 
  }

}
</script>

