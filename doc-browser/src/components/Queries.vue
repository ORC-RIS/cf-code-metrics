<template>
  <div>
    <h1 class="hero title is-1">{{id}} queries</h1>

    <div>
      
      <div class="container" v-for="q in filteredQueries" :key="q.row + q.col">
        <h5 class="title is-6">{{q.name}}</h5>
        <small>{{q.file}}</small>

        <pre>{{q.text}}</pre>
      </div>


<!--       {
        "name": "Q_DM_get_FundID",
        "dbtype": "query",
        "text": "\tSELECT FundID \tFROM Q_MergeAll_Actuals",
        "key": {
          "file": "test-data/target/paris/tmp/financials_widgets/s_widget_getAssociatedRevenue.cfm",
          "line": -1,
          "col": -1
        },
        "page": "test-data/target/paris/tmp/financials_widgets/s_widget_getAssociatedRevenue.cfm"
      } -->
    </div>
  </div>  
</template>

<script>
import api from './../api'

export default {
  name: 'ApplicationQueries',
  props:['id', 'searchTerm'],

  data: function() {
    return {
      queries: []
    }
  },
  mounted: function() {
    var that = this
    api.getProject(this.id).then(project => {
      that.queries = project.queries
    }) 
  },
  computed: {
    filteredQueries() {
      return this.queries.filter(q => {
        let term = this.searchTerm.toLowerCase()
        return (
               (q.hasOwnProperty('name') && q.name.toLowerCase().indexOf(term) > -1)
            //|| (q.hasOwnProperty('file') && q.file.toLowerCase().indexOf(term) > -1)  
            || (q.hasOwnProperty('text') && q.text.toLowerCase().indexOf(term) > -1)  
          )
      })
    }
  }
}
</script>

<style>

/*
code { 
    background: hsl(220, 80%, 90%); 
}

pre {
    white-space: pre-wrap;
    background: hsl(30,80%,90%);
}
*/
</style>
