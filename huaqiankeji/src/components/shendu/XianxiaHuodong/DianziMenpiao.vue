<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="../img/back.png"/></span>
					<span>天风证券Pre-IPO专</span>
				</div>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<div class="haoma border-topbottom">
						<div class="haoma-img border"><span>二维码</span></div>
						<span>优惠编码：jfdsfhij</span>
					</div>
					<div class="zhuying">
						<div class="zhuying_1">
							<div class="ferst">天天定增定增定增定增定增定增定增定增定增定增定增主营业务</div>
							<div class="last">
								<ul>
									<li>时间天天定增定增定增定增定增定增定增定增定增定增定增主营业务jfdj</li>
									<li>联系人<span>定增</span>25465665</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="times border-topbottom">
						<div class="times-child">
							<div class="content-food">
								<li><span>时间：&nbsp;&nbsp;</span>jfdj</li>
								<li><span>地点：&nbsp;&nbsp;</span>fsdf</li>
								<li><span>杭州华千科技有限公司</span>fsdf</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
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
				cishu:"888",
				block:false,
				ButtenName:"索要完整项目信息",
				showFlag:false,
				onlyContent:true
			}
		},
		methods:{
			listnone(){
				this.showFlag=false;
			},
			MenpiaoBlock(){
				this.showFlag=true;
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
		z-index:310;
		overflow-y:auto;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:330;
		    .home-search {
			    height: 100%;
			    line-height:0.45rem;
			    font-size: 0.2rem;
			    text-align: center;
			    color:#fff;
				.fanhui-butten{
					position:absolute;
					height:100%;
					padding-left:0.3rem;
					display:inline-block;
					top:0.04rem;
					left:0;
					img{
						height:0.2rem;
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
				.haoma{
					width:100%;
					text-align:center;
					background:#fff;
					padding-top:0.1rem;
					.haoma-img{
						width:1.6rem;
						height:1.6rem;
						margin:0 auto;
						margin-top:0.2rem;
						display:flex;
						-webkit-box-pack:center;
						justify-content:center;
						-webkit-box-align:center;
						align-items:center;
					}
					span{
						text-align:center;
						line-height:0.4rem;
					}
				}
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
							line-height:0.18rem;
							span{
								display:inline-block;
								padding:0 0.1rem;
								line-height:0.4rem;
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
							span{
								&:last-child{
									
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


