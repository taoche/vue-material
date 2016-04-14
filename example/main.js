import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'

import App from './App'

// styles
import 'lancer-css/src/application.scss'

Vue.config.debug = true

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: false,
  saveScrollPosition: true
})

// configure router
configRouter(router)

router.beforeEach(function () {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/home'
})

router.start(App, 'app')
