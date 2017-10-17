<template>
  
  <div>
    <div class="tabs">
      <ul>
        <li v-for="action in actions" :key="action.name"
            v-on:click="setActive(action)"
            v-bind:class="{ 'is-active': action.isActive }">
          <router-link v-bind:to="`/${id}/${action.uri}`">{{action.name}}</router-link>
        </li>
      </ul>
    </div>

    <div>
      <router-view v-bind:searchTerm="searchTerm"></router-view>
    </div>

  </div>
</template>

<script>
import api from './../api'

export default {
  name: 'Application',
  props: ['id', 'searchTerm'],
  
  data: function () {
    return {
      name: '',
      components: [],
      projectData: {},
      actions: [
        {
          name: 'Datasources',
          uri: 'datasources',
          isActive: false
        },
        {
          name: 'Queries',
          uri: 'queries',
          isActive: false
        },
        {
          name: 'Stored procedures',
          uri: 'storedprocedures',
          isActive: false
        },
        {
          name: 'Components',
          uri: 'components',
          isActive: false
        },
        {
          name: 'Includes',
          uri: 'includes',
          isActive: false
        }        
      ]
    }    
  },
  methods: {
    setActive(action) {

      // inactivate any other action
      this.actions.forEach(action => {
        if (action.isActive)
          action.isActive = false
      })

      // activate current action
      action.isActive = true

    }
  },
  
  mounted: function () {
    var that = this
    api.getProject(this.id).then(project => {
      //console.log(project)
      //that.components.push(project.components[0])
      //console.log(project.components)
      that.projectData = project
      for(var x in project.components) {
        if (project.components[x] != null) {
          that.components.push(project.components[x])
        }
      }

      //work-around to browse datasources by default
      this.actions[0].isActive = true
      this.$router.push({ name: 'Datasources', params: { id: this.id, searchTerm: this.searchTerm }})
      //console.log(that.components)
    })

    // browse to datasources
    // ...

  }
}

</script>

<style>

</style>
