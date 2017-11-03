<template>
  <div id="app" >
  	<div class="content">
  		<keep-alive>
  			<router-view :userContent="userContent"></router-view>
  		</keep-alive>
  	</div>
    <div class="food border-top">
    	<div class="tab-item border-right">
    		<router-link to="/faxian" ref="fx">
    			<span class="icon-faxian"></span>
    			<font>发现</font>
    		</router-link>
    		<li v-if="ZongHe">{{ZongHe}}</li>
    	</div>
    	<!--<div class="tab-item">
    		<router-link to="/shendu">
    			<span class="icon-shendu"></span>
    			<font>深度</font>
    		</router-link>
    	</div>-->
    	<div class="tab-item border-left">
    		<router-link to="/wode">
    			<span class="icon-wode">
    			</span><font>我的</font>
    		</router-link>
    	</div>
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
	    	ZongHe:""
	    }
	  },
	  methods:{
	  	locations(){
	  		console.log(window.location)
	  	}
	  },
	  mounted(){
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
	  uptated(){
	  	
	  },
	  computed:{
	  	src:function(){
	  		
	  	}
	  },
	  components:{
	  }
	}
</script>

<style lang="scss">
	/*@import "./common/stylus/mixin.scss"*/
	#app{
		width:100%;
		height:100%;
		background:#f5f5f9;
		display:flex;
		flex-direction:column;
		overflow:hidden;
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
	}
	.mint-toast{
		/*padding:0.1rem 0.16rem !important;*/
	}
	.is-placemiddle{
		z-index:3000;
		padding:0.2rem 0.20rem !important;
	}
</style>
