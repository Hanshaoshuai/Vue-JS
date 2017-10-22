<template>
	<!--<transition name="fade">-->
		<div class="faxian">
			<div class="searchBox">
				<div class="home-search" @click.stop="sousuo()">
					<img src="./img/circle_hot_search.png"/>
					<span>搜公司，碰碰运气吧</span>
				</div>
				<!--<li class="tubiao" @click.stop="wode"><span></span></li>-->
			</div>
			<!--<div class="box">-->
			<div class="page-loadmore-wrapper" id="fanxian" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<div style="width:100%;height:0.48rem;"></div>
				<!--<div style="width:100%;height:0.5rem;"></div>-->
	    		<!--mt-loadmore中添加:auto-fill="autoFill"属性  不够高是会自动撑开屏幕-->
	      		<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :top-distance=40 :bottom-distance=40 ref="loadmore">
		        <ul ref="boxcontent" class="page-loadmore-list">
				<!--<div class="FadeContent">-->
					<div class="banner">
						<img src="./img/bg.jpg"/>
						<div class="gaikuang">
							<div class="gaikuang-header border-bottom">
								<span>企融直通车最新动态数据</span>
							</div>
							<div class="gaikuang-content">
								<div v-for="(item,index) in dongTai" class="gaikuang-list border-right">
									<span>{{item.content}}家</span>
									<span>{{item.title}}</span>
								</div>
								<!--<div class="gaikuang-list border-right">
									<span>{{dongTai[1].content}}个</span>
									<span>{{dongTai[1].title}}</span>
								</div>
								<div class="gaikuang-list">
									<span>{{dongTai[2].content}}次</span>
									<span>{{dongTai[2].title}}</span>
								</div>-->
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
								<span class="text-coler">智能匹配全国投资机构</span>
							</div>
						</div>
						<div v-if="t" class="TypeList" @click.stop="qiyefankuiGo()">
							<div class="TypeList-img">
								<li class="fankui"><span v-if="FankuiShu!=='0'">{{FankuiShu}}</span></li>
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
								<li class="fankui"><span v-if="FankuiShu!=='0'">{{FankuiShu}}</span></li>
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
							<span class="text">你可以联系的其他正在融资项目</span>
						</div>
					</div>
<!--意见反馈-->		
					<!--<div class="tucao" @click.stop="yijianFankui()">
						<img src="./img/hongbao.png" alt="" />
					</div>-->
					
<!--循环遍历data-->	<li v-for="item in list" class="page-loadmore-listitem">
						<div v-for="(item,index) in data" class="Content" >
						<div  class="ContentText" :id="index" @click.stop="contblock(item.id,item.type)">
							<div class="TextMame">
								<div class="margin">		<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 6：公司调研-->
									<span v-if="item.type==1" class="texts">定增</span>
									<span v-if="item.type==2" class="texts">做市</span>
									<span v-if="item.type==3" class="texts">转老股</span>
									<span v-if="item.type==4" class="texts">股权质押</span>
									<span v-if="item.type==5" class="texts">融资租赁</span>
									<span v-if="item.type==6" class="texts">研报支持</span>
									<span v-if="item.type==7" class="texts">公司调研</span>
									<span class="texts"><font class="lefts">{{item.com_name}}我们</font>**</span>
									<span class="texts">( <font class="rights">{{item.com_code}}</font> **** )</span>
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
									<span>{{item.position}}</span>
									<span>{{numToTime(item.create_time)}}</span>&nbsp发布
									<!--<span>{{item.create_time}}小时前</span>&nbsp;发布-->
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
					</li>
					<transition name="promps">
					<div class="tishi-bottom" v-show="promps">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">{{botent}}</li>
							<li class="border-bottom"></li>
						</ul>
					</div>
					</transition>
				<!--</div>-->
				</ul>
		       	<div slot="top" class="mint-loadmore-top">
		          	<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }"> ↓ </span>
		          	<span v-show="topStatus == 'drop'">请释放更新吧</span>
		          	<span v-show="topStatus === 'loading'">
		            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
		          	</span>
		        </div>    
		        <div slot="bottom" class="mint-loadmore-bottom">
		          	<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }"> ↑ </span>
		          	<span v-show="bottomStatus == 'drop'">请释放加载吧</span>
		          	<span v-show="bottomStatus === 'loading'">
		            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
		          	</span>
		        </div>
				</mt-loadmore>
		      	<!--<transition name="promps">
		      		<p class="page-loadmore-desc" v-show="promps">暂无数据</p>
		      	</transition>-->
		      	<div style="width:100%;height:0.6rem;"></div>
		    </div>
			<!--</div>-->
			<router-view :setscrollTop="scrollTop" :datas="datas" :userContent='userContent' :type="type" :FankuiShu="FankuiShu"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {numToTime} from "../../common/js/date.js";
	import { Indicator } from 'mint-ui';
	import {URL} from '../../common/js/path';
	import { Toast } from 'mint-ui';
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
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
				data:"",
				jia:"1000",
				ge:"666",
				ren:"8888",
				shijian:"6",
				datas:"",
