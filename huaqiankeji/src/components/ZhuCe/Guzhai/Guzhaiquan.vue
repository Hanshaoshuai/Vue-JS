<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>债权投资</span>
			</div>
			<div class="type-content-list">
				<div class="type-content ferst">
					<!--<div class="list-header">
						<span>债权投资特性</span>
					</div>-->
					<div class="type-cont border-bottom">
						<div class="tuse">
							<font></font><span>您倾向于生么样的投资方式？<a>（可多选）</a></span>
						</div>
						<div class="content-touzi"  ref="foods">
							<ul>
								<li class="src1" id='4' @click.stap="types('0','4')">
									<span>融资租赁</span><font class="img1"></font>
								</li>
								<li class="src0" id="5" @click.stap="types('1','5')">
									<span>股权质押</span><font class="img1"></font>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您对企业有什么要求</span>
						</div>
						<ul>
							<div class="shouru">
								<span>营业收入不低于</span>
								<input v-model="numbera" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>亿元</font>
							</div>
							<div class="shouru">
								<span>净利润不低于</span>
								<input v-model="numberb" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>万</font>
							</div>
							<!--<li class="border">
								<input v-model="number" placeholder="请输入数字" number="true" type="number" class="mint-field-core">
							</li>
							<li class="border">
								
							</li>-->
						</ul>
					</div>
				</div>
				<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您实际能提供的年化资金成本范围？</span>
						</div>
						<ul>
							<input v-model="numberc" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;至</font>
							<input v-model="numberd" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您的单笔能提供的投资规模？</span>
						</div>
						<ul>
							<input v-model="numbere" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>万&nbsp;至</font>
							<input v-model="numberf" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>万&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>从接触项目到放款的时间不超过？</span>
						</div>
						<ul>
							<input v-model="numberg" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
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
						<div class="xiaolv anli">
							<ul>
								<textarea placeholder="请填写地域要求如：长三角、珠三角、北京" class="mint-field-core ziyuanChongzu" v-model="texta"></textarea>
							</ul>
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>借债主题是<a>（选填）</a></span>
						</div>
						<div class="xiaolv anli">
							<ul>
								<textarea placeholder="选填..." class="mint-field-core ziyuanChongzu" v-model="textb"></textarea>
							</ul>
						</div>
					</div>
				</div>
				
				<div class="type-food" @click.stop="ToHoom()">
					<div class="type-food-text">
						<span>确定</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			CanShu:{
//				type:Object
			}
		},
		data () {
			return {
				y:1,			//判断是否选择标签；》=1为选择；
				biaoQianID:[],		//储存标签id
				biaoQianid:'',		//储存标签id字符串
				numbera:"",
				numberb:"",
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				block:false,
				texta:"",
				textb:"",
				showFlag:true,
				urlName:"Dingzeng",
//				onlyContent:true,
//				times:20177111129
			}
		},
		mounted(){
			console.log(this.CanShu)
			this.$nextTick(function() {
				var typeLi=this.$refs.foods.getElementsByTagName("li")[0];
				this.biaoQianID.push(typeLi.id);
			});
		},
		methods:{
			yijianHind(){
//				this.showFlag=false;
				history.go(-2)
			},
			Tozhaiquan(){
				this.showFlag=true;
			},
			xuanze(index){
				
			},
			ToHoom(){
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textb:this.textb,
					numbera:this.numbera,
					numberb:this.numberb,
					numberc:this.numberc,
					numberd:this.numberd,
					numbere:this.numbere,
					numberf:this.numberf,
					numberg:this.numberg,
//					XiangmuID:this.XiangmuID
				}
				var datas={
					id:this.CanShu.id,				//	uid	是	[string]	
					investment_type:this.CanShu.typeID,		//投资类型 1:股权投资 2:债权投资 3:股债兼投	是	[string]		
					interested:this.CanShu.biaoQianid,		//感兴趣的行业多个用逗号分割	是	[string]		
					single_project_max:this.CanShu.numbere,		//单笔投资最大值	是	[string]		
					single_project_min:this.CanShu.numberf,		//单笔投资最小值	是	[string]		
					fund_stage:this.CanShu.biaoQianid1,			//投资阶段 15债转股 16债权 17 新三板 62PE 63 VC 64 天使投资 75PreIPO	是	[string]		
					territory:this.CanShu.texta,			//地域要求	是	[string]		
					
					investment_way:this.biaoQianid,			//投资方式 1:定增 2:接老股 3:二级市场 4:融资租赁 5:股权质押 6:双创债	是	[string]
					single_project_max2:this.numbere,		//单笔投资最大值	是	[string]		
					single_project_min2:this.numberf,		//单笔投资最小值	是	[string]		
					revenue_min:this.numbera,				//最低营收要求	是	[string]		
					profit_min:this.numberb,				//最低净利润要求	是	[string]		
					fund_min:this.numberc,					//最小年化资金成本范围	是	[string]		
					fund_max:this.numberd,					//最大年化资金成本范围	是	[string]		
					loan_time:this.numberg,					//放款时间	是	[string]		
					borrow:this.textb,						//借债主体	是	[string]
					territory2:this.texta			//地域要求	是	[string]
				}
				var ok=0;
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu[item]=="" && this.y>=1){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					this.$http.post(URL.path+'regist/regist2',datas,{emulateJSON:true}).then(function(res){
						if(res.body.returnCode=='200'){
							Toast('资料完善成功');
							console.log(res.body)
							window.location.href="#/faxian";
						}else{
							window.location.href="#/denglu"
							Toast(res.body.msg);
						}
					},function(res){
					    console.log(res.status);
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
							console.log(this.biaoQianid)
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
					console.log(this.biaoQianid)
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
//			ratingselect,
//			split
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
		}
		.type-content-list::-webkit-scrollbar{width:0px;}
		.type-content-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.list-header{
				width:100%;
				padding-top:0.1rem;
				display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    font-size:0.2rem;
			}
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
					padding:0.16rem 2.5%;
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
							font-size:0.16rem;
							/*padding:0.26rem 0 0.06rem 0.1rem;*/
						}
						a{
							font-size:0.14rem;
							color:#ff7a59;
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
								min-height:1.02rem;
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


