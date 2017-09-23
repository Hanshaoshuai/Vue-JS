<template>
	<!--<transition name="fade">-->
		<div class="faxian">
			<div class="searchBox">
				<div class="home-search" @click.stop="sousuo">
					<img src="./circle_hot_search.png"/>
					<span>搜公司，碰碰运气吧</span>
				</div>
				<!--<li class="tubiao" @click.stop="wode"><span></span></li>-->
			</div>
			<!--<div class="box">-->
			<div class="page-loadmore-wrapper" id="fanxian" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<!--<div style="width:100%;height:0.5rem;"></div>-->
	    		<!--mt-loadmore中添加:auto-fill="autoFill"属性  不够高是会自动撑开屏幕-->
	      		<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :top-distance=30 :bottom-distance=30 ref="loadmore">
		        <ul class="page-loadmore-list">
		        <!--<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>-->
				<!--<div class="FadeContent">-->
					<div class="banner"></div>
					<div class="ContentType">
						<!--<div v-if="x" class="TypeList" @click.stop="XiangMuGo()">
							<div class="TypeList-img">
								<li></li>
							</div>
							<div class="TypeList-text border-right">
								<span>我要融资</span>
								<span class="text-coler">智能匹配全国投资机构</span>
							</div>
						</div>
						<div v-if="q" class="TypeList" @click.stop="qiyefankuiGo()">
							<div class="TypeList-img">
								<li class="fankui"></li>
							</div>
							<div class="TypeList-text">
								<span>投资人反馈</span>
								<span class="text-coler">查看反馈留言箱</span>
							</div>
						</div>-->
						<div v-if="w" class="TypeList" @click.stop="rongziGo()">
							<div class="TypeList-img">
								<li></li>
							</div>
							<div class="TypeList-text border-right">
								<span>我要融资</span>
								<span class="text-coler">智能匹配全国投资机构</span>
							</div>
						</div>
						<div v-if="t" class="TypeList" @click.stop="touzifankuiGo()">
							<div class="TypeList-img">
								<li  class="fankui"></li>
							</div>
							<div class="TypeList-text">
								<span>投资人反馈</span>
								<span class="text-coler">查看反馈留言箱</span>
							</div>
						</div>
					</div>
					<div class="bannerlist">
						<div class="swiper-img">
							<span></span>
						</div>
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<!--<div v-for="item in bannerlist" class="swiper-slide" style="background-color: #0f0;">
									<img :src="item" />
								</div>-->
								<!--<ul>-->
									<div class="swiper-slide">
										<span>张摆上</span>
										<span>同创伟业</span>
										<span>合伙</span>
										<span>入住了</span>
									</div>
									<div class="swiper-slide">
										<span>张sa摆上</span>
										<span>同创伟业</span>
										<span>合dds伙</span>
										<span>入住了</span>
									</div>
									<div class="swiper-slide">
										<span>张aaa摆上</span>
										<span>同s创伟业</span>
										<span>合伙</span>
										<span>入住fd了</span>
									</div>
								<!--</ul>-->
							</div>
							<!--<div class="swiper-pagination"></div>-->
						</div>
					</div>
					<div class="ContentList " @click.stop="yijianFankui">
						<div class="swiper-img">
							<span class="img-rongzi"></span>
						</div>
						<div class="swiper-container">
							<span class="text">你可以联系的其他正在融资项目</span>
						</div>
					</div>
					<div class="ContentText " @click.stop="contblock()">
						<div class="TextMame">
							<div class="margin">
								<span class="texts">天立泰</span>
								<span class="texts">定增</span>
							</div>
							<div class="TypeList">
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
							</div>
						</div>
						<div class="BottomText">
							<span class="texts">他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以联系的</span>
						</div>
						<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
							<div class="tishi-left">
								<span>企业</span>
								<span>{{}}小时前</span>&nbsp;发布
							</div>
							<div class="tishi-right">
								<span>{{}}反馈</span>
								<span>{{}}跟进</span>
							</div>
							<li></li>
							<ol class="ol"></ol>
						</div>
					</div>
					<div class="ContentText " @click.stop="contblock()">
						<div class="TextMame">
							<div class="margin">
								<span class="texts">天立泰</span>
								<span class="texts">定增</span>
							</div>
							<div class="TypeList">
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
							</div>
						</div>
						<div class="BottomText">
							<span class="texts">他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以联系的</span>
						</div>
						<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
							<div class="tishi-left">
								<span>企业</span>
								<span>{{}}小时前</span>&nbsp;发布
							</div>
							<div class="tishi-right">
								<span>{{}}反馈</span>
								<span>{{}}跟进</span>
							</div>
						</div>
					</div>
					
					
					<div class="tucao">
						<img src="./img/hongbao.png" alt="" />
					</div>
					
					
					<div class="ContentText " @click.stop="contblock()">
						<div class="TextMame">
							<div class="margin">
								<span class="texts">天立泰</span>
								<span class="texts">定增</span>
							</div>
							<div class="TypeList">
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
							</div>
						</div>
						<div class="BottomText">
							<span class="texts">他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以联系的</span>
						</div>
						<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
							<div class="tishi-left">
								<span>企业</span>
								<span>{{}}小时前</span>&nbsp;发布
							</div>
							<div class="tishi-right">
								<span>{{}}反馈</span>
								<span>{{}}跟进</span>
							</div>
						</div>
					</div>
					<div class="ContentText " @click.stop="contblock()">
						<div class="TextMame">
							<div class="margin">
								<span class="texts">天立泰</span>
								<span class="texts">定增</span>
							</div>
							<div class="TypeList">
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
								<span class="texts">天立泰</span>
								<span class="texts">定增万</span>
							</div>
						</div>
						<div class="BottomText">
							<span class="texts">他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以他正在你可以联系的</span>
						</div>
						<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
							<div class="tishi-left">
								<span>企业</span>
								<span>{{}}小时前</span>&nbsp;发布
							</div>
							<div class="tishi-right">
								<span>{{}}反馈</span>
								<span>{{}}跟进</span>
							</div>
						</div>
					</div>
					<transition name="promps">
					<div class="tishi-bottom" v-show="promps">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">亲已经到底了</li>
							<li class="border-bottom"></li>
						</ul>
					</div>
					</transition>
				<!--</div>-->
				</ul>
		       	<div slot="top" class="mint-loadmore-top">
		          	<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }"> ↓ </span>
		          	<span v-show="topStatus == 'drop'">请释放更新吧</span>
		          	<span v-show="topStatus === 'loading'">
		            	<mt-spinner :type="3" color="#26a2ff"></mt-spinner>
		          	</span>
		        </div>    
		        <div slot="bottom" class="mint-loadmore-bottom">
		          	<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }"> ↑ </span>
		          	<span v-show="bottomStatus == 'drop'">请释放加载吧</span>
		          	<span v-show="bottomStatus === 'loading'">
		            	<mt-spinner :type="3" color="#26a2ff"></mt-spinner>
		          	</span>
		        </div>
				</mt-loadmore>
		      	<!--<transition name="promps">
		      		<p class="page-loadmore-desc" v-show="promps">暂无数据</p>
		      	</transition>-->
		      	<div style="width:100%;height:0.6rem;"></div>
		    </div>
			<!--</div>-->
			<xiangmu ref="xiangmuShow" :setscrollTop="scrollTop"></xiangmu>
			<fankui ref="fankuiShow"></fankui>
			<DingzengZhaiyao ref="show"></DingzengZhaiyao>
			<GuquanZhaiyao ref="GuquanShow"></GuquanZhaiyao>
			<yijian ref="yijianShow"></yijian>
			<router-view></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import xiangmu from "./XinxiangMu/XinxiangMu.vue";
	import fankui from "./Fankui/Fankui.vue";
	import DingzengZhaiyao from "./DingzengZhaiyao.vue";
	import GuquanZhaiyao from "./GuquanZhaiyao.vue";
	import yijian from "./yijian.vue";
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
				x:true,
				q:true,
				w:true,
				t:true,
				times:20177111129,
				showList:false,
				onlyContent:true,
				mySwiper:"",
				scrollTop:"",
				
				
				list: [],
		        allLoaded: false,
