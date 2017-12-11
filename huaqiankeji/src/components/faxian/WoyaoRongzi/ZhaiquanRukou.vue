<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>债权融资</span>
			</div>
			<div class="box" ref="wrapper">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu">
					<div class="zhuying-heder"><font></font>请选择您的债权融资方式<!--<span>（移动端）</span>--></div>
					<div class="content-food" ref="foods">
						<ul>
							<li class="src1" ref="img1" index="img1" @click.stap="ZuLin('ZuLinQ','4')">
								<span>融资租赁</span><font class="img1"></font>
								<p>单笔资金高达：2.0122亿</p>
							</li>
							<li class="src2" ref="img2" index="img2" @click.stap="Zhiya('ZhiyaQ','5')">
								<span>股权质押</span><font></font>
								<p>质押率高达：2012</p>
							</li>
						</ul>
						<ul>
							<li class="src3" ref="img3" index="img3" @click.stap="Baoli('BaoliQ','6')">
								<span>保&nbsp;理</span><font></font>
								<p>折扣率高达：2012</p>
							</li>
							<li class="src4" ref="img4" index="img4" @click.stap="Gudong('GudongQ','7')">
								<span>股东借款</span><font></font>
								<p>借款高达：2012</p>
							</li>
						</ul>
						<ul>
							<li class="src5" ref="img5" index="img5" @click.stap="YinbaoHan('YinbaoHanQ','8')">
								<span>银行保函</span><font></font>
								<p>成本低至：2012</p>
							</li>
							<li  style="" class="src6" ref="img6" index="img6" @click.stap="Duanqi('DuanqiQ','9')">
								<span>短期拆借</span><font></font>
								<p>资金高达：2012</p>
							</li>
						</ul>
						<ul>
							<li class="src7" ref="img7" index="img7" @click.stap="YinshouQuan('YinshouQuanQ','10')">
								<span>银行授信</span><font></font>
								<p>利率低至：2012</p>
							</li>
							<li  style="" class="src8" ref="img8" index="img8" @click.stap="Zengxin('ZengxinQ','11')">
								<span>大额增信</span><font></font>
								<p>起步金额1亿起</p>
							</li>
						</ul>
						<ul>
							<li style="display:none;" class="src9" ref="img9" index="img9" @click.stap="shuangchuangGo('ShuangChuangQ')">
								<span></span><font></font>
								<p>2012</p>
							</li>
							<li  style="" class="src10" ref="img10" index="img10" @click.stap="Jijin('JijinQ','12')">
								<span>产业发展基金</span><font></font>
								<p>杠杆高达1:3</p>
							</li>
						</ul>
					</div>
					<!--<jiLuqingdan ref="youhuiShow"></jiLuqingdan>-->
				</div>
				<div style="width:100%;height:0.6rem;"></div>
				<div class="butten">
					<span @click.stop="XiaYibu()">下一步</span>
				</div>
			</div>
			<!--<span class="loding" v-show="topStatus">
            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
          	</span>-->
			<!--<transition name="fade1">
				<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
			</transition>-->
			<router-view :token="token" :BiaoQian="BiaoQian" :type="type"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {numToTime} from "../../../common/js/date.js";
	import { Indicator } from 'mint-ui';
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
//	import jiLuqingdan from "./jiLuQingdan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				token:"",
				BiaoQian:"",
				src:"",
				urlName:"ZuLinQ",
				type:"4",			//创建类型
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				
				
				data:[],
				x:'1',
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				boxUl:"",
				types:{
					type1:"DingzengZuoshi",
					type2:"DingzengZuoshi",
					type3:"ZhuanlaoGu1",
					type4:"ZhiYa1",
					type5:"ZuLin1",
					type7:"Diaoyan1"
				},
				XiangmuID:"",
				is_send:"",
				type1:"",
				numToTime:"",
				none:false,
				zanWu:false,
				
				
				num:"",
				n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
				height:0,
				topBlock:false,
				page:1,
				tishis:false,
				jeiguo:"亲已经到底了",
				topStatus:false,
				tems:'',
				listlenght:-1
			}
		},
		mounted(){
			this.numToTime=numToTime;
//			console.log(this.$route.params['type'])
			this.token=this.$route.params['type'];
//			this.pipeiBlock();
			//获取标签
//			var datas = {
//				token:this.$route.params['type'],//	token	是	[string]	URL获取的参数
//			}
//			this.$http.post(URL.path1+'login/three',datas,{emulateJSON:true}).then(function(res){
//				var data=res.body.data
//				this.BiaoQian=res.body.data
//				console.log(this.BiaoQian);
//				console.log(res);
//			},function(res){
//			    console.log(res.status);
//			})
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
			},
			zhiDing(){		//返回顶部；
				this.$refs.wrapper.scrollTop=0;
			},
