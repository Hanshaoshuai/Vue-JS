<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="../img/back.png"/></span>
					<span>与是汇科ttttttt技董事长</span>
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
								<span>天天定</span>
								<span class="center">天天定增定</span>
								<span>天天定增定</span>
							</div>
							<div class="border-bottom">
								<p>
									天天定增定增上一天天天定增天天定增定增定增天定增定增财年天定增增定增天定增定增财年天定增增定增天定增定增财年天定增天天定增定增定增天定增定增财年天天定增定增营收
								</p>
							</div>
							<div class="times-child">
								<span class="times_1">声明：以上内容仅供参考，不做投资决策依据。如有版权问题，请联系。。。</span>
							</div>
						</div>
					</div>
				</div>
			</div>
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
				onlyContent:true
			}
		},
		methods:{
			listnone(){
				this.showFlag=false;
//				history.go(-1)
			},
			wenzhangBlock(){
				this.showFlag=true;
			},
			butten(){
				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
					this.ButtenName="申请成功，等待反馈";
					var tate=this;
					setTimeout(function(){
						tate.showFlag=false;
						tate.ButtenName="索要完整项目信息";
					},2000)
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
	.wenzhang{
		position:absolute;
		background:#f5f4f9;
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
			.wenzhang-content{
				width: 100%;
				margin:0 auto;
				padding:0.6rem 0;
				-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
				.zhuying{
					width:100%;
					background:#fff;
					padding:0.11rem 0 0.12rem 0;
					.zhuying_1{
						width:93%;
						margin:0 auto;
						.ferst{
							font-size:0.22rem;
							line-height:0.31rem;
							padding-top:0.1rem;
						}
						.last{
							padding:0.07rem 0 0.2rem 0;
							font-size:0.14rem;
							color:#cfcfcf;
							span{
								display:inline-block;
								margin-left:0.03rem;
							}
						}
						p{
							font-size:0.2rem;
							line-height:0.36rem;
							padding-bottom:0.13rem;
						}
						.times-child{
							width:100%;
							line-height:0.20rem;
							padding-top:0.27rem;
							.times_1{
								color:#d7d7d7;
								font-size:0.14rem;
							}
						}
					}
				}
			}
		}
	}
</style>


