<template>
  <div>
    <h1 class="title is-1">Includes</h1>


  </div>
</template>

<script>
import api from './../api'


export default {
  name: 'ApplicationIncludes',
  props: ['id'],

  data: function() {
    return {
      includes: []
    }
  },

  mounted: function() {
    var that = this

    api.getProject(this.id).then(project => {
      that.includes = project.includes
    })
  }
}
</script>