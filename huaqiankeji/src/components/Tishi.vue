<template>
	<transition name="Block">
		<div ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
		    <div class="loadEffect" ref="padding">
		        <span v-if="xingXi.text">{{xingXi.text}}</span>
		        <div v-if="xingXi.text" class='load-butten'>
			        <font v-if="xingXi.m" @click.stop="guoHui()" class="first">{{xingXi.x}}</font>
			        <font v-if="xingXi.u" @click.stop="fangQi()" class="last">{{xingXi.y}}</font>
		        </div>
				<ul v-if="xingXi.huJiao">
					<li class="border-bottom" @click.stop="huJiao()"><span>{{xingXi.huJiao}}</span></li>
					<li  @click.stop="tianJia()"><span>{{xingXi.tianJia}}</span></li>
				</ul>
			</div>	
		</div>
	</transition>
</template>
<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
	export default {
		props:{
			xingXi:{
//				type:Object
			},
			content:{}
		},
		data () {
			return {
				datas:"",
				CanShu:"",   //给下级要传的参数
				tishi:"",
				onlyContent:false
			}
		},
		mounted(){
			console.log()
		},
		methods:{
			tishiBlock(CanShu,datas){
				var thata=this;
				console.log(CanShu)
				this.datas=datas;
				this.CanShu=CanShu;
				this.onlyContent=true;
				this.$nextTick(function() {
					if(CanShu=="ok"){
						this.$refs.padding.style.padding="0";
						this.$refs.xianShi.onclick=function(){
							thata.onlyContent=false;
						}
					}
				})
			},
			guoHui(){
				this.onlyContent=false;
				if(this.CanShu!="xiangmuXiangqing"){
					this.content.pipeiBlock(this.CanShu);
				}else{
					
				}
//				this.$refs.pipeiShow.pipeiBlock();
			},
			fangQi(){
				this.onlyContent=false;
				if(this.CanShu=="xiangmuXiangqing"){
					window.location.href="#/wode/ziliaoH/"+this.CanShu;      //项目详情要去个人资料完善信息；
				}else{
					if(this.CanShu!="huanQu"){
						this.content.pipeiBlock(this.CanShu);
					}
				}
//				this.$refs.pipeiShow.pipeiBlock();
			},
			huJiao(){
				
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
        	ul{
            	li{
            		span{
            			line-height: 0.46rem;
            		}
            	}
            }
        }
    }
</style>
