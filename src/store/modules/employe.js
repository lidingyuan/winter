import Employe from '@/assets/class/Employe'
const employe = {
  namespaced: true,

  state: {
    employeList: []
  },

  getters: {
    employeList: state => state.employeList
  },

  mutations: {
    LOAD (state, employeList) {
      state.employeList = employeList
    }
  },

  actions: {
    loadEmployeList ({ commit }, employeList) {
      commit('LOAD', employeList.map(employe => new Employe(employe)))
    }
  }
}

export default employe
