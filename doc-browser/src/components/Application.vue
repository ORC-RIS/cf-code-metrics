<template>
  
  <div>
    <div>MY APP: {{ id }}</div>
    <p>{{ name }}</p>

    <h3>Components</h3>
    <ul>
      <li v-for="component in components" :key="component.displayname">{{ component.displayname }}</li>
    </ul>
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
      components: []
    }    
  },
  mounted: function () {
    api.getProject(this.id).then(project => {
      this.components = project.components
    })
    
    //this.name = proj[0].name
    //this.name = props.id
    //console.log(proj)
  }
}

</script>

<style>

</style>
