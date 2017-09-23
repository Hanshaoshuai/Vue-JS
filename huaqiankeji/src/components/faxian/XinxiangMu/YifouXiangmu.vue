<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><</span>
				<span>已否决项目</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<img class="border" src="" alt="" />
						<span>&nbsp;&nbsp;王美丽</span>
						<span>&nbsp;&nbsp;投资经理</span>
						<span>&nbsp;&nbsp;董秘</span>
					</div>
				</div>
				<div class="ContentText border-topbottom" @click.stop="xiangqing()">
					<div class="TextMame">
						<div class="margin">
							<span class="texts">天立泰</span>
							<span class="texts">定增</span>
						</div>
						<div class="TypeList">
							<span class="texts">融资6000万估值8亿</span>
						</div>
					</div>
					<div class="BottomText">
						<span class="texts">投资亮点详情（不超过四行）</span>
					</div>
					<div class="jieshu"><span>结束项目</span></div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">领天</span>
					<span class="text-center">1小时前</span>
					<span>发布</span>
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>
						<span class="text-center">{{genjin}}跟进</span>-->
					</div>
				</div>
				<box></box>
			</div>
			<xiangmuxiangqing ref="xiangqingShow"></xiangmuxiangqing>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import xiangmuxiangqing from "./XiangmuXiangqing.vue";
	
	
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
			yifouBlock(){
				this.tucaoShow=true;
			},
			xiangqing(){
				this.$refs.xiangqingShow.xiangqingBlock();
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
			xiangmuxiangqing
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
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:1000;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			z-index:1100;
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
			.ContentText{
				width:100%;
				background:#ffffff;
				position:relative;
				font-size:0.16rem;
				.TextMame{
					width:100%;
					height:auto;
					.margin{
						width:100%;
						padding-top:0.2rem;
						text-align:center;
						span{
							display:inline-block;
							padding-right:0.06rem;
							line-height:0.22rem;
						}
					}
					.TypeList{
						width:100%;
						text-align:center;
						span{
							display:block;
							line-height:0.22rem;
						}
					}
				}
				.BottomText{
					width:100%;
					text-align:center;
					padding:0.2rem 0;
				}
				.jieshu{
					position:absolute;
					right:0.04rem;
					bottom:0.2rem;
					span{
						padding:0.06rem 0.1rem;
						background:#25A4BB;
						color:#fff;
					}
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
		}
	}
</style>


