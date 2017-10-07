<template>
<div class="mdl-grid">

  <div v-for="item in projects" :key="item.project" class="mdl-cell--4-col mdl-cell mdl-card mdl-shadow--2dp">
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
<!--
  <v-layout>

      <v-layout row wrap>

          <v-card class="ma-2" v-for="item in projects" :key="item.project">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.project}}</h3>
                <div>{{item.description}}</div>
              </div>
            </v-card-title>
            <v-card-text>
              <v-layout column>
                <ul>
                  <li>Components: {{item.components}}</li>
                  <li>Stored Procedures: {{item.sps}}</li>
                  <li>Queries: {{item.queries}}</li>
                  <li>Includes: {{item.includes}}</li>
                  <li>Issues: {{item.issues}}</li>
                </ul>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="orange--text">GitHub</v-btn>
              <v-btn flat class="orange--text">JIRA</v-btn>
            </v-card-actions>
          </v-card>
          
      </v-layout>

  </v-layout>
  -->

</template>

<script>
import axios from 'axios'
var inspect = require('eyes').inspector({maxLength: false})

export default {
  name: 'dashboard',
  data: function () {
    return {
      projects: []
/*
      {
        "project": "tera",
        "components": 9
      },
      {
        "project": "paris",
        "components": 22,
        "description": "Analize research financial and located assets"
      },
      {
        "project": "aurora",
        "components": 26
      },
      {
        "project": "move",
        "components": 15
      }
    ]*/
    }
  },

  created() {
    axios.get('./data/projects.json')
    .then(response => {
      this.projects = response.data
    })
    .catch(e => {
      console.log(e)
    })
    
  }
}
</script>