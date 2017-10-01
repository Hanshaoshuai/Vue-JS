<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>个人资料</span>
				<div class="fanhui-right">
					<div>
						<font></font>
					</div>
				</div>
			</div>
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>公司所在行业</span>
						<ul>
							<li class="border">食品</li>
							<li class="border">食品</li>
							<li class="border">食品</li>
							<li class="border">后台添加</li>
						</ul>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="zhuying">
					<div class="zhuying_1">
						<div class="ferst">主营业务</div>
						<div class="last border">
							
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="liangdian">
					<div class="liangdian_1">
						<div class="ferst">投资亮点</div>
						<div class="last border">
							
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="liangdian">
					<div class="liangdian_1">
						<div class="ferst">最近一年财营收、净利润</div>
						<div class="last border">
							
						</div>
					</div>
				</div>
				<box></box>
				<div class="butten">
					<ul>
						<li><span @click.stop="liuYan()">留言</span></li>
					</ul>
				</div>
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
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
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
			},
			zuoshiBlock(){
				this.tucaoShow=true;
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
			box
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
		z-index:210;
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
			.fanhui-right{
		    	position:absolute;
		    	right:0.2rem;
		    	top:0;
		    	font-size: 0.16rem;
		    	font{
		    		display:inline-block;
					vertical-align: top;
					width:0.2rem;
					height:0.2rem;
					margin-top:0.13rem;
					background-image:url("../img/bianji.png");
					background-size:100% 100%;
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
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.1rem 0.2rem;
					line-height:0.3rem;
					font-size:0.14rem;
					background:#fff;
					span{
						font-weight:bold;
					}
					ul{
						li{
							display:inline-block;
							margin:0;
							padding:0.02rem 0.18rem;
							margin:0.06rem 0.1rem;
						}
					}
				}
			}
			.zhuying{
				width:100%;
				height:1.6rem;
				background:#fff;
				display:flex;
				.zhuying_1{
					flex:1;
					padding:0.2rem;
					.ferst{
						font-size:0.16rem;
						padding-bottom:0.06rem;
					}
					.last{
						padding:0.2rem;
					}
				}
				
			}
			.liangdian{
				width:100%;
				height:1.4rem;
				background:#fff;
				display:flex;
				.liangdian_1{
					flex:1;
					padding:0.2rem;
					.ferst{
						font-size:0.16rem;
						padding-bottom:0.06rem;
					}
					.last{
						padding:0.2rem;
					}
				}
			}
			.yeji{
				width:100%;
				background:#fff;
				display:flex;
				.yeji_1{
					flex:1;
					padding:0.2rem;
				}
			}
			.zonge{
				width:100%;
				background:#fff;
				display:flex;
				.zonge_1{
					flex:1;
					padding:0.2rem;
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
			.times{
				width:100%;
				height:0.3rem;
				background:#fff;
				line-height:0.3rem;
				font-size:0.12rem;
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
			.butten{
				width:100%;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.08rem 0;
						text-align:center;
						span{
							display:inline-block;
							padding:0.06rem 0.16rem;
							background:#00A0DC;
							color:#fff;
							border-radius:0.04rem;
						}
					}
				}
			}
		}
	}
</style>


