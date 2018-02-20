<template>
	<div v-show="kechengBlock" class="tupian">
		<div class="kecheng">
			<ul>
				<li class="zhuban">
					<img src="../img/bg.jpg"/>
				</li>
				<li class="zhuban">
					<img src="../img/bg.jpg"/>
				</li>
				<li class="zhuban">
					<img src="../img/bg.jpg"/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	
	
	export default {
		props:{
			seller:{
				type:Object
			}
		},
		data () {
			return {
				kechengBlock:false,
				shijianBlock:false,
				kechengs:"kechengs"
			}
		},
		mounted(){
			
		},
		methods:{
			shijianShow(){
				if(this.shijianBlock==true){
					this.shijianBlock=false;
				}else{
					this.shijianBlock=true;
				}
			},
			gugaifengcaiBlock(){
				this.kechengBlock=true;
			},
			gugaifengcaiNone(){
				this.kechengBlock=false;
			}
		},
		uptated(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	/*@import "../../common/stylus/mixin";*/
	.shijian-enter-active {
	  	transition: all .5s ease;
	}
	.shijian-leave-active {
	  	transition: all .5s ease;
	}
	.shijian-enter, .shijian-leave-active {
	  	transform: translateY(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.tupian{
		.kecheng{
			width:100%;
			overflow:hidden;
			background:#fff;
			ul{
				padding:0.16rem 4.7%;
				margin:0 auto;
				li{
					width:1.6rem;
					height:1.06rem;
					border-radius:0.04rem;
					float:left;
					margin-bottom:0.15rem;
					img{
						width:100%;
					}
				}
				li:nth-child(2n){
					float:right;
				}
			}
		}
	}
	
</style>
