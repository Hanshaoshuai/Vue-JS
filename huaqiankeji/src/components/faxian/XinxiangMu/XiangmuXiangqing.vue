<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header"></div>
			<div class="header-content" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>项目详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="fankiu border">
					<div class="content-food">
						<span class="laizi">来自：</span>
						<img class="border" src="" alt="" />
						<span>&nbsp;王美丽&nbsp;</span>
						<font class="bbb border-left"></font>
						<span>投资经理</span>
						<span>&nbsp;&nbsp;董秘</span>
						<div class="tousu"><span>投诉</span></div>
					</div>
				</div>
				<div class="tishi-bottom">
					<div class="border">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">
								<div class="content-heder">
									<span>天天</span>
									<span class="text-center">54587561</span>
									<span>&nbsp;定增</span>
								</div>
							</li>
							<li class="border-bottom"></li>
						</ul>
						<div class="zhuying_1">
							<div class="ferst"><span></span>项目推荐</div>
							<div class="last">
								<p>资经理资经理资主营业经理主营业资经理资主营业经理资经理资经理</p>
							</div>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>经营业绩</div>
						<div class="last">
							<p>上一财年：营收&nbsp;<span>221亿</span>&nbsp;&nbsp;净利润&nbsp;<span>12万</span></p>
							<p>今年预计：营收&nbsp;<span>12亿</span>&nbsp;&nbsp;净利润&nbsp;<span>1221万</span></p>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>融资计划</div>
						<div class="last">
							<p>融资总额：<span>245万</span></p>
							<p>投前估值：<span>244万</span></p>
						</div>
					</div>
				</div>
				<div class="border aaa">
					<div class="content-header" @click.stap="chakanBA()">
						<span>查看商业计划书（BP）</span>
						<font></font>
					</div>
					<div class="content-header" @click.stap="xiangguan()">
						<span>查看公司相关研报</span>
						<font></font>
					</div>
				</div>
				<div class="times border">
					<span class="text-center">1小时前</span>
					<span>发布</span>
					<div class="times-name">
						<font></font>
						<span class="text-center">剩余有效期{{genjin}}</span>
					</div>
				</div>
				<box></box>
				<div class="butten">
					<div class="tousu"><span>保密信息，禁止传播</span></div>
					<ul>
						<li @click.stap="liuYanTo()"><span :class="liuYans"></span><p>留言询问</p></li>
						<li @click.stap="jiaoHuanTo()"><span :class="jiaoHuans"></span><p>换名片</p></li>
					</ul>
					<!--<ul>-->
						<!--<li><span @click.stop="touSu()">投诉</span></li>-->
						<!--<li><span @click.stop="genJin()">跟进</span></li>-->
						<!--<li><span @click.stop="jiaoHuan()">换名片</span></li>
						<li><span @click.stop="baoMing()">我报名</span></li>-->
						<!--<li><span @click.stop="buGen()">暂不跟进</span></li>-->
						<!--<li><span @click.stop="liuYan()">留言询问</span></li>-->
					<!--</ul>-->
				</div>
			</div>
			<div class="baoming border-top">
				<span class="border-right" :class="butenLeft" @click.stap="genJin()">跟进</span>
				<span :class="butenRight" @click.stap="buGen()">暂不跟进</span>
				<!--<span class="border-right" :class="butenLeft" @click.stap="genJin()">我要报名</span>
				<span :class="butenRight" @click.stap="buGen()">不参加</span>-->
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import Vue from 'vue'
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import tishi from "../../Tishi.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
			token:{}
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				wanchengDu:"1",   //个人资料完成度低于80%要提示    调用 tishiBlock();
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
//				showFlag:false,
				tucaoShow:false,
				liuYans:"",
				jiaoHuans:"",
				butenLeft:"butenLeft",
				butenRight:"",
				xingXi:{			//给下级提示组件要传的参数
					text:"亲，您的个人信息完成的低于80%，请前往完善资料。",
					x:"不再提醒",
					y:"确定",
					m:false,
					u:true
				},
				content:"xiangmuXiangqing",			//给下级要传的参数
				mingPian:"huanQu",
				types:"0"
			}
		},
		methods:{
			yijianHind(){
				this.tucaoShow=false;
			},
			xiangqingBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYanTo(){
				if(this.types==1){			//跳转到留言页面
					window.location.href="#/fankuixinxi/"+this.token+"/12";
				}
//				this.liuYans="liuYan";
			},
			jiaoHuanTo(){
				if(this.types==1){				//换取名片申请提示
					var datas={
						token:this.token,		//换名片接口
						to_id:"14",			//接收方id
						item_id:"25"							//项目id
					}
					console.log(datas)
					this.$http.post(URL.path+'chatcomment/get_card',datas,{emulateJSON:true}).then(function(res){
						var data=res
						console.log("换名片申请成功"+res);
						this.xingXi.text="您已申请向对方换取名片，请注意查收..."
						this.$refs.tishiShow.tishiBlock(this.mingPian,this.token);//CanShu是下级要传的参数
					},function(res){
					    console.log(res);
					    this.xingXi.text="您申请向对方换取名片失败，请稍后再试..."
						this.$refs.tishiShow.tishiBlock(this.mingPian,this.token);//CanShu是下级要传的参数
					})
				}
//				this.jiaoHuans="jiaoHuan";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			},
			genJin(){
				this.types=1;
				if(this.wanchengDu==""){
					this.$refs.tishiShow.tishiBlock(this.content);//CanShu是下级要传的参数
				}else{
					this.butenLeft="butenLeft";
					this.liuYans="liuYan";
					this.jiaoHuans="jiaoHuan";
					this.butenRight="";
				}
			},
			buGen(){
				this.types=0;
//				this.butenRight="butenRight";
				this.butenLeft="";
				this.butenLeft="";
				this.liuYans="";
				this.jiaoHuans="";
			}
			
//			show(){
////				dom更新后在执行使用$refs
//				this.$nextTick(function() {
//					if(!this.betterscroll){
//						this.betterscroll=new BScroll(this.$refs.betterscroll_food,{
//							click:true
//						});
//					}else{
//						//重新计算高度  
//						this.betterscroll.refresh();
//					}
//				});
//			}
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
//			if(!this.betterscroll){
//				this.betterscroll=new BScroll(this.$refs.betterscroll_food,{
//					click:true
//				});
//			}else{
//				//重新计算高度  
//				this.betterscroll.refresh();
//			}
		},
		components:{
			box,
			tishi
//			youhuiquan
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
	.xiangmu{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:120;
		.xiangmu-header{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:1.53rem;
			background:#ff7a59;
			z-index:300;
		}
		.header-content{
			position:fixed;
			width:100%;
			font-weight:600;
			top:0;
			left:0;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:420;
			background:#ff7a59;
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
		.box::-webkit-scrollbar{width:0px;}
		.box{
			position:absolute;
			overflow-y:scroll;
			width:94%;
			padding-right:0.03rem;
			margin:auto;
			height:100%;
			top:0;
			left:0;
			right:0;
			z-index:310;
			-webkit-overflow-scrolling:touch;
			.fankiu{
				width:100%;
				display:flex;
				margin-bottom:0.07rem;
				box-shadow: 0.01rem 0.02rem 0.04rem #a7503a;
				.content-food{
					flex:1;
					padding:0.14rem 0.2rem;
					font-size:0.16rem;
					background:#fff;
					position:relative;
					display:flex;
					align-items:center;
					.laizi{
						color:#b8b8b8;
					}
					img{
						width:0.25rem;
						height:0.25rem;
					}
					.bbb{
						width:0.01rem;
						height:0.16rem;
						display:inline-block;
						padding-left:0.03rem;
					}
					.tousu{
						position:absolute;
						top:0.19rem;
						right:0.16rem;
						width:0.48rem;
						height:0.15rem;
						line-height:0.15rem;
						font-size:0.12rem;
						color:#b8b8b8;
						padding-top:0.01rem;
						text-align:right;
						background-image:url("./img/tousu.png");
						background-size:0.14rem 0.14rem;
						background-position:0 0;
						background-repeat:no-repeat;
					}
				}
			}
			.tishi-bottom{
				width:100%;
				/*height:0.36rem;*/
				.border{
					box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
				}
				ul{
					height:0.3rem;
					padding:0.28rem 2.5% 0 2.5%;
					display:flex;
					background:#fff;
					li{
						flex:1;
						height:0.2rem;
						&:first-child{
							max-width:15%;
						}
						&:last-child{
							max-width:15%;
						}
						&.tishi-center{
							width:0.57rem;
							line-height:0.36rem;
							text-align:center;
							font-size:0.2rem;
							color:#323232;
						}
					}
				}
				.zhuying_1{
					width:100%;
					font-size:0.16rem;
					background:#fff;
					margin-bottom:0.1rem;
					span{
						color:#2abdfc;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						align-content: center;
						align-items: center;
						span{
							display:inline-block;
							position:relative;
							width:0.08rem;
							height:0.16rem;
							background:#ff7a59;
							margin-right:0.08rem;
							margin-left:-0.008rem;
							z-index:200;
						}
					}
					.last{
						flex:1;
						color:#676767;
						padding:0rem 0.14rem 0.18rem 0.14rem;
						line-height:0.26rem;
						/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
					}
				}
			}
			.content-header{
				background:#fff;
				padding:0.08rem 2.5%;
				font-size:0.16rem;
				span{
					line-height:0.3rem;
				}
				font{
					float:right;
					display:inline-block;
					width:0.2rem;
					height:0.2rem;
					margin-top:0.04rem;
					background-image:url("./img/jiantou.png");
					background-size:100% 100%;
				}
			}
			.aaa{
				box-shadow:0.01rem 0.02rem 0.04rem #dfdfdf;
			}
			.times{
				width:100%;
				height:0.33rem;
				background:#fff;
				line-height:0.34rem;
				margin-top:0.08rem;
				box-shadow:0 0.02rem 0.04rem #dedde1;
				.text-center{
					display:inline-block;
					padding:0 0.08rem;
				}
				.times-name{
					color:#ff7a59;
					font{
						display:inline-block;
						width:0.16rem;
						height:0.16rem;
						background-image:url("./img/time.png");
						background-size:100% 100%;
						margin-bottom:-0.03rem;
						margin-right:-0.04rem;
					}
					float:right;
					/*margin-right:0.1rem;*/
				}
			}
			.butten{
				width:100%;
				height:1.5rem;
				position:relative;
				.tousu{
					float:right;
					width:1.28rem;
					height:0.15rem;
					font-size:0.12rem;
					color:#b8b8b8;
					padding-top:0.01rem;
					text-align:right;
					margin:0rem 0.06rem 0.06rem 0;
					background-image:url("./img/tousu.png");
					background-size:0.14rem 0.14rem;
					background-position:0 0;
					background-repeat:no-repeat;
				}
				ul{
					display:flex;
					width:100%;
					height:0.40rem;
					margin-top:0.22rem;
					li{
						flex:1;
						color:#7d7d7d;
						display:flex;
						justify-content:center;
						align-content:center;
						align-items:center;
						flex-direction:column;
						&:first-child{
							span{
								display:inline-block;
								width:0.22rem;
								height:0.24rem;
								background-image:url("./img/liuyan.png");
								background-size:100% 100%;
							}
							.liuYan{
								background-image:url("./img/liuyan1.png");
								background-size:100% 100%;
							}
						}
						&:last-child{
							span{
								display:inline-block;
								width:0.22rem;
								height:0.24rem;
								background-image:url("./img/huan.png");
								background-size:100% 100%;
							}
							.jiaoHuan{
								background-image:url("./img/huan1.png");
								background-size:100% 100%;
							}
						}
						
					}
					p{
						text-align:center;
						margin-top:0.07rem;
					}
				}
			}
		}
		.baoming{
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
			height:0.5rem;
			display:flex;
			justify-content:center;
			align-content:center;
			align-items:center;
			background:#fff;
			box-shadow:0 0.02rem 0.04rem #dedde1;
			z-index: 320;
			span{
				flex:1;
				height:0.5rem;
				line-height:0.5rem;
				display:inline-block;
				text-align:center;
				background:#ececec;
				font-size:0.18rem;
				font{
					display:inline-block;
					width:0.18rem;
					height:0.18rem;
					background-image:url("./img/jian.png");
					background-size:100% 100%;
					margin:0 0 -0.04rem 0.06rem;
				}
			}
			.butenLeft{
				color:#fff;
				background:#ff7a59;
			}
			.butenRight{
				color:#fff;
				background:#ff7a59;
			}
		}
	}
</style>


