<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>项目详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="sousuo-content border-topbottom" @click.stap="miMa()">
					<div class="content-header">
						<span>详情</span>
						<font></font>
					</div>
				</div>
				<box></box>
				<div class="tishi-bottom">
					<ul>
						<li class="border-first"></li>
						<li class="tishi-center">相似项目</li>
						<li class="border-first"></li>
					</ul>
				</div>
				<box></box>
				<div class="ContentText ContentText1" @click.stop="xiangmucont()">
					<div class="TextMame">
						<div class="margin">		<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 6：公司调研-->
							<span class="texts">应收账款</span>
							<!--<span v-if="item.type==2" class="texts">做市</span>
							<span v-if="item.type==3" class="texts">转老股</span>
							<span v-if="item.type==4" class="texts">股权质押</span>
							<span v-if="item.type==5" class="texts">融资租赁</span>
							<span v-if="item.type==6" class="texts">研报支持</span>
							<span v-if="item.type==7" class="texts">公司调研</span>-->
							<!--<span class="texts">* {{item.com_short.substr(1, 1)}} *</span>
							<span class="texts">（{{item.com_code.substr(0, 2)}} **** ）</span>-->
							<span class="texts">*次 *</span>
							<span class="texts">（郭德 **** ）</span>
							<span class="texts right">进行中</span>
						</div>
					</div>
					<div class="BottomText">
						<span class="texts">加肥加大今天的法社呢寄过来的房价高的委法法社呢寄过来的房价高的社呢寄过来的房法社呢寄过来的房价高的价高的 书法社呢寄过来法社呢寄过来的房价高的的房价高的健康的反光镜 苦尽甘来的几个</span>
					</div>
					<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
						<div class="tishi-left">
							<span>888</span>&nbsp;人浏览
						</div>
						<div class="tishi-right">
							<span>68&nbsp;申请</span>&nbsp;
							<span>66&nbsp;受理</span>
						</div>
					</div>
				</div>
				<div class="zhaiyao-food">
					<div class="ferst" @click.stop="shouchang()"><font></font><font>收藏</font></div>
					<div class="last" @click.stop="duijie()"><font></font><font>我要对接</font></div>
				</div>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../../box.vue";
	import { MessageBox } from 'mint-ui';
	
	export default {
		props:{
			token:{
//				type:Object
			}
		},
		data () {
			return {
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1);
			},
			miMa(){
				window.location.href="#/wode/shezhi/"+this.token+"/ShezhiMima";
//				this.tucaoShow=true;
			},
			lianXi(){
				window.location.href="#/wode/shezhi/"+this.token+"/LianxiWomen";
			},
			shouchang(){
				Toast("收藏成功")
//				this.$refs.xiangqingShow.xiangqingBlock();
			},
			duijie(){
				Toast("对接")
			},
//			tuiChu(){
//				MessageBox.confirm('您确定要退出登录吗?').then(action => {
//					localStorage.removeItem("userID");		//用户ID
//					localStorage.removeItem("token");		//用户token
//					localStorage.removeItem("phone");		//用户电话
//					localStorage.removeItem("type");		//用户类型
//					localStorage.removeItem("name");
//					localStorage.removeItem("photo");		//用户头像id
//					localStorage.removeItem("photourl");	//用户头像URL地址
//					localStorage.removeItem("panduanWanshan");
//					localStorage.removeItem("qiangZhi");
//					if(localStorage.getItem("typeID")){
//						localStorage.removeItem("typeID");
//					}
//					Toast('退出成功');
//					setTimeout(function(){
////						window.location.href="#/denglu"
////						history.go(0)
////						location.reload()
//						location.replace(document.referrer); 
//					},600)
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
		background:#f5f5f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:200;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:300;
			span{
				/*font-weight:bold;*/
			}
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
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			.sousuo-content{
				width:100%;
				height:auto;
				background:#fff;
				.content-header{
					padding:0.16rem 0.2rem;
					font-size:0.16rem;
					span{
						line-height:0.15rem;
						/*font-weight:bold;*/
					}
					font{
						float:right;
						width:0.16rem;
						height:0.17rem;
						/*background-image:url("../img/jiantou.png");*/
						background-size:100% 100%;
					}
				}
			}
			@import "../../../common/stylus/zhaiquan1.scss";
			.zhaiyao-food{
				.ferst{
					font{
			            &:first-child{
			                width:0.2rem;
			                height:0.2rem;
			                display:inline-block;
			                background-image:url('../img/shoucang.png');
			                background-size:100% 100%;
			                margin-top:0.04rem;
			                
			            }
			        }
				}
				.last{
			        font{
			            &:first-child{
			                width:0.2rem;
			                height:0.2rem;
			                display:inline-block;
			                background-image:url('../img/xiaoxi.png');
			                background-size:100% 100%;
			                margin-right:0.1rem;
			            }
			        }
			    }
			}
		}
	}
</style>


