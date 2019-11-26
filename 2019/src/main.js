import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollmagic from 'vue-scrollmagic'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.component('ps', PerfectScrollbar)
Vue.use(VueScrollmagic)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
