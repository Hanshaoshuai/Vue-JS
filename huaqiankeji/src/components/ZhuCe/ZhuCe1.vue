<template>
	<transition name="fade">
		<div class="zhuce">
			<div class="searchBox">
				<div class="home-search">
					<span>填写基本信息</span>
				</div>
			</div>
			<div class="contents">
				<div class="wanshan">
					<div style="width:100%;height:0.45rem;"></div>
					<div class="logo">
						<div class="zhuce-content">
							<div class="cont-left">
								<touxiang></touxiang>
								<span>上传头像</span>
								<!--<div class="left-img border"><img src=""/></div>-->
							</div>
							<div class="cont-right">
								<mingpian></mingpian>
								<span>上传名片</span>
								<!--<div class="right-img border"><img src=""/></div>-->
							</div>
						</div>
					</div>
					<div class="zhuying_1 liangdian_1 border-top">
						<div class="ferst">选择您的行业身份<font></font></div>
						<ul ref="biaoqian">
							<span class="bianse" @click.stap="xuanze('0')">投资机构</span>
							<span @click.stap="xuanze('1')">财务顾问</span>
							<span @click.stap="xuanze('2')">企&nbsp;业</span>
							<span @click.stap="xuanze('3')">合格投资人</span>
							<span @click.stap="xuanze('4')">研究咨询</span>
							<span @click.stap="xuanze('5')">做市商</span>
							<span @click.stap="xuanze('6')">后续添加</span>
						</ul>
					</div>
					<transition name="fades">
						<div v-show="Leixing" class="zhuying_1 liangdian_1 border-topbottom">
							<div class="ferst">您是什么类型的投资机构<font></font></div>
							<ul ref="biaoqian2">
								<span class="bianse" @click.stap="xuanze2('0','Guquan')">股权投资</span>
								<span @click.stap="xuanze2('1','Zaiquan')">债权投资</span>
								<span @click.stap="xuanze2('2','Guzhai')">股债兼投</span>
							</ul>
						</div>
					</transition>
					<div class="zhuce-food" @click.stop="XiaYibu()">
						<span>下一步</span>
					</div>
				</div>
			</div>
			<!--<type0 ref="show" id="0"></type0>-->
			<!--<type1 ref="show" id="1"></type1>
			<type2 ref="show" id="2"></type2>
			<type3 ref="show" id="3"></type3>
			<type4 ref="show" id="4"></type4>
			<type5 ref="show" id="5"></type5>-->
			<router-view></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import mingpian from "../ShangchuanMingpian.vue";
	import touxiang from "../ShangchuanTouxiang.vue";
