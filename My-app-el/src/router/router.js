import Goods from "../components/goods/goods.vue"
import Ratings from "../components/ratings/ratings.vue"
import Seller from "../components/seller/seller.vue"



export default ({
  routes: [
    {
      path: '/goods',
//    name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
//    name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
//    name: 'Seller',
      component: Seller
    },
    {path:"*",redirect:"/goods"}
  ]
})
