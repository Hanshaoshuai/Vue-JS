<template>
    <div class="recommed">
        <mt-swipe :auto="3000" :show-indicators="true" @change="handleChange">
		  <mt-swipe-item><img @click.stpe="tiaozhuan()" src="http://dummyimage.com/1745x492/f1d65b"/></mt-swipe-item>
		  <mt-swipe-item><img src="http://dummyimage.com/1745x492/40b7ea"/></mt-swipe-item>
		  <mt-swipe-item><img src="http://dummyimage.com/1745x492/e3c933"/></mt-swipe-item>
		  <mt-swipe-item>4</mt-swipe-item>
		  <mt-swipe-item>5</mt-swipe-item>
		  <mt-swipe-item>6</mt-swipe-item>
		</mt-swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        name:'recommend',
        data (){
            return {
                loop:true,
                autoPlay:true,
            }
        },
        methods: {
		  	handleChange(index) {
//		    	alert(index)
		  	},
		  	tiaozhuan(){
		  		alert("1")
		  	}
		},
        components:{
        	
        },
    }
</script>
<style lang='scss'>
	.recommed{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
		overflow:hidden;
		background:#C1C1C1;
		.mint-swipe{
			width:100%;
		    height: 200px;
		    position:relative;
		    overflow: hidden;
		    .mint-swipe-items-wrap{
				width:100%;
			    height: 200px;
			    overflow: hidden;
			    .mint-swipe-item{
					width:100%;
				    height: 200px;
		    		background:#00C850;
		    		color:#fff;
		    		text-align: center;
		    		line-height:200px;
		    		img{
		    			width:100%;
		    			height:100%;
		    		}
				}
			}
		}
		/*.mint-swipe-items-wrap {
		    overflow: hidden;
		    position: relative;
		    height: 100%;
		}
		.mint-swipe-items-wrap>div {
		    width: 100%;
		    height: 100%;
		}*/
	}
</style>