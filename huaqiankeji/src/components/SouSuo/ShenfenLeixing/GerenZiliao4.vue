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
				<div class="guQuan">
					<div ref="guanzhuLingyu">
						<div class="fankiu border-topbottom">
							<div class="content-food">
								<span>专注行业</span>
								<span ref="bianji" class="lasst"></span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<p class="mint-field-core">{{numbera}}</p>
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
					</div>
				</div>
				<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
				<div class="guQuan">
					<div ref="chanYe" class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>产业资源</span><span ref="bianji3" class="lasst"></span>
						</div>
						<div class="xiaolv anli">
							<ul class="first">
								<li>
									<textarea readOnly="true" placeholder="暂无填写" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
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
									<textarea readOnly="true" placeholder="暂无填写" class="mint-field-core ziyuanChongzu" v-model="textd"></textarea>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<box></box>
				<div v-if="this.data.id!=userID" class="butten">
					<ul v-if="nones!='ok'">
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
				userID:"",
				nones:''
			}
		},
		mounted(){
			this.nones=this.$route.params.type;
			this.userID=localStorage.getItem("userID");
			Indicator.open({spinnerType: 'fading-circle'});
//			console.log(this.userContent)
//			个人资料
			var params={
//	    		token:this.userContent.token,
	    		uid:this.uid
	    	}
			this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
				Indicator.close();
				this.data=res.body.data;
				this.imgs=res.body.data.photo.url;
				
				this.textc=this.data.info.resources;
				this.textd=this.data.info.restructuring;
				
				var SuozaiHangye=this.data.info.interested
				var x=[];
				var y=[];
				for(var item in SuozaiHangye){
//					console.log(SuozaiHangye[item].title)
//					console.log(SuozaiHangye[item].id)
					x.push(SuozaiHangye[item].id);
					y.push(SuozaiHangye[item].title);
				}
				this.oDbiaoQianID=x.join(',');
				this.numbera=y.join('、');
//				console.log(this.oDbiaoQianID2);
//				console.log(res);
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
				Indicator.close();
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
			box
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
			    	position:relative;
			    	width:0.62rem;
			    	height:0.62rem;
				    background: #ffffff;
				    margin-left:4.9%;
				    border-radius:0.06rem;
				    overflow:hidden;
				    img{
				    	position:absolute;
				    	top:0;
				    	right:0;
				    	left:0;
				    	bottom:0;
				    	margin:auto;
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
						/*height:0.31rem;*/
						display:flex;
						justify-content:space-between;
						li{
							width:100%;
							/*height:0.31rem;*/
							float:left;
							font-size:0.16rem;
							display:inline-block;
							.mint-field-core::-webkit-input-placeholder{
							}
							.mint-field-core{
								width:100%;
								color: #787777;
								/*height:100%;*/
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


