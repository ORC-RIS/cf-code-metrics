<template>
  <!-- <v-container> -->
    <v-list three-line subheader>
          <v-subheader>User Controls</v-subheader>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
  <!-- </v-container> -->
</template>

<script>
import api from './../api'

export default {
  name: 'datasources',
  data: function () {
    return {
      datasources: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.loading = true

      api.getProject().then(data => {
        this.projects = data
        this.loading = false
      })
    }
  }

}
</script>