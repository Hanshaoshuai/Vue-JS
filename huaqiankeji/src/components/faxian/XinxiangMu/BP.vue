<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>BP详情</span>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="sousuo-content border-topbottom">
					<ul ref="index1" class="content-header border-bottom" index="type1"  @click.stap="typeName('0')">
						<li>
							<div class="content-top">
								<span>天立泰&nbsp;(34565645)</span>
								<span>做市</span>
								<font>已投递</font>
							</div>
							<div class="content-bottom">
								<span>1小时前</span>
							</div>
						</li>
					</ul>
				</div>
				<box></box>
				<div style="width:100%;height:0.5rem;"></div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				x:'1',
				urlName:"Dingzeng",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				boxUl:"",
				types:{
					type0:"Zuoshi",
					type1:"Dingzeng",
					type2:"ZhiYa",
					type3:"ZhuanlaoGu",
					type4:"ZuLin",
					type5:"Diaoyan"
				}
			}
		},
		mounted() {
			
			this.$nextTick(function() {
				this.boxUl=this.$refs.box.getElementsByTagName("ul");
				console.log(this.boxUl)
			})
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			typeName(id){
				var Uls=this.boxUl[id]
				this.types['type'+id]
				console.log(this.types['type'+id])
				window.location.href="#/wode/jilu/0/types";
//				this.$refs.dingzengzuoshiShow.zuoshiBlock();
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
		z-index:500;
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
			z-index:510;
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
				background:#fff;
				/*margin:0.05rem 0;*/
				/*display:flex;*/
				/*flex-direction:column;*/
				.content-header{
					width:96%;
					margin:0 auto;
					padding:0.16rem 0;
					font-size:0.16rem;
					li{
						width:91.7%;
						margin:0 auto;
						color:#8c8c8c;
						.content-top{
							width:100%;
							height:0.22rem;
							display:flex;
							span{
								display:inline-block;
								width:0.97rem;
								&:first-child{
									color:#323232;
									font-size:0.18rem;
									flex:1;
								}
							}
							font{
								display:inline-block;
								width:0.58rem;
								font-size:0.12rem;
								color:#717070;
								line-height:0.18rem;
							}
						}
						.content-bottom{
							span{
								font-size:0.12rem;
								color:#cfcfcf;
							}
						}
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


