<template>
	<!--<transition name="fade">-->
		<div class="zhaiquan">
			<transition name="fade">
				<div ref="Boxs" class="gereng" v-show="wodeblock" @click.stop="none()" @touchstart="start($event)" @touchmove.stop="huadong($event)" @touchend.stop="taiqi($event)">
					<wode></wode>
				</div>
			</transition>
			<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stop="sousuo()"><img src="./img/liebiao.png"/></span>
				<span>消息</span>
			</div>
			<div class="leibiao">
				<div style="height:0.46rem;"></div>
				<div ref="searchBox" class="searchBox">
					<div class="home-search" @click.stop="sousuogo()">
						<img class="stalt" src="./img/circle_hot_search.png"/>
						<input v-model="textsou" placeholder="查找消息记录" type="text" class="mint-field-core">
						<img class="quxiaos" @click.stop="qingkong()" src="./img/quxiao.png"/>
					</div>
				</div>
				<div class="dujia-header border-topbottom" @click.stop="tongzhi()">
					<span><font class="kuaixunb"></font>系统通知</span>
					<span></span>
				</div>
				<div class="sousuo-content border-top">
					<ul ref="index1" class="content-header border-bottom" index="type1"  @click.stap="typeName()">
						<li class="contleft"><img src="./img/wode.png"/></li>
						<li class="contrith">
							<div class="content-top">
								<span>企融小秘书</span>
								<font>1月17日上午10：43</font>
							</div>
							<div class="content-bottom">
								<span>欢迎来到企融直通车，希望…</span>
								<!--<span>{{numToTime(item.create_time)}}</span>-->
							</div>
						</li>
					</ul>
					<ul ref="index1" class="content-header border-bottom" index="type1"  @click.stap="typeName()">
						<li class="contleft"><img src="./img/wode.png"/></li>
						<li class="contrith">
							<div class="content-top">
								<span>企融小秘书</span>
								<font>1月17日上午10：43</font>
							</div>
							<div class="content-bottom">
								<span>欢迎来到企融直通车，希望…</span>
								<!--<span>{{numToTime(item.create_time)}}</span>-->
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
//	import box from "../box.vue"
	import {URL} from '../../common/js/path';
	import wode from "../wode/wode.vue"
	import { Toast } from 'mint-ui';
