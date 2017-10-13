<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="../img/back.png"/></span>
				<span>个人资料</span>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="guQuan">
					<div class="fankiu border-topbottom">
						<div class="content-food touBiao">
							<span>股权投资</span>
						</div>
					</div>
					<div style="width:100%;height:0.06rem;"></div>
					<div ref="guanzhuLingyu">
						<div class="fankiu border-topbottom">
							<div class="content-food">
								<span>关注领域</span>
								<span ref="bianji" class="lasst"></span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input readOnly="true" v-model="numbera" placeholder="食品、食品、食品" type="text" class="mint-field-core">
									</li>
									<!--<li>
										<input readOnly="true" v-model="numberb" placeholder="食品" type="text" class="mint-field-core">
									</li>
									<li>
										<input readOnly="true" v-model="numberc" placeholder="食品" type="text" class="mint-field-core">
									</li>-->
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom">
							<div class="content-food">
								<span>投资阶段</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input readOnly="true" v-model="numberd" placeholder="天使、VC、PE" type="text" class="mint-field-core">
									</li>
									<!--<li>
										<input readOnly="true" v-model="numbere" placeholder="VC" type="text" class="mint-field-core">
									</li>
									<li>
										<input readOnly="true" v-model="numberf" placeholder="PE" type="text" class="mint-field-core">
									</li>-->
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>单个投资额</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input readOnly="true" v-model="numberg" placeholder="2000万-5000万" type="text" class="mint-field-core">
									</li>
								</ul>
								<div v-if="BianJi==1" class="type-conts">
									<ul>
										<input v-model="numbere" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
										<font>万&nbsp;至</font>
										<input v-model="numberf" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
										<font>万&nbsp;</font>
									</ul>
								</div>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>地域要求</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input readOnly="true" v-model="numberh" placeholder="长三角、珠三角、北京" type="text" class="mint-field-core">
									</li>
								</ul>
								<div v-if="BianJi==1" class="xiaolv">
									<ul>
										<textarea placeholder="请填写地域要求如：长三角、珠三角、北京" class="mint-field-core ziyuanChongzu" v-model="texta"></textarea>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div ref="chanYe" class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>产业资源</span><span ref="bianji3" class="lasst"></span>
						</div>
						<div class="xiaolv anli">
							<ul class="first">
								<li>
									<textarea readOnly="true" placeholder="请用文字表述您所在机构能给企业带来的产业资源" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
								</li>
							</ul>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div ref="chongGou" class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>并购重组</span><span ref="bianji4" class="lasst"></span>
						</div>
						<div class="xiaolv anli">
							<ul class="first">
								<li>
									<textarea readOnly="true" placeholder="请用文字表述您有意愿进行收购和出售的资产" class="mint-field-core ziyuanChongzu" v-model="textd"></textarea>
								</li>
							</ul>
						</div>
					</div>
				</div>
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
	import box from "../../box.vue";
	import { MessageBox } from 'mint-ui';
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
			userContent:{
//				type:Object
			}
		},
		data () {
			return {
				data:"",
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
				numberTob:"",
				numberToc:"",
				texta:'',
				textc:"",
				textd:"",
				fankui:"45",
				genjin:"458",
				introductionA:"",
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
				biaoQianid1:'',		//储存标签id字符串
				oDbiaoQianID1:'',		//后台获取的储存标签id
				
				biaoQianID2:[],		//储存标签id
				biaoQianid2:'',		//储存标签id字符串
				oDbiaoQianID2:'',		//后台获取的储存标签id
				scrollTop:"",
			}
		},
		mounted(){
			console.log(this.userContent)
//			个人资料
			var params={
	    		token:this.userContent.token,
	    	}
			this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
				this.data=res.body.data;
				var SuozaiHangye=this.data.info.interested;
				var fund_stage=this.data.info.fund_stage;
				console.log(SuozaiHangye);
				var x=[];
				var y=[];
				var x1=[];
				var y1=[];
				for(var item in SuozaiHangye){
					x.push(SuozaiHangye[item].id);
					y.push(SuozaiHangye[item].title);
				}
				for(var item in fund_stage){
					x1.push(fund_stage[item].id);
					y1.push(fund_stage[item].title);
				}
				this.oDbiaoQianID=x.join(',');
				this.numbera=y.join('、');
				
				this.oDbiaoQianID1=x1.join(',');
				this.numberd=y1.join('、');
				console.log(this.oDbiaoQianID1);
				console.log(res);
			},function(res){
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
				window.location.href="#/fankuixinxi/"+"dfgdfhd/12";
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
		z-index:220;
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
								color: #787777;
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
								color: #787777;
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
								color: #787777;
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
							color: #787777;
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


