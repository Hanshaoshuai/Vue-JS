<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>债权融资</span>
			</div>
			<div class="box" ref="wrapper">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu">
					<div class="zhuying-heder"><font></font>请选择您的债权融资方式<!--<span>（移动端）</span>--></div>
					<div class="content-food" ref="foods">
						<ul>
							<li class="src1" ref="img1" index="img1" @click.stap="ZuLin('ZuLinQ','5')">
								<span>融资租赁</span><font class="img1"></font>
								<p>单笔资金高达：2.0122亿</p>
							</li>
							<li class="src2" ref="img2" index="img2" @click.stap="Zhiya('ZhiyaQ','4')">
								<span>股权质押</span><font></font>
								<p>质押率高达：2012</p>
							</li>
						</ul>
						<ul>
							<li class="src3" ref="img3" index="img3" @click.stap="Baoli('BaoliQ','8')">
								<span>保&nbsp;理</span><font></font>
								<p>折扣率高达：2012</p>
							</li>
							<li class="src4" ref="img4" index="img4" @click.stap="Gudong('GudongQ','9')">
								<span>股东借款</span><font></font>
								<p>借款高达：2012</p>
							</li>
						</ul>
						<ul>
							<li class="src5" ref="img5" index="img5" @click.stap="YinbaoHan('YinbaoHanQ','10')">
								<span>银行保函</span><font></font>
								<p>成本低至：2012</p>
							</li>
							<li  style="" class="src6" ref="img6" index="img6" @click.stap="Duanqi('DuanqiQ','11')">
								<span>短期拆借</span><font></font>
								<p>资金高达：2012</p>
							</li>
						</ul>
						<ul>
							<li class="src7" ref="img7" index="img7" @click.stap="YinshouQuan('YinshouXinQ','12')">
								<span>银行授信</span><font></font>
								<p>利率低至：2012</p>
							</li>
							<li  style="" class="src8" ref="img8" index="img8" @click.stap="Zengxin('ZengxinQ','13')">
								<span>大额增信</span><font></font>
								<p>起步金额1亿起</p>
							</li>
						</ul>
						<ul>
							<li style="display:none;" class="src9" ref="img9" index="img9" @click.stap="shuangchuangGo('ShuangChuangQ')">
								<span></span><font></font>
								<p>2012</p>
							</li>
							<li  style="" class="src10" ref="img10" index="img10" @click.stap="Jijin('JijinQ','14')">
								<span>产业发展基金</span><font></font>
								<p>杠杆高达1:3</p>
							</li>
						</ul>
					</div>
					<!--<jiLuqingdan ref="youhuiShow"></jiLuqingdan>-->
				</div>
				<div style="width:100%;height:0.6rem;"></div>
				<div class="butten">
					<span @click.stop="XiaYibu()">下一步</span>
				</div>
			</div>
			<div v-show="blocks" class="fanhui-right">
				<div class="contents">
					<div class="tops">
						<div class="tishixin">
							<span>亲！您还不是会员，请开通会员。</span>
							<font></font>
						</div>
						<div id="dcontent" class="dcontent">
							<p ref="info" id="info" style="display:none; padding: 0 1em;text-align:left;">
								支付通道信息：
							</p>
							<div style="display:none; padding: 0.5em 1em;"><hr color="#EEE"/></div>
							<p style="display:none; padding: 0 1em;text-align:left;">为DCloud提供的免费软件进行赞助吧。</p>
							<div class="shurujine" style="padding: 0 2em;text-align:left">
								会员金额：<input readOnly="true" ref="total" id="total" type="number" v-model="value"/> 元
							</div>
							<div ref="dcontent" class="zhifuFangshi">
								<!--<div class="button">支付宝支付</div>
								<div class="button">微信支付</div>-->
							</div>
						</div>
						<div ref="output" id="output" style="display:none;">
							Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。通过plus.share可获取社交分享管理对象。
						</div>
					</div>
					<div class="guanbi" @click.stop="guanbi()">取消</div>
				</div>
			</div>
			<!--<span class="loding" v-show="topStatus">
            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
          	</span>-->
			<!--<transition name="fade1">
				<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
			</transition>-->
			<router-view :token="token" :BiaoQian="BiaoQian" :type="type"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {common} from "../../../common/js/common.js";	//原生模块
