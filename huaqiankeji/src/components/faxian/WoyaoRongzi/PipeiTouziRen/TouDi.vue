<template>
	<!--<transition name="fade">-->
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone1()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>一键投递</span>
			</div>
			<div class="wenzhang-list">
				<div ref="tianjia" class="wenzhang-content">
					<div class="fankiu">
						<div class="tubiao"></div>
						<div class="content-food">
							<span>已为您投递至如下投资人，请注意查收投资人反馈并及时回复</span>
						</div>
					</div>
					<div class="donghuaGo" ref="donghuaGo">
						<!--<transition-group name="list" tag="p" >-->
							<div v-for="(item,index) in data" v-bind:key="index" class="list-item">
								<!--{{item}}-->
								<div class="sousuo-content border-topbottom">
									<div class="content-header">
										<font><img :src="item.photo"/></font>
										<div class="names">
											<span class="border-right">{{item.uname}}</span>
											<span>{{item.com_short}}</span>&nbsp;
											<span>{{item.position}}</span>
										</div>
									</div>
								</div>
							</div>
							<!--<div v-for="(item,index) in items" v-bind:key="index" class="list-item">
								{{item}}
								<div class="sousuo-content border-topbottom">
									<div class="content-header">
										<font><img :src="items[index].photo"/></font>
										<div class="names">
											<span class="border-right">{{items[index].uname}}</span>
											<span>{{items[index].com_short}}</span>&nbsp;
											<span>{{items[index].position}}</span>
										</div>
									</div>
								</div>
							</div>-->
						<!--</transition-group>-->
					</div>
				</div>
			</div>
			<!--<div class="donghua">
				<span ref="donghua">
					
				</span>
			</div>-->
			<div class="zhaiyao-food">
				<span class="last" @click.stop="butten">返回首页</span>
			</div>
			<div class="endtop" v-show="disnone">
				<li>
					<p><img src="../img/loader.gif"/><span>正在为您投递，请稍候…</span></p>
				</li>
			</div>
			<!--<router-view></router-view>-->
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
//	import Vue from "vue";
	import { MessageBox } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import Vue from "vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			childnone:{