//				TouziToken:"",
				ResChild:"",
				t:false,
//				t1:false,
				q:false,
//				q1:false,
				times:20177111129,
				showList:false,
				onlyContent:true,
				mySwiper:"",
				scrollTop:"",
				list: [],
		        allLoaded: false,
//		        autoFill:true,
		        bottomStatus: '',
		        wrapperHeight: 0,
		        topStatus: '',
		        promps:false,
		        scrollTop:"",
		        XiangmuShu:"",
		        FankuiShu:"",
		        ZongHe:"",
		        botent:"亲已经到底了",
		        numToTime:""
			}
		},
		mounted() {	//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构 5:券商研究员 6:新三板做市商
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
	    		token:this.userContent.token
	    	}
	    	var that=this;
	    	this.token=token;
//	    	this.TouziToken=token;
	    	this.qinQiu(token);
//			投资机构收到的新项目数
			this.huoqugeshu();
//			企业获取反馈数	和	投资机构收获取反馈数
			this.qiyeFankui();
			setInterval(function(){
				that.huoqugeshu();
				that.qiyeFankui();
			},10000)
			this.$on("to-parent",function(msg){
				console.log(msg);
				that.FankuiShu = msg
			})
//			获取企融直通车动态数据
			this.$http.post(URL.path+'common/dynamic',token,{emulateJSON:true}).then(function(res){
				this.dongTai=res.body.data
				console.log("获取企融直通车动态数据");
				console.log(this.dongTai[0].content);
				console.log(res);
			},function(res){
			    console.log(res);
			})
	    	
	    	
//	    	console.log("计算高度")
	      	this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	      	this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	      	this.$nextTick(function() {
	      		this.ZongHe=this.XiangmuShu*1+this.FankuiShu*1
//           	this.mySwiper = new Swiper(".swiper-container",{
//					direction:"vertical",
//					autoplay :2000,
//					speed : 2000,//改变Swiper的切换时间曲线
//					loop:true,
//					autoplayDisableOnInteraction:false,
////						pagination:".swiper-pagination"
//				})
			});
	    },
		methods:{	//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构 5:券商研究员 6:新三板做市商 7:财务顾问
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
					this.FankuiShu=res.body.data[0].feedback_num;
	//				this.FanuiShu=res;
//					console.log("企业获取反馈个数");
//					console.log(res);
				},function(res){
				    console.log(res);
				})
			},
