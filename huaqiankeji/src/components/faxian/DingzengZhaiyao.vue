<template>
	<transition name="fade">
		<div v-show="showFlag" class="zhaiyao">
			<div class="searchBox">
				<div class="home-search" @click.stop="listnone">
					<span class="fanhui-butten"><</span>
					<span>项目摘要</span>
					<span class="fanhui-right">分享</span>
				</div>
			</div>
			<div class="zhaiyao-list">
				<div class="zhaiyao-content">
					<div class="content-heder">
						<span>天天</span>
						<span class="text-center">54587561</span>
						<span>定增</span>
					</div>
					<div class="zhuying">
						<div class="zhuying_1">
							<div class="ferst">主营业务</div>
							<div class="last border">
								
							</div>
						</div>
					</div>
					<div class="liangdian">
						<div class="liangdian_1">
							<div class="ferst">投资亮点</div>
							<div class="last border">
								
							</div>
						</div>
					</div>
					<div class="liangdian">
						<div class="liangdian_1">
							<div class="ferst">投资亮点</div>
							<div class="last border">
								
							</div>
						</div>
					</div>
					<div class="liangdian">
						<div class="liangdian_1">
							<div class="ferst">投资亮点</div>
							<div class="last border">
								
							</div>
						</div>
					</div>
					<div class="yeji">
						<div class="yeji_1">
							近两年业绩
						</div>
					</div>
					<div class="zonge">
						<div class="zonge_1">
							融资总额
						</div>
					</div>
					<div class="times border-topbottom">
						<span class="times_1">领天</span>
						<span class="text-center">1小时前</span>
						<span>发布</span>
						<div class="times-name">
							<span>{{fankui}}反馈</span>
							<span class="text-center">{{genjin}}跟进</span>
						</div>
					</div>
				</div>
			</div>
			<div class="zhaiyao-food" @click.stop="butten"><span>{{ButtenName}}</span></div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
//	import Vue from "vue";
	import { MessageBox } from 'mint-ui';
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
				block:false,
				ButtenName:"索要完整项目信息",
				showFlag:false,
				fankui:13,
				genjin:50
//				onlyContent:true
			}
		},
		methods:{
			listShow(){
				this.showFlag=true;
			},
			listnone(){
				this.showFlag=false;
			},
			butten(){
				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
				  console.log("ijfj")
				});
				this.block=true;
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
	.zhaiyao{
		position:fixed;
		background:#FCE7E6;
		width:100%;
		height:100%;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:200;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color: #2ca8fe;
		    z-index:900;
		    .home-search {
			    height: 100%;
			    padding-left:0.5rem;
			    line-height:0.45rem;
			    font-size: 0.16rem;
			    .fanhui-butten{
					position:absolute;
					top:0;
					left:0.2rem;
				}
			    .fanhui-right{
			    	float:right;
			    	margin-right:0.2rem;
			    }
			}
		}
		.zhaiyao-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			.zhaiyao-content{
				width: 100%;
				height:auto;
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
			}
		}
		.zhaiyao-food{
			width:100%;
			height:0.45rem;
			color:#ffffff;
			background:#007AFF;
			position: fixed;
			font-size:0.18rem;
			display:flex;
			left:0;
		   	bottom:0;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
		}
		.tishi{
			width:50%;
			height:2rem;
			background:#fff;
			
		}
	}
</style>


