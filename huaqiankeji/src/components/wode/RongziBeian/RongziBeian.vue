<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>融资信息备案</span>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div v-for="(item,index) in data" v-if="item.uctype=='7'" class="sousuo-content">
					<!--1:未审核 2:已审核 3:进行中 4:已结束 5未通过-->
					<ul v-if="item.status=='2'" ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>{{item.com_short}}</span>
								<font>已审核</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='1'" ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>{{item.com_short}}</span>
								<font>未审核</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='3'" ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>{{item.com_short}}</span>
								<font>进行中</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='4'" ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>{{item.com_short}}</span>
								<font>已结束</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='5'" ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>{{item.com_short}}</span>
								<font>未通过</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<box style="height:0.06rem;"></box>
				</div>
				<div v-for="(item,index) in data" v-if="item.uctype=='1'" class="sousuo-content">
					<ul v-if="item.status=='2'" ref="index1" class="content-header" index="type1"  @click.stap="typeName1(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>融资总额</span>
								<span style="text-align: center;">{{item.total_finance}}万元</span>
								<font>已审核</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='1'" ref="index1" class="content-header" index="type1"  @click.stap="typeName1(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>融资总额</span>
								<span style="text-align: center;">{{item.total_finance}}万元</span>
								<font>未审核</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='3'" ref="index1" class="content-header" index="type1"  @click.stap="typeName1(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>融资总额</span>
								<span style="text-align: center;">{{item.total_finance}}万元</span>
								<font>进行中</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='4'" ref="index1" class="content-header" index="type1"  @click.stap="typeName1(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>融资总额</span>
								<span style="text-align: center;">{{item.total_finance}}万元</span>
								<font>已结束</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<ul v-if="item.status=='5'" ref="index1" class="content-header" index="type1"  @click.stap="typeName1(item.id,item.status)">
						<li class="beian-last">
							<div class="content-top">
								<span>融资总额</span>
								<span style="text-align: center;">{{item.total_finance}}万元</span>
								<font>未通过</font>
								<font>{{numToTime(item.create_time)}}</font>
							</div>
						</li>
					</ul>
					<box style="height:0.06rem;"></box>
				</div>
				<div style="width:100%;height:0.6rem;"></div>
			</div>
			<div class="butten">
				<span @click.stop="Xinzeng()">新&nbsp;&nbsp;增</span>
			</div>
			<router-view :token="token" :beiAnidQ="beiAnidQ" :beiAnidC="beiAnidC" :href="href"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {formatDate,numToTime,numToTime1} from "../../../common/js/date.js";
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../../box.vue";
	
	export default {
		props:{
			token:{
//				type:Object
			},
//			beianType:{}
		},
		data () {
			return {
				href:"",
				data:"",
				x:'1',
				urlName:"Dingzeng",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				boxUl:"",
				types:{
					type0:"Zuoshi",
					type1:"Dingzeng",
					type2:"ZhiYa",
					type3:"ZhuanlaoGu",
					type4:"ZuLin",
					type5:"Diaoyan"
				},
				beiAnidQ:"",
				beiAnidC:"",
				numToTime:"",
				timestamp:'',
				beianType:"",
				length:0
			}
		},
		mounted() {
			this.shuaXin();
			var that=this;
			window.onhashchange = function() {
				console.log("222222")
				that.shuaXin();
			}
		},
		activated(){
			
		},
		methods:{
			shuaXin(){
				this.numToTime=numToTime;
				this.timestamp= (new Date()).valueOf()
	//			this.formatDate(this.timestamp)
				console.log(this.formatDate(this.timestamp))
				this.beianType=localStorage.getItem("type")
				console.log(this.beianType=localStorage.getItem("type"));
				if(this.beianType=='1'){
	//				企业项目备案列表
					var params={
			    		token:localStorage.getItem("token"),
			    	}
					this.$http.post(URL.path+'finance/record_list',params,{emulateJSON:true}).then(function(res){
						this.data=res.body.data.id;
						if(res.body.data.length=='0' && this.length==0){
							this.length+=1;
//							Toast("您暂无备注，请添加备案...")
							window.location.href="#/wode/RongziBeian/"+this.token+"/TianQiBeian";
							return;
						}
						console.log(res);
					},function(res){
					    console.log(res);
					})
					return;
				}
				if(this.beianType=='7'){
	//				财务顾问项目备案列表
					var params={
			    		token:localStorage.getItem("token"),
			    	}
					console.log(params)
					this.$http.post(URL.path+'finance/record_list',params,{emulateJSON:true}).then(function(res){
						console.log(res);
						this.data=res.body.data.id;
						if(res.body.data.length=='0' && this.length==0){
							this.length+=1;
//							Toast("您暂无备案，请添加备案...")
							window.location.href="#/wode/RongziBeian/"+this.token+"/XinzengQiye";
							return;
						}
					},function(res){
					    console.log(res);
					})
					return;
				}
				this.$nextTick(function() {
					this.boxUl=this.$refs.box.getElementsByTagName("ul");
					console.log(this.boxUl)
				})
			},
			formatDate(time){
				let date = new Date(time);
				return formatDate(date,'yyyy-MM-dd hh:mm');
			},
			yijianHind(){
				if(localStorage.getItem("Beian")=='1'){
					history.go(-1)
				}else{
					history.go(-1)
				}
				localStorage.setItem("Beian",'');
//				this.tucaoShow=false;
			},
			typeName(id){
				this.beiAnidC=id;
				window.location.href="#/wode/RongziBeian/"+this.token+"/BeianXiangqing/"+id;
			},
			typeName1(id){
				this.beiAnidQ=id;
				window.location.href="#/wode/RongziBeian/"+this.token+"/QiyeBeianXiang/"+id;
			},
			Xinzeng(){
				if(this.beianType=='7'){
					this.beiAnidC="";
					window.location.href="#/wode/RongziBeian/"+this.token+"/XinzengQiye";
					return;
				}
				if(this.beianType=='1'){
					this.beiAnidQ="";
					window.location.href="#/wode/RongziBeian/"+this.token+"/TianQiBeian";
					return;
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
				.beian-first{
					width:96%;
					margin:0 auto;
					padding:0.16rem 0;
					font-size:0.16rem;
					color:#323232;
					border-bottom:1px solid #8c8c8c;
				}
				.content-header{
					width:96%;
					margin:0 auto;
					padding:0.18rem 0 0 0;
					font-size:0.16rem;
					li{
						width:91.7%;
						margin:0 auto;
						color:#8c8c8c;
						padding-bottom:0.16rem;
						/*border-bottom:1px solid #cfcfcf;*/
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
								flex:1;
								text-align:center;
								display:inline-block;
								/*width:0.58rem;*/
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
		.butten{
			position:fixed;
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
</style>


