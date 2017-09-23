<template>
	<!--<transition name="fade">-->
		<div class="shendu">
			<div class="box" ref="betterscroll_foods">
				<div class="box-content">
					<div class="shendu-header clearfloat">
						<div class="gaikuang">
							<div class="gaikuang-header border-bottom">
								<span>近一个月企融直通车概况</span>
							</div>
							<div class="gaikuang-content">
								<div class="gaikuang-list border-right">
									<span>企融直通车</span>
									<span>{{jia}}家</span>
								</div>
								<div class="gaikuang-list border-right">
									<span>一个月</span>
									<span>{{ge}}人</span>
								</div>
								<div class="gaikuang-list">
									<span>直通车概况</span>
									<span>{{ren}}个</span>
								</div>
							</div>
						</div>
					</div>
					<div style="width:100%;height:0.57rem;"></div>
					<div class="dujia-header border-topbottom">
						<span><font class="diaoyan"></font>独家调研</span>
						<span @click.stop="dujiaGo()">更多</span>
					</div>
					<div class="dujia border-bottom">
						<div class="dujia-content" @click.stop="diaoyanGo()">
							<ul>
								<li>
									<span>
										近一个月企融近一个月企融直通车概况直通车概况
										近一个月企融近一个月企融直通车概况直通车概况
									</span>
								</li>
								<li class="border">
									<img src="" alt="" />
								</li>
							</ul>
							<div class="content-food">
								<span>{{shijian}}小时前</span>
								<li>
									<font></font>
									<span>{{cishu}}次阅读</span>
								</li>
							</div>
						</div>
					</div>
					<div class="zhibo">
						<img src="./img/quyu.jpg"/>
					</div>
					<div class="dujia-header border-topbottom">
						<span><font class="xianxia"></font>线下活动</span>
						<span @click.stap="xianxiaGo()">更多</span>
					</div>
					<div class="dujia border-top">
						<div class="dujia-content" @click.stap="huodongGo()">
							<ul>
								<li>
									<span>
									近一个月企融近一个月企融直通车概况直通车概况
									近一个月企融近一个月企融直通车概况直通车概况
									</span>
								</li>
								<li class="border">
									<img src="" alt="" />
								</li>
							</ul>
							<div class="content-food">
								<span>{{shijian}}小时前</span>
								<li>
									<font></font>
									<span>{{cishu}}次阅读</span>
								</li>
							</div>
						</div>
					</div>
					<div class="dujia-header border-topbottom">
						<span><font class="peixun"></font>培训与咨询</span>
						<span @click.stpe="PeixunGo()">更多</span>
					</div>
					<div class="swiper">
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide dujia-content" @click.stpe="zixunGo()">
									<ul>
										<li>
											<span>
											近一个月企融近一个月企融直通车概况直通车概况
											近一个月企融近一个月企融直通车概
											</span>
										</li>
										<div class="content-food">
											<span>{{shijian}}小时前</span>
											<span>{{cishu}}次阅读</span>
											<font>￥{{cishu}}元</font>
										</div>
									</ul>
								</div>
								<div class="swiper-slide dujia-content" @click.stpe="zixunGo()">
									<ul>
										<li>
											<span>
											近一个月企融近一个月企融直通车概况直通车概况
											近一个月企融近一个月企融直通车概
											</span>
										</li>
										<div class="content-food">
											<span>{{shijian}}小时前</span>
											<span>{{cishu}}次阅读</span>
											<font>￥{{cishu}}元</font>
										</div>
									</ul>
								</div>
								<div class="swiper-slide dujia-content" @click.stpe="zixunGo()">
									<ul>
										<li>
											<span>
											近一个月企融近一个月企融直通车概况直通车概况
											近一个月企融近一个月企融直通车概
											</span>
										</li>
										<div class="content-food">
											<span>{{shijian}}小时前</span>
											<span>{{cishu}}次阅读</span>
											<font>￥{{cishu}}元</font>
										</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="dujia-header border-topbottom">
						<span><font class="kuaixun"></font>企融快讯</span>
						<span @click.stap="qirongGo()">更多</span>
					</div>
					<div class="dujia border-top">
						<div class="dujia-content" @click.stap="kuaixunGo()">
							<ul>
								<li>
									<span>
									近一个月企融近一个月企融直通车概况直通车概况
									近一个月企融近一个月企融直通车概况直通车概况
									</span>
								</li>
								<li class="border">
									<img src="" alt="" />
								</li>
							</ul>
							<div class="content-food">
								<span>{{shijian}}小时前</span>
								<li>
									<font></font>
									<span>{{cishu}}次阅读</span>
								</li>
							</div>
						</div>
					</div>
					<li style="height:40px;" v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
					<div ref="xiaoshi" style="padding-bottom:0.05rem;"  v-show="bottomStatus" class="loadmore-bottom">
			          	<mt-spinner :type="3" color="#26a2ff" :size="25"></mt-spinner>
		        	</div>
		        	<div style="height:0.3rem;" v-show="Status"></div>
		        	<transition name="promps">
					<div class="tishi-bottom" v-show="promps">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">亲已经到底了</li>
							<li class="border-bottom"></li>
						</ul>
					</div>
					</transition>
				</div>
			</div>
			<router-view></router-view>
		    <wenzhang ref="wenzhangtext"></wenzhang>
		    <!--<gengduo ref="gengduotext"></gengduo>-->
		    <!--<xianxiagengduo ref="xianxiaCont"></xianxiagengduo>-->
		    <!--<xianxiawenzhang ref="xianxiawenzhangShow"></xianxiawenzhang>-->
		    <!--<peixungengduo ref="PeixunShow"></peixungengduo>-->
		    <!--<denglu ref="show"></denglu>-->
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import { InfiniteScroll } from 'mint-ui';
	import wenzhang from "./WenzhangYuedu/wenzhang.vue";
