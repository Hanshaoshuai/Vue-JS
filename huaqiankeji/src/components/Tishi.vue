<template>
	<transition name="Block">
		<div v-show="onlyContent" class="loding" style="position: absolute;z-index: 2999; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.2);display: none;">
		    <div class="loadEffect">
		        <span>{{xingXi.text}}</span>
		        <div class='load-butten'>
			        <font v-if="xingXi.m" @click.stop="guoHui()" class="first">{{xingXi.x}}</font>
			        <font v-if="xingXi.u" @click.stop="fangQi()" class="last">{{xingXi.y}}</font>
		        </div>
			</div>	
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	
	export default {
		props:{
			xingXi:{
//				type:Object
			},
			content:{}
		},
		data () {
			return {
				tishi:"",
				onlyContent:false
			}
		},
		mounted(){
			
		},
		methods:{
			tishiBlock(){
				this.onlyContent=true;
			},
			guoHui(){
				this.onlyContent=false;
				this.content.pipeiBlock();
//				this.$refs.pipeiShow.pipeiBlock();
			},
			fangQi(){
				this.onlyContent=false;
				this.content.pipeiBlock();
//				this.$refs.pipeiShow.pipeiBlock();
			}
		},
		updated(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.Block-enter-active {
	  	transition: all .5s ease;
	}
	.Block-leave-active {
	  	transition: all .5s ease;
	}
	.Block-enter, .Block-leave-active {
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	.loding{
		display:flex;
		align-content:center;
		align-items:center;
		justify-content:center;
		.loadEffect{
            width: 3.00rem;
            min-height: 1.00rem;
            position: relative;
            padding:0.3rem 0;
            background: #fff;
            .load-butten{
            	width:100%;
            	height:0.4rem;
            	font{
	            	position:absolute;
	            	display:inline-block;
	            	background:#ff7a59;
	            	padding:0.06rem 0.1rem;
	            	color:#fff;
	            	border-radius:0.04rem;
	            	&.first{
	            		bottom:0.2rem;
	            		left:0.6rem;
	            	}
	            	&.last{
	            		bottom:0.2rem;
	            		right:0.6rem;
	            	}
	            }
            }
        }
        .loadEffect span{
        	margin:0 auto;
            display: block;
            text-align:justify;
            line-height: 0.22rem;
            font-size: 0.16rem;
            width: 80%;
        }
    }
</style>
