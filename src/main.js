import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

sync(store, router)

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App),

  // watch: {
  //   '$route'(to, from) {
  //     // console.log(to)
  //   }
  // }
})
.$mount('#app')
