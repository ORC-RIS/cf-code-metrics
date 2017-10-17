<template>
<div>

  <div class="columns is-multiline">
    <div class="column is-4" v-for="item in filteredProjects" :key="item.project"
      @click="viewProject(item.project)">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{item.project}}</p>
              <!-- <p class="subtitle is-6">description</p> -->
            </div>
          </div>

          <div class="columns">
            <div class="column is-2 metric-value">
                <div>{{item.datasources}}</div>
                <div>{{item.components}}</div>
                <div>{{item.sps}}</div>
                <div>{{item.queries}}</div>
                <div>{{item.includes}}</div>
            </div>
            
            <div class="column">
              <div class="headingss">datasources</div>
              <div class="headingss">components</div>
              <div>stores procedures</div>
              <div>queries</div>
              <div>includes</div>
            </div>
          </div>

          </div>
        </div>
    </div>
  </div>

</div>
</template>

<script>
import api from './../api'
var inspect = require('eyes').inspector({maxLength: false})

export default {
  name: 'dashboard',
  props:['searchTerm'],
  data: function() {
    return {
      projects: []
    }
  },
  mounted: function() {
    api.getProjects().then(data => {
      this.projects = data
    })
  },
  methods: {
    viewProject: function(projectId) {
      this.$router.push({ name: 'Application', params: { id: projectId, searchTerm: this.searchTerm }})
    }
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(p => {
         return p.project.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      })
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
}

.metric-value {
  text-align: right;
}

</style>
