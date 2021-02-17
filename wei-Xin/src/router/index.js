import Vue from "vue";
import VueRouter from "vue-router";
import Wx from "../views/Wx.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Wx",
    meta: { title: "Wx" }, // 坑
    component: Wx
  },
  {
    path: "/tx",
    name: "Tx",
    meta: { title: "Tx" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tx.vue")
  },
  {
    path: "/fx",
    name: "Fx",
    meta: { title: "Fx" },
    component: () =>
      import("../views/Fx.vue")
  },
  {
    path: "/wd",
    name: "Wd",
    meta: { title: "Wd" },
    component: () =>
      import("../views/Wd.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  // 注释自己设置的mode:'histroy'属性。
  // 当然，这里并不是说不能打开这个模式，这个模式需要后端设置的配合，详情可以参考vue-router文档
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 坑
  /* 路由发生变化修改页面 title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
