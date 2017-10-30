<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header">
				<span class="xiangmu-left" @click.stop="listnone1()"><img src="./img/back.png"/></span>
				<span>您是否还在跟进以下项目</span>
			</div>
			<div class="wenzhang-list">
				<div ref="tianjia" class="wenzhang-content">
					<div class="fankiu">
						<div class="tubiao"></div>
						<div class="content-food">
							<span>请您确认</span>
						</div>
					</div>
					<div class="donghuaGo" ref="donghuaGo">
						<div v-for="(item,index) in data" v-bind:key="index" class="list-item" @click.stop="quereng(item.item_id,item.com_short,index)">
							<!--{{item}}-->
							<div class="sousuo-content border-topbottom">
								<div class="content-header">
									<font><img :src="item.photo"/></font>
									<div class="names">
										<span class="border-right">{{item.uname}}</span>
										<span>{{item.com_short}}</span>&nbsp;
										<span>{{item.position}}</span>
										<span class="one right1">已过会</span>
										<span class="tue right2">停止跟进</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				<div class="loadEffect" ref="padding" v-show="idBlock">
					<span class="firsts" ref="selecteds">
						<li>{{xiangmuMing}}</li>
						<font class="src1" @click.stop="xuanZe(index,item.id)" v-for="(item,index) in selected">{{item.title}}</font>
					</span>
			        <div class='load-butten'>
				        <font @click.stop="right1on()" class="first">已过会</font>
				        <font @click.stop="right2on()" class="last">停止跟进</font>
			        </div>
				</div>	
			    <!--<div class="loadEffect" ref="padding" v-show="contBlock">
					<span>
						<textarea ref="texts" placeholder="请输入您的投诉说明..." class="mint-field-core tousuContent" v-model="tousuContent"></textarea>
					</span>
			        <div class='load-butten'>
				        <font @click.stop="guoHui()" class="first">确定</font>
				        <font @click.stop="fangQi()" class="last">取消</font>
			        </div>
				</div>	-->
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
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
				showFlag:false,
				showblock:true,
				items: [],
    			nextNum:[],
    			disnone:true,
    			onlyContent:false,
				tousuContent:"",
				selected:'',		//投诉ids
				selectedID:'3',		//投诉id
				tousuId:"",
				idBlock:true,
				contBlock:false,
				xiangmuMing:"",
				x:0,
				y:0,
				right1DOM:'',
				right2DOM:'',
				index:'',
				item_id:""
			}
		},
		mounted(){
			Indicator.open({spinnerType: 'fading-circle'});
			var token={
	    		token:localStorage.getItem("token")
	    	}
//			项目跟进反馈列表（每月提醒一次）
			this.$http.post(URL.path+'finance/get_feedback',token,{emulateJSON:true}).then(function(res){
				Indicator.close();
				var returnCode=res.body.returnCode
				if(returnCode=="201"){
					this.data=res.body.data;
					this.showFlag=false;
				}else{
					this.data=res.body.data;
					this.showFlag=true;
					this.$nextTick(function(){
						this.right1DOM=this.$refs.donghuaGo.getElementsByClassName("one")
						this.right2DOM=this.$refs.donghuaGo.getElementsByClassName("tue")
						console.log(this.right1DOM)
//						var img = tata.$refs.tianjia.getElementsByTagName("img");
//						var length=img.length;
//						for (var i = 0; i < length; i++) {
//							img[i].onload =function(){
//								if (this.clientWidth>this.clientHeight) {
//									this.style.height="100%"
//									this.style.width="auto"
//								}else{
//									this.style.width="100%"
//									this.style.height="auto"
//								}
//							}
//						}
					})
				}
				console.log("每月提醒一次");
				console.log(res);
			},function(res){
				Indicator.close();
			    console.log(res);
			})
		},
		methods:{
			quereng(item_id,name,index){
				var right1=this.$refs.donghuaGo.getElementsByClassName("right")[index]
				if(right1){
					return;
				}
				this.item_id=item_id
				this.index=index
				this.xiangmuMing=name;
				this.onlyContent=true;
				console.log(right1)
			},
			right1on(){
				console.log(this.index)
				this.right1DOM[this.index].setAttribute("class","one right")
				this.x+=1;
				this.onlyContent=false;
				this.genjinJiekou(this.item_id,'2')
			},
			right2on(){
				this.right2DOM[this.index].setAttribute("class","tue right")
				this.y+=1;
				this.onlyContent=false;
				this.genjinJiekou(this.item_id,'1')
			},
			listnone1(){
				console.log(this.y)
				console.log(this.x)
				console.log(this.data.length)
				if(this.x+this.y==this.data.length){
					this.showFlag=false;
				}else{
					Toast("请确认完您的项目！")
				}
//				history.go(-1)
			},
			genjinJiekou(item_id,follow){//投资人更改反馈进度
				var params={
		      		token:localStorage.getItem("token"),
		      		item_id:item_id,		//	项目id	是	[string]		
					follow:follow		//	跟进状态 1:停止跟进 2:已过会 3:继续跟进	是	[string]
		      	}
				this.$http.post(URL.path+'finance/update_feedback',params,{emulateJSON:true}).then(function(res){
//					this.data=res.body.data;
					if(res.body.returnCode=='201'){
						
					}
					console.log(res.body);
				},function(res){
				    console.log(res);
				})
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
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
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
				padding:0.56rem 0 0 0;
				.fankiu{
					width:100%;
					display:flex;
					padding:0.1rem 0 0.2rem 0;
					/*align-items:center;*/
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("./img/fei.png");
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
								.right{
									float:right;
									color:#ff7a59;
								}
								.right1{
									display:none;
								}
								.right2{
									display:none;
								}
							}
						}
					}
				}
			}
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
	            padding:0.2rem 0 0.3rem 0;
	            background: #fff;
	            border-radius:0.06rem;
	            .load-butten{
	            	width:100%;
	            	height:0.3rem;
	            	font{
		            	position:absolute;
		            	display:inline-block;
		            	background:#ff7a59;
		            	padding:0.06rem 0.1rem;
		            	color:#fff;
		            	border-radius:0.04rem;
		            	&.first{
		            		bottom:0.2rem;
		            		left:12%;
		            	}
		            	&.last{
		            		bottom:0.2rem;
		            		right:12%;
		            	}
		            }
	            }
	            .firsts{
	            	overflow:hidden;
	            	width: 83%;
	            	li{
	            		display:block;
	            		width:100%;
	            		font-size:0.16rem;
	            		text-align: center;
	            		padding-bottom:0.16rem;
	            	}
	            	.src1{
	            		display:inline-block;
	            		float:left;
	            		padding:0.06rem 0.1rem;
	            		font-size: 0.14rem; 
	            		line-height: 0.15rem;
	            		border:1px solid #cfcfcf;
	            		box-sizing:border-box;
	            		border-radius:0.04rem;
	            		color:#b4b4b4;
	            		margin:0 0.06rem 0.06rem 0;
	            		&:nth-child(5n){
	            			margin-right:0;
	            		}
	            	}
	            	.src2{
	            		display:inline-block;
	            		float:left;
	            		padding:0.06rem 0.1rem;
	            		line-height: 0.15rem;
	            		font-size: 0.14rem; 
	            		background:#ff7a59;
	            		border:1px solid #cfcfcf;
	            		box-sizing:border-box;
	            		border-radius:0.04rem;
	            		color:#fff;
	            		margin:0 0.06rem 0.06rem 0;
	            		&:nth-child(5n){
	            			margin-right:0;
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
	            .mint-field-core{
					resize: none;
					width:100%;
					min-height:0.77rem;
					line-height:0.16rem;
					&::-webkit-scrollbar{width:0;height:0}
				}
	        }
	    }
	}
</style>


