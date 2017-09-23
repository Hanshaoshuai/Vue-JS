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
				<div class="ferst">您已选择<span>{{ButtenName}}</span>个投资人</div>
				<span class="last" @click.stop="butten">下一步</span>
			</div>
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
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
				block:false,
				ButtenName:"88",
				showFlag:false,
				onlyContent:true,
				wuxuan:true,
				xuanze:false
			}
		},
		methods:{
			listnone(){
				this.showFlag=false;
//				history.go(-1)
			},
			pipeiBlock(){
				this.showFlag=true;
			},
			quanXuan(){
//				console.log(this.$refs.tianjia.getElementsByClassName("borders"))
				var borders=this.$refs.tianjia.getElementsByClassName("borders")
				var length = borders.length;
				if(this.wuxuan==false){
					this.wuxuan=true;
					this.xuanze=false;
					for(var i=0; i<length; i++){
						borders[i].setAttribute("class","borders typeA")
					}
				}else{
					this.wuxuan=false;
					this.xuanze=true;
					for(var i=0; i<length; i++){
						borders[i].setAttribute("class","borders typeB")
					}
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
				}else{
//					this.wuxuan=true;
//					this.xuanze=false;
					borders.setAttribute("class","borders typeA")
				}
				for(var i=0; i<length; i++){
					if(boxs[i].getAttribute("class")=="borders typeB"){
						x+=1;
					}
				}
				if(x==length){
					this.wuxuan=false;
					this.xuanze=true;
				}else{
					this.wuxuan=true;
					this.xuanze=false;
				}
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
				window.location.href="#/Xeiyi/0";
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
					padding-left:0.3rem;
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
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
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
				span{
					color:#ff7a59;
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


