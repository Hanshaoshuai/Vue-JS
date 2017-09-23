<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<div class="type-header" @click.stap="fanhuiC">
				<span class="xiangmu-left"><</span>
				债权投资
			</div>
			<div class="type-content-list">
				<div class="list-header">
					<span>债权投资特性</span>
				</div>
				<div class="type-content ferst">
					<div class="type-cont">
						<span>您对企业有什么要求？</span>
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
						<span>您的单笔投资金额不低于？</span>
						<ul>
							<div class="shouru">
								营业收入不低于
								<input v-model="number" placeholder="输入数字" number="true" type="number" class="mint-field-core border">万
							</div>
							<div class="shouru">
								净利润不低于
								<input v-model="numberTo" placeholder="输入数字" number="true" type="number" class="mint-field-core border">万
							</div>
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
						<span>您实际能提供的年化资金成本范围？</span>
						<ul>
							<input v-model="number" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							%&nbsp;至
							<input v-model="numberTo" placeholder="输入数字" number="true" type="number" class="mint-field-core border">%&nbsp;
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>您的单笔能提供的投资规模？</span>
						<ul>
							<input v-model="number" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							万&nbsp;至
							<input v-model="numberTo" placeholder="输入数字" number="true" type="number" class="mint-field-core border">万&nbsp;
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>从接触项目到放款的时间周期不超过？</span>
						<ul>
							<input v-model="number" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							天
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>您是否有地域要求（选填）？</span>
						<ul class="type-padding">
							<mt-field  class="border" placeholder="用户填文字，后台审核的时候填写标准化的标签" type="textarea" rows="4" v-model="introduction"></mt-field>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>借债主题是（选填）？</span>
						<ul class="type-padding">
							<mt-field  class="border" placeholder="用户填文字，后台审核的时候填写标准化的标签" type="textarea" rows="4" v-model="introduction"></mt-field>
						</ul>
					</div>
				</div>
				
				<div class="type-food" @click.stop="ToHoom">
					<div class="type-food-text">
						<span>进入首页</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
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
				introduction:"",
				showFlag:false
//				onlyContent:true,
//				times:20177111129
			}
		},
		methods:{
			fanhuiC(){
				this.showFlag=false;
//				history.go(-1)
			},
			childShow(){
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
		z-index:300;
		overflow-y:auto;
		.type-header{
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.4rem;
			position:absolute;
			top:0;
			left:0;
			z-index:400;
			.xiangmu-left{
			    position: absolute;
			    padding-left: 0.3rem;
			    display: inline-block;
			    top: 0;
			    left: 0;
			}
		}
		.type-content-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			.list-header{
				width:100%;
				padding-top:0.6rem;
				display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    font-size:0.2rem;
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
						.shouru{
							padding:0 0.1rem;
						}
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
					.type-padding{
						padding:0.1rem;
					}
			   	}
			}
			.type-food{
				width:100%;
				height:0.4rem;
				margin:auto;
				margin:0.36rem 0;
				.type-food-text{
					width:80%;
					height:100%;
					margin:0 auto;
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
		}
	}
</style>