//	import type0 from "./type0.vue";
//	import type1 from "./type1.vue";
//	import type2 from "./type2.vue";
//	import type3 from "./type3.vue";
//	import type4 from "./type4.vue";
//	import type5 from "./type5.vue";

	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				Leixing:true,
				phone:"",
				captcha:"",
				password:"",
				passwords:"",
				classId:"0",
				Type:{
					show0:0,
					show1:1,
					show2:2,
					show3:3,
					show4:4,
					show5:5
				},
				id:3,
				showFlag:false,
				onlyContent:true,
				index:"0",
				JigouType:"Guquan"
			}
		},
		methods:{
			fanhui(){
				window.location.href="#/denglu";
//				history.go(-1)
//				window.location.href="#/faxian";
			},
			XiaYibu(){
				if(this.index==0){
					window.location.href="#/zhuce/ZhuCe1/12/"+this.JigouType;
				}else{
					window.location.href="#/zhuce/ZhuCe1/12/type"+this.index;
				}
				
				
			},
			xuanze(index){
//				console.log(this.$refs.biaoqian.getElementsByTagName("span"))
				var spans=this.$refs.biaoqian.getElementsByTagName("span")
				var length=spans.length;
				this.index=index;
				if(index==0){
					this.Leixing=true;
				}else{
					this.Leixing=false;
				}
				for(var i=0; i<length; i++){
					if(spans[i].getAttribute("class")=="bianse"){
						spans[i].setAttribute("class","");
					}
				}
				spans[index].setAttribute("class","bianse")
			},
			xuanze2(index,type){
//				console.log(this.$refs.biaoqian.getElementsByTagName("span"))
				var spans=this.$refs.biaoqian2.getElementsByTagName("span")
				var length=spans.length;
				this.JigouType=type;
				for(var i=0; i<length; i++){
					if(spans[i].getAttribute("class")=="bianse"){
						spans[i].setAttribute("class","");
					}
				}
				spans[index].setAttribute("class","bianse")
			},
			yanZheng(){
				
			},
//			xuanze(id,classId){
//				console.log(id)
////				var type=document.getElementById(id);
////				type.TypeShow()
////				console.log(type)
////				this.$refs.show+this.classId.TypeShow();
//				window.location.href="#/zhuce/zhuce1/12/type"+id+"/"+classId;
//			}
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
			mingpian,
			touxiang
//			type0
//			type1,
//			type2,
//			type3,
//			type4,
//			type5
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
	.fades-enter-active {
	  	transition: all .5s ease;
	}
	.fades-leave-active {
	  	transition: all .5s ease;
	}
	.fades-enter, .fades-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.zhuce{
		position:fixed;
		background:#ffffff;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:200;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:21;
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
			}
		}
		.contents::-webkit-scrollbar{width:0px}
		.contents{
			width:92%;
			height:100%;
			margin:0 auto;
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wanshan{
				width:100%;
				height:auto;
				.logo{
					width:100%;
					height:1.62rem;
					display:flex;
					justify-content:center;
					align-content:center;
					align-items:center;
					.zhuce-content{
						width:100%;
						height:auto;
						display: flex;
						.cont-left{
							flex:1;
							padding:0 0.32rem;
							text-align: center;
							margin-top:0.3rem;
							span{
								display:inline-block;
								width:100%;
								font-size:0.16rem;
								line-height:0.3rem;
							}
							.left-img{
								width:1rem;
								height:1rem;
							}
						}
						.cont-right{
							flex:1;
							padding:0 0.32rem;
							text-align: center;
							margin-top:0.3rem;
							span{
								display:inline-block;
								width:100%;
								line-height:0.3rem;
							}
							.right-img{
								width:1rem;
								height:1rem;
							}
						}
					}
				}
				.phones{
					margin-top:0.1rem;
				}
				.zhuce-list{
					.huoqu{
						background:#007AFF;
						border-radius:0.1rem;
						padding:0.1rem;
						color:#fff;
					}
				}
				.zhuying_1{
					width:100%;
					padding:0.16rem 0 0.07rem 0;
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
							font-size:0.12rem;
						}
					}
				}
				.liangdian_1{
					.ferst{
						height:0.18rem;
						padding-bottom:0.14rem;
					}
					ul{
						width:100%;
						overflow:hidden;
						display:flex;
						/*align-content:stretch;*/
						/*align-items:stretch ;*/
						/*justify-content:space-between;*/
						flex-wrap:wrap;
						
						span{
							display:inline-block;
							float:left;
							font-size:0.14rem;
							padding:0.06rem 0.08rem;
							border:0.007rem solid #f2f2f2;
							color:#acacac;
							border-radius:0.3rem;
							margin:0 0.16rem 0.11rem 0;
						}
						span:nth-child(4n){
							margin:0 0 0.11rem 0;
						}
						.bianse{
							border:0.007rem solid #fddcd0;
							color:#ff7a59;
						}
					}
				}
				.zhuce-leixing{
					width:100%;
					height:2rem;
					display: flex;
					ul{
						flex:1;
						padding:0.2rem;
						.leixing-header{
							margin-left: 0.1rem;
							margin-bottom:0.1rem;
						}
						li{
							display:inline-block;
							margin:0;
							padding:0.08rem 0.16rem;
							margin:0.06rem 0.1rem;
						}
					}
				    /*-webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;*/
				   
				}
				.zhuce-food{
					width:100%;
					height:0.4rem;
					margin:0 auto;
					margin-top:0.18rem;
					span{
						width:100%;
						height:100%;
						color:#ffffff;
						font-size:0.2rem;
						text-align:center;
						line-height:0.4rem;
						border-radius:8px;
						display:inline-block;
						background:#ff7a59;
					}
				}
			}
		}
	}
</style>


