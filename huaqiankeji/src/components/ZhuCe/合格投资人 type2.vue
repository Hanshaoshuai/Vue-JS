<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<div class="type-header" @click.stap="fanhui">
				<span class="xiangmu-left"><</span>
				合格投资人
			</div>
			<div class="type-content">
				<div class="type-cont">
					<span>您倾向于什么样的投资方式（可多选）？</span>
					<ul>
						<li class="border">食品</li>
						<li class="border">食品</li>
						<li class="border">食品</li>
						<li class="border">后台添加</li>
					</ul>
				</div>
			</div>
			<div class="type-content">
				<div class="type-cont">
					<span>您的单笔投资范围</span>
					<ul>
						<input v-model="number" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
						至
						<input v-model="numberTo" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
						<!--<li class="border">
							<input v-model="number" placeholder="请输入数字" number="true" type="number" class="mint-field-core">
						</li>
						<li class="border">
							
						</li>-->
					</ul>
				</div>
			</div>
			<div class="type-content">
				<div class="type-cont">
					<span>您是否有新三板客户？</span>
					<ul>
						<li class="border">有</li>
						<li class="border">没有</li>
					</ul>
				</div>
			</div>
			<div class="type-content">
				<div class="type-cont">
					<span>您倾向于什么样的投资方式（可多选）？</span>
					<ul>
						<li class="border">了解</li>
						<li class="border">不了解</li>
					</ul>
				</div>
			</div>
			<div class="type-food" @click.stop="ToHoom">
				<span>进入首页</span>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
//	import BScroll from "better-scroll";
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
				number:"",
				numberTo:"",
				block:false,
				times:20177111129,
				showFlag:true,
				onlyContent:true,
			}
		},
		methods:{
			fanhui(){
				history.go(-1)
			},
			TypeShow(){
				this.showFlag=true;
			},
			ToHoom(){
				window.location.href="#/faxian";
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
	.type{
		position:absolute;
		background:#fff;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:1100;
		overflow:hidden;
		.type-header{
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.4rem;
			.xiangmu-left{
			    position: absolute;
			    padding-left: 0.3rem;
			    display: inline-block;
			    top: 0;
			    left: 0;
			}
		}
		.type-content{
			width:100%;
			height:auto;
			display:flex;
			.type-cont{
				flex:1;
				padding:0 0.2rem;
				span{
					display:block;
					margin:0.26rem 0 0.06rem 0.1rem;
				}
				ul{
					.mint-field-core{
						border:1px solid #2C3E50;
						width:0.6rem;
						margin:0;
						padding:0.04rem 0.14rem;
						margin:0.06rem 0.1rem;
					}
					li{
						display:inline-block;
						margin:0;
						padding:0.08rem 0.18rem;
						margin:0.06rem 0.1rem;
					}
				}
		    /*-webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;*/
		   	}
		}
		.type-food{
			width:80%;
			height:0.4rem;
			margin:auto;
			position:absolute;
			left:0;
			right:0;
			bottom:0.2rem;
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


