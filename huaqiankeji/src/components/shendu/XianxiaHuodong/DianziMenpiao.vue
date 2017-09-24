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
					<img class="juzhong" src="../img/juzhong.png"/>
					<div class="haoma">
						<div class="haoma-img border"><span>二维码</span></div>
						<span>优惠编码：jfdsfhij</span>
					</div>
					<div class="zhuying">
						<div class="zhuying_1">
							<div class="ferst">天天定增定增定增定增定增定增定增定增定增定增定增主营业务</div>
							<div class="last">
								<ul>
									<li class="lianxi"><span>时间：</span><font>优惠价：</font></li>
									<li><p>地址：时间天天定增定增定增定增增定增</p></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="times">
						<img class="xia" src="../img/xia.png"/>
						<div class="times-child">
							<div class="content-food">
								<li><img src="../img/geren.png"/><span>张山</span></li>
								<li><img src="../img/dianhua.png"/><span>15486582</span></li>
								<li><img src="../img/zhiwei.png"/><span>董秘</span>fsdf</li>
								<li><img src="../img/gongsi.png"/><span>杭州有限公司</span>fsdf</li>
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
					padding-left:0.16rem;
					display:inline-block;
					top:0.04rem;
					left:0;
					img{
						height:0.2rem;
					}
				}
			}
		}
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wenzhang-content{
				width: 88.2%;
				background:#fff;
				margin:0 auto;
				margin-top:0.68rem;
				padding-top:0.14rem;
				position:relative;
				box-shadow: 0.03rem 0.01rem 0.04rem #e2e2e6;
				.juzhong{
					width:0.64rem;
					position:absolute;
					margin:auto;
					top:-0.01rem;
					left:0;
					right:0;
				}
				.haoma{
					width:93%;
					margin:0 auto;
					margin-top:0.14rem;
					text-align:center;
					border:1px dashed #e4e4e4;
					border-top:none;
					padding-top:0.31rem;
					.haoma-img{
						width:1.26rem;
						height:1.26rem;
						margin:0 auto;
						display:flex;
						-webkit-box-pack:center;
						justify-content:center;
						-webkit-box-align:center;
						align-items:center;
					}
					span{
						text-align:center;
						font-size:0.14rem;
						line-height:0.4rem;
						color:#ff9b83;
					}
				}
				.zhuying{
					width:93%;
					margin:0 auto;
					background:#fff;
					padding:0.22rem 0 0.15rem 0;
					border:1px dashed #e4e4e4;
					border-top:none;
					border-bottom:none;
					.zhuying_1{
						width:91.7%;
						margin:0 auto;
						.ferst{
							font-size:0.16rem;
							line-height:0.23rem;
						}
						.last{
							font-size:0.14rem;
							
							ul{
								.lianxi{
									display:flex;
									line-height:0.41rem;
									span{
										flex:5;
									}
									font{
										flex:3;
									}
								}
							}
							p{
								line-height:0.2rem;
							}
						}
					}
				}
				.times{
					width:100%;
					background:#fff5f2;
					line-height:0.16rem;
					display:flex;
					.xia{
						width:101.5%;
						position:absolute;
						left:0;
						bottom:-0.1rem;
					}
					.times-child{
						width:93%;
						margin:0 auto;
						font-size:0.16rem;
						border:1px dashed #e4e4e4;
						border-top:none;
						border-bottom:none;
						.content-food{
							width:91.7%;
							margin:0 auto;
							padding-bottom:0.2rem;
							li{
								padding:0.13rem 0;
								img{
									height:0.15rem;
									margin-right:0.09rem;
								}
								span{
									&:last-child{
										
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>


