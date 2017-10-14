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
				<div class="fankiu border-topbottom">
					<div class="content-food" style="text-align:center;">
						<img src="../img/lishi.png"/>
						<span class="content-header">编辑历史融资记录</span>
					</div>
				</div>
				<box></box>
				<div class="fankiu-content">
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业名称</div>
						<div class="last">
							<textarea placeholder="" class="mint-field-core" v-model="texta"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业代码</div>
						<div class="last">
							<textarea placeholder="" class="mint-field-core" v-model="textb"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业推荐</div>
						<div class="last neirong">
							<textarea placeholder="请填写直营业务、投资亮点等" class="mint-field-core" v-model="textc"></textarea>
						</div>
						<li>{{x}}/100</li>
					</div>
					<div class="zhuying_1 liangdian_1">
						<div class="ferst"><span>*</span>企业所在行业标签<font>（选标签）</font></div>
						<ul ref="biaoqian">
							<span v-for="(item,index) in BiaoQian[0]" @click.stap="xuanze(index)" :id="item.id">{{item.title}}</span>
							<!--<span class="bianse" @click.stap="xuanze('0')">行业标签</span>
							<span @click.stap="xuanze('1')">行业标签</span>
							<span @click.stap="xuanze('2')">行业标签</span>
							<span @click.stap="xuanze('3')">行业标签</span>
							<span @click.stap="xuanze('4')">行业标签</span>
							<span @click.stap="xuanze('5')">行业标签</span>-->
						</ul>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>上一财年营收、净利润</div>
						<div class="last number last-bottom">
							<input v-model="numbera" placeholder="请填写年营业" number="true" type="number" class="mint-field-core">
							<span>亿元</span>
						</div>
						<div class="last number">
							<input v-model="numberb" placeholder="请填写净利润" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>今年预计营收、净利润（选填）</div>
						<div class="last number last-bottom">
							<input v-model="numberc" placeholder="请填写预计营收" number="true" type="number" class="mint-field-core">
							<span>亿元</span>
						</div>
						<div class="last number">
							<input v-model="numberd" placeholder="请填写净利润" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>逆转股份数</div>
						<div class="last number">
							<input v-model="numbere" placeholder="输入数字" number="true" type="number" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>每股价格</div>
						<div class="last number">
							<input v-model="numberf" placeholder="输入数字" number="true" type="number" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>是否本人股份</div>
						<div class="last number">
							<input v-model="numberg" placeholder="是 / 否" number="true" type="text" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>所在省份</div>
						<div class="last number">
							<input v-model="numberh" placeholder="请填写省份" type="text" class="mint-field-core">
						</div>
					</div>
					<div class="times">
						<span class="times_1">领天</span>
						<span class="text-center">1小时前</span>
						<span>发布</span>
						<div class="times-name">
							<span>{{fankui}}反馈</span>
							<span class="text-center">{{genjin}}跟进</span>
						</div>
					</div>
				</div>
				<div class="butten">
					<ul @click.stop="xiayibuGo()">
						<li><span>下一步</span></li>
					</ul>
				</div>
			</div>
			<pipei ref="pipeiShow" :token="token"></pipei>
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../../../box.vue";
	import pipei from "../PipeiTouziRen/Pipei.vue";
	import tishi from "../../../Tishi.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
			token:{
//				type:Object
			},
			BiaoQian:{}
		},
		data () {
			return {
				type:"",		//创建类型
				x:"0",			//字的个数
				y:1,			//判断是否选择标签；》=1为选择；
				numbera:"",
				numberb:"",
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberh:"",
				texta:"",
				textb:"",
				textc:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				xingXi:{			//给下级要传的参数
					text:"亲，请您在电脑上登录www.qironghome.com,上传最新商业计划书PPT，便于投资人查看，确保融资沟通顺利。如已上传，请忽略。",
					x:"不再提醒",
					y:"确定",
					m:true,
					u:true
				},
				content:"",			//给下级要传的参数
				XiangmuID:"12",
				biaoQianID:[],		//储存标签id
				biaoQianid:'',		//储存标签id字符串
			}
		},
		mounted(){
			console.log(this.$route.params.type)
			console.log(this.token)
			console.log(this.BiaoQian)
			this.type=this.$route.params.type
			this.$nextTick(function() {
				var spans=this.$refs.biaoqian.getElementsByTagName("span")[0];
				spans.setAttribute("class","bianse")
				this.biaoQianID.push(spans.id);
			});
//			this.token=this.$route.params
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			xuanze(index){
				var spans=this.$refs.biaoqian.getElementsByTagName("span");	
				if(spans[index].getAttribute("class")=="bianse"){			//判断是否选择标签；》=1为选择；
					spans[index].setAttribute("class","")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID[z]==spans[index].id){
							this.biaoQianID.splice(z,1);
//							console.log(this.biaoQianID)
							this.biaoQianid=this.biaoQianID.join()
							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}else{
					if(this.y>2){
						Toast('最多可选三个');
					}else{
						spans[index].setAttribute("class","bianse");
						this.y+=1;
						for(var i=0; i<this.y; i++){
							if(this.biaoQianID[i]!=spans[index].id){
								this.biaoQianID.push(spans[index].id)
								break;
							}
						}
//						console.log(this.biaoQianID)
						this.biaoQianid=this.biaoQianID.join()
						console.log(this.biaoQianid)
					}
				}
//				console.log(this.y)
			},
			xiayibuGo(){
				var yes;
				if(this.numberg=='是'){
					this.yes='1'
				}else{
					if(this.numberg=='否'){
						this.yes='2'
					}else{
						this.numberg='';
					}
				}
				var datas = {
					token:this.token,//	token	是	[string]		
//					uid:"",//	创建者id	是	[string]		
					type:this.type,//	类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报	是	[string]		
//					company:"",//	公司id	是	[string]		
					com_name:this.texta,//	公司名称	是	[string]
					com_short:this.texta,//	公司简称	是	[string]
					com_code:this.textb,//	公司代码	是	[string]		
					main_business:"",//	主营业务	是	[string]		
					lightspot:this.textc,//	投资亮点	是	[string]		
					industry:this.biaoQianid,//	公司所在行业标签id	是	[string]		
					last_year_revenue:this.numbera,//	上一年营收（单位 万）	是	[string]		
					last_year_profit:this.numberb,//	上一年净利润（单位 万）	是	[string]		
					predict_revenue:this.numberc,//	今年预计营收(单位:万)	是	[string]		
					predict_profit:this.numberd,//	今年预计净利润(单位:万)	是	[string]		
					total_finance:this.numberf,//	融资总额(单位:万)	是	[string]		
					appraisement:"",//	投前估值(单位:万)	是	[string]		
					city:this.numberh,//	所在城市	是	[string]		
					transfe_share:this.numbere,//	拟转股份数	是	[string]		
					share_price:"",//	每股价格	是	[string]		
					is_hold:yes,//	是否本人持股 1:是 2:否	是	[string]		
					research_address:"",//	调研地址	是	[string]		
					research_time:"",//	调研时间	是	[string]		
					pledge_time:"",//	质押时间周期(天)	是	[string]		
					repayment_time:"",//	还款周期(天)	是	[string]		
					face_rate:"",//	票面利率	是	[string]		
					is_transfe:"",//	是否转股 1:是 2:否	是	[string]		
					remark:"",//	备注	是	[string]
				}
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textb:this.textb,
					textc:this.textc,
					numbera:this.numbera,
					numberb:this.numberb,
					numberc:this.numberc,
					numberd:this.numberd,
					numbere:this.numbere,
					numberf:this.numberf,
					numberg:this.numberg,
					numberh:this.numberh,
					XiangmuID:this.XiangmuID
				}
				var ok=0;
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu[item]=="" && this.y>=1){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					this.$http.post(URL.path+'finance/create',datas,{emulateJSON:true}).then(function(res){
						CanShu.XiangmuID=res.body.data
						this.content=this.$refs.pipeiShow;
						this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
						console.log(res);
					},function(res){
					    console.log(res.status);
					})
				}else{
					Toast("请填写完整您的信息！是否已选标签...");
				}
				
