<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>金融快讯</span>
			</div>
			<div class="box">
				<div class="box-content">
					<div style="width:100%;height:0.58rem;"></div>
					<div class="dujia">
						<div class="dujia-content border-bottom" @click.stop="yueduGo()">
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
					
					
				</div>
			</div>
			<yuedu ref="yueduShow"></yuedu>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
//	import Vue from "vue";
	import { MessageBox } from 'mint-ui';
	import yuedu from "../WenzhangGengduo/wenzhang.vue";
	
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
				history.go(-1)
			},
			yueduGo(){
				this.$refs.yueduShow.wenzhangBlock();
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
			yuedu
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
		position:fixed;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		/*z-index:100;*/
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
			/*z-index:200;*/
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
					overflow:hidden;
					height:auto;
					background:#fff;
					margin-bottom:0.07rem;
					.dujia-content{
						flex:1;
						width:96%;
						margin:0 auto;
						padding:0.15rem 0rem 0 0;
						ul{
							flex:1;
							width:93%;
							margin:0 auto;
							/*padding:0 0.27rem 0.11rem 0.27rem;*/
							display:flex;
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
								}
							}
						}
						.content-food{
							width:93%;
							padding:0.1rem 0;
							margin:0 auto;
							overflow:hidden;
							color:#c4c4c4;
							font-size:0.12rem;
							font{
								display:inline-block;
								height:0.12rem;
								width:0.18rem;
								float:left;
								margin-right:0.1rem;
								background-image:url("../img/yuedu.png");
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
					/*.dujia-content{
						flex:1;
						padding:0.15rem 0.03rem;
						ul{
							flex:1;
							width:92%;
							margin:0 auto;
							padding:0 0rem 0.11rem 0rem;
							display:flex;
							color:#484848;
							li{
								&:first-child{
									flex:1;
									margin-top:-0.06rem;
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
							}
						}
					}*/
				}
			}
		}
	}
</style>


