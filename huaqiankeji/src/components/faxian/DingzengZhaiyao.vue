<template>
	<transition name="fade">
		<div v-show="showFlag" class="zhaiyao">
			<div class="xiangmu-header"></div>
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="./XinxiangMu/img/back.png"/></span>
					<span>项目摘要</span>
					<div class="fanhui-right">
						<div>
							<div ref="dcontent" id="dcontent" class="dcontent">
								<!--<br/>-->
								<!--<p class="heading">分享内容：</p>-->
								<textarea style="display:none;" ref="sharecontent" id="sharecontent" rows="3">我正在使用HBuilder+HTML5开发移动应用，赶紧跟我一起来体验！</textarea>
								<!--<br/><br/>-->
								<!--<p class="heading">分享图片：</p>-->
								<table style="width:100%; display:none;">
									<tbody>
										<tr>
											<td style="width:30%"><div class="button button-select" onclick="shareCameraPicture()">拍照</div></td>
											<td style="width:30%"><div class="button button-select" onclick="shareGalleryPicture()">相册选取</div></td>
											<td style="width:30%"><div class="button button-select" onclick="shareLogoPicture()">使用logo图</div></td>
										</tr>
									</tbody>
								</table>
								<img style="display:none;" ref="pic" id="pic" src="./logo.png"/>
								<!--<br/>-->
								<div style="display:none;" class="button" onclick="shareShow()">分 享</div>
								<div style="display:none;" class="button" onclick="shareSystem()">系统分享</div>
								<!--<div style="padding: 0.5em 1em;"><hr color="#EEE"/></div>-->
								
								
								<p style="display:none;" class="heading">链接地址：</p>
								<input style="display:none;" ref="sharehref" id="sharehref" class="sharehref" type="url" value="https://www.baidu.com/?tn=57095150_2_oem_dg" placeholder="请输入要分享的链接地址"/>
								<p style="display:none;" class="heading">链接标题：</p>
								<input style="display:none;" ref="sharehrefTitle" id="sharehrefTitle" class="sharehref" type="text" value="DCloud HBuilder-做最好的HTML5开发工具" placeholder="请输入要分享的链接标题"/>
								<p style="display:none;" class="heading">链接描述：</p>
								<input style="display:none;" ref="sharehrefDes" id="sharehrefDes" class="sharehref" type="text" value="我正在使用HBuilder+HTML5开发移动应用，赶紧跟我一起来体验！" placeholder="请输入要分享的链接描述"/>
								<div class="button" @click.stop="shareHref()">分享链接</div>
								<!--v-on:click="increment"-->
								
								
								<!--<br/><br/>-->
								<!--<div style="padding: 0.5em 1em;"><hr color="#EEE"/></div>-->
								<p style="display:none;" class="des">如果需要解除分享中绑定的用户信息，请点击解除授权：</p>
								<div style="display:none;" class="button" onclick="cancelAuth()">解除授权</div>
							</div>
							<div ref="output" id="output" style="display:none;">
								Share模块管理客户端的社交分享功能，提供调用终端社交软件的分享能力。通过plus.share可获取社交分享管理对象。
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="zhaiyao-list">
				<div class="zhaiyao-content">
					<div class="tishi-bottom">
						<div class="border">
							<ul>
								<li class="border-bottom"></li>
								<li class="tishi-center">
									<div class="content-heder">
										<span>{{data.com_name}}</span>
										<span class="text-center">{{data.com_code}}</span>
										<span v-if="data.type==1" class="texts">&nbsp;定增</span>
										<span v-if="data.type==2" class="texts">&nbsp;做市</span>
										<span v-if="data.type==3" class="texts">&nbsp;转老股</span>
										<span v-if="data.type==4" class="texts">&nbsp;股权质押</span>
										<span v-if="data.type==5" class="texts">&nbsp;融资租赁</span>
										<span v-if="data.type==6" class="texts">&nbsp;研报支持</span>
										<span v-if="data.type==7" class="texts">&nbsp;公司调研</span>
										<!--<span>&nbsp;{{data.type}}</span>-->
									</div>
								</li>
								<li class="border-bottom"></li>
							</ul>
							<div class="zhuying_1">
								<div class="ferst"><span></span>项目推荐</div>
								<div class="last">
									<p>{{data.lightspot}}资经理资经理资主营业经理主营业资经理资主营业经理资经理资经理</p>
								</div>
							</div>
						</div>
						<div class="zhuying_1 border">
							<div class="ferst"><span></span>经营业绩</div>
							<div class="last">
								<p>上一财年：营收&nbsp;<span>{{data.last_year_revenue}}亿</span>&nbsp;&nbsp;净利润&nbsp;<span>{{data.last_year_profit}}万</span></p>
								<p>今年预计：营收&nbsp;<span>{{data.predict_revenue}}亿</span>&nbsp;&nbsp;净利润&nbsp;<span>{{data.predict_profit}}万</span></p>
							</div>
						</div>
						<div class="zhuying_1 border">
							<div class="ferst"><span></span>融资计划</div>
							<div class="last">
								<p>融资总额：<span>{{data.total_finance}}万</span></p>
								<p>投前估值：<span>{{data.appraisement}}万</span></p>
							</div>
						</div>
					</div>
					
					
					<div class="times border-topbottom">
						<span class="text-center">领天</span>
						<span class="text-center">1小时前</span>
						<span>发布</span>
					</div>
				</div>
			</div>
			<div v-show="utype" class="zhaiyao-food" @click.stop="butten()"><span>{{ButtenName}}</span></div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
