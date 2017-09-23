<template>
	<!--<transition name="fade">-->
		<div class="denglu" v-show="showFlag">
			<div class="denglu-header" @click.stop="fanhui"><img src="./256x256.png"/>企融直通车</div>
				<div class="denglu-text">
					<mt-field class="last" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
					<mt-field class="ferst" label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
				</div>
				<!--<input  style="border-bottom: 1px solid #eee;" type="tel" id="ph"  maxlength="11" placeholder="请输入手机号"/>
		    	<input  type="password" id="pw"  placeholder="请输入密码"/>	-->
			<div class="denglu-food" @click.stop="denglus()">
				<span>登&nbsp;&nbsp;录</span>
			</div>
			<div class="denglu-to">
				<ul>
					<li class="denglu-wangji">忘记密码</li>&nbsp;&nbsp;|&nbsp;&nbsp;
					<li class="denglu-zhuce" @click.stop="zhuche">立即注册</li>
				</ul>
			</div>
			<div class="denglu-list denglu-bottom">
				合作热线：400 235648
			</div>
			
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
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
				phone:'',
				password:'',
				times:20177111129,
				showFlag:true,
				onlyContent:false,
				tishi:""
			}
		},
		methods:{
			fanhui(){
				history.go(-1)
			},
			denglus(){
				var tate=this;
				var phone=/^1[34578]\d{9}$/;
				var ph=0;
				var pw=0;
				var userID = this.phone;
				var password = this.password;
				var url = "http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password;
				var datas = {
					phone: this.page,  //手机号
					pwd: this.limit,   //密码
					version: this.type,//版本号
					terminalNo: '3'
				}
				if(!phone.test(this.phone)) {
					this.tishi="输入手机号有误";
//					this.onlyContent=true;
//					setTimeout(function(){
//						tate.onlyContent=false;
//					},2000)
					Toast('输入手机号有误');
					return;
				}else{
					ph=1;
				}
				if(!this.password) {
					this.tishi="请输入密码";
//					this.onlyContent=true;
//					setTimeout(function(){
//						tate.onlyContent=false;
//					},2000)
					Toast('请输入密码');
					return;
				}else{
					pw=1;
				}
				if(ph==1 && pw==1){
				  	this.$http.get(url).then(function(response){
						console.log("login",response)
						if(response.body != "0" && response.body != "2"){
							localStorage.setItem("userID",userID);
							if(confirm("已成功登陆是否进入首页?")){
								window.location.href="#/fanxian";
							}
						}else{
							Toast("此账号未注册请您立即注册")
						}
					})
				}
			},
			zhuche(){
				window.location.href="#/zhuce";
			}
		},
		mounted(){
			
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
//			cartcontrol,
//			ratingselect,
//			split
		}
	}
</script>

<style lang="scss" scoped>
	/*.fade-enter-active {
	  	transition: all .5s ease;
	}
	.fade-leave-active {
	  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  	transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	/*}*/
	.denglu{
		position:fixed;
		background:#ffffff;
		width:100%;
		height:100%;
		z-index:200;
		.denglu-header{
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			display: flex;
		    -webkit-box-pack: center;
		    justify-content: center;
		    -webkit-box-align: center;
		    align-items: center;
		    z-index:210;
			img{
				width:0.26rem;
				margin-right:0.10rem;
			}
		}
		.denglu-text{
			width:100%;
			height:1rem;
			position:relative;
			.ferst{
				position:absolute;
				top:0;
				left:0;
			}
			.last{
				position:absolute;
				bottom:0;
				left:0;
			}
		}
		.denglu-food{
			width:80%;
			height:0.4rem;
			margin:0 auto;
			margin-top:0.2rem;
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
		.denglu-to{
			width:100%;
			ul{
				padding:0.2rem;
				display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
				.denglu-wangji{
					
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
			position:absolute;
			bottom:0.1rem;
			left:0;
		}
	}
</style>


