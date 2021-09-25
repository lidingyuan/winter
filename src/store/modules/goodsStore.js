
const goodsStore = {
  namespaced: true,

  state: {
    goodsStore: []
  },

  getters: {
    goodsStore: state => state.goodsStore
  },

  mutations: {
    LOAD (state, goodsStore) {
      state.goodsStore = goodsStore
    },
    SET (state, goods) {
      const goodsStore = { ...state.goodsStore }
      Object.keys(goods).forEach(key => {
        if (!goodsStore[key]) {
          goodsStore[key] = 0
        }
        goodsStore[key] += goods[key]
      })
      state.goodsStore = goodsStore
    }
  },

  actions: {
    loadGoodsStore ({ commit }, goodsStore) {
      commit('LOAD', goodsStore)
    },
    setGoodsStore ({ commit }, goods) {
      commit('SET', goods)
    }
  }
}

export default goodsStore