//	import gengduo from "./DujinGengduo/gengduo.vue";
//	import xianxiagengduo from "./XianxiaGengduo/XianxiaGengduo.vue";
//	import xianxiawenzhang from "./XianxiaHuodong/XianxiaWenzhang.vue";
//	import peixungengduo from "./peixunZixun/PeixunGengduo.vue";
//	import BScroll from "better-scroll";
//	import Vue from "vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
//			tochild:{
////				type:Object
//			}
		},
		data () {
			return {
				imgsrc:"",
				jia:"1000",
				ge:"666",
				ren:"8888",
				shijian:"6",
				cishu:"166",
				block:false,
				times:20177111129,
				show:true,
				onlyContent:true,
				loading:false,
				list:[],
				scrollY:0,
				bottomStatus:false,
				jiazai:false,
				scrollHeight:"",
				promps:false,
				Status:false
			}
		},
		created(){
			var tate=this;
			for (let i = 1; i <= 20; i++) {
	        	this.list.push(i);
	      	}
			this.$nextTick(function() {
				this.initScroll();
             	this.mySwiper = new Swiper(".swiper-container",{
					loop : true,
					slidesPerView : 'auto',
					loopAdditionalSlides : 1,
				})
			});
		},
		updated(){
			alert("jfkd")
		},
		watch:{
			jiazai:function(newVal,oldVal){
//				console.log(newVal +"*********"+ oldVal)
				if(this.jiazai==true){
					//添加请求
					setTimeout(() => {
			          	let lastValue = this.list[this.list.length - 1];
			          	if (lastValue < 60) {
				            for (let i = 1; i <= 10; i++) {
				              	this.list.push(lastValue + i);
				            }
				            this.bottomStatus=true;
			          	} else {
			            	this.bottomStatus=false;
			            	this.promps = true;
			            	this.Status = true;
			            	let clear = setTimeout(()=>{
//			            		this.promps = false;
			            		clearTimeout(clear);
			            	},1000);
			          	}
			          	this.$nextTick(()=>{
							if(!this.betterscroll){
								this.betterscroll=new BScroll(this.$refs.betterscroll_list,{
									click:true
								});
							}else{
								this.betterscroll.refresh();
							}
							this.scrollHeight=this.$refs.betterscroll_foods.scrollHeight;
						});
						this.jiazai=false;
			        }, 1000);
				}
			}
		},
		methods:{
			initScroll(){
				this.scrollHeight=this.$refs.betterscroll_foods.scrollHeight;		//总高度
				this.betterscroll=new BScroll(this.$refs.betterscroll_foods,{
					click:true,probeType:3,//probeType：3相当于实时监听高度位置
				});
				//通过betterscroll对象监听一个scroll事件，当scroll滚动时能够暴露出来，参数pos就是位置
				this.betterscroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y));						//滑上去部分的高度  相当于scrollTop
					var scrollHeights=this.$refs.betterscroll_foods.scrollHeight;
					var clientHeight=this.$refs.betterscroll_foods.clientHeight;	//可视区高度
					var Height=clientHeight+this.scrollHeight
