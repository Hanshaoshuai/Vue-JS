<template>
	<!--<transition name="fade">-->
		<div v-show="showFlag" class="zhaiyao">
			<div class="xiangmu-header"></div>
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="./XinxiangMu/img/back.png"/></span>
					<span>项目摘要</span>
					<div class="fanhui-right">
						<div>
							<div ref="dcontent" id="dcontent" class="dcontent">
								<textarea style="display:none;" ref="sharecontent" id="sharecontent" rows="3">我正在使用HBuilder+HTML5开发移动应用，赶紧跟我一起来体验！</textarea>
								<table style="width:100%; display:none;">
									<tbody>
										<tr>
											<td style="width:30%"><div class="button button-select" onclick="shareCameraPicture()">拍照</div></td>
											<td style="width:30%"><div class="button button-select" onclick="shareGalleryPicture()">相册选取</div></td>
											<td style="width:30%"><div class="button button-select" onclick="shareLogoPicture()">使用logo图</div></td>
										</tr>
									</tbody>
								</table>
								<img style="display:none;" ref="pic" id="pic" src="http://www.qironghome.com/static/app/img/120.png"/>
								<div style="display:none;" class="button" onclick="shareShow()">分 享</div>
								<div style="display:none;" class="button" onclick="shareSystem()">系统分享</div>
								<p style="display:none;" class="heading">链接地址：</p>
								<input style="display:none;" ref="sharehref" id="sharehref" class="sharehref" v-model="fenciangURL" type="url" placeholder="请输入要分享的链接地址"/>
								<p style="display:none;" class="heading">链接标题：</p>
								<input style="display:none;" ref="sharehrefTitle" id="sharehrefTitle" class="sharehref" v-model="fenxiangBiaoti" type="text" placeholder="请输入要分享的链接标题"/>
								<p style="display:none;" class="heading">链接描述：</p>
								<input style="display:none;" ref="sharehrefDes" id="sharehrefDes" class="sharehref" v-model="fenxiangCont" type="text" placeholder="请输入要分享的链接描述"/>
								<div class="button" @click.stop="shareHref()">分享</div>
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
					<div v-if="data" class="tishi-bottom">
						<div class="border">
							<ul>
								<!--<li class="border-bottom"></li>-->
								<li class="tishi-center">
									<div class="content-heder">
										<span>* {{shorts}} *</span>
										<span class="text-center">（{{codes}} **** ）</span>
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
								<!--<li class="border-bottom"></li>-->
							</ul>
							<div class="zhuying_1">
								<div class="ferst"><span></span>投资亮点</div>
								<div class="last">
									<p>{{data.lightspot}}</p>
								</div>
							</div>
						</div>
						<div class="zhuying_1 border">
							<div class="ferst"><span></span>经营业绩</div>
							<div class="last lasts">
								<p>上一财年:&nbsp;营收<span style="margin-left:0.01rem;">{{data.last_year_revenue}}亿</span>&nbsp;扣非净利润<span style="margin-left:0.01rem;">{{data.last_year_profit}}万</span></p>
								<p>今年预计:&nbsp;营收<span style="margin-left:0.01rem;">{{data.predict_revenue}}亿</span>&nbsp;扣非净利润<span style="margin-left:0.01rem;">{{data.predict_profit}}万</span></p>
							</div>
						</div>
						<div class="zhuying_1 border" style="margin-bottom:0;">
							<div class="ferst"><span></span>融资计划</div>
							<div class="last">
								<p>融资总额：<span>{{data.total_finance}}万</span></p>
								<!--<p>投前估值：<span>{{data.appraisement}}万</span></p>-->
							</div>
						</div>
					</div>
					
					
					<div class="times border-topbottom" style="margin-top:0;">
						<!--<span class="text-center">{{data.position}}</span>-->
						<span v-if="data.ctype==1" class="text-center">企业</span>
						<span v-if="data.ctype==7" class="text-center">财务顾问</span>
						<span class="text-center">{{times}}</span>
						<span>发布</span>
					</div>
				</div>
			</div>
			<div v-show="buttenBlock" class="zhaiyao-food" @click.stop="butten"><span>{{ButtenName}}</span></div>
			
			
			<div id="nativeShare"></div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