//	import Vue from "vue";
	import {common} from "../../common/js/common.js";
	import {common1} from "../../common/js/common1.js";
	import { Toast } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import {URL} from '../../common/js/path';
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
				data:'',
				block:false,
				ButtenName:"索要完整项目信息",
				showFlag:true,
				fankui:13,
				genjin:50,
				utype:true,
				sharecontent:"",
				pic:"",
				sharehref:'',
				sharehrefTitle:'',
				sharehrefDes:"",
				output:"",
				dcontent:""
				
//				onlyContent:true
			}
		},
		mounted(){
			if(localStorage.getItem("type")=='1' || localStorage.getItem("type")=='7'){
				this.utype=false;
			};
			//项目详情
			var data = {
				token:this.$route.params.token,
				item_id:this.$route.params.XiangmuID			//	项目id
			}
			console.log(this.data)
			this.$http.post(URL.path+'finance/item_detail',data,{emulateJSON:true}).then(function(res){
				this.data=res.body.data[0]
				console.log(res);
				this.$nextTick(function(){
					this.output=this.$refs.output
					this.dcontent=this.$refs.dcontent;
//					common(this.output,this.dcontent,window);
				});
			},function(res){
			    console.log(res.status);
			})
		},
		methods:{
			listnone(){
				history.go(-1)
//				this.showFlag=false;
			},
			shareHref(){
				this.dcontent=this.$refs.dcontent;
				this.sharecontent=this.$refs.sharecontent;
				this.pic=this.$refs.pic;
				this.sharehref=this.$refs.sharehref;
				this.sharehrefTitle=this.$refs.sharehrefTitle;
				this.sharehrefDes=this.$refs.sharehrefDes;
				this.output=this.$refs.output;
				console.log(this.sharehref.value)
//				common(this.output,this.dcontent,window);
				common1(this.sharecontent,this.pic,this.sharehref,this.sharehrefTitle,this.sharehrefDes,this.output);
			},
			butten(){
				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
					//投资人索要项目
					var data = {
						token:this.$route.params.token,
						item_id:this.$route.params.XiangmuID,			//	项目id
						type:'1',
						uid:this.data.uid
					}
					console.log(this.data)
					this.$http.post(URL.path+'finance/demand_item',data,{emulateJSON:true}).then(function(res){
						if(res.body.msg=="操作成功"){
							Toast("申请成功，请您等待反馈")
							this.ButtenName="申请成功，请您等待反馈"
							setTimeout(function(){
//								history.go(-1)
								tate.ButtenName="索要完整项目信息";
							},2000)
							console.log(res);
						}
					},function(res){
					    console.log(res.status);
					})
				});
				this.block=true;
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
	.zhaiyao{
		position:fixed;
		background:#f5f4f9;
		width:100%;
		height:100%;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:200;
		.xiangmu-header{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:1.53rem;
			background:#ff7a59;
			z-index:300;
		}
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:320;
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
					z-index:330;
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
			    		/*width:0.2rem;*/
			    		height:0.22rem;
			    		/*background-image:url("./img/lajitong.png");*/
			    		background-size:100% 100%;
			    		margin-bottom:-0.05rem;
			    	}
			    }
			}
		}
		.zhaiyao-list::-webkit-scrollbar{width:0px}
		.zhaiyao-list{
			position:absolute;
			overflow-y:scroll;
			width:94%;
			padding-right:0.03rem;
			margin:auto;
			height:100%;
			top:0;
			left:0;
			right:0;
			z-index:310;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.zhaiyao-content{
				width: 94%;
				height:auto;
				margin:0 auto;
				margin-top:0.45rem;
				padding-bottom:0.45rem;
				.tishi-bottom{
					width:100%;
					/*height:0.36rem;*/
					.border{
						box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
					}
					ul{
						height:0.3rem;
						padding:0 2.5% 0 2.5%;
						display:flex;
						background:#fff;
						li{
							flex:1;
							height:0.2rem;
							&:first-child{
								max-width:10%;
							}
							&:last-child{
								max-width:10%;
							}
							&.tishi-center{
								width:0.57rem;
								line-height:0.36rem;
								text-align:center;
								font-size:0.2rem;
								color:#323232;
							}
						}
					}
					.zhuying_1{
						width:100%;
						font-size:0.16rem;
						background:#fff;
						margin-bottom:0.1rem;
						span{
							color:#2abdfc;
						}
						.ferst{
							display:flex;
							height:0.38rem;
							align-content: center;
							align-items: center;
							span{
								display:inline-block;
								position:relative;
								width:0.08rem;
								height:0.16rem;
								background:#ff7a59;
								margin-right:0.08rem;
								margin-left:-0.008rem;
								z-index:200;
							}
						}
						.last{
							flex:1;
							color:#676767;
							padding:0rem 0.14rem 0.18rem 0.14rem;
							line-height:0.26rem;
							/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
						}
					}
				}
			}
			.times{
				width:100%;
				height:0.33rem;
				background:#fff;
				line-height:0.34rem;
				margin-top:0.08rem;
				box-shadow:0 0.02rem 0.04rem #dedde1;
				.text-center{
					display:inline-block;
					padding:0 0 0 0.14rem;
				}
			}
		}
		.zhaiyao-food{
			width:100%;
			height:0.45rem;
			color:#ffffff;
			background:#ff7a59;
			position: fixed;
			font-size:0.18rem;
			display:flex;
			left:0;
		   	bottom:0;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
			z-index:320;
		}
		.tishi{
			width:50%;
			height:2rem;
			background:#fff;
			
		}
	}
</style>


