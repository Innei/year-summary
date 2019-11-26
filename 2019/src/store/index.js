import Vue from 'vue'
import Vuex from 'vuex'

import options from './modules/options'
import viewport from './modules/viewport'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    options,
    viewport
  }
})
