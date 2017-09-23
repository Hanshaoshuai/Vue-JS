<template>
	<transition name="fade">
		<div class="faxian">
			<div class="searchBox">
				<div class="home-search">
					<input placeholder="请输入网址" type="url" class="mint-field-core sousuo">
				</div>
				<span @click.stop="sousuoTo">搜索</span>
			</div>
			<div class="box">
				<div class="FadeContent">
					<div class="sousuo-content border-topbottom" @click.stop="xiangQing()">
						<div class="content-header">
							<img src="" alt="" />
							<span>徐小平</span>&nbsp;
							<span>真格基金</span>&nbsp;
							<span>徐小平</span>
						</div>
						<div class="xiaolv">
							<span>收获项目数：235</span>
							<span class="center">反馈率：2&nbsp;%</span>
							<span>约谈率：200&nbsp;%</span>
						</div>
						<div class="leimu">
							<div>
								<span>阶段：23</span>
								<span>领域：2</span>
							</div>
							<div>
								<span>单个项目投资额：2</span>
								<span>金额成本：2</span>
							</div>
							<span>放款速度：2</span>
						</div>
					</div>
					<!--<div style="width:100%;height:0.5rem;"></div>-->
				</div>
			</div>
			<typea ref="TypeA"></typea>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import typea from './ShenfenLeixing/TypeH.vue';
//	import fankui from "./Fankui/Fankui.vue";
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
				history.go(-1)
			},
			sousuoTo(){
//				if(!event._constructed){
//					return;
//				}
				this.$refs.show.listShow();
			},
			xiangQing(){
				this.$refs.TypeA.typeShow();
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
			typea
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
		    height:0.45rem;
		    background-color: #fff;
		    span{
		    	display:inline-block;
		    	position:absolute;
		    	right:0;
		    	top:0;
		    	padding-right:0.3rem;
		    	line-height:0.45rem;
		    	z-index:10000;
		    }
		    .home-search {
		    	position: absolute;
		    	margin:auto;
		    	top:0;
		    	left:0;
		    	right:0;
		    	bottom:0;
			    width: 80%;
			    height: 0.3rem;
			    background: #ffffff;
			    /*color: #CACACA;*/
			    font-size: 0.14rem;
			    .sousuo{
			    	border:0.005rem solid #93999F;
			    	border-radius:0.06rem;
			    	padding-left:0.1rem;
			    	width:86%;
			    	height:100%;
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
				padding:0.45rem 0;
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					margin:0.05rem 0;
					/*display:flex;*/
					/*flex-direction:column;*/
					.content-header{
						padding:0.08rem 0.2rem;
						font-size:0.16rem;
						span{
							line-height:0.6rem;
						}
						img{
							width:0.6rem;
							height:0.6rem;
							vertical-align:top;
							margin-right:0.1rem;
						}
					}
					.xiaolv{
						padding:0.08rem 0.2rem;
						display:flex;
						span{
							/*flex:1;*/
							line-height:0.18rem;
							text-align:center;
						}
						.center{
							padding:0 0.1rem;
						}
					}
					.leimu{
						padding:0 0.2rem 0.2rem 0.2rem;
						div{
							display:flex;
							span{
								flex:1;
								line-height:0.2rem;
							}
						}
					}
				}
			}
		}
	}
</style>


