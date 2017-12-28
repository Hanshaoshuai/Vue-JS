<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>钱包明细</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="contents" ref="tianjia">
					<div style="width:100%;height:0.55rem;"></div>
					<div v-for="(cont,index) in data" class="add" ref="lisitTop">
						<div v-for="(item,index) in cont" class="sousuo-content">
							<ul ref="index1" class="content-header border-bottom" index="type1">
								<li>
									<div class="content-top">
										<span>{{item.pay_ways}}</span>
										<span class="texts">{{item.money}}元</span>
										<font>{{item.title}}</font>
									</div>
									<div class="content-bottom">
										<span>{{item.created_at}}</span>
									</div>
								</li>
							</ul>
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
			</div>
			<span class="loding" v-show="topStatus">
            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
          	</span>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	
	export default {
		props:{
			token:{
//				type:Object
			}
		},
		data () {
			return {
				data:[],
				tucaoShow:true,
				n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
				height:0,
				topBlock:false,
				page:1,
				tishis:true,
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
		mounted() {
//			this.pipeiBlock()
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
//				this.tucaoShow=false;
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
					if(this.scrollY>400){
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
								tata.data=[];
								tata.pipeiBlock();
							},100)
						}
					}
				});
				if(this.scrollHeight<600){
					this.tishis=true;
				}
			},
			pipeiBlock(){
//				console.log(this.token)
				//项目列表（自己创建的历史融资记录）	
				var datas = {
					token:localStorage.getItem("token"),//	token	是	[string]		
					terminalNo: 3,	
				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'balance/blist',datas,{emulateJSON:true}).then(function(res){ //获取订单信息接口
					console.log(res);
					Indicator.close();
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.jeiguo="暂无记录"
						}
						this.tishis=true;
						return;
					}else{
						this.data.push(res.body.data);
						this.tishis=true;
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
							if(this.scrollHeight<600){
								this.tishis=true;
							}
//							console.log(this.scrollHeight)
//							console.log(this.clientHeight+this.scrollY)
						}
					})
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
			},
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
			z-index:210;
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
				position:relative;
				padding-bottom:0.52rem;
				.sousuo-content{
					width:100%;
					background:#fff;
					/*margin:0.05rem 0;*/
					/*display:flex;*/
					/*flex-direction:column;*/
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
									width:0.6rem;
									font-size:0.12rem;
									color:#717070;
									line-height:0.18rem;
									text-align:center;
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
	}
</style>


