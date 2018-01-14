<template>
  <v-app light>

    <v-toolbar fixed app>
      <v-btn icon light>
        <v-icon v-html="'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      
      <v-spacer></v-spacer>      
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
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
        title: 'Apps'
      }
    }
  }
</script>
