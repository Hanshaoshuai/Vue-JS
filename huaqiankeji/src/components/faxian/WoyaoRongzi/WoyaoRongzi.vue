<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>我要融资</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="contents" ref="tianjia">
					<div style="width:100%;height:0.53rem;"></div>
					<div v-if="Youtype=='1'" class="zhuying">
						<div class="zhuying-heder"><font></font>债权融资入口<span>（会员服务）</span></div>
						<div class="zhuying_1">
							<div class="ferst">
								<span style="padding-left:0.15rem;">债权融资<font></font><a @click.stap="ZaiquanGo()">（点击前往）</a></span>
							</div>
						</div>
					</div>
					<div v-if="Youtype=='1'" style="width:100%;height:0.06rem;background: #f5f4f9;"></div>
					<div class="zhuying">
						<div class="zhuying-heder"><font></font>新项目发起融资<span>（电脑端）</span></div>
						<div class="zhuying_1">
							<div class="ferst">
								<span>1、填写并完成项目备案<font></font><a @click.stap="BeianGo()">（点击前往）</a></span>
								<span>2、登录<a>www.qironghome.com</a>，进入项目融资发布后台；</span>
								<span>3、点击“我要融资”，填写公司融资要素，上传商业计划书；</span>
								<span>4、根据系统智能推荐的投资人清单，选择希望投递的投资机构；</span>
								<span>5、阅读平台服务费收费协议并完成投递；</span>
								<span>6、所有投资人将在10天内完成初步反馈，请您注意查收和回复。</span>
							</div>
						</div>
					</div>
					<div style="width:100%;height:0.0rem;background: #f5f4f9;"></div>
					<div class="fankiu">
						<div class="zhuying-heder"><font></font>已有项目继续投递<span>（移动端）</span></div>
						<div v-for="(cont,index) in data" class="add" ref="lisitTop">
							<div v-for="(item,index) in cont" class="sousuo-content border-bottom">
								<ul ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.type,item.is_send)">
									<li>
										<div class="content-top">
											<span>{{item.com_short}}<!--{{item.com_name}}-->&nbsp;（{{item.com_code}}）</span>
											<!--<span>{{item.type}}</span>-->
											<span v-if="item.type==1" class="texts">定增</span>
											<span v-if="item.type==2" class="texts">做市</span>
											<span v-if="item.type==3" class="texts">转老股</span>
											<span v-if="item.type==4" class="texts">股权质押</span>
											<span v-if="item.type==5" class="texts">融资租赁</span>
											<span v-if="item.type==6" class="texts">研报支持</span>
											<span v-if="item.type==7" class="texts">公司调研</span>
											<span v-if="item.type==8" class="texts">保理</span>
											<span v-if="item.type==9" class="texts">股东借款</span>
											<span v-if="item.type==10" class="texts">银行保函</span>
											<span v-if="item.type==11" class="texts">短期拆借</span>
											<span v-if="item.type==12" class="texts">银行授信</span>
											<span v-if="item.type==13" class="texts">大额增信</span>
											<span v-if="item.type==14" class="texts">产业发展基金</span>
											<font v-if="item.is_send=='1' && item.audit!='1'">已投递</font>
											<font v-if="item.audit=='0' && item.is_send!='1'">未投递</font>
											<font v-if="item.audit=='1'">已撤回</font>
										</div>
										<div class="content-bottom">
											<span>{{numToTime(item.create_time)}}</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div v-show="tishis" class="tishi-bottom">
						<div class="tishis">
							<ul>
								<li class="border-bottom"></li>
								<li class="tishi-center">{{jeiguo}}</li>
								<li class="border-bottom"></li>
							</ul>
						</div>
					</div>
				</div>
				<span class="loding" v-show="topStatus">
	            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
	          	</span>
				<transition name="fade1">
					<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
				</transition>
				<router-view :token="token" :BiaoQian="BiaoQian" :type="type"></router-view>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import {URL} from '../../../common/js/path';
	import {numToTime} from "../../../common/js/date.js";
	import { Indicator } from 'mint-ui';
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import jiLuqingdan from "./jiLuQingdan.vue";
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
				urlName:"Dingzeng",
				type:"1",			//创建类型
				Youtype:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				
				
				data:[],
				x:'1',
				urlName:"DingzengZuoshi",
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
					type7:"Diaoyan1",
					type8:"BaoliJ",
					type9:"GudongJ",
					type10:"YinbaoHanJ",
					type11:"DuanqiJ",
					type12:"YinshouXinJ",
