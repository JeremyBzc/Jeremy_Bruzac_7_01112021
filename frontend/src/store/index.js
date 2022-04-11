import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    limitedAccess: true,
  },
  mutations: {
    setLimitedAccess(state, bool) {
      state.limitedAccess = bool
    },
  },
  actions: {
    limitedAccess({ commit }, bool) {
      commit('setLimitedAccess', bool)
    },
  },
  modules: {},
})
