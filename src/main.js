// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible.js'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vant/lib/vant-css/index.css'
import './static/vendor/mui/dist/css/mui.css'
import './static/vendor/mui/dist/css/iconfont.css'
import Axios from 'axios'
import './static/css/global.css'
import Globle from './static/GlobleFinal'
import Moment from 'moment'
import NavBar from './components/common/Navbar'
import vuePicturePreview from 'vue-picture-preview'
import { List, Cell, PullRefresh, Swipe, SwipeItem, Loading, Button, Stepper, NavBar } from 'vant'
import Swip from './components/common/Swip'

Vue.use(PullRefresh).use(Cell).use(List).use(Swipe).use(SwipeItem).use(Loading).use(Button).use(Stepper).use(NavBar)

Vue.config.productionTip = false
Vue.prototype.$GLOBAL = Globle
Vue.use(MintUI)
Vue.use(vuePicturePreview)

Vue.prototype.$ajax = Axios
Axios.defaults.headers.common['token'] = '9ec0c663e19eede7b1994cd369346668'
Axios.defaults.baseURL = 'https://appicome.enn.cn:8076'
Axios.interceptors.request.use(function (config) {
  // 显示loading
  MintUI.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})

Axios.interceptors.response.use(function (config) {
  // 隐藏loading
  MintUI.Indicator.close()
  return config
})

Vue.filter('convertData', function (value) {
  return Moment(value).format('YYYY-MM-DD')
})

Vue.component('navBar', NavBar)
Vue.component('swip', Swip)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
