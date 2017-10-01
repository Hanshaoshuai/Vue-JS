import Faxian from "../components/faxian/faxian.vue"
	import Sousuo from "../components/SouSuo/SouSuo.vue"
	import FankuiXinxi from "../components/faxian/Fankui/FankuiXinxi.vue"
	
	import WoyaoRongzi from "../components/faxian/WoyaoRongzi/WoyaoRongzi.vue"
		import Diaoyan from "../components/faxian/WoyaoRongzi/RongziLeixing/Diaoyan.vue"
		import Dingzeng from "../components/faxian/WoyaoRongzi/RongziLeixing/Dingzeng.vue"
		import Zuoshi from "../components/faxian/WoyaoRongzi/RongziLeixing/Zuoshi.vue"
		import ShuangChuang from "../components/faxian/WoyaoRongzi/RongziLeixing/ShuangChuang.vue"
		import ZhiYa from "../components/faxian/WoyaoRongzi/RongziLeixing/ZhiYa.vue"
		import ZhuanlaoGu from "../components/faxian/WoyaoRongzi/RongziLeixing/ZhuanlaoGu.vue"
		import ZuLin from "../components/faxian/WoyaoRongzi/RongziLeixing/ZuLin.vue"
		import YanBao from "../components/faxian/WoyaoRongzi/RongziLeixing/YanBao.vue"


import Shendu from "../components/shendu/shendu.vue"
	import WenzhangGengduo from "../components/shendu/WenzhangGengduo/gengduo.vue"
	import XianxiaWenzhang from "../components/shendu/WenzhangYuedu/XianxiaWenzhang.vue"
	
	import XianxiaGengduo from "../components/shendu/XianxiaHuodong/XianxiaGengduo.vue"
	import PreIPO from "../components/shendu/XianxiaHuodong/XianxiaWenzhang.vue"
	
	import PeixunGengduo from "../components/shendu/PeixunZixun/PeixunGengduo.vue"
	import PeixunWenzhang from "../components/shendu/WenzhangYuedu/PeixunWenzhang.vue"
	import IPO from "../components/shendu/PeixunZixun/PeixunWenzhang.vue"


import Wode from "../components/wode/wode.vue"
	import Jilu from "../components/wode/RongziJilu/jiLu.vue"
	import Baoming from "../components/wode/WoyaoBaoming/Baoming.vue"
	import ZiliaoA from "../components/wode/GerenZiliao/GerenZiliaoA.vue"
	import ZiliaoB from "../components/wode/GerenZiliao/GerenZiliaoB.vue"
	import ZiliaoC from "../components/wode/GerenZiliao/GerenZiliaoC.vue"
	import ZiliaoD from "../components/wode/GerenZiliao/GerenZiliaoD.vue"
	import ZiliaoE from "../components/wode/GerenZiliao/GerenZiliaoE.vue"
	import ZiliaoF from "../components/wode/GerenZiliao/GerenZiliaoF.vue"
	import ZiliaoG from "../components/wode/GerenZiliao/GerenZiliaoG.vue"
	import ZiliaoH from "../components/wode/GerenZiliao/GerenZiliaoH.vue"
	import Gangwei from "../components/wode/GangweiBiangeng/Gangwei.vue"
	import Shezhi from "../components/wode/Shezhi/Shezhi.vue"


import ZhuCe from "../components/ZhuCe/ZhuCe0.vue"
	import ZhuCe1 from "../components/ZhuCe/ZhuCe1.vue"
		import Type0 from "../components/ZhuCe/type0.vue"
		import Type1 from "../components/ZhuCe/type1.vue"
		import Type2 from "../components/ZhuCe/type2.vue"
		import Type3 from "../components/ZhuCe/type3.vue"
		import Type4 from "../components/ZhuCe/type4.vue"
		import Type5 from "../components/ZhuCe/type5.vue"


import Denglu from "../components/DengLu/DengLu.vue"
import Xeiyi from "../components/faxian/WoyaoRongzi/PipeiTouziRen/QuedingXeiyi.vue"
	import TouDi from "../components/faxian/WoyaoRongzi/PipeiTouziRen/TouDi.vue"
	
	

export default ({
  routes: [
    {path: '/faxian',component: Faxian,
    	children:[
			{
				path:"WoyaoRongzi/:classid",component:WoyaoRongzi,
				children:[
					{
						path:"Diaoyan",component:Diaoyan
					},
					{
						path:"Dingzeng",component:Dingzeng
					},
					{
						path:"Zuoshi",component:Zuoshi
					},
					{
						path:"ShuangChuang",component:ShuangChuang
					},
					{
						path:"ZhiYa",component:ZhiYa
					},
					{
						path:"ZhuanlaoGu",component:ZhuanlaoGu
					},
					{
						path:"ZuLin",component:ZuLin
					},
					{
						path:"YanBao",component:YanBao
					}
				]
			}
		]
    },
    {path: '/shendu',component: Shendu,
    	children:[
				{
					path:"WenzhangGengduo/:classid",component:WenzhangGengduo
				},
				{
					path:"XianxiaGengduo/:classid",component:XianxiaGengduo,
						children:[
							{
								path:"XianxiaWenzhang",component:XianxiaWenzhang
							}
						]
				},
				{
					path:"PreIpo/:classid",component:PreIPO
				},
				{
					path:"PeixunGengduo/:classid",component:PeixunGengduo,
						children:[
							{
								path:"PeixunWenzhang",component:PeixunWenzhang
							}
						]
				},
				{
					path:"IPO/:classid",component:IPO
				}
			]
    },
    {path: '/wode',component: Wode,
    	children:[
    		{
					path:"jilu/:classid",component:Jilu,
						children:[
				    		{
								path:"jilu",component:Jilu
							}
				    	]
				},
				{
					path:"baoming/:classid",component:Baoming,
						children:[
							{
								path:"PreIpo",component:PreIPO
							},
							{
								path:"Ipo",component:IPO
							}
						]
				},
				{
					path:"ziliaoA/:classid",component:ZiliaoA
				},
				{
					path:"ziliaoB/:classid",component:ZiliaoB
				},
				{
					path:"ziliaoC/:classid",component:ZiliaoC
				},
				{
					path:"ziliaoD/:classid",component:ZiliaoD
				},
				{
					path:"ziliaoE/:classid",component:ZiliaoE
				},
				{
					path:"ziliaoF/:classid",component:ZiliaoF
				},
				{
					path:"ziliaoG/:classid",component:ZiliaoG
				},
				{
					path:"ziliaoH/:classid",component:ZiliaoH
				},
				{
					path:"gangwei/:classid",component:Gangwei
				},
				{
					path:"shezhi/:classid",component:Shezhi
				}
    	]
    },
    {path: '/zhuce',component: ZhuCe,
      	children:[
      		{
				path:"zhuceX/:classid",component:ZhuCe1,
					children:[
						{
							path:"type0/:classid",component:Type0
						},
						{
							path:"type1/:classid",component:Type1
						},
						{
							path:"type2/:classid",component:Type2
						},
						{
							path:"type3/:classid",component:Type3
						},
						{
							path:"type4/:classid",component:Type4
						},
						{
							path:"type5/:classid",component:Type5
						}
					]
			}
		]
   	},
   	{path: '/denglu',component: Denglu},
   	{path: '/sousuo',component: Sousuo},
   	{path: '/fankuixinxi/:token/:to_id',component: FankuiXinxi},
   	{path: '/Xeiyi/:classid',component: Xeiyi,
   		children:[
    		{
				path:"TouDi",component:TouDi
			}
    	]
   	},
    {path:"*",redirect:"/faxian"}
  ]
})
