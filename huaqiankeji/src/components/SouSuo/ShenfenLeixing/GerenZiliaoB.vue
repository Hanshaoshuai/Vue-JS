<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="../img/back.png"/></span>
				<span></span>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.2rem;"></div>
				<div class="searchBox">
					<div class="home-search">
						<img ref="images" :src="imgs"/>
					</div>
					<div class="header-name">
						<font>{{data.uname}}</font>
						<div class="header-content">
							<span>{{data.com_short}}</span>
							<span>{{data.position}}</span>
						</div>
					</div>
					<!--<div class="jifen"><font></font><span>积分 666</span></div>-->
				</div>
				<div class="zhaiQuan">
					<div class="fankiu border-topbottom bottom-a">
						<div class="content-food touBiao">
							<span>债权投资</span>
						</div>
					</div>
					<div class="fankiu border-topbottom">
						<div class="content-food">
							<span>投资方式</span>
							<span class="lasst" ref="text2"></span>
							<div v-if="BianJi2==0" class="content-touzi" ref="foods">
								<ul>
									<li  v-show="x" class="src1" id='4'>
										<span>融资租赁</span><font class="img1"></font>
									</li>
									<li v-show="z" class="src1" id="5">
										<span>股权质押</span><font class="img1"></font>
									</li>
									
								</ul>
							</div>
							<div v-if="BianJi2==1" class="content-touzi" ref="foods">
								<ul>
									<li class="src1" id='5' @click.stap="types('0','5')">
										<span>融资租赁</span><font class="img1"></font>
									</li>
									<li class="src0" id="4" @click.stap="types('1','4')">
										<span>股权质押</span><font class="img1"></font>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>企业要求</span><span ref="text3" class="lasst"></span>
						</div>
						<div class="shouru">
							<div v-if="BianJi3==0">
								<div class="anli-list">
									<textarea readOnly="true" :placeholder="numberTod" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
										
								</div>
								<div class="anli-list border-bottom">
									<textarea readOnly="true" :placeholder="numberToc" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
								</div>
							</div>
							<ul v-if="BianJi3==1">
								<div>
									<span>营业收入不低于</span>
									<input v-model="numbera" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>亿元</font>
								</div>
								<div>
									<span>净利润不低于</span>
									<input v-model="numberb" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>万</font>
								</div>
							</ul>
						</div>
					</div>
					<div class="fankiu border-bottom dangeDiyu">
						<div class="content-food">
							<span>年化资金成本</span>
							<ul v-if="BianJi3==0" class="first">
								<li>
									<input readOnly="true" v-model="numberj" :placeholder="numberj" type="text" class="mint-field-core">
								</li>
							</ul>
							<ul v-if="BianJi3==1" class="last">
								<input v-model="numberc" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
								<font>%&nbsp;至</font>
								<input v-model="numberd" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
								<font>%&nbsp;</font>
							</ul>
						</div>
					</div>
					<div class="fankiu border-bottom dangeDiyu">
						<div class="content-food">
							<span>从项目尽调至放款不超过</span>
							<ul v-if="BianJi3==0" class="first">
								<li>
									<input readOnly="true" v-model="numberg" :placeholder="numberg" type="text" class="mint-field-core">
								</li>
							</ul>
							<ul v-if="BianJi3==1" class="last">
								<input v-model="numberg" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
								<font>天</font>
							</ul>
						</div>
					</div>
					<div class="fankiu border-bottom dangeDiyu">
						<div class="content-food">
							<span>地域要求</span>
							<ul v-if="BianJi3==0" class="first">
								<li>
									<input readOnly="true" v-model="numberh" placeholder="暂无填写" type="text" class="mint-field-core">
								</li>
							</ul>
							<div v-if="BianJi3==1" class="xiaolv anli">
								<ul>
									<textarea placeholder="请填写地域要求如：长三角、珠三角、北京" class="mint-field-core ziyuanChongzu" v-model="texta"></textarea>
								</ul>
							</div>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div class="fankiu border-bottom dangeDiyu">
						<div class="content-food">
							<span>借债主体是</span><span ref="text4" class="lasst"></span>
							<ul v-if="BianJi4==0" class="first">
								<li>
									<input readOnly="true" v-model="numberi" placeholder="暂无填写" type="text" class="mint-field-core">
								</li>
							</ul>
							<div v-if="BianJi4==1" class="xiaolv anli">
								<ul>
									<textarea placeholder="请填写资金出借方的公司全称" class="mint-field-core ziyuanChongzu" v-model="texta"></textarea>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<box></box>
				<div class="butten">
					<ul>
						<li><span @click.stop="liuYan()">留言</span></li>
					</ul>
				</div>
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	import { MessageBox } from 'mint-ui';
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
			userContent:{
//				type:Object
			},
			uid:{}
		},
		data () {
			return {
				data:"",
				imgs:"",
				x:false,
				z:false,
				y:1,			//判断是否选择标签；》=1为选择；
				BianJi:'0',
				BianJi2:"0",
				BianJi3:"0",
				BianJi4:"0",
				BianJi5:'0',
				BiaoQian:"",
				numbera:"",
				numberb:"",
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberh:"",
				numberi:"",
				numberj:"",
				numberk:"",
				numberToa:"",
				numberTod:"",
				numberToc:"",
				texta:'',
				textc:"",
				textd:"",
				fankui:"45",
				genjin:"458",
				SuozaiHangye:"",
				introductionB:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				urlName:"Dingzeng",
				typeLi:"",
				biaoQianID:[],		//储存标签id
				biaoQianid:'',		//储存标签id字符串
				oDbiaoQianID:'',		//后台获取的储存标签id
				
				biaoQianID1:[],		//储存标签id
				biaoQianID2:[],		//储存标签id
				scrollTop:"",
			}
		},
		mounted(){
			Indicator.open({spinnerType: 'fading-circle'});
			console.log(this.userContent)
//			个人资料
			var params={
//	    		token:this.userContent.token,
	    		uid:this.uid
	    	}
			this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
				Indicator.close();
				this.data=res.body.data;
				
				this.imgs=res.body.data.photo.url;
				
				this.numberTod='营收收入不低于'+this.data.info.profit_min+'亿元';  //要插到页面的
				this.numberToc='净利润不低于'+this.data.info.revenue_min+'万元';				//要插到页面的地区
				
				this.numbere=this.data.info.fund_min;//原来的数据
				this.numberf=this.data.info.fund_max;//原来的数据
				this.numberj=this.numbere+'% - '+this.numberf+'%'
				
				this.numberg=this.data.info.loan_time+'天';
				
				this.numberh=this.data.info.territory//地域要求	原来的数据
				
				this.numberi=this.data.info.borrow//请填写资金出借方的公司全称	原来的数据
				
				var SuozaiHangye=this.data.info.investment_way;		//投资方式		原来的数据字符串
				this.SuozaiHangye=SuozaiHangye.split(',');
				for(var i=0; i<SuozaiHangye.length; i++){
					if(SuozaiHangye[i]==4){
						this.x=true;
					}
					if(SuozaiHangye[i]==5){
						this.z=true;
					}
				}
				this.$nextTick(function(){
					var images = this.$refs.images;
					if (images.clientWidth>images.clientHeight) {
						images.style.height="100%"
						images.style.width="auto"
					}else{
						images.style.width="100%"
						images.style.height="auto"
					}
				});
				console.log(res);
			},function(res){
				Indicator.close();
			    console.log(res);
			})
