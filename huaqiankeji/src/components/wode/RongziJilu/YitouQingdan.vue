<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header" @click.stop="listnone1()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>已投清单</span>
			</div>
			<div class="wenzhang-list">
				<div ref="tianjia" class="wenzhang-content">
					<div class="donghuaGo" ref="donghuaGo">
						<!--<transition-group name="list" tag="p" >-->
							<!--<div v-for="(item,index) in data" v-bind:key="index" class="list-item">
								<div v-if="index!=length-1">
									<div v-if="fenzhong[index]!=fenzhong[index-1]" class="fankiu">
										<div class="tubiao"></div>
										<div class="content-food">
											<span>{{numToTime2(item.send_time)}}</span>
										</div>
										<div @click.stop="zhanKai()" class="anNui"></div>
									</div>
								</div>
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
								<div style="width:100%;height:0.1rem;"></div>
							</div>-->
							<div v-for="(item,index) in data" v-bind:key="index" class="list-item heights">
								<div v-if="index!=length-1">
									<div class="fankiu">
										<div class="tubiao"></div>
										<div class="content-food">
											<span>{{numToTime2(item['0'].send_time)}}</span>
											<span style="display:inline-block;margin-left:0.2rem;">（{{item.length}}&nbsp;条）</span>
										</div>
										<div @click.stop="zhanKai(index)" class="anNui"><div class="imgas"></div></div>
									</div>
								</div>
								<div v-for="(item,index) in item">
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
								<div style="width:100%;height:0.1rem;"></div>
							</div>
						<!--</transition-group>-->
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {numToTime} from "../../../common/js/date.js";
	import {numToTime2} from "../../../common/js/date.js";
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
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
    			disnone:true,
    			numToTime:"",
    			numToTime2:"",
    			ri:[],
    			fenzhong:[],
    			length:"",
    			heights:"heights"
			}
		},
		mounted(){
			this.numToTime=numToTime;
			this.numToTime2=numToTime2;
			var tata=this;
			var times=setTimeout(function(){
				tata.disnone=false;
				if(tata.disnone==false){
					clearTimeout(times)
				}
			},3000)
//			Indicator.open({spinnerType: 'fading-circle'});
//			console.log(this.$route.params.uID);
			this.token=localStorage.getItem("token");
			this.XiangmuID=this.$route.params.XiangmuID;
			this.type=this.$route.params.type;
//			this.uID=this.$route.params.uID;
			//发送项目	
			var datas = {
				token:this.token,		//	token	是	[string]		
				item_id:this.XiangmuID,	//项目id	是	[string]		
				page:1,					//page	是	[string]		
				size:10					//size			//是	[string]	
			}
			this.$http.post(URL.path+'finance/get_send_list',datas,{emulateJSON:true}).then(function(res){
				var tata=this;
				Indicator.close();
				this.data=res.body.data
//				var y=0;
//				for(var item in this.data){
//					var fenzhong=numToTime2(this.data[item].send_time).substr(-2,2)
//					var length=this.data.length;
//					this.fenzhong[y]=fenzhong;
////					console.log(numToTime2(this.data[item].send_time).substr(-2,2))
//					for(var i=0; i<length; i++){
//						if(numToTime2(this.data[item].send_time)[i]=='日'){
//							this.ri[y]=numToTime2(this.data[item].send_time).substr(i-2,2);
////							return;
//						}
//					}
//					this.length=this.fenzhong.length;
//					console.log(this.length)
//					console.log(this.fenzhong)
//					y+=1;
//				}
		    	
		    	
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
//				console.log(res);
			},function(res){
				Indicator.close();
				Toast("系统错误")
			    console.log(res.status);
			})
		},
		methods:{
			listnone1(){
				Indicator.close();
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
		    zhanKai(index){
		    	var contlist=this.$refs.donghuaGo.getElementsByClassName("list-item");
		    	var length=contlist.length;
		    	this.heights='heights';
		    	for(var i=0; i<length; i++){
		    		if(i!=index){
		    			if(contlist[i].getAttribute("class")!=='list-item heights'){
			    			contlist[i].setAttribute("class",'list-item heights')
			    		}
		    		}
		    	}
		    	if(contlist[index].getAttribute("class")=='list-item heights'){
		    		contlist[index].setAttribute("class",'list-item')
		    	}else{
		    		contlist[index].setAttribute("class",'list-item heights')
		    	}
//		    	console.log(contlist)
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
		z-index:460;
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
			z-index:480;
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
				height:90%;
				margin:0 auto;
				overflow: hidden;
				padding:0.56rem 0 0 0;
				.donghuaGo::-webkit-scrollbar{width:0px}
				.donghuaGo{
					width:100%;
					height:100%;
					overflow-y:auto;
					-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
					.heights{
						height:1.166rem;
						overflow:hidden;
					}
					.fankiu{
						width:100%;
						position:relative;
						display:flex;
						background:#fff;
						padding:0.1rem 0 0.1rem 0;
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
						.anNui{
							position:absolute;
							top:0rem;
							right:0.16rem;
							height:100%;
							width:0.3rem;
							.imgas{
								width:0.16rem;
								height:0.1rem;
								margin-top:0.16rem;
								background-image:url("../img/ico_16.png");
								background-size:100% 100%;
							}
						}
					}
					.sousuo-content{
						width:100%;
						height:auto;
						background:#fff;
						/*margin-bottom:0.08rem;*/
						border-radius:0.02rem;
						box-sizing:border-box;
						box-shadow: 0.02rem 0.02rem 0.02rem #e4e3e8;
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
		}
	}
</style>


