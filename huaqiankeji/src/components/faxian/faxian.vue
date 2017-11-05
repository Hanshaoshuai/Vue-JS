<template>
	<!--<transition name="fade">-->
		<div class="faxian">
			<div class="searchBox">
				<div class="home-search" @click.stop="sousuo()">
					<img src="./img/circle_hot_search.png"/>
					<span>搜公司，碰碰运气吧</span>
				</div>
			</div>
			<div ref="wrapper" class="box" id="top">
				<div style="width:100%;height:0.48rem;"></div>
				<div class="FadeContent">
					<div class="banner">
						<img src="./img/bg.jpg"/>
						<div class="gaikuang">
							<div class="gaikuang-header border-bottom">
								<span>企融直通车最新动态数据</span>
							</div>
							<div class="gaikuang-content">
								<div v-for="(item,index) in dongTai" class="gaikuang-list border-right">
									<span>{{item.content}}</span>
									<span>{{item.title}}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="ContentType clearbox">
						<div v-if="t" class="TypeList" @click.stop="XiangMuGo()">
							<div class="TypeList-img">
								<li><span v-if="XiangmuShu">{{XiangmuShu}}</span></li>
							</div>
							<div class="TypeList-text border-right">
								<span>新项目</span>
								<span class="text-coler">专属优质项目等您反馈</span>
							</div>
						</div>
						<div v-if="t" class="TypeList" @click.stop="qiyefankuiGo()">
							<div class="TypeList-img">
								<li class="fankui"><span v-show="Fankuiblock">{{FankuiShu}}</span></li>
							</div>
							<div class="TypeList-text">
								<span>企业反馈</span>
								<span class="text-coler">查看反馈留言箱</span>
							</div>
						</div>
						<div v-if="q" class="TypeList" @click.stop="rongziGo()">
							<div class="TypeList-img">
								<li></li>
							</div>
							<div class="TypeList-text">
								<span>我要融资</span>
								<span class="text-coler">智能匹配全国投资机构</span>
							</div>
						</div>
						<div v-if="q" class="TypeList" @click.stop="touzifankuiGo()">
							<div class="TypeList-img">
								<li class="fankui"><span v-show="Fankuiblock">{{FankuiShu}}</span></li>
							</div>
							<div class="TypeList-text">
								<span>投资人反馈</span>
								<span class="text-coler">查看反馈留言箱</span>
							</div>
						</div>
					</div>
					<!--<div class="bannerlist">
						<div class="swiper-img">
							<span></span>
						</div>
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<span>张摆上</span>
									<span>同创伟业</span>
									<span>合伙</span>
									<span>入住了</span>
								</div>
								<div class="swiper-slide">
									<span>张sa摆上</span>
									<span>同创伟业</span>
									<span>合dds伙</span>
									<span>入住了</span>
								</div>
								<div class="swiper-slide">
									<span>张aaa摆上</span>
									<span>同s创伟业</span>
									<span>合伙</span>
									<span>入住fd了</span>
								</div>
							</div>
						</div>
					</div>-->
					<div class="ContentList ">
						<div class="swiper-img">
							<span class="img-rongzi"></span>
						</div>
						<div class="swiper-container">
							<span v-if="type=='2'" class="text">你可以联系的其他正在融资项目</span>
							<span v-if="type=='3'" class="text">你可以联系的其他正在融资项目</span>
							<span v-if="type=='4'" class="text">你可以联系的其他正在融资项目</span>
							<span v-if="type=='5'" class="text">你可以联系的其他正在融资项目</span>
							<span v-if="type=='6'" class="text">你可以联系的其他正在融资项目</span>
							<span v-if="type=='1'" class="text">其他正在融资的企业</span>
							<span v-if="type=='7'" class="text">其他正在融资的企业</span>
						</div>
					</div>
<!--意见反馈-->		
					<!--<div class="tucao" @click.stop="yijianFankui()">
						<img src="./img/hongbao.png" alt="" />
					</div>-->
					
