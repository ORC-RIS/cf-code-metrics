<template>
<div class="mdl-grid">

  <div v-for="item in projects" :key="item.projectId" 
    v-on:click="viewProject(item.projectId)"
    class="mdl-cell--4-col mdl-cell mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{item.project}}</h2>
    </div>
    <div class="mdl-card__supporting-text">content</div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Get Started
      </a>      
    </div>
  </div>

</div>
</template>

<script>
import api from './../api'
var inspect = require('eyes').inspector({maxLength: false})

export default {
  name: 'dashboard',
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
      this.$router.push({ name: 'Application', params: { id: projectId }})
    }
  }
}
</script>