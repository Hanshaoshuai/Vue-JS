<template>
	<transition name="fade">
		<div class="zhuce">
			<div class="contents">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="zhuce-header" @click.stap="fanhui">
					<span class="xiangmu-left"><</span>
					注 &nbsp;&nbsp;册
				</div>
				<div class="zhuce-list phones">
					<mt-field class="border-top" label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
					<!--<input type="text" placeholder="请输入手机号"/>-->
				</div>
				<div class="zhuce-list">
					<mt-field class="border-top" label="验证码" placeholder="请输入验证码" v-model="captcha">
						<span class="huoqu" @click.stap="yanZheng">获取验证码</span>
					  	<!--<img src="../assets/100x100.png" height="45px" width="100px">-->
					</mt-field>
				</div>
				<div class="zhuce-list">
					<mt-field class="border-top" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
				</div>
				<div class="zhuce-list">
					<mt-field class="border-topbottom" label="密码" placeholder="请再次输入密码" type="password" v-model="passwords"></mt-field>
				</div>
				<div class="zhuce-content">
					<div class="cont-left">
						<span>名片</span>
						<mingpian></mingpian>
						<!--<div class="left-img border"><img src=""/></div>-->
					</div>
					<div class="cont-right">
						<span>头像</span>
						<touxiang></touxiang>
						<!--<div class="right-img border"><img src=""/></div>-->
					</div>
				</div>
				<div class="zhuce-leixing">
					<ul>
						<div class="leixing-header">
							<span>您的身份</span>
						</div>
						<li class="border" @click.stop="xuanze(Type.show0,onlyContent)">投资机构</li>
						<li class="border" @click.stop="xuanze(Type.show1,onlyContent)">财务顾问</li>
						<li class="border" @click.stop="xuanze(Type.show2,onlyContent)">企业</li>
						<li class="border" @click.stop="xuanze(Type.show3,onlyContent)">研究咨询</li>
						<li class="border" @click.stop="xuanze(Type.show4,onlyContent)">做市场</li>
						<li class="border">合格投资人</li>
						<li class="border">后续添加</li>
					</ul>
				</div>
				<div class="zhuce-food" @click.stop="zhuceCont">
					<span>注&nbsp;&nbsp;册</span>
				</div>
			</div>
			<!--<type0 ref="show" id="0"></type0>-->
			<!--<type1 ref="show" id="1"></type1>
			<type2 ref="show" id="2"></type2>
			<type3 ref="show" id="3"></type3>
			<type4 ref="show" id="4"></type4>
			<type5 ref="show" id="5"></type5>-->
			<router-view></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import mingpian from "../ShangchuanMingpian.vue";
	import touxiang from "../ShangchuanTouxiang.vue";
//	import type0 from "./type0.vue";
//	import type1 from "./type1.vue";
//	import type2 from "./type2.vue";
//	import type3 from "./type3.vue";
//	import type4 from "./type4.vue";
//	import type5 from "./type5.vue";

	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				phone:"",
				captcha:"",
				password:"",
				passwords:"",
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
			}
		},
		methods:{
			fanhui(){
				window.location.href="#/denglu";
//				history.go(-1)
//				window.location.href="#/faxian";
			},
			zhuceCont(){
				var tate=this;
				var phone=/^1[34578]\d{9}$/;
				var user = this.phone;
				var ph = this.phone;
				var pw = this.password;
				var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+ph+"&password="+pw;
				if(user=="" || this.captcha=="" || this.password=="" || this.passwords==""){
					Toast('请完善信息');
//					Toast('输入手机号有误');
				}else{
					if(!phone.test(this.phone)) {
						this.tishi="输入手机号有误";
						Toast('输入手机号有误');
						return;
					}else{
						if(this.password!=this.passwords){
							Toast('请输入相同密码');
						}else{
//							Toast('成功');
							this.$http.get(url).then(function(response){
								console.log("login",response)
								if(response==1){
									alert("注册成功请重新登录");
									Toast({
									  message: '注册成功请重新登录',
//									  position: 'bottom',
									  duration: 2000
									});
									setTimeout(function(){
										window.location.href="#/denglu";
									},2000)
								}else{
									Toast({
									  message: '此账号已注册请您重新注册',
//									  position: 'bottom',
									  duration: 2000
									});
								}
							})
						}
					}
				}
				
//				Toast({
//				  message: '您已注册成功',
//				  iconClass: 'icon icon-success'
//				});
//				setTimeout(() => {
//				  	window.location.href="#/faxian";
//				}, 3500);
			},
			yanZheng(){
				
			},
			xuanze(id,classId){
				console.log(id)
//				var type=document.getElementById(id);
//				type.TypeShow()
//				console.log(type)
//				this.$refs.show+this.classId.TypeShow();
				window.location.href="#/zhuce/type"+id+"/"+classId;
			}
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
//			type0
//			type1,
//			type2,
//			type3,
//			type4,
//			type5
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
	.zhuce{
		position:fixed;
		background:#ffffff;
		width:100%;
		height:100%;
		z-index:1000;
		.contents{
			width:100%;
			height:100%;
			overflow-y:auto;
			.zhuce-header{
				position:fixed;
				left:0;
				top:0;
				z-index:1100;
				width:100%;
				height:0.45rem;
				font-weight:400;
				background:#01FFFF;
				font-size:0.2rem;
				text-align:center;
				line-height:0.4rem;
				.xiangmu-left{
				    position: absolute;
				    padding-left: 0.3rem;
				    display: inline-block;
				    top: 0;
				    left: 0;
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
			.zhuce-content{
				width:100%;
				height:auto;
				display: flex;
				.cont-left{
					flex:1;
					padding:0 0.3rem;
					span{
						line-height:0.3rem;
					}
					.left-img{
						width:1rem;
						height:1rem;
					}
				}
				.cont-right{
					flex:1;
					padding:0 0.3rem;
					span{
						line-height:0.3rem;
					}
					.right-img{
						width:1rem;
						height:1rem;
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
				width:80%;
				height:0.4rem;
				margin:auto;
				/*position:absolute;*/
				left:0;
				right:0;
				margin-bottom:0.2rem;
				span{
					width:100%;
					height:100%;
					color:#ffffff;
					font-size:0.2rem;
					text-align:center;
					line-height:0.4rem;
					border-radius:8px;
					display:inline-block;
					background:#007AFF;
				}
			}
		}
	}
</style>


