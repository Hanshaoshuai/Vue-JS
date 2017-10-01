<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>金融快讯</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>做市</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="dingzengGo()">
					<div class="content-header">
						<span>定增</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="zhiyaGo()">
					<div class="content-header">
						<span>股权质押</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="zhuangguGo()">
					<div class="content-header">
						<span>转老股</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="zulinGo()">
					<div class="content-header">
						<span>融资租赁</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="diaoyanGo()">
					<div class="content-header">
						<span>公司调研</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="shuangchuangGo()">
					<div class="content-header">
						<span>双创债</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<div class="times border-topbottom">
					<span class="times_1">9月12号</span>
					<!--<span class="text-center">1小时前</span>-->
					<!--<span>发布</span>-->
					<div class="times-name">
						<!--<span>{{fankui}}反馈</span>-->
						<span class="text-center">{{genjin}}已投递</span>
					</div>
				</div>
				<box></box>
				<div style="width:100%;height:0.5rem;"></div>
			</div>
			<dingzengzuoshi ref="dingzengzuoshiShow"></dingzengzuoshi>
			<zhuanlaogu ref="zhuanlaoguShow"></zhuanlaogu>
			<diaoyan ref="diaoyanShow"></diaoyan>
			<shuangchuang ref="shuangchuangShow"></shuangchuang>
			<zhiya ref="zhiyaShow"></zhiya>
			<zulin ref="zulinShow"></zulin>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import dingzengzuoshi from "./DingzengZuoshi.vue";
	import zhuanlaogu from "./ZhuanlaoGu.vue";
	import diaoyan from "./Diaoyan.vue";
	import shuangchuang from "./ShuangChuang.vue";
	import zhiya from "./ZhiYa.vue";
	import zulin from "./ZuLin.vue";
	
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
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			zuoshiGo(){
				this.$refs.dingzengzuoshiShow.zuoshiBlock();
			},
			dingzengGo(){
				this.$refs.dingzengzuoshiShow.dingzengBlock();
			},
			zhiyaGo(){
				this.$refs.zhiyaShow.zhiyaBlock();
			},
			zhuangguGo(){
				this.$refs.zhuanlaoguShow.zhuanlaoguBlock();
			},
			zulinGo(){
				this.$refs.zulinShow.zulinBlock();
			},
			diaoyanGo(){
				this.$refs.diaoyanShow.diaoyanBlock();
			},
			shuangchuangGo(){
				this.$refs.shuangchuangShow.shuangchuangBlock();
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
			dingzengzuoshi,
			zhuanlaogu,
			diaoyan,
			shuangchuang,
			zhiya,
			zulin
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
		z-index:200;
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
			z-index:210;
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
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.sousuo-content{
				width:100%;
				height:auto;
				background:#fff;
				padding-bottom:0.2rem;
				/*margin:0.05rem 0;*/
				/*display:flex;*/
				/*flex-direction:column;*/
				.content-header{
					padding:0.08rem 0.2rem;
					font-size:0.2rem;
					span{
						line-height:0.3rem;
					}
				}
				.xiaolv{
					padding:0 0.2rem;
					span{
						line-height:0.16rem;
					}
				}
				.anli{
					padding-left:0.4rem;
					.anli-list{
						display:flex;
						width:100%;
						span{
							flex:1;
							line-height:0.2rem;
						}
						/*.center{
							padding:0 0.1rem;
						}*/
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


