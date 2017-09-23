<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="yijian">
			<div class="yijian-header">
				<span class="fanhui-butten" @click.stap="yijianHind()"><</span>
				<span>投资人反馈</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu">
					<div class="content-food" @click.stap="xinxiTo()">
						<img class="border" src="" alt="" />
						<span>&nbsp;&nbsp;次阅读</span>
						<span>&nbsp;&nbsp;投资经理</span>
						<span>张经理</span>
					</div>
				</div>
			</div>
			<!--<fankuixinxi ref="xinxiShow"></fankuixinxi>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
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
			fankuiBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				window.location.href="#/fankuixinxi";
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
	.yijian{
		position:fixed;
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:900;
		.yijian-header{
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
			z-index:1000;
			.fanhui-butten{
				position:absolute;
				display:inline-block;
				padding-left:0.3rem;
				top:0;
				left:0;
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
						&:last-child{
							float:right;
							margin-right:0.4rem;
						}
					}
				}
			}
		}
	}
</style>


