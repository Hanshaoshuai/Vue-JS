import Vue from 'vue'
import VueRouter from 'vue-router'
//通过resoutce实现前后端数据交互
import VueResource from "vue-resource"


import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

//import VueScroller from 'vue-scroller'
//Vue.use(VueScroller)
//import './common/stylus/index.scss'

//Vue.use相当于全局注册
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)


import Router from "./router/router.js"
import store from './store/index'

var router = new VueRouter({
	routes:Router.routes,
})

//router.afterEach(function () {
//	console.log(sessionStorage.getItem("faxianScroll"))
//	
//	console.log(document.getElementById("fanxian"))
//});

new Vue({
	router:router,
  	el: '#app',
  	store,
  	render: h => h(App)
})
