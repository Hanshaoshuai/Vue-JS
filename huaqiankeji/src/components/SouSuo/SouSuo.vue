<template>
	<transition name="fade">
		<div class="faxian">
			<div class="searchBox">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="./img/back.png"/></span>
				<div class="home-search">
					<input v-model="texts" placeholder="请输入网址" type="url" class="mint-field-core sousuo">
				</div>
				<!--<span @click.stop="sousuoTo">搜索</span>-->
			</div>
			<div class="box" ref="wrapper">
				<div class="wenzhang-content" ref="tianjia">
					<div v-for="(item,index) in data" class="sousuo-content border-topbottom" @click.stop="xiangQing('2','3')">
<!--循环遍历-->		<!--<div v-for="(item,index) in data" class="sousuo-content border-topbottom" @click.stop="xiangQing(item.ctype,'3')">-->
						<div class="content-header">
							<font><img src="" :rul="item.photo"/></font>
							<div class="names">
								<span class="border-right">{{item.uname}}</span>
								<span>{{item.com_name}}</span>&nbsp;
								<span>{{item.position}}</span>
							</div>
						</div>
						<div class="xiaolv border-topbottom">
							<div class="border-right">
								<li><font>235</font></li>
								<span>收获项目数</span>
							</div>
							<div class="border-right">
								<li><font class="center">2&nbsp;%</font></li>
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
								<span  class="dangbi">单笔投资：1000万-2000万</span>
								<span  class="zijin">资金成本：年化20%-30%</span>
								<span  class="fangkuan">放款速度：不超过90天</span>
								<span  class="lingyu">领域：医疗、军事</span>
							</div>
						</div>
					</div>
				</div>			
			</div>
			<router-view :userContent="userContent"></router-view>
			<!--<router-view :setscrollTop="scrollTop" :datas="datas" :TouziToken='TouziToken'></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
//	import typea from './ShenfenLeixing/TypeH.vue';
//	import fankui from "./Fankui/Fankui.vue";
//	import BScroll from "better-scroll";
//	import Vue from "vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			type:{
//				type:Object
			},
			userContent:{}
		},
		data () {
			return {
				data:"",
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
				page:1
			}
		},
		mounted(){
			
		},
		methods:{
			yijianHind(){
				history.go(-1)
			},
			xiangQing(id,Tid){		//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员/财务顾问 6:新三板做市商
//				window.location.href="#/faxian/sousuo/"+this.$route.params.token+'/'+"SousuoLeixing";
				if(id=='2'){
					window.location.href="#/faxian/sousuo/ZiliaoT"+Tid+"/"+this.userContent["token"];//1:股权投资   2:债权投资   3:股债兼投
				}else{
					window.location.href="#/faxian/sousuo/Ziliao"+id+"/"+this.userContent["token"];
				}
//				this.$refs.TypeA.typeShow();
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
			}
		},
		watch:{
			texts:function(newVal){
				Indicator.open({spinnerType: 'fading-circle'});
				this.height=0;
				console.log("开始搜索")
				var thata=this;
				if(newVal!==""){
					var thata=this;
					clearTimeout(this.timer);
					this.timer=setTimeout(function(){
						//搜索接口地址
	//					var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+newVal;
	//					that.requestData(url)
						var params={
				    		terminalNo:3,
				    		ctype:6,
//							ctype:thata.type,			//用户身份
	//						interested:			//1,2,3,4,5,6
							kw:newVal,					//关键词搜索
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
					},500)
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
		    	position: absolute;
		    	margin:auto;
		    	top:0;
		    	left:0.2rem;
		    	right:0;
		    	bottom:0;
			    width: 80%;
			    height: 0.3rem;
			    /*background: #ffffff;*/
			    /*color: #CACACA;*/
			    font-size: 0.14rem;
			    .sousuo{
			    	border-radius:0.1rem;
			    	padding-left:4%;
			    	width:96%;
			    	height:100%;
			    }
			}
		}
		.box::-webkit-scrollbar{width:0px;}
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;  		/*解决ios滑动*/
			.wenzhang-content{
				width:95%;
				/*height:auto;*/
				margin:0 auto;
				padding:0.55rem 0 0.6rem 0;
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
								width:100%;
								/*height:100%;*/
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
								width:auto;
								padding-right:1.2%;
							}
						}
					}
				}
			}
		}
	}
</style>