//	import BScroll from "better-scroll";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				textsou:'',
				data:"",
				inof:"",
				wodeblock:false,
				daohangblock:false,
				xiangmublock:true,
				zijin:false,
				touch:'',
				startX:"",
				startY:'',
				endX:'',
				endY:'',
				distanceX:"",
				distanceY:"",
				drund:""
			}
		},
		activated(){
			this.photourl=localStorage.getItem("photourl");
			this.$nextTick(function(){
				
			});
		},
		mounted(){
			
		},
		methods:{
			sousuogo(){
				
			},
			qingkong(){
				
			},
			tongzhi(){
				
			},
			typeName(){
				
			},
			types(e,id){
				var typeLi=this.$refs.boxs.getElementsByTagName("li");
				var length=typeLi.length;
				this.board=id;
//				console.log(this.board)
				for(var i=0; i<length; i++){
					typeLi[i].setAttribute("class","bianse1");
				}
				typeLi[id].setAttribute("class","bianse")
				this.daohangblock=false;
				if(id=="0"){
					this.zijin=false;
					this.xiangmublock=true;
				}else{
					this.xiangmublock=false;
					this.zijin=true;
				}
			},
			tianjia(){
				if(this.daohangblock==false){
					this.daohangblock=true;
				}else{
					this.daohangblock=false;
				}
			},
			daohang(id){
				this.daohangblock=false;
				if(id=='1'){
					alert("1")
//					window.location.href="#/wode";
				}
				if(id=='2'){
					window.location.href="#/fabujia";
				}
				if(id=='3'){
					window.location.href="#/fabujian";
				}
			},
			xiangmucont(){
				this.daohangblock=false;
				window.location.href="#/jiafangxiangqing";
			},
			zijincont(){
				this.daohangblock=false;
				window.location.href="#/jianfangxiangqing";
			},
			none(){
				this.wodeblock=false;
				this.$refs.Boxs.style.left='0px';
			},
			start(event){
				this.touch = event.targetTouches[0];
			    //滑动起点的坐标
			    this.startX = this.touch.pageX;
			    this.startY = this.touch.pageY;
			},
			huadong(event){
				var clientWidth =document.documentElement.clientWidth;
				var touch1 = event.targetTouches[0];
		      	//手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
		        this.endX = touch1.pageX;
		        this.endY = touch1.pageY;
				var startX = event.target.offsetLeft;
				this.drund=Math.floor(this.startX-this.endX)
				console.log(Math.floor(clientWidth-this.endX))
//				console.log(clientWidth)
				if(this.drund>0){
//					event.target.style.left=-(this.startX-this.endX)+'px'
					this.$refs.Boxs.style.left=-(this.startX-this.endX)+'px'
				}else{
					this.$refs.Boxs.style.left='0px'
				}
				
//				var startX = event.originalEvent.changedTouches[0].pageX;
//				var startY = event.originalEvent.changedTouches[0].pageY;
//				console.log(startX)
//				console.log(startY)
			},
			taiqi(event){
				if(this.drund>100){
					this.wodeblock=false;
					this.drund=0;
				}else{
					var that=this;
					var z=-(this.startX-this.endX);
					var run=setInterval(function(){
						if(z<0){
							z+=3
							that.$refs.Boxs.style.left=z+'px';
						}else{
							that.$refs.Boxs.style.left='0px';
							clearInterval(run);
						}
						
					},0.5)
				}
			},
			someAction1(){
				alert('someAction1')
			},
			someAction2(){
				alert('someAction2')
			},
			sousuo(){
				if(localStorage.getItem("shifouZhuce")==2){
					this.wodeblock=true;
					this.$refs.Boxs.style.left='0px';
//					window.location.href="#/wode";
				}else{
					if(localStorage.getItem("shifouZhuce")=='6'){
						Toast(localStorage.getItem('houtaiTishi'))
					}else{
//						this.jiantingTongguo()
//						if(this.shengqingZhongtishi=='1'){
////							window.location.href="#/denglu"
//						}else{
////							Toast(this.shengqingZhongtishi)
//						}
					}
				}
			},
			//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员/财务顾问 6:新三板做市商
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
//			box,
			wode
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
	  	transform: translateX(-4.17rem);
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	.zhaiquan{
		width:100%;
		height:100%;
		position:absolute;
    	top:0;
    	left:0;
    	.gereng{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:188;
			background:rgba(0,0,0,0.5);
		}
		/*position:relative;*/
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#f5f4f9;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			/*color:#fff;*/
			z-index:166;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding-left:0.16rem;
				display:inline-block;
				top:0.06rem;
				left:0;
				img{
					height:0.24rem;
				}
			}
		}
		.leibiao{
			.searchBox{
				background:#C9C9CE
			}
			@import "../../common/stylus/zhaiquan1.scss";
			.dujia-header{
				flex:1;
				background:#fff;
				margin-top:0.06rem;
				padding:0.08rem 0.16rem;
				.wancheng{
					position:absolute;
					top:0.12rem;
					right:0.4rem;
					line-height:0.34rem;
				}
				span{
					font-size:0.16rem;
	    			/*font-weight:500;*/
	    			line-height:0.34rem;
	    			vertical-align: top;
					&:first-child{
						/*font-weight:bold;*/
						font-size:0.16rem;
					}
					&:last-child{
						float:right;
						float:right;
						width:0.18rem;
						height:0.22rem;
						background-image:url("./img/jiantou.png");
						background-size:100% 100%;
						margin-top:0.06rem;
					}
					font{
						display:inline-block;
						width:0.24rem;
						height:0.24rem;
						margin:0.04rem 0.08rem 0 0;
						background-size:100% 100%;
						background-repeat:no-repeat;
						
					}
					.kuaixunb{
						background-image:url("./img/tongzhi.png");
					}
				}
			}
			.sousuo-content{
				width:100%;
				background:#fff;
				margin-top:0.1rem;
				.content-header{
					width:100%;
					margin:0 auto;
					padding:0.06rem 0;
					font-size:0.16rem;
					display:flex;
					.contleft{
						display:flex;
						padding-left:0.1rem;
						margin-top:-0.06rem;
						text-align: center;
						align-items: center;
						align-content: center;
						justify-content: center;
						img{
							width:0.32rem;
							height:0.32rem;
						}
					}
					.contrith{
						width:91.7%;
						margin:0 auto;
						color:#8c8c8c;
						padding-right:0.16rem;
						.content-top{
							width:100%;
							height:0.18rem;
							display:flex;
							span{
								display:inline-block;
								width:0.84rem;
								&:first-child{
									color:#323232;
									font-size:0.16rem;
									flex:1;
								}
							}
							font{
								display:inline-block;
								/*width:0.46rem;*/
								font-size:0.12rem;
								color:#717070;
								line-height:0.18rem;
							}
							.texts{
								text-align:center;
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
		}
	}
</style>


