<template>
  <div>
    <h1 class="title is-1">Stored Procedures</h1>


  </div>
</template>

<script>
import api from './../api'


export default {
  name: 'ApplicationStoredProcedures',
  props: ['id'],

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
  }
}
</script>