import router from './router/index'
import store from './store'

router.beforeEach((to, from, next) => {
  if (!store.getters['user/userInfo'] && to.path !== '/login') {
    next({ path: '/login', replace: true })
  } else {
    next()
  }
})
