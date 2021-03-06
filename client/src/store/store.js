import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    loggedIn: false,
    poems: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.loggedIn = true
      } else {
        state.loggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setPoems (state, words) {
      state.poems = words
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      console.log(user)
      commit('setUser', user)
    },
    setPoems ({commit}, words) {
      commit('setPoems', words)
    }
  }
})
