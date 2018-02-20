<template>
	<transition name="fade">
		<div class="zhuce">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>工作岗位变更</span>
			</div>
			<!--<div class="searchBox">
				<div class="home-search">
					<span>填写基本信息</span>
				</div>
			</div>-->
			<div class="contents">
				<div class="wanshan">
					<div style="width:100%;height:0.45rem;"></div>
					<div class="logo">
						<ul>
							<li>
								<mingpian @to-parent="child" class="mingpians" ref="mingpianID"></mingpian>
								<img ref="tianjia" v-show="images" :src="imgurl" alt="" />
							</li>
							<span>您的新名片</span>
						</ul>
					</div>
					<div class="zhuying_1 liangdian_1 border-top">
						<div class="ferst">选择您的新身份<font></font></div>	<!--类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员/财务顾问 6:新三板做市商-->
						<div class="last" ref="biaoqian">
							<span @click.stap="xuanze('0','2')">投资机构</span>
							<span @click.stap="xuanze('1','7')">财务顾问</span>
							<span @click.stap="xuanze('2','1')">企&nbsp;业</span>
							<span @click.stap="xuanze('3','3')">合格投资人</span>
							<span @click.stap="xuanze('4','4')">研究咨询</span>
							<span @click.stap="xuanze('5','6')">做市商</span>
							<!--<span @click.stap="xuanze('6')">后续添加</span>-->
						</div>
					</div>
					<transition name="fades">
						<div  v-show="Leixing" class="zongBiaoQian">
							<div class="zhuying_1 liangdian_1 border-topbottom">
								<div class="ferst">您是什么类型的投资机构<font></font></div>
								<div class="last" ref="biaoqian2">
									<span @click.stap="xuanze2('0','Guquan','1')">股权投资</span>
									<!--<span @click.stap="xuanze2('1','Zaiquan','2')">债权投资</span>-->
									<span @click.stap="xuanze2('1','Guzhai','3')">投贷联动</span>
									<span @click.stap="xuanze2('2','Rongzi','4')">融资租赁</span>
									<span @click.stap="xuanze2('3','Zhiya','5')">股权质押</span>
									<span @click.stap="xuanze2('4','Baoli','6')">保&nbsp;理</span>
									<span @click.stap="xuanze2('5','Gudong','7')">股东借款</span>
									<span @click.stap="xuanze2('6','YinbaoHan','8')">银行保函</span>
									<span @click.stap="xuanze2('7','Duanqi','9')">短期拆借</span>
									<span @click.stap="xuanze2('8','YinshouXin','10')">银行授信</span>
								</div>
							</div>
							<div v-show="Leixing1" class="zhuying_1 liangdian_1">
								<div class="ferst">您是什么类型的投资机构<font></font></div>
								<div class="last" ref="biaoqian2s">
									<span id="1" @click.stap="xuanze2s('0','Guquan','1')">股权投资</span>
									<!--<span @click.stap="xuanze2('1','Zaiquan','2')">债权投资</span>-->
									<span id="3" @click.stap="xuanze2s('1','Guzhai','3')">投贷联动</span>
									<span id="4" @click.stap="xuanze2s('2','Rongzi','4')">融资租赁</span>
									<span id="5" @click.stap="xuanze2s('3','Zhiya','5')">股权质押</span>
									<span id="6" @click.stap="xuanze2s('4','Baoli','6')">保&nbsp;理</span>
									<span id="7" @click.stap="xuanze2s('5','Gudong','7')">股东借款</span>
									<span id="8" @click.stap="xuanze2s('6','YinbaoHan','8')">银行保函</span>
									<span id="9" @click.stap="xuanze2s('7','Duanqi','9')">短期拆借</span>
									<span id="10" @click.stap="xuanze2s('8','YinshouXin','10')">银行授信</span>
								</div>
							</div>
						</div>
					</transition>
					<div class="zhuce-food" @click.stop="XiaYibu()">
						<span>申请变更</span>
					</div>
				</div>
			</div>
			<router-view :XiajiCanshu="XiajiCanshu" :typeID="typeID"></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import mingpian from "../../ShangchuanMingpian.vue";
