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
							<li class="border-bottom"></li>
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
							<li class="border-bottom"></li>
						</ul>
						<div v-if="industry" class="zhuying_1 liangdian_1">
							<div class="ferst"><span></span>所在行业</div>
							<div ref="biaoqian" class="last">
								<font v-if="BianJi==0" v-for="item in industry1" class="bianse">{{item}}</font>
								<!--<font v-if="BianJi==1" v-for="(item,index) in BiaoQian" @click.stap="xuanze(index)" :id="item.id">{{item.title}}</font>-->
							</div>
							<!--<ul ref="biaoqian">
								<span v-if="BianJi==0" v-for="(item,index) in industry1" class="bianse">{{item}}</span>
								<span v-if="BianJi==1" v-for="(item,index) in BiaoQian" @click.stap="xuanze(index)" :id="item.id">{{item.title}}</span>
							</ul>-->
						</div>
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
							<p>上一财年：营收&nbsp;<span>{{numbera}}亿元</span>&nbsp;&nbsp;&nbsp;&nbsp;净利润&nbsp;<span>{{numberb}}万元</span></p>
							<p>今年预计：营收&nbsp;<span>{{numberc}}亿元</span>&nbsp;&nbsp;&nbsp;&nbsp;净利润&nbsp;<span>{{numberd}}万元</span></p>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>转让计划</div>
						<div class="last">
							<p>企业估值：<span>{{numberi}}亿元</span></p>
							<p>拟转股份数：<span>{{numbere}}万股</span></p>
							<p>每股价格：<span>{{numberf}}元</span></p>
						</div>
					</div>
					<!--<div class="zhuying_1 border">
						<div class="ferst"><span></span>拟转股份数</div>
						<div class="last">
							<p><span>{{numbere}}万股</span></p>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>每股价格</div>
						<div class="last">
							<p><span>{{numberf}}元</span></p>
						</div>
					</div>-->
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>是否本人股份</div>
						<div class="last">
							<p><span>{{numberg}}</span></p>
						</div>
					</div>
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
						<div class="ferst"><span>*</span>企业推荐</div>
						<div class="last neirong">
							<textarea readOnly="true" placeholder="请填写直营业务、投资亮点等" class="mint-field-core" v-model="textc"></textarea>
						</div>
						<li>{{x}}/200</li>
					</div>
					<div v-if="industry" class="zhuying_1 liangdian_1">
						<div class="ferst"><span>*</span>企业所在行业标签<font>（选标签）</font></div>
						<ul ref="biaoqian">
							<span v-if="BianJi==0" v-for="(item,index) in industry1" class="bianse">{{item}}</span>
							<span v-if="BianJi==1" v-for="(item,index) in BiaoQian" @click.stap="xuanze(index)" :id="item.id">{{item.title}}</span>
						</ul>
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
						<div class="ferst"><span>*</span>逆转股份数</div>
						<div class="last number">
							<input readOnly="true" v-model="numbere" placeholder="输入数字" number="true" type="number" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>每股价格</div>
						<div class="last number">
							<input readOnly="true" v-model="numberf" placeholder="输入数字" number="true" type="number" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>是否本人股份</div>
						<div class="last number">
							<input readOnly="true" v-model="numberg" placeholder="是 / 否" number="true" type="text" class="mint-field-core">
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>所在省份</div>
						<div class="last number">
							<input readOnly="true" v-model="numberh" placeholder="" type="text" class="mint-field-core">
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
			<router-view :token="token" :type="type" :XiangmuID="XiangmuID" :Xiangmutype="Xiangmutype"></router-view>
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
	import tishi from "../../Tishi.vue";
	
	
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
				data:"",
				z:'',
				industry:"",
				industry1:[],
				butenLeft:"",
				butenRight:"butenRight",
				BianJi:0,
				BiaoQian:"",
				datas:"",
				type:"",		//项目类型
				x:"0",			//字的个数
				y:1,			//判断是否选择标签；》=1为选择；
				numbera:"",	//上一财年营收、净利润		请填写年营业
				numberb:"",	//上一财年营收、净利润		请填写净利润
				numberc:"",	//今年预计营收、净利润		请填写预计营收
				numberd:"",	//今年预计营收、净利润		请填写净利润
				numbere:"",	//融资计划		请填写融资估值
				numberf:"",	//融资计划		请填写融资总额
				numberg:"",	//融资计划		请填写每股价格
				numberh:"",	//所在省份
				numberi:"",
				texta:"",	//公司名称
				textb:"",	//公司代码
				textc:"",	//项目推荐		请填写直营业务、投资亮点等
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
				toudi:'投递',
				biaoQianID:[],		//储存标签id
				biaoQianid:'',		//储存标签id字符串
			}
		},
		mounted(){
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
			console.log(this.token)
			//获取标签
			this.$http.post(URL.path1+'login/three',this.datas,{emulateJSON:true}).then(function(res){
				this.BiaoQian=res.body.data[0]
				this.z=res.body.data[0].length;
				console.log(this.BiaoQian);
				//历史项目详情
				this.$http.post(URL.path+'finance/item_detail',datas,{emulateJSON:true}).then(function(res){
					var shifou;
					Indicator.close();
					if(this.data.share_price=="1"){
						shifou='是'
					}else{
						shifou='否'
					}
					this.data=res.body.data[0]
					this.texta=this.data.com_short
					this.textb=this.data.com_code
					this.textc=this.data.lightspot
					this.numbera=this.data.last_year_revenue
					this.numberb=this.data.last_year_profit
					this.numberc=this.data.predict_revenue
					this.numberd=this.data.predict_profit
					this.numbere=this.data.transfe_share
					this.numberf=this.data.share_price
					this.numberg=shifou
					this.numberh=this.data.city
					this.numberi=this.data.appraisement
					this.industry=this.data.industry
					this.type=this.data.type
					
					this.industry=this.industry.split(",")
					for(var i=0; i<this.z; i++){
						for(var item in this.BiaoQian){
//							console.log(this.BiaoQian)
							if(this.BiaoQian[item]['id']==this.industry[i]){
								this.industry1.push(this.BiaoQian[item]['title'])
							}
						}
						
					}
					console.log(this.data);
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
			},function(res){
				Indicator.close();
			    console.log(res.status);
			})
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			genJin(){
				window.location.href='#/ZhuanlaoGu1/1/'+this.XiangmuID+'/1/YitouQingdan';
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
//				this.butenLeft="butenLeft";
//				this.butenRight="";
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
					XiangmuID:this.XiangmuID,
					type:this.data.type
				}
				var ok=0;
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu[item]=="" && this.y>=1){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					this.content=this.$refs.pipeiShow;
					if(this.is_send=='1'){
//						this.$refs.pipeiShow.pipeiBlock(CanShu);
						window.location.href='#/ZhuanlaoGu1/1/'+this.XiangmuID+'/1/Pipei';
					}else{
						this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
					}
//					this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
				}else{
					Toast("请填写完整您的信息！是否已选标签...");
				}
				
//				this.$refs.pipeiShow.pipeiBlock();
			},
			buGen(){
				this.none=false;
				var textInputs = this.$refs.guanzhuLingyu.getElementsByClassName("mint-field-core");
				var length=textInputs.length;
				//获取标签
				if(this.industry){
					this.BianJi=1;
					this.$nextTick(function() {
						var spans=this.$refs.biaoqian.getElementsByTagName("span")[0];
						spans.setAttribute("class","bianse");
						this.biaoQianID.push(spans.id);
					});
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
		watch:{					//监听输入范围
//			textc:function(newVal,oldVal){
//				var x=newVal.length;
//				if(x<=200){
//					this.x=x;
//				}else{
//					this.textc=oldVal;
//					Toast("您的输入超出范围！")
//				}
//				
//				
//			}
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
						&:first-child{
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
						}
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
					.neirong{
						min-height:1.22rem;
						.mint-field-core{
							color: #787777;
							resize: none;
							min-height:1.22rem;
							line-height:0.21rem;
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


