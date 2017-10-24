<template>
	<transition name="fade">
		<div class="faxian">
			<div class="searchBox">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="./img/back.png"/></span>
				<div class="home-search">
					<input v-model="texts" placeholder="请输入网址" type="url" class="mint-field-core sousuo">
				</div>
				<span class="sousuoGo" @click.stap="sousuoGo()">搜索</span>
				<!--<span @click.stop="sousuoTo">搜索</span>-->
			</div>
			<div class="box" ref="wrapper">
				<div class="wenzhang-content" ref="tianjia">
					<!--<div v-for="(item,index) in data" class="sousuo-content border-topbottom" @click.stop="xiangQing('7','3',item.id)">-->
					<div v-for="(item,index) in data" class="add" :id="index" ref="lisitTop">
	<!--循环遍历-->		<div v-for="(item,index) in item" class="sousuo-content border-topbottom" @click.stop="xiangQing(item.ctype,item.investment_type,item.uid)">
							<div class="content-header">
								<!--<font><img src="" :rul="item.photo"/></font>-->
								<font><img :src="item.photo"/></font>
								<div class="names">
									<span class="border-right">{{item.uname}}</span>
									<span>{{item.com_name}}</span>&nbsp;
									<span>{{item.position}}</span>
								</div>
							</div>
							<div v-if="item.ctype=='2'" class="xiaolv border-topbottom">
								<div class="border-right">
									<li>
										<font v-if="item.itemnumberes!=0">{{item.itemnumberes}}</font>
										<font style="font-size:0.14rem;" v-if="item.itemnumberes==0">暂无</font>
									</li>
									<span>收获项目数</span>
								</div>
								<div class="border-right">
									<li><font class="center">{{item.feedback}}&nbsp;%</font></li>
									<span class="center">反馈率</span>
								</div>
								<div class="border-right">
									<li>
										<font v-if="item.changenums==0">0&nbsp;%</font>
										<font v-if="item.changenums!=0">{{Math.round((item.changenums/item.itemnumberes)*100)}}&nbsp;%</font>
									</li>
									<!--<li><font>{{item.changenums}}&nbsp;%</font></li>-->
									<span>约谈率</span>
								</div>
							</div>
							<div class="leimu">
								<div class="zhonglei">
									<span v-if="item.ctype==1" class="jieduan">所在行业：<a v-for="(item,index) in item.industry">{{item.title}}、</a></span>
									<span v-if="item.ctype==2" class="jieduan">阶段：<a v-for="(item,index) in item.fund_stage">{{item.title}}、</a></span>
									<span v-if="item.ctype==2" class="dangbi">单笔投资：{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.ctype==2" class="zijin">资金成本：年化 {{item.fund_min}}%-{{item.fund_max}}%</span>
									<span v-if="item.ctype==2" class="fangkuan">放款速度：不超过{{item.loan_time}}天</span>
									<span v-if="item.ctype==2" class="lingyu">领域：<a v-for="(item,index) in item.interested">{{item.title}}、</a></span>
									<span v-if="item.ctype==3" class="lingyu">领域：<a v-for="(item,index) in item.interested">{{item.title}}、</a></span>
									<span v-if="item.ctype==4" class="lingyu">领域：<a v-for="(item,index) in item.interested">{{item.title}}、</a></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-show="tishis" class="tishi-bottoms">
					<div class="tishis">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">亲已经到底了</li>
							<li class="border-bottom"></li>
						</ul>
					</div>
				</div>
				<span class="loding" v-show="topStatus">
	            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
	          	</span>
			</div>
			<router-view :userContent="userContent" :uid="uid"></router-view>
			<!--<router-view :setscrollTop="scrollTop" :datas="datas" :TouziToken='TouziToken'></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import VueScroller from 'vue-scroller'
	import {URL} from '../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	
	
	export default {
		props:{
			type:{
//				type:Object
			},
			userContent:{}
		},
		data () {
			return {
				data:[],
				uid:"",
				texts:'',
				times:20177111129,
				showList:false,
				onlyContent:true,
				timer:"",
				wrapperHeight:'',
				img:'',
				num:"",
				n:"",		//存储图片加载到的位置，避免每次都从第一张图片开始遍历
				height:0,
				page:1,
				parend:'',
				topStatus:false,
				tems:'',
				tishis:false,
				blockLength:0
			}
		},
		mounted(){
			console.log()
		},
		methods:{
			yijianHind(){
				history.go(-1)
			},
			xiangQing(id,Tid,uid){		//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员 6:新三板做市商 7:财务顾问
//				window.location.href="#/faxian/sousuo/"+this.$route.params.token+'/'+"SousuoLeixing";
				this.uid=uid;
				console.log(Tid)
				if(id=='2'){
					window.location.href="#/faxian/sousuo/ZiliaoT"+Tid+"/"+this.userContent["token"];//1:股权投资   2:债权投资   3:股债兼投
				}else{
					window.location.href="#/faxian/sousuo/Ziliao"+id+"/"+this.userContent["token"];
				}
//				this.$refs.TypeA.typeShow();
			},
			faxianScroll(){
				var parend = this.$refs.tianjia.getElementsByClassName("add")[this.data.length-1]
//				var parend = this.$refs.tianjia.getElementsByClassName("add")
//				var scrollTop = this.$refs.wrapper.scrollTop; //滚动条距离顶部高度
//				var y=Math.abs(Math.round(scrollTop))
//				var length=parend.length;
//				for(var i=0; i<length; i++){
//					var lisitTop = parend[i].clientHeight
//					console.log(lisitTop)
//				}
//				if(parend[this.blockLength].clientHeight<y){
//					this.blockLength+=1;
//					for(var i=0; i<length-1; i++){
//						parend[i].style.display="none";
//					}
//				}else{
//					if(parend[0].style.display=="block"){
//						return;
//						for(var i=0; i<length; i++){
//							parend[i].style.display="block";
//						}
//					}
//				}
//				if(y==0){
//					console.log(parend[this.blockLength-1].getAttribute("style"))
//					if(parend[this.blockLength-1].getAttribute("style")=='display: none;'){
//						console.log(this.blockLength)
//						parend[this.blockLength-1].style.display="block";
//						this.blockLength-=1;
////						return;
//					}else{
//						
//					}
//				}
//				console.log(this.blockLength)
//				console.log(y)
//				var lisitTop = parend.height
//				console.log(parend.id)
//				console.log(this.parend)
				this.imgs()
//				console.log(this.parend[2].offsetHeight)
			},
			imgs(){
//				this.img = this.$refs.tianjia.getElementsByTagName("img");
				var scrollHeights=this.$refs.wrapper.scrollHeight;
				var setHeight = document.documentElement.clientHeight; //可见区域高度
				var scrollTop = this.$refs.wrapper.scrollTop; //滚动条距离顶部高度
//				for (var i = this.n; i < this.num; i++) {
////					this.img[i].offsetTop+=200;
//					if (this.height < setHeight + scrollTop) {
//						if (this.img[i].getAttribute("src") == "") {
//							this.img[i].src = this.img[i].getAttribute("rul");
//							if (this.img[i].clientWidth>this.img[i].clientHeight) {
//								this.img[i].style.height="100%"
//								this.img[i].style.width="auto"
//							}else{
//								this.img[i].style.width="100%"
//								this.img[i].style.height="auto"
//							}
//						}else{
//							return;
//						}
//						this.n = i + 1;
//						this.height+=this.parend[i].offsetHeight;
//					}
//				}
//				console.log(this.parend)
				
				var x=Math.abs(Math.round(setHeight + scrollTop))
//				console.log(x)
//				console.log(scrollHeights)
				if(x==scrollHeights || scrollHeights-x==1){
					var tata=this
					this.topStatus=true;
					this.tems=setTimeout(function(){
						tata.qingqiu();
					},1000)
				}
			},
			sousuoGo(newVal){
				console.log("开始搜索")
				var thata=this;
				if(this.texts!==""){
					this.qingqiu();
				}
			},
			qingqiu(){
				Indicator.open({spinnerType: 'fading-circle'});
				var thata=this;
				var params={
		    		terminalNo:3,
		    		limit:20,
//				    ctype:1,
//					ctype:thata.type,			//用户身份
//					interested:			//1,2,3,4,5,6
					kw:this.texts,					//关键词搜索
					page:thata.page
		    	}
				console.log(params)
				thata.$http.post(URL.path1+'welcome',params,{emulateJSON:true}).then(function(res){
					this.page=this.page*1;
					this.page=this.page+=1;
					Indicator.close();
					if(this.data.length==4){
						this.data=[]
						this.$refs.wrapper.scrollTop=0;
						this.height=0;
					}
					this.topStatus=false;
					if(res.body.data.length==0){
						 this.$refs.wrapper.removeEventListener('scroll', this.faxianScroll);
						this.tishis=true;
						return;
					}else{
						this.data.push(res.body.data);
					}
					if(this.n !== 0){
						clearTimeout(this.tems);
					}
					this.$nextTick(function(){
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
//						if(this.data.length!=1){
//							this.parend = this.$refs.tianjia.getElementsByClassName("add")[this.data.length-1].getElementsByClassName("sousuo-content");
//							this.img = this.$refs.tianjia.getElementsByClassName("add")[this.data.length-1].getElementsByTagName("img");
//							this.num=this.img.length;
//							this.n=0
//							console.log(this.parend)
//							console.log(this.img)
//							console.log(this.$refs.tianjia.getElementsByClassName("add")[this.data.length-1].id)
//						}
					})
					if(this.n == 0){
						this.$nextTick(function(){
							this.img = this.$refs.tianjia.getElementsByTagName("img");
							this.parend = this.$refs.tianjia.getElementsByClassName("sousuo-content");
							this.num = this.img.length;
							this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
	//								this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	  						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	  						this.imgs()
						});
					}
					console.log(res);
				},function(res){
					Indicator.close();
				    console.log(res);
				})
			}
		},
//		watch:{
//			texts:function(newVal){
			sousuoGo(newVal){
				Indicator.open({spinnerType: 'fading-circle'});
				this.height=0;
				console.log("开始搜索")
				var thata=this;
				if(this.texts!==""){
					var thata=this;
//					clearTimeout(this.timer);
//					this.timer=setTimeout(function(){
						//搜索接口地址
	//					var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+newVal;
	//					that.requestData(url)
						var params={
				    		terminalNo:3,
				    		ctype:6,
//							ctype:thata.type,			//用户身份
	//						interested:			//1,2,3,4,5,6
							kw:this.texts,					//关键词搜索
							page:thata.page
				    	}
						console.log(params)
						thata.$http.post(URL.path1+'welcome',params,{emulateJSON:true}).then(function(res){
							this.page=this.page*1;
							this.page=this.page+=1;
							Indicator.close();
							thata.data=res.body.data;
							if(thata.data.length=='0'){
								Toast("暂无您想要的结果！")
							}
							this.$nextTick(function(){
								this.img = this.$refs.tianjia.getElementsByTagName("img");
								this.num = this.img.length;
								this.n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
								this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	      						this.$refs.wrapper.addEventListener('scroll', this.faxianScroll)	//做一个scroll监听
	      						this.imgs()
							});
							console.log(res);
						},function(res){
							Indicator.close();
						    console.log(res);
						})
//					},500)
				}
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
//			this.sousuoTo();
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
//			typea
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
	
	.faxian{
		position:fixed;
		background-color: #f5f4f9;
		top:0;
		left:0;
		bottom:0;
		right:0;
		width:100%;
		height:100%;
		z-index:200;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color: #ff7a59;
		    z-index:210;
		    .xiangmu-left{
				position:absolute;
				height:100%;
				padding:0 0.1rem 0 0.16rem;
				display:inline-block;
				top:0;
				left:0;
				img{
					margin-top:0.12rem;
					height:0.2rem;
				}
			}
		    /*span{
		    	display:inline-block;
		    	position:absolute;
		    	right:0;
		    	top:0;
		    	padding-right:0.3rem;
		    	line-height:0.45rem;
		    	z-index:10000;
		    }*/
		    .home-search {
		    	position:absolute;
		    	margin:auto;
		    	top:0;
		    	left:0;
		    	right:0;
		    	bottom:0;
			    width: 78%;
			    height: 0.3rem;
			    z-index:300;
			    /*background: #ffffff;*/
			    /*color: #CACACA;*/
			    font-size: 0.14rem;
			    .sousuo{
			    	border-radius:0.3rem;
			    	padding-left:4%;
			    	width:96%;
			    	height:100%;
			    }
			}
			.sousuoGo{
		    	display:inline-block;
		    	position:absolute;
		    	height:0.28rem;
		    	top:0.08rem;
		    	right:0;
		    	color:#fff;
		    	line-height: 0.3rem;
		    	padding:0 0.1rem;
		    	border-radius:0.1rem;
		    	/*border-left:1px solid #F2F2F2;*/
		    	/*box-shadow: -0.02rem 0.02rem 0rem #e4e3e8;*/
		    	/*box-sizing:border-box;*/
		    	z-index:600;
		    }
		}
		.box::-webkit-scrollbar{width:0px;}
		.box{
			width:100%;
			height:100%;
			overflow-y:scroll;
			-webkit-overflow-scrolling:touch;  		/*解决ios滑动*/
			.wenzhang-content{
				width:95%;
				height:auto;
				margin:0 auto;
				padding:0.55rem 0 0.5rem 0;
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					margin-bottom:0.1rem;
					border-radius:0.08rem;
					box-sizing:border-box;
					box-shadow: 0.02rem 0.02rem 0.03rem #e4e3e8;
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
								display:inline-block;
								padding-right:0.06rem;
							}
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
								width:100%;
								padding-right:1.2%;
							}
						}
					}
				}
			}
			.loding{
				position:fixed;
				bottom:0;
				left:0;
				margin-bottom:0.1rem;
				width:100%;
				display: inline-block;
				text-align:center;
				display:flex;
				-webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			}
			.tishi-bottoms{
				/*position:fixed;
				bottom:0;
				left:0;*/
				width:100%;
				margin-top:-0.46rem;
				.tishis{
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
		}
	}
</style>


