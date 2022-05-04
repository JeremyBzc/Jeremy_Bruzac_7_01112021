import apiGrp from '@/services/axios'
import authService from '@/services/authService'
import profileService from '@/services/profileService'

let user = localStorage.getItem('userStorage')

if (!user) {
  user = {
    userId: -1,
    token: '',
  }
} else {
  try {
    user = JSON.parse(user)
    apiGrp.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
  } catch {
    user = {
      userId: -1,
      token: '',
    }
  }
}
export default {
  state: {
    status: '',
    limitedAccess: true,
    user: user,
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
    },
    logUser(state, user) {
      apiGrp.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
      localStorage.setItem('userStorage', JSON.stringify(user))
      state.user = user
    },
    setLimitedAccess(state, bool) {
      state.limitedAccess = bool
    },
    userInfos(state, userInfos) {
      state.user = userInfos
    },
    logout(state) {
      state.user = {
        userId: -1,
        token: '',
      }
      localStorage.removeItem('userStorage')
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
        commit('setStatus', 'created')
        commit('logUser', user.data)
      } catch {
        commit('setStatus', 'error_create')
      }
    },
    login: async ({ commit }, userInfos) => {
      commit('setStatus', 'loading')
      try {
        const user = await authService.loginUser(userInfos)
        commit('setStatus', 'Connected')
        commit('logUser', user.data)
      } catch {
        commit('setStatus', 'error_login')
      }
    },
    getUserProfile: ({ commit }) => {
      try {
        const user = profileService.getUserProfile()
        commit('userInfos', user.data)
      } catch (error) {
        commit('setStatus', 'error_profile')
      }
    },
    editUserProfile: async ({ commit }, userInfos) => {
      try {
        await profileService.editUserProfile(userInfos)
        commit('logUser', userInfos)
      } catch {
        commit('setStatus', 'error_update')
      }
    },
    deleteUserProfile: ({ commit }) => {
      try {
        profileService.deleteUserProfile()
        commit('logout')
      } catch (error) {
        commit('setStatus', 'error_delete')
      }
    },
  },
}
