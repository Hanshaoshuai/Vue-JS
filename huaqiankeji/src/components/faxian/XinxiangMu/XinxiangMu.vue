<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="yijianHind()"><img src="./img/back.png"/></span>
					<span>新项目</span>
					<div class="fanhui-right">
						<div @click.stop="yifouXiangmu()">
							<font></font>
						</div>
					</div>
				</div>
			</div>
			
			
			
			<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<div style="width:100%;height:0.55rem;"></div>
	    	<!--mt-loadmore中添加:auto-fill="autoFill"属性  不够高是会自动撑开屏幕-->
	      	<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :top-distance=30 :bottom-distance=30 ref="loadmore">
		        <ul class="page-loadmore-list">
		        
		        	
			
			<div class="box">
				<div class="tishi-bottom" @click.stop="xiangqing()">
					<div class="tubiao"></div>
					<div class="borders">
						<ul>
							<li class="tishi-center">
								<div class="content-heder">
									<span>天天</span>
									<span class="text-center">54587561</span>
									<span>&nbsp;定增</span>
								</div>
							</li>
						</ul>
						<div class="fankiu">
							<div class="content-food border-bottom">
								<span class="laizi">来自：</span>
								<img class="border" src="" alt="" />
								<span>&nbsp;王美丽&nbsp;</span>
								<font class="bbb border-left"></font>
								<span>投资经理</span>
								<span>&nbsp;&nbsp;董秘</span>
							</div>
						</div>
						<div class="zhuying_1">
							<div class="ferst">今年预计收入3.5亿，净利润3500万</div>
							<div class="last">
								<p>资经理资经理资主营业经理主营业资经理资主营业经理资经理资经理</p>
							</div>
						</div>
						<div class="jieshu"><font>保密信息，禁止传播</font><span @click.stop="jieshu()">结束项目</span></div>
						<div class="times border">
							<span class="text-center">1小时前</span>
							<span>发布</span>
							<div class="times-name">
								<font></font>
								<span class="text-center">剩余有效期{{genjin}}</span>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
			
			
			<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>	
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
	      	<transition name="promps">
	      		<p class="page-loadmore-desc" v-show="promps">暂无数据</p>
	      	</transition>
	    </div>
	    	<tishi ref="tishiShow" :xingXi="texts"></tishi>
			<yifouxiangmu ref="yifouShou"></yifouxiangmu>
			<!--<xiangmuxiangqing ref="xiangqingShow" :token="token"></xiangmuxiangqing>-->
			<router-view :datas="datas"></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import tishi from "../../Tishi.vue";
	import yifouxiangmu from "./YifouXiangmu.vue";
