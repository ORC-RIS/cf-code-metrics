<template>
  <v-container fluid grid-list-md>
    
    <v-subheader v-if="loading">Loading...</v-subheader>

    <v-subheader v-if="!loading">Projects</v-subheader>
    <v-layout row wrap>
      
      <v-flex d-flex xs12 sm6 md4
        v-for="item in projects" :key="item.project">
        <v-card>
          <v-card-title primary class="title">{{item.project}}</v-card-title>
          <v-card-text>
            <v-container>
              <table>
                <tbody> 
                  <tr>
                    <td class="metric-value px-2">{{item.datasources}}</td>
                    <td class="metric-label px-2">datasources</td>
                  </tr>
                  <tr>
                    <td class="metric-value px-2">{{item.sps}}</td>
                    <td class="metric-label px-2">components</td>
                  </tr>
                  <tr>
                    <td class="metric-value px-2">{{item.sps}}</td>
                    <td class="metric-label px-2">sps</td>
                  </tr>
                  <tr>
                    <td class="metric-value px-2">{{item.queries}}</td>
                    <td class="metric-label px-2">queries</td>
                  </tr>
                  <tr>
                    <td class="metric-value px-2">{{item.includes}}</td>
                    <td class="metric-label px-2">includes</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="viewProject(item.project)">Explore</v-btn>
            <v-btn v-if="item.repository" v-bind:href="item.repository">
             <v-icon>fa-github</v-icon>
            </v-btn>
            <v-btn v-if="item.jira" v-bind:href="item.jira">JIRA</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import api from './../api'

export default {
  name: 'dashboard',
  data: function () {
    return {
      loading: false,
      projects: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true

      api.getProjects().then(data => {
        this.projects = data
        this.loading = false
      })
    },
    viewProject: function (projectId) {
      this.$router.push({ name: 'components', params: { id: projectId, searchTerm: this.searchTerm } })
    }
  }
}
</script>

<style>
.metric-label {
  text-align: left;
}

.metric-value {
  text-align: right;
}
</style>
