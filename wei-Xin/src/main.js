import Vue from "vue";
// import qs from "qs";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCropper from 'vue-cropper'//图片剪切
import VueQuickCropper from 'vue-quick-cropper';
// import MakePy from MakePy.js;


// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)


import '../public/common.css' /*引入公共样式*/
// import Myfun from "../public/index.js";
// import Common from "../public/common.js";
// Vue.prototype.$Myfun = Myfun;
// Vue.prototype.$Common = Common;

// Vue.prototype.$axios = axios; //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = qs; //全局注册，使用方法为:this.qs

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_API;
axios.defaults.withCredentials = true;

// console.log(process.env.NODE_ENV);

Vue.use(VueAxios, axios,VueCropper, VueQuickCropper);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