<!--循环遍历data-->	<div v-for="(cont,index) in data" class="add" :id="index" ref="lisitTop">
						<div v-for="(item,index) in cont" class="Content" >
							<div class="ContentText" :id="index" @click.stop="contblock(item.id,item.type)">
								<div class="TextMame">
									<div class="margin">		<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 6：公司调研-->
										<span v-if="item.type==1" class="texts">定增</span>
										<span v-if="item.type==2" class="texts">做市</span>
										<span v-if="item.type==3" class="texts">转老股</span>
										<span v-if="item.type==4" class="texts">股权质押</span>
										<span v-if="item.type==5" class="texts">融资租赁</span>
										<span v-if="item.type==6" class="texts">研报支持</span>
										<span v-if="item.type==7" class="texts">公司调研</span>
										<span class="texts">* {{item.com_short.substr(1, 1)}} *</span>
										<span class="texts">（{{item.com_code.substr(0, 2)}} **** ）</span>
									</div>
									<div class="TypeList">
										<span v-for="(name,index) in item.industry" class="texts">{{name.title}}</span>
									</div>
								</div>
								<div class="BottomText">
									<span class="texts">{{item.lightspot}}</span>
								</div>
								<div class="ContentTime border-top" @click.stop="Guquanzhaiyao()">
									<div class="tishi-left">
										<span v-if="item.ctype==1" class="text-center">企业</span>
										<span v-if="item.ctype==7" class="text-center">财务顾问</span>
										<span>{{numToTime(item.create_time)}}</span>&nbsp发布
									</div>
									<div class="tishi-right">
										<span>{{item.feedback}} 反馈</span>
										<span>{{item.follow}} 跟进</span>
									</div>
								</div>
								<li class="li"></li>
								<ol class="ol"></ol>
							</div>
						</div>
					</div>
					<transition name="promps">
					<div class="tishi-bottom" v-show="tishis">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">{{botent}}</li>
							<li class="border-bottom"></li>
						</ul>
					</div>
					</transition>
					<span class="loding" v-show="topStatus">
		            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
		          	</span>
				</div>
				<div style="width:100%;height:0.6rem;"></div>
		    </div>
			<xiangmugenjin :shifouZhuce="shifouZhuce"></xiangmugenjin>
			<router-view :setscrollTop="scrollTop" :datas="datas" :userContent='userContent' :type="type" :FankuiShu="FankuiShu"></router-view>
			<transition name="fade">
				<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
			</transition>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {numToTime} from "../../common/js/date.js";
	import { Indicator } from 'mint-ui';
	import {URL} from '../../common/js/path';
	import { Toast } from 'mint-ui';
	import xiangmugenjin from "./xiangmuGenjin.vue";
	
	
	export default {
		props:{
			
		},
		data () {
			return {
				yici:'0',
				imgSrc:"/dist/hongbao.png",
				dongTai:"",
				userContent:"",
				token:"",
				userID:'',
				type:"",
				data:[],
				jia:"1000",
				ge:"666",
				ren:"8888",
				shijian:"6",
				datas:"",
				ResChild:"",
				t:false,
				q:false,
				times:20177111129,
				showList:false,
				mySwiper:"",
				scrollTop:"",
				list: [],
		        allLoaded: false,
		        bottomStatus: '',
		        wrapperHeight: 0,
		        topStatus:false,
		        tishis:false,
		        scrollTop:"",
		        XiangmuShu:"",
		        FankuiShu:"",
		        Fankuiblock:false,
		        ZongHe:"",
		        botent:"亲已经到底了",
		        numToTime:"",
		        gengJingdu:'',
		        shifouZhuce:'',		//注册是否通过
		        page:1,
		        n:0,
		        topBlock:false,
		        weitongguoShiyong:'',
		        houtaiTishi:'',
		        diyiCi:false,
		        shengqingZhongtishi:'您的注册申请尚在审核中',
		        shaoDeng:false
			}
		},
		mounted() {	//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构 5:券商研究员 6:新三板做市商
			var that=this;
	    	window.onhashchange = function() {
				console.log('111111')
				if(that.shifouZhuce=='2'){
					that.huoqugeshu();
					that.qiyeFankui();
				}
				if(localStorage.getItem("shifouZhuce")!='2'){
					that.panDuan();
					console.log(localStorage.getItem("shifouZhuce"))
				}
			}
			var faxian=window.location.href
			localStorage.setItem("faxian",faxian)
			this.numToTime=numToTime;
			this.userContent={
	  			userID:localStorage.getItem("userID"),			//用户ID
				token:localStorage.getItem("token"),		//用户token
				phone:localStorage.getItem("phone"),		//用户电话
				type:localStorage.getItem("type"),			//用户类型
				photo:localStorage.getItem("photo"),	//用户头像id
				photourl:localStorage.getItem("photourl")	//用户头像URL地址
	  		}
			this.type=this.userContent['type'];
			this.userType(this.type)
			console.log(this.userContent)
	    	var datas = {		//相应参数
				token:"N8KCEuwCyhOSviBLwm9PhbrZEQ1aUJBhHMkL7XNv5cEqBF2xs1DQSupWBgxWpz5w",//	token	是	[string]		
				page:"",		
				size:'4'	
			}
	    	var token={
	    		token:this.userContent.token,
	    		page:1,			//	page	是	[string]		
				size:1			//	size	是	[string]
	    	}
	    	this.token=token;
//			刚注册判断接口	个人信息
	    	this.panDuan();
//			获取企融直通车动态数据
			this.dongtaiShuju()
	    },
	    activated(){
	    	var that=this;
	    	window.onhashchange = function() {
//	    		获取通讯录
				if(that.shaoDeng==false){
//					alert("开始提交")
					that.shaoDeng=true;
					if(!localStorage.getItem("YiyouTongxin")){
						var params={
				    		id:localStorage.getItem("userID"),
				    		phone_list:localStorage.getItem("TongxunLu")
				    	}
//						alert("本地已存在记录正在提交")
						that.$http.post(URL.path1+'common/phone_list',params,{emulateJSON:true}).then(function(res){
//							console.log('提交通讯录成功');
//							alert("提交通讯录成功")
							localStorage.setItem("YiyouTongxin",'1');
							console.log(res);
							clearTimeout(temouto);
						},function(res){
//							alert("没有提交成功")
						    console.log(res);
						})
					}else{
//						alert("YiyouTongxin不存在")
					}
				}
				console.log('111111')
				that.topBlock=false;
				if(that.shifouZhuce=='2'){
					that.huoqugeshu();
					that.qiyeFankui();
					that.qinQiu();
				}
//				if(that.diyiCi==false){
//					that.jiantingTongguo()
//				}
			}
//	    	if(this.shifouZhuce=='2'){
//				this.huoqugeshu();
//				this.qiyeFankui();
//			}
		},
		methods:{	//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构 5:券商研究员 6:新三板做市商 7:财务顾问
			topGo(){
				if(this.$refs.wrapper.scrollTop>600){
					this.topBlock=true;
				}else{
					this.topBlock=false;
				}
			},
			zhiDing(){		//返回顶部；
				this.$refs.wrapper.scrollTop=0;
			},
//			监听是否通过
			jiantingTongguo(){
				var params={
		    		token:this.userContent["token"],
		    		terminalNo:3
		    	}
				this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
					console.log('监听个人信息更改通过');
					console.log(res);
					this.shifouZhuce=res.body.data.status;
					localStorage.setItem("shifouZhuce",res.body.data.status)
					if(res.body.data.status==2){
						console.log("判断注册通过的首页项目列表成功");
						this.diyiCi=true;
						this.panDuan();
					}else{
						if(res.body.returnCode=='401'){
							window.location.href="#/denglu";
							this.shengqingZhongtishi='1'
						}else{
							Toast(this.shengqingZhongtishi)
						}
					}
				},function(res){
				    console.log(res);
				})
			},
