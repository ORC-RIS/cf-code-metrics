<template>
  <v-app light>

    <v-toolbar app color="purple"
      dark>
      <v-btn icon>
        <v-icon v-html="'chevron_left'"></v-icon>
      </v-btn>
      
      <v-btn to="/">Home</v-btn>
      <!-- <v-btn to="/hello">Hello</v-btn> -->
      <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
      
      <v-text-field
        prepend-icon="search"
        label="search"
        solo-inverted
        class="mx-3"
        flat
      ></v-text-field>

      <!-- <v-spacer></v-spacer> -->
      <!-- <v-icon>fa-home</v-icon> -->

      <v-tabs
        v-if="$route.path != '/'"
        slot="extension"
        centered
        slider-color="white"
        color="transparent">
        <v-tab :to="{ name: 'datasources' }">Data Sources</v-tab>
        <v-tab :to="{ name: 'components' }">Components</v-tab>
        <v-tab :to="{ name: 'sps' }">Stores Procedures</v-tab>
        <v-tab :to="{ name: 'queries' }">Queries</v-tab>
        <v-tab :to="{ name: 'includes' }">Includes</v-tab>
      </v-tabs>
    </v-toolbar>
    
    <v-content>
      <v-fade-transition mode="out-in" duration="100">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; UCF-DSAS 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fixed: false,
        title: 'Apps',
        currentProject: ''
      }
    }
  }
</script>
