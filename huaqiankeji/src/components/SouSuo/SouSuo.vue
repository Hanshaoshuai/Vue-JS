<template>
	<transition name="fade">
		<div class="faxian">
			<div class="searchBox">
				<div class="home-search">
					<input placeholder="请输入网址" type="url" class="mint-field-core sousuo">
				</div>
				<!--<span @click.stop="sousuoTo">搜索</span>-->
			</div>
			<div class="box">
				<div class="wenzhang-content" ref="tianjia">
					<div class="sousuo-content border-topbottom" @click.stop="xiangQing()">
						<div class="content-header">
							<font></font>
							<div class="names">
								<span class="border-right">徐小平</span>
								<span>真格基金</span>&nbsp;
								<span>徐小平</span>
							</div>
						</div>
						<div class="xiaolv border-topbottom">
							<div class="border-right">
								<li><font>235</font></li>
								<span>收获项目数</span>
							</div>
							<div class="border-right">
								<li><font class="center">2&nbsp;%</font></li>
								<span class="center">反馈率</span>
							</div>
							<div class="border-right">
								<li><font>200&nbsp;%</font></li>
								<span>约谈率</span>
							</div>
						</div>
						<div class="leimu">
							<div class="zhonglei">
								<span class="jieduan">阶段：PE</span>
								<span  class="dangbi">单笔投资：1000万-2000万</span>
								<span  class="zijin">资金成本：年化20%-30%</span>
								<span  class="fangkuan">放款速度：不超过90天</span>
								<span  class="lingyu">领域：医疗、军事</span>
							</div>
						</div>
					</div>
					<div class="sousuo-content border-topbottom">
						<div class="content-header">
							<font></font>
							<div class="names">
								<span class="border-right">徐小平</span>
								<span>真格基金</span>&nbsp;
								<span>徐小平</span>
							</div>
						</div>
						<div class="xiaolv border-topbottom">
							<div class="border-right">
								<li><font>235</font></li>
								<span>收获项目数</span>
							</div>
							<div class="border-right">
								<li><font class="center">2&nbsp;%</font></li>
								<span class="center">反馈率</span>
							</div>
							<div class="border-right">
								<li><font>200&nbsp;%</font></li>
								<span>约谈率</span>
							</div>
						</div>
						<div class="leimu">
							<div class="zhonglei">
								<span class="jieduan">阶段：PE</span>
								<span  class="dangbi">单笔投资：1000万-2000万</span>
								<span  class="zijin">资金成本：年化20%-30%</span>
								<span  class="fangkuan">放款速度：不超过90天</span>
								<span  class="lingyu">领域：医疗、军事</span>
							</div>
						</div>
					</div>
				</div>			
			</div>
			<router-view></router-view>
			<!--<router-view :setscrollTop="scrollTop" :datas="datas" :TouziToken='TouziToken'></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
//	import typea from './ShenfenLeixing/TypeH.vue';
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
			},
			xiangQing(){
				window.location.href="#/sousuo/"+this.$route.params.token+'/'+"SousuoLeixing";
//				this.$refs.TypeA.typeShow();
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
//			typea
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
		background-color: #f5f4f9;
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
		    background-color: #ff7a59;
		    /*span{
		    	display:inline-block;
		    	position:absolute;
		    	right:0;
		    	top:0;
		    	padding-right:0.3rem;
		    	line-height:0.45rem;
		    	z-index:10000;
		    }*/
		    .home-search {
		    	position: absolute;
		    	margin:auto;
		    	top:0;
		    	left:0;
		    	right:0;
		    	bottom:0;
			    width: 87.8%;
			    height: 0.3rem;
			    /*background: #ffffff;*/
			    /*color: #CACACA;*/
			    font-size: 0.14rem;
			    .sousuo{
			    	border-radius:0.1rem;
			    	padding-left:4%;
			    	width:96%;
			    	height:100%;
			    }
			}
		}
		.box::-webkit-scrollbar{width:0px;}
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;  		/*解决ios滑动*/
			.wenzhang-content{
				width:95%;
				/*height:auto;*/
				margin:0 auto;
				padding:0.55rem 0 0.6rem 0;
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					margin-bottom:0.1rem;
					border-radius:0.08rem;
					box-sizing:border-box;
					box-shadow: 0.02rem 0.02rem 0.03rem #e4e3e8;
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
							border-radius:0.3rem;
							border:none;
							border:2px solid #e5e4e4;
						}
						.names{
							flex:1;
							.border-right{
								display:inline-block;
								padding-right:0.06rem;
							}
						}
					}
					.xiaolv{
						padding:0.1rem 0;
						display:flex;
						color:#8c8c8c;
						background:#f7fcff;
						div{
							flex:1;
							text-align:center;
							font-size:0.14rem;
							li{
								color:#2abdfc;
								font-size:0.16rem;
								padding-bottom:0.07rem;
							}
						}
						.center{
							padding:0 0.1rem;
						}
					}
					.leimu{
						width:95%;
						margin:0 auto;
						color:#8c8c8c;
						padding:0.02rem 0;
						.zhonglei{
							width:100%;
							overflow:hidden;
							span{
								float:left;
								display:inline-block;
								line-height:0.26rem;
								white-space:nowrap;
								overflow:hidden;
								text-overflow:ellipsis;
							}
							.jieduan{
								width:48.3%;
								padding-right:1.2%;
							}
							.dangbi{
								width:49.3%;
								padding-right:1.2%;
							}
							.zijin{
								width:48.3%;
								padding-right:1.2%;
							}
							.fangkuan{
								width:48.3%;
								padding-right:1.2%;
							}
							.lingyu{
								width:auto;
								padding-right:1.2%;
							}
						}
					}
				}
			}
		}
	}
</style>


