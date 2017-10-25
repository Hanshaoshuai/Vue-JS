<template>
	<transition name="Block">
		<div ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
		    <div class="loadEffect" ref="padding">
				<ul v-show="firstTop">
					<li class="border-bottom" @click.stop="queding()"><span>确认重新申请</span></li>
					<li @click.stop="bianJi()"><span>继续编辑</span></li>
				</ul>
				<ul v-show="lastBottom">
					<li class="last-bottom" style="text-align: center;"><span>{{textcont}}</span></li>
				</ul>
			</div>	
		</div>
	</transition>
</template>
<script type="text/ecmascript">
//	import {URL} from '../common/js/path';
//	import { Toast } from 'mint-ui';
	export default {
		props:{
			xingXi:{
//				type:Object
			},
			content:{},
		},
		data () {
			return {
				datas:"",
				CanShu:"",   //给下级要传的参数
				tishi:"",
				onlyContent:false,
				XiangmuID:"",
				tel:""
			}
		},
		mounted(){
			console.log()
		},
		methods:{
			queding(){
				
			},
			bianJi(){
				
			},
			huJiao(){
				Toast(this.datas)
			},
			tianJia(){
				Toast(this.datas)
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
            width: 70%;
            min-height: 0.40rem;
            position: relative;
            padding:0.3rem 0;
            background: #fff;
            border-radius:0.06rem;
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
	            		left:16%;
	            	}
	            	&.last{
	            		bottom:0.2rem;
	            		right:16%;
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
        .loadEffect{
        	position:relative;
        	ul{
            	li{
            		span{
            			/*text-align:center;*/
            			line-height: 0.46rem;
            		}
            		.last-bottom{
            			line-height: 0.36rem;
            		}
            	}
            }
        }
    }
</style>