//	import {zhifu} from "../../../common/js/ZhiFu.js";	//支付模块
	import { Indicator } from 'mint-ui';
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
//	import jiLuqingdan from "./jiLuQingdan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				token:"",
				BiaoQian:"",
				src:"",
				urlName:"ZuLinQ",
				type:"4",			//创建类型
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				
				
				data:[],
				x:'1',
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				boxUl:"",
				types:{
					type1:"DingzengZuoshi",
					type2:"DingzengZuoshi",
					type3:"ZhuanlaoGu1",
					type4:"ZhiYa1",
					type5:"ZuLin1",
					type7:"Diaoyan1"
				},
				XiangmuID:"",
				is_send:"",
				type1:"",
				none:false,
				zanWu:false,
				
				num:"",
				n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
				height:0,
				topBlock:false,
				page:1,
				tishis:false,
				jeiguo:"亲已经到底了",
				topStatus:false,
				tems:'',
				listlenght:-1,
				
				dcontent:"",
				value:0.1,
				blocks:false,
				dataS:{}
			}
		},
		mounted(){
//			console.log(this.$route.params['type'])
			this.token=this.$route.params['type'];
			this.$nextTick(function(){
				this.dcontent=this.$refs.dcontent;
			});
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
			},
			zhiDing(){		//返回顶部；
				this.$refs.wrapper.scrollTop=0;
			},
			zhifuMokuai(){	//支付模块
				this.blocks=true;
				this.zhifu(this.dcontent,this.$refs.info,this.value,URL.path1);
			},
			qingDingdan(type,w,id,PAYSERVER,value,pays){	//获取订单信息
				var datas = {
					token:localStorage.getItem("token"),//	token	是	[string]		
					terminalNo: 3,	
					money: this.value,	//金额[string]
					type: type			//支付类型
				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'pay/recharge',datas,{emulateJSON:true}).then(function(res){ //获取订单信息接口
					Indicator.close();
					console.log(res.body.data.order_id);	//会员订单id
					console.log(res.body.data.order_no);	//会员订单号
					this.dataS = {		//支付参数
						token: localStorage.getItem("token"),
						trade_no: res.body.data.order_no,	//会员订单号
						amount: value,	//金额[string]
						subject: '会员订单'
					};
					if(w){return;}//检查是否请求订单中
					if(id==='appleiap'){
						outSet('应用内支付');
						clicked('payment_iap.html');
						return;
					}
					outSet('----- 请求支付 -----');
					var url=PAYSERVER;
					var payUrl
					if(id=='alipay'){
						payUrl = URL.path1 + 'pay/AliSign';//支付宝接口
						console.log(payUrl)
					}else if(id=='wxpay'){
						payUrl = URL.path1 + 'wxpay/get_wxsign';//微信接口
						console.log(payUrl)
					}
					this.$http.post(payUrl,this.dataS,{emulateJSON:true}).then(function(res){	//支付接口调取
						console.log(res.body);
						plus.payment.request(pays[id], res.body, function(result) {		//调用原生支付API
//							return fun(result);
							console.log(result);
							plus.nativeUI.alert('您已成功支付'+value+'元，成为【企融直通车】会员','支付成功。',function(){
								back();
							},'会员支付');
						}, function(error) {
							console.log(error);
							plus.nativeUI.alert(payUrl, null, '支付失败：'+error.code);
						});
					},function(res){
						Indicator.close();
					    console.log(res);
					})
				},function(res){
					Indicator.close();
				    console.log(res);
				})
			},
			zhifu(dcontent,info,value,path1){
				console.log("开始链接")
				console.log(dcontent)
				console.log(info)
				console.log(value)
				console.log(path1);
				var that=this;
				var pays={};
				var w=null;
				var PAYSERVER='http://demo.dcloud.net.cn/payment/?payid=';
				function plusReady(){
					console.log("开始执行");
					// 获取支付通道
					plus.payment.getChannels(function(channels){
						console.log("支付通道信息");
						dcontent.innerHTML='';
						var content=dcontent;
			//			var content=document.getElementById('dcontent');
			//			var info=document.getElementById('info');
						var txt='支付通道信息：';
						var x=0;
						for(var i in channels){
							var channel=channels[i];
							if(channel.id=='qhpay'||channel.id=='qihoo'){	// 过滤掉不支持的支付通道：暂不支持360相关支付
								continue;
							}
							pays[channel.id]=channel;
							txt += 'id:'+channel.id+', ';
							txt += 'description:'+channel.description+', ';
							txt += 'serviceReady:'+channel.serviceReady+'； ';
							var de=document.createElement('div');
							var id=channel.id;
							de.setAttribute('class', 'button');
			//				de.setAttribute('onclick', 'pay(this.id)');
							de.id=channel.id;
							if(x==0){
								de.style.marginRight='0.2rem';
								x+=1;
							}
							de.style.width='1rem';
							de.style.lineHeight='0.4rem';
							de.style.fontSize='0.16rem';
							de.style.textAlign='center';
							de.style.borderRadius='6px';
							de.style.background="#ff7a59";
							de.style.color="#ffffff";
							de.onclick=function pay(){
								var id=this.id;
								var typeid
								if(id == 'alipay') {
									typeid = 2;
								} else if(id == 'wxpay') {
									typeid = 1;
								}
								that.qingDingdan(typeid,w,id,PAYSERVER,value,pays);		//获取订单信息
//								alert(id);
							}
							de.innerText=channel.description+'支付';
							content.appendChild(de);
							checkServices(channel);
						}
						info.innerText=txt;
					},function(e){
						console.log("获取支付通道失败")
						outLine('获取支付通道失败：'+e.message);
					});
				}
				document.addEventListener('plusready', plusReady(), false);
				// 检测是否安装支付服务
				function checkServices(pc){
					if(!pc.serviceReady){
						var txt=null;
						switch(pc.id){
							case 'alipay':
							txt='检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？';
							break;
							default:
							txt='系统未安装“'+pc.description+'”服务，无法完成支付，是否立即安装？';
							break;
						}
						plus.nativeUI.confirm(txt, function(e){
							if(e.index==0){
								pc.installService();
							}
						}, pc.description);
					}
				}
			},
			guanbi(){
				this.blocks=false;
			},
			ZuLin(name,type){
//				console.log(name)
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img1.getAttribute("index");
//				window.location.href="#/faxian/WoyaoRongzi/0/Dingzeng";
			},
			Zhiya(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img2.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Zuoshi";
			},
			Baoli(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img3.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhuanlaoGu";
			},
			Gudong(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img4.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhiYa";
			},
			YinbaoHan(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img5.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZuLin";
			},
			Duanqi(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img6.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/YanBao";
			},
			YinshouQuan(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img7.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ShuangChuang";
			},
			Zengxin(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img8.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			shuangchuangGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img9.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			Jijin(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img10.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			XiaYibu(){
				//判断是否是会员
//				var datas = {
//					token:localStorage.getItem("token"),//	token	是	[string]		
//					page:this.page,	//page	是	[string]		
//					size:20	//size	是	[string]
//				}
//				Indicator.open({spinnerType: 'fading-circle'});
//				this.$http.post(URL.path+'finance/creae_list',datas,{emulateJSON:true}).then(function(res){
//					Indicator.close();
//					console.log(res);
					window.location.href="#/ZhaiquanRukou/"+this.type+"/"+this.urlName;
//				},function(res){
//					Indicator.close();
//				    console.log(res.status);
//				})
//				this.zhifuMokuai();
				
				
			}
		},
		watch:{
			src:function(newVal,oldVal){
//				console.log(newVal)
//				console.log(this.$refs.foods.getElementsByTagName("ul")[0].getElementsByTagName("li"))
				var uls=this.$refs.foods.getElementsByTagName("ul")
				var x=uls.length;
				var y=2
				for(var i=0; i<x; i++){
					for(var z=0; z<2; z++){
						if(uls[i].getElementsByTagName("li")[z].getAttribute("index")==newVal){
//							console.log(uls[i].getElementsByTagName("li")[z])
							uls[i].getElementsByTagName("li")[z].style.border='0.01rem solid #ff7a59';
							uls[i].getElementsByTagName("li")[z].getElementsByTagName("font")[0].setAttribute("class","img1")
						}else{
							uls[i].getElementsByTagName("li")[z].style.border='0.01rem solid #ddddde';
							uls[i].getElementsByTagName("li")[z].getElementsByTagName("font")[0].setAttribute("class","")
						}
					}
				}
//				console.log(this.type)
			}
		},
		events:{
			
		},
		filters:{
//			formatDate(time){
//				let date = new Date(time);
//				return formatDate(date,'yyyy-MM-dd hh:mm');
//			}
		},
		updated(){
		},
		components:{
			box,
//			jiLuqingdan
//			fankuixinxi
		}
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active {
	  	transition: all .5s ease;
	}
	.fade-leave-active {
	  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.fade1-enter-active {
	  	transition: all .5s ease;
	}
	.fade1-leave-active {
	  	transition: all .5s ease;
	}
	.fade1-enter, .fade1-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.xiangmu{
		position:fixed;
		background:#fff;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:200;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:300;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding-left:0.16rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
		}
		.fanhui-right{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:1000;
			background:rgba(0,0,0,0.5);
			display:flex;
			align-content: center;
			justify-content: center;
			align-items: center;
			.contents{
				background:rgba(255,255,255,1);
				width:80%;
				height:60%;
				border-radius:12px;
				.tops{
					width:100%;
					height:80%;
					.tishixin{
						width:100%;
						height:56%;
						/*display:flex;
						align-content: center;
						justify-content: center;
						align-items: center;*/
						font-size:0.18rem;
						span{
							display:block;
							width:100%;
							height:0.7rem;
							line-height:0.7rem;
							text-align: center;
						}
						font{
							display:block;
							width:1.36rem;
							margin:0 auto;
							height:1rem;
							background-image:url("./img/timg1.png");
							background-size:100% 100%;
						}
					}
					.dcontent{
						width:100%;
						.shurujine{
							display:flex;
							align-content: center;
							justify-content: center;
							align-items: center;
							margin:0.2rem 0;
							font-size:0.16rem;
							#total{
								width:36%;
								background:none;
								text-align:center;
							}
						}
						.zhifuFangshi{
							width:100%;
							display:flex;
							align-content: center;
							justify-content: center;
							align-items: center;
							.button{
								width:1rem;
								line-height:0.4rem;
								border-radius:6px;
								text-align:center;
								font-size:0.16rem;
								background:#ff7a59;
								color:#ffffff;
								&:nth-child(1){
									margin-right:0.2rem;
								}
							}
						}
					}
				}
				.guanbi{
					width:1rem;
					height:0.4rem;
					color:#ffffff;
					border-radius:6px;
					font-size:0.18rem;
					display:flex;
					align-content: center;
					justify-content: center;
					align-items: center;
					background:#ff7a59;
					margin:0 auto;
				}
			}
		}
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.fankiu{
				position:relative;
				width:100%;
				.content-food{
					flex:1;
					padding:0.06rem 5.6% 0.1rem 5.6%;
					line-height:0.3rem;
					font-size:0.18rem;
					span{
						display:inline-block;
						font-weight:500;
						/*color:#000000;*/
						a{
							color:#fc9981;
						}
					}
					ul{
						width:100%;
						overflow:hidden;
						&:first-child{
							/*border:0.01rem solid #ff7a59;*/
						}
						li{
							width:48%;
							border-radius:0.04rem;
							font-size:0.22rem;
							color:#525252;
							display:inline-block;
							text-align:center;
							background:#fff;
							border:0.01rem solid #ddddde;
							/*border:0.005rem solid #ff7a59;*/
							box-sizing: border-box;
							height:0.95rem;
							line-height:0.72rem;
							margin:0.06rem 0;
							float:left;
							position:relative;
							box-sizing:border-box;
							&:last-child{
								float:right;
								margin-right:0;
							}
							font{
								display:inline-block;
								position:absolute;
								bottom:-0.01rem;
								right:-0.01rem;
								background-size:100% 100%;
								width:0.3rem;
								height:0.3rem;
							}
							.img1{
								background-image:url("./img/duihao.png");
							}
							p{
								position:absolute;
								left:0;
								bottom:0.2rem;
								width:100%;
								font-size:0.13rem;
								color:#ff7a59;
								line-height:0.13rem;
							}
						}
						.src1{
							border:0.01rem solid #ff7a59;
						}
						&:last-child{
							li{
								float:left;
							}
						}
					}
				}
				.sousuo-content{
					width:100%;
					background:#fff;
					.content-header{
						width:96%;
						margin:0 auto;
						padding:0.16rem 0;
						font-size:0.16rem;
						li{
							width:91.7%;
							margin:0 auto;
							color:#8c8c8c;
							.content-top{
								width:100%;
								height:0.22rem;
								display:flex;
								span{
									display:inline-block;
									width:0.8rem;
									&:first-child{
										color:#323232;
										font-size:0.18rem;
										flex:1;
									}
								}
								font{
									display:inline-block;
									width:0.5rem;
									font-size:0.12rem;
									color:#717070;
									line-height:0.18rem;
								}
								.texts{
									text-align:center;
								}
							}
							.content-bottom{
								span{
									font-size:0.12rem;
									color:#cfcfcf;
								}
							}
						}
					}
				}
				.times{
					width:100%;
					height:0.3rem;
					background:#fff;
					line-height:0.3rem;
					.times_1{
						display:inline-block;
						padding-left:0.2rem;
					}
					.text-center{
						display:inline-block;
						padding:0 0.08rem;
					}
					.times-name{
						float:right;
						margin-right:0.1rem;
					}
				}
				.tishi-bottom{
					position:absolute;
					left:0;
					right:0;
					bottom:0.04rem;
					width:92.5%;
					height:0.36rem;
					margin:0 auto;
					ul{
						width:100%;
						height:100%;
						display:flex;
						li{
							flex:1;
							height:0.2rem;
							&.tishi-center{
								width:0.57rem;
								line-height:0.36rem;
								text-align:center;
								font-size:0.12rem;
								color:#bcbcbc;
							}
						}
					}
				}
			}
			.zhuying{
				width:100%;
				.zhuying_1{
					width:89.5%;
					margin:0 auto;
					padding:0.1rem 0.09rem;
					font-size:0.1rem;
					background:#fff;
					/*border:0.005rem solid #ddddde;*/
					box-sizing:border-box;
					border-radius:0.1rem;
					.ferst{
						span{
							display:block;
							font-size:0.16rem;
							line-height:0.3rem;
							color:#b6b6b6;
							/*font{
								color:#fc9981;
							}*/
							a{
								color:#fc9981;
							}
						}
					}
					.last{
						padding:0.2rem;
					}
				}
				
			}
			.butten{
				position:absolute;
				bottom:0;
				left:0;
				width:100%;
				height:0.58rem;
				background:#ff7a59;
				margin-top:0.08rem;
				text-align:center;
				line-height:0.58rem;
				span{
					display:inline-block;
					width:100%;
					font-size:0.2rem;
					color:#fff;
				}
			}
		}
		.loding{
			position:fixed;
			bottom:0.0rem;
			left:0;
			margin-bottom:0.12rem;
			width:100%;
			display: inline-block;
			text-align:center;
			display:flex;
			-webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;
		}
		.zhuying-heder{
			padding:0.16rem 0.2rem 0.08rem 0.2rem;
			line-height:0.2rem;
			font-size:0.18rem;
			/*font-weight:600;*/
			font{
				display:inline-block;
				width:0.2rem;
				height:0.2rem;
				background-image:url("./img/zhongdian.png");
				background-size:100% 100%;
				vertical-align:top;
				margin:-0.01rem 0.04rem 0 0;
			}
			span{
				display:inline-block;
				color:#fc9981;
				/*font-weight:600;*/
			}
		}
	}
</style>