//		        autoFill:true,
		        bottomStatus: '',
		        wrapperHeight: 0,
		        topStatus: '',
		        promps:false,
		        scrollTop:""
			}
		},
		methods:{
			handleTopChange(status) {    //头部函数
//	      		console.log("top")
		        this.topStatus = status;
		        
//		        console.log(this.wrapperHeight)
//		      	console.log(this.$refs.wrapper.scrollTop)
//		      	console.log(document.documentElement.clientHeight)
//		      	console.log(this.$refs.wrapper.getBoundingClientRect().top)
	      	},
	      	translateChange(translate) {
		        const translateNum = +translate;
	      	},
	      	loadTop() {
	      		console.log("top")
	        	setTimeout(() => {
//		          	let firstValue = this.list[0];
//		          	for (let i = 1; i <= 10; i++) {
//		            	this.list.unshift(firstValue - i);
//		          	}
		          	this.$refs.loadmore.onTopLoaded();
	        	}, 1500);
	      	},
	      	handleBottomChange(status) {		//底部函数
//	      		console.log("bot")
	        	this.bottomStatus = status;
	      	},
	      	loadBottom() {
//	      		console.log("bot")
		        setTimeout(() => {
		          	let lastValue = this.list[this.list.length - 1];
		          	if (lastValue < 20) {
			            for (let i = 1; i <= 10; i++) {
			              	this.list.push(lastValue + i);
			            }
		          	} else {
		            	this.allLoaded = false; //若为真，则 bottomMethod 不会被再次触发 就不能再向上拉了
		            	this.promps = true;
//		            	let clear = setTimeout(()=>{
//		            		this.promps = false;
//		            		clearTimeout(clear);
//		            	},1500);
		          	}
		          	this.$refs.loadmore.onBottomLoaded();
		        }, 1500);
	      	},
			
			
			
			
			
			sousuo(){
				window.location.href="#/sousuo";
			},
			rongziGo(){
				window.location.href="#/faxian/WoyaoRongzi/0";
			},
			touzifankuiGo(){
				this.$refs.fankuiShow.fankuiBlock();
			},
			XiangMuGo(){
				this.scrollTop=sessionStorage.getItem("scrollTop")
				this.$refs.xiangmuShow.xiangmuBlock(this.scrollTop);
			},
			qiyefankuiGo(){
				this.$refs.fankuiShow.fankuiBlock();
			},
			contblock(){
//				if(!event._constructed){
//					return;
//				}
				this.$refs.show.listShow();
			},
			Guquanzhaiyao(){
				this.$refs.GuquanShow.Guquanblock();
			},
			yijianFankui(){
				this.$refs.yijianShow.fankiuShow();
			},
			faxianScroll () {
			  var scrollTop = this.$refs.wrapper.scrollTop
			  sessionStorage.setItem("faxianScroll",scrollTop)
//			  console.log(sessionStorage.getItem("faxianScroll"))
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
		created() {
//	    	console.log("一次")
	      	for (let i = 1; i <= 20; i++) {
	        	this.list.push(i);
	      	}
	    },
	    mounted() {
//	    	console.log("计算高度")
	      	this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	      	this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	      	this.$nextTick(function() {
//				if(!this.mySwiper){
	             	this.mySwiper = new Swiper(".swiper-container",{
						direction:"vertical",
						autoplay :2000,
						speed : 2000,//改变Swiper的切换时间曲线
						loop:true,
						autoplayDisableOnInteraction:false,
//						pagination:".swiper-pagination"
					})
//				}
//				var swiper = new Swiper(".swiper-container",{
//					direction:"vertical",
//					autoplay :3600,
//					speed : 2000,//改变Swiper的切换时间曲线
//					loop:true,
//					autoplayDisableOnInteraction:false,
//					pagination:".swiper-pagination"
//				})
			});
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
//			if(!this.mySwiper){
//           	this.mySwiper = new Swiper(".swiper-container",{
//					direction:"vertical",
//					autoplay :3600,
//					speed : 2000,//改变Swiper的切换时间曲线
//					loop:true,
//					autoplayDisableOnInteraction:false,
//					pagination:".swiper-pagination"
//				})
//			}
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
			xiangmu,
			fankui,
			DingzengZhaiyao,
			GuquanZhaiyao,
			yijian
		}
	}
</script>

<style lang="scss" scoped>
	.faxian{
		width:100%;
		height:100%;
		padding-top:0.45rem;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color: #fff;
		    .home-search {
		    	position: absolute;
		    	margin:auto;
		    	top:0;
		    	left:0;
		    	right:0;
		    	bottom:0;
			    width: 3.21rem;
			    height: 0.3rem;
			    background: #f4f4f4;
			    color: #CACACA;
    			border-radius: 0.3rem;
			    font-size: 0.14rem;
			    display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    img{
			    	width:0.16rem;
			    	margin-right:0.1rem;
			    }
			}
			.tubiao{
				position:absolute;
				right:0.18rem;
				top:0.12rem;
				width:0.2rem;
				height:0.2rem;
				background-image:url("./img/wode1.png");
				background-size:100% 100%;
				/*background:#42B983;*/
				span{
					display:inline-block;
					width:0.08rem;
					height:0.08rem;
					background:#E19900;
					border-radius:0.05rem;
					position:absolute;
					top:-0.03rem;
					right:-0.04rem;
				}
			}
		}
		/*.box{*/
			width:100%;
			height:100%;
			/*overflow-y:auto;*/
			
			
			
			
		.page-loadmore-wrapper {
		    overflow-y: scroll;
		    /*overflow-x:hidden;*/
		}
		.mint-loadmore-top span {
		    -webkit-transition: .2s linear;
		    transition: .2s linear;
		    display: inline-block;
		    vertical-align: middle
		}
		.mint-loadmore-top span.is-rotate {
		    -webkit-transform: rotate(180deg);
		    transform: rotate(180deg)
		}
		.page-loadmore-desc {
		    text-align: center;
		    color: #666;
		    padding-bottom: 5px
		}
		.page-loadmore-desc:last-of-type,
		.page-loadmore-listitem {
		    border-bottom: 1px solid #eee
		}
		.page-loadmore-listitem {
		    height: 50px;
		    line-height: 50px;
		    text-align: center
		}
		.page-loadmore-listitem:first-child {
		    border-top: 1px solid #eee
		}
		.mint-loadmore-bottom span {
		    display: inline-block;
		    -webkit-transition: .2s linear;
		    transition: .2s linear;
		    vertical-align: middle
		}
		.mint-loadmore-bottom span.is-rotate {
		    -webkit-transform: rotate(180deg);
		    transform: rotate(180deg)
		}
		/*.mint-loadmore-bottom{
			position:absolute;
			bottom:0;
			left:0;
		}*/
		/*c3动画*/
		.promps-enter-active {
		  	transition: all .1s ease;
		}
		.promps-leave-active {
		  	transition: all .1s ease;
		}
		.promps-enter, .promps-leave-active {
		  	/*transform: translateY(0.5rem);*/
		  	/*transform:rotate(360deg);*/
		  	opacity: 0;
		}
			
			
			/*.FadeContent{
				width:100%;
				height:auto;*/
				.banner{
					width:100%;
					height:1.22rem;
					background:#ff7e57;
				}
				.tucao{
					width:100%;
					min-height:1rem;
					background:#00A0DC;
					margin:0.13rem 0 0.13rem 0;
					overflow:hidden;
					img{
						width:100%;
						float:left;
					}
				}
				.ContentType{
					display: flex;
				    -webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;
					width:97%;
					/*height:1.6rem;*/
					background:#ffffff;
					margin:0 auto;
					margin-top:-0.14rem;
					border-radius:0.14rem;
					box-shadow: 0.03rem 0.03rem 0.04rem #eeeef5;
					.TypeList{
						flex:1;
						display: flex;
						-webkit-box-pack: center;
					    justify-content: center;
					    -webkit-box-align: center;
					    align-items: center;
						/*background:#FECCFF;*/
						margin:0.146rem 0 0.146rem 0.17rem;
						color:#323232;
						.TypeList-img{
							width:0.52rem;
							height:0.52rem;
							/*background-image:url("./img/touzi.png");*/
							/*background:#00A0DC;*/
							border-radius:0.5rem;
							li{
								width:100%;
								height:100%;
								background-image:url("./img/1.png");
								background-size:100% 100%;
								/*background:url("./rongzi.png");*/
							}
							.fankui{
								background-image:url("./img/2.png");
							}
						}
						.TypeList-text{
							flex:1;
							font-size:0.14rem;
							line-height:0.14rem;
							padding:0.17rem 0 0.073rem 0.08rem;
							.text-coler{
								display:block;
								color:#c1c1c1;
								font-size:0.10rem;
								margin-top:0.07rem;
							}
						}
					}
				}
				.bannerlist,.ContentList{
					width:100%;
					height:0.3rem;
					background:#fff;
					margin-top:0.06rem;
					overflow: hidden;
					.swiper-img{
						width:13%;
						height:100%;
						float:left;
						display:flex;
						align-items:center;
						justify-content:flex-end;
						span{
							display:inline-block;
							width:0.16rem;
							height:0.16rem;
							/*background:#25A4BB;*/
							background-image:url("./img/gonggao.png");
							background-size:100% 100%;
							float:right;
							/*margin-top:0.06rem;*/
							margin-right:0.04rem;
						}
						.img-rongzi{
							background-image:url("./img/qita.png");
						}
					}
				    .swiper-container{
						width: 87%;
						float:right;
						.swiper-wrapper{
							width: 100%;
							.swiper-slide{
								width: 100%;
								display: flex;
							    -webkit-box-pack: center;
							    /*justify-content: center;*/
							    -webkit-box-align: center;
							    /*align-items: center;*/
					    		span{
					    			display:inline-block;
					    			height:0.3rem;
					    			font-size:0.11rem;
									line-height:0.33rem;
									/*text-align:center;
							    	display:inline-block;*/
							    	padding:0 0.05rem;
							    	color:#E19900;
							    }
					    	}
						}
					}
				}
				.ContentList{
					width:100%;
					height:0.36rem;
					margin:0.06rem 0 0.06rem 0;
					background:#ffffff;
					display: flex;
				    -webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;
				    font-size:0.15rem;
					.text{
						display:inline-block;
						padding-left:0.05rem;
						font-size:0.16rem;
						line-height:0.16rem;
						margin-top:0.02rem;
						color:#323232;
					}
				}
				.ContentText{
					width:97%;
					min-height:1.76rem;
					display:flex;
					flex-direction:column;
					margin:0 auto;
					margin-bottom:0.07rem;
					/*height:1.4rem;*/
					background:#ffffff;
					position:relative;
					font-size:0.16rem;
					border-radius:0.17rem;
					box-shadow: 0.03rem 0.04rem 0.04rem #eeeef5;
					padding-top:0.12rem;
					.TextMame{
						width:89%;
						/*height:0.8rem;*/
						margin:0 auto;
						padding-bottom:0.1rem;
						.margin{
							float:left;
							width:100%;
							height:0.25rem;
							color:#323232;
							span{
								display:inline-block;
								line-height:0.2rem;
								&:first-child{
									width:31%;
								}
							}
						}
						.TypeList{
							float:left;
							width:100%;
							/*height:0.25rem;*/
							color:#fff;
							overflow:hidden;
							span{
								display:inline-block;
								float:left;
								padding:0.04rem 0.06rem;
								background:#18a2ff;
								border-radius:0.04rem;
								font-size:0.14rem;
								line-height:0.14rem;
								margin:0.04rem 0.07rem 0.04rem 0;
								&:first-child{
									
								}
							}
						}
					}
					.BottomText{
						width:89%;
						margin:0 auto;
						color:#717171;
						padding-bottom:0.14rem;
						text-align:justify;
						word-wrap:break-word;
						font-size:0.13rem;
					}
					.ContentTime{
						position:absolute;
						left:0;
						right:0;
						bottom:0;
						width:100%;
						/*margin:0 auto;*/
						height:0.3rem;
						color:#bcbcbc;
						background:#f5fcff;
						font-size:0.12rem;
						line-height:0.3rem;
						display: flex;
					    -webkit-box-pack: center;
					    justify-content: center;
					    -webkit-box-align: center;
					    align-items: center;
					    border-radius:0rem 0 0.17rem 0.17rem;
					    .tishi-left{
					    	flex:1;
					    	padding-left:5.5%;
					    	span{
					    		&:first-child{
					    			display:inline-block;
					    			margin-right:0.09rem;
					    		}
					    	}
					    }
					    .tishi-right{
					    	flex:1;
					    	padding-right:5.5%;
					    	text-align:right;
					    	span{
					    		&:first-child{
					    			display:inline-block;
					    			margin-right:0.09rem;
					    		}
					    	}
					    }
					    li{
					    	width:0.07rem;
					    	height:0.21rem;
					    	position:absolute;
					    	left:0.1rem;
					    	bottom:-0.14rem;
					    	background-image:url("./img/lianjie.png");
					    	background-size:100% 100%;
					    	z-index:1000;
					    }
					    ol{
					    	width:0.07rem;
					    	height:0.21rem;
					    	position:absolute;
					    	right:0.1rem;
					    	bottom:-0.14rem;
					    	background-image:url("./img/lianjie.png");
					    	background-size:100% 100%;
					    	z-index:1000;
					    }
					}
				}
				.tishi-bottom{
					width:92.5%;
					height:0.36rem;
					margin:0 auto;
					ul{
						width:100%;
						height:100%;
						display:flex;
						li{
							flex:1;
							height:0.2rem;
							&.tishi-center{
								width:0.57rem;
								line-height:0.36rem;
								text-align:center;
								font-size:0.12rem;
								color:#bcbcbc;
							}
						}
					}
				/*}*/
			/*}*/
		}
	}
</style>