//	import Vue from "vue";
	import {numToTime} from "../../common/js/date.js";
	import {common} from "../../common/js/common.js";
	import {common1} from "../../common/js/common1.js";
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
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
				numToTime:'',
				buttenBlock:false,
				utype:false,
				dcontent:"",
				sharecontent:"",
				pic:"",
				sharehref:'',
				sharehrefTitle:'',
				sharehrefDes:"",
				output:"",
				fenciangURL:"",
				fenxiangBiaoti:"",
				fenxiangCont:"",
				yisuoYao:false,
				
				times:'',
				shorts:'',
				codes:""
//				onlyContent:true
			}
		},
		mounted(){
//			if(localStorage.getItem("type")=='1' || localStorage.getItem("type")=='7'){
//				this.buttenBlock=false;
//			}else{
//				this.buttenBlock=true;
//			};
			if(localStorage.getItem("type")=='2' || localStorage.getItem("type")=='3' || localStorage.getItem("type")=='4' || localStorage.getItem("type")=='5' || localStorage.getItem("type")=='6'){
				this.buttenBlock=true;
			}else{
				this.buttenBlock=false;
			};
			this.shuaxin();
//			this.numToTime=numToTime;
		},
		activated(){
//			console.log("jjjj")
			this.shuaxin();
		},
		methods:{
			listnone(){
				Indicator.close();
				history.go(-1)
//				this.showFlag=false;
			},
			shuaxin(){
				//项目详情
				var data = {
					token:this.$route.params.token,
					item_id:this.$route.params.XiangmuID			//	项目id
				}
				Indicator.open({spinnerType: 'fading-circle'});
	//			console.log(data)
				this.$http.post(URL.path+'finance/item_detail',data,{emulateJSON:true}).then(function(res){
					Indicator.close();
					this.data=res.body.data[0];
					this.shorts=this.data.com_short.substr(1,1);
					this.codes=this.data.com_code.substr(0,2);
					this.times=numToTime(this.data.create_time)
					this.$nextTick(function(){
						this.output=this.$refs.output
						this.dcontent=this.$refs.dcontent;
					});
	//				console.log(res);
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
			},
			shareHref(){
				var biaoQian='';
				if(this.data.type==1){
					biaoQian='定增'
				}
				if(this.data.type==2){
					biaoQian='做市'
				}
				if(this.data.type==3){
					biaoQian='转老股'
				}
				if(this.data.type==4){
					biaoQian='股权质押'
				}
				if(this.data.type==5){
					biaoQian='融资租赁'
				}
				if(this.data.type==6){
					biaoQian='研报支持'
				}
				if(this.data.type==7){
					biaoQian='公司调研'
				}
//				this.fenciangURL='http://www.qironghome.com/index.php/app/item-info?id=18&uid=228'
				
				this.fenciangURL='http://www.qironghome.com/index.php/app/item-info?id='+this.data.id+'&uid='+this.data.uid;
				this.fenxiangBiaoti="* "+this.data.com_short.substr(1, 1)+" *"+this.data.com_code.substr(0, 2)+" **** "+biaoQian
				this.fenxiangCont=this.data.lightspot;
				
				this.dcontent=this.$refs.dcontent;
				this.sharecontent=this.$refs.sharecontent;
				this.pic=this.$refs.pic;
				this.sharehref=this.$refs.sharehref;
				this.sharehrefTitle=this.$refs.sharehrefTitle;
				this.sharehrefDes=this.$refs.sharehrefDes;
				this.output=this.$refs.output;
//				console.log(this.sharehref.value)
//				common(this.output,this.dcontent,window);
				common1(this.dcontent,this.sharecontent,this.pic,this.fenciangURL,this.fenxiangBiaoti,this.fenxiangCont,this.output);
			},
			butten(){
				if(this.yisuoYao==true){
					Toast("您已经索要过该项目信息，请您等待反馈")
					return;
				}
				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
					//投资人索要项目
					var data = {
						token:this.$route.params.token,
						item_id:this.$route.params.XiangmuID,			//	项目id
						type:'1',
						uid:this.data.uid
					}
//					console.log(this.data)
					this.$http.post(URL.path+'finance/demand_item',data,{emulateJSON:true}).then(function(res){
//						console.log(res);
						if(res.body.returnCode==202){
							this.yisuoYao=true;
							Toast("您已经索要过该项目信息，请您等待反馈")
							return;
						}
						if(res.body.returnCode==200){
							this.yisuoYao=true;
							Toast("申请成功，请您等待反馈")
							this.ButtenName="已索要完整项目信息"
						}
					},function(res){
					    console.log(res.status);
					})
				});
				this.block=true;
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
	
	
	.shareBtn {
      border: dotted 1px #ddd;
      display: block;
      width: 100px;
      text-align: center;
      margin: 20px auto 0 auto;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
    }

    .am-share {
      font-size: 14px;
      border-radius: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
      transform: translateY(100%);
      -webkit-transition: -webkit-transform 300ms;
      transition: transform 300ms;
      width: 100%;
      z-index: 1110;
    }

    .am-modal-active {
      transform: translateY(0px);
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    .am-modal-out {
      z-index: 1109;
      -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
      transform: translateY(100%)
    }

    .am-share-footer .share_btn {
      color: #555;
      display: block;
      width: 100%;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 0;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      padding: 0.625em 0;
      text-align: center;
      transition: background-color 300ms ease-out 0s, border-color 300ms ease-out 0s;
      vertical-align: middle;
      white-space: nowrap;
      font-family: "微软雅黑";
    }

    .am-share-sns {
      background-color: #fff;
      padding-top: 20px;
      height: auto;
      zoom: 1;
      overflow: auto;
    }

    .am-share-sns a {
      color: #555;
      display: block;
      text-decoration: none;
    }

    .am-share-sns span {
      display: block;
    }

    .sharebg {
      background-color: rgba(0, 0, 0, 0.6);
      bottom: 0;
      height: 100%;
      left: 0;
      opacity: 0;
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 1100;
      display: none;
    }

    .sharebg-active {
      opacity: 1;
      display: block;
    }


    /*插件*/

    #nativeShare .list {
      width: 100%;
      margin: 0 auto;
    }

    #nativeShare .list span {
      width: 25%;
      display: inline-block;
      text-align: center;
      margin: 10px 0;
    }

    #nativeShare .list span i {
      width: 40px;
      height: 40px;
      display: block;
      margin: 0 auto;
      margin-bottom: 5px;
    }

    #nativeShare .weibo i {
      background-image: url(./weixin.jpg);
      background-size: cover;
    }

    #nativeShare .weixin i {
      background-image: url(./weixin.jpg);
      background-size: cover;
    }

    #nativeShare .weixin_timeline i {
      background-image: url(./weixin.jpg);
      background-size: cover;
    }

    #nativeShare .qq i {
      background-image: url(./weixin.jpg);
      background-size: cover;
    }

    #nativeShare .qzone i {
      background-image: url(./weixin.jpg);
      background-size: cover;
    }

    #nativeShare .more i {
      background-image: url(./weixin.jpg);
      background-size: cover;
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
			width:100%;
			/*padding-right:0.03rem;*/
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
				padding-bottom:0.6rem;
				.tishi-bottom{
					width:100%;
					/*height:0.36rem;*/
					.border{
						box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
					}
					ul{
						height:0.3rem;
						padding:0.2rem 2.5% 0.1rem 2.5%;
						display:flex;
						background:#fff;
						li{
							flex:1;
							height:0.2rem;
							line-height:0.36rem;
							text-align:center;
							font-size:0.2rem;
							color:#323232;
							/*&:first-child{
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
							}*/
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
							word-break:break-all;
							/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
						}
						.lasts{
							padding-right:0rem;
						}
					}
				}
			}
			.times{
				width:100%;
				height:0.33rem;
				background:#fff;
				line-height:0.34rem;
				/*margin-top:0.08rem;*/
				box-shadow:0.02rem 0.02rem 0.04rem #dedde1;
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


