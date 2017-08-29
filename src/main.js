// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex'
import Vuex from 'vuex'
import App from './App'
import routes from './router'
import axios from 'axios'
import ImgLazyLoad from 'vue-lazyload'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'


Vue.use(Router)
Vue.use(MuseUi)
Vue.config.productionTip = false

window.axios = axios;
Vue.use(ImgLazyLoad, {
  loading: require('./assets/ajax-loader.gif'),
  })
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent';
axios.defaults.autofaceURL = 'https://www.easy-mock.com/mock/5993f32f059b9c566dbf4430/frent';
/* eslint-disable no-new */

const router = new Router({
  //mode: 'history',
  routes,
})
//判断登录状态
// router.beforeEach(({meta, path}, from, next) => {
//   var { auth = true } = meta
//   var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

//   if (auth && !isLogin && path !== '/login') {
//       return next({ path: '/login' })
//   }
//   next()
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
