<template>
	<transition name="fade">
		<div class="denglu" v-show="showFlag">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>设置密码</span>
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
							<input ref="shouji" v-model="xinmima1" placeholder="请输入原密码" type="password" class="ferst mint-field-core"/>
							<transition name="fade"><font v-show="shoujis" @click.stop="quxiao()"></font></transition>
						</li>
						<li class="center">
							<span></span>
							<input ref="mimas" v-model="xinmima2" placeholder="请输入新密码" type="password" class="last mint-field-core"/>
							<transition name="fade"><font v-show="mimas" @click.stop="mima()"></font></transition>
						</li>
						<li>
							<span></span>
							<input ref="mimas" v-model="xinmima3" placeholder="确认新密码" type="password" class="last mint-field-core"/>
							<transition name="fade"><font v-show="mimas1" @click.stop="mima1()"></font></transition>
						</li>
					</ul>
					
					
				</div>
				<div class="denglu-food" @click.stop="denglus()">
					<span>立即设置</span>
				</div>
			</div>
			<!--<router-view></router-view>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
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
			token:{
//				type:Object
			}
		},
		data () {
			return {
				xinmima1:'',
				xinmima2:'',
				xinmima3:'',
				times:20177111129,
				showFlag:true,
				onlyContent:false,
				tishi:"",
				type:"2.5",
				shoujis:false,
				mimas:false,
				mimas1:false,
				ok:false,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
			},
			denglus(){
				var tate=this;
				var phone=/^1[34578]\d{9}$/;
				var xinmima1 = /^[a-zA-Z0-9]{6,12}$/;
				var ph=0;
				var pw=0;
				var yz=0;
				var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+this.xinmima1+"&password="+this.xinmima2;
				var datas = {
//					terminalNo: '3',
					token:this.token,
					oldpassword:this.xinmima1,
					password:this.xinmima2,
					password_re:this.xinmima3,
				}
				console.log(datas)
				if(!xinmima1.test(this.xinmima1)) {
					Toast('密码格式错误');
					return;
				}
				if(!xinmima1.test(this.xinmima2)) {
					Toast('密码格式错误');
					return;
				}
				if(!this.xinmima1) {
					Toast('请输入原密码');
					return;
				}
				if(!this.xinmima2) {
					Toast('请输入新密码');
					return;
				}
				if(!this.xinmima3) {
					Toast('确认新密码');
					return;
				}
				if(this.xinmima2!==this.xinmima3){
					Toast('两次密码不一致');
					return;
				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'account/editPwd',datas,{emulateJSON:true}).then(function(res){
					Indicator.close();
					if(res.body.returnCode=='200'){
						Toast(res.body.msg);
						window.location.href="#/denglu"
					}
                    console.log(res);
                },function(res){
                	Indicator.close();
                	Toast("系统错误，请稍后再试！");
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
//							Indicator.close();
//							Toast("您已注册成功请进一步完善信息")
//							window.location.href="#/zhuce/ZhuCe1/"+this.token;
//						}
//					})
			},
			quxiao(){
				this.xinmima1="";
				this.shoujis=false;
			},
			huoquMima(){
				if(this.ok==true){
					return;
				}
				var data={
					phone:this.phone
				}
				this.$http.post(URL.path+'regist/smsCode',data,{emulateJSON:true}).then(function(res){
                    console.log(res.body);
                    if(res.body.returnCode=='0011'){
						Toast(res.body.msg);
					}else{
						if(res.body.returnCode=='200'){
							
						}else{
							Toast("系统正忙请稍后！");
						}
					}
                },function(res){
                    console.log(res);
                });
			},
			mima(){
				this.xinmima2="";
				this.mimas=false;
			},
			mima1(){
				this.xinmima3="";
				this.mimas1=false;
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
			if(this.xinmima1!=""){
				this.shoujis=true;
			}else{
				this.shoujis=false;
			}
			if(this.xinmima2!=""){
				this.mimas=true;
			}else{
				this.mimas=false;
			}
			if(this.xinmima3!=""){
				this.mimas1=true;
			}else{
				this.mimas1=false;
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
		left:0;
		top:0;
		z-index:310;
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
			z-index:320;
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
		.contents{
			position:fixed;
			width:100%;
			top:39.1%;
			left:0;
			z-index:220;
			.logo{
				width:100%;
				height:1.5rem;
				display:flex;
				justify-content:center;
				align-content:center;
				align-items:center;
				margin-top:-1.8rem;
				ul>li{
					width:1.25rem;
					height:1.5rem;
					background-image:url("../../DengLu/img/app.png");
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
						span{
							display:inline-block;
							width:0.14rem;
							height:0.16rem;
							margin:0.05rem 0.16rem 0 0.13rem;
							background-image:url("../../DengLu/img/mimas.png");
							background-size:100% 100%;
							
						}
						font{
							display:inline-block;
							width:0.18rem;
							height:0.17rem;
							margin:0.04rem 0.16rem 0 0;
							background-image:url("../../DengLu/img/quxiao.png");
							background-size:100% 100%;
							
						}
						&:last-child{
							span{
								background-image:url("../../DengLu/img/mimas.png");
							}
							font{
								display:inline-block;
								/*width:0.19rem;
								height:0.13rem;*/
								width:0.17rem;
								height:0.17rem;
								margin:0.04rem 0.16rem 0 0;
								/*margin:0.06rem 0.15rem 0 0;*/
								background-image:url("../../DengLu/img/quxiao.png");
								/*background-image:url("../DengLu/img/xianshimima.png");*/
								background-size:100% 100%;
								
							}
						}
					}
					.center{
						border-bottom:0.008px solid #d0d0d0;
						border-top:0.008px solid #d0d0d0;
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
		}
	}
</style>


