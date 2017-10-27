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
						<ul ref="biaoqian">
							<span class="bianse" @click.stap="xuanze('0','2')">投资机构</span>
							<span @click.stap="xuanze('1','7')">财务顾问</span>
							<span @click.stap="xuanze('2','1')">企&nbsp;业</span>
							<span @click.stap="xuanze('3','3')">合格投资人</span>
							<span @click.stap="xuanze('4','4')">研究咨询</span>
							<span @click.stap="xuanze('5','6')">做市商</span>
							<!--<span @click.stap="xuanze('6')">后续添加</span>-->
						</ul>
					</div>
					<transition name="fades">
						<div v-show="Leixing" class="zhuying_1 liangdian_1 border-topbottom">
							<div class="ferst">选择您的新类型投资机构<font></font></div>
							<ul ref="biaoqian2">
								<span class="bianse" @click.stap="xuanze2('0','Guquan','1')">股权投资</span>
								<span @click.stap="xuanze2('1','Zaiquan','2')">债权投资</span>
								<span @click.stap="xuanze2('2','Guzhai','3')">股债兼投</span>
							</ul>
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
	import mingpian from "../../ShangchuanMingpian.vue";
	import touxiang from "../../ShangchuanTouxiang.vue";
	
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
				type:"2",
				Leixing:true,
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
				index:"0",
				JigouType:"Guquan",
				typeID:"1",
				TouziType:"",
				imgurl:"",
				images:false
			}
		},
		mounted(){
//			var that=this;
//			this.$on("to-parent",function(msg){
////					alert(msg);
//				that.imgurl = msg;
//				console.log(msg)
//				
//			})
//			console.log(this.$route.params.token)
//			this.datas=this.$route.params.token.split(',');
			
//			console.log(this.datas[1]);//上一级传的参数；
									//phone:this.phone,  //手机号
									//texts:this.texts,	//验证码
									//pwd: this.pwd, //密码
		},
		methods:{
			yijianHind(){
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
				console.log(MingpianImg)
			},
			XiaYibu(){
//				console.log(this.$refs.touxiangID.touxiangID);
				console.log(this.$refs.mingpianID.mingpianID);
//				if(this.$refs.touxiangID.touxiangID==''){
//					Toast("请上传头像");
//					return;
//				}
				if(this.$refs.mingpianID.mingpianID==''){
					Toast("请上传名片");
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
//					uname:"",										//姓名
//					position:""									//职称
				}
				if(this.index==0){		//投资机构下一步
					localStorage.setItem("typeID",this.typeID);
					this.$http.post(URL.path1+'account/identity',data,{emulateJSON:true}).then(function(res){
	                    console.log(res);
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
//							localStorage.setItem("type",this.type);
							console.log(this.XiajiCanshu)
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
		                    console.log(res);
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
//								localStorage.setItem("type",this.type);
								console.log(this.XiajiCanshu)
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
		                    console.log(res);
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
//								localStorage.setItem("type",this.type);
								console.log(this.XiajiCanshu)
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
				console.log(index)
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
				}else{
					this.Leixing=false;
				}
				for(var i=0; i<length; i++){
					if(spans[i].getAttribute("class")=="bianse"){
						spans[i].setAttribute("class","");
					}
				}
				spans[index].setAttribute("class","bianse")
			},
			xuanze2(index,type,id){
//				console.log(this.$refs.biaoqian.getElementsByTagName("span"))
				var spans=this.$refs.biaoqian2.getElementsByTagName("span")
				var length=spans.length;
				this.typeID=id;
				this.JigouType=type;
				for(var i=0; i<length; i++){
					if(spans[i].getAttribute("class")=="bianse"){
						spans[i].setAttribute("class","");
					}
				}
				spans[index].setAttribute("class","bianse")
			},
			yanZheng(){
				
			},
//			xuanze(id,classId){
//				console.log(id)
////				var type=document.getElementById(id);
////				type.TypeShow()
////				console.log(type)
////				this.$refs.show+this.classId.TypeShow();
//				window.location.href="#/zhuce/zhuce1/12/type"+id+"/"+classId;
//			}
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
			mingpian,
			touxiang
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
					ul{
						width:100%;
						overflow:hidden;
						display:flex;
						/*align-content:stretch;*/
						/*align-items:stretch ;*/
						/*justify-content:space-between;*/
						flex-wrap:wrap;
						
						span{
							display:inline-block;
							float:left;
							font-size:0.14rem;
							padding:0.06rem 0.08rem;
							border:0.007rem solid #f2f2f2;
							color:#acacac;
							border-radius:0.3rem;
							margin:0 0.16rem 0.11rem 0;
						}
						span:nth-child(4n){
							margin:0 0 0.11rem 0;
						}
						.bianse{
							border:0.007rem solid #fddcd0;
							color:#ff7a59;
						}
					}
				}
				.zhuce-leixing{
					width:100%;
					height:2rem;
					display: flex;
					ul{
						flex:1;
						padding:0.2rem;
						.leixing-header{
							margin-left: 0.1rem;
							margin-bottom:0.1rem;
						}
						li{
							display:inline-block;
							margin:0;
							padding:0.08rem 0.16rem;
							margin:0.06rem 0.1rem;
						}
					}
				    /*-webkit-box-pack: center;
				    justify-content: center;
				    -webkit-box-align: center;
				    align-items: center;*/
				   
				}
				.zhuce-food{
					width:100%;
					height:0.4rem;
					margin:0 auto;
					margin-top:0.18rem;
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


