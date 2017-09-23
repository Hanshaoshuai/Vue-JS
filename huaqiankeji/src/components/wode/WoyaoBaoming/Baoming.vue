<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone"><</span>
					<span>我要报名</span>
				</div>
			</div>
			<div class="box">
				<div class="box-content">
					<div style="width:100%;height:0.5rem;"></div>
					<div class="dujia border-top">
						<div class="dujia-content" @click.stop="xiangqingGo()">
							<ul>
								<li>
									近一个月企融近一个月企融直通车概况直通车概况
									Pre-IPO
									
								</li>
								<li class="border">
									<img src="" alt="" />
								</li>
							</ul>
							<div class="content-food">
								<img class="border" src="" alt="" />
								<span>&nbsp;&nbsp;{{cishu}}次阅读</span>
								<span>&nbsp;&nbsp;投资经理</span>
								<span>{{cishu}}发布</span>
							</div>
						</div>
						<box style="background:#FCE7E6;"></box>
						<div class="dujia-content" @click.stop="xiangqingSGo()">
							<ul>
								<li>
									IPO近一个月企融近一个月企融直通车概况直通车概况
									近一个月企融近一个月企融直通车概况直通车概况
									<div class="yusuan">
										5月<span>&nbsp;至&nbsp;</span>7月
										<span>8888&nbsp;元</span>
									</div>
								</li>
								<li class="border">
									<img src="" alt="" />
								</li>
							</ul>
							<div class="content-food">
								<img class="border" src="" alt="" />
								<span>&nbsp;&nbsp;{{cishu}}次阅读</span>
								<span>&nbsp;&nbsp;投资经理</span>
								<span>{{cishu}}发布</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import box from "../../box.vue";
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
				shijian:"6",
				cishu:"166",
				block:false,
				ButtenName:"索要完整项目信息",
				showFlag:true,
				onlyContent:true
			}
		},
		methods:{
			listnone(){
				window.location.href="#/wode"
//				history.go(-1);
			},
			xiangqingGo(){
				window.location.href="#/wode/baoming/5/PreIpo"
			},
			xiangqingSGo(){
				window.location.href="#/wode/baoming/5/Ipo"
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
	.wenzhang{
		position:absolute;
		background:#FCE7E6;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:1000;
		overflow-y:auto;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color: #fff;
		    z-index:1100;
		    .home-search {
			    height: 100%;
			    padding-left:0.5rem;
			    line-height:0.45rem;
			    font-size: 0.16rem;
			    .fanhui-butten{
					position:absolute;
					top:0;
					left:0.2rem;
				}
			}
		}
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			.box-content{
				width:100%;
				height:auto;
				.dujia{
					width:100%;
					display:flex;
					flex-direction:column;
					background:#fff;
					.dujia-content{
						flex:1;
						padding:0.2rem;
						ul{
							width:100%;
							padding-bottom:0.16rem;
							display:flex;
							/*-webkit-box-pack: center;
						    justify-content: center;
						    -webkit-box-align: center;
						    align-items: center;*/
							li{
								.yusuan{
									padding:0.1rem 0;
									span{
										&:last-child{
											display:inline-block;
											float:right;
											color:#F01414;
											margin-right:0.3rem;
										}
									}
								}
								&:first-child{
									flex:3;
									line-height:0.2rem;
								}
								&:last-child{
									flex:1;
									height:0.8rem;
								}
							}
						}
						.content-food{
							line-height:0.22rem;
							img{
								vertical-align:top;
								width:0.2rem;
								height:0.2rem;
							}
							span{
								&:last-child{
									float:right;
								}
							}
						}
					}
				}
			}		
		}
	}
</style>


