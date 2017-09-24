<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="tuichu()"><img src="../img/back.png"/></span>
					<span>IPO加速下企业股改</span>
					<div class="fanhui-right">
						<div @click.stop="quanXuan()">
							<font>分享</font>
						</div>
					</div>
				</div>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<div class="zhuying">
						<div class="ferst">IPO加速下企业股改上市，股权融资级市值管理公益辅导计划</div>
						<div class="last">
							<p>
								增定增定增以往课程风采定增定，股权融资级程大以往课程风采增定增定增定增
							</p>
						</div>
					</div>
					<div class="content-food border-topbottom">
						<li class="imgs">
							<img src="../img/xun.png"/>
						</li>
						<span>&nbsp;王美丽</span>
						<span>&nbsp;中小企业投资</span>
						<span>&nbsp;投资经理</span>
						<span><img src="../img/fabu.png"/>{{cishu}}&nbsp;发布</span>
					</div>
				</div>
				<div class="xinxi border-topbottom">
					<ul>
						<li @click.stop="kechengShow()" :class="kechengs"><p class="border-right">
							<font>课程信息<span></span></font></p>
						</li>
						<li @click.stop="fengcaiShow()" :class="fengcais">
							<p><font>以往课程风采<span></span></font></p>
						</li>
					</ul>
				</div>
				<div>
					<gugaifengcai ref="gugaifengcaiShow"></gugaifengcai>
					<kechengxinxi ref="kechengxinxiShow"></kechengxinxi>
					
				</div>
				<div class="baoming">
					<span @click.stap="liuyan()">留言问询</span>
					<span @click.stap="youhiuGo()">查看优惠券</span>
				</div>
			</div>
			<youhuiquan ref="youhuiShow"></youhuiquan>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import youhuiquan from "./YouhuiQuan.vue";
	import gugaifengcai from "../GugaiFengcai/GugaiFengcai.vue";
	import kechengxinxi from "../GugaiFengcai/KechengXinxi.vue";
//	import BScroll from "better-scroll";
//	import Vue from "vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			childnone:{
//				type:"boolean"
			}
		},
		data () {
			return {
				cishu:"888",
				block:false,
				shijianBlock:false,
				kechengs:"kechengs",
				fengcais:"",
				ButtenName:"索要完整项目信息",
				showFlag:true,
				onlyContent:true
			}
		},
		methods:{
			tuichu(){
				history.go(-1);
//				this.showFlag=false;
			},
			quanXuan(){
				
			},
			kechengShow(){
				this.kechengs="kechengs";
				this.fengcais="";
				this.$refs.kechengxinxiShow.KechengXinxiBlock();
				this.$refs.gugaifengcaiShow.gugaifengcaiNone();
			},
			fengcaiShow(){
				this.kechengs="";
				this.fengcais="fengcais";
				this.$refs.gugaifengcaiShow.gugaifengcaiBlock();
				this.$refs.kechengxinxiShow.KechengXinxiNone();
			},
			youhiuGo(){
//				var tate=this;
//				Toast({
//				  message: '请查看电子门票正在为您跳转',
//				  iconClass: 'icon icon-success'
//				});
//				setTimeout(() => {
				  	this.$refs.youhuiShow.YouhuiBlock();
//				}, 3500);
//				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
//					this.ButtenName="申请成功，等待反馈";
//					var tate=this;
//					setTimeout(function(){
//						tate.showFlag=false;
//						tate.ButtenName="索要完整项目信息";
//					},2000)
//				  console.log("ijfj")
//				});
//				this.block=true;
			},
			liuyan(){
				this.$refs.dianziShow.MenpiaoBlock();
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
			youhuiquan,
			gugaifengcai,
			kechengxinxi
//			cartcontrol,
//			ratingselect,
//			split
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
	.wenzhang{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:200;
		overflow-y:auto;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:210;
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
						vertical-align: top;
			    	}
			    }
			}
		}
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.wenzhang-content{
				width: 100%;
				margin-top:0.55rem;
				background:#fff;
				margin-bottom:0.13rem;
				box-shadow: 0.03rem 0 0.04rem #e2e2e6;
				.zhuying{
					width:91.5%;
					margin:0 auto;
					background:#fff;
					.ferst{
						font-size:0.18rem;
						line-height:0.22rem;
						color:#484848;
						padding:0.16rem 0 0.07rem 0;
					}
					.last{
						font-size:0.16rem;
						p{
							color:#787878;
							line-height:0.24rem;
							padding-bottom:0.06rem;
						}
					}
				}
				.content-food{
					/*width:92%;*/
					margin:0 auto;
					padding:0.08rem 4.25%;
					font-size:0.12rem;
					color:#9d9d9d;
					line-height:0.34rem;
					.imgs{
						display:inline-block;
						vertical-align:top;
						border:2px solid #e5e4e4;
						border-radius:0.3rem;
						width:0.3rem;
						height:0.3rem;
						img{
							width:0.3rem;
							height:0.3rem;
						}
					}
					span{
						&:last-child{
							float:right;
						}
						img{
							width:0.12rem;
							margin:0 0.02rem -0.02rem 0;
						}
					}
				}
			}
			.xinxi{
				width:100%;
				ul{
					width:100%;
					display:flex;
					background:#fff;
					li{
						flex:1;
						text-align:center;
						padding:0.1rem 0;
						p{
							width:100%;
							line-height:0.2rem;
							font-size:0.16rem;
							/*color:#ff7a59;*/
							/*font{
								display:inline-block;
								position:relative;
								span{
									width:110%;
									height:0.03rem;
									position:absolute;
									margin:auto;
									bottom:-0.1rem;
									left:-0.04rem;
									right:0;
									background:#ff7a59;
								}
							}*/
						}
					}
					.kechengs{
						p{
							color:#ff7a59;
							font{
								display:inline-block;
								position:relative;
								span{
									width:110%;
									height:0.03rem;
									position:absolute;
									margin:auto;
									bottom:-0.1rem;
									left:-0.04rem;
									right:0;
									background:#ff7a59;
								}
							}
						}
					}
					.fengcais{
						p{
							color:#ff7a59;
							font{
								display:inline-block;
								position:relative;
								span{
									width:110%;
									height:0.03rem;
									position:absolute;
									margin:auto;
									bottom:-0.1rem;
									left:-0.04rem;
									right:0;
									background:#ff7a59;
								}
							}
						}
					}
				}
			}

			.baoming{
				width:100%;
				height:0.85rem;
				display:flex;
				justify-content:center;
				align-content:center;
				align-items:center;
				background:#fff;
				span{
					width:43.5%;
					height:0.48rem;
					line-height:0.48rem;
					border-radius:0.06rem;
					display:inline-block;
					background:#ff7a59;
					text-align:center;
					color:#fff;
					font-size:0.18rem;
					&:last-child{
						margin-left:0.08rem;
					}
				}
			}
		}
	}
</style>


