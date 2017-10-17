<template>
  <div>
    <h1 class="title is-1">Includes</h1>

    <div class="container" v-for="i in filteredIncludes" :key="i.row + i.col">
      <p class="has-text-weight-semibold" >{{i.template}}</p>
      <div class="include-list">
        <p class="has-text-weight-light">Included by</p>
        <ul v-for="t in i.includedBy" :key="t.row + t.col">
          <li>{{t.file}}</li>
       </ul>
      </div>      
      </br>
    </div>

  </div>
</template>

<script>
import api from './../api'


export default {
  name: 'ApplicationIncludes',
  props: ['id', 'searchTerm'],

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
  },

  computed: {
    filteredIncludes() {
      return this.includes.filter(i => {
         return i.template.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      })
    }
  }
}
</script>

<style>
.include-list {
  margin-left: 20px;
}
</style>
