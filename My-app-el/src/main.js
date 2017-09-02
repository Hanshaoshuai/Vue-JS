import Vue from 'vue'
import VueRouter from 'vue-router'
//通过resoutce实现前后端数据交互
import VueResource from "vue-resource"
import App from './App.vue'


//import './common/stylus/index.scss'

//Vue.use相当于全局注册
Vue.use(VueRouter)
Vue.use(VueResource)


import Router from "./router/router.js"

const router = new VueRouter({
	routes:Router.routes,
})

new Vue({
	router:router,
  	el: '#app',
  	render: h => h(App)
})
