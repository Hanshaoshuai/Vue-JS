<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>填写要素</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<box></box>
				<div class="fankiu-content">
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>公司名称</div>
						<div class="last">
							<textarea placeholder="" class="mint-field-core" v-model="texta"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>公司代码</div>
						<div class="last">
							<textarea placeholder="" class="mint-field-core" v-model="textb"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>研报目的</div>
					</div>
					<div class="fankiu">
						<div class="content-food"  ref="foods">
							<ul>
								<li class="src1" ref="img1" index="img1" @click.stap="dingzengGo('Dingzeng')">
									<span>融资定价</span><font class="img1"></font>
								</li>
								<li class="src2" ref="img2" index="img2" @click.stap="zuoshiGo('Zuoshi')">
									<span>股价维护</span><font></font>
								</li>
							</ul>
							<ul>
								<li class="src3" ref="img3" index="img3" @click.stap="zhuanguGo('ZhuanlaoGu')">
									<span>价值挖掘</span><font></font>
								</li>
								<li class="src4" ref="img4" index="img4" @click.stap="zhiyaGo('ZhiYa')">
									<span>并购调研</span><font></font>
								</li>
							</ul>
						</div>
					</div>
					<div class="dujia-header"  @click.stop="LiuchengGo()">
						<span><font class="diaoyan"></font>阅读研报服务流程</span>
						<span><img src="../img/jiantou.png"/></span>
					</div>
					<div class="dujia-header border-topbottom"  @click.stap="ShiliGo()">
						<span><font class="xianxia"></font>研报实例</span>
						<span><img src="../img/jiantou.png"/></span>
					</div>
				</div>
				<div class="times">
					<span class="times_1">备注：这是一项付费服务，具体标准将由客服与您电话沟通</span>
				</div>
				<div class="butten-box">
					<div class="butten">
						<ul>
							<li><span @click.stop="shenqingGo()">确定申请</span></li>
						</ul>
					</div>
				</div>
			</div>
			
			<pipei ref="pipeiShow"></pipei>
			<liucheng ref="liuchengShow"></liucheng>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import { Toast } from 'mint-ui';
	
	import box from "../../../box.vue";
	import pipei from "../PipeiTouziRen/Pipei.vue";
	import liucheng from "../YanbaoLiucheng/YanbaoLiucheng.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				texta:"",
				textb:"",
				src:"",
				urlName:"Dingzeng",
				showFlag:true,
				tucaoShow:true,
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			shenqingGo(){
				MessageBox.confirm('向平台申请研究报告支持').then(action => {
				  	Toast('申请成功，客服将在24小时内联系您');
				});
			},
			LiuchengGo(){
				this.$refs.liuchengShow.liuchengBlock();
			},
			ShiliGo(){
				window.location.href="#/shendu/WenzhangGengduo/0";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			},
			dingzengGo(name){
				console.log(name)
				this.urlName=name;
				this.src=this.$refs.img1.getAttribute("index");
//				window.location.href="#/faxian/WoyaoRongzi/0/Dingzeng";
			},
			zuoshiGo(name){
				this.urlName=name;
				this.src=this.$refs.img2.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Zuoshi";
			},
			zhuanguGo(name){
				this.urlName=name;
				this.src=this.$refs.img3.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhuanlaoGu";
			},
			zhiyaGo(name){
				this.urlName=name;
				this.src=this.$refs.img4.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhiYa";
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
		watch:{
			src:function(newVal,oldVal){
//				console.log(newVal)
//				console.log(this.$refs.foods.getElementsByTagName("ul")[0].getElementsByTagName("li"))
				var uls=this.$refs.foods.getElementsByTagName("ul")
				var x=uls.length;
				var y=2
				for(var i=0; i<x; i++){
					for(var z=0; z<2; z++){
						if(uls[i].getElementsByTagName("li")[z].getAttribute("index")==newVal){
//							console.log(uls[i].getElementsByTagName("li")[z])
							uls[i].getElementsByTagName("li")[z].style.border='0.01rem solid #ff7a59';
							uls[i].getElementsByTagName("li")[z].getElementsByTagName("font")[0].setAttribute("class","img1")
						}else{
							uls[i].getElementsByTagName("li")[z].style.border='0.01rem solid #ddddde';
							uls[i].getElementsByTagName("li")[z].getElementsByTagName("font")[0].setAttribute("class","")
						}
					}
				}
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
			pipei,
			liucheng
//			youhuiquan
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
		z-index:310;
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
		.box::-webkit-scrollbar{width:0px;}
		.box{
			width:100%;
			background:#fff;
			-webkit-overflow-scrolling:touch;
			.fankiu-content{
				width:89.4%;
				margin:0 auto;
				.zhuying_1{
					width:100%;
					span{
						color:#ff7a59;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						align-content: center;
						align-items: center;
						font-size:0.16rem;
						font{
							color:#ff7a59;
							font-size:0.15rem;
						}
					}
					.last{
						flex:1;
						padding:0 0.06rem;
						border:1px solid #ebebeb;
						background:#f5f4f9;
						.mint-field-core{
							resize: none;
							font-size:0.14rem;
							background:#f5f4f9;
							height:0.33rem;
							line-height:0.33rem;
							&::-webkit-scrollbar{width:0;height:0}
							&::-webkit-input-placeholder{
								color:#afafaf;
							}
						}
					}
					.neirong{
						min-height:1.22rem;
						.mint-field-core{
							resize: none;
							background:#f5f4f9;
							min-height:1.22rem;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
					}
					li{
						width:100%;
						height:0.38rem;
						display:flex;
						color:#868686;
						align-content:center;
						align-items:center;
						justify-content:flex-end;
					}
					.number{
						width:82%;
						position:relative;
						span{
							width:0.3rem;
							height:0.38rem;
							color:#bdbdbd;
							line-height:0.38rem;
							position:absolute;
							right:-0.35rem;
							top:0;
						}
						.mint-field-core::-webkit-input-placeholder{
							color:#afafaf;
						}
					}
					.last-bottom{
						margin-bottom:0.1rem;
					}
				}
				.fankiu{
					width:100%;
					display:flex;
					.content-food{
						flex:1;
						font-size:0.14rem;
						background:#fff;
						ul{
						width:100%;
						overflow:hidden;
							li{
								width:48.8%;
								border-radius:0.04rem;
								color:#525252;
								display:inline-block;
								text-align:center;
								background:#fff;
								border:0.01rem solid #ddddde;
								/*border:0.005rem solid #ff7a59;*/
								box-sizing: border-box;
								/*line-height:0.95rem;*/
								margin-bottom:0.08rem;
								float:left;
								position:relative;
								box-sizing:border-box;
								&:last-child{
									float:right;
									margin-right:0;
								}
								span{
									/*font-weight:bold;*/
									display:inline-block;
									padding:0.13rem 0;
									font-size:0.16rem;
									line-height:0.15rem;
								}
								font{
									display:inline-block;
									position:absolute;
									bottom:-0.01rem;
									right:-0.01rem;
									background-size:100% 100%;
									width:0.36rem;
									height:0.36rem;
								}
								.img1{
									background-image:url("../img/duihao.png");
								}
							}
							.src1{
								border:0.01rem solid #ff7a59;
							}
						}
					}
				}
				.dujia-header{
					flex:1;
					background:#fff;
					padding:0.06rem 0;
					span{
						font-size:0.16rem;
		    			font-weight:500;
		    			line-height:0.34rem;
		    			vertical-align: top;
						&:first-child{
							font-weight:bold;
							font-size:0.16rem;
						}
						&:last-child{
							float:right;
							margin-top:0.02rem;
						}
						font{
							display:inline-block;
							width:0.24rem;
							height:0.24rem;
							margin:0.04rem 0.03rem 0 0;
							background-size:100% 100%;
							background-repeat:no-repeat;
							
						}
						.diaoyan{
							background-image:url("../img/chengs.png");
						}
						.xianxia{
							background-image:url("../img/shili.png");
						}
					}
					img{
						width:0.16rem;
					}
				}
			}
			.times{
				width:100%;
				height:0.45rem;
				line-height:0.45rem;
				font-size:0.13rem;
				text-align:center;
				background:#f5f4f9;
				.times_1{
					color:#b0b0b0;
				}
			}
			.butten-box{
				width:100%;
				padding:0.33rem 0 0.33rem 0;
				background:#f5f4f9;
				.butten{
					width:45%;
					height:0.55rem;
					margin:0 auto;
					display:flex;
					background:#ff7a59;
					align-content:center;
					align-items:center;
					justify-content:center;
					font-size:0.18rem;
					border-radius:0.16rem;
					/*position:absolute;
					bottom:0.76rem;
					left:0;
					right:0;*/
					ul{
						li{
							span{
								color:#fff;
							}
						}
					}
				}
			}
		}
	}
</style>


