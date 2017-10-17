<template>

<div>
  <!--
  <div class="tabs">
    <ul>
      <li>Datasources</li>
      <li>Queries</li>
      <li>Stored procedures</li>
      <li>Components</li>
      <li>Includes</li>
    </ul>
  </div>
  -->

  <div class="columns is-multiline">
    <div class="column is-4" v-for="item in projects" :key="item.project"
      @click="viewProject(item.project)">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{item.project}}</p>
              <p class="subtitle is-6">description</p>
            </div>
          </div>

          <div class="content">
            <ul>
              <li class="is-fluid">
                <div class="is-size-4 metric-value">{{item.datasources}}</div>
                <div class="is-size-6">datasources</div>
              </li>
              <li>
                <span class="is-size-4 metric-value">{{item.components}}</span>
                <span class="is-size-6">components</span>
              </li>
              <li>
                <span class="is-size-4 metric-value">{{item.sps}}</span>
                <span class="is-size-6">stores procedures</span>
              </li>
              <li>
                <span class="is-size-4 metric-value">{{item.queries}}</span>
                <span class="is-size-6">queries</span>
              </li>
              <li>
                <span class="is-size-4 metric-value">{{item.includes}}</span>
                <span class="is-size-6">includes</span>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>

</div>



<!--
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
-->

</div>
</template>

<script>
import api from './../api'
var inspect = require('eyes').inspector({maxLength: false})

export default {
  name: 'dashboard',
  data: function() {
    return {
      projects: [],
      searchTerm: ''
    }
  },
  mounted: function() {
    api.getProjects().then(data => {
      this.projects = data
    })
  },
  methods: {
    viewProject: function(projectId) {
      console.log(projectId)
      this.$router.push({ name: 'Application', params: { id: projectId }})
    }
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(p => {
         return p.project.indexOf(this.searchTerm.toLowerCase()) > -1
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
  width: 40px;
}

</style>
