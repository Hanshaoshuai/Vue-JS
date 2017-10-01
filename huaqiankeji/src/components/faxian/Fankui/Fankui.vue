<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="yijian">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>投资人反馈</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="fankiu">
					<div class="content-food border-bottom" @click.stap="xinxiTo()">
						<p>
							<img class="border" src="" alt="" />
							<font>6</font>
						</p>
						<span>&nbsp;&nbsp;次阅读</span>
						<span>&nbsp;&nbsp;投资经理</span>
						<span>&nbsp;&nbsp;张经理</span>
					</div>
					<div class="content-food border-bottom" @click.stap="xinxiTo()">
						<p>
							<img class="border" src="" alt="" />
							<font>6</font>
						</p>
						<span>&nbsp;&nbsp;次阅读</span>
						<span>&nbsp;&nbsp;投资经理</span>
						<span>&nbsp;&nbsp;张经理</span>
					</div>
				</div>
			</div>
			<!--<fankuixinxi ref="xinxiShow"></fankuixinxi>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
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
				res:"",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:false,
				datas:{}
			}
		},
		methods:{
			yijianHind(){
				this.tucaoShow=false;
			},
			fankuiBlock(datas){
				this.tucaoShow=true;
				this.datas=datas;
//				获取评论反馈列表
				console.log(URL.path)
				if(this.res==""){
					this.$http.post(URL.path+'chatcomment/comment_list',datas.token,{emulateJSON:true}).then(function(res){
						var data=res
						this.res=res;
						console.log("取到评论反馈列表");
					},function(res){
					    console.log(res);
					})
				}
			},
			xinxiTo(){
				console.log(this.datas);
				window.location.href="#/fankuixinxi/"+this.datas.token+'/'+"12";
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
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:900;
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
			z-index:30;
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
			.fankiu{
				width:100%;
				background:#fff;
				.content-food{
					width:95%;
					margin:0 auto;
					padding:0.14rem 0 0.08rem 0;
					line-height:0.46rem;
					font-size:0.16rem;
					p{
						display:inline-block;
						position:relative;
						font{
							display:inline-block;
							width:0.18rem;
							height:0.18rem;
							border-radius:0.15rem;
							background:#ff7a59;
							position:absolute;
							top:-0.08rem;
							right:-0.08rem;
							font-size:0.12rem;
							line-height:0.18rem;
							text-align:center;
							color:#fff;
						}
					}
					img{
						vertical-align:top;
						width:0.46rem;
						height:0.46rem;
					}
					/*span{
						&:last-child{
							float:right;
							margin-right:0.4rem;
						}
					}*/
				}
			}
		}
	}
</style>


