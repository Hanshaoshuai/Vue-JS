<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><</span>
				<span>项目详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>公司名称及代码</span>
					</div>
				</div>
				<div class="zhuying">
					<div class="zhuying_1">
						<div class="ferst">主营业务</div>
						<div class="last border">
							
						</div>
					</div>
				</div>
				<div class="yeji">
					<div class="yeji_1">
						上一财年营收、净利润
					</div>
				</div>
				<div class="zonge">
					<div class="zonge_1">
						今年预计营收、净利润
					</div>
				</div>
				<div class="yeji">
					<div class="yeji_1">
						融资总额
					</div>
				</div>
				<div class="zonge">
					<div class="zonge_1">
						票面利润
					</div>
				</div>
				<div class="zonge">
					<div class="zonge_1">
						偿还周期
					</div>
				</div>
				<div class="zonge">
					<div class="zonge_1">
						是否转股
					</div>
				</div>
				<div class="yeji">
					<div class="yeji_1">
						所在城市
					</div>
				</div>
				<box></box>
				<div class="times border-topbottom">
					<span class="times_1">1小时前</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}跟进</span>
					</div>
				</div>
				<box></box>
				<div class="butten">
					<ul>
						<li><span @click.stop="chongXin()">重新编辑</span></li>
						<li><span @click.stop="jiXu()">继续编辑</span></li>
						<li><span @click.stop="jiaoHuan()">换名片</span></li>
						<li><span @click.stop="baoMing()">我报名</span></li>
						<li><span @click.stop="buGen()">暂不跟进</span></li>
						<li><span @click.stop="liuYan()">留言询问</span></li>
					</ul>
				</div>
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
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
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:false,
			}
		},
		methods:{
			yijianHind(){
				this.tucaoShow=false;
			},
			shuangchuangBlock(){
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
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:2200;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#fff;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			z-index:2300;
			.xiangmu-left{
				position:absolute;
				padding-left:0.3rem;
				display:inline-block;
				top:0;
				left:0;
			}
			.xiangmu-right{
				padding:0.08rem 0.1rem;
				border:0.005rem solid #93999F;
				line-height:0.12rem;
				font-size:0.14rem;
				position:absolute;
				top:0.09rem;
				right:0.1rem;
			}
		}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.1rem 0.2rem;
					line-height:0.3rem;
					font-size:0.14rem;
					background:#fff;
					img{
						vertical-align:top;
						width:0.3rem;
						height:0.3rem;
					}
					span{
						font-weight:bold;
					}
				}
			}
			.zhuying{
				width:100%;
				height:1.6rem;
				background:#fff;
				display:flex;
				.zhuying_1{
					flex:1;
					padding:0.2rem;
					.ferst{
						font-size:0.16rem;
						padding-bottom:0.06rem;
					}
					.last{
						padding:0.2rem;
					}
				}
				
			}
			.liangdian{
				width:100%;
				height:1.4rem;
				background:#fff;
				display:flex;
				.liangdian_1{
					flex:1;
					padding:0.2rem;
					.ferst{
						font-size:0.16rem;
						padding-bottom:0.06rem;
					}
					.last{
						padding:0.2rem;
					}
				}
			}
			.yeji{
				width:100%;
				background:#fff;
				display:flex;
				.yeji_1{
					flex:1;
					padding:0.2rem;
				}
			}
			.zonge{
				width:100%;
				background:#fff;
				display:flex;
				.zonge_1{
					flex:1;
					padding:0.2rem;
				}
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
			.times{
				width:100%;
				height:0.3rem;
				background:#fff;
				line-height:0.3rem;
				font-size:0.12rem;
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
			.butten{
				width:100%;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.08rem 0;
						text-align:center;
						span{
							display:inline-block;
							padding:0.06rem 0.16rem;
							background:#00A0DC;
							color:#fff;
							border-radius:0.04rem;
						}
					}
				}
			}
		}
	}
</style>


