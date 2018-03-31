<template>
  <div id="app" >
  		<!--<transition name="fade">
				<div ref="Boxs" class="gereng" v-show="wodeblock" @click.stop="none()" @touchstart="start($event)" @touchmove.stop="huadong($event)" @touchend.stop="taiqi($event)">
					<wode></wode>
				</div>
			</transition>
			<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stop="sousuo()"><img src="./liebiao.png"/></span>
				<span>{{data}}</span>
			</div>-->
  	<div class="content">
  		<keep-alive>
  			<router-view :userContent="userContent"></router-view>
  		</keep-alive>
  	</div>
    <div class="food border-top">
    	<div class="tab-item">
    		<router-link to="/zhaiquan">
    			<span class="icon-shendu"></span>
    			<font>债权</font>
    		</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/binggou">
    			<span class="icon-shendu"></span>
    			<font>并购</font>
    		</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/faxian" ref="fx">
    			<span class="icon-faxian"></span>
    			<font>首页</font>
    		</router-link>
    		<li v-if="ZongHe">{{ZongHe}}</li>
    	</div>
    	<div class="tab-item">
    		<router-link to="/jianghu">
    			<span class="icon-shendu"></span>
    			<font>江湖</font>
    		</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/xiaoxi">
    			<span class="icon-shendu"></span>
    			<font>消息</font>
    		</router-link>
    	</div>
    	<!--<div class="tab-item border-left">
    		<router-link to="/wode">
    			<span class="icon-wode">
    			</span><font>我的</font>
    		</router-link>
    	</div>-->
    	<!--<div class="tab-item">
    		<a v-link="{path:'/goods'}">商品</a>
    	</div>
    	<div class="tab-item">
    		<a v-link="{path:'/ratings'}">评论</a>
    	</div>
    	<div class="tab-item">
    		<a v-link="{path:'/seller'}">商家</a>
    	</div>-->
    	<!--<denglu v-show="show"></denglu>-->
    </div>
  </div>
</template>

<script>
	import {URL} from './common/js/path';
	import wode from "./components/wode/wode.vue";
	import { Toast } from 'mint-ui';
//	window.onhashchange = function() {
////			console.log("sssssss")
//		if(document.getElementById("fanxian") && sessionStorage.getItem("faxianScroll")){
//			var fanxian=document.getElementById("fanxian")
//			console.log(document.getElementById("fanxian").scrollTop)
//			fanxian.scrollTop=sessionStorage.getItem("faxianScroll")
//		}
//	}

	export default {
		name: 'app',
	  data () {
	    return {
	    	userContent:"",
	    	ZongHe:"",
	    	blok:false,
	    	
//	    	data:"",
				wodeblock:false,
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
	  mounted(){
//	  	this.data=this.$store.state.phone
//	  	this.ZongHe=this.$refs.content.ZongHe;
//	  	console.log(this.ZongHe)
//	  this.$refs.wrapper.addEventListener('location.href', this.locations) //做一个所有的location监听
	  	var fx=this.$refs.fx.$el.getAttribute("class")
	  	this.imgsrc=fx;
	  	console.log(URL.path)
	  	if(localStorage.getItem("userID")&&localStorage.getItem("userID")!==""){
	  		this.userContent={
	  			userID:localStorage.getItem("userID"),			//用户ID
					token:localStorage.getItem("token"),		//用户token
					phone:localStorage.getItem("phone"),		//用户电话
					type:localStorage.getItem("type"),			//用户类型
					photo:localStorage.getItem("photo"),	//用户头像id
					photourl:localStorage.getItem("photourl")	//用户头像URL地址
	  		}
	  		console.log(this.userContent)
	  		window.location.href="#/faxian";
	  	}else{
	  		window.location.href="#/denglu";
	  		return;
	  	}
	  },
	  methods:{
	  	locations(){
	  		console.log(window.location)
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
	  },
	  uptated(){
	  	
	  },
	  computed:{
	  	data:function(){
	  		return this.$store.state.phone
	  	}
//	  	 data () {
//	      return this.$store.state.phone
//	    }
	  },
	  components:{
	  	wode
	  }
	}
</script>

<style lang="scss">
	/*@import "./common/stylus/mixin.scss"*/
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
	#app{
		width:100%;
		height:100%;
		background:#f5f5f9;
		display:flex;
		flex-direction:column;
		overflow:hidden;
		.gereng{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:10000;
			background:rgba(0,0,0,0.5);
		}
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
			z-index:200;
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
		.content{
			flex:1;
			width:100%;
			overflow:hidden;
		}
		.food{
			width:100%;
			height:0.6rem;
			display:flex;
			flex-wrap:wrap;
			background:#ffffff;
			/*box-shadow: -0.006rem 0 0.01rem #000000;*/
			.tab-item{
				flex:1;
				margin:0.06rem 0;
				/*height:100%;*/
				box-sizing:border-box;
				li{
					position:absolute;
					width:0.2rem;
					height:0.2rem;
					top:0.01rem;
					right:34%;
					border-radius:0.16rem;
					background-image:url("./u740.png");
					background-size:100% 100%;
					background:#ff2d00;
					color:#fff;
					font-size:0.12rem;
					text-align:center;
					line-height:0.21rem;
				}
				a{
					display:block;
					width:100%;
					height:100%;
					display:flex;
					text-align:center;
					font-size:0.14rem;
					color:#122222;
					flex-direction:column;
					span{
						display:block;
						margin:0 auto;
						width:0.27rem;
						height:0.24rem;
						margin-top:0.04rem;
						background-size:100% 100%;
					}
					.icon-faxian{
						background-image:url("./fa.png");
					}
					.icon-shendu{
						background-image:url("./shendu.png");
					}
					.icon-wode{
						background-image:url("./wode.png");
					}
					font{
						line-height:0.22rem;
					}
				}
				.router-link-active{
					color:#ed1111;
					.icon-faxian{
						background-image:url("./fa1.png");
					}
					.icon-shendu{
						background-image:url("./shendu1.png");
					}
					.icon-wode{
						background-image:url("./wode2.png");
					}
				}
			}
		}
	}
	.mint-toast {
		width:70% !important;
		/*background:#fff;*/
		z-index:3000;
		.mint-toast-text{
			width:100%;
			display:inline-block;
			/*background:#fff;*/
			line-height:0.24rem;
			font-size:0.18rem;
			font-weight:normal;
			/*padding:0.1rem 0rem !important;*/
			/*color:#000000 !important;*/
			span{
				display:inline-block;
				width:100%;
				color:#fff !important;
			}
		}
	}
	.mint-indicator-wrapper{
		z-index:3000;
		background:none;
		.mint-spinner-fading-circle-circle::before{
	    background-color: #26a2ff !important;
		}
	}
	.mint-toast{
		/*padding:0.1rem 0.16rem !important;*/
	}
	.is-placemiddle{
		z-index:3000;
		padding:0.2rem 0.20rem !important;
	}
</style>
