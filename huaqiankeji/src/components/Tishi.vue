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
					<a class="tel" style="text-decoration:none;color:#666;display:block" :href="tel"></a>
				</ul>
			</div>	
		</div>
	</transition>
</template>
<script type="text/ecmascript">
	import {URL} from '../common/js/path';
	import { Toast } from 'mint-ui';
	export default {
		props:{
			xingXi:{
//				type:Object
			},
			content:{},
			token:{},
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
			tishiBlock(CanShu,datas,XiangmuID){
				var thata=this;
				console.log(CanShu)
				console.log(XiangmuID)
				this.datas=datas;
				this.tel="tel:"+datas;
				this.CanShu=CanShu;
				this.XiangmuID=XiangmuID;
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
				if(this.datas=="pipei"){
					window.location.href='#/wode/DingzengZuoshi/1/Pipei2/3/4';
//					this.content.pipeiBlock(this.CanShu);
					return;
				}
				if(this.XiangmuID){ 	//项目已过会接口
					console.log(this.XiangmuID);
					var params={
			      		token:this.token,
			      		item_id:this.XiangmuID,		//	项目id	是	[string]		
						follow:"2"			//	跟进状态 1:停止跟进 2:已过会 3:跟进	是	[string]
			      	}
		//			投资人更改反馈进度
					this.$http.post(URL.path+'finance/update_feedback',params,{emulateJSON:true}).then(function(res){
						this.data=res.body.data;
						var thata=this.token;
						if(res.body.returnCode=='200'){
							Toast("亲！项目结束成功，请到个人资料编写你本次项目的投资金额。")
							setTimeout(function(){
//								window.location.href="#/wode/ziliaoH/"+thata;
								window.location.href="#/wode";
							},3000)
						}
						console.log("投资人收到的项目列表");
						console.log(res.body);
					},function(res){
					    console.log(res);
					})
				}
//				this.$refs.pipeiShow.pipeiBlock();
			},
			fangQi(){
				this.onlyContent=false;
				if(this.CanShu=="xiangmuXiangqing"){
					window.location.href="#/wode/ziliaoH/"+this.token;      //项目详情要去个人资料完善信息；
					return;
				}
				if(this.datas=="pipei"){
					this.content.pipeiBlock(this.CanShu);
					return;
				}
				if(this.XiangmuID){		//项目已放弃接口
					console.log(this.XiangmuID);
					var params={
			      		token:this.token,
			      		item_id:this.XiangmuID,		//	项目id	是	[string]		
						follow:"1"			//	跟进状态 1:停止跟进 2:已过会 3:跟进	是	[string]
			      	}
		//			投资人更改反馈进度
					this.$http.post(URL.path+'finance/update_feedback',params,{emulateJSON:true}).then(function(res){
						this.data=res.body.data;
						if(res.body.returnCode=='201'){
							Toast("亲！您暂无收到新项目哦...")
						}
						console.log("投资人收到的项目列表");
						console.log(res.body);
					},function(res){
					    console.log(res);
					})
				}
//				this.$refs.pipeiShow.pipeiBlock();
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
            			line-height: 0.46rem;
            		}
            	}
            	.tel{
            		position:absolute;
            		top:0;
            		left:0;
            		width:100%;
            		height:100%;
            	}
            }
        }
    }
</style>
