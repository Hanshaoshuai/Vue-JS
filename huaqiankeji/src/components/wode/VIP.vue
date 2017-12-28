<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="yijianHind()"><img src="./img/back.png"/></span>
					<span>我的钱包</span>
					<div class="fanhui-right">
						<div @click.stop="Mingxi()">
							<font>钱包明细</font>
						</div>
					</div>
				</div>
			</div>
			<div class="wenzhang-list">
				<div class="my-wallet-content">
					<div class="my-wallet-icon"></div>
					<div class="my-wallet-money">{{balance}}</div>
					<div class="my-wallet-tit">我的零钱</div>
				</div>
				<div @click.stop="Tixian()" class="btn my-wallet-withdrawals">提现</div>
				<div @click.stop="Chongzhi()" class="btn my-wallet-recharge">充值</div>
			</div>
			<div v-show="blocks" class="fanhui-right1">
				<div class="contents">
					<div class="tops">
						<div class="tishixin">
							<span>开通VIP会员</span>
							<font></font>
						</div>
						<div id="dcontent" class="dcontent">
							<p ref="info" id="info" style="display:none; padding: 0 1em;text-align:left;">
								支付通道信息：
							</p>
							<div style="display:none; padding: 0.5em 1em;"><hr color="#EEE"/></div>
							<p style="display:none; padding: 0 1em;text-align:left;">为DCloud提供的免费软件进行赞助吧。</p>
							<div class="shurujine" style="padding: 0 2em;text-align:left">
								VIP会员金额：<input readOnly="true" ref="total" id="total" type="number" v-model="value"/> 元
							</div>
							<!--<div ref="dcontent" class="zhifuFangshi">
								<div class="button">支付宝支付</div>
								<div class="button">微信支付</div>
							</div>-->
							<div @click.stop="xiaoShi()" ref="xianShi" v-show="onlyContent1" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);">
							    <transition name="fade1">
								    <div v-show="onlyContent2" class="loadEffect" ref="dcontent">
								    	<!--<div class="Zfirst border-bottom">请选择您的支付方式</div>-->
										<!--<div class="button border-bottom">支付宝支付</div>
										<div class="button">微信支付</div>-->
									</div>	
								</transition>
							</div>
						</div>
						<div ref="output" id="output" style="display:none;">
							Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。通过plus.share可获取社交分享管理对象。
						</div>
					</div>
					<div class="guanbi">
						<div @click.stop="Xuanzhifu()" class="button">确定</div>
						<div @click.stop="guanbi()" class="button">取消</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import {common} from "../../common/js/common.js";	//原生模块
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../box.vue";
	import { Indicator } from 'mint-ui';
	
	export default {
		props:{
//			token:{
//				type:Object
//			}
		},
		data () {
			return {
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				
				dcontent:"",
				value:0.1,
				blocks:false,
				dataS:{},
				onlyContent1:false,
				onlyContent2:false,
				balance:0.00
			}
		},
		mounted(){
			this.token=this.$route.params['type'];
			this.shuaXin();
		},
		activated(){
			this.shuaXin();
		},
		methods:{
			yijianHind(){
				history.go(-1);
			},
			Mingxi(){
				window.location.href="#/QianbaoMingxi";
			},
			Tixian(){
				window.location.href="#/Tixian";
			},
			Chongzhi(){
				this.blocks=true;
			},
			shuaXin(){
				var datas = {
					token:localStorage.getItem("token"),//	token	是	[string]		
					terminalNo: 3,	
				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'account/info',datas,{emulateJSON:true}).then(function(res){ //获取订单信息接口
	//				console.log(res);
					Indicator.close();
					this.balance=res.body.data.balance;
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
				this.$nextTick(function(){
					this.dcontent=this.$refs.dcontent;
				});
			},
			xiaoShi(){
				this.onlyContent1=false;
				this.onlyContent2=false;
			},
			guanbi(){
				this.blocks=false;
				this.onlyContent1=false;
				this.onlyContent2=false;
			},
			Xuanzhifu(){
				this.onlyContent1=true;
				this.onlyContent2=true;
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
						subject: 'VIP会员订单'
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
							plus.nativeUI.alert('您已成功支付'+value+'元，成为【企融直通车】VIP会员','支付成功。',function(){
								back();
							},'VIP会员支付');
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
						dcontent.innerHTML='<div style="color:#888;background:#ffffff;" class="Zfirst border-bottom">请选择您的支付方式</div>';
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
								de.setAttribute('class', 'button border-bottom');
							}
							if(x==1){
								de.style.borderRadius="0rem 0 0.06rem 0.06rem";
							}
//							de.style.width='1rem';
//							de.style.lineHeight='0.4rem';
//							de.style.fontSize='0.16rem';
//							de.style.textAlign='center';
//							de.style.borderRadius='6px';
							de.style.background="#ffffff";
//							de.style.color="#ffffff";
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
							if(x==1){
								var de=document.createElement('div');
								de.setAttribute('class', 'button');
								de.style.background="#ffffff";
								de.style.borderRadius="0.06rem";
								de.style.marginBottom="0.1rem";
								de.style.fontWeight='bold';
								de.style.marginTop="0.1rem";
								de.innerText='取消';
								de.onclick=function pay(){
									that.blocks=false;
								}
								content.appendChild(de);
							}
							checkServices(channel);
							x=1;
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
//			
		},
		components:{
			box,
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
	  	transform: translateY(4rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.xiangmu{
		position:fixed;
		background:#f5f5f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:300;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:110;
		    .home-search {
			    height: 100%;
			    line-height:0.45rem;
			    font-size: 0.2rem;
			    text-align: center;
			    color:#fff;
				.fanhui-butten{
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
			    .fanhui-right{
			    	position:absolute;
			    	right:0.2rem;
			    	top:0;
			    	font-size: 0.16rem;
			    	font{
			    		display:inline-block;
			    		height:0.22rem;
			    	}
			    }
			}
		}
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			/*background:#fff;*/
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.my-wallet-content {
			  	width: 100%;
			  	height: 2.3rem;
			  	background: url('./img/bgbg.png') no-repeat;
			  	background-size: 100% 100%;
			  	display: -webkit-box;
			  	display: -ms-flexbox;
			  	display: flex;
			  	-webkit-box-orient: vertical;
			  	-webkit-box-direction: normal;
			  	-ms-flex-direction: column;
			  	flex-direction: column;
			  	-webkit-box-align: center;
			  	-ms-flex-align: center;
			  	align-items: center;
			  	padding-top: 1rem;
			}
			.my-wallet-detail {
			  	height: 44px;
			  	line-height: 44px;
			  	color: #fff;
			  	font-size: 17px;
			  	position: relative;
			  	z-index: 2;
			}
			.mui-bar-nav.mui-bar .mui-icon {
			  	position: relative;
			  	z-index: 2;
			}
			.my-wallet-icon {
			  	width: 0.58rem;
			  	height: 0.58rem;
			  	background: url('./img/yuan.png') no-repeat;
			  	background-size: contain;
			}
			.my-wallet-money {
			  	font-size: 0.5rem;
			  	color: #fff;
			  	line-height: 0.5rem;
			  	font-weight: bold;
			  	margin-top: 0.16rem;
			}
			.my-wallet-tit {
			  	font-size: 0.18rem;
			  	color: #fff;
			  	line-height: 1;
			  	margin-top: .08rem;
			}
			.my-wallet-withdrawals {
				width: 92%;
  				height: 0.45rem;
  				font-size: 0.2rem;
  				text-align: center;
  				line-height: 0.45rem;
				border-radius: 0.04rem;
				border:1px solid #cfcfcf;
				box-sizing: border-box;
				background: #fff;
				color: #333;
				margin: .25rem auto 0;
			}
			.my-wallet-recharge {
				width: 92%;
  				height: 0.45rem;
  				font-size: 0.2rem;
  				text-align: center;
  				line-height: 0.45rem;
				border-radius: 0.04rem;
				/*border:1px solid #cfcfcf;
				box-sizing: border-box;*/
			  	background: #ff7a59;
			  	color: #fff;
			  	margin: 0.25rem auto 0;
			}
		}
		.fanhui-right1{
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
						height:68%;
						/*display:flex;
						align-content: center;
						justify-content: center;
						align-items: center;*/
						font-size:0.18rem;
						span{
							display:block;
							width:100%;
							height:0.8rem;
							line-height:0.8rem;
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
							font-size:0.17rem;
							#total{
								width:36%;
								color:#2abdfc;
								font-size:0.19rem;
								background:none;
								text-align:center;
							}
						}
						/*.zhifuFangshi{
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
						}*/
						.loding{
							position:relative;
							.loadEffect{
					            width: 96%;
					            text-align:center;
					            position: absolute;
					            left:2%;
					            bottom:0;
					            line-height: 0.5rem;
					            font-size: 0.16rem;
					            border-radius:0.06rem;
					            overflow:hidden;
					            /*background: #fff;*/
					            .Zfirst{
					            	font-size: 0.18rem;
					            	color:#888;
					            }
					        }
					    }
					}
				}
				/*.guanbi{
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
				}*/
				.guanbi{
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
						font-size:0.18rem;
						background:#ff7a59;
						color:#ffffff;
						&:nth-child(1){
							margin-right:0.2rem;
						}
					}
				}
			}
		}
	}
</style>


