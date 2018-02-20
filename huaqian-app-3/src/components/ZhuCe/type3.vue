<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<!--<div class="xiangmu-header" @click.stap="yijianHind()">-->
			<div class="xiangmu-header">
				<!--<span class="xiangmu-left"><img src="./img/back.png"/></span>-->
				<span>合格投资人</span>
			</div>
			<div class="type-content-list">
				<div class="type-content ferst">
					<div class="type-cont border-bottom">
						<div class="tuse">
							<font></font><span>您倾向于生么样的投资方式？<a>（可多选）</a></span>
						</div>
						<div class="content-touzi"  ref="foods">
							<ul>
								<li class="src0" id='1' @click.stap="types('0','1')">
									<span>定增</span><font class="img1"></font>
								</li>
								<li class="src0" id="2" @click.stap="types('1','2')">
									<span>接老股</span><font class="img1"></font>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>
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
				<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>
				<div class="type-content">
					<div class="type-cont border-bottom">
						<div class="tuse">
							<font></font><span>您是否有新三板账户？<a></a></span>
						</div>
						<div class="content-touzi" ref="foods1">
							<ul>
								<li class="src0" id='1' @click.stap="types1('0','1')">
									<span>有</span><font class="img1"></font>
								</li>
								<li class="src0" id="2" @click.stap="types1('1','2')">
									<span>没有</span><font class="img1"></font>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您是否了解投资新三板企业的风险？<a></a></span>
						</div>
						<div class="content-touzi" ref="foods2">
							<ul>
								<li class="src0" id='1' @click.stap="types2('0','1')">
									<span>了解</span><font class="img1"></font>
								</li>
								<li class="src0" id="2" @click.stap="types2('1','2')">
									<span>不了解</span><font class="img1"></font>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
				<div class="type-food" @click.stop="ToHoom()">
					<div class="type-food-text">
						<span>提交审核</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			XiajiCanshu:{
//				type:Object
			}
		},
		data () {
			return {
				y:1,			//判断是否选择标签；》=1为选择；
				o:0,
				p:0,
				biaoQianID:[],		//储存标签id
				biaoQianID1:"",		//储存标签id
				numbere:"",
				numberf:"",
				block:false,
				texta:"",
				textb:"",
				showFlag:true,
				board:"",
				know_risk:""
//				onlyContent:true,
//				times:20177111129
			}
		},
		mounted(){
	//		XiajiCanshu{
	//			id:用户id,
	//			type:用户类型,
	//	        phone:用户电话,
	//	        nickname:res.body.data.nickname,
	//	        token:用户token；
	//		}
			
			this.$nextTick(function() {
//				var typeLi=this.$refs.foods.getElementsByTagName("li")[0];
//				this.biaoQianID[0]=typeLi.id;
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
			xuanze(index){
				
			},
			ToHoom(){
				var ok=0;
				var CanShu={				//给下级要传的参数
					numbere:this.numbere,
					numberf:this.numberf,
					biaoQianID:this.biaoQianID,
					board:this.board,
					know_risk:this.know_risk
				}
				var datas={
//					id:this.XiajiCanshu.id,			//	uid	是	[string]
//					ctype:this.XiajiCanshu.type,	//	用户类型	是	[string]
					id:localStorage.getItem("userID"),			//	uid	是	[string]
					ctype:localStorage.getItem("type"),	//	用户类型	是	[string]		
					investment_way:this.biaoQianID1,//	投资方式	是	[string]		
					single_project_max:this.numberf,//	单笔投资最大值	是	[string]		
					single_project_min:this.numbere,//	单笔投资最小值	是	[string]		
					board:this.board,				//	是否有新三板账户 1有 2 没有	是	[string]		
					know_risk:this.know_risk,		//	是否了解新三板风险 1 了解， 2 不了解	是	[string]
				}
				for(var item in CanShu){			//判断填写信息是否完整Ok=1；标签必选
					if(!CanShu[item]=="" && this.y>=1){
						ok=1;
					}else{
						Toast("请填写完整您的信息！是否已选标签...");
						return;
					}
				}
				if(ok=1){
					this.$http.post(URL.path+'regist/personal',datas,{emulateJSON:true}).then(function(res){
						if(res.body.returnCode=='200'){
							if(localStorage.getItem("panduanWanshan")=='3'){
								
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
					    console.log(res.status);
					})
				}
			},
			types(index,id){
				var typeLi=this.$refs.foods.getElementsByTagName("li");
				var length=typeLi.length;
//				for(var i=0; i<length; i++){
//					typeLi[i].setAttribute("class","src0");
//				}
//				typeLi[id].setAttribute("class","src1")
				
				if(typeLi[index].getAttribute("class")=="src1"){			//判断是否选择标签；》=1为选择；
					typeLi[index].setAttribute("class","src0")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID[z]==id){
							this.biaoQianID.splice(z,1);
//							console.log(this.biaoQianID)
							this.biaoQianID1=this.biaoQianID.join()
//							console.log(this.biaoQianID1)
							this.y-=1
							break;
						}
					}
				}else{
					typeLi[index].setAttribute("class","src1");
					this.y+=1;
					for(var i=0; i<this.y; i++){
						if(this.biaoQianID[i]!=id){
							this.biaoQianID.push(id)
							break;
						}
					}
//					console.log(this.biaoQianID)
					this.biaoQianID1=this.biaoQianID.join()
//					console.log(this.biaoQianID1)
				}
			},
			types1(index,id){
				var typeLi=this.$refs.foods1.getElementsByTagName("li");
				var length=typeLi.length;
				this.board=id;
//				console.log(this.board)
				for(var i=0; i<length; i++){
					typeLi[i].setAttribute("class","src0");
				}
				typeLi[index].setAttribute("class","src1")
				
			},
			types2(index,id){
				var typeLi=this.$refs.foods2.getElementsByTagName("li");
				var length=typeLi.length;
				this.know_risk=id;
//				console.log(this.know_risk)
				for(var i=0; i<length; i++){
					typeLi[i].setAttribute("class","src0");
				}
				typeLi[index].setAttribute("class","src1")
				
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


