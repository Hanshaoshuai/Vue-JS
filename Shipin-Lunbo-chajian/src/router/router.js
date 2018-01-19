import Goods from "../components/goods/goods.vue"
import Ratings from "../components/ratings/ratings.vue"
import Seller from "../components/seller/seller.vue"

import lunBo from "../components/lunBo.vue"
import lunBo1 from "../components/lunBo1.vue"
import lunBo2 from "../components/lunBo2.vue"
import lunBo3 from "../components/lunBo3.vue"



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
    {
      path: '/lunBo',
//    name: 'Goods',
      component: lunBo
    },
    {
      path: '/lunBo1',
//    name: 'Goods',
      component: lunBo1
    },
    {
      path: '/lunBo2',
//    name: 'Goods',
      component: lunBo2
    },
    {
      path: '/lunBo3',
//    name: 'Goods',
      component: lunBo3
    },
//  {path:"*",redirect:"/goods"}
  ]
})
