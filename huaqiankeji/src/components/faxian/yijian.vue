<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="yijian">
			<div class="yijian-header" @click="yijianHind">
				<span class="fanhui-butten"><</span>
				<span>意见反馈</span>
			</div>
			<div class="yijian-list border-topbottom">
				<div class="yijian-text">
					<span>您的意见是我们前进的动力，非常感谢您的支持！</span>
				</div>
			</div>
			<div class="yijian-content">
				<div class="content-text">
					<textarea placeholder="请详细描述您的问题，建议添加相关截图..." rows="4" class="mint-field-core border" v-model="introduction"></textarea>
				</div>
			</div>
			<div class="yijian-img clearbox">
				<div class="content-img border">
					<font>（最多添加2张）</font>
					<div class="img-name">
						<span>添加图片</span>
					</div>
				</div>
				<fankuiimg></fankuiimg>
			</div>
			<div class="yijian-food">
				<span>提&nbsp;&nbsp;交</span>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import fankuiimg from "../FankuiTupian.vue";
//	import BScroll from "better-scroll";
//	import Vue from "vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:false,
			}
		},
		methods:{
			fankiuShow(){
				this.tucaoShow=true;
			},
			yijianHind(){
				this.tucaoShow=false;
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
			fankuiimg
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
	.yijian{
		position:fixed;
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:900;
		.yijian-header{
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			.fanhui-butten{
				position:absolute;
				top:0;
				left:0.3rem;
			}
		}
		.yijian-list{
			width:100%;
			height:0.6rem;
			background:#CACACA;
			margin-top:0.1rem;
			display:flex;
			.yijian-text{
				flex:1;
				padding:0.2rem;
				font-size:0.15rem;
			}
		}
		.yijian-content{
			width:100%;
			height:2.6rem;
			position:relative;
			display:flex;
			background:#fff;
			.content-text{
				flex:1;
				padding:0.2rem;
				.mint-field-core{
					width:100%;
					height:70%;
					resize: none;
				}
				.texts{
					width:100px;
					height:2rem;
				}
			}
		}
		.yijian-img{
			padding:0 0.2rem;
			background:#fff;
			zoom:1;
			.content-img{
				float:left;
				width:0.8rem;
				height:0.8rem;
				display: flex;
				margin-left:0.1rem;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    z-index:200;
			    font{
		    		display:inline-block;
			    	position:absolute;
			    	font-size:0.1rem;
			    	top:0.08rem;
			    	left:0;
			    	right:0;
			    	margin:auto;
			    }
			    .img-name{
			    	width:0.3rem;
			    	height:0.3rem;
			    	font-size:0.15rem;
			    }
			}
			&.clearbox:after{
				clear:both;
				display:block;
				overflow:hidden;
				height:0;
				content:".";
			}
		}
		.yijian-food{
			width:80%;
			height:0.4rem;
			margin:auto;
			position:fixed;
			left:0;
			right:0;
			bottom:0.16rem;
			span{
				width:100%;
				height:100%;
				color:#ffffff;
				font-size:0.2rem;
				text-align:center;
				line-height:0.4rem;
				border-radius:8px;
				display:inline-block;
				background:#007AFF;
			}
		}
	}
</style>


