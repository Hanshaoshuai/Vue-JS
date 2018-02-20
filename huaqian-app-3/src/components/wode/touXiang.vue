<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stap="yijianHind()"><img src="./img/back.png"/></span>
				<span>头像</span>
				<div  class="fanhui-right">
					<div>
						<touxiang @to-parent="child" class="mingpians" ref="touxiangID"></touxiang>
						<font>更换头像</font>
					</div>
				</div>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<img ref="loding" :src="urls"/>
				</div>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import touxiang from "../ShangchuanTouxiang.vue";
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../box.vue";
	import { Indicator } from 'mint-ui';
	
	export default {
		props:{
//			token:{
//				type:Object
//			}
		},
		data () {
			return {
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				urls:""
			}
		},
		mounted(){
			this.urls=localStorage.getItem("photourl")
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1);
			},
			child(TouxiangImg){
				this.urls=TouxiangImg
				localStorage.setItem("photourl",TouxiangImg)
				//换头像
				var params={
		    		token:localStorage.getItem("token"),
					terminalNo:'3',
					photo:this.$refs.touxiangID.touxiangID
		    	}
//				console.log(params)
				this.$http.post(URL.path1+'account/editPhoto',params,{emulateJSON:true}).then(function(res){
//					console.log(res);
					Indicator.close("更换成功");
				},function(res){
					Indicator.close("系统错误");
				    console.log(res);
				})
//				console.log(TouxiangImg)
			},
		},
		events:{
			
		},
		filters:{
//			formatDate(time){
//				let date = new Date(time);
//				return formatDate(date,'yyyy-MM-dd hh:mm');
//			}
		},
		updated(){
//			
		},
		components:{
			box,
			touxiang
		}
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active {
	  	transition: all .5s ease;
	}
	.fade-leave-active {
	  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.xiangmu{
		position:fixed;
		background:#f5f5f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:300;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:320;
			span{
				font-weight:bold;
			}
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding-left:0.16rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
			.fanhui-right{
		    	position:absolute;
		    	right:0.2rem;
		    	top:0;
		    	font-size: 0.16rem;
		    	.mingpians{
			    	position:absolute;
			    	top:0;
			    	right:0;
			    	z-index:3000;
			    	opacity:0;
			    }
		    	font{
		    		display:inline-block;
					vertical-align: top;
					/*width:0.2rem;*/
					height:0.2rem;
					line-height: 0.22rem;
					margin-top:0.13rem;
					/*background-image:url("../img/bianji.png");*/
					background-size:100% 100%;
		    	}
		    }
		}
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			background-color:rgba(0,0,0,0.4);
			display:flex;
			align-content:center;
			align-items:center;
			.wenzhang-content{
				width:80%;
				margin:0 auto;
				img{
					width:100%;
				}
			}
		}
	}
</style>