//			child(FankuiShus){
//				this.XiangmuShu=FankuiShus
//				console.log(FankuiShus)
//			},
			userType(type){
//				t:false,
//				t1:false,
//				q:false,
//				q1:false,
				if(type==1 || type==7){
					this.q=true;
				}else{
					this.t=true;
				}
			},
			handleTopChange(status) {    //头部函数
//	      		console.log("top")
		        this.topStatus = status;
//		        console.log(this.wrapperHeight)
//		      	console.log(this.$refs.wrapper.scrollTop)
//		      	console.log(document.documentElement.clientHeight)
//		      	console.log(this.$refs.wrapper.getBoundingClientRect().top)
	      	},
	      	translateChange(translate) {
		        const translateNum = +translate;
	      	},
	      	loadTop() {
	      		console.log("top")
	        	setTimeout(() => {
//		          	let firstValue = this.list[0];
//		          	for (let i = 1; i <= 10; i++) {
//		            	this.list.unshift(firstValue - i);
//		          	}
		          	this.$refs.loadmore.onTopLoaded();
	        	}, 1500);
	      	},
	      	handleBottomChange(status) {		//底部函数
//	      		console.log("bot")
	        	this.bottomStatus = status;
	      	},
	      	loadBottom() {
	      		console.log("bot")
//		        setTimeout(() => {
		          	let lastValue = this.list.length;   
		          	if (lastValue < 1) {
//		          		this.qinQiu(this.token);
//			            for (let i = 1; i <= 10; i++) {
//			              	this.list.push(lastValue + i);
//			            }
		          	} else {
		            	this.allLoaded = true; //若为真，则 bottomMethod 不会被再次触发 就不能再向上拉了
		            	this.promps = true;
//		            	let clear = setTimeout(()=>{
//		            		this.promps = false;
//		            		clearTimeout(clear);
//		            	},1500);
		          	}
		          	this.$refs.loadmore.onBottomLoaded();
//		        }, 1000);
	      	},
			sousuo(){
				window.location.href="#/faxian/sousuo/";
			},
			rongziGo(){
				window.location.href="#/faxian/WoyaoRongzi/"+this.userContent["token"];
			},
			touzifankuiGo(){
				console.log(this.userContent)
				window.location.href="#/faxian/Fankui/"+this.userContent["token"];
			},
			XiangMuGo(){
				window.location.href="#/faxian/XinxiangMu/"+this.userContent["token"];
				this.scrollTop=sessionStorage.getItem("scrollTop")
			},
			qiyefankuiGo(){
				console.log(this.userContent)
				window.location.href="#/faxian/Fankui/"+this.userContent["token"];
			},
			contblock(id,type){		//<!--类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报 7:公司调研-->
				if(type==1 || type==2 ||type==3 || type==7){
					window.location.href="#/faxian/DingzengZhaiyao/"+this.userContent["token"]+'/'+id;
				}else{
					window.location.href="#/faxian/GuquanZhaiyao/"+this.userContent["token"]+'/'+id;
				}
			},
			Guquanzhaiyao(){
				this.$refs.GuquanShow.Guquanblock();
			},
			yijianFankui(){
				window.location.href="#/faxian/Yijian/"+this.userContent["token"];
//				this.$refs.yijianShow.fankiuShow();
			},
			faxianScroll () {
			  var scrollTop = this.$refs.wrapper.scrollTop
			  sessionStorage.setItem("faxianScroll",scrollTop)
//			  console.log(sessionStorage.getItem("faxianScroll"))
			},
			qinQiu(token){		//类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报
				console.log(token)
				Indicator.open({spinnerType: 'fading-circle'});
	//	    	首页项目列表（非自己收到的项目）接口
				this.$http.post(URL.path+'finance/get_item_list',token,{emulateJSON:true}).then(function(res){
					Indicator.close();
					this.data=res.body.data;
					console.log("首页项目列表成功");
					console.log(res)
					if(this.data.length>2){
						this.$nextTick(function(){
							if(this.yici=='0'){
								this.tuCao();
								this.yici=1;
							}
						});
					}else{
						this.botent="暂无数据"
					}
				},function(res){
				    console.log(res);
				    Indicator.close();
				    Toast("系统繁忙请稍后再试")
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
			}
		},
		created() {
//	    	console.log("一次")
//	      	for (let i = 1; i <= 20; i++) {
//	        	this.list.push(i);
//	      	}
//	      	console.log(URL.path)
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
//			if(!this.mySwiper){
//           	this.mySwiper = new Swiper(".swiper-container",{
//					direction:"vertical",
//					autoplay :3600,
//					speed : 2000,//改变Swiper的切换时间曲线
//					loop:true,
//					autoplayDisableOnInteraction:false,
//					pagination:".swiper-pagination"
//				})
//			}
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
//			xiangmu,
//			fankui,
//			DingzengZhaiyao,
//			GuquanZhaiyao,
//			yijian
		}
	}
