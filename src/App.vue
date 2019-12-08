<template>
  <div class="container-fluid bg-light">
    <div class="row">
      <aside class="col-3">
        <router-link :to="{ name: 'home' }" class="lead mb-2 d-block">
          Vue Basic - Refactory
          <img src="../src/static/vue-logo.png" alt class="img-fluid" width="30" />
        </router-link>

        <nav>
          <!-- Slide -->
          <router-link :to="{ name: 'what' }" :class="routerLink">What is Vue.js?</router-link>
          <router-link :to="{ name: 'history' }" :class="routerLink">History</router-link>
          <router-link :to="{ name: 'upcoming' }" :class="routerLink">Upcoming</router-link>
          <router-link :to="{ name: 'current' }" :class="routerLink">Current State</router-link>

          <!-- Pendahuluan  -->
          <div class="lead mt-5">Node</div>
          <router-link :to="{ name: 'node' }" :class="routerLink">NodeJS</router-link>
          <router-link :to="{ name: 'express' }" :class="routerLink">Express</router-link>
          <!-- <router-link :to="{ name: 'current' }" :class="routerLink"> PostgreSQL Queries </router-link> -->
          <router-link :to="{ name: 'javascript' }" :class="routerLink">Javascript</router-link>
          <router-link :to="{ name: 'ecmascript6' }" :class="routerLink">ECMA SCRIPT 6</router-link>

          <!-- Demo -->
          <div class="lead mt-5">Vue JS</div>
          <router-link :to="{ name: 'installation' }" :class="routerLink">Installation</router-link>
          <!-- <router-link :to="{ name: 'instance' }" :class="routerLink">Vue Instances LATER</router-link> -->
          <!-- <router-link :to="{ name: 'expression' }" :class="routerLink">Vue Expressions LATER</router-link> -->
          <router-link :to="{ name: 'start' }" :class="routerLink">Getting Started</router-link>
          <router-link :to="{ name: 'single' }" :class="routerLink">Single File Component</router-link>
          <router-link :to="{ name: 'lifecycle' }" :class="routerLink">Life Cycle</router-link>
          <router-link :to="{ name: 'libraries' }" :class="routerLink">Libraries</router-link>
          <router-link :to="{ name: 'expression' }" :class="routerLink">Expression</router-link>
          
          <router-link :to="{ name: 'binding' }" :class="routerLink">Data Binding</router-link>
          <router-link :to="{ name: 'eventhandling' }" :class="routerLink">Event Handling</router-link>
          <router-link :to="{ name: 'style' }" :class="routerLink">Style Sheets</router-link>
          <!-- <router-link :to="{ name: 'bcomputed' }" :class="routerLink">Computed Properties</router-link> -->
          <router-link :to="{ name: 'computed' }" :class="routerLink">Computed Properties</router-link>
          <router-link :to="{ name: 'watcher' }" :class="routerLink">Watcher</router-link>
          <router-link :to="{ name: 'deploy' }" :class="routerLink">Deploy</router-link>
          <hr>
          <router-link :to="{ name: 'conditional' }" :class="routerLink">Conditional Rendering</router-link>
          <router-link :to="{ name: 'list' }" :class="routerLink">List Rendering</router-link>
          <router-link :to="{ name: 'communicating' }" :class="routerLink">Component Communication</router-link>
          <router-link :to="{ name: 'cookies' }" :class="routerLink">Cookies and Local Storage</router-link>
          <router-link :to="{ name: 'server' }" :class="routerLink">Server</router-link>
          <!-- <router-link :to="{ name: 'bmethod' }" :class="routerLink">Method Properties</router-link> -->
          <!-- <router-link :to="{ name: 'bcomponent' }" :class="routerLink">Components in Vue</router-link> -->
          <!-- <router-link :to="{ name: 'bdevtool' }" :class="routerLink">Vue Devtool</router-link> -->
          <!-- <router-link :to="{ name: 'btwobinding' }" :class="routerLink">Twi Ways Binding</router-link> -->
          <!-- <router-link :to="{ name: 'btab' }" :class="routerLink">Moving Between Tabs</router-link> -->
          <hr>
          <router-link :to="{ name: 'intro' }" :class="routerLink">Vue x Vuex</router-link>
          <router-link :to="{ name: 'basic' }" :class="routerLink">Vuex</router-link>
          <router-link :to="{ name: 'states' }" :class="routerLink">Vuex States</router-link>
          <router-link :to="{ name: 'mutation' }" :class="routerLink">Vuex Mutation</router-link>
          <router-link :to="{ name: 'actions' }" :class="routerLink">Vuex Action</router-link>
          <router-link :to="{ name: 'getter' }" :class="routerLink">Vuex Getter</router-link>
          <router-link :to="{ name: 'modules' }" :class="routerLink">Vuex Modules</router-link>
          <router-link :to="{ name: 'routingbasic' }" :class="routerLink">Routing</router-link>
          <hr>
          <!-- <router-link :to="{ name: 'coffee' }" :class="routerLink"> CoffeeScript </router-link> -->
          <router-link :to="{ name: 'jsx' }" :class="routerLink">JSX</router-link>
          <router-link :to="{ name: 'data' }" :class="routerLink">$data</router-link>
          <router-link :to="{ name: 'form' }" :class="routerLink">Two-way data binding</router-link>
          <!-- <router-link :to="{ name: 'method' }" :class="routerLink">Event Listener</router-link> -->
          <router-link :to="{ name: 'filter' }" :class="routerLink">Filter</router-link>
          <router-link :to="{ name: 'props' }" :class="routerLink">Props</router-link>
          <router-link :to="{ name: 'vuex' }" :class="routerLink">Vuex</router-link>
        </nav>
      </aside>
      <div class="col-9 mt-5">
        <div style="background: white; border: 1px solid #f0f0f0;" class="p-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      routerLink: [
        "btn",
        "btn-outline-secondary",
        "btn-block",
        "mt-1",
        "text-left"
      ]
    };
  }
};
</script>

<style scoped>
.grey {
  background-color: rgb(245, 245, 245);
}
a.lead {
  text-decoration: none;
  color: #333;
}

nav a {
  border: 1px solid transparent;
  color: #8c8c8c;
}

nav a:hover,
nav a.router-link-active {
  color: white;
  background-image: linear-gradient(90deg, #41b782, #86d169);
  border: 1px solid #47b784;
}

nav {
  overflow: auto;
  height: 100vh;
}
</style>
