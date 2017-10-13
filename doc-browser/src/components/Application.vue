<template>
  
  <div>
    <div>MY APP: {{ id }}</div>
    

    <h3>Components:</h3>
    <ul>
      <li v-for="item in components" :key="item.line">name: {{ item.file }}</li>
    </ul>
     
<!--      <p>Total: {{components.lenght}}</p> -->
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
    var that = this
    api.getProject(this.id).then(project => {
      //console.log(project)
      //that.components.push(project.components[0])
      //console.log(project.components)

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
