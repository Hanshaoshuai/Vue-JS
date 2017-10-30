<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>历史融资记录</span>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div v-for="(item,index) in data" class="sousuo-content border-topbottom">
					<ul ref="index1" class="content-header border-bottom" index="type1"  @click.stap="typeName(item.id,item.type,item.is_send)">
						<li>
							<div class="content-top">
								<span>{{item.com_name}}&nbsp;({{item.com_code}})</span>
								<!--<span>{{item.type}}</span>-->
								<span v-if="item.type==1" class="texts">定增</span>
								<span v-if="item.type==2" class="texts">做市</span>
								<span v-if="item.type==3" class="texts">转老股</span>
								<span v-if="item.type==4" class="texts">股权质押</span>
								<span v-if="item.type==5" class="texts">融资租赁</span>
								<span v-if="item.type==6" class="texts">研报支持</span>
								<span v-if="item.type==7" class="texts">公司调研</span>
								<font v-if="item.is_send=='1'">已投递</font>
								<font v-if="item.is_send=='2'">未投递</font>
							</div>
							<div class="content-bottom">
								<span>{{numToTime(item.create_time)}}</span>
							</div>
						</li>
					</ul>
				</div>
				<box></box>
				<div style="width:100%;height:0.5rem;"></div>
			</div>
			<router-view :token="token" :XiangmuID="XiangmuID" :is_send="is_send"></router-view>
			<!--<dingzengzuoshi ref="dingzengzuoshiShow"></dingzengzuoshi>-->
			<!--<zhuanlaogu ref="zhuanlaoguShow"></zhuanlaogu>-->
			<!--<diaoyan ref="diaoyanShow"></diaoyan>-->
			<!--<shuangchuang ref="shuangchuangShow"></shuangchuang>-->
			<!--<zhiya ref="zhiyaShow"></zhiya>-->
			<!--<zulin ref="zulinShow"></zulin>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {numToTime} from "../../../common/js/date.js";
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
//	import dingzengzuoshi from "./DingzengZuoshi.vue";
//	import zhuanlaogu from "./ZhuanlaoGu.vue";
//	import diaoyan from "./Diaoyan.vue";
//	import shuangchuang from "./ShuangChuang.vue";
//	import zhiya from "./ZhiYa.vue";
//	import zulin from "./ZuLin.vue";
	
	export default {
		props:{
			token:{
//				type:Object
			}
		},
		data () {
			return {
				data:'',
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
					type7:"Diaoyan1"
				},
				XiangmuID:"",
				is_send:"",
				numToTime:""
			}
		},
		mounted() {
			this.numToTime=numToTime;
			Indicator.open({spinnerType: 'fading-circle'});
			console.log(this.token)
			//项目列表（自己创建的历史融资记录）	
			var datas = {
				token:this.token,//	token	是	[string]		
				page:"",	//page	是	[string]		
				size:""	//size	是	[string]
			}
			this.$http.post(URL.path+'finance/creae_list',datas,{emulateJSON:true}).then(function(res){
				this.data=res.body.data;
				Indicator.close();
				if(this.data.length==0){
					Toast("暂无融资记录")
				}
				console.log(res.body.data);
			},function(res){
				Indicator.close();
			    console.log(res.status);
			})
			this.$nextTick(function() {
				this.boxUl=this.$refs.box.getElementsByTagName("ul");
				console.log(this.boxUl)
			})
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			typeName(id,type,is_send){
				var Uls=this.boxUl[type]
				this.XiangmuID=id;
				this.is_send=is_send;		//是否投递过
				this.types['type'+type]
				console.log(this.types['type'+type])
//				window.location.href="#/wode/jilu/0/"+this.types['type'+type];
				window.location.href="#/"+this.types['type'+type]+'/'+type+'/'+id+'/'+is_send;
//				this.$refs.dingzengzuoshiShow.zuoshiBlock();
			},
//			dingzengGo(){
//				this.$refs.dingzengzuoshiShow.dingzengBlock();
//			},
//			zhiyaGo(){
//				this.$refs.zhiyaShow.zhiyaBlock();
//			},
//			zhuangguGo(){
//				this.$refs.zhuanlaoguShow.zhuanlaoguBlock();
//			},
//			zulinGo(){
//				this.$refs.zulinShow.zulinBlock();
//			},
//			diaoyanGo(){
//				this.$refs.diaoyanShow.diaoyanBlock();
//			},
//			shuangchuangGo(){
//				this.$refs.shuangchuangShow.shuangchuangBlock();
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
			box,
//			dingzengzuoshi,
//			zhuanlaogu,
//			diaoyan,
//			shuangchuang,
//			zhiya,
//			zulin
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
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
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
								width:0.97rem;
								&:first-child{
									color:#323232;
									font-size:0.18rem;
									flex:1;
								}
							}
							font{
								display:inline-block;
								width:0.58rem;
								font-size:0.12rem;
								color:#717070;
								line-height:0.18rem;
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
	}
</style>


