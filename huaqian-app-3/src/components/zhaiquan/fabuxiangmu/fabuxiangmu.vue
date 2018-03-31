<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>发布债权项目</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="fankiu-content">
					<div class="zhuying_1 zhuying_2">
						<div class="ferst"><span>*</span>债权名称</div>
						<div class="last">
							<textarea placeholder="一句话介绍项目需求" class="mint-field-core" v-model="texta"></textarea>
						</div>
					</div>
					<div class="zhuying_1 zhuying_2">
						<div class="ferst"><span>*</span>债权类型</div>
						<div class="last">
							<textarea readOnly="true" placeholder="" class="mint-field-core" v-model="leixing"></textarea>
							<ul v-show="fuxuanblock" class="xuanxiang">
								<li @click.stap="fuxuan($event)">股权质押</li>
								<li @click.stap="fuxuan($event)">融资租赁</li>
								<li @click.stap="fuxuan($event)">信用贷款</li>
								<li @click.stap="fuxuan($event)">银行授信</li>
								<li @click.stap="fuxuan($event)">应收账款</li>
								<li @click.stap="fuxuan($event)">直接担保</li>
								<li @click.stap="fuxuan($event)">过桥资金</li>
								<li @click.stap="fuxuan($event)">商业票据</li>
							</ul>
						</div>
						<div class="anniu" @click.stap="xuanze()">
							<span></span>
						</div>
					</div>
					<div style="margin-top:0.2rem;" class="zhuying_1">
						<div class="ferst"><span>*</span>项目情况介绍</div>
						<div class="last neirong">
							<textarea placeholder="主要项目要求：如营收、利润、负责率等。" class="mint-field-core" v-model="textc"></textarea>
						</div>
						<li>{{x}}/100</li>
					</div>
				</div>
			</div>
			<div class="butten">
				<ul @click.stop="xiayibuGo()">
					<li><span>提交审核</span></li>
				</ul>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				x:"0",			//字的个数
				texta:"",
				leixing:"股权质押",
				textc:"",
				times:20177111129,
				fuxuanblock:false,
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			xuanze(){
				if(this.fuxuanblock==true){
					this.fuxuanblock=false;
				}else{
					this.fuxuanblock=true;
				}
				
			},
			fuxuan(e){
				this.leixing=e.target.innerText;
				this.fuxuanblock=false;
			},
			xiayibuGo(){
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textc:this.textc,
				}
				var ok=0;
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu[item]==""){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					this.content=this.$refs.pipeiShow;
					this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
				}else{
					Toast("请填写完整您的信息！");
				}
				
//				this.$refs.pipeiShow.pipeiBlock();
			},
			dingzengBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYan(){
				window.location.href="#/fankuixinxi";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			}
		},
		watch:{					//监听输入范围
			textc:function(newVal,oldVal){
				var x=newVal.length;
				if(x<=100){
					this.x=x;
				}else{
					this.textc=oldVal;
					Toast("您的输入超出范围！")
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
		z-index:2400;
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
		.box::-webkit-scrollbar{width:0px;}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			background:#f5f4f9;
			-webkit-overflow-scrolling:touch;
			.fankiu-content{
				width:89.4%;
				margin:0 auto;
				.zhuying_1{
					width:100%;
					span{
						color:#ff7a59;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						padding-right:0.2rem;
						align-content: center;
						align-items: center;
						font-size:0.16rem;
						font{
							color:#ff7a59;
							font-size:0.15rem;
						}
					}
					.last{
						flex:1;
						padding:0 0.06rem;
						border:1px solid #ebebeb;
						background:#ffffff;
						position:relative;
						.mint-field-core{
							resize: none;
							font-size:0.14rem;
							background:#ffffff;
							height:0.26rem;
							line-height:0.26rem;
							color:#afafaf;
							&::-webkit-scrollbar{width:0;height:0}
							&::-webkit-input-placeholder{
								color:#afafaf;
							}
						}
						.xuanxiang{
							width:50%;
							position:absolute;
							right:-1px;
							top:0.36rem;
							border:1px solid #ebebeb;
							box-sizing:border-box;
							background:#ffffff;
							z-index:1000;
							li{
								width:100%;
								height:0.26rem;
								display:flex;
								text-align:center;
								justify-content:center;
								align-items:center;
								align-content: center;
							}
						}
					}
					.neirong{
						min-height:1.22rem;
						.mint-field-core{
							resize: none;
							background:#ffffff;
							min-height:1.22rem;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
					}
					li{
						width:100%;
						height:0.38rem;
						display:flex;
						color:#868686;
						align-content:center;
						align-items:center;
						justify-content:flex-end;
					}
				}
				.zhuying_2{
					display:flex;
					margin-top:0.1rem;
					position:relative;
					.anniu{
						position:absolute;
						width:0.4rem;
						height:0.38rem;
						right:0rem;
						top:0rem;
						display:flex;
						align-content:center;
						align-items:center;
						justify-content:center;
						span{
							display:inline-block;
							width:0.2rem;
							height:0.2rem;
							background-image:url("../img/jiantoubot.png");
							background-size:100% 100%;
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
			}
		}
		.butten{
			position:absolute;
			left:0;
			bottom:0;
			width:100%;
			background:#f5f4f9;
			ul{
				width:100%;
				height:0.45rem;
				margin:0 auto;
				background:red;
				display:flex;
				align-content:center;
				align-items:center;
				justify-content:center;
				li{
					span{
						font-size:0.18rem;
						color:#fff;
					}
				}
			}
		}
	}
</style>


