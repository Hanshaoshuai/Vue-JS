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
							<span>已为您匹配{{body}}人<!--&nbsp;&nbsp;上拉匹配更多--></span>
						</div>
					</div>
					<div v-for="(cont,index) in data" class="add" :id="index" ref="lisitTop">
						<div v-for="(item,index) in cont" class="sousuo-content border-topbottom">
							<div class="content-header">
								<font><img :src="item.photo" :rul="item.photo"/></font>
								<div class="names">
									<span class="border-right">{{item.uname}}</span>
									<span>{{item.com_short}}</span>&nbsp;
									<span>{{item.position}}</span>
								</div>
								<div class="borders typeA" :id="item.id"  @click.stop="xuanZe($event,index,item.id)"></div>
							</div>
							<div v-if="item.ctype=='2'" class="xiaolv border-topbottom">
								<div class="border-right">
									<li>
										<font style="font-size:0.14rem;" v-if="item.itemnums==0">暂无</font>
										<font v-if="item.itemnums!=0">{{item.itemnums}}</font>
									</li>
									<span>收获项目数</span>
								</div>
								<div class="border-right">
									<li>
										<!--<font v-if="item.feedback==''" class="center">0&nbsp;%</font>
										<font v-if="item.feedback!=''" class="center">{{item.feedback*100}}&nbsp;%</font>-->
										<font class="center">{{item.chakanlv/100}}&nbsp;%</font>
									</li>
									<span class="center">查看率</span>
								</div>
								<div class="border-right">
									<li>
										<!--<font v-if="item.changenums==0" class="center">0&nbsp;%</font>
										<font v-if="item.changenums!=0">{{(item.changenums/item.itemnums*100).toFixed(1)}}&nbsp;%</font>-->
										<!--<font v-if="item.changenums!=0">{{Math.round((item.changenums/item.itemnums)*100)}}&nbsp;%</font>-->
										<font class="center">{{item.fankuilv/100}}&nbsp;%</font>
									</li>
									<span>反馈率</span>
								</div>
							</div>
							<div v-if="item.ctype=='3'" class="xiaolv border-topbottom">
								<div class="border-right">
									<li>
										<font style="font-size:0.14rem;" v-if="item.itemnums==0">暂无</font>
										<font v-if="item.itemnums!=0">{{item.itemnums}}</font>
									</li>
									<span>收获项目数</span>
								</div>
								<div class="border-right">
									<li>
										<!--<font v-if="item.feedback==''" class="center">0&nbsp;%</font>
										<font v-if="item.feedback!=''" class="center">{{item.feedback*100}}&nbsp;%</font>-->
										<font class="center">{{item.chakanlv/100}}&nbsp;%</font>
									</li>
									<span class="center">查看率</span>
								</div>
								<div class="border-right">
									<li>
										<!--<font v-if="item.changenums==0" class="center">0&nbsp;%</font>
										<font v-if="item.changenums!=0">{{(item.changenums/item.itemnums*100).toFixed(1)}}&nbsp;%</font>-->
										<!--<font v-if="item.changenums!=0">{{Math.round((item.changenums/item.itemnums)*100)}}&nbsp;%</font>-->
										<font class="center">{{item.fankuilv/100}}&nbsp;%</font>
									</li>
									<span>反馈率</span>
								</div>
							</div>
							<div v-if="item.ctype=='6'" class="xiaolv border-topbottom">
								<div class="border-right">
									<li>
										<font style="font-size:0.14rem;" v-if="item.itemnums==0">暂无</font>
										<font v-if="item.itemnums!=0">{{item.itemnums}}</font>
									</li>
									<span>收获项目数</span>
								</div>
								<div class="border-right">
									<li>
										<!--<font v-if="item.feedback==''" class="center">0&nbsp;%</font>
										<font v-if="item.feedback!=''" class="center">{{item.feedback*100}}&nbsp;%</font>-->
										<font class="center">{{item.chakanlv/100}}&nbsp;%</font>
									</li>
									<span class="center">查看率</span>
								</div>
								<div class="border-right">
									<li>
										<!--<font v-if="item.changenums==0" class="center">0&nbsp;%</font>
										<font v-if="item.changenums!=0">{{(item.changenums/item.itemnums*100).toFixed(1)}}&nbsp;%</font>-->
										<!--<font v-if="item.changenums!=0">{{Math.round((item.changenums/item.itemnums)*100)}}&nbsp;%</font>-->
										<font class="center">{{item.fankuilv/100}}&nbsp;%</font>
									</li>
									<span>反馈率</span>
								</div>
							</div>
							<div class="leimu">
								<div class="zhonglei">
									
									<span v-if="item.ctype==1" class="jieduan"><a style="color:#2abdfc">阶段：</a>{{item.fund_stage.exts[1].value}}</span>
									<span v-if="item.ctype==1" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.ctype==1" class="jieduan Yibai"><a style="color:#2abdfc">行业：</a>{{item.fund_stage.exts[0].value}}</span>
									
									<span v-if="item.ctype==2" class="jieduan"><font v-if="item.investment_type==0 || item.investment_type==1"><a style="color:#2abdfc">阶段：</a>{{item.fund_stage.exts[1].value}}</font></span>
									<span v-if="item.ctype==2" class="dangbi"><font v-if="item.investment_type==0 || item.investment_type==1"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</font></span>
									<span v-if="item.ctype==2" class="jieduan Yibai"><font v-if="item.investment_type==0 || item.investment_type==1"><a style="color:#2abdfc">行业：</a>{{item.fund_stage.exts[0].value}}</font></span>
									
									<span v-if="item.ctype==3" class="jieduan"><a style="color:#2abdfc">阶段：</a>{{item.fund_stage.exts[1].value}}</span>
									<span v-if="item.ctype==3" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.ctype==3" class="jieduan Yibai"><a style="color:#2abdfc">行业：</a>{{item.fund_stage.exts[0].value}}</span>
									
									<span v-if="item.ctype==7" class="jieduan"><a style="color:#2abdfc">阶段：</a>{{item.fund_stage.exts[1].value}}</span>
									<span v-if="item.ctype==7" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.ctype==7" class="jieduan Yibai"><a style="color:#2abdfc">行业：</a>{{item.fund_stage.exts[0].value}}</span>
									
									<!--<span v-if="item.total_finance" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.total_finance}}万</span>-->
									
									<span v-if="item.ctype==4" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.ctype==4" class="zijin"><a style="color:#2abdfc">资金成本：</a>年化{{item.fund_min}}%-{{item.fund_max}}%</span>
									<span v-if="item.ctype==4" class="fangkuan"><a style="color:#2abdfc">放款速度：</a>不超过{{item.loan_time}}天</span>
									
									<span v-if="item.ctype==5" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.ctype==5" class="zijin"><a style="color:#2abdfc">资金成本：</a>年化{{item.fund_min}}%-{{item.fund_max}}%</span>
									<span v-if="item.ctype==5" class="fangkuan"><a style="color:#2abdfc">放款速度：</a>不超过{{item.loan_time}}天</span>
									<!--Xiangmutype-->
								</div>
							</div>
						</div>
					</div>
					<div v-show="tishis" class="tishi-bottom">
						<div class="tishis">
							<ul>
								<li class="border-bottom"></li>
								<li class="tishi-center">{{jeiguo}}</li>
								<li class="border-bottom"></li>
							</ul>
						</div>
					</div>
				</div>
				<div style="width:100%;height:0.6rem;"></div>
				<span class="loding" v-show="topStatus">
	            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
	          	</span>
			</div>
			<div class="zhaiyao-food">
				<div class="ferst"><font>您已选择</font><span ref="size" class="ferst-child">{{ButtenName}}</span><font>个投资人</font></div>
				<span class="last" @click.stop="butten()">下一步</span>
			</div>
			<transition name="fade1">
				<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
			</transition>
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import { Indicator } from 'mint-ui';
	import {URL} from '../../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	
	
	export default {
		props:{
//			childnone:{
////				type:"boolean"
//			},
			token:{},
			type:{},
			XiangmuID:{},
			Xiangmutype:{}
		},
		data () {
			return {
				data:[],
				y:0,
				body:"",
				CanShu:"",
				block:false,
				ButtenName:0,
				showFlag:true,
				wuxuan:true,
				xuanze:false,
				XiaYibu:false,
				uID:[],		//项目id
				uID1:[],	//项目id字符串；
				length:'',	//匹配项目个数
				img:'',
				num:"",
				n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
				height:0,
				topBlock:false,
				page:1,
				tishis:false,
				jeiguo:"亲已经到底了",
				topStatus:false,
				tems:'',
				listlenght:-1,
				
				
				scrollY:'',
				scrollHeight:"",
				clientHeight:"",
				top:0
			}
		},
		mounted(){
			this.pipeiBlock();
		},
		methods:{
			listnone(){
				Indicator.close();
//				this.showFlag=false;
				history.go(-1)
			},
			zhiDing(){		//返回顶部；
				this.betterscroll.scrollToElement(this.$refs.tianjia,300);
			},
			initScroll(){
				this.scrollHeight=this.$refs.tianjia.scrollHeight;		//总高度
				this.clientHeight=this.$refs.wrapper.clientHeight;	//可视区高度
				this.betterscroll=new BScroll(this.$refs.wrapper,{
					click:true,probeType:3//probeType：3相当于实时监听高度位置
				});
				//通过betterscroll对象监听一个scroll事件，当scroll滚动时能够暴露出来，参数pos就是位置
				this.betterscroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y));
					if(this.scrollY>600){
						this.topBlock=true;
					}else{
						this.topBlock=false;
					}
//					console.log(this.scrollHeight);
//					console.log(this.clientHeight+this.scrollY)
					if(this.clientHeight+this.scrollY==this.scrollHeight){
						if(this.top==0){
							this.top=1;
							var tata=this;
							this.topStatus=true;
							this.tems=setTimeout(function(){
								tata.pipeiBlock();
							},100)
						}
					}
				});
				if(this.scrollHeight<600){
					this.tishis=true;
				}
			},
			pipeiBlock(){
				Indicator.open({spinnerType: 'fading-circle'});
				//匹配投资人列表		
				var datas = {
					token:this.token,		//	token	是	[string]		
					item_id:this.XiangmuID,		//	项目id	是	[string]		
					page:this.page,			//	page	是	[string]		
					size:50			//	size	是	[string]	
				}
				this.$http.post(URL.path+'finance/investor_list',datas,{emulateJSON:true}).then(function(res){
					console.log(res);
					Indicator.close();
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.jeiguo="暂无匹配结果"
						}
						this.tishis=true;
						return;
					}else{
						this.data.push(res.body.data);
					}
					if(this.n !== 0){
						clearTimeout(this.tems);
					}
					this.page=this.page*1;
					this.page=this.page+=1;
					this.$nextTick(function(){
						this.body=this.$refs.tianjia.getElementsByClassName("borders").length;
						var img = this.$refs.tianjia.getElementsByTagName("img");
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
						if (!this.betterscroll) {
							this.initScroll();
						}else{
							this.scrollHeight=this.$refs.tianjia.scrollHeight;		//总高度
							this.betterscroll.refresh();
							this.top=0;
//							console.log(this.scrollHeight)
//							console.log(this.clientHeight+this.scrollY)
						}
					})
				},function(res){
					Indicator.close();
//					Toast("系统错误请稍后...")
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
//					console.log(this.uID1)
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
//					console.log(this.uID1)
				}
				this.play();		//调用底部的数量更改动画；
			},
			play(){							//底部的数量更改动画；
				var size=this.$refs.size;
				var z=0;
				var y=24;
				var run=setInterval(function(){
					if(z<=26){
						z+=2
						size.style.fontSize=16+z+"px"
					}else{
						size.style.fontSize="24px"
						stape();
						clearInterval(run);
					}
					
				},0.5)
				function stape(){
					var stape=setInterval(function(){
						if(y>=8){
							y-=2
							size.style.fontSize=y+"px"
						}else{
							size.style.fontSize="0.18rem";
							clearInterval(stape);
						}
						
					},0.5)
				}
			},
			xuanZe(event,index,id){
//				console.log(event)
				var target=event.target
				var boxs=this.$refs.tianjia.getElementsByClassName("borders");
				var length = boxs.length;
				var x=0;
				var borders=this.$refs.tianjia.getElementsByClassName("borders")[index];
//				console.log(borders.getAttribute("class","typeA"))
				if(target.getAttribute("class")=="borders typeA"){
					this.y+=1;
					this.uID.push(id)				//保存项目id
					this.length=this.uID.length;
//					console.log(this.uID)
					this.uID1=this.uID.join(';')
//					console.log(this.uID1)
					target.setAttribute("class","borders typeB")
					this.XiaYibu=true;				//判断是否能下一步
				}else{
					for(var z=0; z<this.y; z++){
						if(this.uID[z]==id){
							this.uID.splice(z,1);
							this.length=this.uID.length;
//							console.log(this.uID)
							this.uID1=this.uID.join(';')
//							console.log(this.uID1)
							this.y-=1
							break;
						}
					}
					target.setAttribute("class","borders typeA")
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
				if(this.ButtenName==0){
					this.XiaYibu=false;				//判断是否能下一步
				}
				this.play();			//调用底部的数量更改动画；
			},
			butten(){
				if(this.XiaYibu==true){				//判断必须选择匹配人才可以跳转
//					this.showFlag=false;
					Indicator.open({spinnerType: 'fading-circle'});
					//判断是否是白名单	是白名单直接投递	
					var yes;
					var datas = {
						token:this.token,		//	token	是	[string]		
					}
					this.$http.post(URL.path+'finance/is_white',datas,{emulateJSON:true}).then(function(res){
						Indicator.close();
//						console.log(res);
						if(localStorage.getItem("type")=='7'){
	//						window.location.href="#/Xeiyi/"+this.token+'/'+this.uID1+"/"+this.CanShu['type']+'/'+this.CanShu.XiangmuID+'/'+this.length+"/TouDi";
							window.location.href="#/Xeiyi/"+this.token+'/'+this.uID1+"/"+this.type+'/'+this.XiangmuID+'/'+this.length+"/TouDi";
						}else{
							yes=res.body.data;
							if(this.XiaYibu==true){				//判断必须选择匹配人才可以跳转
//								window.location.href="#/Xeiyi/"+this.token+'/'+this.uID1+"/"+this.CanShu['type']+'/'+this.CanShu.XiangmuID+'/'+this.length;
								window.location.href="#/Xeiyi/"+this.token+'/'+this.uID1+"/"+this.type+'/'+this.XiangmuID+'/'+this.length;
							}else{
								Toast("请选择匹配人");
							}
						}
//						if(res.body.returnCode==200){
//							yes=res.body.data;
//						}else{
//							
//						}
					},function(res){
						Indicator.close();
						Toast("系统错误请稍后...")
					    console.log(res.status);
					})
				}else{
					Toast("请选择匹配人");
				}
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
//			this.body=this.data.length*50;
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
	.fade1-enter-active {
	  	transition: all .5s ease;
	}
	.fade1-leave-active {
	  	transition: all .5s ease;
	}
	.fade1-enter, .fade1-leave-active {
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
						background-image:url("../img/hong1.png");
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
		/*.wenzhang-list::-webkit-scrollbar{width:0px;}*/
		.wenzhang-list{
			width:100%;
			height:100%;
			/*overflow-y:auto;
			-webkit-overflow-scrolling:touch;  		/*解决ios滑动*/
			.wenzhang-content{
				position:relative;
				width:95%;
				height:auto;
				margin:0 auto;
				padding:0.45rem 0 1rem 0;
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
							position:relative;
							display:inline-block;
							width:0.43rem;
							height:0.43rem;
							margin-right:0.1rem;
							overflow:hidden;
							/*border-radius:0.3rem;*/
							border:none;
							border:2px solid #e5e4e4;
							img{
								position:absolute;
						    	top:0;
						    	right:0;
						    	left:0;
						    	bottom:0;
						    	margin:auto;
								/*width:100%;
								height:100%;*/
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
							min-height:0.06rem;
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
							.Yibai{
								width:98%;
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
				.tishi-bottom{
					position:absolute;
					left:0;
					right:0;
					bottom:0.66rem;
					width:92.5%;
					height:0.36rem;
					margin:0 auto;
					ul{
						width:100%;
						height:100%;
						display:flex;
						li{
							flex:1;
							height:0.2rem;
							&.tishi-center{
								width:0.57rem;
								line-height:0.36rem;
								text-align:center;
								font-size:0.12rem;
								color:#bcbcbc;
							}
						}
					}
				}
			}
			.loding{
				position:fixed;
				bottom:0.56rem;
				left:0;
				margin-bottom:0.12rem;
				width:100%;
				display: inline-block;
				text-align:center;
				display:flex;
				-webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
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
		.zhiDing{
			position:fixed;
			bottom:1.6rem;
			right:0.2rem;
			background-image:url("../img/top.png");
			background-size:100% 100%;
			width:0.5rem;
			height:0.5rem;
			/*z-index: 200;*/
		}
	}
</style>


