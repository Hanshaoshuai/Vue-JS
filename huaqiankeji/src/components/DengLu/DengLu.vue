<template>
	<!--<transition name="fade">-->
		<div class="denglu" v-show="showFlag">
			<div class="searchBox">
				<div class="home-search">
					<span>登录</span>
					<div class="fanhui-right">
						<div @click.stop="quanXuan()">
							<font  @click.stop="zhuche()">注册</font>
						</div>
					</div>
				</div>
			</div>
			<div class="contents">
				<div class="logo">
					<ul>
						<li></li>
					</ul>
				</div>
				<div class="denglu-text">
					<ul>
						<li>
							<span></span>
							<input ref="shouji" v-model="phone" placeholder="请输入手机号" type="number" class="ferst mint-field-core"/>
							<transition name="fade"><font v-show="shoujis" @click.stop="quxiao()"></font></transition>
						</li>
						<li>
							<span></span>
							<input ref="mima" v-model="password" placeholder="请输入密码" type="password" class="last mint-field-core"/>
							<transition name="fade"><font v-show="mimas" @click.stop="mima()"></font></transition>
						</li>
					</ul>
					
					
				</div>
				<div class="denglu-food" @click.stop="denglus()">
					<span>登&nbsp;&nbsp;录</span>
				</div>
				<div class="denglu-to">
					<ul>
						<li class="denglu-wangji"  @click.stop="wangji()">忘记密码</li>&nbsp;&nbsp;|&nbsp;&nbsp;
						<li class="denglu-zhuce" @click.stop="zhuche()">立即注册</li>
					</ul>
				</div>
				<div class="denglu-list denglu-bottom">
					合作热线：400 235648
				</div>
			</div>
			<router-view :XiajiCanshu="XiajiCanshu" :typeID="typeID"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