//				type:"boolean"
			}
		},
		data () {
			return {
				data:"",
				token:"",
				XiangmuID:"",
				type:"",
				uID:"",
				block:false,
				ButtenName:"88",
				showFlag:true,
				onlyContent:true,
				showblock:true,
				items: [],
    			nextNum:[],
    			disnone:true
    			
			}
		},
		mounted(){
			var tata=this;
			var times=setTimeout(function(){
				tata.disnone=false;
				if(tata.disnone==false){
					clearTimeout(times)
				}
			},3000)
			Indicator.open({spinnerType: 'fading-circle'});
			console.log(this.$route.params.uID);
			this.token=this.$route.params.token;
			this.XiangmuID=this.$route.params.XiangmuID;
			this.type=this.$route.params.type;
			this.uID=this.$route.params.uID;
			var x=this.uID.split(";").length;
			console.log(x.length)
			//发送项目	
			var datas = {
				token:this.token,		//	token	是	[string]		
				item_id:this.XiangmuID,	//项目id	是	[string]		
				type:this.type,			//类型 1:项目 2:活动	是	[string]		
				to_id:this.uID,			//接受者id	是	[string]		
				status:"",			//状态 1:已发送 2:未发送 3:拒绝		[string]		
				demand:""		//	是否索要 1:非索要 2:索要		[string]
			}
			this.$http.post(URL.path+'finance/send_item',datas,{emulateJSON:true}).then(function(res){
				var tata=this;
				Indicator.close();
				this.data=res.body.data
//				Toast("您已成功投递 "+x+" 位投资人请您注意查收投资人的反馈并及时回复");
//				var y=0;
//				for(var item in this.data){
////						console.log(this.nextNum)
//					this.nextNum[y]=this.data[item]
//					y+=1;
//				}
//				var tata=this;
//				var x=0;
//		    	var times=setInterval(function(){
//		    		var contentTexte=tata.$refs.donghuaGo;
//					contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
//		    		if(x==tata.nextNum.length){
//		    			tata.$refs.donghua.style.background="#f5f4f9";
//		    			clearInterval(times)
//		    			return;
//		    		}
////			    		console.log(tata.nextNum[x])
//					tata.items.splice(tata.items.length, 0, tata.nextNum[x])
//					x+=1;
//					contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
//				},200)
		    	
		    	
		    	tata.$nextTick(function(){
					var img = tata.$refs.tianjia.getElementsByTagName("img");
					var length=img.length;
					for (var i = 0; i < length; i++) {
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
				})
				console.log(res);
			},function(res){
				Indicator.close();
				Toast("系统错误")
			    console.log(res.status);
			})
		},
		methods:{
			listnone1(){
//				this.showFlag=false;
				history.go(-1)
			},
			pipeiBlock(){
				this.showFlag=true;
			},
			randomIndex: function () {
		      	return Math.floor(Math.random() * this.items.length)
		    },
		    add: function () {
		    	var tata=this;
		    	setInterval(function(){
					tata.items.splice(tata.items.length, 0, tata.nextNum++)
				},1000)
//		      	this.items.splice(this.items.length, 0, this.nextNum++)
		    },
		    remove: function () {
		      	this.items.splice(this.randomIndex(), 1)
		    },
			butten(){
//				MessageBox.confirm('您确定要联系对方并索要完整项目信息吗?').then(action => {
//					this.ButtenName="申请成功，等待反馈";
//					var tate=this;
//					setTimeout(function(){
//						tate.showFlag=false;
//						tate.ButtenName="索要完整项目信息";
//					},2000)
//				  console.log("ijfj")
//				});
//				this.block=true;
				window.location.href="#/faxian";
			}
//			show(){
////				dom更新后在执行使用$refs
//				this.$nextTick(function() {
//					if(!this.betterscroll){
//						this.betterscroll=new BScroll(this.$refs.betterscroll_food,{
//							click:true
//						});
//					}else{
//						//重新计算高度  
//						this.betterscroll.refresh();
//					}
//				});
//			}
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
//			if(!this.betterscroll){
//				this.betterscroll=new BScroll(this.$refs.betterscroll_food,{
//					click:true
//				});
//			}else{
//				//重新计算高度  
//				this.betterscroll.refresh();
//			}
		},
		components:{
//			cartcontrol,
//			ratingselect,
//			split
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
	.list-item {
	  	/*display: inline-block;*/
	  	/*margin-right: 10px;*/
	}
	.list-enter-active, .list-leave-active {
	  	transition: all .3s;
	}
	.list-enter, .list-leave-to
	/* .list-leave-active for below version 2.1.8 */ {
	  	opacity: 0;
	  	/*transform: translateX(-4.17rem);*/
	  	transform: translateY(0.5rem);
	}
	.wenzhang{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
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
			z-index:310;
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
		/*.wenzhang-list::-webkit-scrollbar{width:0px}*/
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow: hidden;
			/*overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wenzhang-content{
				width:95%;
				height:100%;
				margin:0 auto;
				overflow: hidden;
				padding:0.48rem 0 0 0;
				.fankiu{
					width:100%;
					display:flex;
					padding:0.1rem 0 0.2rem 0;
					/*align-items:center;*/
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("../img/fei.png");
						background-size:100% 100%;
						margin:0.04rem 0.04rem 0 0.02rem;
					}
					.content-food{
						line-height:0.22rem;
						color:#6e6e6e;
						/*background:#fff;*/
						span{
							font-size:0.16rem;
						}
					}
				}
				.donghuaGo::-webkit-scrollbar{width:0px}
				.donghuaGo{
					width:100%;
					height:74%;
					overflow-y:auto;
					-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
					.sousuo-content{
						width:100%;
						height:auto;
						background:#fff;
						margin-bottom:0.1rem;
						border-radius:0.02rem;
						/*border:1px solid #ff7a59;*/
						box-sizing:border-box;
						box-shadow: 0.02rem 0.02rem 0.02rem #e4e3e8;
						/*display:flex;*/
						/*flex-direction:column;*/
						.content-header{
							padding:0.1rem 0.16rem 0.08rem 0.16rem;
							font-size:0.16rem;
							display:flex;
							align-items:center;
							font{
								display:inline-block;
								width:0.43rem;
								height:0.43rem;
								margin-right:0.1rem;
								/*border-radius:0.3rem;*/
								border:none;
								border:2px solid #e5e4e4;
								overflow:hidden;
								img{
									/*width:100%;
									height:100%;*/
								}
							}
							.names{
								flex:1;
								.border-right{
									min-width:0.55rem;
									display:inline-block;
									margin-right:0.02rem;
								}
							}
						}
					}
				}
			}
		}
		.donghua{
			position:absolute;
			bottom:0.45rem;
			left:0;
			width:100%;
			height:20%;
			display:flex;
			align-content: center;
			align-items: center;
			justify-content: center;
			/*&>div{
				display:flex;
				align-content: center;
				align-items: center;
				justify-content: center;
				flex:1;
				
			}*/
			span{
				display:inline-block;
				width:100%;
				height:100%;
				background-image:url("../img/6.gif");
				background-size:100%;
				background-position:0 -0.32rem;
				background-repeat:no-repeat;
			}
		}
		.zhaiyao-food{
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
			height:0.45rem;
			color:#ffffff;
			background:#ff7a59;
			font-size:0.18rem;
			display:flex;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
			z-index:280;
			.ferst{
				flex:1;
				text-align:center;
			}
			.last{
				line-height:0.45rem;
				padding:0 0.2rem;
				display:inline-block;
				color:#fff;
			}
		}
		.endtop{
			position:fixed;
			top:0.46rem;
			left:0;
			width:100%;
			height:100%;
			background:#f5f4f9;
			display:flex;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
			z-index:300;
			li{
				/*width:100%;*/
				p{
					line-height:0.6rem;
					font-size:0.20rem;
					img{
						width:0.6rem;
						height:0.6rem;
						float:left;
						margin-right:0.1rem;
						/*vertical-align:top;*/
					}
				}
			}
		}
	}
</style>