//					console.log(this.$refs.betterscroll_foods.scrollTop)
//					console.log(this.scrollHeight)
//					console.log(scrollHeights)
//					console.log(this.scrollY)
//					console.log(clientHeight)
//					console.log(Height)

					if(clientHeight+this.scrollY==this.scrollHeight){
//						console.log("daodibu")
						this.jiazai=true;
						this.bottomStatus=true;
					}
				});
			},
			dujiaGo(){
				window.location.href="#/shendu/WenzhangGengduo/0";
			},
			diaoyanGo(){
				this.$refs.wenzhangtext.wenzhangBlock();
			},
			xianxiaGo(){
				window.location.href="#/shendu/XianxiaGengduo/0";
			},
			huodongGo(){
				window.location.href="#/shendu/PreIpo/0";
//				this.$refs.xianxiawenzhangShow.xianxiawenzhangBlock();
			},
			PeixunGo(){
				window.location.href="#/shendu/PeixunGengduo/0";
			},
			zixunGo(){
				window.location.href="#/shendu/Ipo/0";
			},
			qirongGo(){
				window.location.href="#/shendu/WenzhangGengduo/0";
			},
			kuaixunGo(){
				this.$refs.wenzhangtext.wenzhangBlock();
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
			if(this.scrollY){
//				console.log(this.scrollY)
			}
		},
		components:{
			wenzhang,
//			gengduo,
//			xianxiagengduo,
//			xianxiawenzhang
//			peixungengduo
		}
	}
</script>

