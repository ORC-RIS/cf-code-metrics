<template>
  
  <div>
    <div class="tabs">
      <ul>
        <li><router-link v-bind:to="'/' + id + '/datasources'">Datasources</router-link></li>
        <li><a>Queries</a></li>
        <li><a>Stored procedures</a></li>
        <li><a>Components</a></li>
        <li><a>Includes</a></li>
      </ul>
    </div>

    <div>
      <router-view></router-view>
    </div>

    <!-- 
      <h3>Components:</h3>
      <ul>
        <li v-for="item in components" :key="item.line">name: {{ item.file }}</li>
      </ul>
    -->
  </div>

</template>

<script>
import api from './../api'

export default {
  name: 'Application',
  props: ['id'],
  
  data: function () {
    return {
      name: '',
      components: [],
      projectData: {}
    }    
  },
  methods: {
    onClick() {
      //console.log(this.projectData)
      //this.$emit('data', 'mensaje')
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

      that.name = 'pepe'
      //console.log(that.components)
    })
    
    //this.name = proj[0].name
    //this.name = props.id
    //console.log(proj)
  }
}

</script>

<style>

</style>
