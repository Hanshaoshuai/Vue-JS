<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header"></div>
			<div class="header-content" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>项目详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="tishi-bottom">
					<div class="border">
						<ul>
							<!--<li class="border-bottom"></li>-->
							<li class="tishi-center">
								<div class="content-heder">
									<span>{{texta}}</span>
									<span class="text-center">（{{textb}}）</span>
									<span v-if="Xiangmutype==1" class="texts">&nbsp;定增</span>
									<span v-if="Xiangmutype==2" class="texts">&nbsp;做市</span>
									<span v-if="Xiangmutype==3" class="texts">&nbsp;转老股</span>
									<span v-if="Xiangmutype==4" class="texts">&nbsp;股权质押</span>
									<span v-if="Xiangmutype==5" class="texts">&nbsp;融资租赁</span>
									<span v-if="Xiangmutype==6" class="texts">&nbsp;研报支持</span>
									<span v-if="Xiangmutype==7" class="texts">&nbsp;公司调研</span>
									<!--<span>&nbsp;{{data.type}}</span>-->
								</div>
							</li>
							<!--<li class="border-bottom"></li>-->
						</ul>
						<!--<div v-if="industry" class="zhuying_1 liangdian_1">
							<div class="ferst"><span></span>所在行业</div>
							<div ref="biaoqian" class="last">
								<font v-if="BianJi==0" v-for="(item,index) in industry1" class="bianse">{{item}}</font>
								<font v-if="BianJi==1" v-for="(item,index) in BiaoQian" @click.stap="xuanze(index)" :id="item.id">{{item.title}}</font>
							</div>
							<ul ref="biaoqian">
								<span v-if="BianJi==0" v-for="(item,index) in industry1" class="bianse">{{item}}</span>
								<span v-if="BianJi==1" v-for="(item,index) in BiaoQian" @click.stap="xuanze(index)" :id="item.id">{{item.title}}</span>
							</ul>
						</div>-->
					</div>
					<div class="zhuying_1 border">
						<div class="zhuying_1">
							<div class="ferst"><span></span>投资亮点</div>
							<div class="last">
								<p>{{textc}}</p>
							</div>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>经营业绩</div>
						<div class="last">
							<p>上一财年：营收&nbsp;<span>{{numbera}}亿</span>&nbsp;&nbsp;&nbsp;&nbsp;扣非净利润&nbsp;<span>{{numberb}}万</span></p>
							<p>今年预计：营收&nbsp;<span>{{numberc}}亿</span>&nbsp;&nbsp;&nbsp;&nbsp;扣非净利润&nbsp;<span>{{numberd}}万</span></p>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>融资计划</div>
						<div class="last">
							<!--<p>投前估值：<span>{{numberf}}亿元</span></p>-->
							<p>融资总额：<span>{{numbere}}万元</span></p>
							<p>质押周期：<span>{{numberf}}个月</span></p>
							<!--<p>每股价格：<span>{{numberg}}元</span></p>-->
						</div>
					</div>
					<!--<div class="zhuying_1 border">
						<div class="ferst"><span></span>质押时间周期</div>
						<div class="last">
							<p><span>{{numberf}}个月</span></p>
						</div>
					</div>-->
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>所在省份</div>
						<div class="last">
							<p><span>{{numberh}}</span></p>
						</div>
					</div>
					<div style="width:100%;height:0.65rem;"></div>
				</div>
			</div>
			<div v-if="data.end_follow!='2'" class="baoming border-top">
				<span class="border-right" :class="butenLeft" @click.stap="genJin()">已投清单</span>
				<span :class="butenRight" @click.stap="xiayibuGo()">继续投递</span>
			</div>
			<router-view :token="token" :type="type" :XiangmuID="XiangmuID" :Xiangmutype="Xiangmutype"></router-view>
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
		</div>
	<!--</transition>-->
</template>