//	import touxiang from "../../ShangchuanTouxiang.vue";
	
	export default {
		props:{
//			datas:{
////				type: Object,
//			}
		},
		data () {
			return {
				datas:'',
				XiajiCanshu:'',
				token:"DxZGPSUsZsp48LUdWYWpca2HXxwfUDZY1zfFHzyhidbfov0BKWrnwiuKVhpqkFa5",
				contens:"",
				type:"",
				Leixing:false,
				Leixing1:false,
				butten:"下一步",
				classId:"0",
				Type:{
					show0:0,
					show1:1,
					show2:2,
					show3:3,
					show4:4,
					show5:5
				},
				id:3,
				showFlag:false,
				onlyContent:true,
				imgurl:"",
				images:false,
				
				index:"0",
				JigouType:"",
				typeID:"0",
				typeIDs:"",
				TouziType:"",
				biaoQianID:[],		//储存标签id
				biaoQianid:'',		//储存标签id字符串
				y:1
			}
		},
		mounted(){
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1)
//				window.location.href="#/faxian";
			},
			child(MingpianImg){
				this.imgurl=MingpianImg
				if(MingpianImg){
					this.images=true;
				}
				this.$nextTick(function() {
					var img = this.$refs.tianjia;
					var num = img.length;
					if (img.clientWidth>img.clientHeight) {
						img.style.height="100%"
						img.style.width="auto"
					}else{
						img.style.width="100%"
						img.style.height="auto"
					}
				})
//				console.log(MingpianImg)
			},
			XiaYibu(){
				localStorage.setItem("shenfenYibiangeng",'ok');
//				console.log(this.$refs.touxiangID.touxiangID);
//				console.log(this.$refs.mingpianID.mingpianID);
//				if(this.$refs.touxiangID.touxiangID==''){
//					Toast("请上传头像");
//					return;
//				}
				if(this.$refs.mingpianID.mingpianID==''){
					Toast("请上传名片");
					return;
				}
				if(this.type==''){
					Toast("请选择您的身份");
					return;
				}
				var no=0;
				if(this.index==0){
					if(this.typeID=='0'){
						Toast("请选择您的投资类型");
						no=1
					}
				}
				if(no==1){
					return;
				}
				var data={			//财务顾问  做市商直接注册
					token:localStorage.getItem("token"),						//	手机号	是	[string]	
					terminalNo:'3',						
					ctype:"34",							//33公司名称变更34工作单位变动	
//					com_name:"公司全称",						//公司全称
//					com_short:"公司全称",					//公司简称
					photo:this.$refs.mingpianID.mingpianID,						//名片id
					actype:this.type,		//身份变更 id
					investment_type:this.typeID
//					uname:"",										//姓名
//					position:""									//职称
				}
//				console.log(this.typeID)
				if(this.index==0){		//投资机构下一步
					localStorage.setItem("typeID1",this.typeID);
//					localStorage.setItem("typeID",this.typeID);
					this.$http.post(URL.path1+'account/identity',data,{emulateJSON:true}).then(function(res){
//	                    console.log(res);
						if(res.body.returnCode=='200'){
							Toast('你已申请成功我们会为您尽快审核');
							this.XiajiCanshu={
						        id:res.body.data.id,
						        phone:res.body.data.phone,
						        nickname:res.body.data.nickname,
						        token:res.body.data.token
						    }
//							localStorage.setItem("userID",res.body.data.id);
//							localStorage.setItem("token",res.body.data.token);
//							localStorage.setItem("phone",res.body.data.phone);
//							localStorage.setItem("type1",this.type);
//							console.log(this.XiajiCanshu)
							window.location.href="#/faxian"
//							window.location.href="#/zhuce/ZhuCe1/"+res.body.data.token+','+res.body.data.id+','+this.typeID+"/"+this.JigouType;
//							window.location.href="#/zhuce/ZhuCe1/"+res.body.data.token+"/"+this.JigouType;
						}else{
//							window.location.href="#/denglu"
							Toast(res.body.msg);
						}
	                },function(res){
	                	this.mingpianID=1;
	                	Toast("系统正忙请稍后！");
	                    console.log(res);
	                });
				}else{
					if(this.index==1 || this.index==5){
						this.$http.post(URL.path1+'account/identity',data,{emulateJSON:true}).then(function(res){
							localStorage.removeItem("typeID1");	
//		                    console.log(res);
							if(res.body.returnCode=='200'){
								Toast('你已申请成功我们会为您尽快审核');
								this.XiajiCanshu={
							        id:res.body.data.id,
							        phone:res.body.data.phone,
							        nickname:res.body.data.nickname,
							        token:res.body.data.token
							    }
//								localStorage.setItem("userID",res.body.data.id);
//								localStorage.setItem("token",res.body.data.token);
//								localStorage.setItem("phone",res.body.data.phone);
								localStorage.setItem("type1",this.type);
//								console.log(this.XiajiCanshu)
								window.location.href="#/faxian"
							}else{
//								window.location.href="#/denglu"
								Toast(res.body.msg);
							}
		                },function(res){
		                	this.mingpianID=1;
		                	Toast("系统正忙请稍后！");
		                    console.log(res);
		                });
					}else{
						this.$http.post(URL.path1+'account/identity',data,{emulateJSON:true}).then(function(res){
							localStorage.removeItem("typeID1");	
//		                    console.log(res);
							if(res.body.returnCode=='200'){
								Toast('你已申请成功我们会为您尽快审核');
//								Toast('注册成功请进行下一步完善信息');
								this.XiajiCanshu={
							        id:res.body.data.id,
							        type:this.type,
							        phone:res.body.data.phone,
							        nickname:res.body.data.nickname,
							        token:res.body.data.token
							    }
//								localStorage.setItem("userID",res.body.data.id);
//								localStorage.setItem("token",res.body.data.token);
								localStorage.setItem("type1",this.type);
//								console.log(this.XiajiCanshu)
								window.location.href="#/faxian"
//								window.location.href="#/zhuce/ZhuCe1/"+this.type+"/type"+this.index;
							}else{
//								window.location.href="#/denglu"
								Toast(res.body.msg);
							}
		                },function(res){
		                	this.mingpianID=1;
		                	Toast("系统正忙请稍后！");
		                    console.log(res);
		                });
					}
				}
				
			},
			xuanze(index,type){
				this.type=type;
//				console.log(type)
//				console.log(this.$refs.biaoqian.getElementsByTagName("span"))
				var spans=this.$refs.biaoqian.getElementsByTagName("span")
				var length=spans.length;
				this.index=index;
				if(this.index==1 || this.index==5){		//类型1和5 直接下一步；
					this.butten="确定"
				}else{
					this.butten="下一步"
				}
				if(index==0){
					this.Leixing=true;
					this.Leixing1=true;
				}else{
					this.Leixing=false;
					this.Leixing1=false;
				}
				for(var i=0; i<length; i++){
					if(spans[i].getAttribute("class")=="bianse"){
						spans[i].setAttribute("class","");
					}
				}
				spans[index].setAttribute("class","bianse")
			},
			xuanze2(index,type,id){
				console.log(id)
//				console.log(this.$refs.biaoqian.getElementsByTagName("span"))
				var spans=this.$refs.biaoqian2.getElementsByTagName("span")
				var length=spans.length;
				var spans1=this.$refs.biaoqian2s.getElementsByTagName("span")
				var length1=spans1.length;
				var tiaoChu=0;
				for(var e=0; e<length1; e++){
					spans1[e].style.display="block";
					if(spans1[index].id==this.biaoQianID[e]){
						this.biaoQianID.splice(e,1);
						this.y-=1;
						spans1[index].setAttribute("class","");
					}
				}
				spans1[index].style.display="none";
				if(index==0){
					spans1[1].style.display="none";
					spans1[1].setAttribute("class","");
					for(var a=0; a<this.y; a++){
						if(this.biaoQianID[a]==spans1[1].id){
							this.biaoQianID.splice(a,1);
							this.biaoQianid=this.biaoQianID.join()
							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}
				if(index==1){
					spans1[0].style.display="none";
					spans1[0].setAttribute("class","");
					for(var s=0; s<this.y; s++){
						if(this.biaoQianID[s]==spans1[0].id){
							this.biaoQianID.splice(s,1);
							this.biaoQianid=this.biaoQianID.join()
							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}
				this.typeID=id;
//				localStorage.setItem("typeID",id);
				this.JigouType=type;
				for(var i=0; i<length; i++){
					if(spans[i].getAttribute("class")=="bianse"){
						spans[i].setAttribute("class","");
					}
				}
				spans[index].setAttribute("class","bianse")
			},
			xuanze2s(index,type,id){
//				if(this.typeID==id){
//					return;
//				}
//				console.log(id)
//				console.log(this.$refs.biaoqian.getElementsByTagName("span"))
				var spans=this.$refs.biaoqian2s.getElementsByTagName("span")
				var length=spans.length;
				this.typeIDs=id;
//				localStorage.setItem("typeID",id);
				this.JigouType=type;
				if(spans[index].getAttribute("class")=="bianse"){
					spans[index].setAttribute("class","");
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID[z]==spans[index].id){
							this.biaoQianID.splice(z,1);
//							console.log(this.biaoQianID)
							this.biaoQianid=this.biaoQianID.join()
							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}else{
					spans[index].setAttribute("class","bianse");
					this.y+=1;
					for(var i=0; i<this.y; i++){
						if(this.biaoQianID[i]!=spans[index].id){
							this.biaoQianID.push(spans[index].id)
							break;
						}
					}
//					console.log(this.biaoQianID)
					this.biaoQianid=this.biaoQianID.join()
					console.log(this.biaoQianid)
				}
				if(index==0){
					spans[1].style.display="none";
					spans[1].setAttribute("class","");
					for(var a=0; a<this.y; a++){
						if(this.biaoQianID[a]==spans[1].id){
							this.biaoQianID.splice(a,1);
							this.biaoQianid=this.biaoQianID.join()
							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}
				if(index==1){
					spans[0].style.display="none";
					spans[0].setAttribute("class","");
					for(var s=0; s<this.y; s++){
						if(this.biaoQianID[s]==spans[0].id){
							this.biaoQianID.splice(s,1);
							this.biaoQianid=this.biaoQianID.join()
							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}
			},
			yanZheng(){
				
			},
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
			mingpian
//			touxiang
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
	.fades-enter-active {
	  	transition: all .5s ease;
	}
	.fades-leave-active {
	  	transition: all .5s ease;
	}
	.fades-enter, .fades-leave-active {
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.zhuce{
		position:fixed;
		background:#ffffff;
		top:0;
		left:0;
		width:100%;
		height:100%;
		z-index:200;
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
			z-index:300;
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
		.contents::-webkit-scrollbar{width:0px}
		.contents{
			width:92%;
			height:100%;
			margin:0 auto;
			overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wanshan{
				width:100%;
				height:auto;
				.logo{
					width:100%;
					height:2.16rem;
					display:flex;
					justify-content:center;
					align-content:center;
					align-items:center;
					text-align:center;
					overflow:hidden;
					ul{
						width:1.25rem;
							height:1.25rem;
						overflow:hidden;
						li{
							position:relative;
							border:1px solid #f5f4f9;
							box-sizing:border-box;
							width:1.25rem;
							height:1.25rem;
							background-image:url("../img/mingpian.png");
							background-size:100% 100%;
							display:flex;
							justify-content:center;
							align-content:center;
							align-items:center;
							text-align:center;
							overflow:hidden;
							img{
								/*width:100%;*/
							}
							.mingpians{
								position:absolute;
								top:0.25rem;
								left:0;
								opacity:0;
							}
						}
					}
					span{
						display:inline-block;
						margin-top:0.1rem;
						font-size:0.16rem;
						/*color:#*/
					}
				}
				.phones{
					margin-top:0.1rem;
				}
				.zhuce-list{
					.huoqu{
						background:#007AFF;
						border-radius:0.1rem;
						padding:0.1rem;
						color:#fff;
					}
				}
				.zhuying_1{
					width:100%;
					padding:0.16rem 0 0.07rem 0;
					span{
						color:#ff7a59;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						align-content: center;
						align-items: center;
						font-size:0.16rem;
						font{
							color:#ff7a59;
							font-size:0.12rem;
						}
					}
				}
				.liangdian_1{
					.ferst{
						height:0.18rem;
						padding-bottom:0.14rem;
					}
					.last{
						width:100%;
						overflow:hidden;
						/*display:flex;*/
						/*align-content:stretch;*/
						/*align-items:stretch ;*/
						/*justify-content:space-between;*/
						/*flex-wrap:wrap;*/
						span{
							display:block;
							float:left;
							font-size:0.14rem;
							padding:0.06rem 0.08rem;
							border:1px solid #f2f2f2;
							color:#acacac;
							border-radius:0.3rem;
							margin:0 0.16rem 0.11rem 0;
						}
						span:nth-child(4n){
							margin:0 0 0.11rem 0;
						}
						.bianse{
							border:1px solid #fddcd0;
							color:#ff7a59;
						}
					}
				}
				.zhuce-food{
					width:100%;
					height:0.4rem;
					margin:0 auto;
					margin-top:0.18rem;
					padding-bottom:0.2rem;
					span{
						width:100%;
						height:100%;
						color:#ffffff;
						font-size:0.2rem;
						text-align:center;
						line-height:0.4rem;
						border-radius:8px;
						display:inline-block;
						background:#ff7a59;
					}
				}
			}
		}
	}
</style>