//			刚注册判断接口	个人信息
			panDuan(){
				var params={
		    		token:this.userContent["token"],
		    		terminalNo:3
		    	}
				this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
					console.log('个人信息');
					console.log(res);
					this.shifouZhuce=res.body.data.status;
					localStorage.setItem("shifouZhuce",res.body.data.status)
					if(res.body.data.status==2){
						console.log("判断注册通过的首页项目列表成功");
						this.diyiCi=true;
			//	    	首页项目列表（非自己收到的项目）接口
				    	this.qinQiu();
			//			投资机构收到的新项目数
						this.huoqugeshu();
			//			企业获取反馈数	和	投资机构收获取反馈数
						this.qiyeFankui();			
					}else{
						this.weitongguoShiyong='0'
						this.WeitongGuo();
					}
				},function(res){
				    console.log(res);
				})
			},
			faxianScroll(){
				if(this.$refs.wrapper.scrollTop>600){
					this.topBlock=true;
				}else{
					this.topBlock=false;
				}
				this.imgs()
			},
			imgs(){
				var scrollHeights=this.$refs.wrapper.scrollHeight;
				var setHeight = document.documentElement.clientHeight; //可见区域高度
				var scrollTop = this.$refs.wrapper.scrollTop; //滚动条距离顶部高度
				var x=Math.abs(Math.round(setHeight + scrollTop))
//				console.log(x)
//				console.log(scrollHeights)
				if(x==scrollHeights || scrollHeights-x==1){
					var tata=this
					this.topStatus=true;
					this.tems=setTimeout(function(){
						if(tata.weitongguoShiyong=='0'){
							tata.WeitongGuo();
						}else{
							tata.qinQiu();
						}
					},1000)
				}
			},
