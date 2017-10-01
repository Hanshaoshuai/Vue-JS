<template>
	<!--<transition name="fade">-->
		<div class="wode">
			<div class="searchBox">
				<div class="home-search">
					<img src=""/>
				</div>
				<div class="header-name">
					<font>A</font>
					<div class="header-content">
						<span>天太</span>
						<span>张中</span>
					</div>
				</div>
				<div class="jifen"><font></font><span>积分 666</span></div>
			</div>
			
			<div class="box">
				<div class="FadeContent">
					<div style="width:100%;height:1.06rem;"></div>
					<ul class="content-header ziliao">
						<li>
							<span>186</span>
							<span>收获项目数</span>
						</li>
						<li class="border-rightleft">
							<span>97%</span>
							<span>反馈率</span>
						</li>
						<li>
							<span>100%</span>
							<span>约谈率</span>
						</li>
					</ul>
					<box></box>
					<div class="dujia-header border-top" @click.stop="ziliaoShow(type.h)">
						<span><font class="kuaixuna"></font>个人资料</span>
						<a class="wancheng">完成度78%</a><span></span>
					</div>
					<div class="dujia-header border-top" @click.stop="dujiaGo()">
						<span><font class="kuaixunb"></font>融资项目备案</span>
						<span></span>
					</div>
					<div class="dujia-header border-top" @click.stop="jiluGo()">
						<span><font class="kuaixunc"></font>历史融资记录</span>
						<span></span>
					</div>
					<div class="dujia-header border-top" @click.stop="baomingGo()">
						<span><font class="kuaixund"></font>我报名的</span>
						<span></span>
					</div>
					<div class="dujia-header border-topbottom" @click.stop="gangweiGo()">
						<span><font class="kuaixune"></font>工作岗位变更</span>
						<span></span>
					</div>
					<div style="width:100%;height:0.18rem;"></div>
					<div class="dujia-header border-topbottom" @click.stop="biduGo()">
						<span><font class="kuaixunf"></font>设置</span>
						<span></span>
					</div>
				</div>
			</div>
			<!--<bidu ref="biduShow"></bidu>-->
			<!--<jilu ref="jiluShow"></jilu>-->
			<router-view :token="token"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import box from "../box.vue"
//	import BScroll from "better-scroll";
//	import bidu from "./RongziBidu/biDu.vue";
//	import jilu from "./RongziJilu/jiLu.vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			token:{}
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				block:false,
				times:20177111129,
				showFlag:false,
				onlyContent:true,
				type:{
					a:"A",
					b:"B",
					c:"C",
					d:"D",
					e:"E",
					f:"F",
					g:"G",
					h:"H"
				}
			}
		},
		methods:{
			biduGo(){
//				this.$refs.biduShow.biduBlock();
				window.location.href="#/wode/shezhi/0";
			},
			ziliaoShow(id){
				window.location.href="#/wode/ziliao"+id+"/0";
			},
			jiluGo(){
				window.location.href="#/wode/jilu/0";
			},
			baomingGo(){
				window.location.href="#/wode/baoming/0";
			},
			gangweiGo(){
				window.location.href="#/wode/gangwei/0";
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
			box,
//			jilu
//			ratingselect,
//			split
		}
	}
</script>

<style lang="scss" scoped>
	.wode{
		width:100%;
		height:100%;
		background-color: #f5f4f9;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
			width:100%;
		    padding:0.26rem 0 0.18rem 0;
		    background-color: #00C850;
		    background-image:url("./img/bgbg.png");
		    background-size:100%;
		    background-position:0 -0.2rem;
		    display:flex;
		    z-index:100;
		    .home-search {
		    	width:0.62rem;
		    	height:0.62rem;
			    background: #ffffff;
			    margin-left:4.9%;
			    border-radius:0.06rem;
			    img{
			    	width:100%;
			    	height:100%;
			    }
			}
			.header-name{
				padding-left:0.11rem;
				height:100%;
				font{
					font-size:0.2rem;
					line-height:0.34rem;
				}
				.header-content{
					margin-top:0.06rem;
					font-size:0.16rem;
					span{
						&:first-child{
							display:inline-block;
							padding-right:0.13rem;
						}
					}
				}
			}
			.jifen{
				width:0.75rem;
				height:0.15rem;
				position:absolute;
				top:0.58rem;
				right:0.16rem;
				font-size:0.12rem;
				display:flex;
				align-items:center;
				color:#fff;
				font{
					display:inline-block;
					width:0.15rem;
					height:0.15rem;
					background-image:url("./img/jifen.png");
					background-size:100% 100%;
					margin:-0.02rem 0.06rem 0 0;
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
				.content-header{
					width:100%;
					height:0.33rem;
					padding:0.12rem 0;
					font-size:0.18rem;
					background:#fff;
					display:flex;
					li{
						flex:1;
						text-align:center;
						display:flex;
						flex-direction:column;
						span{
							&:first-child{
								margin-top:-0.04rem;
							}
							&:last-child{
								font-size:0.14rem;
								display: block;
								padding-top:0.1rem;
								color:#737373;
							}
						}
					}
				}
				.dujia-header{
					flex:1;
					background:#fff;
					padding:0.12rem 0.18rem;
					.wancheng{
						position:absolute;
						top:0.12rem;
						right:0.4rem;
						line-height:0.34rem;
					}
					span{
						font-size:0.16rem;
		    			font-weight:500;
		    			line-height:0.34rem;
		    			vertical-align: top;
						&:first-child{
							/*font-weight:bold;*/
							font-size:0.16rem;
						}
						&:last-child{
							float:right;
							float:right;
							width:0.18rem;
							height:0.22rem;
							background-image:url("./img/jiantou.png");
							background-size:100% 100%;
							margin-top:0.06rem;
						}
						font{
							display:inline-block;
							width:0.24rem;
							height:0.24rem;
							margin:0.04rem 0.08rem 0 0;
							background-size:100% 100%;
							background-repeat:no-repeat;
							
						}
						.kuaixuna{
							background-image:url("./img/geren.png");
						}
						.kuaixunb{
							background-image:url("./img/beian.png");
						}
						.kuaixunc{
							background-image:url("./img/jilu.png");
						}
						.kuaixund{
							background-image:url("./img/baoming.png");
						}
						.kuaixune{
							background-image:url("./img/wode1.png");
						}
						.kuaixunf{
							background-image:url("./img/shezhi.png");
						}
					}
				}
			}
		}
	}
</style>