</script>

<style lang="scss" scoped>
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
		    z-index:10;
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
		/*.box{*/
			width:100%;
			height:100%;
			/*overflow-y:auto;*/
			
			
			
			
		.page-loadmore-wrapper {
		    overflow-y: scroll;
		    -webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
		    /*overflow-x:hidden;*/
		}
		.page-loadmore-wrapper::-webkit-scrollbar{width:0px}
		.mint-loadmore-top span {
		    -webkit-transition: .2s linear;
		    transition: .2s linear;
		    display: inline-block;
		    vertical-align: middle
		}
		.mint-loadmore-top span.is-rotate {
		    -webkit-transform: rotate(180deg);
		    transform: rotate(180deg)
		}
		.page-loadmore-desc {
		    text-align: center;
		    color: #666;
		    padding-bottom: 5px
		}
		.page-loadmore-desc:last-of-type,
		/*.page-loadmore-listitem {
		    border-bottom: 1px solid #eee
		}
		.page-loadmore-listitem {
		    height: 50px;
		    line-height: 50px;
		    text-align: center
		}
		.page-loadmore-listitem:first-child {
		    border-top: 1px solid #eee
		}*/
		.mint-loadmore-bottom span {
		    display: inline-block;
		    -webkit-transition: .2s linear;
		    transition: .2s linear;
		    vertical-align: middle
		}
		.mint-loadmore-bottom span.is-rotate {
		    -webkit-transform: rotate(180deg);
		    transform: rotate(180deg)
		}
		.mint-loadmore-bottom{
			/*height:0.3rem;*/
			/*position:absolute;
			bottom:0;
			left:0;*/
		}
		/*c3动画*/
		.promps-enter-active {
		  	transition: all .1s ease;
		}
		.promps-leave-active {
		  	transition: all .1s ease;
		}
		.promps-enter, .promps-leave-active {
		  	/*transform: translateY(0.5rem);*/
		  	/*transform:rotate(360deg);*/
		  	opacity: 0;
		}
			
			
			/*.FadeContent{
				width:100%;
				height:auto;*/
				.banner{
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
				    	top:0.62rem;
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
				    			/*font-weight:bold;*/
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
					z-index:11;
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
						height:0.8rem;
						margin:0 auto;
						padding-bottom:0.06rem;
						.margin{
							float:left;
							width:100%;
							height:0.2rem;
							padding-top:0.05rem;
							color:#323232;
							span{
								display:inline-block;
								/*line-height:0.2rem;*/
								/*font-weight:600;*/
								&:first-child{
									min-width:31%;
									margin-right:0.1rem;
								}
								.lefts{
									display:inline-block;
									width:0.17rem;
									height:0.16rem;
									/*line-height:0;*/
									margin-bottom:-0.02rem;
									overflow:hidden;
								}
								.rights{
									display:inline-block;
									width:0.17rem;
									height:0.16rem;
									line-height:0.16rem;
									margin-bottom:-0.02rem;
									overflow:hidden;
								}
							}
						}
						.TypeList{
							float:left;
							width:100%;
							/*height:0.25rem;*/
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
						padding-bottom:0.36rem;
						text-align:justify;
						word-wrap:break-word;
						font-size:0.15rem;
						line-height:0.22rem;
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
				    	z-index:1000;
				    }
				    ol{
				    	width:0.1rem;
				    	height:0.21rem;
				    	position:absolute;
				    	right:0.12rem;
				    	top:-0.15rem;
				    	background-image:url("./img/lianjie.png");
				    	background-size:100% 100%;
				    	z-index:1000;
				    }
				}
				.tishi-bottom{
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
			/*}*/
		/*}*/
	}
</style>


