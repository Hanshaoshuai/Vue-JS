<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="yijianHind()"><img src="./img/back.png"/></span>
					<span>已结束项目</span>
					<div class="fanhui-right">
						<div @click.stop="yifouXiangmu()">
							<!--<font></font>-->
						</div>
					</div>
				</div>
			</div>
			<div class="box" ref="wrapper">
				<div class="wenzhang-content" ref="tianjia">
					<div style="width:100%;height:0.55rem;"></div>
					<div v-for="(cont,index) in data" class="add" :id="index" ref="lisitTop">
						<div v-for="(item,index) in cont" class="tishi-bottom" @click.stop="xiangqing(item.id,item.follow,numToTime(item.send_time),item.audit)">
							<div class="borders">
								<ul>
									<li class="tishi-center">
										<div class="content-heder">
											<span>{{item.com_short}}</span>
											<span class="text-center">（{{item.com_code}}）</span>
											<span v-if="item.type==1" class="texts">&nbsp;定增</span>
											<span v-if="item.type==2" class="texts">&nbsp;做市</span>
											<span v-if="item.type==3" class="texts">&nbsp;转老股</span>
											<span v-if="item.type==4" class="texts">&nbsp;股权质押</span>
											<span v-if="item.type==5" class="texts">&nbsp;融资租赁</span>
											<span v-if="item.type==6" class="texts">&nbsp;研报支持</span>
											<span v-if="item.type==7" class="texts">&nbsp;公司调研</span>
											<!--<span>&nbsp;{{item.type}}</span>-->
										</div>
									</li>
								</ul>
								<div class="fankiu">
									<div class="content-food border-bottom">
										<span class="laizi">来自：</span>
										<!--<img class="border" src="" alt="" />-->
										<span>&nbsp;{{item.uname}}&nbsp;</span>
										<font class="bbb border-left"></font>
										<span>{{item.short}}</span>
										<span>&nbsp;&nbsp;{{item.position}}</span>
									</div>
								</div>
								<div class="zhuying_1">
									<div class="ferst">今年预计收入{{item.predict_revenue}}亿，净利润{{item.predict_profit}}万</div>
									<div class="last">
										<p>{{item.lightspot}}</p>
									</div>
								</div>
								<div class="jieshu"><font>保密信息，禁止传播</font><!--<span v-if="item.follow=='1' && item.end_follow!=1 && item.end_follow!=2" @click.stop="jieshu(item.id)">结束项目</span>--></div>
								<div class="times border">
									<span class="text-center">{{numToTime(item.send_time)}}</span>
									<span>发布</span>
									<div class="times-name">
										<!--<font></font>
										<span class="text-center">剩余有效期{{genjin}}</span>-->
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style="width:100%;height:0.38rem;"></div>
					<div v-show="tishis" class="tishi-bottoms">
						<div class="tishis">
							<ul>
								<li class="border-bottom"></li>
								<li class="tishi-center">{{jeiguo}}</li>
								<li class="border-bottom"></li>
							</ul>
						</div>
					</div>
				</div>
				<span class="loding" v-show="topStatus">
	            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
	          	</span>
			</div>
			<transition name="fade1">
				<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
			</transition>
			<router-view :userContent="userContent" :XiangmuID="XiangmuID" :left="left" :right="right"></router-view>
			<!--<xiangmuxiangqing ref="xiangqingShow"></xiangmuxiangqing>-->
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {numToTime} from "../../../common/js/date.js";
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
//	import xiangmuxiangqing from "./XiangmuXiangqing.vue";
	
	
	export default {
		props:{
			setscrollTop:{
//				type:Object
			},
			datas:{},
//			TouziToken:{}
		},
		data () {
			return {
				data:[],
				XiangmuID:"",
				userContent:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				numToTime:"",
				left:'',
				right:"",
				topBlock:false,
				tishis:false,
		        page:1,
		        n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
		        jeiguo:"亲已经到底了",
		        topStatus:false,
			}
		},
		mounted(){
			this.numToTime=numToTime;
//			this.LieBiao();
		},
		activated(){
//	    	console.log("this.userContent");
	    	this.tishis=false;
	    	this.data=[];
	    	this.page=1;
			this.LieBiao();
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
//				this.tucaoShow=false;
			},
			zhiDing(){		//返回顶部；
				this.$refs.wrapper.scrollTop=0;
			},
			handleScroll(){
				if(this.$refs.wrapper.scrollTop>600){
					this.topBlock=true;
				}else{
					this.topBlock=false;
				}
			},
			faxianScroll(){
				if(this.$refs.wrapper.scrollTop>600){
					this.topBlock=true;
				}else{
					this.topBlock=false;
				}
				var parend = this.$refs.tianjia.getElementsByClassName("add")[this.data.length-1]
				this.imgs()
			},
			imgs(){
				var scrollHeights=this.$refs.wrapper.scrollHeight;
				var setHeight = document.documentElement.clientHeight; //可见区域高度
				var scrollTop = this.$refs.wrapper.scrollTop; //滚动条距离顶部高度
				var x=Math.abs(Math.round(setHeight + scrollTop))
//				console.log(x)
//				console.log(scrollHeights)
				if(x==scrollHeights || scrollHeights-x==1){
					var tata=this
					this.topStatus=true;
					this.tems=setTimeout(function(){
						tata.LieBiao();
					},100)
				}
			},
			LieBiao(){
				this.userContent={
					token:this.$route.params.token,
					page:this.page,			//page	是	[string]		
					size:10,			//size	是	[string]		
					follow:"2"			//2 已结束 其他表示所有收到的项目	是	[string]	
				}
				Indicator.open({spinnerType: 'fading-circle'});
//				console.log(this.userContent)
	//			已否项目列表（）
//				if(this.data==""){
					this.$http.post(URL.path+'finance/received_item_list',this.userContent,{emulateJSON:true}).then(function(res){
						Indicator.close();
//						console.log("已否项目列表");
//						console.log(res.body);
//						if(this.data.length==5){//长度大于5从新开始
	//						this.data=[]
	//						this.$refs.wrapper.scrollTop=0;
	//						this.height=0;
	//					}
						this.topStatus=false;
						if(res.body.data.length==0){
							if(this.data.length==0){
								this.jeiguo="暂无否决项目"
							}
							this.$refs.wrapper.removeEventListener('scroll', this.faxianScroll);
							this.$refs.wrapper.addEventListener('scroll', this.handleScroll)	//做一个scroll监听
							this.tishis=true;
							return;
						}else{
							this.data.push(res.body.data);
						}
						if(this.n !== 0){
							clearTimeout(this.tems);
						}
						this.page=this.page*1;
						this.page=this.page+=1;
						this.$nextTick(function(){
							var img = this.$refs.tianjia.getElementsByTagName("img");
							var length=img.length;
							for (var i = 0; i < length; i++) {
								img[i].onload =function(){
									if (this.clientWidth>this.clientHeight) {
										this.style.height="100%"
										this.style.width="auto"
									}else{
										this.style.width="100%"
										this.style.height="auto"
									}
								}
							}
						})
						if(this.n == 0){
							this.$nextTick(function(){
								this.img = this.$refs.tianjia.getElementsByTagName("img");
								this.parend = this.$refs.tianjia.getElementsByClassName("sousuo-content");
								this.num = this.img.length;
								this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
		//								this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
		  						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
		  						this.imgs()
							});
						}
					},function(res){
						Indicator.close();
					    console.log(res);
					})
//				}
			},
			yifouBlock(){
				this.tucaoShow=true;
			},
			xiangqing(XiangmuID,follow,send_time,audit){
				if(follow==3){
					Toast("该项目已过期")
					return;
				}
				if(audit==1){
					Toast("该项目已撤回")
					return;
				}
				this.left=send_time;
				this.XiangmuID=XiangmuID;
				window.location.href="#/YifouXiangmu/"+this.userContent['token']+"/YifouXiangqing/"+this.XiangmuID;
//				this.$refs.xiangqingShow.xiangqingBlock();
			}
			
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
		},
		components:{
			box,
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
	.fade1-enter-active {
	  	transition: all .5s ease;
	}
	.fade1-leave-active {
	  	transition: all .5s ease;
	}
	.fade1-enter, .fade1-leave-active {
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
		z-index:220;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:240;
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
			.wenzhang-content{
				position:relative;
				.tishi-bottom{
					width:90%;
					margin:0 auto;
					height:auto;
					position:relative;
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
							word-break:break-all;
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
				.tishi-bottoms{
					position:absolute;
					left:0;
					right:0;
					bottom:0.06rem;
					width:92.5%;
					height:0.36rem;
					margin:0 auto;
					.tishis{
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
					}
				}
			}
			.loding{
				position:fixed;
				bottom:0;
				left:0;
				margin-bottom:0.1rem;
				width:100%;
				display: inline-block;
				text-align:center;
				display:flex;
				-webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			}
		}
		.zhiDing{
			position:fixed;
			bottom:1.6rem;
			right:0.2rem;
			background-image:url("./img/top.png");
			background-size:100% 100%;
			width:0.5rem;
			height:0.5rem;
			/*z-index: 200;*/
		}
	}
</style>


