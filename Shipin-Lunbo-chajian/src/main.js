//"vue-video-player": "^4.0.4",
//"video.js": "^6.2.4"


//import 'video.js/dist/video-js.css'
//import 'vue-video-player/src/custom-theme.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoPlayer from 'vue-video-player'
//通过resoutce实现前后端数据交互
import VueResource from "vue-resource"
import App from './App.vue'
import Mint from 'mint-ui';
//import 'mint-ui/lib/style.css'

//var Vue = require('vue')
//var VideoPlayer = require('vue-video-player')
//require('video.js/dist/video-js.css')
//require('vue-video-player/src/custom-theme.css')

//VideoPlayer.config({
//	youtube: true, // default false
//	switcher: false, // default true
//	hls: false // default true
//})
//import './common/stylus/index.scss'

//Vue.use相当于全局注册
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VideoPlayer)
Vue.use(Mint)


import Router from "./router/router.js"

const router = new VueRouter({
	routes:Router.routes,
})

new Vue({
	router:router,
  	el: '#app',
  	render: h => h(App)
})
