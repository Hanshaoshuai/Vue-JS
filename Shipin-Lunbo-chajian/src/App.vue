<template>
  <div id="app" >
  	<div class="item">
	  	<div class="player">
	      <video-player  class="vjs-custom-skin"
	                     ref="videoPlayer"
	                     :options="playerOptions"
	                     :playsinline="true"
	                     @play="onPlayerPlay($event)"
	                     @pause="onPlayerPause($event)"
	                     @ended="onPlayerEnded($event)"
	                     @loadeddata="onPlayerLoadeddata($event)"
	                     @waiting="onPlayerWaiting($event)"
	                     @playing="onPlayerPlaying($event)"
	                     @timeupdate="onPlayerTimeupdate($event)"
	                     @canplay="onPlayerCanplay($event)"
	                     @canplaythrough="onPlayerCanplaythrough($event)"
	                     @ready="playerReadied"
	                     @statechanged="playerStateChanged($event)">
	      </video-player>
	    </div>
    </div>
    <!--<video ref="video"
      id="video1" 
      :src="src" 
      preload="auto"
      webkit-playsinline
      playsinline 

      x-webkit-airplay="allow" 
      x5-video-player-type="h5"  
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      style="object-fit:fill">

    </video>-->
    <div class="lunbo">
    	<router-link to="/lunBo">轮播</router-link>
    	<router-link to="/lunBo1">轮播1</router-link>
    	<router-link to="/lunBo2">轮播2</router-link>
    	<router-link to="/lunBo3">轮播3</router-link>
    </div>
    
    
    <v-header v-show="block" :seller="seller"></v-header>
    <div v-show="block"  class="tab box">
    	<div class="tab-item">
    		<router-link to="/goods">商品</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/ratings">评论</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/seller">商家</router-link>
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
    </div>
    
    <keep-alive><router-view v-show="block1"  :seller="seller"></router-view></keep-alive>
  </div>
</template>

<script>
//	import VideoPlayer from 'vue-video-player';
	import {urlParse} from './common/js/util';
	import Header from './components/header/header.vue';
	
	export default {
		name: 'app',
	  data () {
	    return {
	    	block:false,
	    	block1:true,
	      seller: {
	      	id:(()=>{
	      		let queryParam=urlParse();
	      		console.log(queryParam)
	      		return queryParam.id;
	      	})()
	      },
	      src:"https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
				playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.5, 1.0, 1.5, 2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          },{
          	withCredentials: false,
	          type: 'application/x-mpegURL',
	          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
	        }],
          poster: "/static/images/author.jpg",
        }
	    }
	  },
	  mounted(){
//	  	this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?id="+this.seller.id,
//      {
//          params:{
////							"classID":localStorage.getItem("classname")
//              "classID":2
//          }
//      }
//  	).then((response)=>{
////      	console.log(response.body)
//				//合并对象  有3个参数  第一个是返回最终合并的对象  2 3分别是要合并的；
//				this.seller=Object.assign({},this.seller,this.seller = response.body[0])
//				this.waitLoad = true;
////      	this.seller = response.body[0];
//  		console.log(this.seller);
//  	},function(err){
//    	console.log(err);
//  	})
        
        
        
      setTimeout(() => {
        // console.log('dynamic change options', this.player)
        this.player.muted(false)
      }, 3000)
        
        
      this.$nextTick(function() {
//				var video = this.$refs.video;
//				this.videoMethod(video);
			}); 
	  },
	  computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
     methods: {
     	videoMethod(video) {
			    video.addEventListener('touchstart', function () {
			        video.play();
			    });
			    setTimeout(function () { video.play(); }, 1000);
			    document.addEventListener("WeixinJSBridgeReady", function (){ 
			        video.play();
			        video.pause();
			    }, false);
			    video.addEventListener('ended', function (e) {
			      video.play();
			    })
			    //进入全屏
			    video.addEventListener("x5videoenterfullscreen", function(){
			    
			      window.onresize = function(){
			        video.style.width = window.innerWidth + "px";
			        video.style.height = window.innerHeight + "px";
			      }
			    })
			    //退出全屏
			    video.addEventListener("x5videoexitfullscreen", function(){
			      window.onresize = function(){
			        video.style.width = 原尺寸;
			        video.style.height = 原尺寸;
			      }
			     
			    })
			},
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    },
	  components:{
	  	"v-header":Header
	  }
	}
</script>

<style lang="scss">
	/*@import "../static/css/video.css"*/
	#app{
		.player{
			width:100%;
			height:300px;
			.vjs-custom-skin{
				width:100%;
				height:100%;
				.video-js{
					width:100%;
					.vjs-tech{
						width:100%;
					}
					/*.vjs-error-display,.vjs-modal-dialog {
						display:none;
					}
					.vjs-control-bar{
						.vjs-progress-control,.vjs-live-control,.vjs-custom-control-spacer,.vjs-chapters-button,.vjs-descriptions-button,.vjs-subs-caps-button,.vjs-audio-button,.vjs-fullscreen-control{
							display:none;
						}
					}*/
				}
			}
		}
		.tab{
			display:flex;
			width:100%;
			height:0.40rem;
			line-height:0.40rem;
			font-size:0.14rem;
			position:relative;
	    &:after{
	        display:block;
	        position:absolute;
	        left:0;
	        bottom:0;
	        width:100%;
	        border-top:1px solid rgba(7,17,27,0.1);
	        content:"";
	    }
			/*border-bottom:1px solid rgba(7,17,27,0.1);*/
			/*border-1px(rgba(7,17,27,0.1));*/
			.tab-item{
				flex:1;
				text-align:center;
				&>a{
					display:block;
					font-size:0.14rem;
					color:rgb(77,85,93);
					&.router-link-active{
						color:rgb(240,20,20);
					}
				}
			}
		}
		.lunbo{
			width:100%;
				position:fixed;
				left:0;
				bottom:0.6rem;
				right:0;
				margin:auto;
				display:flex;
				align-items: center;
				align-content: center;
				justify-content: center;
			a{
				display:inline-block;
				width:0.8rem;
				height:0.35rem;
				text-align:center;
				line-height:0.4rem;
				background:#00A0DC;
				color:#fff;
				&:nth-child(2){
					margin:0 0.1rem;
				}
				&:nth-child(4){
					margin-left:0.1rem;
				}
			}
		}
	}
</style>