<style lang="scss" scoped>
	.shendu{
		width:100%;
		height:100%;
		.box{
			width:100%;
			height:100%;
			overflow:hidden;
			.box-content{
				/*width:100%;*/
				/*height:auto;*/
				.shendu-header{
				    width: 100%;
				    height:1.58rem;
				    background-image:url("./img/bg.jpg");
				    background-size:100% 100%;
					background-repeat:no-repeat;
				    .gaikuang{
				    	width:95%;
				    	height:1.41rem;
				    	margin:0 auto;
				    	border-radius:0.15rem;
				    	background-color:rgba(255,255,255,0.9);
				    	position:absolute;
				    	top:0.62rem;
				    	left:2.5%;
				    	box-shadow: 0.03rem 0.03rem 0.04rem #eeeef5;
				    	.gaikuang-header{
				    		width:90.1%;
				    		height:0.36rem;
				    		margin:0 auto;
				    		padding-top:0.42rem;
				    		text-align:center;
				    		span{
				    			font-size:0.18rem;
				    			line-height:0.18rem;
				    			font-weight:bold;
				    		}
				    	}
					    .gaikuang-content{
					    	width:100%;
					    	display:flex;
					    	/*-webkit-box-pack: center;
						    justify-content: center;
						    -webkit-box-align: center;
						    align-items: center;*/
					    	.gaikuang-list{
					    		text-align:center;
					    		flex:1;
					    		margin-top:0.13rem;
					    		span{
					    			font-size:0.15rem;
					    			font-weight:500;
					    			display:block;
					    			line-height:0.14rem;
					    			padding-bottom:0.10rem;
					    			/*font-weight:600;*/
					    			&:last-child{
						    			color:#F01414;
						    			line-height:0.14rem;
						    			padding-bottom:0rem;
						    		}
					    		}
					    	}
					    }
					}
				}
				.dujia-header{
					flex:1;
					background:#fff;
					padding:0.06rem 0.11rem;
					margin-bottom:0.07rem;
					span{
						font-size:0.16rem;
		    			font-weight:500;
		    			line-height:0.34rem;
		    			vertical-align: top;
						&:first-child{
							font-weight:bold;
							font-size:0.16rem;
						}
						&:last-child{
							float:right;
							font-size:0.13rem;
							margin-right:0.13rem;
						}
						font{
							display:inline-block;
							width:0.24rem;
							height:0.24rem;
							margin:0.04rem 0.03rem 0 0;
							background-size:100% 100%;
							background-repeat:no-repeat;
							
						}
						.diaoyan{
							background-image:url("./img/diaoyan.png");
						}
						.xianxia{
							background-image:url("./img/huodong.png");
						}
						.peixun{
							background-image:url("./img/peixun.png");
						}
						.kuaixun{
							background-image:url("./img/xun.png");
						}
					}
				}
				.dujia{
					width:100%;
					overflow:hidden;
					height:auto;
					background:#fff;
					margin-bottom:0.07rem;
					box-shadow: 0 0.02rem 0.04rem #e8e8eb;
					.dujia-content{
						flex:1;
						padding:0.15rem 0.03rem;
						ul{
							flex:1;
							padding:0 0.27rem 0.11rem 0.27rem;
							display:flex;
							li{
								&:first-child{
									flex:1;
									margin-top:-0.06rem;
									span{
										font-size:0.16rem;
						    			font-weight:500;
						    			text-align:justify;
						    			line-height:0.27rem;
									}
								}
								&:last-child{
									width:1.11rem;
									height:0.7rem;
								}
							}
						}
						.content-food{
							padding:0 0.26rem;
							overflow:hidden;
							color:#c4c4c4;
							font-size:0.13rem;
							font{
								display:inline-block;
								height:0.11rem;
								width:0.16rem;
								float:left;
								margin-right:0.1rem;
								background-image:url("./img/yuedu.png");
								background-size:0.16rem 100%;
								background-repeat:no-repeat;
							}
							span{
								float:left;
							}
							li{
								float:right;
							}
						}
					}
				}
				.zhibo{
					width:100%;
					min-height:0.98rem;
					padding:0.08rem 0 0.15rem 0;
					overflow:hidden;
					img{
						float:left;
						width:100%;
					}
				}
				.swiper{
					width:68.2%;
					/*height:0.88rem;*/
					padding-bottom:0.07rem;
					margin-left:15%;
					.swiper-container{
						width:100%;
						height:100%;
						margin:0 auto;
						overflow:visible;
						.swiper-wrapper{
							/*width:100%;*/
							height:100%;
							.swiper-slide{
								width:100%;
								background:#fff;
								margin:0 auto;
								margin:0 0.04rem;
								border-radius:0.1rem;
								ul{
									width:100%;
									height:100%;
									border-radius:0.1rem;
									border:1px solid #d8d8d8;
									li{
										width:86%;
										margin:0 auto;
										font-size:0.15rem;
						    			font-weight:500;
						    			text-align:justify;
						    			line-height:0.27rem;
						    			padding-top:0.08rem;
									}
									div{
										width:86%;
										margin:0 auto;
										padding:0.08rem 0 0.1rem 0;
										font{
											padding:0.02rem 0.06rem;
											background:#ff711b;
											color:#fff;
											border-radius:0.02rem;
										}
									}
								}
							}
						}
					}
				}
				.tishi-bottom{
					width:92.5%;
					height:0.36rem;
					position:fixed;
					bottom:0rem;
					left:3.75%;
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
								font-size:0.13rem;
								color:#bcbcbc;
							}
						}
					}
				}
				/*c3动画*/
				.promps-enter-active {
				  	transition: all .1s ease;
				}
				.promps-leave-active {
				  	transition: all .1s ease;
				}
				.promps-enter, .promps-leave-active {
				  	/*transform: translateY(0.5rem);*/
				  	/*transform:rotate(360deg);*/
				  	opacity: 0;
				}
				.loadmore-bottom{
					width:100%;
					display:flex;
					-webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;
				}
			}
		}
	}
</style>


