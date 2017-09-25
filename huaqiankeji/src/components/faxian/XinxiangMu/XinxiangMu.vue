<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stap="yijianHind()"><</span>
				<span>新项目</span>
				<font class="xiangmu-right" @click.stap="yifouXiangmu()">已否决项目</font>
			</div>
			
			
			
			<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<div style="width:100%;height:0.5rem;"></div>
	    	<!--mt-loadmore中添加:auto-fill="autoFill"属性  不够高是会自动撑开屏幕-->
	      	<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :top-distance=30 :bottom-distance=30 ref="loadmore">
		        <ul class="page-loadmore-list">
		        <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>	
		        	
			
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<img class="border" src="" alt="" />
						<span>&nbsp;&nbsp;王美丽</span>
						<span>&nbsp;&nbsp;投资经理</span>
						<span>&nbsp;&nbsp;董秘</span>
					</div>
				</div>
				<div class="ContentText border-topbottom" @click.stop="xiangqing()">
					<div class="TextMame">
						<div class="margin">
							<span class="texts">天立泰</span>
							<span class="texts">定增</span>
						</div>
						<div class="TypeList">
							<span class="texts">融资6000万估值8亿</span>
						</div>
					</div>
					<div class="BottomText">
						<span class="texts">投资亮点详情（不超过四行）</span>
					</div>
					<div class="jieshu"><span @click.stop="jieshu()">结束项目</span></div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">领天</span>
					<span class="text-center">1小时前</span>
					<span>发布</span>
					<div class="times-name">
						<span>{{fankui}}反馈</span>
						<span class="text-center">{{genjin}}跟进</span>
					</div>
				</div>
				<box></box>
			</div>
			
			
			
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
			<xiangmuxiangqing ref="xiangqingShow"></xiangmuxiangqing>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import tishi from "../../Tishi.vue";
	import yifouxiangmu from "./YifouXiangmu.vue";
	import xiangmuxiangqing from "./XiangmuXiangqing.vue";
	
	
	export default {
		props:{
			setscrollTop:{
//				type:Object
			}
		},
		data () {
			return {
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:false,
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
	      		console.log("top")
		        this.topStatus = status;
		        
		        console.log(this.wrapperHeight)
	      	console.log(this.$refs.wrapper.scrollTop)
	      	console.log(document.documentElement.clientHeight)
	      	console.log(this.$refs.wrapper.getBoundingClientRect().top)
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
				this.tucaoShow=false;
				this.$refs.wrapper.scrollTop=sessionStorage.getItem("scrollTop")
			},
			xiangmuBlock(x){
				this.tucaoShow=true;
				console.log(this.setscrollTop)
				console.log(x)
				this.$nextTick(function() {
					this.$refs.wrapper.scrollTop=this.setscrollTop;
				})
			},
			yifouXiangmu(){
				this.$refs.yifouShou.yifouBlock();
			},
			xiangqing(){
				this.$refs.xiangqingShow.xiangqingBlock();
			},
			jieshu(){
//				this.texts="您要结束xxx公司项目的原因是？"
				this.$refs.tishiShow.tishiBlock();
			},
			handleScroll () {
			  var scrollTop = this.$refs.wrapper.scrollTop
			  sessionStorage.setItem("scrollTop",scrollTop)
			  console.log(sessionStorage.getItem("scrollTop"))
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
			xiangmuxiangqing
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
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:100;
		overflow:hidden;
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
		
		
		
		
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			z-index:110;
			.xiangmu-left{
				position:absolute;
				padding-left:0.3rem;
				display:inline-block;
				top:0;
				left:0;
			}
			.xiangmu-right{
				padding:0.08rem 0.1rem;
				border:0.005rem solid #93999F;
				line-height:0.12rem;
				font-size:0.14rem;
				position:absolute;
				top:0.09rem;
				right:0.1rem;
			}
		}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.1rem 0.2rem;
					line-height:0.3rem;
					font-size:0.14rem;
					background:#fff;
					img{
						vertical-align:top;
						width:0.3rem;
						height:0.3rem;
					}
					span{
						font-weight:bold;
					}
				}
			}
			.ContentText{
				width:100%;
				background:#ffffff;
				position:relative;
				font-size:0.16rem;
				.TextMame{
					width:100%;
					height:auto;
					.margin{
						width:100%;
						padding-top:0.2rem;
						text-align:center;
						span{
							display:inline-block;
							padding-right:0.06rem;
							line-height:0.22rem;
						}
					}
					.TypeList{
						width:100%;
						text-align:center;
						span{
							display:block;
							line-height:0.22rem;
						}
					}
				}
				.BottomText{
					width:100%;
					text-align:center;
					padding:0.2rem 0;
				}
				.jieshu{
					position:absolute;
					right:0.04rem;
					bottom:0.2rem;
					span{
						padding:0.06rem 0.1rem;
						background:#25A4BB;
						color:#fff;
						border-radius:0.04rem;
					}
				}
			}
			.times{
				width:100%;
				height:0.3rem;
				background:#fff;
				line-height:0.3rem;
				.times_1{
					display:inline-block;
					padding-left:0.2rem;
				}
				.text-center{
					display:inline-block;
					padding:0 0.08rem;
				}
				.times-name{
					float:right;
					margin-right:0.1rem;
				}
			}
		}
	}
</style>