//			handleScroll(){
//				if(this.$refs.wrapper.scrollTop>600){
//					this.topBlock=true;
//				}else{
//					this.topBlock=false;
//				}
//			},
//			faxianScroll(){
//				if(this.$refs.wrapper.scrollTop>600){
//					this.topBlock=true;
//				}else{
//					this.topBlock=false;
//				}
//				this.imgs()
////				console.log(this.img[6].offsetTop)
//			},
//			imgs(){
//				var scrollHeights=this.$refs.wrapper.scrollHeight;
//				var setHeight = document.documentElement.clientHeight; //可见区域高度
//				var scrollTop = this.$refs.wrapper.scrollTop; //滚动条距离顶部高度
//				var x=Math.abs(Math.round(setHeight + scrollTop))
////				console.log(x)
////				console.log(scrollHeights)
//				if(x==scrollHeights || scrollHeights-x==1){
//					var tata=this
//					this.topStatus=true;
//					this.tems=setTimeout(function(){
//						tata.pipeiBlock();
//					},400)
//				}
//			},
			pipeiBlock(){
//				console.log(this.token)
				//项目列表（自己创建的历史融资记录）	
				var datas = {
					token:localStorage.getItem("token"),//	token	是	[string]		
					page:this.page,	//page	是	[string]		
					size:20	//size	是	[string]
				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path+'finance/creae_list',datas,{emulateJSON:true}).then(function(res){
					Indicator.close();
//					console.log('已投清单');
//					console.log(res.body.data);
//					if(this.data.length==5){//长度大于5从新开始
//						this.data=[]
//						this.$refs.wrapper.scrollTop=0;
//						this.height=0;
//					}
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.jeiguo="暂无投递"
						}
						this.$refs.wrapper.removeEventListener('scroll', this.faxianScroll);
						this.$refs.wrapper.addEventListener('scroll', this.handleScroll)
						this.tishis=true;
						return;
					}else{
						this.data.push(res.body.data);
					}
					if(this.n !== 0){
						clearTimeout(this.tems);
					}
					this.page=this.page*1;
					this.page=this.page+=1;
					if(this.n == 0){
						this.$nextTick(function(){
							this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
	  						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	  						this.imgs()
						});
					}
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
			},
			ZuLin(name,type){
//				console.log(name)
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img1.getAttribute("index");
//				window.location.href="#/faxian/WoyaoRongzi/0/Dingzeng";
			},
			Zhiya(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img2.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Zuoshi";
			},
			Baoli(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img3.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhuanlaoGu";
			},
			Gudong(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img4.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhiYa";
			},
			YinbaoHan(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img5.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZuLin";
			},
			Duanqi(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img6.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/YanBao";
			},
			YinshouQuan(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img7.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ShuangChuang";
			},
			Zengxin(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img8.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			shuangchuangGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img9.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			Jijin(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img10.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			XiaYibu(){
				window.location.href="#/ZhaiquanRukou/"+this.type+"/"+this.urlName;
			}
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
				console.log(this.type)
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
			box,
//			jiLuqingdan
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
	.fade1-enter-active {
	  	transition: all .5s ease;
	}
	.fade1-leave-active {
	  	transition: all .5s ease;
	}
	.fade1-enter, .fade1-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.xiangmu{
		position:fixed;
		background:#fff;
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
				padding-left:0.16rem;
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
				position:relative;
				width:100%;
				.content-food{
					flex:1;
					padding:0.18rem 5.6% 0.1rem 5.6%;
					line-height:0.3rem;
					font-size:0.18rem;
					span{
						display:inline-block;
						font-weight:500;
						/*color:#000000;*/
						a{
							color:#fc9981;
						}
					}
					ul{
						width:100%;
						overflow:hidden;
						&:first-child{
							/*border:0.01rem solid #ff7a59;*/
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
							height:0.95rem;
							line-height:0.72rem;
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
								width:0.3rem;
								height:0.3rem;
							}
							.img1{
								background-image:url("./img/duihao.png");
							}
							p{
								position:absolute;
								left:0;
								bottom:0.2rem;
								width:100%;
								font-size:0.13rem;
								color:#ff7a59;
								line-height:0.13rem;
							}
						}
						.src1{
							border:0.01rem solid #ff7a59;
						}
						&:last-child{
							li{
								float:left;
							}
						}
					}
				}
				.sousuo-content{
					width:100%;
					background:#fff;
					.content-header{
						width:96%;
						margin:0 auto;
						padding:0.16rem 0;
						font-size:0.16rem;
						li{
							width:91.7%;
							margin:0 auto;
							color:#8c8c8c;
							.content-top{
								width:100%;
								height:0.22rem;
								display:flex;
								span{
									display:inline-block;
									width:0.8rem;
									&:first-child{
										color:#323232;
										font-size:0.18rem;
										flex:1;
									}
								}
								font{
									display:inline-block;
									width:0.5rem;
									font-size:0.12rem;
									color:#717070;
									line-height:0.18rem;
								}
								.texts{
									text-align:center;
								}
							}
							.content-bottom{
								span{
									font-size:0.12rem;
									color:#cfcfcf;
								}
							}
						}
					}
				}
				.times{
					width:100%;
					height:0.3rem;
					background:#fff;
					line-height:0.3rem;
					.times_1{
						display:inline-block;
						padding-left:0.2rem;
					}
					.text-center{
						display:inline-block;
						padding:0 0.08rem;
					}
					.times-name{
						float:right;
						margin-right:0.1rem;
					}
				}
				.tishi-bottom{
					position:absolute;
					left:0;
					right:0;
					bottom:0.04rem;
					width:92.5%;
					height:0.36rem;
					margin:0 auto;
					ul{
						width:100%;
						height:100%;
						display:flex;
						li{
							flex:1;
							height:0.2rem;
							&.tishi-center{
								width:0.57rem;
								line-height:0.36rem;
								text-align:center;
								font-size:0.12rem;
								color:#bcbcbc;
							}
						}
					}
				}
			}
			.zhuying{
				width:100%;
				.zhuying_1{
					width:89.5%;
					margin:0 auto;
					padding:0.1rem 0.09rem;
					font-size:0.1rem;
					background:#fff;
					/*border:0.005rem solid #ddddde;*/
					box-sizing:border-box;
					border-radius:0.1rem;
					.ferst{
						span{
							display:block;
							font-size:0.16rem;
							line-height:0.3rem;
							color:#b6b6b6;
							/*font{
								color:#fc9981;
							}*/
							a{
								color:#fc9981;
							}
						}
					}
					.last{
						padding:0.2rem;
					}
				}
				
			}
			.butten{
				position:absolute;
				bottom:0;
				left:0;
				width:100%;
				height:0.58rem;
				background:#ff7a59;
				margin-top:0.08rem;
				text-align:center;
				line-height:0.58rem;
				span{
					display:inline-block;
					width:100%;
					font-size:0.2rem;
					color:#fff;
				}
			}
		}
		.loding{
			position:fixed;
			bottom:0.0rem;
			left:0;
			margin-bottom:0.12rem;
			width:100%;
			display: inline-block;
			text-align:center;
			display:flex;
			-webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;
		}
		.zhuying-heder{
			padding:0.16rem 0.2rem 0.08rem 0.2rem;
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
	}
</style>


