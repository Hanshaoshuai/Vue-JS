<template>
  <div id="app" >
		<div v-if="hederTop" class='heder'><img :src='imgs' alt=""></div>
  	<div class="content">
      <router-view />
  		<!-- <keep-alive>
  			<router-view :userContent="userContent"></router-view>
  		</keep-alive> -->
  	</div>
    <div class="food border-top">
    	<div class="tab-item" @click="imgUrl('WxTop')">
    		<router-link to="/" exact>
    			<span class="icon-WxT"></span>
    			<font>微信</font>
    		</router-link>
    	</div>
    	<div class="tab-item" @click="imgUrl('TxTop')">
    		<router-link to="/tx">
    			<span class="icon-TxT"></span>
    			<font>通讯录</font>
    		</router-link>
    	</div>
    	<div class="tab-item" @click="imgUrl('FxTop')">
    		<router-link to="/fx">
    			<span class="icon-FxT"></span>
    			<font>发现</font>
    		</router-link>
    		<!-- <li v-if="ZongHe">{{ZongHe}}</li> -->
    	</div>
    	<div class="tab-item" @click="imgUrl('WoTop')">
    		<router-link to="/wd">
    			<span class="icon-WT"></span>
    			<font>我</font>
    		</router-link>
    	</div>
    </div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'About', params: { userId: 1111 } }"
        >About</router-link
      >
      | <button @click="routerTo">click here to news page{{ msg }}</button> |
      <button @click="routerTos">click here to news page</button>
    </div>
    <router-view />
  </div> -->
  </div> 
</template>
<script>
export default {
  name: "App",
  data() {
    return {
			hederTop:true,
      imgs: "img/imgs/WxTop.png"
    };
  },
  methods: {
		imgUrl(text){
			if(text=='WoTop'){
				this.hederTop=false;
			}else{
				this.hederTop=true;
				this.imgs="img/imgs/"+text+".png"
			}
		},
    routerTo() {
      this.$router.push({ name: "About", params: { userId: "路由传参" } });
    },
    routerTos() {
      this.$router.push({ name: "About", query: { userId: "query路由传参" } });
    }
  }
};
</script>

<style lang="scss">
#app{
		width:100%;
		height:100%;
		background:#ededed;
		display:flex;
		flex-direction:column;
		overflow:hidden;
		.heder{
			width:100%;
			height:1.3rem;
			position:absolute;
			top:0;
			left:0;
			img{
				width:100%;
				height:100%;
			}
		}
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
			// flex:1;
			width:100%;
			// height:auto;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			// overflow:hidden;
		}
		.content::-webkit-scrollbar{width:0px;}
		.food{
			width:100%;
			height:1.5rem;
			display:flex;
			flex-wrap:wrap;
			position:absolute;
			bottom:0;
      // background-image:url("../public/img/tencent.png");
      background-size:100% 100%;
			background:#f7f7f7;
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
					// background-image:url("./u740.png");
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
          font-size:0.3rem;
          // font-weight:bold;
					color:#0f0f0f;
					flex-direction:column;
					span{
						display:block;
						margin:0 auto;
						width:0.74rem;
						height:0.74rem;
						margin-top:0.14rem;
						background-size:100%;
					}
					.icon-WxT{
						background-image:url("../public/img/WxT1.png");
						background-position:-1px 0;
						background-size:107%;
					}
					.icon-TxT{
						background-image:url("../public/img/TxLT1.png");
						background-size:cover;
						// background-size:108%;
						background-position:-1px;
					}
					.icon-FxT{
						background-image:url("../public/img/FxT1.png");
					}
					.icon-WT{
						background-image:url("../public/img/WT1.png");
					}
					font{
						line-height:0.46rem;
					}
				}
				.router-link-active{
					color:#07c160;
					.icon-WxT{
						background-image:url("../public/img/WxT.png");
					}
					.icon-TxT{
						background-image:url("../public/img/TxLT.png");
					}
					.icon-FxT{
						background-image:url("../public/img/FxT.png");
					}
					.icon-WT{
						background-image:url("../public/img/WT.png");
					}
				}
			}
		}
	}
</style>
