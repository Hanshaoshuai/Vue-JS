<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="listnone()"><img src="../img/back.png"/></span>
					<span>匹配投资人</span>
					<div class="fanhui-right">
						<div @click.stop="quanXuan()">
							<font :class="{'typeC':wuxuan,'typeD':xuanze}"></font><span>全选</span>
						</div>
					</div>
				</div>
			</div>
			<div class="wenzhang-list" ref="wrapper">
				<div class="wenzhang-content" ref="tianjia">
					<div class="fankiu">
						<div class="tubiao"></div>
						<div class="content-food" style="text-align:center;">
							<span>已为您匹配{{body.length}}人</span>
						</div>
					</div>
					<div v-for="(item,index) in body" class="sousuo-content border-topbottom">
						<div class="content-header">
							<font><img src="" :rul="item.thumb"/></font>
							<div class="names">
								<span class="border-right">{{item.uname}}</span>
								<span>{{item.com_short}}</span>&nbsp;
								<span>{{item.position}}</span>
							</div>
							<div class="borders typeA" :id="item.uid"  @click.stop="xuanZe(index,item.uid)"></div>
						</div>
						<div class="xiaolv border-topbottom">
							<div class="border-right">
								<li><font>235</font></li>
								<span>收获项目数</span>
							</div>
							<div class="border-right">
								<li>
									<font v-if="item.follow==''" class="center">0&nbsp;%</font>
									<font v-else class="center">{{item.follow}}</font>
								</li>
								<span class="center">反馈率</span>
							</div>
							<div class="border-right">
								<li><font>200&nbsp;%</font></li>
								<span>约谈率</span>
							</div>
						</div>
						<div class="leimu">
							<div class="zhonglei">
								<span class="jieduan">阶段：PE</span>
								<span  class="dangbi">单笔投资：2000万-5000万</span>
								<span v-if="item.total_finance" class="dangbi">单笔投资：{{item.total_finance}}万</span>
								<span  class="zijin">资金成本：年化20%-30%</span>
								<span  class="fangkuan">放款速度：不超过90天</span>
								<span  class="lingyu">领域：医疗、军事</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="zhaiyao-food">
				<div class="ferst"><font>您已选择</font><span ref="size" class="ferst-child">{{ButtenName}}</span><font>个投资人</font></div>
				<span class="last" @click.stop="butten()">下一步</span>
			</div>
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Indicator } from 'mint-ui';
	import {URL} from '../../../../common/js/path';
	import { Toast } from 'mint-ui';
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
			},
			token:{},
			type:{},
			XiangmuID:{}
		},
		data () {
			return {
				y:0,
				body:"",
				CanShu:"",
				block:false,
				ButtenName:0,
				showFlag:false,
				wuxuan:true,
				xuanze:false,
				XiaYibu:false,
				uID:[],		//项目id
				uID1:[],	//项目id字符串；
				length:'',	//匹配项目个数
				img:'',
				num:"",
				n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
				height:0
			}
		},
		methods:{
			listnone(){
				this.showFlag=false;
				history.go(-1)
			},
			faxianScroll(){
				this.imgs()
//				console.log(this.img[6].offsetTop)
			},
			imgs(){
				var setHeight = document.documentElement.clientHeight; //可见区域高度
				var scrollTop = this.$refs.wrapper.scrollTop; //滚动条距离顶部高度
				for (var i = this.n; i < this.num; i++) {
//					this.img[i].offsetTop+=200;
					if (this.height < setHeight + scrollTop) {
						if (this.img[i].getAttribute("src") == "") {
							this.img[i].src = this.img[i].getAttribute("rul");
							if (this.img[i].clientWidth>this.img[i].clientHeight) {
								this.img[i].style.height="100%"
								this.img[i].style.width="auto"
							}else{
								this.img[i].style.width="100%"
								this.img[i].style.height="auto"
							}
						}else{
							return;
						}
						this.n = i + 1;
						this.height+=201;
					}
				}
			},
			pipeiBlock(CanShu){
				Indicator.open({spinnerType: 'fading-circle'});
				console.log(CanShu)
				console.log(this.token)
				this.CanShu=CanShu
				this.showFlag=true;
				//匹配投资人列表		
				var datas = {
					token:this.token,		//	token	是	[string]		
					item_id:this.CanShu.XiangmuID,		//	项目id	是	[string]		
					page:"",			//	page	是	[string]		
					size:""			//	size	是	[string]	
				}
				this.$http.post(URL.path+'finance/investor_list',datas,{emulateJSON:true}).then(function(res){
					Indicator.close();
					this.body=res.body.data;
					this.$nextTick(function(){
						this.img = this.$refs.tianjia.getElementsByTagName("img");
						this.num = this.img.length;
						this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
						this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
  						this.imgs()
					});
					console.log(this.body);
				},function(res){
					Indicator.close();
					Toast("系统错误请稍后...")
				    console.log(res.status);
				})
			},
			quanXuan(){
//				console.log(this.$refs.tianjia.getElementsByClassName("borders"))
				var borders=this.$refs.tianjia.getElementsByClassName("borders")
				var length = borders.length;
				if(this.wuxuan==false){
					this.wuxuan=true;
					this.xuanze=false;
					this.XiaYibu=false;				//判断是否能下一步
					this.ButtenName=0;				//选择的个数为0
					for(var i=0; i<length; i++){
						borders[i].setAttribute("class","borders typeA")
					}
					this.uID=[];
					this.length=this.uID.length;
//					console.log(this.uID)
					this.uID1=this.uID.join(';')
					console.log(this.uID1)
				}else{
					this.wuxuan=false;
					this.xuanze=true;
					this.XiaYibu=true;				//判断是否能下一步
					this.ButtenName=length;			//选择的个数为全部
					this.uID=[];
					for(var i=0; i<length; i++){
						borders[i].setAttribute("class","borders typeB");
						this.uID.push(borders[i].id)
					}
					this.length=this.uID.length;
//					console.log(this.uID)
					this.uID1=this.uID.join(';')
					console.log(this.uID1)
				}
				this.play();		//调用底部的数量更改动画；
			},
			play(){							//底部的数量更改动画；
				var size=this.$refs.size;
				var z=0;
				var y=26;
				var run=setInterval(function(){
					if(z<=28){
						z+=1
						size.style.fontSize=16+z+"px"
					}else{
						size.style.fontSize="26px"
						stape();
						clearInterval(run);
					}
					
				},0.5)
				function stape(){
					var stape=setInterval(function(){
						if(y>=8){
							y-=1
							size.style.fontSize=y+"px"
						}else{
							size.style.fontSize="0.18rem";
							clearInterval(stape);
						}
						
					},0.5)
				}
			},
			xuanZe(index,id){
				console.log(id)
				var boxs=this.$refs.tianjia.getElementsByClassName("borders");
				var length = boxs.length;
				var x=0;
				var borders=this.$refs.tianjia.getElementsByClassName("borders")[index];
//				console.log(borders.getAttribute("class","typeA"))
				if(borders.getAttribute("class")=="borders typeA"){
					this.y+=1;
					this.uID.push(id)				//保存项目id
					this.length=this.uID.length;
//					console.log(this.uID)
					this.uID1=this.uID.join(';')
					console.log(this.uID1)
					borders.setAttribute("class","borders typeB")
					this.XiaYibu=true;				//判断是否能下一步
				}else{
					for(var z=0; z<this.y; z++){
						if(this.uID[z]==id){
							this.uID.splice(z,1);
							this.length=this.uID.length;
//							console.log(this.uID)
							this.uID1=this.uID.join(';')
							console.log(this.uID1)
							this.y-=1
							break;
						}
					}
					borders.setAttribute("class","borders typeA")
					this.XiaYibu=false;				//判断是否能下一步
				}
				for(var i=0; i<length; i++){
					if(boxs[i].getAttribute("class")=="borders typeB"){
						x+=1;
					}
				}
				this.ButtenName=x;					//已选择的个数
				if(x==length){
					this.wuxuan=false;
					this.xuanze=true;
				}else{
					this.wuxuan=true;
					this.xuanze=false;
				}
				this.play();			//调用底部的数量更改动画；
			},
			butten(){
				if(this.XiaYibu==true){				//判断必须选择匹配人才可以跳转
					Indicator.open({spinnerType: 'fading-circle'});
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
					//判断是否是白名单	是白名单直接投递	
					var yes;
					var datas = {
						token:this.token,		//	token	是	[string]		
					}
					this.$http.post(URL.path+'finance/is_white',datas,{emulateJSON:true}).then(function(res){
						Indicator.close();
						if(res.body.returnCode==200){
							yes=res.body.data;
							window.location.href="#/Xeiyi/"+this.token+'/'+this.uID1+"/"+this.CanShu['type']+'/'+this.CanShu['XiangmuID']+'/'+this.length+"/TouDi";
						}else{
							yes=res.body.data;
							if(this.XiaYibu==true){				//判断必须选择匹配人才可以跳转
								window.location.href="#/Xeiyi/"+this.token+'/'+this.uID1+"/"+this.CanShu['type']+'/'+this.CanShu['XiangmuID']+'/'+this.length;
							}else{
								Toast("请选择匹配人");
							}
						}
						console.log(res);
					},function(res){
						Indicator.close();
						Toast("系统错误请稍后...")
					    console.log(res.status);
					})
				}else{
					Toast("请选择匹配人");
				}
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
	.wenzhang{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:2600;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:2700;
		    .home-search {
			    height: 100%;
			    line-height:0.45rem;
			    font-size: 0.2rem;
			    text-align: center;
			    color:#fff;
				.fanhui-butten{
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
			    	font{
			    		display:inline-block;
			    		width:0.17rem;
						height:0.17rem;
						margin:0.13rem 0.04rem 0 0;
						vertical-align: top;
			    	}
			    	.typeC{
						background-image:url("../img/wu.png");
						background-size:100% 100%;
					}
					.typeD{
						background-image:url("../img/bai.png");
						background-size:100% 100%;
					}
			    	span{
			    		display:inline-block;
			    	}
			    }
			}
		}
		.wenzhang-list::-webkit-scrollbar{width:0px;}
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;  		/*解决ios滑动*/
			.wenzhang-content{
				width:95%;
				/*height:auto;*/
				margin:0 auto;
				padding:0.45rem 0 0.6rem 0;
				.fankiu{
					width:100%;
					display:flex;
					align-items:center;
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("../img/zhao.png");
						background-size:100% 100%;
						margin:0 0.04rem 0 0.12rem;
					}
					.content-food{
						line-height:0.47rem;
						color:#6e6e6e;
						/*background:#fff;*/
						span{
							font-size:0.16rem;
						}
					}
				}
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					margin-bottom:0.1rem;
					border-radius:0.06rem;
					border:1px solid #ff7a59;
					box-sizing:border-box;
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
							overflow:hidden;
							/*border-radius:0.3rem;*/
							border:none;
							border:2px solid #e5e4e4;
							img{
								width:100%;
								height:100%;
							}
						}
						.names{
							flex:1;
							.border-right{
								display:inline-block;
								padding-right:0.06rem;
							}
						}
						.borders{
							width:0.2rem;
							height:0.2rem;
						}
						.typeA{
							background-image:url("../img/hong.png");
							background-size:100% 100%;
						}
						.typeB{
							background-image:url("../img/hong1.png");
							background-size:100% 100%;
						}
					}
					.xiaolv{
						padding:0.1rem 0;
						display:flex;
						color:#8c8c8c;
						background:#f7fcff;
						div{
							flex:1;
							text-align:center;
							font-size:0.14rem;
							li{
								color:#2abdfc;
								font-size:0.16rem;
								padding-bottom:0.07rem;
							}
						}
						.center{
							padding:0 0.1rem;
						}
					}
					.leimu{
						width:95%;
						margin:0 auto;
						color:#8c8c8c;
						padding:0.02rem 0;
						.zhonglei{
							width:100%;
							overflow:hidden;
							span{
								float:left;
								display:inline-block;
								line-height:0.26rem;
								white-space:nowrap;
								overflow:hidden;
								text-overflow:ellipsis;
							}
							.jieduan{
								width:48.3%;
								padding-right:1.2%;
							}
							.dangbi{
								width:49.3%;
								padding-right:1.2%;
							}
							.zijin{
								width:48.3%;
								padding-right:1.2%;
							}
							.fangkuan{
								width:48.3%;
								padding-right:1.2%;
							}
							.lingyu{
								width:auto;
								padding-right:1.2%;
							}
						}
					}
				}
			}
		}
		.zhaiyao-food{
			position:absolute;
			bottom:0;
			left:0;
			width:100%;
			height:0.60rem;
			background:#fff;
			font-size:0.16rem;
			display:flex;
			-webkit-box-pack:center;
			justify-content:center;
			-webkit-box-align:center;
			align-items:center;
			.ferst{
				flex:1;
				display:flex;
				align-items:center;
				align-content:center;
				justify-content:center;
				font{
					flex:1;
					&:first-child{
						text-align:right;
					}
				}
				.ferst-child{
					text-align:center;
					min-width:30px;
					margin:auto;
					color:#ff7a59;
				}
			}
			.last{
				line-height:0.6rem;
				padding:0 0.2rem;
				display:inline-block;
				color:#fff;
				background:#ff7a59;
			}
		}
	}
</style>


