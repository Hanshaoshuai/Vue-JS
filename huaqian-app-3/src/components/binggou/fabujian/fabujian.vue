<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>并购卖方发布</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="fankiu-content">
					<div class="zhuying_1 zhuying_2">
						<div class="ferst"><span></span>项目主题</div>
						<div class="last">
							<textarea placeholder="一句话介绍项目" class="mint-field-core" v-model="texta"></textarea>
						</div>
					</div>
					<div style="margin-top:0.2rem;" class="zhuying_1">
						<div class="ferst"><span></span>主营业务和产品简介</div>
						<div class="last neirong">
							<textarea placeholder="简介主营业务和产品" class="mint-field-core" v-model="textc"></textarea>
						</div>
						<li>{{x}}/100</li>
					</div>
					<ul class="yingshou">
						<div class="fersts"><span></span>最近一年营收和净利润</div>
						<div class="shouru">
							<span>营业收入</span>
							<input v-model="numbera" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>亿元</font>
						</div>
						<div class="shouru">
							<span>扣非净利润</span>
							<input v-model="numberb" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>万元</font>
						</div>
					</ul>
					<div class="type-cont">
						<div class="tuse">
							<span>行业标签<a>（限选3个）</a></span>
						</div>
						<div class="content-touzi" ref="foods">
							<ul>
								<li v-for="(item,index) in BiaoQian[0]" class="src0" :id='item.id' @click.stap="types(index,item.id)">
									<span>{{item.title}}</span><font class="img1"></font>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="butten">
				<ul @click.stop="xiayibuGo()">
					<li><span>提交审核</span></li>
				</ul>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Indicator } from 'mint-ui';
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				x:"0",			//字的个数
				y:1,
				texta:"",
				textc:"",
				textd:"",
				numbera:'',
				numberb:"",
				times:20177111129,
				fuxuanblock:false,
				tucaoShow:true,
				
				BiaoQian:"",
				biaoQianID:[],		//储存标签id
				biaoQianID1:"",		//储存标签id
			}
		},
		mounted(){
			var datas = {
				token:localStorage.getItem("token")//	token	是	[string]	URL获取的参数
			}
			this.$http.post(URL.path1+'login/three',datas,{emulateJSON:true}).then(function(res){
				Indicator.close();
				var data=res.body.data
				this.BiaoQian=res.body.data
				this.$nextTick(function() {
//					var typeLi=this.$refs.foods.getElementsByTagName("li");
//					typeLi[0].setAttribute("class","src1");
//					this.biaoQianID.push(typeLi[0].id);
				});
//				console.log(this.BiaoQian);
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
			xuanze(){
				if(this.fuxuanblock==true){
					this.fuxuanblock=false;
				}else{
					this.fuxuanblock=true;
				}
				
			},
			xiayibuGo(){
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textc:this.textc,
					textd:this.textd,
					numbera:this.numbera,
					numberb:this.numberb,
				}
				var ok=0;
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu[item]==""){
						
					}else{
						ok+=1;
					}
				}
				if(ok==0){
					this.content=this.$refs.pipeiShow;
					this.$refs.tishiShow.tishiBlock(CanShu,'pipei');//CanShu是下级要传的参数
				}else{
					Toast("请填写完整您的信息！");
				}
				
//				this.$refs.pipeiShow.pipeiBlock();
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
							this.biaoQianID1=this.biaoQianID.join()
//							console.log(this.biaoQianID1)
							this.y-=1
							break;
						}
					}
				}else{
					if(this.y>3){
						Toast('最多可选三个');
					}else{
						typeLi[index].setAttribute("class","src1");
						this.y+=1;
						for(var i=0; i<this.y; i++){
							if(this.biaoQianID[i]!=typeLi[index].id){
								this.biaoQianID.push(typeLi[index].id)
								break;
							}
						}
//						console.log(this.biaoQianID)
						this.biaoQianID1=this.biaoQianID.join()
//						console.log(this.biaoQianID1)
					}
				}
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
			background:#f5f4f9;
			-webkit-overflow-scrolling:touch;
			.fankiu-content{
				width:89.4%;
				padding-bottom:0.56rem;
				margin:0 auto;
				.zhuying_1{
					width:100%;
					span{
						color:#ff7a59;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						padding-right:0.2rem;
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
						background:#ffffff;
						position:relative;
						.mint-field-core{
							resize: none;
							font-size:0.14rem;
							background:#ffffff;
							height:0.26rem;
							line-height:0.26rem;
							color:#afafaf;
							&::-webkit-scrollbar{width:0;height:0}
							&::-webkit-input-placeholder{
								color:#afafaf;
							}
						}
						.xuanxiang{
							width:50%;
							position:absolute;
							right:-1px;
							top:0.36rem;
							border:1px solid #ebebeb;
							box-sizing:border-box;
							background:#ffffff;
							z-index:1000;
							li{
								width:100%;
								height:0.26rem;
								display:flex;
								text-align:center;
								justify-content:center;
								align-items:center;
								align-content: center;
							}
						}
					}
					.neirong{
						min-height:1.22rem;
						.mint-field-core{
							resize: none;
							background:#ffffff;
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
				}
				.zhuying_2{
					display:flex;
					margin-top:0.1rem;
					position:relative;
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
				.yingshou{
					font{
						color:#959595;
					}
					.shouru{
						padding:0 0.1rem;
						span{
							display:inline-block;
							width:0.8rem;
						}
					}
					.mint-field-core::-webkit-input-placeholder{
						color: #d2d2d2;
					}
					.mint-field-core{
						border:0.008rem solid #d2d2d2;
						width:1rem;
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
					.fersts{
						display:flex;
						height:0.38rem;
						padding-right:0.2rem;
						align-content: center;
						align-items: center;
						font-size:0.16rem;
						span{
							color:#ff7a59;
							font-size:0.15rem;
						}
					}
				}
				.type-cont{
					flex:1;
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
						margin-top:0.08rem;
						ul{
							width:100%;
							overflow:hidden;
							/*display:flex;*/
							/*justify-content:flex-start;*/
							li{
								float:left;
								&:nth-child(3n){
									margin-right:0;
								}
								margin-right:0.02rem;
								width:1rem;
								height:0.32rem;
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
									font-size:0.14rem;
								}
								.img1{
									background-image:url("../img/duihao.png");
								}
							}
							.src0{
								border:1px solid #ddddde;
							}
							.src1{
								border:1px solid #ff7a59;
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
						li{
							display:inline-block;
							margin:0;
							margin:0.06rem 0.08rem;
						}
					}
			   	}
			}
		}
		.butten{
			position:absolute;
			left:0;
			bottom:0;
			width:100%;
			background:#f5f4f9;
			ul{
				width:100%;
				height:0.45rem;
				margin:0 auto;
				background:red;
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
</style>


