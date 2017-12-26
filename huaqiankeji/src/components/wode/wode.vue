<template>
	<!--<transition name="fade">-->
		<div class="wode">
			<div class="searchBox">
				<div class="home-search" @click.stop="gaiBian()">
					<img ref="images" :src="photourl"/>
				</div>
				<div v-if="shifouZhuce==2" class="header-name">
					<font>{{data.uname}}</font>
					<div class="header-content">
						<span>{{data.com_short}}</span>
						<span>{{data.position}}</span>
					</div>
				</div>
				<div v-if="shifouZhuce=='6'" class="header-name">
					<font>{{data.uname}}</font>
					<div class="header-content">
						<span>{{data.com_short}}</span>
						<span>{{data.position}}</span>
					</div>
				</div>
				<!--<div class="jifen"><font></font><span>积分 666</span></div>-->
			</div>
			
			<div class="box">
				<div class="FadeContent">
					<div style="width:100%;height:1.06rem;"></div>
					<ul v-show="blockCont" class="content-header ziliao">
						<li>
							<span v-if="data.received_item_nums=='0'" class="zanwu">暂无</span>
							<span v-if="data.received_item_nums!='0'">{{data.received_item_nums}}</span>
							<span>收获项目数</span>
						</li>
						<li class="border-rightleft">
							<span v-if="inof=='0'" class="zanwu">暂无</span>
							<span v-if="inof!='0'">{{inof}}%</span>
							<span>查看率</span>
						</li>
						<li>
							<span v-if="data.exchange_card=='0'" class="zanwu">暂无</span>
							<span v-if="data.exchange_card!='0'">{{yuetan}}%</span>
							<span>反馈率</span>
						</li>
					</ul>
					<box></box>		<!--类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员/财务顾问 6:新三板做市商-->
					<div v-if="!investment_type" class="dujia-header border-top" @click.stop="ziliaoShow(type)">
						<span><font class="kuaixuna"></font>个人资料</span>
						<a v-if="completeness" class="wancheng">完成度{{completeness}}%</a><span></span>
					</div>
					<div v-if="investment_type" class="dujia-header border-top" @click.stop="ziliaoShow(type,investment_type)">
						<span><font class="kuaixuna"></font>个人资料</span>
						<a v-if="completeness" class="wancheng">完成度{{completeness}}%</a><span></span>
					</div>
					<div v-show="beianShow" class="dujia-header border-top" @click.stop="RongziBeian()">
						<span><font class="kuaixunb"></font>融资项目备案</span>
						<span></span>
					</div>
					<div v-show="block" class="dujia-header border-top" @click.stop="jiluGo()">
						<span><font class="kuaixunc"></font>历史融资记录</span>
						<span></span>
					</div>
					<!--<div class="dujia-header border-top" @click.stop="baomingGo()">
						<span><font class="kuaixund"></font>我报名的</span>
						<span></span>
					</div>-->
					<div class="dujia-header border-topbottom" @click.stop="gangweiGo()">
						<span><font class="kuaixune"></font>工作岗位变更</span>
						<span></span>
					</div>
					<div style="width:100%;height:0.18rem;"></div>
					<div class="dujia-header border-topbottom" @click.stop="biduGo()">
						<span><font class="kuaixunf"></font>设置</span>
						<span></span>
					</div>
				</div>
			</div>
			<!--<bidu ref="biduShow"></bidu>-->
			<!--<jilu ref="jiluShow"></jilu>-->
			<router-view :token="token" :beianType="beianType" :userContent="userContent"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import box from "../box.vue"
	import {URL} from '../../common/js/path';
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import bidu from "./RongziBidu/biDu.vue";
//	import jilu from "./RongziJilu/jiLu.vue";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				data:"",
				inof:"",
				userContent:"",
				token:"",
				userID:'',
				beianType:"",
				photourl:'',
				block:true,
				blockCont:true,
				numberb:'',
				showFlag:false,
				onlyContent:true,
				type:"",
				investment_type:'',		//用户的投资类型；   是投资机构时才会出现
				beianShow:false,
				completeness:"",
				yuetan:"",
				shifouZhuce:"",
				houtaiTishi:"",
				diyiCi:false,
				shengqingZhongtishi:'您的注册申请尚在审核中'
			}
		},
		activated(){
			this.photourl=localStorage.getItem("photourl");
			this.$nextTick(function(){
				var images = this.$refs.images;
				images.onload =function(){
					if (this.clientWidth>this.clientHeight) {
						this.style.height="100%"
						this.style.width="auto"
					}else{
						this.style.width="100%"
						this.style.height="auto"
					}
				}
			});
			this.houtaiTishi=localStorage.getItem("houtaiTishi");
			var params={
	    		token:localStorage.getItem("token"),
	    		terminalNo:3
	    	}
			if(localStorage.getItem("shenfenYibiangeng")){
//				alert("aaaaaa")
				this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
//					console.log('监听个人信息更改通过');
//					console.log(res);
					if(res.body.data.ctype=='2'){
						if(res.body.data.info.investment_type==localStorage.getItem("typeID1")){
							localStorage.setItem("typeID",res.body.data.info.investment_type);
							localStorage.setItem("type",res.body.data.ctype)
							localStorage.removeItem("userID");		//用户ID
							localStorage.removeItem("shenfenYibiangeng");
							Toast('您的身份已变更请重新登录')
							setTimeout(function(){
								location.replace(document.referrer); 
							},1000)
							return;
						}
						if(res.body.data.ctype==localStorage.getItem("type1")){
							localStorage.setItem("type",res.body.data.ctype)
							localStorage.removeItem("userID");		//用户ID
							localStorage.removeItem("shenfenYibiangeng");
							Toast('您的身份已变更请重新登录')
							setTimeout(function(){
								location.replace(document.referrer); 
							},1000)
						}
					}else{
						if(res.body.data.ctype!=localStorage.getItem("type")){
							localStorage.setItem("type",res.body.data.ctype)
							localStorage.removeItem("userID");		//用户ID
							localStorage.removeItem("shenfenYibiangeng");
							Toast('您的身份已变更请重新登录')
							setTimeout(function(){
								location.replace(document.referrer); 
							},1000)
						}else{
						}
					}
				},function(res){
				    console.log(res);
				})
			}
			this.gerenZiliao();
