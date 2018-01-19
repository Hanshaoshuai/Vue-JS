<template>
	<div class="headers">
		<div class="carousel-wrap" id="carousel">
		  <!--// 轮播图列表-->
		  <transition-group tag="ul" class='slide-ul' name="list">
		   <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
		    <!--<a :href="list.clickUrl" rel="external nofollow" rel="external nofollow" rel="external nofollow" >-->
		     <img :src="list.image" :alt="list.desc">
		    <!--</a>-->
		   </li>
		  </transition-group>
		  <!--// 轮播图位置指示-->
		  <div class="carousel-items">
		   <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
		  </div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
//	import 'swiper/dist/css/swiper.min.css';
	
	export default {
		props:{
			
		},
		data(){
			return{
				slideList: [
				    {
				      "clickUrl": "#",
				      "desc": "nhwc",
				      "image": "http://dummyimage.com/1745x492/f1d65b"
				    },
				    {
				      "clickUrl": "#",
				      "desc": "hxrj",
				      "image": "http://dummyimage.com/1745x492/40b7ea"
				    },
				    {
				      "clickUrl": "#",
				      "desc": "rsdh",
				      "image": "http://dummyimage.com/1745x492/e3c933"
				    }
				],
				currentIndex: 0,
				timer: ''
			}
		},
		mounted(){
			this.shuanxin();
			this.$nextTick(() => {
			   this.timer = setInterval(() => {
			    this.autoPlay()
			   },3000)
			})
		},
		activated(){
//			this.mySwiper=''
//			this.shuanxin();
		},
		methods:{
			shuanxin(){
				
			},
			go() {
			   this.timer = setInterval(() => {
			    this.autoPlay()
			   },3000)
			},
			stop() {
			   clearInterval(this.timer)
			   this.timer = null
			},
			change(index) {
			   this.currentIndex = index
			},
			autoPlay() {
			   this.currentIndex++
			   if (this.currentIndex > this.slideList.length - 1) {
			    this.currentIndex = 0
			   }
			},
			showDetail(){
				this.detailShow=true;
			},
			hideDetail(){
				this.detailShow=false;
			}
		},
		components:{
			
		}
	};
</script>

<style lang="scss">
	/*@import "../../common/stylus/mixin";*/
	.headers{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
		overflow:hidden;
		background:#C1C1C1;
		.carousel-wrap {
		 position: relative;
		 height: 453px;
		 width: 100%;
		 overflow: hidden;
		 /*// 删除*/
		 background: #fff;
		}
		.list-enter-active {
		 transition: all 1s ease;
		 transform: translateY(0)
		}
		 
		.list-leave-active {
		 transition: all 1s ease;
		 transform: translateY(-100%)
		}
		 
		.list-enter {
		 transform: translateY(100%)
		}
		 
		.list-leave {
		 transform: translateY(0)
		} 
		.slide-ul {
		 width: 100%;
		 height: 100%;
		 li {
		  position: absolute;
		  width: 100%;
		  height: 100%;
		  img {
		   width: 100%;
		   height: 100%;
		  }
		 }
		}
		 
		.carousel-items {
		 position: absolute;
		 z-index: 10;
		 top: 380px;
		 width: 100%;
		 margin: 0 auto;
		 text-align: center;
		 font-size: 0;
		 span {
		  display: inline-block;
		  height: 6px;
		  width: 30px;
		  margin: 0 3px;
		  background: #b2b2b2;
		  cursor: pointer;
		 }
		 .active {
		  background: #245580;
		 }
		}
	}
</style>