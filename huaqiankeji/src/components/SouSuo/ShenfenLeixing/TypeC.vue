<template>
	<transition name="fade">
		<div v-show="showList" class="faxian">
			<div class="searchBox">
				<div class="home-search border">
					<img src="" alt="" />
				</div>
				<div class="header-name">
					<span>C</span>
					<div class="header-content">
						<span>天太</span>
						<span>张中</span>
					</div>
				</div>
			</div>
			
			<div class="box">
				<div class="FadeContent">
					<div style="width:100%;height:0.82rem;"></div>
					<div class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>已投资项目</span>
						</div>
						<div class="xiaolv anli">
							<div class="anli-list">
								<span >反徐小</span>
								<span class="center">345454</span>
							</div>
							<div class="anli-list">
								<span >反徐小</span>
								<span class="center">345454</span>
							</div>
							<div class="anli-list">
								<span >反徐小</span>
								<span class="center">345454</span>
							</div>
						</div>
					</div>
					
					<!--<div style="width:100%;height:0.5rem;"></div>-->
				</div>
			</div>
			<div class="sousuo-food">
				<div class="food-text">
					<span>留言</span>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	
	import box from "../../box.vue";
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
				times:20177111129,
				showList:false,
				onlyContent:true,
			}
		},
		created(){
			this.$nextTick(function() {
				
			});
		},
		methods:{
			fankuiTo(){
				this.$refs.fankuiShow.fankuiBlock();
			},
			typeShow(){
//				if(!event._constructed){
//					return;
//				}
				this.showList=true;
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
			box
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
	.faxian{
		position:fixed;
		background-color: #FCE7E6;
		top:0;
		left:0;
		bottom:0;
		right:0;
		width:100%;
		height:100%;
		z-index:1000;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:auto;
		    padding:0.2rem;
		    background-color: #00C850;
		    display:flex;
		    z-index:1100;
		    .home-search {
		    	width:0.8rem;
		    	height:0.8rem;
			    background: #ffffff;
			    img{
			    	width:100%;
			    	height:100%;
			    }
			}
			.header-name{
				padding-left:0.2rem;
				height:100%;
				&>span{
					font-size:0.2rem;
					line-height:0.3rem;
				}
				.header-content{
					margin-top:0.2rem;
					span{
						&:first-child{
							display:inline-block;
							padding-right:0.1rem;
						}
					}
				}
			}
		}
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			.FadeContent{
				width:100%;
				height:auto;
				padding:0.45rem 0 0.6rem 0;
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					padding-bottom:0.2rem;
					/*margin:0.05rem 0;*/
					/*display:flex;*/
					/*flex-direction:column;*/
					.content-header{
						padding:0.08rem 0.2rem;
						font-size:0.2rem;
						span{
							line-height:0.3rem;
						}
					}
					.xiaolv{
						padding:0 0.2rem;
						span{
							line-height:0.16rem;
						}
					}
					.anli{
						padding-left:0.4rem;
						.anli-list{
							display:flex;
							width:100%;
							span{
								flex:1;
								line-height:0.2rem;
							}
							/*.center{
								padding:0 0.1rem;
							}*/
						}
					}
				}
			}
		}
		.sousuo-food{
			position:absolute;
			width:100%;
			bottom:0.15rem;
			left:0;
			display: flex;
		    -webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;
			.food-text{
				padding:0.1rem 0.3rem;
				background:#00A0DC;
				color:#fff;
				border-radius:0.05rem;
			}
		}
	}
</style>


