import Vue from 'vue'
import VueTouch from 'vue-touch'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/commons/stylus/my-mint.styl'
import store from '@/store'
import '@/configuration'
import '@/commons/stylus/base.styl'
import '@/commons/Batar/Native'
import '@/commons/utils/bus'
import VueScroller from 'vue-scroller'
import VueVideoPlayer from 'vue-video-player'


import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.config.productionTip = false
FastClick.attach(document.body);

Vue.use(VueVideoPlayer)
Vue.use(MintUI)
Vue.use(VueScroller)
Vue.use(VueTouch, {
  name: 'v-touch'
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
document.documentElement.style.fontSize = window.innerWidth / 3.75 + 'px';
