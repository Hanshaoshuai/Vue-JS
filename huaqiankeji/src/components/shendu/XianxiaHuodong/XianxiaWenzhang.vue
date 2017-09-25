<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="../img/back.png"/></span>
					<span>天风证券Pre-IPO专</span>
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
						<div class="zhuying_1">
							<div class="ferst">天天定增定增定增定增定增定增定增定增定增定增定增主营业务</div>
							<div class="last">
								<ul>
									<li><span>时间：</span>jfdj</li>
									<li><span>地点：</span>fsdf</li>
									<li><span>活动流程：</span>fd</li>
									<li><span>到场嘉宾：</span>ds</li>
									<li><span>主办方：</span>sa</li>
									<li><span>协办方：</span>ff</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="times border-topbottom">
						<div class="times-child">
							<div class="content-food">
								<img class="border" src="" alt="" />
								<span>&nbsp;&nbsp;{{cishu}}次阅读</span>
								<span>&nbsp;&nbsp;投资经理</span>
								<span>{{cishu}}发布</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="baoming" @click.stap="shangbao()"><span>查看电子门票报名</span></div>
			<dianzimenpiao ref="dianziShow"></dianzimenpiao>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import dianzimenpiao from "./DianziMenpiao.vue";
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
				ButtenName:"索要完整项目信息",
				showFlag:true,
				onlyContent:true
			}
		},
		methods:{
			listnone(){
				history.go(-1);
//				this.showFlag=false;
			},
			xianxiawenzhangBlock(){
				this.showFlag=true;
			},
			shangbao(){
//				var tate=this;
//				Toast({
//				  message: '请查看电子门票正在为您跳转',
//				  iconClass: 'icon icon-success'
//				});
//				setTimeout(() => {
				  	this.$refs.dianziShow.MenpiaoBlock();
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
			dianzimenpiao
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
		    z-index:300;
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
		.wenzhang-list{
			width:100%;
			overflow-y:auto;
			.wenzhang-content{
				width: 100%;
				/*height:auto;*/
				margin:0.55rem 0;
				padding-bottom:0.45rem;
				.content-heder{
					width:100%;
					height:0.3rem;
					background:#fff;
					margin-top:0.12rem 0 ;
					display:flex;
					-webkit-box-pack:center;
					justify-content:center;
					-webkit-box-align:center;
					align-items:center;
					span{
						display:inline-block;
						font-weight:bold;
						font-size:0.16rem;
					}
					.text-center{
						padding:0 0.2rem;
					}
				}
				.zhuying{
					width:100%;
					background:#fff;
					display:flex;
					.zhuying_1{
						flex:1;
						padding:0 0.2rem;
						.ferst{
							font-size:0.17rem;
							font-weight:bold;
							line-height:0.2rem;
							padding-top:0.1rem;
						}
						.last{
							padding:0.2rem 0;
							font-size:0.12rem;
							span{
								display:inline-block;
								line-height:0.3rem;
								width:1rem;
							}
						}
					}
				}
				.times{
					width:100%;
					background:#fff;
					line-height:0.16rem;
					display:flex;
					.times-child{
						flex:1;
						padding:0.1rem 0.2rem;
						font-size:0.12rem;
						.content-food{
							line-height:0.22rem;
							img{
								vertical-align:top;
								width:0.2rem;
								height:0.2rem;
							}
							span{
								&:last-child{
									float:right;
								}
							}
						}
					}
				}
			}
		}
		.baoming{
			width:100%;
			height:0.4rem;
			position:absolute;
			bottom:0.2rem;
			left:0;
			text-align:center;
			span{
				line-height:0.10rem;
				border-radius:0.06rem;
				display:inline-block;
				padding:0.1rem 0.3rem;
				background:#00A0DC;
				color:#fff;
			}
		}
	}
</style>


