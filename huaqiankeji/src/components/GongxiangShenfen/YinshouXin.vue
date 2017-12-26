<template>
	<transition name="fade">
		<div ref="types" class="type1" v-show="showFlag">
			<div class="fankiu border-topbottom">
				<div class="content-food touBiao">
					<span>银行授信</span>
					<div v-if="shifouZhankai=='zhanKai'" @click.stop="zhanKai()" class="anNui"><div class="imgas"></div></div>
				</div>
			</div>
			<div style="width:100%;height:0.06rem;"></div>
			<div class="type-content-list">
				<!--<div class="type-content ferst">
				</div>-->
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>单笔授信的资金规模</span>
							<span v-if="shifouZhankai=='zhanKai'" ref="bianji" class="lasst" @click.stap="bianji()">编辑</span>
						</div>
						<ul v-if="BianJi==0" class="first">
							<li>
								<input readOnly="true" :placeholder="numberToa" type="text" class="mint-field-core">
							</li>
						</ul>
						<ul v-if="BianJi==1">
							<input v-model="numbere" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>万&nbsp;至</font>
							<input v-model="numberf" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>万&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>年利率</span>
						</div>
						<ul v-if="BianJi==0" class="first">
							<li>
								<input readOnly="true" :placeholder="numberTob" type="text" class="mint-field-core">
							</li>
						</ul>
						<ul v-if="BianJi==1">
							<input v-model="numberc" placeholder="填写利息" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;至</font>
							<input v-model="numberd" placeholder="填写利息" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>借款期限</span>
						</div>
						<ul v-if="BianJi==0" class="first">
							<li>
								<input readOnly="true" :placeholder="numberToc" type="text" class="mint-field-core">
							</li>
						</ul>
						<ul v-if="BianJi==1">
							<input v-model="numberi" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>天&nbsp;至</font>
							<input v-model="numberj" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>天&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont" style="padding-bottom:0.16rem;">
						<div class="tuse">
							<font></font><span>从接触项目到放款的时间周期不超过</span>
						</div>
						<ul v-if="BianJi==0" class="first">
							<li>
								<input readOnly="true" :placeholder="numberTod" type="text" class="mint-field-core">
							</li>
						</ul>
						<ul v-if="BianJi==1">
							<input v-model="numberg" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>天</font>
						</ul>
					</div>
				</div>
				<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您是否有地域要求<a v-if="shifouZhankai=='zhanKai'">（选填）</a></span>
						</div>
						<div v-if="BianJi==0" class="xiaolv anli first1">
							<ul>
								<textarea v-if="numberTog!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="numberTog"></textarea>
								<textarea  v-if="numberTog==''" readOnly="true" placeholder="暂无" class="mint-field-core ziyuanChongzu" v-model="numberTog"></textarea>
							</ul>
						</div>
						<div v-if="BianJi==1" class="xiaolv anli">
							<ul>
								<textarea placeholder="请填写地域要求如：长三角、珠三角、北京" class="mint-field-core ziyuanChongzu" v-model="texta"></textarea>
							</ul>
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>其他要求<a v-if="shifouZhankai=='zhanKai'">（选填）</a></span>
						</div>
						<div v-if="BianJi==0" class="xiaolv anli first1">
							<ul>
								<textarea v-if="numberToh!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="numberToh"></textarea>
								<textarea  v-if="numberToh==''" readOnly="true" placeholder="暂无" class="mint-field-core ziyuanChongzu" v-model="numberToh"></textarea>
							</ul>
						</div>
						<div v-if="BianJi==1" class="xiaolv anli">
							<ul>
								<textarea placeholder="选填..." class="mint-field-core ziyuanChongzu" v-model="textb"></textarea>
							</ul>
						</div>
					</div>
				</div>
				
				<!--<div class="type-food" @click.stop="ToHoom()">
					<div class="type-food-text">
						<span>提交审核</span>
					</div>
				</div>-->
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Indicator } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			XiajiCanshu:{
//				type:Object
			},
			typeID:{},
			shifouZhankai:{}
		},
		data () {
			return {
				y:1,			//判断是否选择标签；》=1为选择；
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberi:"",
				numberj:"",
				block:false,
				texta:"",
				textb:"",
				showFlag:true,
				urlName:"Dingzeng",
				
				BianJi:'0',
				numberToa:"1",
				numberTob:"2",
				numberToc:"3",
				numberTod:"4",
				numberToe:"5",
				numberTof:"6",
				numberTog:"7",
				numberToh:"8"
//				onlyContent:true,
//				times:20177111129
			}
		},
		mounted(){
			if(this.shifouZhankai=='BuzhanKai'){
				this.$refs.types.style.height="auto";
			}
			this.$nextTick(function() {
//				var typeLi=this.$refs.foods.getElementsByTagName("li")[0];
//				this.biaoQianID.push(typeLi.id);
			});
		},
		methods:{
			yijianHind(){
//				this.showFlag=false;
				history.go(-1)
			},
			Tozhaiquan(){
				this.showFlag=true;
			},
			zhanKai(){
				console.log(this.$refs.types.style.height)
				if(this.$refs.types.style.height!="0.58rem"){
					if(this.$refs.types.style.height==""){
						this.$refs.types.style.height="auto";
					}else{
						this.$refs.types.style.height="0.58rem";
					}
				}else{
					this.$refs.types.style.height="auto";
				}
			},
			bianji(id){
				if(this.BianJi==1){
					this.BianJi=0;
					this.$refs.bianji.innerText="编辑";
				}else{
					this.BianJi=1;
					this.$refs.bianji.innerText="取消"
				}
			},
			ToHoom(){
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textb:this.textb,
					numberc:this.numberc,
					numberd:this.numberd,
					numbere:this.numbere,
					numberf:this.numberf,
					numberg:this.numberg,
					numberi:this.numberi,
					numberj:this.numberj
//					XiangmuID:this.XiangmuID
				}
				var CanShu1={				//给下级要传的参数
//					texta:this.texta,
//					textb:this.textb,
					numberc:this.numberc,
					numberd:this.numberd,
					numbere:this.numbere,
					numberf:this.numberf,
					numberg:this.numberg,
					numberi:this.numberi,
					numberj:this.numberj
//					XiangmuID:this.XiangmuID
				}
				var datas={
					id:localStorage.getItem("userID"),
//					id:this.XiajiCanshu['id'],			//	uid	是	[string]		
					investment_type:localStorage.getItem("typeID"),			//投资类型 1:股权投资 2:债权投资 3:股债兼投	是	[string]		
//					interested:'',				//感兴趣的行业多个用逗号分割	是	[string]		
					single_project_max:this.numberf,			//单笔投资最大值	是	[string]		
					single_project_min:this.numbere,			//单笔投资最小值	是	[string]		
//					fund_stage:'',			//投资阶段 15债转股 16债权 17 新三板 62PE 63 VC 64 天使投资 75PreIPO	是	[string]		
					territory:this.texta,			//地域要求	是	[string]		
					investment_way:'',			//投资方式 1:定增 2:接老股 3:二级市场 4:融资租赁 5:股权质押 6:双创债	是	[string]		
					revenue_min:0,			//最低营收要求	是	[string]		
					profit_min:0,			//最低净利润要求	是	[string]		
					fund_min:this.numberc,			//最小年化资金成本范围	是	[string]		
					fund_max:this.numberd,			//最大年化资金成本范围	是	[string]		
					loan_time:this.numberg,			//放款时间	是	[string]		
					borrow:this.textb				//借债主体	是	[string]
				}
//				console.log(datas)
				var ok=0;
				for(var item in CanShu1){		//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu1[item]=="" && this.y>=1){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					Indicator.open({spinnerType: 'fading-circle'});
					this.$http.post(URL.path+'regist/regist2',datas,{emulateJSON:true}).then(function(res){
						Indicator.close();
//						console.log(res);
						if(res.body.returnCode=='200'){
							if(localStorage.getItem("panduanWanshan")=='22'){
							
							}else{
								Toast('系统将在24小时内审核您的注册申请')
							}
//							console.log(res.body)
							window.location.href="#/faxian";
						}else{
							window.location.href="#/denglu"
							Toast(res.body.msg);
						}
					},function(res){
						Indicator.close();
					    console.log(res);
					})
				}else{
					Toast("请填写完整您的信息！是否已选标签...");
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
	.type1{
		/*position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:300;*/
		height:0.58rem;
		overflow:hidden;
		.fankiu{
			width:100%;
			display:flex;
			.content-food{
				flex:1;
				padding:0.15rem 5%;
				background:#fff;
				position:relative;
				.anNui{
					position:absolute;
					top:0rem;
					right:0.16rem;
					height:100%;
					width:0.3rem;
					.imgas{
						width:0.16rem;
						height:0.1rem;
						margin-top:0.25rem;
						background-image:url("./img/ico_16.png");
						background-size:100% 100%;
					}
				}
			}
			.touBiao{
				height:0.58rem;
				padding:0 0 0 0;
				span{
					position:absolute;
					top:0.09rem;
					left:0rem;
					display:inline-block;
					padding:0.1rem 0.21rem 0.14rem 0.21rem;
					color:#fff;
					font-size:0.18rem;
					line-height:0.19rem;
					background-image:url("./img/biaoti.png");
					background-size:100% 100%;
				}
			}
		}
		.type-content-list::-webkit-scrollbar{width:0px;}
		.type-content-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			padding-bottom:0.16rem;
			background:#fff;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.ferst{
				padding-top:0.55rem;
				background:#fff;
			}
			/*.list-header{
				width:100%;
				padding-top:0.6rem;
				display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    font-size:0.2rem;
			}*/
			.type-content{
				width:100%;
				height:auto;
				color:#3f3f3f;
				.type-cont{
					flex:1;
					padding:0.16rem 2.5% 0 2.5%;
					background:#fff;
					font-size:0.14rem;
					.tuse{
						font{
							display:inline-block;
							position:relative;
							width:0.04rem;
							height:0.16rem;
							background:#ff7a59;
							margin-right:0.06rem;
							vertical-align:top;
							z-index:200;
						}
						span{
							display:inline-block;
							font-size:0.18rem;
							/*padding:0.26rem 0 0.06rem 0.1rem;*/
						}
						a{
							font-size:0.14rem;
							color:#ff7a59;
						}
						.lasst{
							font-size:0.14rem;
							float:right;
							color:#ff7a59;
							margin:0.02rem 0.1rem 0 0;
						}
					}
					.content-touzi{
						flex:1;
						font-size:0.14rem;
						background:#fff;
						margin-top:0.08rem;
						ul{
							width:100%;
							display:flex;
							justify-content:flex-start;
							li{
								&:first-child{
									margin-right:0.06rem;
								}
								width:1.08rem;
								height:0.36rem;
								border-radius:0.04rem;
								color:#525252;
								background:#fff;
								box-sizing: border-box;
								position:relative;
								display:flex;
								justify-content:center;
								align-items:center;
								span{
									display:inline-block;
									font-size:0.16rem;
								}
								.img1{
									background-image:url("./img/duihao.png");
								}
							}
							.src0{
								border:0.01rem solid #ddddde;
							}
							.src1{
								border:0.01rem solid #ff7a59;
								font{
									display:inline-block;
									position:absolute;
									bottom:-0.008rem;
									right:-0.008rem;
									background-size:100% 100%;
									width:0.2rem;
									height:0.2rem;
								}
							}
						}
					}
					ul{
						font{
							color:#959595;
						}
						.shouru{
							padding:0 0.1rem;
							span{
								display:inline-block;
								width:1.13rem;
							}
						}
						.mint-field-core::-webkit-input-placeholder{
							color: #d2d2d2;
						}
						.mint-field-core{
							border:0.008rem solid #d2d2d2;
							width:0.6rem;
							margin:0;
							padding:0.04rem 0.14rem;
							margin:0.06rem 0.1rem;
						}
						li{
							display:inline-block;
							margin:0;
							padding:0.08rem 0.18rem;
							margin:0.06rem 0.1rem;
						}
					}
					.xiaolv{
						width:100%;
						span{
							line-height:0.16rem;
						}
						ul{
							width:100%;
							.mint-field-core::-webkit-input-placeholder{
							  color: #787777;
							}
							.ziyuanChongzu{
								resize: none;
								min-height:0.6rem;
								line-height:0.2rem;
								&::-webkit-scrollbar{width:0;height:0}
							}
							.mint-field-core{
								width:96%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
								padding:0.06rem 2%;
								margin:0.06rem 0 0 0;
							}
						}
					}
					.first{
						width:100%;
						li{
							margin:0;
							padding:0.08rem 0 0 0.1rem;
							.mint-field-core::-webkit-input-placeholder{
							  	color: #787777;
							}
							.mint-field-core{
								border:none;
								width:100%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
								padding:0;
								margin:0;
							}
						}
					}
					.first1{
						.mint-field-core{
							border:none;
						}
					}
					/*.type-padding{
						padding:0.1rem;
					}*/
			   	}
			}
			.type-food{
				width:100%;
				height:0.93rem;
				padding-top:0.15rem;
				background:#fff;
				.type-food-text{
					width:100%;
					text-align:center;
				    span{
						padding:0.15rem 0.73rem;
						color:#ffffff;
						font-size:0.2rem;
						text-align:center;
						border-radius:8px;
						display:inline-block;
						background:#ff7a59;
					}
				}
			}
		}
	}
</style>


