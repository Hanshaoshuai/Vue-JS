<template>
	<transition name="fade">
		<div class="faxian">
			<div class="searchBox">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="./img/back.png"/></span>
				<div class="home-search">
					<input v-model="texts" placeholder="请输入公司名或者人名" type="text" class="mint-field-core sousuo">
				</div>
				<span class="sousuoGo" @click.stap="sousuoGo()">搜索</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="wenzhang-content" ref="tianjia">
					<!--<div v-for="(item,index) in data" class="sousuo-content border-topbottom" @click.stop="xiangQing('7','3',item.id)">-->
					<div v-for="(cont,index) in data" class="add" :id="index" ref="lisitTop">
	<!--循环遍历-->		<div v-for="(item,index) in cont" class="sousuo-content border-topbottom" @click.stop="xiangQing(item.cctype,item.investment_type,item.uid)">
							<div class="content-header">
								<!--<font><img src="" :rul="item.photo"/></font>-->
								<font><img :src="item.photo"/></font>
								<div class="names">
									<span class="border-right">{{item.uname}}</span>
									<span>{{item.com_name}}</span>&nbsp;
									<span>{{item.position}}</span>
								</div>
							</div>
							<div v-if="item.cctype=='2'" class="xiaolv border-topbottom">
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
							<div v-if="item.cctype=='3'" class="xiaolv border-topbottom">
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
							<div v-if="item.cctype=='6'" class="xiaolv border-topbottom">
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
									<span v-if="item.investment_type==1" class="jieduan"><a style="color:#2abdfc">阶段：</a><a v-for="(item,index) in item.fund_stage">{{item.title}}&nbsp;&nbsp;</a></span>
									<span v-if="item.investment_type==1" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.investment_type==1" class="lingyu"><a style="color:#2abdfc">行业：</a><a v-for="(item,index) in item.interested">{{item.title}}&nbsp;&nbsp;</a></span>
									<span v-if="item.investment_type==2" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.investment_type==2" class="zijin"><a style="color:#2abdfc">资金成本：</a>年化 {{item.fund_min}}%-{{item.fund_max}}%</span>
									<span v-if="item.investment_type==2" class="fangkuan"><a style="color:#2abdfc">放款速度：</a>不超过{{item.loan_time}}天</span>
									<!--<span v-if="item.investment_type==3" class="dangbi"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project_min}}万-{{item.single_project_max}}万</span>
									<span v-if="item.investment_type==3" class="zijin"><a style="color:#2abdfc">资金成本：</a>年化 {{item.fund_min}}%-{{item.fund_max}}%</span>
									<span v-if="item.investment_type==3" class="fangkuan"><a style="color:#2abdfc">放款速度：</a>不超过{{item.loan_time}}天</span>-->
									
									
									<span v-if="item.cctype==1" class="lingyu"><font><a style="color:#2abdfc">行业：</a><a v-for="(item,index) in item.industry">{{item.title}}&nbsp;&nbsp;</a></font></span>
									<span v-if="item.cctype==2" class="jieduan"><font v-if="item.investment_type==0"><a style="color:#2abdfc">阶段：</a><a v-for="(item,index) in item.fund_stage">{{item.title}}&nbsp;&nbsp;</a></font></span>
									<span v-if="item.cctype==2" class="dangbi"><font v-if="item.investment_type==0"><font v-if="item.single_project!=0"><a style="color:#2abdfc">单笔投资：</a>{{item.single_project[0].title}}</font></font></span>
									<span v-if="item.cctype==2" class="lingyu"><font v-if="item.investment_type==0"><a style="color:#2abdfc">行业：</a><a v-for="(item,index) in item.interested">{{item.title}}&nbsp;&nbsp;</a></font></span>
									<!--<span v-if="item.ctype==3" class="lingyu"><a style="color:#2abdfc">行业：</a><a v-for="item in item.interested">{{item.title}}、</a></span>-->
									<span v-if="item.cctype==4" class="lingyu"><font v-if="item.investment_type==0"<a style="color:#2abdfc">行业：</a><a v-for="item in item.interested">{{item.title}}&nbsp;&nbsp;</a></font></span>
									<!--<span v-if="item.ctype==3" class="lingyu">领域：<a v-for="(item,index) in item.interested">{{item.title}}、</a></span>
									<span v-if="item.ctype==4" class="lingyu">领域：<a v-for="(item,index) in item.interested">{{item.title}}、</a></span>-->
								</div>
							</div>
						</div>
					</div>
				</div>
				<div v-show="tishis" class="tishi-bottoms">
					<div class="tishis">
						<ul>
							<li class="border-bottom"></li>
							<li class="tishi-center">{{jeiguo}}</li>
							<li class="border-bottom"></li>
						</ul>
					</div>
				</div>
				<span class="loding" v-show="topStatus">
	            	<mt-spinner :type="3" color="#26a2ff" :size="30"></mt-spinner>
	          	</span>
			</div>
			<router-view :userContent="userContent" :uid="uid"></router-view>
			<transition name="fade1">
				<div v-show="topBlock" @click.stop="zhiDing()" class="zhiDing"></div>
			</transition>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import VueScroller from 'vue-scroller';
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
				blockLength:0,
				jeiguo:"亲已经到底了",
				topBlock:false
			}
		},
		mounted(){
//			console.log()
		},
		methods:{
			yijianHind(){
				this.topStatus=false;
				Indicator.close();
				history.go(-1)
			},
			zhiDing(){		//返回顶部；
				this.$refs.wrapper.scrollTop=0;
			},
			xiangQing(id,Tid,uid){		//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员 6:新三板做市商 7:财务顾问
//				window.location.href="#/faxian/sousuo/"+this.$route.params.token+'/'+"SousuoLeixing";
				this.uid=uid;
//				console.log(id)
				if(id=='2'){
					if(Tid=='0'){
						window.location.href="#/faxian/sousuo/ZiliaoT1"+"/"+this.userContent["token"];//1:股权投资   2:债权投资   3:股债兼投
					}else{
						window.location.href="#/faxian/sousuo/ZiliaoT"+Tid+"/"+this.userContent["token"];//1:股权投资   2:债权投资   3:股债兼投
					}
					
				}else{
					window.location.href="#/faxian/sousuo/Ziliao"+id+"/"+this.userContent["token"];
				}
			},
			handleScroll(){
				if(this.$refs.wrapper.scrollTop>800){
					this.topBlock=true;
				}else{
					this.topBlock=false;
				}
			},
			faxianScroll(){
				if(this.$refs.wrapper.scrollTop>800){
					this.topBlock=true;
				}else{
					this.topBlock=false;
				}
				var parend = this.$refs.tianjia.getElementsByClassName("add")[this.data.length-1]
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
						tata.qingqiu();
					},400)
				}
			},
			sousuoGo(newVal){
//				console.log("开始搜索")
				var thata=this;
				this.tishis=false;
				if(this.texts!==""){
					this.page=1;
					this.data=[];
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
					page:this.page
		    	}
//				console.log(params)
				this.$http.post(URL.path1+'welcome',params,{emulateJSON:true}).then(function(res){
//					console.log(res);
					Indicator.close();
//					if(this.data.length==5){//长度大于5从新开始
//						this.data=[]
//						this.$refs.wrapper.scrollTop=0;
//						this.height=0;
//					}
					this.topStatus=false;
					if(res.body.data.length==0){
						if(this.data.length==0){
							this.jeiguo="暂无搜索结果"
						}
						this.$refs.wrapper.removeEventListener('scroll', this.faxianScroll);
						this.$refs.wrapper.addEventListener('scroll', this.handleScroll)
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
				},function(res){
					Indicator.close();
				    console.log(res);
				})
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
							position:relative;
							display:inline-block;
							width:0.43rem;
							height:0.43rem;
							margin-right:0.1rem;
							border:none;
							border:2px solid #e5e4e4;
							overflow:hidden;
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
		.zhiDing{
			position:fixed;
			bottom:1.6rem;
			right:0.2rem;
			background-image:url("./img/top.png");
			background-size:100% 100%;
			width:0.5rem;
			height:0.5rem;
			/*z-index: 200;*/
		}
	}
</style>