//					type13:"Diaoyan1"
//					type14:"Diaoyan1"
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
				listlenght:-1,
				
				scrollY:'',
				scrollHeight:"",
				clientHeight:"",
				top:0
			}
		},
		mounted(){
			this.Youtype=localStorage.getItem("type")
			this.numToTime=numToTime;
//			console.log(this.$route.params['type'])
			this.token=this.$route.params['type'];
//			this.pipeiBlock();
		},
		activated(){
//			console.log("jjjj")
			this.data=[];
			this.top=0;
			this.page=1;
			this.tishis=false;
			this.pipeiBlock();
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
			},
			ZaiquanGo(){
				window.location.href="#/ZhaiquanRukou/"+localStorage.getItem("token");
			},
			zhiDing(){		//返回顶部；
				this.betterscroll.scrollToElement(this.$refs.tianjia,300);
			},
			initScroll(){
				this.scrollHeight=this.$refs.tianjia.scrollHeight;		//总高度
				this.clientHeight=this.$refs.wrapper.clientHeight;	//可视区高度
				this.betterscroll=new BScroll(this.$refs.wrapper,{
					click:true,probeType:3//probeType：3相当于实时监听高度位置
				});
				//通过betterscroll对象监听一个scroll事件，当scroll滚动时能够暴露出来，参数pos就是位置
				this.betterscroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y));
					if(this.scrollY>600){
						this.topBlock=true;
					}else{
						this.topBlock=false;
					}
//					console.log(this.scrollHeight);
//					console.log(this.clientHeight+this.scrollY)
					if(this.clientHeight+this.scrollY==this.scrollHeight){
						if(this.top==0){
							this.top=1;
							var tata=this;
							this.topStatus=true;
							this.tems=setTimeout(function(){
								tata.pipeiBlock();
							},100)
						}
					}
				});
//				if(this.scrollHeight<1000){
//					this.tishis=true;
//				}
			},
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
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.jeiguo="暂无投递"
						}
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
					this.$nextTick(function(){
						if (!this.betterscroll) {
							this.initScroll();
						}else{
							this.scrollHeight=this.$refs.tianjia.scrollHeight;		//总高度
							this.betterscroll.refresh();
							this.top=0;
//							console.log(this.scrollHeight)
//							console.log(this.clientHeight+this.scrollY)
						}
						if(this.scrollHeight<700){
							this.tishis=true;
						}
					})
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
			},
			typeName(id,type,is_send){
				var Uls=this.boxUl[type]
				this.XiangmuID=id;
				this.is_send=is_send;		//是否投递过
				this.type1=type;
				this.types['type'+type]
//				console.log(this.types['type'+type])
//				window.location.href="#/wode/jilu/0/"+this.types['type'+type];
				window.location.href="#/"+this.types['type'+type]+'/'+type+'/'+id+'/'+is_send;
//				this.$refs.dingzengzuoshiShow.zuoshiBlock();
			},
			BeianGo(){
				localStorage.setItem("Beian",'1')
				window.location.href="#/wode/RongziBeian/"+localStorage.getItem("token");
			},
			dingzengGo(name,type){
//				console.log(name)
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img1.getAttribute("index");
//				window.location.href="#/faxian/WoyaoRongzi/0/Dingzeng";
			},
			zuoshiGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img2.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Zuoshi";
			},
			zhuanguGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img3.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhuanlaoGu";
			},
			zhiyaGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img4.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZhiYa";
			},
			zulinGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img5.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/ZuLin";
			},
			yanbaoGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img6.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/YanBao";
			},
//			shuangchuangGo(name){
//				this.urlName=name;
//				this.src=this.$refs.img7.getAttribute("index")
////				window.location.href="#/faxian/WoyaoRongzi/0/ShuangChuang";
//			},
			diaoyanGo(name,type){
				this.urlName=name;
				this.type=type;
				this.src=this.$refs.img8.getAttribute("index")
//				window.location.href="#/faxian/WoyaoRongzi/0/Diaoyan";
			},
			XiaYibu(){
				window.location.href="#/faxian/WoyaoRongzi/"+this.type+"/"+this.urlName;
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
			jiLuqingdan
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
				padding-left:0.16rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
		}
		/*.box::-webkit-scrollbar{width:0px}*/
		.box{
			/*overflow-y:auto;*/
			width:100%;
			height:100%;
			/*-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.contents{
				padding-bottom:0.5rem;
				position:relative;
				.fankiu{
					width:100%;
					background:#fff;
					.content-food{
						flex:1;
						padding:0.18rem 5.6% 0.27rem 5.6%;
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
										width:0.84rem;
										&:first-child{
											color:#323232;
											font-size:0.18rem;
											flex:1;
										}
									}
									font{
										display:inline-block;
										width:0.46rem;
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
				background:#fff;
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
							font{
								display:inline-block;
								width:0.22rem;
								height:0.14rem;
								margin-left:0.06rem;
								margin-bottom:-0.02rem;
								background-image:url('./img/timg1.gif');
								background-size:100% 100%;
								transform:rotate(180deg);
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
					font-size:0.17rem;
					color:#fff;
				}
			}
			.zhiDing{
				position:fixed;
				bottom:1.6rem;
				right:0.2rem;
				background-image:url("../img/top.png");
				background-size:100% 100%;
				width:0.5rem;
				height:0.5rem;
				/*z-index: 200;*/
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


