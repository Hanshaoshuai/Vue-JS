<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>我要融资</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu">
					<div class="content-food" ref="foods">
						<span>请选择您的融资方式</span>
						<ul>
							<li class="src1" ref="img1" index="img1" @click.stap="dingzengGo('Dingzeng')">
								<span>定增</span><font class="img1"></font>
							</li>
							<li class="src2" ref="img2" index="img2" @click.stap="zuoshiGo('Zuoshi')">
								<span>做市</span><font></font>
							</li>
						</ul>
						<ul>
							<li class="src3" ref="img3" index="img3" @click.stap="zhuanguGo('ZhuanlaoGu')">
								<span>转老股</span><font></font>
							</li>
							<li class="src4" ref="img4" index="img4" @click.stap="zhiyaGo('ZhiYa')">
								<span>股权质押</span><font></font>
							</li>
						</ul>
						<ul>
							<li class="src5" ref="img5" index="img5" @click.stap="zulinGo('ZuLin')">
								<span>融资租赁</span><font></font>
							</li>
							<li class="src6" ref="img6" index="img6" @click.stap="yanbaoGo('YanBao')">
								<span>研报支持</span><font></font>
							</li>
						</ul>
						<ul>
							<li class="src7" ref="img7" index="img7" @click.stap="shuangchuangGo('ShuangChuang')">
								<span>双创债</span><font></font>
							</li>
							<li class="src8" ref="img8" index="img8" @click.stap="diaoyanGo('Diaoyan')">
								<span>公司调研</span><font></font>
							</li>
						</ul>
					</div>
				</div>
				<div class="zhuying">
					<div class="zhuying-heder"><font></font>您还可以在电脑端发起融资<span>（推荐）</span></div>
					<div class="zhuying_1">
						<div class="ferst">
							<span>1.登录网站www.qironghome.com,输入用户名和密码，登录您的账号</span>
							<span>2.点击登录“发起融资”，按照页面提示步骤操作即可完成</span>
							<span>3.您的项目融资信息将会一对一的发送给您后续步骤中选择的机构投资人，也会以私密模式出现在“其他正在融资的项目”列表里（参见“发现”页面示例），不会大范围公开。</span>
						</div>
					</div>
				</div>
				<div class="butten">
					<span @click.stop="liuYan()">继续手机端操作</span>
				</div>
			</div>
			<router-view></router-view>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
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
				src:"",
				urlName:"Dingzeng",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
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
			},
			zulinGo(name){
				this.urlName=name;
				this.src=this.$refs.img5.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZuLin";
			},
			yanbaoGo(name){
				this.urlName=name;
				this.src=this.$refs.img6.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/YanBao";
			},
			shuangchuangGo(name){
				this.urlName=name;
				this.src=this.$refs.img7.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ShuangChuang";
			},
			diaoyanGo(name){
				this.urlName=name;
				this.src=this.$refs.img8.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			liuYan(){
				window.location.href="#/faxian/WoyaoRongzi/0/"+this.urlName;
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
			box
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
				padding-left:0.3rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
		}
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.fankiu{
				width:100%;
				.content-food{
					flex:1;
					padding:0.18rem 5.6% 0.27rem 5.6%;
					line-height:0.3rem;
					font-size:0.18rem;
					span{
						display:inline-block;
						font-weight:500;
						/*color:#000000;*/
					}
					ul{
						width:100%;
						overflow:hidden;
						&:first-child{
							border:0.01rem solid #ff7a59;
						}
						li{
							width:48%;
							border-radius:0.04rem;
							font-size:0.22rem;
							color:#525252;
							display:inline-block;
							text-align:center;
							background:#fff;
							border:0.01rem solid #ddddde;
							/*border:0.005rem solid #ff7a59;*/
							box-sizing: border-box;
							line-height:0.95rem;
							margin:0.06rem 0;
							float:left;
							position:relative;
							box-sizing:border-box;
							&:last-child{
								float:right;
								margin-right:0;
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
								background-image:url("./img/duihao.png");
							}
						}
						.src1{
							border:0.01rem solid #ff7a59;
						}
					}
				}
			}
			.zhuying{
				width:100%;
				.zhuying-heder{
					padding:0 0.2rem 0.08rem 0.2rem;
					line-height:0.2rem;
					font-size:0.18rem;
					/*font-weight:600;*/
					font{
						display:inline-block;
						width:0.2rem;
						height:0.2rem;
						background-image:url("./img/zhongdian.png");
						background-size:100% 100%;
						vertical-align:top;
						margin:-0.01rem 0.04rem 0 0;
					}
					span{
						display:inline-block;
						color:#fc9981;
						/*font-weight:600;*/
					}
				}
				.zhuying_1{
					width:89.5%;
					margin:0 auto;
					padding:0.2rem 0.09rem;
					font-size:0.1rem;
					background:#fff;
					border:0.005rem solid #ddddde;
					box-sizing:border-box;
					border-radius:0.1rem;
					.ferst{
						span{
							display:block;
							font-size:0.13rem;
							line-height:0.24rem;
							color:#b6b6b6;
						}
					}
					.last{
						padding:0.2rem;
					}
				}
				
			}
			.butten{
				width:100%;
				height:0.58rem;
				background:#ff7a59;
				margin-top:0.08rem;
				text-align:center;
				line-height:0.58rem;
				span{
					display:inline-block;
					width:100%;
					font-size:0.17rem;
					color:#fff;
				}
			}
		}
	}
</style>


