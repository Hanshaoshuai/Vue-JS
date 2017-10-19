<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone1()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>协议详情</span>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<ul ref="content">
						
					</ul>
				</div>
			</div>
			<!--<div class="zhaiyao-food">
				<span class="last" @click.stop="butten">返回首页</span>
			</div>-->
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
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
			data:{
//				type:"boolean"
			}
		},
		data () {
			return {
				token:"",
				XiangmuID:"",
				type:"",
				uID:"",
				block:false,
				ButtenName:"88",
				showFlag:true,
				onlyContent:true
			}
		},
		mounted(){
			this.$refs.content.innerHTML=this.data['content']
		},
		methods:{
			listnone1(){
//				this.showFlag=false;
				history.go(-1)
			}
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
		z-index:300;
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
			z-index:310;
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
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wenzhang-content{
				width:95%;
				margin:0 auto;
				padding:0.48rem 0 0.6rem 0;
				background:#fff;
				.fankiu{
					width:100%;
					display:flex;
					align-items:center;
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("../img/fei.png");
						background-size:100% 100%;
						margin:0 0.04rem 0 0.02rem;
					}
					.content-food{
						line-height:0.47rem;
						color:#6e6e6e;
						/*background:#fff;*/
						span{
							font-size:0.16rem;
						}
					}
				}
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					margin-bottom:0.1rem;
					border-radius:0.02rem;
					/*border:1px solid #ff7a59;*/
					box-sizing:border-box;
					box-shadow: 0.02rem 0.02rem 0.02rem #e4e3e8;
					/*display:flex;*/
					/*flex-direction:column;*/
					.content-header{
						padding:0.1rem 0.16rem 0.08rem 0.16rem;
						font-size:0.16rem;
						display:flex;
						align-items:center;
						font{
							display:inline-block;
							width:0.43rem;
							height:0.43rem;
							margin-right:0.1rem;
							/*border-radius:0.3rem;*/
							border:none;
							border:2px solid #e5e4e4;
							img{
								width:100%;
								height:100%;
							}
						}
						.names{
							flex:1;
							.border-right{
								min-width:0.55rem;
								display:inline-block;
								margin-right:0.02rem;
							}
						}
					}
				}
				.donghua{
					width:100%;
					display:flex;
					&>div{
						flex:1;
						padding:0.4rem 0.8rem 0.2rem 0.8rem;
						span{
							display:inline-block;
							padding:0.4rem 0.2rem;
							background:#fff;
						}
					}
				}
			}
		}
	}
</style>