//				this.$refs.pipeiShow.pipeiBlock();
			},
			dingzengBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYan(){
				window.location.href="#/fankuixinxi";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
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
		watch:{					//监听输入范围
			textc:function(newVal,oldVal){
				var x=newVal.length;
				if(x<=100){
					this.x=x;
				}else{
					this.textc=oldVal;
					Toast("您的输入超出范围！")
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
			tishi
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
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
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
				.liangdian_1{
					.ferst{
						height:0.16rem;
						padding-bottom:0.14rem;
					}
					ul{
						width:100%;
						overflow:hidden;
						span{
							display:inline-block;
							float:left;
							width:1.04rem;
							text-align:center;
							padding:0.08rem 0;
							background:#f2f2f2;
							color:#acacac;
							border-radius:0.3rem;
							margin:0 0.08rem 0.1rem 0;
						}
						span:nth-child(3n){
							margin-right:0;
						}
						.bianse{
							background:#fddcd0;
							color:#ff7a59;
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
				.times{
					width:100%;
					height:0.3rem;
					background:#fff;
					line-height:0.3rem;
					font-size:0.12rem;
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
				width:100%;
				background:#f5f4f9;
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
							font-size:0.18rem;
							color:#fff;
						}
					}
				}
			}
		}
	}
</style>


