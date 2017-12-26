<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<!--<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stap="yijianHind()"><img src="../img/back.png"/></span>
				<span>保理</span>
			</div>-->
			<div class="xiangmu-header">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="../img/back.png"/></span>
				<span>个人资料</span>
				<div @click.stap="baocun()" class="fanhui-right">
					<div>
						<font>保存</font>
					</div>
				</div>
			</div>
			<div class="type-content-list">
				<div class="type-content ferst">
					<div class="fankiu border-topbottom">
						<div class="content-food touBiao">
							<span>保理</span>
						</div>
					</div>
				</div>
				<div style="width:100%;height:0.06rem;"></div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>提供保理方式<a>（可多选）</a></span>
							<span v-if="shifouZhankai=='zhanKai'" ref="bianji" class="lasst" @click.stap="bianji()">编辑</span>
						</div>
						<div v-if="BianJi==0" class="content-touzi" ref="foods">
							<ul>
								<li v-show="x" class="src1" id='1'>
									<span>明保理</span><font class="img1"></font>
								</li>
								<li v-show="z" class="src1" id="2">
									<span>暗保理</span><font class="img1"></font>
								</li>
							</ul>
						</div>
						<div v-if="BianJi==1" class="content-touzi"  ref="foods">
							<ul>
								<li class="src0" id='1' @click.stap="types('0','1')">
									<span>明保理</span><font class="img1"></font>
								</li>
								<li class="src0" id="2" @click.stap="types('1','2')">
									<span>暗保理</span><font class="img1"></font>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!--<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>-->
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>单笔保理业务的资金规模</span>
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
							<font></font><span>折扣率</span>
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
							<font></font><span>年利率</span>
						</div>
						<ul v-if="BianJi==0" class="first">
							<li>
								<input readOnly="true" :placeholder="numberToc" type="text" class="mint-field-core">
							</li>
						</ul>
						<ul v-if="BianJi==1">
							<input v-model="numberh" placeholder="填写利息" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;至</font>
							<input v-model="numberi" placeholder="填写利息" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>保理期限</span>
						</div>
						<ul v-if="BianJi==0" class="first">
							<li>
								<input readOnly="true" :placeholder="numberTod" type="text" class="mint-field-core">
							</li>
						</ul>
						<ul v-if="BianJi==1">
							<input v-model="numberj" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>月&nbsp;至</font>
							<input v-model="numberk" placeholder="填写数字" number="true" type="number" class="mint-field-core border">
							<font>月&nbsp;</font>
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
								<input readOnly="true" :placeholder="numberToe" type="text" class="mint-field-core">
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
							<font></font><span>您是否有地域要求<a>（选填）</a></span>
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
							<font></font><span>其他要求<a>（选填）</a></span>
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
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<guquan :shifouZhankai="shifouZhankai"></guquan>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<toudai :shifouZhankai="shifouZhankai"></toudai>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<rongzi :shifouZhankai="shifouZhankai"></rongzi>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<zhiya :shifouZhankai="shifouZhankai"></zhiya>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<gudong :shifouZhankai="shifouZhankai"></gudong>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<yinbaohan :shifouZhankai="shifouZhankai"></yinbaohan>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<duanqi :shifouZhankai="shifouZhankai"></duanqi>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
				<yinshouxin :shifouZhankai="shifouZhankai"></yinshouxin>
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
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
	import {URL} from '../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	
	import guquan from "../../GongxiangShenfen/Guquan.vue";
	import toudai from "../../GongxiangShenfen/Toudai.vue";
	import rongzi from "../../GongxiangShenfen/Rongzi.vue";
	import zhiya from "../../GongxiangShenfen/Zhiya.vue";
	import gudong from "../../GongxiangShenfen/Gudong.vue";
	import yinbaohan from "../../GongxiangShenfen/YinbaoHan.vue";
	import duanqi from "../../GongxiangShenfen/Duanqi.vue";
	import yinshouxin from "../../GongxiangShenfen/YinshouXin.vue";
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
			typeID:{}
		},
		data () {
			return {
				y:1,			//判断是否选择标签；》=1为选择；
				biaoQianID:[],
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberh:"",
				numberi:"",
				numberj:"",
				numberk:"",
				block:false,
				texta:"",
				textb:"",
				showFlag:true,
				urlName:"Dingzeng",
				
				shifouZhankai:'zhanKai',
				BianJi:'0',
				numberToa:"1",
				numberTob:"2",
				numberToc:"3",
				numberTod:"4",
				numberToe:"5",
				numberTof:"6",
				numberTog:"7",
				numberToh:"8",
				x:true,
				z:false,
//				onlyContent:true,
//				times:20177111129
			}
		},
		mounted(){
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
					numberh:this.numberh,
					numberi:this.numberi,
					numberj:this.numberj,
					numberk:this.numberk,
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
					numberh:this.numberh,
					numberi:this.numberi,
					numberj:this.numberj,
					numberk:this.numberk,
					biaoQianid:this.biaoQianid
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
			},
			types(index,id){
				var typeLi=this.$refs.foods.getElementsByTagName("li");
				var length=typeLi.length;
				this.urlName=id;
//				for(var i=0; i<length; i++){
//					typeLi[i].setAttribute("class","src0");
//				}
//				typeLi[id].setAttribute("class","src1")
				
				if(typeLi[index].getAttribute("class")=="src1"){			//判断是否选择标签；》=1为选择；
					typeLi[index].setAttribute("class","src0")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID[z]==typeLi[index].id){
							this.biaoQianID.splice(z,1);
//							console.log(this.biaoQianID)
							this.biaoQianid=this.biaoQianID.join()
//							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}else{
					typeLi[index].setAttribute("class","src1");
					this.y+=1;
					for(var i=0; i<this.y; i++){
						if(this.biaoQianID[i]!=typeLi[index].id){
							this.biaoQianID.push(typeLi[index].id)
							break;
						}
					}
//					console.log(this.biaoQianID)
					this.biaoQianid=this.biaoQianID.join()
//					console.log(this.biaoQianid)
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
			guquan,
			toudai,
			rongzi,
			zhiya,
			gudong,
			yinbaohan,
			duanqi,
			yinshouxin
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
	.type{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:300;
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
			.fanhui-right{
		    	position:absolute;
		    	right:0.2rem;
		    	top:0;
		    	font-size: 0.16rem;
		    	font{
		    		display:inline-block;
					vertical-align: top;
					/*width:0.2rem;*/
					height:0.2rem;
					line-height: 0.22rem;
					margin-top:0.13rem;
					/*background-image:url("../img/bianji.png");*/
					background-size:100% 100%;
		    	}
		    }
		}
		.type-content-list::-webkit-scrollbar{width:0px;}
		.type-content-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.ferst{
				padding-top:0.55rem;
				.touBiao{
					background:#fff;
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
						background-image:url("../img/biaoti.png");
						background-size:100% 100%;
					}
				}
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
									background-image:url("../img/duihao.png");
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


