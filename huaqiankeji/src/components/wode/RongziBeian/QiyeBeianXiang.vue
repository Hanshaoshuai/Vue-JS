<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>备案详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<box></box>
				<div ref="guanzhuLingyu" class="fankiu-content">
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业全称</div>
						<div class="last">
							<textarea readOnly="true" placeholder="请输入企业全称" class="mint-field-core" v-model="texta"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>企业简称</div>
						<div class="last">
							<textarea readOnly="true" placeholder="请输入企业简称" class="mint-field-core" v-model="textb"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>融资总额</div>
						<div class="last number">
							<input readOnly="true" v-model="textc" placeholder="输入数字" number="true" type="number" class="mint-field-core">
							<span>万元</span>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>财顾费用协定</div>
						<div class="last neirong">
							<textarea readOnly="true" placeholder="填写与企业约定的财顾费用条款，例如：实现融资额的3%" class="mint-field-core" v-model="textd"></textarea>
						</div>
					</div>
					<div class="zhuying_1">
						<div class="ferst"><span>*</span>有效投递认定期</div>
						<div class="last neirong">
							<textarea readOnly="true" placeholder="例如：投资人开始跟进项目后一年内做出的投资为有效投资" class="mint-field-core" v-model="texte"></textarea>
						</div>
					</div>
				</div>
				<div v-show="showFlag" class="butten">
					<ul @click.stop="XiuGai()">
						<li><span>修&nbsp;&nbsp;改</span></li>
					</ul>
				</div>
				<div v-show="showFlag1" class="butten">
					<ul @click.stop="BeiAn()">
						<li><span>重新申请备案</span></li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../../box.vue";
	
	
	export default {
		props:{
			token:{
//				type:Object
			}
		},
		data () {
			return {
				type:"",		//创建类型
				x:"0",			//字的个数
				texta:"",
				textb:"",
				textc:"",
				textd:"",
				texte:"",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:true,
				showFlag1:false,
				tucaoShow:true,
				xingXi:{			//给下级要传的参数
					text:"亲，请您在电脑上登录www.qironghome.com,上传最新商业计划书PPT，便于投资人查看，确保融资沟通顺利。如已上传，请忽略。",
					x:"不再提醒",
					y:"确定",
					m:true,
					u:true
				},
				content:"",			//给下级要传的参数
				XiangmuID:"1",
			}
		},
		mounted(){
			console.log(this.$route.params.type)
			console.log(this.token)
			if(this.$route.params.type!=='2'){
				this.showFlag=false;
			}
			this.type=this.$route.params.type
			this.$nextTick(function() {
				
			});
//			this.token=this.$route.params
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			XiuGai(){
				var textInputs = this.$refs.guanzhuLingyu.getElementsByClassName("mint-field-core");
				console.log(textInputs)
				var length=textInputs.length;
				this.showFlag=false;
				this.showFlag1=true;
				for(var i=0; i<length; i++){
					textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
				}
				textInputs[0].focus();
			},
			BeiAn(){
				var CanShu={				//给下级要传的参数
					texta:this.texta,
					textb:this.textb,
					textc:this.textc,
					textd:this.textd,
					texte:this.texte,
				}
				for(var item in CanShu){		//判断填写信息是否完整Ok=1；标签必选
					if(CanShu[item]==""){
						Toast("请填写完整您的信息！是否已选标签...");
						return;
					}
				}
				this.$http.post(URL.path+'finance/create',datas,{emulateJSON:true}).then(function(res){
					CanShu.XiangmuID=res.body.data
					this.content=this.$refs.pipeiShow;
					this.$refs.tishiShow.tishiBlock(CanShu);//CanShu是下级要传的参数
					console.log(res);
				},function(res){
				    console.log(res.status);
				})
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
						/*font-weight:bold;*/
					}
				}
			}
			.fankiu-content{
				width:89.4%;
				margin:0 auto;
				padding-bottom:0.2rem;
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
							font-size:0.2rem;
							color:#fff;
						}
					}
				}
			}
		}
	}
</style>


