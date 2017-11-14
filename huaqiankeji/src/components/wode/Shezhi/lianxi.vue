<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>联系我们</span>
			</div>
			<div class="wenzhang-list">
				<div class="wenzhang-content">
					<ul class="content" ref="content">
						
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import box from "../../box.vue";
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
			}
		},
		mounted(){
			Indicator.open({spinnerType: 'fading-circle'});
			//联系我们
			var params={
	    		token:this.$route.params.token,
				ctype:2	//1关于我们2联系我们
	    	}
//			console.log(params)
			this.$http.post(URL.path1+'common/page_detail',params,{emulateJSON:true}).then(function(res){
				Indicator.close();
				this.$refs.content.innerHTML=res.body.data.content
//				console.log(res);
			},function(res){
				Indicator.close("系统错误");
			    console.log(res);
			})
		},
		methods:{
			yijianHind(){
				history.go(-1);
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
		}
		.wenzhang-list::-webkit-scrollbar{width:0px}
		.wenzhang-list{
			width:100%;
			height:100%;
			background:#fff;
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wenzhang-content{
				width:91%;
				margin:0 auto;
				padding:0.6rem 4% 0.6rem 5%;
				.content{
					line-height:0.32rem;
					color:#717171;
					font-size:0.16rem;
				}
			}
		}
	}
</style>