//	import { Field } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import Vue from "vue";
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
				body:"",
				XiajiCanshu:'',
				typeID:"1",
				phone:'',
				password:'',
				times:20177111129,
				showFlag:true,
				onlyContent:false,
				tishi:"",
				type:"1.2.5",
				shoujis:false,
				mimas:false
			}
		},
		mounted(){
			
		},
		methods:{
			fanhui(){
				history.go(-1)
			},
			denglus(){
				document.activeElement.blur();//隐藏软键盘；
				var tate=this;
				var phone=/^1[34578]\d{9}$/;
				var ph=0;
				var pw=0;
				var userID = this.phone;
				var password = this.password;
				var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password;
				var datas = {
					phone: this.phone,  //手机号
					pwd: this.password,   //密码
					version: this.type,//版本号
					terminalNo: 'terminalNo'
				}
				if(!phone.test(this.phone)) {
					Toast('输入手机号有误');
					return;
				}else{
					ph=1;
				}
				if(!this.password) {
					Toast('请输入密码');
					return;
				}else{
					pw=1;
				}
				if(ph==1 && pw==1){
//			返回		1	returnCode	200成功201错误	是	[string]	
//					2	msg	msg		是	[string]	
//					3	id	id		是	[string]	
//					4	phone		phone	是	[string]	
//					5	nickname	nickname	是	[string]	
//					6	photo		photo	是	[string]	
//					7	token		token	是	[string]
					Indicator.open({spinnerType: 'fading-circle'});
					this.$http.post(URL.path1+'login',datas,{emulateJSON:true}).then(function(res){
						Indicator.close();
						if(res.body.returnCode==200){	//本地储存
							this.XiajiCanshu={
						        id:res.body.data.id,
						        phone:res.body.data.phone,
						        nickname:res.body.data.nickname,
						        token:res.body.data.token
						    }
							localStorage.setItem("userID",res.body.data.id);		//用户ID
							localStorage.setItem("token",res.body.data.token);		//用户token
							localStorage.setItem("phone",res.body.data.phone);		//用户电话
							localStorage.setItem("type",res.body.data.ctype);		//用户类型
							localStorage.setItem("photo",res.body.data.photo.id);	//用户头像id
							localStorage.setItem("photourl",res.body.data.photo.url);	//用户头像URL地址
							console.log(res.body);
							if(res.body.data.ctype=='2'){
								this.qingQiu(res.body.data.token,res.body.data.ctype)
								return;
							}
							if(res.body.data.ctype=='6' || res.body.data.ctype=='7'){
								window.location.href="#/faxian";
								return;
							}
							if(res.body.data.ctype=='1' || res.body.data.ctype=='3' || res.body.data.ctype=='4'){
								this.qingQiu(res.body.data.token,res.body.data.ctype)
								return;
							}
//							window.location.href="#/faxian";
						}
						if(res.body.returnCode=='0011'){
							Toast(res.body.msg);
						}
                        
                    },function(res){
                    	Indicator.close();
                    	Toast('系统繁忙请稍后再试');
                        console.log(res);
                    });
					
					
//				  	this.$http.get(url).then(function(response){
//						console.log("login",response)
//						if(response.body != "0" && response.body != "2"){
//							Indicator.close();
//							localStorage.setItem("userID",userID);
//							if(confirm("已成功登陆是否进入首页?")){
//								window.location.href="#/fanxian";
//							}
//						}else{
//							Toast("此账号未注册请您立即注册")
//						}
//					})
				}
			},
			qingQiu(token,ctype){
				var datas={
					token:token,//	用户id	是	[string]			
				}
				this.$http.post(URL.path1+'account/info',datas,{emulateJSON:true}).then(function(res){
					if(res.body.returnCode=='200'){
						if(ctype==1){
							if(!res.body.data.info.industry){
								Toast('请完善您的资料');
								window.location.href="#/denglu/ZhuCe1/"+ctype+"/type2";
								return;
							}else{
								Toast('登录成功');
								window.location.href="#/faxian";
							}
						}
						if(ctype==3){
							if(!res.body.data.info.investment_way){
								Toast('请完善您的资料');
								window.location.href="#/denglu/ZhuCe1/"+ctype+"/type3";
								return;
							}else{
								Toast('登录成功');
								window.location.href="#/faxian";
							}
						}
						if(ctype==4){
							if(!res.body.data.info.interested){
								Toast('请完善您的资料');
								window.location.href="#/denglu/ZhuCe1/"+ctype+"/type4";
								return;
							}else{
								Toast('登录成功');
								window.location.href="#/faxian";
							}
						}
						if(ctype==2){
//							if(res.body.data.investment_type==1){
								if(!res.body.data.info.interested){
									Toast('请完善您的资料');
									window.location.href="#/denglu/ZhuCe1/"+0+"/"+'Guquan';
									return;
								}else{
									Toast('登录成功');
									window.location.href="#/faxian";
								}
//							}
//							if(res.body.data.investment_type==2){
//								if(res.body.data.info.industry.interested==''){
//									Toast('请完善您的资料');
//									window.location.href="#/zhuce/ZhuCe1/"+localStorage.getItem("token")+"/"+Zaiquan;
//									return;
//								}else{
//									Toast('登录成功');
//									window.location.href="#/faxian";
//								}
//							}
//							if(res.body.data.investment_type==3){
//								if(res.body.data.info.industry.interested==''){
//									Toast('请完善您的资料');
//									window.location.href="#/zhuce/ZhuCe1/"+localStorage.getItem("token")+"/"+Guzhai;
//									return;
//								}else{
//									Toast('登录成功');
//									window.location.href="#/faxian";
//								}
//							}
						}
						console.log(res)
					}else{
						Toast(res.body.msg);
					}
				},function(res){
				    console.log(res);
				})
			},
			zhuche(){
				window.location.href="#/zhuce";
			},
			wangji(){
				window.location.href="#/wangjiMima1";
			},
			quxiao(){
				this.phone="";
				this.shoujis=false;
			},
			mima(){
				this.password="";
				this.mimas=false;
			}
		},
		mounted(){
			console.log(URL.path)
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
			if(this.phone!=""){
				this.shoujis=true;
			}else{
				this.shoujis=false;
			}
			if(this.password!=""){
				this.mimas=true;
			}else{
				this.mimas=false;
			}
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
	  	/*transform: translateX(4.17rem);
	  	transform:rotate(360deg);*/
	  	opacity: 0;
	}
	.mint-toast .mint-toast-text{
		line-height:0.2rem;
		font-size:0.16rem;
	}
	.mint-indicator-wrapper{
		z-index:3000;
	}
	.denglu{
		position:fixed;
		background:#fff;
		width:100%;
		height:100%;
		z-index:10;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:30;
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
						vertical-align: top;
			    	}
			    }
			}
		}
		.contents{
			position:fixed;
			width:100%;
			top:39.1%;
			left:0;
			z-index:22;
			.logo{
				width:100%;
				height:1.5rem;
				display:flex;
				justify-content:center;
				align-content:center;
				align-items:center;
				margin-top:-1.8rem;
				z-index:26;
				ul>li{
					width:1.25rem;
					height:1.5rem;
					background-image:url("./img/app.png");
					background-size:100% 100%;
				}
			}
			.denglu-text{
				width:90.8%;
				margin:0 auto;
				position:relative;
				margin-top:0.3rem;
				border:0.008px solid #d0d0d0;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.07rem 0;
						display:flex;
						input{
							height:0.26rem;
							flex:1;
							padding-left:0.1rem;
							border-left:0.008px solid #d0d0d0;
						}
						input::-webkit-input-placeholder{ 
							color: #d0d0d0; 
						} 
						&:first-child{
							border-bottom:0.008px solid #d0d0d0;
						}
						span{
							display:inline-block;
							width:0.14rem;
							height:0.16rem;
							margin:0.05rem 0.16rem 0 0.13rem;
							background-image:url("./img/gerens.png");
							background-size:100% 100%;
							
						}
						font{
							display:inline-block;
							width:0.17rem;
							height:0.17rem;
							margin:0.04rem 0.16rem 0 0;
							background-image:url("./img/quxiao.png");
							background-size:100% 100%;
							
						}
						&:last-child{
							span{
								background-image:url("./img/mimas.png");
							}
						}
					}
				}
			}
			.denglu-food{
				width:90.80%;
				height:0.4rem;
				margin:0 auto;
				margin-top:0.3rem;
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
			.denglu-to{
				width:100%;
				color:#d0d0d0;
				ul{
					padding:0.2rem;
					display: flex;
				    -webkit-box-pack: center;
				    justify-content: flex-end;
				    -webkit-box-align: center;
				    align-items: center;
					.denglu-wangji{
						
					}
					.denglu-zhuce{
						color:#ff7a59;
					}
				}
			}
			.denglu-list{
				width:100%;
				height:0.4rem;
				display:flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			}
			.denglu-bottom{
				color:#d0d0d0;
				margin-top:1rem;
				bottom:0.1rem;
				left:0;
			}
		}
	}
</style>


