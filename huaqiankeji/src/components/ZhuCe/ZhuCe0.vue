<template>
	<!--<transition name="fade">-->
		<div class="denglu" v-show="showFlag">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>注册</span>
			</div>
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
						<input ref="mima" v-model="texts" placeholder="请输验证码" type="text" class="last mint-field-core"/>
						<font ref="yanzhengMa" @click.stop="huoquMima()">获取验证码</font>
					</li>
					<li>
						<span></span>
						<input ref="mimas" v-model="password" placeholder="请输入密码" type="password" class="last mint-field-core"/>
						<font v-show="mimas" @click.stop="mima()"></font>
					</li>
				</ul>
				
				
			</div>
			<div class="denglu-food" @click.stop="denglus()">
				<span>注&nbsp;&nbsp;册</span>
			</div>
			<div class="denglu-to">
				<ul>
					<!--<li class="denglu-wangji">忘记密码</li>&nbsp;&nbsp;|&nbsp;&nbsp;-->
					<li class="denglu-zhuce" @click.stop="dengluGo()"><span>登录已有账号</span></li>
				</ul>
			</div>
			<div class="denglu-list denglu-bottom">
				合作热线：400 235648
			</div>
			<router-view :datas="datas"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Indicator } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
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
				datas:"",
				phone:'',
				texts:"",
				password:'',
				times:20177111129,
				showFlag:true,
				onlyContent:false,
				tishi:"",
				type:"2.5",
				shoujis:false,
				mimas:false,
				ok:false,
				token:'DxZGPSUsZsp48LUdWYWpca2HXxwfUDZY1zfFHzyhidbfov0BKWrnwiuKVhpqkFa5'
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
			},
			denglus(){
				var tate=this;
				var phone=/^1[34578]\d{9}$/;
//				var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password;
				this.datas = {
					phone: this.phone,  //手机号
					texts:this.texts,	//验证码
					pwd: this.password, //密码
//					version: this.type,//版本号
				}
				console.log(this.datas)
				if(!phone.test(this.phone)) {
					Toast('输入手机号有误');
					return;
				}
				if(!this.texts) {
					Toast('请输入验证码');
					return;
				}
				if(!this.password) {
					Toast('请输入密码');
					return;
				}
				window.location.href="#/zhuce/ZhuCe1/"+this.token;
//				window.location.href="#/zhuce/ZhuCe1/"+this.token+','+this.phone+','+this.texts+','+this.password;
//				Indicator.open({spinnerType: 'fading-circle'});
//				this.$http.post(URL.path+'api/index.php/login/login',{datas},{emulateJSON:true}).then(function(res){
//                  console.log(res);
//              },function(res){
//                  console.log(res);
//              });
//			
//			
//			  	this.$http.get(url).then(function(response){
//					console.log("login",response)
//					if(response.body != "0" && response.body != "2"){
//						Indicator.close();
//						localStorage.setItem("userID",userID);
//						if(confirm("已成功登陆是否进入首页?")){
//							window.location.href="#/fanxian";
//						}
//					}else{
//						Indicator.close();
//						Toast("您已注册成功请进一步完善信息")
//					}
//				})
			},
			dengluGo(){
				window.location.href="#/denglu";
			},
			quxiao(){
				this.phone="";
				this.shoujis=false;
			},
			huoquMima(){
				if(this.ok==true){
					return;
				}
				var data={
					phone:this.phone
				}							//获取验证码接口
				this.$http.post(URL.path+'regist/smsCode',data,{emulateJSON:true}).then(function(res){
                    console.log(res.body);
                    if(res.body.returnCode=='0011'){
						Toast(res.body.msg);
					}else{
						if(res.body.returnCode=='200'){
							this.timesgo();
						}else{
							Toast("系统正忙请稍后！");
						}
					}
                },function(res){
                    console.log(res);
                });
			},
			timesgo(ok){
				Toast("已发送至您的手机请注意查收");
				this.ok=true;
				var thate=this;
				var _time=0;                           //60秒限时
				var x=60;
				function dong(){
//					p.innerHTML=x+"秒";
					x--;
					if(x<=0){
						clearInterval(_time);
						thate.$refs.yanzhengMa.innerText="重新获取验证码";
						thate.ok=false;
					}else{
						thate.$refs.yanzhengMa.innerText=x+"秒";
					}
				}
				_time = setInterval(dong, 1000);
			},
			mima(){
				if(this.$refs.mimas.getAttribute('type')=="password"){
					this.$refs.mimas.setAttribute('type','text');
				}else{
					this.$refs.mimas.setAttribute('type','password');
				}
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
	.denglu{
		position:fixed;
		background:#fff;
		width:100%;
		height:100%;
		z-index:10;
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
			z-index:21;
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
		.logo{
			width:100%;
			height:2.16rem;
			display:flex;
			justify-content:center;
			align-content:center;
			align-items:center;
			margin-top:0.45rem;
			ul>li{
				width:1.25rem;
				height:1.5rem;
				background-image:url("../DengLu/img/app.png");
				background-size:100% 100%;
			}
		}
		.denglu-text{
			width:90.8%;
			margin:0 auto;
			position:relative;
			border:0.008px solid #d0d0d0;
			ul{
				width:100%;
				li{
					width:100%;
					padding:0.07rem 0;
					display:flex;
					position:relative;
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
						background-image:url("../DengLu/img/gerens.png");
						background-size:100% 100%;
						
					}
					font{
						display:inline-block;
						width:0.17rem;
						height:0.17rem;
						margin:0.04rem 0.16rem 0 0;
						background-image:url("../DengLu/img/quxiao.png");
						background-size:100% 100%;
						
					}
					&:last-child{
						span{
							background-image:url("../DengLu/img/mimas.png");
						}
						font{
							display:inline-block;
							width:0.19rem;
							height:0.13rem;
							margin:0.06rem 0.15rem 0 0;
							background-image:url("../DengLu/img/xianshimima.png");
							background-size:100% 100%;
							
						}
					}
					&:nth-child(2n){
						border-bottom:0.008px solid #d0d0d0;
						span{
							background-image:url("../DengLu/img/yanzheng.png");
						}
						font{
							display:inline-block;
							padding:0.08rem 0.17rem;
							border-radius:0.04rem;
							background:#ff7a59;
							width:auto;
							height:auto;
							margin:0;
							position:absolute;
							top:0.05rem;
							right:0.04rem;
							color:#fff;
						}
					}
				}
			}
			.ferst{
				
			}
			.last{
				
			}
		}
		.denglu-food{
			width:90.80%;
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
		.denglu-to{
			width:100%;
			color:#d0d0d0;
			ul{
				padding:0.2rem;
				display: flex;
			    -webkit-box-pack: center;
			    justify-content:flex-end;
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
</style>


