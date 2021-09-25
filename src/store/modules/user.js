
const user = {
  namespaced: true,

  state: {
    userInfo: null
  },

  getters: {
    userInfo: state => state.userInfo
  },

  mutations: {
    LOAD (state, userInfo) {
      state.userInfo = userInfo
    }
  },

  actions: {
    loadUserInfo ({ commit }, userInfo) {
      commit('LOAD', userInfo)
    }
  }
}

export default user