//			this.$refs.box.addEventListener('scroll', this.handleScroll)	//做一个scroll监听
		},
		methods:{
			handleScroll(){
//				this.scrollTop = this.$refs.box.scrollTop
//				sessionStorage.setItem("gerenZiliaoH",scrollTop)
//			  	console.log(sessionStorage.getItem("gerenZiliaoH"))
			},
			yijianHind(){
				history.go(-1)
			},
			baocun(){
				alert('保存成功')
			},
			zuoshiBlock(){
				this.tucaoShow=true;
			},
			dingzengBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYan(){
				window.location.href="#/fankuixinxi/"+this.userContent.token+"/"+this.uid+"/"+this.data.uname;
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
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
//			this.$refs.box.scrollTop=0;
//			this.$refs.box.scrollTop=this.scrollTop
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
			box
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
		z-index:1500;
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
			z-index:1600;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding:0 0.16rem 0 0.16rem;
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
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.searchBox {
				/*position:absolute;
				top:0;
				left:0;*/
				width:100%;
			    padding:0.26rem 0 0.18rem 0;
			    background-image:url("../img/bgbg.png");
			    background-size:100%;
			    background-position:0 -0.2rem;
			    display:flex;
			    z-index:100;
			    .home-search {
			    	width:0.62rem;
			    	height:0.62rem;
				    background: #ffffff;
				    margin-left:4.9%;
				    border-radius:0.06rem;
				    overflow:hidden;
				    img{
				    	/*width:100%;
				    	height:100%;*/
				    }
				}
				.header-name{
					padding-left:0.11rem;
					height:100%;
					color:#fff;
					font{
						font-size:0.2rem;
						line-height:0.34rem;
					}
					.header-content{
						margin-top:0.06rem;
						font-size:0.16rem;
						span{
							&:first-child{
								display:inline-block;
								padding-right:0.13rem;
							}
						}
					}
				}
				.jifen{
					width:0.75rem;
					height:0.15rem;
					position:absolute;
					top:0.58rem;
					right:0.16rem;
					font-size:0.12rem;
					display:flex;
					align-items:center;
					color:#fff;
					font{
						display:inline-block;
						width:0.15rem;
						height:0.15rem;
						background-image:url("../img/jifen.png");
						background-size:100% 100%;
						margin:-0.02rem 0.06rem 0 0;
					}
				}
			}
			.guQuan{
				width:100%;
				margin:0 auto;
			}
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.15rem 5%;
					background:#fff;
					span{
						font-size:0.18rem;
						line-height:0.18rem;
					}
					.lasst{
						font-size:0.14rem;
						float:right;
						color:#ff7a59;
					}
					.first{
						padding-top:0.14rem;
						height:0.31rem;
						display:flex;
						justify-content:space-between;
						li{
							width:100%;
							height:0.31rem;
							float:left;
							font-size:0.16rem;
							display:inline-block;
							.mint-field-core::-webkit-input-placeholder{
							}
							.mint-field-core{
								width:100%;
								height:100%;
								line-height:0.3rem;
							}
						}
					}
					.liangdian_1{
						width:100%;
						padding-top:0.14rem;
						.last{
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
								font-size:0.14rem;
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
								border:1px solid #d2d2d2;
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
								margin:0.16rem 0 0 0;
							}
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
						background-image:url("../img/biaoti.png");
						background-size:100% 100%;
					}
				}
			}
			
			.dangeDiyu{
				.content-food{
					.first{
						li{
							width:100%;
							.mint-field-core::-webkit-input-placeholder{
							  color: #787777;
							}
							.mint-field-core{
								width:100%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
							}
						}
					}
					.type-conts{
						flex:1;
						padding:0.16rem 0 0 0;
						background:#fff;
						font-size:0.14rem;
						ul{
							width:100%;
							overflow:hidden;
							color: #787777;
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
						}
					}
					.last{
						padding-top:0.1rem;
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
				}
			}
			.type-content{
				width:100%;
				height:auto;
				background:#fff;
				display:flex;
				.type-cont{
					flex:1;
					padding:0 5%;
					span{
						display:block;
						margin:0.26rem 0 0.06rem 0.1rem;
					}
					ul{
						.mint-field-core{
							border:1px solid #2C3E50;
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
			   	}
			}
			.sousuo-content{
				width:100%;
				height:auto;
				background:#fff;
				.content-header{
					padding:0.08rem 5%;
					font-size:0.18rem;
					span{
						line-height:0.3rem;
						&:last-child{
							display:inline-block;
							float:right;
							font-size:0.14rem;
							color:#ff7a59;
						}
					}
				}
				.xiaolv{
					width:100%;
					span{
						line-height:0.16rem;
					}
					ul{
						padding:0.05rem 5%;
						li{
							width:100%;
						}
						.mint-field-core::-webkit-input-placeholder{
						  color: #787777;
						}
						.mint-field-core{
							width:100%;
							height:100%;
							text-align:left;
							background:#fff;
							border-radius:0;
							color:#787777;
							font-size:0.16rem;
						}
						.ziyuanChongzu{
							resize: none;
							min-height:1.02rem;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
					}
					ul{
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
			}
			.zhaiQuan{
				width:100%;
				margin:0 auto;
				.bottom-a{
					margin-bottom:0.06rem;
				}
				.content-touzi{
					flex:1;
					font-size:0.14rem;
					background:#fff;
					ul{
					width:100%;
					margin-top:0.1rem;
					height:0.37rem;
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
				.shouru{
					width:100%;
					.anli-list{
						padding:0 5%;
						&:last-child{
							padding-bottom:0.16rem;
						}
						.ziyuanChongzu{
							resize: none;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
						.mint-field-core{
							width:100%;
							height:0.2rem;
							text-align:left;
							background:#fff;
							border-radius:0;
							color:#787777;
							font-size:0.16rem;
						}
					}
					ul{
						padding:0 5%;
						padding-bottom:0.16rem;
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
					}
				}
			}
			.butten{
				width:100%;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.21rem 0 0.28rem 0;
						text-align:center;
						span{
							display:inline-block;
							padding:0.11rem 0.4rem;
							background:#ff7a59;
							color:#fff;
							border-radius:0.04rem;
							border:0.008rem solid #cccccc;
						}
					}
				}
			}
		}
	}
</style>


