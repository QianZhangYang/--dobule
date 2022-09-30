import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins: [
    persistedstate({
      paths: ['user.token', 'user.hasserTime']
      // key: 'usertoken',
      // reducer(state) {
      //   return {
      //     token: state.user.token
      //   }
      // }
    })
  ]
})

export default store
