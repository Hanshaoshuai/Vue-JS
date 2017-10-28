<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>备案详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="logo">
					<ul>
						<li @click.stap="shangChuan()">
							<mingpian @to-parent="child" class="mingpians" ref="mingpianID"></mingpian>
							<img v-show="images" :src="imgUrl" alt="" />
						</li>
						<span>上传营业执照</span>
					</ul>
				</div>
				<div ref="guanzhuLingyu" class="fankiu-content">
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>今年预计营收、净利润</div>
						<div class="last number last-bottom">
							<input readOnly="true" v-model="texta" placeholder="请填写预计营收" number="true" type="number" class="mint-field-core">
							<span>亿元</span>
						</div>
						<div class="last number">
							<input readOnly="true" v-model="textb" placeholder="请填写净利润" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>融资总额</div>
						<div class="last number">
							<input readOnly="true" v-model="textc" placeholder="输入数字" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
				</div>
				<div v-show="showFlag" class="butten">
					<ul @click.stop="XiuGai()">
						<li><span>修&nbsp;&nbsp;改</span></li>
					</ul>
				</div>
				<div v-show="showFlag1" class="butten">
					<ul @click.stop="BeiAn()">
						<li><span>重新申请备案</span></li>
					</ul>
				</div>
			</div>
			<transition name="fades">
				<div ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				    <div class="loadEffect" ref="padding">
						<ul v-show="firstTop">
							<li class="border-bottom" @click.stop="queding()"><span>确认申请备案</span></li>
							<li @click.stop="bianJi()"><span>继续编辑</span></li>
						</ul>
						<ul v-show="lastBottom">
							<li class="last-bottom" style="text-align: center;"><span>{{textcont}}</span></li>
						</ul>
					</div>	
				</div>
			</transition>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../../box.vue";
	import mingpian from "../../ShangchuanMingpian.vue";
	
	export default {
		props:{
			token:{
//				type:Object
			},
			beiAnidQ:{}
		},
		data () {
			return {
				data:"",
				type:"",		//创建类型
				x:"0",			//字的个数
				texta:"",
				textb:"",
				textc:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				showFlag1:false,
				tucaoShow:true,
				xingXi:{			//给下级要传的参数
					text:"亲，请您在电脑上登录www.qironghome.com,上传最新商业计划书PPT，便于投资人查看，确保融资沟通顺利。如已上传，请忽略。",
					x:"不再提醒",
					y:"确定",
					m:true,
					u:true
				},
				content:"",			//给下级要传的参数
				XiangmuID:"1",
				imgUrl:'',
				images:false,
				onlyContent:false,
				firstTop:true,
				lastBottom:false,
				textcont:"备案申请成功，请等待审核"
			}
		},
		mounted(){				//<!--1:未审核 2:已审核 3:进行中 4:已结束 5未通过-->
			console.log(this.$route.params.type)
			console.log(this.token)
			if(this.$route.params.type=='2'){
				this.showFlag=false;
			}
			this.type=this.$route.params.type
			this.$nextTick(function() {
				
			});
//			项目备案详情
			var params={
	    		token:this.token,
	    		id:this.beiAnidQ		//	备案id
	    	}
			this.$http.post(URL.path+'finance/record_detail',params,{emulateJSON:true}).then(function(res){
				this.data=res.body.data.id;
				this.imgUrl=localStorage.getItem("MingpianImg");
				this.texta=this.data.com_name;
				this.textb=this.data.com_short;
				this.textc=this.data.total_finance;
				if(res.body.data.id.status!=='1'){
					this.showFlag=false;
				}
				if(res.body.data.id.status==5){
					this.showFlag=true;
				}
				console.log(res);
			},function(res){
			    console.log(res);
			})
//			this.token=this.$route.params
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			child(MingpianImg){
				this.imgUrl=MingpianImg
				if(MingpianImg){
					this.images=true;
				}
				console.log(MingpianImg)
			},
			XiuGai(){
				var textInputs = this.$refs.guanzhuLingyu.getElementsByClassName("mint-field-core");
				console.log(textInputs)
				var length=textInputs.length;
				this.showFlag=false;
				this.showFlag1=true;
				for(var i=0; i<length; i++){
					textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
				}
				textInputs[0].focus();
			},
			BeiAn(){
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textb:this.textb,
					textc:this.textc,
				}
				if(this.imgUrl==""){
					Toast("请上传您的营业执照...");
					return;
				}
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(CanShu[item]==""){
						Toast("请填写完整您的信息...");
						return;
					}
				}
				this.onlyContent=true;
			},
			queding(){
				//修改备案
				var params={
		    		token:this.token,
					com_name:this.texta,			//	公司全称	是	[string]		
					com_short:this.textb,			//	公司简称	是	[string]		
					commission:'',			//	佣金协定	是	[string]		
					total_finance:this.textc,		//	投资总额 单位：万	是	[string]		
					remark:this.texte,				//	有效投资认定	是	[string]		
					license:'',						//	营业执照	是	[string]		
					predict_revenue:'',				//	今年预计营收	是	[string]		
					predict_profit:'',				//	今年预计净利润	是	[string]		
					id:this.beiAnidQ				//	备案id id为空时创建，不为空时修改	是	[string]
		    	}
				this.$http.post(URL.path+'finance/record',params,{emulateJSON:true}).then(function(res){
					console.log(res);
					if(res.body.data.id==true){
//						Toast("您已修改成功");
						this.firstTop=false
						this.lastBottom=true
						setTimeout(function(){
							tata.onlyContent=false;
							tata.firstTop=true
							tata.lastBottom=false
						},2000)
						this.showFlag=true;
						this.showFlag1=false;
						var textInputs = this.$refs.guanzhuLingyu.getElementsByClassName("mint-field-core");
						console.log(textInputs)
						var length=textInputs.length;
						for(var i=0; i<length; i++){
							textInputs[i].setAttribute("readOnly",true)		//点击编辑   input去除属性readOnly即可编辑
						}
					}
				},function(res){
				    console.log(res);
				})
			},
			bianJi(){
				this.onlyContent=false;
			},
			shangChuan(){
				if(this.showFlag1==true){
					
				}
			},
			dingzengBlock(){
				this.tucaoShow=true;
			},
			liuYan(){
				window.location.href="#/fankuixinxi";
			},
			
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
			mingpian
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
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	
	.xiangmu{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:2400;
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
			overflow-y:auto;
			width:100%;
			height:100%;
			background:#fff;
			-webkit-overflow-scrolling:touch;
			.logo{
				width:100%;
				height:2.16rem;
				display:flex;
				justify-content:center;
				align-content:center;
				align-items:center;
				text-align:center;
				ul{
					width:1.25rem;
					height:1.25rem;
					overflow:hidden;
					li{
						position:relative;
						border:1px solid #f5f4f9;
						box-sizing:border-box;
						width:1.25rem;
						height:1.25rem;
						background-image:url("../img/mingpian.png");
						background-size:100% 100%;
						display:flex;
						justify-content:center;
						align-content:center;
						align-items:center;
						text-align:center;
						overflow:hidden;
						img{
							/*width:100%;*/
						}
						.mingpians{
							position:absolute;
							top:0.25rem;
							left:0;
							opacity:0;
						}
					}
				}
				span{
					display:inline-block;
					margin-top:0.1rem;
					font-size:0.16rem;
					/*color:#*/
				}
			}
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.13rem 0.2rem;
					line-height:0.25rem;
					font-size:0.16rem;
					background:#fff;
					.content-header{
						font-size:0.18rem;
					}
					img{
						vertical-align:top;
						width:0.24rem;
						height:0.24rem;
					}
					span{
						/*font-weight:bold;*/
					}
				}
			}
			.fankiu-content{
				width:89.4%;
				margin:0 auto;
				padding-bottom:0.2rem;
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
			}
			.butten{
				width:100%;
				/*background:#f5f4f9;*/
				padding:0.2rem 0;
				ul{
					width:65.8%;
					height:0.58rem;
					margin:0 auto;
					background:#ff7a59;
					display:flex;
					align-content:center;
					align-items:center;
					justify-content:center;
					li{
						span{
							font-size:0.2rem;
							color:#fff;
						}
					}
				}
			}
		}
		.loding{
			display:flex;
			align-content:center;
			align-items:center;
			justify-content:center;
			.loadEffect{
	            width: 70%;
	            min-height: 0.40rem;
	            position: relative;
	            padding:0.3rem 0;
	            background: #fff;
	            border-radius:0.06rem;
	            .load-butten{
	            	width:100%;
	            	height:0.4rem;
	            	font{
		            	position:absolute;
		            	display:inline-block;
		            	background:#ff7a59;
		            	padding:0.06rem 0.1rem;
		            	color:#fff;
		            	border-radius:0.04rem;
		            	&.first{
		            		bottom:0.2rem;
		            		left:16%;
		            	}
		            	&.last{
		            		bottom:0.2rem;
		            		right:16%;
		            	}
		            }
	            }
	        }
	        .loadEffect span{
	        	margin:0 auto;
	            display: block;
	            text-align:justify;
	            line-height: 0.22rem;
	            font-size: 0.16rem;
	            width: 80%;
	        }
	        .loadEffect{
	        	position:relative;
	        	ul{
	            	li{
	            		span{
	            			/*text-align:center;*/
	            			line-height: 0.46rem;
	            		}
	            		.last-bottom{
	            			line-height: 0.36rem;
	            		}
	            	}
	            }
	        }
	    }
	}
</style>


