<template>

<div>

<!-- navigation bar -->
<nav class="navbar is-transparent is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <router-link to="/">Apps</router-link>
    </a>
    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <div class="navbar-menu">    
    <div class="navbar-start navbar-full">
      <div class="navbar-item navbar-full">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half searchbox">
            <div class="control has-icons-left">
              <input type="text" class="input is-medium" placeholder="Search your documentation">
              <span class="icon is-small is-left">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </div>
</nav>


<!-- main content -->

<section class="section">

<div class="columns">

  <!-- side menu -->
  <!--
  <div class="column is-2 is-hidden-mobile side-menu">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
  </div>
  -->

  <!-- main content -->
  <div class="column">
    <router-view></router-view>
  </div>
</div>
<!--
  <div class="container">



  </div>


  <div class="flex-container">

    <div class="card flex-block" style="width: 230px">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>

    <div class="card is-pulled-left flex-block" style="width: 230px">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>

   

  </div>
  
        -->
      

      
           
   

  
</section>

<!-- <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </div>
</footer>
 -->

</div>

</template>

<script>
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

<style lang="sass">
@import '~bulma'
</style>

<style>

.navbar-full{
    width: 100%;
    display: inline-block;
    text-align: center
}

.searchbox {
  width: 400px;
  padding-right: 73px; 
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:   lightgray;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    lightgray;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    lightgray;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    lightgray;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    lightgray;
}



.flex-container {
  display:                 flex;
  display:                 -webkit-flex; /* Safari 8 */
  flex-wrap:               wrap;
  -webkit-flex-wrap:       wrap;         /* Safari 8 */
  justify-content:         center;
  -webkit-justify-content: center;       /* Safari 8 */
}

.flex-block {  
  margin:             10px;        
}

.side-menu {  
  /* width: 200px; */
}

.section {
  padding-top: 20px;
}

</style>
