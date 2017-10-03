<template>
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
              <h5>Components: {{item.components}}</h5>
              <h5>Issues: {{item.components}}</h5>
            </v-card-text>
            <v-card-actions>
              <v-btn flat class="orange--text">GitHub</v-btn>
              <v-btn flat class="orange--text">JIRA</v-btn>
            </v-card-actions>
          </v-card>
          
      </v-layout>

  </v-layout>
<!--
  <v-container fluid grid-list-md text-xs-center>

    <h1>Items: {{projects.length}}</h1>

    <v-card>
      <v-card-title>
        TITLE
      </v-card-title>
      <v-card-text>
        eze
      </v-card-text>
      <v-card-actions class="white">
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    
    <p></p>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark class="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 v-for="i in 2" :key="i">
        <v-card dark class="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="i">
        <v-card dark class="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="i">
        <v-card dark class="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="i">
        <v-card dark class="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="i">
        <v-card dark class="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  -->
</template>

<script>
export default {
  name: 'dashboard',
  data: function () {
    return {
      projects: [
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
    ]
    }
  }
}
</script>