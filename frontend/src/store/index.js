import Vue from 'vue'
import Vuex from 'vuex'
import apiGrp from '../services/axios'
import authService from '../services/authService'
import profileService from '../services/profileService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    limitedAccess: true,
    user: {
      userId: -1,
      token: '',
    },
    userInfos: {
      firstName: '',
      lastName: '',
      bio: '',
    },
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
    },
    logUser(state, user) {
      apiGrp.defaults.headers.common['Authorization'] = user.token
      state.user = user
    },
    setLimitedAccess(state, bool) {
      state.limitedAccess = bool
    },
    userInfos(state, userInfos) {
      state.userInfos = userInfos
    },
  },
  actions: {
    limitedAccess({ commit }, bool) {
      commit('setLimitedAccess', bool)
    },
    onRegister: async ({ commit }, userInfos) => {
      commit('setStatus', 'loading')
      try {
        const user = await authService.registerUser(userInfos)
        console.log(user.data)
        commit('setStatus', 'created')
      } catch {
        commit('setStatus', 'error_create')
      } finally {
        commit('setStatus', 'loaded')
      }
      // authService
      //   .registerUser(userInfos)
      //   .then((response) => {
      //     commit('setStatus', 'created')
      //     resolve(response)
      //   })
      //   .catch((error) => {
      //     commit('setStatus', 'error_create')
      //     reject(error)
      //   })
    },
    login: async ({ commit }, userInfos) => {
      commit('setStatus', 'loading')
      try {
        const user = await authService.loginUser(userInfos)
        console.log(user.data)
        console.log(userInfos)
        commit('setStatus', 'Connected')
        commit('logUser', user.data)
      } catch {
        commit('setStatus', 'error_login')
      }

      // authService
      //   .loginUser(userInfos)
      //   .then((response) => {
      //     console.log(userInfos)
      //     console.log(response)
      //     commit('setStatus', 'Connecté')
      //     commit('logUser', response.data)
      //     resolve(response)
      //   })
      //   .catch((error) => {
      //     commit('setStatus', 'error_login')
      //     reject(error)
      //   })
    },
    getUserProfile: ({ commit }) => {
      profileService
        .getUserProfile()
        .then((response) => {
          console.log(response.data)
          commit('userInfos', response.data)
        })
        .catch(() => {})
    },
  },
  modules: {},
})
