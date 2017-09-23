<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<div class="type-header" @click.stap="fanhuiA">
				<span class="xiangmu-left"><</span>
				投资机构
			</div>
			<div class="type-content">
				<div class="type-cont">
					<span>您是什么类型的投资机构</span>
					<ul>
						<li @click.stap="guquan">股权投资</li>
						<li @click.stap="zhaiquan">债权投资</li>
						<li @click.stap="guzhai">股债兼投</li>
					</ul>
				</div>
			</div>
			<Guquan ref="Guquan"></Guquan>
			<Guzhai ref="Guzhai"></Guzhai>
			<Zaiquan ref="Zaiquan"></Zaiquan>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import Guquan from "./Guquan/Guquan.vue";
	import Guzhai from "./Guzhai/Guzhai.vue";
	import Zaiquan from "./Zaiquan/Zaiquan.vue";
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
			fanhuiA(){
				history.go(-1)
			},
			TypeShow(){
				this.showFlag=true;
			},
			guquan(){
				this.$refs.Guquan.Toguquan();
			},
			guzhai(){
				this.$refs.Guzhai.Toguzhai();
			},
			zhaiquan(){
				this.$refs.Zaiquan.Tozhaiquan();
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
			Guquan,
			Guzhai,
			Zaiquan
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
				padding:0 0.8rem;
				text-align:center;
				span{
					display:block;
					margin:0.26rem 0 0.06rem 0.1rem;
				}
				ul{
					li{
						background:#00A0DC;
						color:#fff;
						border-radius:0.1rem;
						font-size:0.2rem;
						padding:0.1rem;
						margin:0.2rem;
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


