<template>
  <div>
    <h1 class="hero title is-1">{{id}} queries</h1>

    <div>
<!--       <ul v-for="q in queries" :key="q.name">
        <li>{{q.name}}</li>
      </ul> -->

      <div class="container" v-for="q in queries" :key="q.name">
        <h5 class="title is-6">{{q.name}}</h5>
        <small>{{q.file}}</small>

        <pre>{{q.text | sql}}</pre>
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
var pd = require('pretty-data').pd

const slqFilter = (text) => {
  return (pd.sql(text).trim())
}

export default {
  name: 'ApplicationQueries',
  props:['id'],

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

  filters: {
    sql: slqFilter
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
