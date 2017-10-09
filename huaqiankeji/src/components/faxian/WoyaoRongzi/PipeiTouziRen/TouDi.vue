<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>一键投递</span>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<div class="fankiu">
						<div class="tubiao"></div>
						<div class="content-food" style="text-align:center;">
							<span>已为您投递至：</span>
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
					</div><div class="sousuo-content border-topbottom">
						<div class="content-header">
							<font></font>
							<div class="names">
								<span class="border-right">徐小平</span>
								<span>真格基金</span>&nbsp;
								<span>徐小平</span>
							</div>
						</div>
					</div>
					<div class="donghua">
						<div><span class="border">投递BP的奔跑动画开火车速送BP</span></div>
					</div>
				</div>
			</div>
			<div class="zhaiyao-food">
				<span class="last" @click.stop="butten">返回首页</span>
			</div>
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
//	import Vue from "vue";
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
				token:"",
				XiangmuID:"",
				type:"",
				uID:"",
				block:false,
				ButtenName:"88",
				showFlag:true,
				onlyContent:true
			}
		},
		mounted(){
			Indicator.open({spinnerType: 'fading-circle'});
			console.log(this.$route.params.uID);
			this.token=this.$route.params.token;
			this.XiangmuID=this.$route.params.XiangmuID;
			this.type=this.$route.params.type;
			this.uID=this.$route.params.uID;
			
			//发送项目	
			var datas = {
				token:this.token,		//	token	是	[string]		
				item_id:this.XiangmuID,	//项目id	是	[string]		
				type:this.type,			//类型 1:项目 2:活动	是	[string]		
				to_id:this.uID,			//接受者id	是	[string]		
				status:"",			//状态 1:已发送 2:未发送 3:拒绝		[string]		
				demand:""		//	是否索要 1:非索要 2:索要		[string]
			}
			this.$http.post(URL.path+'finance/send_item',datas,{emulateJSON:true}).then(function(res){
				Indicator.close();
				var data=res.data
				Toast("您已成功投递"+this.uID.length+"位投资人请您注意查收投资人的反馈并及时回复");
				console.log(res);
			},function(res){
			    console.log(res.status);
			})
		},
		methods:{
			listnone(){
//				this.showFlag=false;
				history.go(-1)
			},
			pipeiBlock(){
				this.showFlag=true;
			},
			butten(){
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
				window.location.href="#/fanxian";
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
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			.wenzhang-content{
				width:95%;
				margin:0 auto;
				padding:0.48rem 0 0.6rem 0;
				.fankiu{
					width:100%;
					display:flex;
					align-items:center;
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("../img/fei.png");
						background-size:100% 100%;
						margin:0 0.04rem 0 0.02rem;
					}
					.content-food{
						line-height:0.47rem;
						color:#6e6e6e;
						/*background:#fff;*/
						span{
							font-size:0.16rem;
						}
					}
				}
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					margin-bottom:0.1rem;
					border-radius:0.02rem;
					/*border:1px solid #ff7a59;*/
					box-sizing:border-box;
					box-shadow: 0.02rem 0.02rem 0.02rem #e4e3e8;
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
							/*border-radius:0.3rem;*/
							border:none;
							border:2px solid #e5e4e4;
						}
						.names{
							flex:1;
							.border-right{
								min-width:0.55rem;
								display:inline-block;
								margin-right:0.02rem;
							}
						}
					}
				}
				.donghua{
					width:100%;
					display:flex;
					&>div{
						flex:1;
						padding:0.4rem 0.8rem 0.2rem 0.8rem;
						span{
							display:inline-block;
							padding:0.4rem 0.2rem;
							background:#fff;
						}
					}
				}
			}
		}
		.zhaiyao-food{
			position:absolute;
			bottom:0;
			left:0;
			width:100%;
			height:0.45rem;
			color:#ffffff;
			background:#ff7a59;
			font-size:0.18rem;
			display:flex;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
			.ferst{
				flex:1;
				text-align:center;
			}
			.last{
				line-height:0.45rem;
				padding:0 0.2rem;
				display:inline-block;
				color:#fff;
				/*background:#00C850;*/
			}
		}
	}
</style>


