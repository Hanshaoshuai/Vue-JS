<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="yijian">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>投资人反馈</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="fankiu" ref="tianjia">
					<div style="width:100%;height:0.45rem; background:#f5f4f9;"></div>
					<div v-for="(item,index) in res" class="content-food border-bottom" @click.stap="xinxiTo(item.id,item.uname)">
						<div class="imgas">
							<p>
								<img class="border" :src="item.photo" alt="" />
							</p>
							<font v-if="item.nums!=0">{{item.nums}}</font>
						</div>
						<span>&nbsp;&nbsp;{{item.uname}}</span>
						<span>&nbsp;&nbsp;{{item.com_short}}</span>
						<span>&nbsp;&nbsp;{{item.position}}</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	
	
	export default {
		props:{
			datas:{},
			FankuiShu:{}
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				res:"",
				token:"",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
//				uname:''
			}
		},
		mounted(){
//			获取评论反馈列表
			console.log(this.$route.params.token,)
			this.token={
				token:this.$route.params.token
			}
			this.fankuiBlock();
		},
		activated(){	//解决返回刷新问题；
			this.fankuiBlock();
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
//				this.tucaoShow=false;
			},
			initScroll(){
				this.betterscroll=new BScroll(this.$refs.wrapper,{
					click:true,probeType:3//probeType：3相当于实时监听高度位置
				});
				//通过betterscroll对象监听一个scroll事件，当scroll滚动时能够暴露出来，参数pos就是位置
				this.betterscroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y));
//					console.log(this.scrollHeight);
//					console.log(this.clientHeight+this.scrollY)
				});
			},
			fankuiBlock(){
//				if(this.res==""){
					Indicator.open({spinnerType: 'fading-circle'});
					this.$http.post(URL.path+'chatcomment/comment_list',this.token,{emulateJSON:true}).then(function(res){
						Indicator.close();
						this.res=res.body.data;
						if(this.res.length=='0'){
//							Toast("亲，您暂无反馈记录...")
							return;
						}
						this.$nextTick(function() {
							var img = this.$refs.tianjia.getElementsByTagName("img");
							var num = img.length;
							for(var i=0; i<num; i++){
								img[i].onload =function(){
									if (this.clientWidth>this.clientHeight) {
										this.style.height="100%"
										this.style.width="auto"
									}else{
										this.style.width="100%"
										this.style.height="auto"
									}
								}
							}
							if (!this.betterscroll) {
								this.initScroll();
							}else{
								this.betterscroll.refresh();
		//							console.log(this.scrollHeight)
		//							console.log(this.clientHeight+this.scrollY)
							}
						})
//						console.log("取到评论反馈列表");
//						console.log(res);
					},function(res){
						Indicator.close();
					    console.log(res);
					})
//				}
			},
			xinxiTo(to_id,uname){///Xeiyi/:token/:uID/:type/:XiangmuID
//				console.log(to_id)
//				console.log(this.datas);
				//标记已读反馈
				var farams={
		      		token:this.$route.params.token,		//	token	是	[string]		
					from_id:to_id		//	项目id
		      	}
				var farams1={
		      		token:this.$route.params.token,		//	token	是	[string]		
		      	}
				this.$http.post(URL.path+'chatcomment/read_chat',farams,{emulateJSON:true}).then(function(res){
				},function(res){
				    console.log(res);
				})
				window.location.href="#/fankuixinxi/"+this.$route.params.token+'/'+to_id+'/'+uname;
			}
			
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
		},
		components:{
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
	.yijian{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:900;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:30;
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
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.fankiu{
				width:100%;
				background:#fff;
				.content-food{
					width:95%;
					margin:0 auto;
					padding:0.14rem 0 0.08rem 0;
					/*line-height:0.46rem;*/
					font-size:0.16rem;
					.imgas{
						display:inline-block;
						position:relative;
						width:0.46rem;
						height:0.46rem;
						vertical-align:top;
						/*overflow:hidden;*/
						p{
							width:0.46rem;
							height:0.46rem;
							overflow:hidden;
							img{
								/*vertical-align:top;
								width:0.46rem;
								height:0.46rem;*/
							}
						}
						font{
							display:inline-block;
							width:0.18rem;
							height:0.18rem;
							border-radius:0.15rem;
							background:#ff7a59;
							position:absolute;
							top:-0.08rem;
							right:-0.08rem;
							font-size:0.12rem;
							line-height:0.18rem;
							text-align:center;
							color:#fff;
						}
					}
					span{
						line-height:0.46rem;
					}
					/*span{
						&:last-child{
							float:right;
							margin-right:0.4rem;
						}
					}*/
				}
			}
		}
	}
</style>


