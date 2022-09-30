import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const notoken = ['/404', '/login']
router.beforeEach((to, from, next) => {
  nprogress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    console.log(to)
    if (notoken.indexOf(to.path) === -1) {
      next('/login')
    } else {
      next()
    }
  }
  nprogress.done()
})
router.afterEach(() => {
  nprogress.done()
})
