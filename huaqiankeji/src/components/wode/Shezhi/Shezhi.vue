<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>设置</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="sousuo-content border-topbottom" @click.stap="miMa()">
					<div class="content-header">
						<span>密码设置</span>
						<font></font>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="lianXi()">
					<div class="content-header">
						<span>联系我们</span>
						<font></font>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="qingChu()">
					<div class="content-header">
						<span>清楚缓存</span>
						<font></font>
					</div>
				</div>
				<box></box>
				<div class="sousuo-content border-topbottom" @click.stap="tuiChu()">
					<div class="content-header">
						<span>退出登录</span>
						<font></font>
					</div>
				</div>
			</div>
			<router-view :token="token"></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
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
//				this.$refs.yifouShou.yifouBlock();
			},
			qingChu(){
				Toast("清楚成功")
//				this.$refs.xiangqingShow.xiangqingBlock();
			},
			tuiChu(){
				if(localStorage.getItem("userID")&&localStorage.getItem("userID")!==""){
					localStorage.removeItem('userID');
					Toast('退出成功');
			  	}else{
			  		Toast('您已处于未登录状态');
			  	}
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
			height:0.46rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:300;
			span{
				font-weight:bold;
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
						background-image:url("../img/jiantou.png");
						background-size:100% 100%;
					}
				}
			}
		}
	}
</style>