<!--<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>项目详情</span>
			</div>
			<div class="box" ref="guanzhuLingyu">
				<div style="width:100%;height:0.45rem;"></div>
				<box></box>
				<div class="fankiu-content">
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业名称</div>
						<div class="last">
							<textarea readOnly="true" placeholder="" class="mint-field-core" v-model="texta"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业代码</div>
						<div class="last">
							<textarea readOnly="true" placeholder="" class="mint-field-core" v-model="textb"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>上一财年营收、净利润</div>
						<div class="last number last-bottom">
							<input readOnly="true" v-model="numbera" placeholder="请填写年营业" number="true" type="number" class="mint-field-core">
							<span>亿元</span>
						</div>
						<div class="last number">
							<input readOnly="true" v-model="numberb" placeholder="请填写净利润" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>今年预计营收、净利润</div>
						<div class="last number last-bottom">
							<input readOnly="true" v-model="numberc" placeholder="请填写预计营收" number="true" type="number" class="mint-field-core">
							<span>亿元</span>
						</div>
						<div class="last number">
							<input readOnly="true" v-model="numberd" placeholder="请填写净利润" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>融资总额</div>
						<div class="last number">
							<input readOnly="true" v-model="numbere" placeholder="输入数字" number="true" type="number" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>质押时间周期</div>
						<div class="last number">
							<input readOnly="true" v-model="numberf" placeholder="输入数字" number="true" type="number" class="mint-field-core">
							<span>个月</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>所在省份</div>
						<div class="last number">
							<input readOnly="true" v-model="numberh" placeholder="请填写省份" type="text" class="mint-field-core">
						</div>
					</div>
					<div class="times">
					</div>
				</div>
				<div class="baoming border-top">
					<span v-show="none" :class="butenRight" @click.stap="buGen()">重编辑</span>
					<span class="border-right" :class="butenLeft" @click.stap="xiayibuGo()">继续投递</span>
				</div>
			</div>
			<router-view :token="token" :Xiangmutype="Xiangmutype" :XiangmuID="XiangmuID"></router-view>
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
		</div>
	</transition>
</template>-->

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
//	import pipei from "../../faxian/WoyaoRongzi/PipeiTouziRen/Pipei.vue";
	import tishi from "../../Tishi.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			token:{
