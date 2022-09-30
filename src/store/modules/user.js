import { loginAPI } from '@/api/login'
const state = {
  token: null,
  hasserTime: 0
}
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_HASSERTIME(state, time) {
    state.hasserTime = time
  }
}
const actions = {
  async getToken(context, payload) {
    const data = await loginAPI(payload)
    context.commit('SET_HASSERTIME', +new Date())
    context.commit('SET_TOKEN', data)
  },
  removeToken({ commit }) {
    commit('SET_TOKEN', null)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
