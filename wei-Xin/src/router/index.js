import Vue from "vue";
import VueRouter from "vue-router";
import Wx from "../views/Wx.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Wx",
    meta: { title: "Wx", index: 1}, // 坑
    component: Wx
  },
  {
    path: "/tx",
    name: "Tx",
    meta: { title: "Tx", index: 2},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tx.vue")
  },
  {
    path: "/fx",
    name: "Fx",
    meta: { title: "Fx", index: 3},
    component: () =>
      import("../views/Fx.vue")
  },
  {
    path: "/wd",
    name: "Wd",
    meta: { title: "Wd", index: 4},
    component: () =>
      import("../views/Wd.vue"),
      // children: [
      //   {
      //     path: 'payment/:userId',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      //     name: 'Payment',
      //     component:() =>
      //     import("../views/subpage/Payment.vue")
      //   },
      // ]
  },
  {
    path: '/payment/:userId',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
    meta: { title: "Payment", index: 5},
    name: 'Payment',
    component:() =>
    import("../views/subpage/Payment.vue")
  },
  {
    path: "/wallet/:userId",
    name: "Wallet",
    meta: { title: "Wallet", index: 6},
    component: () =>
      import("../views/subpage/Wallet.vue")
  },
  {
    path: "/smallChange/:userId",
    name: "SmallChange",
    meta: { title: "SmallChange", index: 7},
    component: () =>
      import("../views/subpage/SmallChange.vue")
  },
  {
    path: "/setUp/:userId",
    name: "SetUp",
    meta: { title: "SetUp", index: 8},
    component: () =>
      import("../views/subpage/SetUp.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  // 注释自己设置的mode:'histroy'属性。
  // 当然，这里并不是说不能打开这个模式，这个模式需要后端设置的配合，详情可以参考vue-router文档
  base: process.env.BASE_URL,
  
  // mode:'hash',//默认是hash模式   且有history
  // scrollBehavior(to,from,savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。监听路由
  //     // console.log(to) // to：要进入的目标路由对象，到哪里去
  //     // console.log(from) // from：离开的路由对象，哪里来
  //     // console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
  //     if(savePosition){
  //         return savePosition;
  //     }else{
  //         return {
  //             x: 0,
  //             y: 0
  //         }
  //     }
  // },
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
