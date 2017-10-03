<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="../img/back.png"/></span>
					<span>匹配投资人</span>
					<div class="fanhui-right">
						<div @click.stop="quanXuan()">
							<font :class="{'typeC':wuxuan,'typeD':xuanze}"></font><span>全选</span>
						</div>
					</div>
				</div>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content" ref="tianjia">
					<div class="fankiu">
						<div class="tubiao"></div>
						<div class="content-food" style="text-align:center;">
							<span>已为您匹配888人</span>
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
							<div class="borders typeA"  @click.stop="xuanZe('0')"></div>
						</div>
						<div class="xiaolv border-topbottom">
							<div class="border-right">
								<li><font>235</font></li>
								<span>收获项目数</span>
							</div>
							<div class="border-right">
								<li><font class="center">2&nbsp;%</font></li>
								<span class="center">反馈率</span>
							</div>
							<div class="border-right">
								<li><font>200&nbsp;%</font></li>
								<span>约谈率</span>
							</div>
						</div>
						<div class="leimu">
							<div class="zhonglei">
								<span class="jieduan">阶段：PE</span>
								<span  class="dangbi">单笔投资：1000万-2000万</span>
								<span  class="zijin">资金成本：年化20%-30%</span>
								<span  class="fangkuan">放款速度：不超过90天</span>
								<span  class="lingyu">领域：医疗、军事</span>
							</div>
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
							<div class="borders typeA"  @click.stop="xuanZe('1')"></div>
						</div>
						<div class="xiaolv border-topbottom">
							<div class="border-right">
								<li><font>235</font></li>
								<span>收获项目数</span>
							</div>
							<div class="border-right">
								<li><font class="center">2&nbsp;%</font></li>
								<span class="center">反馈率</span>
							</div>
							<div class="border-right">
								<li><font>200&nbsp;%</font></li>
								<span>约谈率</span>
							</div>
						</div>
						<div class="leimu">
							<div class="zhonglei">
								<span class="jieduan">阶段：PE</span>
								<span  class="dangbi">单笔投资：1000万-2000万</span>
								<span  class="zijin">资金成本：年化20%-30%</span>
								<span  class="fangkuan">放款速度：不超过90天</span>
								<span  class="lingyu">领域：医疗、军事</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="zhaiyao-food">
				<div class="ferst">您已选择&nbsp;<div class="ferst-child"><span ref="size">{{ButtenName}}</span></div>&nbsp;&nbsp;个投资人</div>
				<span class="last" @click.stop="butten">下一步</span>
			</div>
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../../common/js/path';
	import { Toast } from 'mint-ui';
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
			},
			token:{}
		},
		data () {
			return {
				CanShu:"",
				block:false,
				ButtenName:0,
				showFlag:false,
				wuxuan:true,
				xuanze:false,
				XiaYibu:false
			}
		},
		methods:{
			listnone(){
				this.showFlag=false;
//				history.go(-1)
			},
			pipeiBlock(CanShu){
				console.log(CanShu.XiangmuID)
				console.log(this.token)
				this.CanShu=CanShu
				this.showFlag=true;
				//匹配投资人列表		
				var datas = {
					token:this.token,		//	token	是	[string]		
					item_id:this.CanShu.XiangmuID,		//	项目id	是	[string]		
					page:"",			//	page	是	[string]		
					size:""			//	size	是	[string]	
				}
				this.$http.post(URL.path+'finance/investor_list',datas,{emulateJSON:true}).then(function(res){
					var data=res.data
					console.log(res);
				},function(res){
				    console.log(res.status);
				})
			},
			quanXuan(){
//				console.log(this.$refs.tianjia.getElementsByClassName("borders"))
				var borders=this.$refs.tianjia.getElementsByClassName("borders")
				var length = borders.length;
				if(this.wuxuan==false){
					this.wuxuan=true;
					this.xuanze=false;
					this.XiaYibu=false;				//判断是否能下一步
					this.ButtenName=0;				//选择的个数为0
					for(var i=0; i<length; i++){
						borders[i].setAttribute("class","borders typeA")
					}
				}else{
					this.wuxuan=false;
					this.xuanze=true;
					this.XiaYibu=true;				//判断是否能下一步
					this.ButtenName=length;			//选择的个数为全部
					for(var i=0; i<length; i++){
						borders[i].setAttribute("class","borders typeB")
					}
				}
				this.play();		//调用底部的数量更改动画；
			},
			play(){							//底部的数量更改动画；
				var size=this.$refs.size;
				var z=0;
				var y=26;
				var run=setInterval(function(){
					if(z<=28){
						z+=1
						size.style.fontSize=16+z+"px"
					}else{
						size.style.fontSize="28px"
						stape();
						clearInterval(run);
					}
					
				},1)
				function stape(){
					var stape=setInterval(function(){
						if(y>=8){
							y-=1
							size.style.fontSize=y+"px"
						}else{
							size.style.fontSize="0.18rem";
							clearInterval(stape);
						}
						
					},1)
				}
			},
			xuanZe(id){
				var boxs=this.$refs.tianjia.getElementsByClassName("borders");
				var length = boxs.length;
				var x=0;
				var borders=this.$refs.tianjia.getElementsByClassName("borders")[id];
//				console.log(borders.getAttribute("class","typeA"))
				if(borders.getAttribute("class")=="borders typeA"){
					borders.setAttribute("class","borders typeB")
					this.XiaYibu=true;				//判断是否能下一步
				}else{
//					this.wuxuan=true;
//					this.xuanze=false;
					borders.setAttribute("class","borders typeA")
					this.XiaYibu=false;				//判断是否能下一步
				}
				for(var i=0; i<length; i++){
					if(boxs[i].getAttribute("class")=="borders typeB"){
						x+=1;
					}
				}
				this.ButtenName=x;					//已选择的个数
				if(x==length){
					this.wuxuan=false;
					this.xuanze=true;
				}else{
					this.wuxuan=true;
					this.xuanze=false;
				}
				this.play();			//调用底部的数量更改动画；
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
				if(this.XiaYibu==true){				//判断必须选择匹配人才可以跳转
					window.location.href="#/Xeiyi/0";
				}else{
					Toast("请选择匹配人");
				}
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
		z-index:2600;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:2700;
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
			    		width:0.17rem;
						height:0.17rem;
						margin:0.13rem 0.04rem 0 0;
						vertical-align: top;
			    	}
			    	.typeC{
						background-image:url("../img/wu.png");
						background-size:100% 100%;
					}
					.typeD{
						background-image:url("../img/bai.png");
						background-size:100% 100%;
					}
			    	span{
			    		display:inline-block;
			    	}
			    }
			}
		}
		.wenzhang-list::-webkit-scrollbar{width:0px;}
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;  		/*解决ios滑动*/
			.wenzhang-content{
				width:95%;
				/*height:auto;*/
				margin:0 auto;
				padding:0.45rem 0 0.6rem 0;
				.fankiu{
					width:100%;
					display:flex;
					align-items:center;
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("../img/zhao.png");
						background-size:100% 100%;
						margin:0 0.04rem 0 0.12rem;
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
					border-radius:0.06rem;
					border:1px solid #ff7a59;
					box-sizing:border-box;
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
							border-radius:0.3rem;
							border:none;
							border:2px solid #e5e4e4;
						}
						.names{
							flex:1;
							.border-right{
								display:inline-block;
								padding-right:0.06rem;
							}
						}
						.borders{
							width:0.2rem;
							height:0.2rem;
						}
						.typeA{
							background-image:url("../img/hong.png");
							background-size:100% 100%;
						}
						.typeB{
							background-image:url("../img/hong1.png");
							background-size:100% 100%;
						}
					}
					.xiaolv{
						padding:0.1rem 0;
						display:flex;
						color:#8c8c8c;
						background:#f7fcff;
						div{
							flex:1;
							text-align:center;
							font-size:0.14rem;
							li{
								color:#2abdfc;
								font-size:0.16rem;
								padding-bottom:0.07rem;
							}
						}
						.center{
							padding:0 0.1rem;
						}
					}
					.leimu{
						width:95%;
						margin:0 auto;
						color:#8c8c8c;
						padding:0.02rem 0;
						.zhonglei{
							width:100%;
							overflow:hidden;
							span{
								float:left;
								display:inline-block;
								line-height:0.26rem;
								white-space:nowrap;
								overflow:hidden;
								text-overflow:ellipsis;
							}
							.jieduan{
								width:48.3%;
								padding-right:1.2%;
							}
							.dangbi{
								width:49.3%;
								padding-right:1.2%;
							}
							.zijin{
								width:48.3%;
								padding-right:1.2%;
							}
							.fangkuan{
								width:48.3%;
								padding-right:1.2%;
							}
							.lingyu{
								width:auto;
								padding-right:1.2%;
							}
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
			height:0.60rem;
			background:#fff;
			font-size:0.16rem;
			display:flex;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
			.ferst{
				flex:1;
				text-align:center;
				position:relative;
				.ferst-child{
					position:absolute;
					top:0;
					bottom:0;
					left:0;
					right:0;
					width:30px;
					height:30px;
					margin:auto;
					display:flex;
					align-items:center;
					align-content:center;
					justify-content:center;
					span{
						color:#ff7a59;
					}
				}
			}
			.last{
				line-height:0.6rem;
				padding:0 0.2rem;
				display:inline-block;
				color:#fff;
				background:#ff7a59;
			}
		}
	}
</style>