//			注册未通过的首页项目列表成功
			WeitongGuo(){
				var post={
					item:2,
					page:this.page,			//	page	是	[string]		
					size:6					//	size	是	[string]
				}
				this.$http.post(URL.path+'common/item_list',post,{emulateJSON:true}).then(function(res){
					console.log(res);
					console.log("注册未通过的首页项目列表成功");
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.botent="亲已经到底了"
						}
						this.$refs.wrapper.removeEventListener('scroll', this.faxianScroll);
						this.$refs.wrapper.addEventListener('scroll', this.topGo)
						this.tishis=true;
						return;
					}else{
						this.data.push(res.body.data);
						if(this.data[0].length>2){
							this.$nextTick(function(){
								if(this.yici=='0'){
									this.tuCao();
									this.yici=1;
								}
							});
						}else{
							this.botent="暂无数据"
						}
					}
					if(this.n !== 0){
						clearTimeout(this.tems);
					}
					this.page=this.page*1;
					this.page=this.page+=1;
					if(this.n == 0){
						this.$nextTick(function(){
							this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
	  						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	  						this.imgs()
						});
					}
				},function(res){
					this.topStatus=false;
				    console.log(res);
				})
			},
			qinQiu(){		//类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报
//	    	首页项目列表（非自己收到的项目）接口
				var token={
		    		token:this.userContent.token,
		    		page:this.page,			//	page	是	[string]		
					size:6					//	size	是	[string]
		    	}
				console.log(token)
				this.$http.post(URL.path+'finance/get_item_list',token,{emulateJSON:true}).then(function(res){
//					//判断是否注册通过审核；
					console.log("首页项目列表成功");
					console.log(res)
					if(res.body.returnCode!=200 && res.body.returnCode!=201){
						Toast(res.body.msg)
						this.shifouZhuce=6;
						this.houtaiTishi=res.body.msg
						localStorage.setItem("shifouZhuce",'6')
						localStorage.setItem("houtaiTishi",res.body.msg)
					}else{
						if(res.body.returnCode==200){
							localStorage.setItem("shifouZhuce",'2')
						}
					}
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.botent="亲已经到底了"
						}
						this.$refs.wrapper.removeEventListener('scroll', this.faxianScroll);
						this.$refs.wrapper.addEventListener('scroll', this.topGo)
						this.tishis=true;
						return;
					}else{
						this.data.push(res.body.data);
						if(this.data[0].length>2){
							this.$nextTick(function(){
								if(this.yici=='0'){
									this.tuCao();
									this.yici=1;
								}
							});
						}else{
							this.botent="暂无数据"
						}
					}
					if(this.n !== 0){
						clearTimeout(this.tems);
					}
					this.page=this.page*1;
					this.page=this.page+=1;
					if(this.n == 0){
						this.$nextTick(function(){
							this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
	  						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	  						this.imgs()
						});
					}
					console.log(this.data);
				},function(res){
					this.topStatus=false;
				    console.log(res);
//				    Toast("系统繁忙请稍后再试")
				})
				if(this.list.length==0){
					this.list.push(this.data);
				}else{
					this.list.push(this.data);
				}
			},
			tuCao(){
				var that=this;
				var box=document.getElementsByClassName('ContentText');
				var child=document.getElementsByClassName('Content')[1];
				console.log(child)
				var div=document.createElement("div");
				var img=document.createElement("img");
				div.style.width="100%";
				div.style.height="1rem";
				div.style.background="#00A0DC";
				div.style.margin='0.13rem 0 0.13rem 0';
				div.style.overflow="hidden";
				img.style.width='100%';
				img.style.height='100%';
    			img.style.float='left';
				div.appendChild(img);
				child.appendChild(div);
				div.onclick=function(){
					that.yijianFankui();
				}
				img.src=this.imgSrc;
				for(var i=0; i<4; i++){
					if(i==0 || i==2){
						box[i].getElementsByClassName('li')[0].style.display="none";
						box[i].getElementsByClassName('ol')[0].style.display="none";
					}
				}
			},
			dongtaiShuju(){
				var token={
		    		post:3
		    	}
//				获取企融直通车动态数据
				this.$http.post(URL.path+'common/dynamic',token,{emulateJSON:true}).then(function(res){
					this.dongTai=res.body.data
					console.log("获取企融直通车动态数据");
					console.log(this.dongTai[0].content);
					console.log(res);
				},function(res){
				    console.log(res);
				})
			},
			huoqugeshu(){
//			投资机构收到的新项目数
				var token={
		    		token:this.userContent.token
		    	}
				this.$http.post(URL.path+'finance/new_item',token,{emulateJSON:true}).then(function(res){
					this.XiangmuShu=res.body.data.new_item;
//					console.log("投资机构收到的新项目个数");
//					console.log(res);
				},function(res){
				    console.log(res);
				})
			},
			qiyeFankui(){
//				企业获取反馈数	和	投资机构收获取反馈数
				var token={
		    		token:this.userContent.token
		    	}
				this.$http.post(URL.path+'chatcomment/get_feedback_num',token,{emulateJSON:true}).then(function(res){
					console.log('企业获取反馈数');
					console.log(res);
					if(res.body.returnCode==200){
						this.FankuiShu=res.body.data[0].feedback_num;
					}else{
						this.FankuiShu=0;
					}
//					this.FankuiShu=res.body.data[0].feedback_num;
					if(this.FankuiShu!='0'){
						this.Fankuiblock=true;
					}else{
						this.Fankuiblock=false;
					}
				},function(res){
				    console.log(res);
				})
			},
			userType(type){
				if(type==1 || type==7){
					this.q=true;
				}else{
					this.t=true;
				}
			},
			sousuo(){
				if(this.shifouZhuce==2){
					window.location.href="#/faxian/sousuo/";
				}else{
					if(this.shifouZhuce=='6'){
						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			rongziGo(){
				if(this.shifouZhuce==2){
					window.location.href="#/faxian/WoyaoRongzi/"+this.userContent["token"];
				}else{
					if(this.shifouZhuce=='6'){
						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			touzifankuiGo(){
				if(this.shifouZhuce==2){
					console.log(this.userContent)
					window.location.href="#/faxian/Fankui/"+this.userContent["token"];
				}else{
					if(this.shifouZhuce=='6'){
						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			XiangMuGo(){
				if(this.shifouZhuce==2){
					window.location.href="#/faxian/XinxiangMu/"+this.userContent["token"];
					this.scrollTop=sessionStorage.getItem("scrollTop")
				}else{
					if(this.shifouZhuce=='6'){
						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			qiyefankuiGo(){
				if(this.shifouZhuce==2){
					console.log(this.userContent)
					window.location.href="#/faxian/Fankui/"+this.userContent["token"];
				}else{
					if(this.shifouZhuce=='6'){
						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			contblock(id,type){		//<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 7:公司调研-->
				if(this.shifouZhuce==2){
					if(type==1 || type==2 ||type==3 || type==7){
						window.location.href="#/faxian/DingzengZhaiyao/"+this.userContent["token"]+'/'+id;
					}else{
						window.location.href="#/faxian/GuquanZhaiyao/"+this.userContent["token"]+'/'+id;
					}
				}else{
					if(this.shifouZhuce=='6'){
						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			Guquanzhaiyao(){
				this.$refs.GuquanShow.Guquanblock();
			},
			yijianFankui(){
				window.location.href="#/faxian/Yijian/"+this.userContent["token"];
			},
//			faxianScroll () {
//			  var scrollTop = this.$refs.wrapper.scrollTop
//			  sessionStorage.setItem("faxianScroll",scrollTop)
////			  console.log(sessionStorage.getItem("faxianScroll"))
//			},
		},
		created() {
	    },
		events:{
		},
		filters:{
			formatDate(time){
				let date = new Date(time);
				return formatDate(date,'yyyy-MM-dd hh:mm');
			}
		},
		updated(){
		},
		components:{
			xiangmugenjin
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
	  	opacity: 0;
	}

	.faxian{
		width:100%;
		height:100%;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.48rem;
		    background-color: #ff7a59;
		    z-index:20;
		    .home-search {
		    	position: absolute;
		    	margin:auto;
		    	top:0;
		    	left:0;
		    	right:0;
		    	bottom:0;
			    width: 3.21rem;
			    height: 0.3rem;
			    background: #fff;
			    color: #CACACA;
    			border-radius: 0.3rem;
			    font-size: 0.14rem;
			    display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    img{
			    	width:0.16rem;
			    	margin-right:0.1rem;
			    }
			}
			.tubiao{
				position:absolute;
				right:0.18rem;
				top:0.12rem;
				width:0.2rem;
				height:0.2rem;
				background-image:url("./img/wode1.png");
				background-size:100% 100%;
				/*background:#42B983;*/
				span{
					display:inline-block;
					width:0.08rem;
					height:0.08rem;
					background:#E19900;
					border-radius:0.05rem;
					position:absolute;
					top:-0.03rem;
					right:-0.04rem;
				}
			}
		}
		.box::-webkit-scrollbar{width:0px}
		.box{
			position:absolute;
			overflow-y:scroll;
			width:100%;
			height:100%;
			top:0;
			left:0;
			overflow-y:scroll;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.FadeContent{
				position:relative;
				width:100%;
				height:auto;
				padding-bottom:0.4rem;
				.banner{
					position:relative;
					width:100%;
					min-height:1.28rem;
					/*padding:1.42rem solid #f5f5f9;*/
					/*background-image:url("./img/banner.png");
					background-size:100%;*/
					img{
						width:100%;
					}
					.gaikuang{
				    	width:95%;
				    	height:1.41rem;
				    	margin:0 auto;
				    	border-radius:0.15rem;
				    	background-color:rgba(255,255,255,0.7);
				    	position:absolute;
				    	top:0.12rem;
				    	left:2.5%;
				    	box-shadow: 0.03rem 0.03rem 0.04rem #eeeef5;
				    	.gaikuang-header{
				    		width:90.1%;
				    		height:0.36rem;
				    		margin:0 auto;
				    		padding-top:0.42rem;
				    		text-align:center;
				    		span{
				    			font-size:0.18rem;
				    			line-height:0.18rem;
				    		}
				    	}
					    .gaikuang-content{
					    	width:100%;
					    	display:flex;
					    	/*-webkit-box-pack: center;
						    justify-content: center;
						    -webkit-box-align: center;
						    align-items: center;*/
					    	.gaikuang-list{
					    		text-align:center;
					    		flex:1;
					    		margin-top:0.13rem;
					    		span{
					    			font-size:0.15rem;
					    			/*font-weight:500;*/
					    			display:block;
					    			line-height:0.14rem;
					    			padding-bottom:0.10rem;
					    			/*font-weight:600;*/
					    			&:first-child{
						    			color:#ff7a59;
						    		}
					    			&:last-child{
						    			line-height:0.14rem;
						    			padding-bottom:0rem;
						    		}
					    		}
					    	}
					    }
					}
				}
				.tucao{
					width:100%;
					min-height:1rem;
					background:#00A0DC;
					margin:0.13rem 0 0.13rem 0;
					overflow:hidden;
					img{
						width:100%;
						float:left;
					}
				}
				.ContentType{
					width:95%;
					margin:0 auto;
					/*margin-top:-0.23rem;*/
					margin-top:0.1rem;
					zoom:1;
					position:relative;
					/*z-index:11;*/
					.TypeList{
						width:48%;
						color:#323232;
						float:left;
						background:#ffffff;
						border-radius:0.06rem;
						box-shadow: 0.03rem 0.03rem 0.04rem #e2e2e6;
						.TypeList-img{
							width:100%;
							height:0.52rem;
							margin:0 auto;
							border-radius:0.5rem;
							display: flex;
							-webkit-box-pack: center;
						    justify-content: center;
						    -webkit-box-align: center;
						    align-items: center;
							li{
								width:0.44rem;
								height:0.37rem;
								background-image:url("./img/bp.png");
								background-size:100% 100%;
								position:relative;
								span{
									width:0.2rem;
									height:0.2rem;
									position:absolute;
									top:-0.02rem;
									right:-0.12rem;
									background:#ff2d00;
									border-radius:0.15rem;
									font-size:0.12rem;
									text-align:center;
									line-height:0.21rem;
									color:#fff;
								}
							}
							.fankui{
								background-image:url("./img/2.png");
							}
						}
						.TypeList-text{
							flex:1;
							font-size:0.17rem;
							line-height:0.17rem;
							padding-bottom:0.05rem;
							text-align:center;
							span{
								&:first-child{
									/*font-weight:600;*/
								}
							}
							.text-coler{
								display:block;
								color:#c1c1c1;
								font-size:0.11rem;
								margin-top:0.05rem;
							}
						}
						&:last-child{
							float:right;
						}
					}
				}
				.clearbox:after{
					display:block;
					content:"";
					clear:both;
					overflow:hidden;
					height:0;
				}
				.bannerlist,.ContentList{
					width:100%;
					height:0.3rem;
					background:#fff;
					margin-top:0.13rem;
					overflow: hidden;
					.swiper-img{
						width:13%;
						height:100%;
						float:left;
						display:flex;
						align-items:center;
						justify-content:flex-end;
						span{
							display:inline-block;
							width:0.16rem;
							height:0.18rem;
							/*background:#25A4BB;*/
							background-image:url("./img/gonggao.png");
							background-size:100% 100%;
							float:right;
							/*margin-top:0.06rem;*/
							margin-right:0.04rem;
						}
						.img-rongzi{
							background-image:url("./img/qita.png");
						}
					}
				    .swiper-container{
						width: 87%;
						float:right;
						.swiper-wrapper{
							width: 100%;
							.swiper-slide{
								width: 100%;
								display: flex;
							    -webkit-box-pack: center;
							    /*justify-content: center;*/
							    -webkit-box-align: center;
							    /*align-items: center;*/
					    		span{
					    			display:inline-block;
					    			height:0.3rem;
					    			font-size:0.11rem;
									line-height:0.33rem;
									/*text-align:center;
							    	display:inline-block;*/
							    	padding:0 0.05rem;
							    	color:#E19900;
							    }
					    	}
						}
					}
				}
				.ContentList{
					width:100%;
					height:0.36rem;
					margin:0.13rem 0 0.08rem 0;
					background:#ffffff;
					display: flex;
				    -webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;
				    font-size:0.15rem;
					.text{
						display:inline-block;
						padding-left:0.05rem;
						font-size:0.16rem;
						line-height:0.16rem;
						margin-top:0.02rem;
						color:#323232;
						/*font-weight:600;*/
					}
				}
				.ContentText{
					width:95%;
					min-height:1.0rem;
					display:flex;
					flex-direction:column;
					margin:0 auto;
					margin-bottom:0.08rem;
					/*height:1.4rem;*/
					background:#ffffff;
					position:relative;
					font-size:0.16rem;
					border-radius:0.12rem;
					box-shadow: 0.04rem 0.05rem 0.05rem #ececf3;
					padding-top:0.12rem;
					.TextMame{
						width:89%;
						/*height:0.8rem;*/
						margin:0 auto;
						padding-bottom:0.06rem;
						.margin{
							float:left;
							width:100%;
							height:0.22rem;
							padding-top:0.05rem;
							color:#323232;
							span{
								display:inline-block;
								height:0.16rem;
								font-size:0.16rem;
								/*line-height:0.2rem;*/
								/*font-weight:600;*/
								&:first-child{
									min-width:31%;
									margin-right:0.1rem;
								}
							}
						}
						.TypeList{
							float:left;
							width:100%;
							/*min-height:0.3rem;*/
							color:#ff7a59;
							overflow:hidden;
							span{
								display:inline-block;
								width:0.7rem;
								height:0.22rem;
								text-align:center;
								float:left;
								padding:0.04rem 0;
								background:#fde9e2;
								border-radius:0.04rem;
								font-size:0.14rem;
								line-height:0.15rem;
								margin:0.04rem 0.07rem 0.04rem 0;
								box-sizing:border-box;
								border:1px solid #ff7a59;
								&:first-child{
									
								}
							}
						}
					}
					.BottomText{
						width:89%;
						margin:0 auto;
						color:#717171;
						padding-bottom:0.38rem;
						text-align:justify;
						word-wrap:break-word;
						font-size:0.15rem;
						line-height:0.22rem;
						.texts{
							display:inline-block;
							padding-bottom:0.02rem;
							max-height:1.04rem;
							/*white-space:nowrap;*/
							overflow:hidden;
							text-overflow:ellipsis;
						}
					}
					.ContentTime{
						position:absolute;
						left:0;
						/*right:0;*/
						bottom:0;
						width:100%;
						/*margin:0 auto;*/
						height:0.3rem;
						color:#bcbcbc;
						background:#f5fcff;
						font-size:0.12rem;
						line-height:0.3rem;
						display: flex;
					    -webkit-box-pack: center;
					    justify-content: center;
					    -webkit-box-align: center;
					    align-items: center;
					    border-radius:0rem 0 0.12rem 0.12rem;
					    .tishi-left{
					    	flex:3;
					    	padding-left:5.5%;
					    	span{
					    		&:first-child{
					    			display:inline-block;
					    			margin-right:0.09rem;
					    		}
					    	}
					    }
					    .tishi-right{
					    	flex:2;
					    	padding-right:5.5%;
					    	text-align:right;
					    	span{
					    		&:first-child{
					    			display:inline-block;
					    			margin-right:0.09rem;
					    		}
					    	}
					    }
					}
					li{
				    	width:0.1rem;
				    	height:0.21rem;
				    	position:absolute;
				    	left:0.12rem;
				    	top:-0.15rem;
				    	background-image:url("./img/lianjie.png");
				    	background-size:100% 100%;
				    	/*z-index:16;*/
				    }
				    ol{
				    	width:0.1rem;
				    	height:0.21rem;
				    	position:absolute;
				    	right:0.12rem;
				    	top:-0.15rem;
				    	background-image:url("./img/lianjie.png");
				    	background-size:100% 100%;
				    	/*z-index:16;*/
				    }
				}
				.tishi-bottom{
					position:absolute;
					left:0;
					right:0;
					bottom:0.04rem;
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
				.loding{
					position:fixed;
					bottom:0.66rem;
					left:0;
					margin-bottom:0.1rem;
					width:0.3rem;
					margin:0 auto;
					right:0;
					display: inline-block;
					/*text-align:center;
					display:flex;
					-webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;*/
				}
			}
		}
		.zhiDing{
			position:fixed;
			bottom:1.6rem;
			right:0.2rem;
			background-image:url("./img/top.png");
			background-size:100% 100%;
			width:0.5rem;
			height:0.5rem;
			/*z-index: 60;*/
		}
	}
</style>


