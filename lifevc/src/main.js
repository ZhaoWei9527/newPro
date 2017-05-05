import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// mint-ui引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// mock 数据
import './mock/mockAPI'

import '../static/js/swiper.min'
import '../static/fonts/iconfont.css'
// 轮播图插件
import '../static/js/swiper.min.js'
import '../static/css/swiper.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
