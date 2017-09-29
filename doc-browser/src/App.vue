<template>
  <div>
    <v-app toolbar footer>
        <v-navigation-drawer
        persistent
        v-model="drawer"
        light
        enable-resize-watcher
        absolute>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar>
        <v-toolbar-title>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar-title>
        <router-link to="/hello">Go to Hello</router-link>
        <v-spacer></v-spacer>
        <v-text-field
          label="search..."
          single-line
          append-icon="search"
          hide-details>
        </v-text-field>
      </v-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <v-footer>2017</v-footer>

    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'APPS',
      msg: 'Welcome to Your Vue.js App',
      drawer: true
    }
  }
}
</script>

<style>
#app {

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
