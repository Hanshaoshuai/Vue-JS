<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="yijianHind()"><img src="./img/back.png"/></span>
					<span>已否决项目</span>
					<div class="fanhui-right">
						<div @click.stop="yifouXiangmu()">
							<!--<font></font>-->
						</div>
					</div>
				</div>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="tishi-bottom" @click.stop="xiangqing('1')">
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
						<div class="jieshu"><font>保密信息，禁止传播</font><!--<span @click.stop="jieshu()">移除该项目</span>--></div>
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
			<router-view :userContent="userContent" :XiangmuID="XiangmuID"></router-view>
			<!--<xiangmuxiangqing ref="xiangqingShow"></xiangmuxiangqing>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
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
				XiangmuID:"",
				userContent:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
			}
		},
		mounted(){
			this.userContent={
				token:this.$route.params.token
			}
			console.log(this.userContent)
//			已否项目列表（）
			if(this.data==""){
				this.$http.post(URL.path+'finance/received_item_list',this.userContent,{emulateJSON:true}).then(function(res){
					this.data=res.body.data;
					if(res.body.returnCode=='201'){
						Toast("亲！您暂无收到新项目哦...")
					}
					console.log("投资人收到的项目列表");
					console.log(res.body);
				},function(res){
				    console.log(res);
				})
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			yifouBlock(){
				this.tucaoShow=true;
			},
			xiangqing(XiangmuID){
				this.XiangmuID=XiangmuID;
				window.location.href="#/faxian/YifouXiangmu/"+this.userContent['token']+"/XiangmuXiangqing/"+this.XiangmuID;
//				this.$refs.xiangqingShow.xiangqingBlock();
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
//			xiangmuxiangqing
//			fankuixinxi
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
		z-index:300;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:310;
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


