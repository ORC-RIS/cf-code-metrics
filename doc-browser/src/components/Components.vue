<template>
  <div>

    <h1 class="title is-1">Components</h1>

    <ul>
      <li v-for="c in components" :key="c.col">{{c.displayname}}</li>
    </ul>

  </div>
</template>

<script>
import api from './../api'

export default {
  name: 'ApplicationComponents',
  props:['id'],

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
  }
  
}
</script>

