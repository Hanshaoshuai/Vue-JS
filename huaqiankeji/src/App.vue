<template>
  <div id="app" >
  	<div class="content"><keep-alive><router-view :userid="show"></router-view></keep-alive></div>
    <div class="food border-top">
    	<div class="tab-item border-right">
    		<router-link to="/faxian" ref="fx">
    			<span class="icon-faxian"></span>
    			<font>发现</font>
    		</router-link>
    		<li>6</li>
    	</div>
    	<div class="tab-item">
    		<router-link to="/shendu">
    			<span class="icon-shendu"></span>
    			<font>深度</font>
    		</router-link>
    	</div>
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
//	import denglu from "./components/DengLu/DengLu.vue";
	import {URL} from './common/js/path';
	
	window.onhashchange = function() {
//			console.log("sssssss")
		if(document.getElementById("fanxian") && sessionStorage.getItem("faxianScroll")){
			var fanxian=document.getElementById("fanxian")
			console.log(document.getElementById("fanxian").scrollTop)
			fanxian.scrollTop=sessionStorage.getItem("faxianScroll")
		}
	}

	export default {
		name: 'app',
	  data () {
	    return {
	      page: '1',
				limit: '15',
				type: '3',
				show:true,
				imgsrc:"",
				fxsrc:""
	    }
	  },
	  methods:{
	  	locations(){
	  		console.log(window.location)
	  	}
	  },
	  mounted(){
//	  	this.$refs.wrapper.addEventListener('location.href', this.locations) //做一个所有的location监听
	  	var fx=this.$refs.fx.$el.getAttribute("class")
	  	this.imgsrc=fx;
	  	console.log(URL.path)
	  	if(localStorage.getItem("userID")&&localStorage.getItem("userID")!==""){
//	  		console.log(localStorage.getItem("userID"))
//	  		window.location.href="#/denglu";
	  	}else{
	  		console.log(localStorage.getItem("userID"))
	  		window.location.href="#/denglu";
	  	}
			var datas = {
				terminalNo: '3',
				page: this.page,
				limit: this.limit,
				ctype: this.type,
			}
	  	this.$http.post(URL.path+'api/index.php/welcome',datas,{emulateJSON:true}).then(function(res){
        var data=res.data
        alert("成功");
	    },function(res){
	        console.log(res.status);
	    })
	  },
	  uptated(){
	  	
	  },
	  computed:{
	  	src:function(){
	  		
	  	}
	  },
	  components:{
//	  	denglu
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
			.tab-item{
				flex:1;
				margin:0.06rem 0;
				/*height:100%;*/
				box-sizing:border-box;
				li{
					position:absolute;
					width:0.12rem;
					height:0.12rem;
					top:0.02rem;
					right:34%;
					border-radius:0.1rem;
					background-image:url("./u740.png");
					background-size:100% 100%;
					background:#E19900;
					color:#fff;
					font-size:0.1rem;
					text-align:center;
					line-height:0.12rem;
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
						background-image:url("./wode1.png");
					}
				}
			}
		}
	}
</style>
