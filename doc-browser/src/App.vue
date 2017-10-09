<template>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header mdl-layout--clipped-drawer">
            

  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title"><router-link to="/">Apps</router-link></span>
      <span class="mdl-layout-title">&nbsp;/ [search]</span>
    </div>
  </header>


    <div class="mdl-layout__drawer">    
            
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
        <div class="mdl-layout-spacer"></div>
        <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
      </nav>
    </div>
  

  <main class="mdl-layout__content">
    <div class="page-content">
      <router-view></router-view>
    </div>
  </main>

</div>
</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  data () {
    return {
      title: 'APPS'
    }
  },
  methods: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
/*
#app {

}
*/

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

/* Position the drawer below the header */
.mdl-layout--clipped-drawer .mdl-layout__drawer {
  margin-top: 64px;
  height: calc(100% - 64px);
}

.mdl-layout--clipped-drawer.is-small-screen .mdl-layout__drawer { /* On smaller screens where the header is smaller */
  margin-top: 56px;
  height: calc(100% - 56px);
}

/* Position the obfuscator below the header */
.mdl-layout--clipped-drawer .mdl-layout__obfuscator {
  margin-top: 64px;
  height: calc(100% - 64px);
}

.mdl-layout--clipped-drawer.is-small-screen .mdl-layout__obfuscator {
  margin-top: 56px;
  height: calc(100% - 56px);
}


/* 
 * Fixed draw layout
 */

/* Expand the header over the space reserved for the full-height navigation draw */
.mdl-layout--clipped-drawer.mdl-layout--fixed-drawer>header.mdl-layout__header {
  margin-left: 0;
  width: 100%;
}

/* Hide the hamburger icon when the drawer is showing */
.mdl-layout--clipped-drawer.mdl-layout--fixed-drawer:not(.is-small-screen) .mdl-layout__drawer-button {
  display: none;
}
</style>