//	import xiangmuxiangqing from "./XiangmuXiangqing.vue";
	
	
	export default {
		props:{
			setscrollTop:{
//				type:Object
			},
			datas:{}
		},
		data () {
			return {
				res:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				texts:{
					text:"您要结束xxx公司项目的原因是？",
					x:"已过会",
					y:"已放弃",
					m:true,
					u:true
				},
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
//	      	console.log(this.$refs.wrapper.scrollTop)
//	      	console.log(document.documentElement.clientHeight)
//	      	console.log(this.$refs.wrapper.getBoundingClientRect().top)
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
	      		console.log("bot")
	        	this.bottomStatus = status;
	      	},
	      	loadBottom() {
	      		console.log("bot")
		        setTimeout(() => {
		          	let lastValue = this.list[this.list.length - 1];
		          	if (lastValue < 20) {
			            for (let i = 1; i <= 10; i++) {
			              	this.list.push(lastValue + i);
			            }
		          	} else {
		            	this.allLoaded = false; //若为真，则 bottomMethod 不会被再次触发 就不能再向上拉了
		            	this.promps = true;
		            	let clear = setTimeout(()=>{
		            		this.promps = false;
		            		clearTimeout(clear);
		            	},1500);
		          	}
		          	this.$refs.loadmore.onBottomLoaded();
		        }, 1500);
	      	},
	      	
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
				this.$refs.wrapper.scrollTop=sessionStorage.getItem("scrollTop")
			},
			xiangmuBlock(x,datas){
				
			},
			yifouXiangmu(){
				this.$refs.yifouShou.yifouBlock();
			},
			xiangqing(){
				window.location.href="#/faxian/XinxiangMu/"+this.datas["token"]+"/XiangmuXiangqing";
//				this.$refs.xiangqingShow.xiangqingBlock();
			},
			jieshu(){
//				this.texts="您要结束xxx公司项目的原因是？"
				this.$refs.tishiShow.tishiBlock();
			},
			handleScroll () {
			  var scrollTop = this.$refs.wrapper.scrollTop
			  sessionStorage.setItem("scrollTop",scrollTop)
//			  console.log(sessionStorage.getItem("scrollTop"))
			},
		},
		created() {
	    	console.log("一次")
	      	for (let i = 1; i <= 20; i++) {
	        	this.list.push(i);
	      	}
	    },
	    mounted() {
	    	console.log("计算高度")
	      	this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	      	this.$refs.wrapper.addEventListener('scroll', this.handleScroll)	//做一个scroll监听
	      	console.log(this.datas)
//			项目列表（投资人收到的项目）
			if(this.res==""){
				this.$http.post(URL.path+'finance/received_item_list',this.datas,{emulateJSON:true}).then(function(res){
					this.res=res.body.data;
					console.log("投资人收到的项目列表");
					console.log(this.res);
				},function(res){
				    console.log(res);
				})
			}	
			
			this.tucaoShow=true;
//				console.log(this.setscrollTop)
			this.$nextTick(function() {
				this.$refs.wrapper.scrollTop=this.setscrollTop;
			})
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
			tishi,
			yifouxiangmu,
//			xiangmuxiangqing
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
	.xiangmu{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:100;
		overflow:hidden;
		.page-loadmore-wrapper::-webkit-scrollbar{width:0px}
		.page-loadmore-wrapper {
		    overflow-y: scroll;
		    -webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
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
		
		
		
		
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:110;
		    .home-search {
			    height: 100%;
			    line-height:0.45rem;
			    font-size: 0.2rem;
			    text-align: center;
			    color:#fff;
				.fanhui-butten{
					position:absolute;
					height:100%;
					padding-left:0.16rem;
					display:inline-block;
					top:0.04rem;
					left:0;
					img{
						height:0.2rem;
					}
				}
			    .fanhui-right{
			    	position:absolute;
			    	right:0.2rem;
			    	top:0;
			    	font-size: 0.16rem;
			    	font{
			    		display:inline-block;
			    		width:0.2rem;
			    		height:0.22rem;
			    		background-image:url("./img/lajitong.png");
			    		background-size:100% 100%;
			    		margin-bottom:-0.05rem;
			    	}
			    }
			}
		}
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.tishi-bottom{
				width:90%;
				margin:0 auto;
				height:auto;
				position:relative;
				.tubiao{
					position:absolute;
					right:0;
					top:0;
					width:0.37rem;
					height:0.37rem;
					background-image:url("./img/new.png");
					background-size:100% 100%;
				}
				.borders{
					border:0.007rem solid #e2e2e2;
					box-shadow: 0.03rem 0.03rem 0.04rem #eeedf2;
					border-radius:0.06rem;
					background:#fff;
					overflow:hidden;
					margin-bottom:0.14rem;
					/*padding-bottom:0.14rem;*/
					.fankiu{
						width:100%;
						display:flex;
						.content-food{
							flex:1;
							padding:0.10rem 0.21rem;
							font-size:0.16rem;
							background:#fbfbfb;
							position:relative;
							display:flex;
							align-items:center;
							justify-content: center;
							color:#5a5a5a;
							.laizi{
								color:#b8b8b8;
							}
							img{
								width:0.25rem;
								height:0.25rem;
							}
							.bbb{
								width:0.01rem;
								height:0.16rem;
								display:inline-block;
								padding-left:0.03rem;
							}
							.tousu{
								position:absolute;
								top:0.19rem;
								right:0.16rem;
								width:0.48rem;
								height:0.15rem;
								line-height:0.15rem;
								font-size:0.12rem;
								color:#b8b8b8;
								padding-top:0.01rem;
								text-align:right;
								background-image:url("./img/tousu.png");
								background-size:0.14rem 0.14rem;
								background-position:0 0;
								background-repeat:no-repeat;
							}
						}
					}
				}
				ul{
					height:0.3rem;
					padding:0.28rem 2.5% 0 2.5%;
					display:flex;
					background:#fff;
					li{
						flex:1;
						height:0.2rem;
						text-align:center;
						font-size:0.2rem;
						color:#323232;
					}
				}
				.zhuying_1{
					width:100%;
					font-size:0.16rem;
					background:#fff;
					span{
						color:#2abdfc;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						align-content: center;
						align-items: center;
						padding-left:0.14rem;
					}
					.last{
						flex:1;
						color:#676767;
						padding:0rem 0.14rem 0.18rem 0.14rem;
						line-height:0.26rem;
						/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
					}
				}
				.jieshu{
					padding:0 0.12rem 0.07rem 0.21rem;
					background:#fff;
					height:0.28rem;
					display:flex;
					justify-content:space-between;
					align-items:center;
					font{
						color:#bcbcbc
					}
					span{
						padding:0.07rem 0.1rem;
						background:#ff7a59;
						color:#fff;
						font-size:0.16rem;
						line-height:0.16rem;
						border-radius:0.04rem;
					}
				}
				.times{
					width:100%;
					height:0.33rem;
					background:#fbfbfb;
					line-height:0.34rem;
					margin-top:0.08rem;
					box-shadow:0 0.02rem 0.04rem #dedde1;
					color:#a6a6a6;
					.text-center{
						display:inline-block;
						padding:0 0.08rem;
					}
					.times-name{
						color:#ff7a59;
						font{
							display:inline-block;
							width:0.16rem;
							height:0.16rem;
							background-image:url("./img/time.png");
							background-size:100% 100%;
							margin-bottom:-0.03rem;
							margin-right:-0.04rem;
						}
						float:right;
						/*margin-right:0.1rem;*/
					}
				}
			}
		}
	}
</style>