//			if(this.diyiCi==false){
//				this.jiantingTongguo()
//			}
		},
		mounted(){
			this.shifouZhuce=localStorage.getItem("shifouZhuce");
//			this.houtaiTishi=localStorage.getItem("houtaiTishi");
//			console.log(this.shifouZhuce)
			this.userContent={
	  			userID:localStorage.getItem("userID"),			//用户ID
				token:localStorage.getItem("token"),		//用户token
				phone:localStorage.getItem("phone"),		//用户电话
				type:localStorage.getItem("type"),			//用户类型
				photo:localStorage.getItem("photo"),		//用户头像id
				photourl:localStorage.getItem("photourl")	//用户头像URL地址
	  		}
			this.token=this.userContent["token"];
			this.beianType=this.userContent["type"];
			this.photourl=this.userContent["photourl"];
			this.type=this.userContent["type"];
			if(this.type=='1' || this.type=='7'){
				this.blockCont=false;
			}
//			console.log(this.userContent)
//			if(this.userContent["type"]=='2'){
//				this.investment_type=localStorage.getItem("typeID");		//用户的投资类型；   是投资机构时才会出现的参数
//			}
			if(this.userContent["type"]=='1' || this.userContent["type"]=='7'){
				this.beianShow=true;
				this.block=true;
			}else{
				this.block=false;
			}
//			console.log(this.investment_type)
			this.gerenZiliao();
		},
		methods:{
//			监听是否通过
			jiantingTongguo(){
				var params={
		    		token:localStorage.getItem("token"),
		    		terminalNo:3
		    	}
				this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
//					console.log('监听个人信息更改通过');
//					console.log(res);
					this.shifouZhuce=res.body.data.status;
					localStorage.setItem("shifouZhuce",res.body.data.status)
					if(res.body.data.status==2){
//						console.log("判断注册通过的首页项目列表成功");
						this.diyiCi=true;
						this.gerenZiliao();
					}else{
						if(res.body.returnCode=='401'){
							localStorage.removeItem("userID");		//用户ID
							localStorage.removeItem("token");		//用户token
							localStorage.removeItem("phone");		//用户电话
							localStorage.removeItem("type");		//用户类型
							localStorage.removeItem("name");
							localStorage.removeItem("photo");		//用户头像id
							localStorage.removeItem("photourl");	//用户头像URL地址
							localStorage.removeItem("panduanWanshan");
							localStorage.removeItem("qiangZhi");
							if(localStorage.getItem("typeID")){
								localStorage.removeItem("typeID");
							}
							location.replace(document.referrer);
//							window.location.href="#/denglu";
//							this.shengqingZhongtishi='1'
						}else{
							Toast(this.shengqingZhongtishi)
						}
					}
				},function(res){
				    console.log(res);
				})
			},
			gerenZiliao(){
				var params={
		    		token:localStorage.getItem("token"),
		    		terminalNo:3
		    	}
//				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
//					console.log(res);
//					Indicator.close();
					this.data=res.body.data;
					this.yuetan=res.body.data.exchange_card.toFixed(2);
					this.inof=res.body.data.info.feedback;
					this.completeness=res.body.data.info.completeness;
					if(this.userContent["type"]=='2'){
						localStorage.setItem("typeID",res.body.data.info.investment_type);
						this.investment_type=res.body.data.info.investment_type;		//用户的投资类型；   是投资机构时才会出现的参数
					}
					this.$nextTick(function(){
						var images = this.$refs.images;
						images.onload =function(){
							if (this.clientWidth>this.clientHeight) {
								this.style.height="100%"
								this.style.width="auto"
							}else{
								this.style.width="100%"
								this.style.height="auto"
							}
						}
					});
//					console.log("个人资料");
				},function(res){
//					Indicator.close();
				    console.log(res);
				})
			},
			gaiBian(){
				window.location.href="#/touXiang/"+this.userContent["token"];
			},
			biduGo(){
//				this.$refs.biduShow.biduBlock();
				window.location.href="#/wode/shezhi/"+this.userContent["token"];
			},
			ziliaoShow(id,Tid){			//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员/财务顾问 6:新三板做市商
				if(localStorage.getItem("shifouZhuce")=='6'){
					Toast(localStorage.getItem("houtaiTishi"))
					return;
				}
				if(this.shifouZhuce==2){
					if(id=='2'){
//						window.location.href="#/wode/ZiliaoT"+'10'+"/"+this.userContent["token"];
						window.location.href="#/wode/ZiliaoT"+this.investment_type+"/"+this.userContent["token"];//1:股权投资   2:债权投资   3:股债兼投
					}else{
						window.location.href="#/wode/Ziliao"+id+"/"+this.userContent["token"];
					}
				}else{
					if(this.shifouZhuce=='6'){
//						if(id=='2'){
//							window.location.href="#/wode/ZiliaoT"+this.investment_type+"/"+this.userContent["token"];//1:股权投资   2:债权投资   3:股债兼投
//						}else{
//							window.location.href="#/wode/Ziliao"+id+"/"+this.userContent["token"];
//						}
//						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu";
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
				}
			},
			RongziBeian(){
				if(localStorage.getItem("shifouZhuce")=='6'){
					Toast(localStorage.getItem("houtaiTishi"))
					return;
				}
				if(this.shifouZhuce==2){
					window.location.href="#/wode/RongziBeian/"+this.token;
				}else{
					if(this.shifouZhuce=='6'){
//						window.location.href="#/wode/RongziBeian/"+this.token;
//						Toast(this.houtaiTishi)
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
			jiluGo(){
				if(localStorage.getItem("shifouZhuce")=='6'){
					Toast(localStorage.getItem("houtaiTishi"))
					return;
				}
				if(this.shifouZhuce==2){
					window.location.href="#/jilu/0";
				}else{
					if(this.shifouZhuce=='6'){
//						window.location.href="#/wode/jilu/0";
//						Toast(this.houtaiTishi)
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
			baomingGo(){
				if(localStorage.getItem("shifouZhuce")=='6'){
					Toast(localStorage.getItem("houtaiTishi"))
					return;
				}
				if(this.shifouZhuce==2){
					window.location.href="#/wode/baoming/0";
				}else{
					if(this.shifouZhuce=='6'){
//						window.location.href="#/wode/baoming/0";
//						Toast(this.houtaiTishi)
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
			gangweiGo(){
//				if(localStorage.getItem("shifouZhuce")=='6'){
//					Toast(localStorage.getItem("houtaiTishi"))
//					return;
//				}
				if(this.shifouZhuce==2){
					window.location.href="#/wode/gangwei/0";
				}else{
					if(this.shifouZhuce=='6'){
						window.location.href="#/wode/gangwei/0";
//						Toast(this.houtaiTishi)
					}else{
						this.jiantingTongguo()
						if(this.shengqingZhongtishi=='1'){
//							window.location.href="#/denglu"
						}else{
//							Toast(this.shengqingZhongtishi)
						}
					}
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
			
		},
		components:{
			box,
		}
	}
</script>

<style lang="scss" scoped>
	.wode{
		width:100%;
		height:100%;
		background-color: #f5f4f9;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
			width:100%;
		    padding:0.26rem 0 0.18rem 0;
		    background-image:url("./img/bgbg.png");
		    background-size:100%;
		    background-position:0 -0.2rem;
		    display:flex;
		    z-index:100;
		    .home-search {
		    	position:relative;
		    	width:0.62rem;
		    	height:0.62rem;
			    background: #ffffff;
			    margin-left:4.9%;
			    border-radius:0.06rem;
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
			.header-name{
				padding-left:0.11rem;
				height:100%;
				color:#fff;
				font{
					font-size:0.2rem;
					line-height:0.34rem;
				}
				.header-content{
					margin-top:0.06rem;
					font-size:0.16rem;
					span{
						&:first-child{
							display:inline-block;
							padding-right:0.13rem;
						}
					}
				}
			}
			.jifen{
				width:0.75rem;
				height:0.15rem;
				position:absolute;
				top:0.58rem;
				right:0.16rem;
				font-size:0.12rem;
				display:flex;
				align-items:center;
				color:#fff;
				font{
					display:inline-block;
					width:0.15rem;
					height:0.15rem;
					background-image:url("./img/jifen.png");
					background-size:100% 100%;
					margin:-0.02rem 0.06rem 0 0;
				}
			}
		}
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			.FadeContent{
				width:100%;
				height:auto;
				.content-header{
					width:100%;
					height:0.33rem;
					padding:0.12rem 0;
					font-size:0.18rem;
					background:#fff;
					display:flex;
					li{
						flex:1;
						text-align:center;
						display:flex;
						flex-direction:column;
						span{
							&:first-child{
								margin-top:-0.04rem;
							}
							&:last-child{
								font-size:0.14rem;
								display: block;
								padding-top:0.1rem;
								color:#737373;
							}
						}
						.zanwu{
							color:#ff7a59;
							font-size:0.14rem;
						}
					}
				}
				.dujia-header{
					flex:1;
					background:#fff;
					padding:0.12rem 0.18rem;
					.wancheng{
						position:absolute;
						top:0.12rem;
						right:0.4rem;
						line-height:0.34rem;
					}
					span{
						font-size:0.16rem;
		    			/*font-weight:500;*/
		    			line-height:0.34rem;
		    			vertical-align: top;
						&:first-child{
							/*font-weight:bold;*/
							font-size:0.16rem;
						}
						&:last-child{
							float:right;
							float:right;
							width:0.18rem;
							height:0.22rem;
							background-image:url("./img/jiantou.png");
							background-size:100% 100%;
							margin-top:0.06rem;
						}
						font{
							display:inline-block;
							width:0.24rem;
							height:0.24rem;
							margin:0.04rem 0.08rem 0 0;
							background-size:100% 100%;
							background-repeat:no-repeat;
							
						}
						.kuaixuna{
							background-image:url("./img/geren.png");
						}
						.kuaixunb{
							background-image:url("./img/beian.png");
						}
						.kuaixunc{
							background-image:url("./img/jilu.png");
						}
						.kuaixund{
							background-image:url("./img/baoming.png");
						}
						.kuaixune{
							background-image:url("./img/wode1.png");
						}
						.kuaixunf{
							background-image:url("./img/shezhi.png");
						}
					}
				}
			}
		}
	}
</style>


