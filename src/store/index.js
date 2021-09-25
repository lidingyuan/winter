import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import employe from './modules/employe'
import goodsStore from './modules/goodsStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    employe,
    goodsStore
  }
})

export default store
