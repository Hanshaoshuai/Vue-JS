<template>
	<div class="headers">
		<div class="swiper-container">
	        <div ref="swiper" class="swiper-wrapper">
	            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
	        </div>
	        <div class="swiper-pagination swiper-pagination-white"></div>
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
				detailShow:false,
				listImg: [{
                    url: "http://dummyimage.com/1745x492/f1d65b"
                }, {
                    url: "http://dummyimage.com/1745x492/40b7ea"
                }, {
                    url: "http://dummyimage.com/1745x492/e3c933"
                }],
                mySwiper:"",
			}
		},
		mounted(){
			console.log('mounted', this)
			this.shuanxin();
		},
		activated(){
//			this.mySwiper=''
			this.shuanxin();
		},
		methods:{
			shuanxin(){
				this.$nextTick(function(){
					if(!this.mySwiper){
						var that=this;
			            this.mySwiper = new Swiper('.swiper-container', {
			                pagination: '.swiper-pagination',
			                paginationClickable: true,
			                autoplayDisableOnInteraction : false,
			                direction : 'vertical',
		//	                vertical	horizontal
			                loop: true,
			                speed: 2000,
			                autoplay: 2000,
			                onTouchEnd: function() {
			                    that.mySwiper.startAutoplay()
			                }
			            });
		           	}
					this.$refs.swiper.style.transform='translate3d(0px, -100px, 0px)';
	          	})
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
		.swiper-container {
	        width: 100%;
	        height: 3rem;
	        .swiper-wrapper {
	            width: 100%;
	            height: 100%;
	        }
	        .swiper-slide {
	            background-position: center;
	            background-size: cover;
	            width: 100%;
	            height: 100%;
	            img {
	                width: 100%;
	                height: 100%;
	            }
	        }
	        .swiper-pagination-bullet {
	            width:0.2rem;
	            height: 0.2rem;
	            display: inline-block;
	            background: #7c5e53;
	        }
	    }
	}
</style>