////				type:Object
//			},
//			XiangmuID:{},
//			is_send:{}
		},
		data () {
			return {
				token:"",
				XiangmuID:"",
				is_send:'',
				Xiangmutype:'',
				CanShu:"",
				data:"",
				industry:"",
				butenLeft:"",
				butenRight:"butenRight",
				BianJi:0,
				BiaoQian:"",
				datas:"",
				type:"",		//项目类型
				x:"0",			//字的个数
				numbera:"",	//上一财年营收、净利润		请填写年营业
				numberb:"",	//上一财年营收、净利润		请填写净利润
				numberc:"",	//今年预计营收、净利润		请填写预计营收
				numberd:"",	//今年预计营收、净利润		请填写净利润
				numbere:"",	//融资计划		请填写融资估值
				numberf:"",	//融资计划		请填写融资总额
				numberg:"",	//融资计划		请填写每股价格
				numberh:"",	//所在省份
				texta:"",	//公司名称
				textb:"",	//公司代码
				textc:'',
				fankui:"",
				genjin:"",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				xingXi:{			//给下级提示组件要传的参数
					text:"亲，请您在电脑上登录www.qironghome.com,上传最新商业计划书PPT，便于投资人查看，确保融资沟通顺利。如已上传，请忽略。",
					x:"不再提醒",
					y:"确定",
					m:true,
					u:true
				},
				content:"",			//给下级要传的参数
				none:true,
				toudi:'投递'
			}
		},
		activated(){
			this.shuaxin();
		},
		mounted(){
			this.shuaxin();
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
//				this.tucaoShow=false;
			},
			shuaxin(){
				this.token=localStorage.getItem("token");
				this.XiangmuID=this.$route.params.XiangmuID;
				this.Xiangmutype=this.$route.params.type;
				this.is_send=this.$route.params.is_send;
				if(this.is_send=='1'){
					this.none=false;
					this.toudi='继续投递';
				}
				Indicator.open({spinnerType: 'fading-circle'});
				var datas = {
					token:this.token,
					item_id:this.XiangmuID,			//	项目id
				}
				this.datas=datas;
//				console.log(this.token)
				//历史项目详情
				this.$http.post(URL.path+'finance/item_detail',datas,{emulateJSON:true}).then(function(res){
					Indicator.close();
					this.data=res.body.data[0]
					this.texta=this.data.com_short
					this.textb=this.data.com_code
					this.textc=this.data.lightspot
					this.numbera=this.data.last_year_revenue
					this.numberb=this.data.last_year_profit
					this.numberc=this.data.predict_revenue
					this.numberd=this.data.predict_profit
					this.numbere=this.data.total_finance
					this.numberf=this.data.pledge_time
					this.numberg=this.data.share_price
					this.numberh=this.data.city
					this.industry=this.data.industry
					this.type=this.data.type
//					console.log(res);
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
			},
			genJin(){
				window.location.href='#/ZhiYa1/1/'+this.XiangmuID+'/1/YitouQingdan';
			},
			xiayibuGo(){
				if(this.data.audit=='1'){
					Toast("该项目已被系统强制撤回");
					return;
				}
//				this.butenLeft="butenLeft";
//				this.butenRight="";
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textb:this.textb,
					numbera:this.numbera,
					numberb:this.numberb,
					numberc:this.numberc,
					numberd:this.numberd,
					numbere:this.numbere,
					numberf:this.numberf,
					numberh:this.numberh,
					XiangmuID:this.XiangmuID
				}
				var ok=0;
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；
					if(!CanShu[item]==""){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					this.content=this.$refs.pipeiShow;
					if(this.is_send=='1'){
//						this.$refs.pipeiShow.pipeiBlock(CanShu);
						window.location.href='#/ZhiYa1/1/'+this.XiangmuID+'/1/Pipei';
					}else{
						this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
					}
//					this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
				}else{
					Toast("请填写完整您的信息！是否已选标签...");
				}
				
			},
			buGen(){
				this.none=false;
				var textInputs = this.$refs.guanzhuLingyu.getElementsByClassName("mint-field-core");
				var length=textInputs.length;
				//获取标签
				if(this.industry){
					this.$http.post(URL.path1+'login/three',this.datas,{emulateJSON:true}).then(function(res){
						this.BianJi=1;
						this.$nextTick(function() {
							var spans=this.$refs.biaoqian.getElementsByTagName("span")[0];
							spans.setAttribute("class","bianse")
						});
						this.BiaoQian=res.body.data[0]
//						console.log(this.BiaoQian);
					},function(res){
					    console.log(res.status);
					})
				}
				for(var i=0; i<length; i++){
					textInputs[i].value="";
					textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
				}
				textInputs[0].focus();
				this.types=0;
				this.butenRight="";
				this.butenLeft="butenLeft";
			}
			
		},
		events:{
			
		},
		filters:{
		},
		updated(){
		},
		components:{
			box,
			tishi
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
		z-index:120;
		.xiangmu-header{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:1.02rem;
			background:#ff7a59;
			z-index:300;
		}
		.header-content{
			position:fixed;
			width:100%;
			font-weight:600;
			top:0;
			left:0;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:420;
			background:#ff7a59;
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
			position:absolute;
			overflow-y:scroll;
			width:94%;
			padding-right:0.03rem;
			margin:auto;
			height:100%;
			top:0;
			left:0;
			right:0;
			z-index:310;
			-webkit-overflow-scrolling:touch;
			.fankiu{
				width:100%;
				display:flex;
				padding-bottom:0.45rem;
				box-shadow: 0.01rem 0.02rem 0.04rem #a7503a;
				.content-food{
					flex:1;
					padding:0.14rem 0.2rem;
					font-size:0.16rem;
					background:#fff;
					position:relative;
					display:flex;
					align-items:center;
					.laizi{
						color:#b8b8b8;
					}
					img{
						width:0.25rem;
						height:0.25rem;
					}
					.bbb{
						width:0.01rem;
						height:0.16rem;
						display:inline-block;
						padding-left:0.03rem;
					}
				}
			}
			.tishi-bottom{
				width:100%;
				/*height:0.36rem;*/
				.border{
					box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
				}
				ul{
					height:0.3rem;
					padding:0.2rem 2.5% 0.1rem 2.5%;
					display:flex;
					background:#fff;
					li{
						flex:1;
						height:0.2rem;
						line-height:0.36rem;
						text-align:center;
						font-size:0.2rem;
						color:#323232;
						/*&:first-child{
							max-width:10%;
						}
						&:last-child{
							max-width:10%;
						}
						&.tishi-center{
							width:0.57rem;
							line-height:0.36rem;
							text-align:center;
							font-size:0.2rem;
							color:#323232;
						}*/
					}
				}
				.zhuying_1{
					width:100%;
					font-size:0.16rem;
					background:#fff;
					margin-bottom:0.1rem;
					span{
						color:#2abdfc;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						align-content: center;
						align-items: center;
						span{
							display:inline-block;
							position:relative;
							width:0.08rem;
							height:0.16rem;
							background:#ff7a59;
							margin-right:0.08rem;
							margin-left:-0.008rem;
							z-index:200;
						}
					}
					.last{
						flex:1;
						color:#676767;
						padding:0rem 0.14rem 0.18rem 0.14rem;
						line-height:0.26rem;
						overflow:hidden;
						font{
							display:inline-block;
							width:0.7rem;
							height:0.22rem;
							color:#ff7a59;
							text-align:center;
							float:left;
							padding:0.04rem 0;
							background:#fde9e2;
							border-radius:0.04rem;
							font-size:0.14rem;
							line-height:0.15rem;
							margin:0.04rem 0.07rem 0.04rem 0;
							box-sizing:border-box;
							border:1px solid #ff7a59;
							&:first-child{
								
							}
						}
						p{
							word-wrap:break-word;
							text-align: justify;
						}
						/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
					}
				}
			}
		}
		.baoming{
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
			height:0.5rem;
			display:flex;
			justify-content:center;
			align-content:center;
			align-items:center;
			background:#fff;
			box-shadow:0 0.02rem 0.04rem #dedde1;
			z-index: 320;
			span{
				flex:1;
				height:0.5rem;
				line-height:0.5rem;
				display:inline-block;
				text-align:center;
				background:#ececec;
				font-size:0.18rem;
				/*font{
					display:inline-block;
					width:0.18rem;
					height:0.18rem;
					background-image:url("../img/jian.png");
					background-size:100% 100%;
					margin:0 0 -0.04rem 0.06rem;
				}*/
			}
			.butenLeft{
				color:#fff;
				background:#ff7a59;
			}
			.butenRight{
				color:#fff;
				background:#ff7a59;
			}
		}
	}
	
	/*.xiangmu{
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
					}
				}
			}
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
						.mint-field-core{
							color: #787777;
							resize: none;
							font-size:0.14rem;
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
							width:0.36rem;
							height:0.38rem;
							color:#bdbdbd;
							line-height:0.38rem;
							position:absolute;
							right:-0.4rem;
							top:0;
						}
						.mint-field-core::-webkit-input-placeholder{
							color: #787777;
						}
					}
					.last-bottom{
						margin-bottom:0.1rem;
					}
				}
				.jihua{
					.last-bottom{
						margin-bottom:0.06rem;
					}
				}
				.times{
					width:100%;
					height:0.3rem;
					background:#fff;
					line-height:0.3rem;
				}
			}
			.baoming{
				width:100%;
				height:0.5rem;
				display:flex;
				justify-content:center;
				align-content:center;
				align-items:center;
				background:#fff;
				box-shadow:0 0.02rem 0.04rem #dedde1;
				z-index: 320;
				span{
					flex:1;
					height:0.5rem;
					line-height:0.5rem;
					display:inline-block;
					text-align:center;
					background:#ececec;
					font-size:0.18rem;
				}
				.butenLeft{
					color:#fff;
					background:#ff7a59;
				}
				.butenRight{
					color:#fff;
					background:#ff7a59;
				}
			}
		}
	}*/
</style>


