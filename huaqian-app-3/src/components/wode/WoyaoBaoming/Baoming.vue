<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>我要报名</span>
			</div>
			<!--<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone"><</span>
					<span>我要报名</span>
				</div>
			</div>-->
			<div class="box">
				<div class="box-content">
					<div style="width:100%;height:0.54rem;"></div>
					<div class="dujia border-top">
						<div class="dujia-content" @click.stop="xiangqingGo()">
							<ul>
								<li>
									<span>近一个月企融近一个月企融直通车概况直通车概况
									</span>
									<!--<div class="yusuan">
										5月<span>&nbsp;至&nbsp;</span>7月
										<span>￥666元</span>
									</div>-->
								</li>
								<li class="border">
									<img src=""/>
								</li>
							</ul>
							<div class="content-food">
								<li class="imgs">
									<img src="../img/xun.png"/>
								</li>
								<span>&nbsp;王美丽</span>
								<span>&nbsp;中小企业投资</span>
								<span>&nbsp;投资经理</span>
								<span><img src="../img/fabu.png"/>{{cishu}}&nbsp;发布</span>
							</div>
						</div>
						<box style="background:#FCE7E6;"></box>
						<div class="dujia-content" @click.stop="xiangqingSGo()">
							<ul>
								<li>
									<span>近一个月企融近一个月企融直通车概况直通车概况
									</span>
									<div class="yusuan">
										5月<span>&nbsp;至&nbsp;</span>7月
										<span>￥666元</span>
									</div>
								</li>
								<li class="border">
									<img src="" alt="" />
								</li>
							</ul>
							<div class="content-food">
								<li class="imgs">
									<img src="../img/xun.png"/>
								</li>
								<span>&nbsp;王美丽</span>
								<span>&nbsp;中小企业投资</span>
								<span>&nbsp;投资经理</span>
								<span><img src="../img/fabu.png"/>{{cishu}}&nbsp;发布</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<router-view :token="token"></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import box from "../../box.vue";
	import { MessageBox } from 'mint-ui';
	
	
//	import BScroll from "better-scroll";
//	import Vue from "vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			token:{
//				type:"boolean"
			}
		},
		data () {
			return {
				shijian:"6",
				cishu:"166",
				block:false,
				ButtenName:"索要完整项目信息",
				showFlag:true,
				onlyContent:true
			}
		},
		methods:{
			listnone(){
				window.location.href="#/wode"
//				history.go(-1);
			},
			xiangqingGo(){
				window.location.href="#/wode/baoming/5/PreIpo"
			},
			xiangqingSGo(){
				window.location.href="#/wode/baoming/5/Ipo"
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
		z-index:110;
		overflow-y:auto;
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
			z-index:2;
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
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			.box-content{
				width:100%;
				height:auto;
				.dujia{
					width:100%;
					display:flex;
					flex-direction:column;
					background:#fff;
					.dujia-content{
						flex:1;
						padding:0.15rem 0.03rem;
						ul{
							flex:1;
							width:90%;
							margin:0 auto;
							padding:0 0rem 0.11rem 0rem;
							display:flex;
							color:#484848;
							li{
								&:first-child{
									flex:1;
									margin-top:-0.06rem;
									padding-right:0.04rem;
									span{
										font-size:0.15rem;
						    			font-weight:500;
						    			text-align:justify;
						    			line-height:0.23rem;
									}
								}
								&:last-child{
									width:1.11rem;
									height:0.7rem;
									overflow:hidden;
									img{
										width:100%;
									}
								}
								.yusuan{
									padding:0.1rem 0;
									color:#9d9d9d;
									font-size:0.12rem;
									span{
										&:last-child{
											font-size:0.12rem;
											background:#ff711b;
											color:#fff;
											padding:0 0.03rem;
											border-radius:0.04rem;
											display:inline-block;
											float:right;
											line-height:0.2rem;
											margin-right:0.13rem;
										}
									}
								}
							}
						}
						.content-food{
							width:92%;
							margin:0 auto;
							font-size:0.12rem;
							color:#9d9d9d;
							line-height:0.3rem;
							.imgs{
								display:inline-block;
								vertical-align:top;
								border:2px solid #e5e4e4;
								/*border-radius:0.3rem;*/
								width:0.3rem;
								height:0.3rem;
								margin-top:-0.02rem;
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
				}
			}		
		}
	}
</style>


