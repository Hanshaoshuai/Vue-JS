<template>
	<!--<transition name="fade">-->
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>确定协议</span>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<div style="width:100%;height:0.66rem;"></div>
					<div class="fankiu">
						<div class="beijing"></div>
						<div class="content-food" style="text-align:center;">
							<font class="border-bottom"></font><span>平台服务费</span><font class="border-bottom"></font>
						</div>
						<div class="content-bottom">
							<ul>
								<li ref="profile" class="profile"></li>
								<li class="imgs" @click.stop="ChakanGo()"><img src="../img/3.png"/><span>查看完整协议</span></li>
							</ul>
							<div class="butten">
								<ul>
									<li class="tongyi"  @click.stop="TongyiGo()">
										<span>同意协议，开始投递</span>
									</li>
									<li  class="fangqi">
										<span @click.stop="ShaohouGo()">稍后处理</span>
										<span @click.stop="FangqiGo()">不同意，放弃</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<router-view :data="data"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../../common/js/path';
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
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
				data:"",
				block:false,
				ButtenName:"88",
				showFlag:true,
				onlyContent:true,
				go:0
			}
		},
		mounted(){
			console.log(this.$route.params.token)
			console.log(this.$route.params.XiangmuID)
			console.log(this.$route.params.uID)
			Indicator.open({spinnerType: 'fading-circle'});
//				获取收费协议
			var params={
	    		token:this.$route.params.token,
				type:this.$route.params.XiangmuID	//类型 1定增 2做市 3转老股 4股权质押 5融资租赁
	    	}
			this.$http.post(URL.path+'finance/get_agreement',params,{emulateJSON:true}).then(function(res){
				this.data=res.body.data;
				Indicator.close();
				this.$refs.profile.innerHTML=res.body.data.profile
				console.log(res);
			},function(res){
				Indicator.close();
			    console.log(res);
			})
		},
		methods:{
			listnone(){
//				this.showFlag=false;
				history.go(-1)
				this.go=0
			},
			ChakanGo(){
//				获取收费协议详情
				window.location.href="#/Xeiyi/"+this.$route.params.token+"/"+this.$route.params.uID+'/'+this.$route.params.type+'/'+this.$route.params.XiangmuID+'/0'+"/XieyiXiangqing";
			},
			TongyiGo(){
//				if(this.go==0){
//					this.go+=1;
					window.location.href="#/Xeiyi/"+this.$route.params.token+"/"+this.$route.params.uID+'/'+this.$route.params.type+'/'+this.$route.params.XiangmuID+'/0'+"/TouDi";
	//				this.showFlag=true;
//				}else{
//					Toast("您已投递过了")
//				}
			},
			ShaohouGo(){
				window.location.href='#/wode/jilu/0'
//				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
//					this.ButtenName="申请成功，等待反馈";
//					var tate=this;
//					setTimeout(function(){
//						tate.showFlag=false;
//						tate.ButtenName="索要完整项目信息";
//					},2000)
//				  console.log("ijfj")
//				});
//				this.block=true;
				
			},
			FangqiGo(){
				window.location.href='#/wode/jilu/0'
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
//			cartcontrol,
//			ratingselect,
//			split
		}
	}
</script>

<style lang="scss" scoped>
	/*.fade-enter-active {
	  	transition: all .5s ease;
	}
	.fade-leave-active {
	  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	/*}*/
	.wenzhang{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:200;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:300;
			.xiangmu-left{
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
		}
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wenzhang-content{
				width: 90%;
				/*height:auto;*/
				margin:0 auto;
				padding-bottom:0.45rem;
				.fankiu{
					width:100%;
					background:#fff;
					position:relative;
					/*display:flex;*/
					.beijing{
						position:absolute;
						top:-0.04rem;
						left:-1.4%;
						width:103.7%;
						height:102%;
						background-image:url("../img/bg2.png");
						background-size:100% 100%;
					}
					.content-food{
						flex:1;
						padding:0.36rem 0;
						line-height:0.20rem;
						font-size:0.20rem;
						span{
							display:inline-block;
							padding:0 0.1rem;
							font-weight:bold;
						}
						font{
							display:inline-block;
							width:0.69rem;
							height:0.01rem;
							margin-bottom:0.06rem;
						}
					}
					.content-bottom{
						width:89%;
						margin:0 auto;
						font-size:0.18rem;
						color:#6e6e6e;
						line-height:0.31rem;
						ul{
							width:100%;
							.fuwu{
								font-size:0.16rem;
								color:#ff7a59;
								margin-bottom:0.26rem;
							}
							.imgs{
								width:100%;
								display:flex;
								position:relative;
								z-index:10;
								align-content:center;
								align-items: center;
								justify-content:center;
								flex-direction:column;
								font-size:0.14rem;
								img{
									width:0.58rem;
								}
							}
						}
					}
				}
				.butten{
					width:100%;
					position:relative;
					padding:0.42rem 0 0.48rem 0;
					z-index:10;
					ul{
						width:63.1%;
						margin:0 auto;
						.tongyi{
							width:100%;
							text-align:center;
							span{
								font-size:0.18rem;
								display:inline-block;
								padding:0.14rem 0.4rem;
								background:#00A0DC;
								color:#fff;
								border-radius:0.04rem;
							}
						}
						.fangqi{
							width:100%;
							text-align:center;
							margin-top:0.19rem;
							span{
								display:inline-block;
								color:#c6c6c6;
								&:first-child{
									margin-right:0.58rem;
									color:#ff7a59;
								}
							}
						}
					}
				}
			}
		}
	}
</style>


