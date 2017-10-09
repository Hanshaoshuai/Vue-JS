import Faxian from "../components/faxian/faxian.vue"
	import Yijian from "../components/faxian/yijian.vue"
	import DingzengZhaiyao from "../components/faxian/DingzengZhaiyao.vue"
	import GuquanZhaiyao from "../components/faxian/GuquanZhaiyao.vue"
	import Fankui from "../components/faxian/Fankui/Fankui.vue"
	import FankuiXinxi from "../components/faxian/Fankui/FankuiXinxi.vue"
	import YifouXiangmu from "../components/faxian/XinxiangMu/YifouXiangmu.vue"
	import XinxiangMu from "../components/faxian/XinxiangMu/XinxiangMu.vue"
		import XiangmuXiangqing from "../components/faxian/XinxiangMu/XiangmuXiangqing.vue"
		import BP from "../components/faxian/XinxiangMu/BP.vue"
	
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
		import DingzengZuoshi from "../components/wode/RongziJilu/DingzengZuoshi.vue"
		import ZhiYa1 from "../components/wode/RongziJilu/ZhiYa.vue"
		import ZhuanlaoGu1 from "../components/wode/RongziJilu/ZhuanlaoGu.vue"
		import ZuLin1 from "../components/wode/RongziJilu/ZuLin.vue"
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
	import RongziBeian from "../components/wode/RongziBeian/RongziBeian.vue"
		import BeianXiangqing from "../components/wode/RongziBeian/BeianXiangqing.vue"
		import XinzengQiye from "../components/wode/RongziBeian/XinzengQiye.vue"
		import QiyeBeianXiang from "../components/wode/RongziBeian/QiyeBeianXiang.vue"
		import TianQiBeian from "../components/wode/RongziBeian/TianQiBeian.vue"


import ZhuCe from "../components/ZhuCe/ZhuCe0.vue"
	import ZhuCe1 from "../components/ZhuCe/ZhuCe1.vue"
		import Type2 from "../components/ZhuCe/type2.vue"
		import Type3 from "../components/ZhuCe/type3.vue"
		import Type4 from "../components/ZhuCe/type4.vue"
		import Guquan from "../components/ZhuCe/Guquan/Guquan.vue"
		import Zaiquan from "../components/ZhuCe/Zaiquan/Zaiquan.vue"
		import Guzhai from "../components/ZhuCe/Guzhai/Guzhai.vue"
			import Guzhaiquan from "../components/ZhuCe/Guzhai/Guzhaiquan.vue"


import Denglu from "../components/DengLu/DengLu.vue"
import wangjiMima1 from "../components/DengLu/wangjiMima1.vue"
	import wangjiMima2 from "../components/DengLu/wangjiMima2.vue"
import Xeiyi from "../components/faxian/WoyaoRongzi/PipeiTouziRen/QuedingXeiyi.vue"
	import TouDi from "../components/faxian/WoyaoRongzi/PipeiTouziRen/TouDi.vue"
	
	
import Sousuo from "../components/SouSuo/SouSuo.vue"
	import SousuoLeixing from "../components/SouSuo/ShenfenLeixing/TypeH.vue"


export default ({
  routes: [
    {path: '/faxian',component: Faxian,
    	children:[
			{
				path:"WoyaoRongzi/:type",component:WoyaoRongzi,
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
			},
			{
				path:"XinxiangMu/:token",component:XinxiangMu,
					children:[
						{
							path:"XiangmuXiangqing/:XiangmuID",component:XiangmuXiangqing,
								children:[
									{
										path:"BP",component:BP
									}
								]
						}
					]
			},
			{
				path:"YifouXiangmu/:token",component:YifouXiangmu,
					children:[
						{
							path:"XiangmuXiangqing/:XiangmuID",component:XiangmuXiangqing
						}
					]
			},
			{
				path:"Fankui/:token",component: Fankui
			},
			{
				path:"DingzengZhaiyao/:token/:XiangmuID",component: DingzengZhaiyao
			},
			{
				path:"GuquanZhaiyao/:token/:XiangmuID",component: GuquanZhaiyao
			},
			{
				path:"Yijian/:token",component: Yijian
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
								path:"DingzengZuoshi",component:DingzengZuoshi
							},
							{
								path:"ZhiYa1",component:ZhiYa1
							},
							{
								path:"ZhuanlaoGu1",component:ZhuanlaoGu1
							},
							{
								path:"ZuLin1",component:ZuLin1
							},
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
					path:"ziliaoA/:token",component:ZiliaoA
				},
				{
					path:"ziliaoB/:token",component:ZiliaoB
				},
				{
					path:"ziliaoC/:token",component:ZiliaoC
				},
				{
					path:"ziliaoD/:token",component:ZiliaoD
				},
				{
					path:"ziliaoE/:token",component:ZiliaoE
				},
				{
					path:"ziliaoF/:token",component:ZiliaoF
				},
				{
					path:"ziliaoG/:token",component:ZiliaoG
				},
				{
					path:"ziliaoH/:token",component:ZiliaoH
				},
				{
					path:"gangwei/:classid",component:Gangwei
				},
				{
					path:"shezhi/:classid",component:Shezhi
				},
				{
					path:"RongziBeian/:token",component:RongziBeian,
						children:[
				    		{
								path:"BeianXiangqing/:type",component:BeianXiangqing
							},
							{
								path:"XinzengQiye",component:XinzengQiye
							},
							{
								path:"QiyeBeianXiang/:type",component:QiyeBeianXiang
							},
							{
								path:"TianQiBeian",component:TianQiBeian
							}
				    	]
				}
    	]
    },
    {path: '/zhuce',component: ZhuCe,
      	children:[
      		{
				path:"ZhuCe1/:token",component:ZhuCe1,
					children:[
						{
							path:"type2",component:Type2
						},
						{
							path:"type3",component:Type3
						},
						{
							path:"type4",component:Type4
						},
						{
							path:"Guquan",component:Guquan
						},
						{
							path:"Zaiquan",component:Zaiquan
						},
						{
							path:"Guzhai",component:Guzhai,
							children:[
					    		{
									path:"Guzhaiquan",component:Guzhaiquan
								}
					    	]
						}
					]
			}
		]
   	},
   	{path: '/denglu',component: Denglu},
   	{path: '/wangjiMima1',component: wangjiMima1,
   		children:[
    		{
				path:"wangjiMima2",component:wangjiMima2
			}
    	]
   	},
   	{path: '/sousuo/:token',component: Sousuo,
   		children:[
    		{
				path:"SousuoLeixing",component:SousuoLeixing
			}
    	]
   	},
   	
   	{path: '/fankuixinxi/:token/:to_id/:type',component: FankuiXinxi},
   	{path: '/Xeiyi/:token/:uID/:type/:XiangmuID',component: Xeiyi,
   		children:[
    		{
				path:"TouDi",component:TouDi
			}
    	]
   	},
    {path:"*",redirect:"/faxian"}
  ]
})
