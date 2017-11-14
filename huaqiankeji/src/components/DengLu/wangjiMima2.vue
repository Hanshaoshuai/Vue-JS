<template>
	<transition name="fade">
		<div class="denglu" v-show="showFlag">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>重置密码</span>
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
							<input ref="shouji" v-model="xinmima1" placeholder="请输入新密码" type="password" class="ferst mint-field-core"/>
							<transition name="fade"><font v-show="shoujis" @click.stop="quxiao()"></font></transition>
						</li>
						<li>
							<span></span>
							<input ref="mimas" v-model="xinmima2" placeholder="请再次输入新密码" type="password" class="last mint-field-core"/>
							<transition name="fade"><font v-show="mimas" @click.stop="mima()"></font></transition>
						</li>
					</ul>
					
					
				</div>
				<div class="denglu-food" @click.stop="denglus()">
					<span>立即重置</span>
				</div>
			</div>
			<!--<router-view></router-view>-->
		</div>
	</transition>
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
			phone:{
//				type:Object
			},
			texts:{}
		},
		data () {
			return {
				xinmima1:'',
				xinmima2:'',
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
				var xinmima1 = /^[a-zA-Z0-9]{6,12}$/;
				var ph=0;
				var pw=0;
				var yz=0;
				var data={
					phone:this.phone,
					smscode:this.texts,
					pwd:this.xinmima1,
					repwd:this.xinmima2
				}
				if(!xinmima1.test(this.xinmima1)) {
					Toast('密码格式错误');
					return;
				}else{
					ph=1;
				}
				if(!xinmima1.test(this.xinmima2)) {
					Toast('密码格式错误');
					return;
				}
				if(!this.xinmima1) {
					Toast('请输入新密码');
					return;
				}
				if(!this.xinmima2) {
					Toast('请再次输入新密码');
					return;
				}else{
					pw=1;
				}
				if(this.xinmima1!==this.xinmima2){
					Toast('两次密码不一致');
					return;
				}
				this.$http.post(URL.path+'regist/forget',data,{emulateJSON:true}).then(function(res){
                    console.log(res);
                    if(res.body.returnCode=='0011'){
						Toast(res.body.msg);
					}else{
						if(res.body.returnCode=='200'){
							Toast("设置成功请登录")
							window.location.href="#/denglu";
						}else{
							Toast("系统正忙请稍后！");
						}
					}
                },function(res){
                    console.log(res);
                });
			},
			dengluGo(){
				
			},
			quxiao(){
				this.xinmima1="";
				this.shoujis=false;
			},
			huoquMima(){
				
			},
			mima(){
				this.xinmima2="";
				this.mimas=false;
//				if(this.$refs.mimas.getAttribute('type')=="password"){
//					this.$refs.mimas.setAttribute('type','text');
//				}else{
//					this.$refs.mimas.setAttribute('type','password');
//				}
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
		z-index:100;
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
		.contents{
			position:fixed;
			width:100%;
			top:39.1%;
			left:0;
			z-index:30;
			.logo{
				width:100%;
				height:1.5rem;
				display:flex;
				justify-content:center;
				align-content:center;
				align-items:center;
				/*margin-top:0.45rem;*/
				margin-top:-1.8rem;
				z-index:33;
				ul>li{
					width:1.492rem;
					height:1.321rem;
					background-image:url("./img/denglu2.png");
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
						&:first-child{
							border-bottom:0.008px solid #d0d0d0;
						}
						span{
							display:inline-block;
							width:0.14rem;
							height:0.16rem;
							margin:0.05rem 0.16rem 0 0.13rem;
							background-image:url("../DengLu/img/mimas.png");
							background-size:100% 100%;
							
						}
						font{
							display:inline-block;
							width:0.18rem;
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
								/*width:0.19rem;
								height:0.13rem;*/
								width:0.17rem;
								height:0.17rem;
								margin:0.04rem 0.16rem 0 0;
								/*margin:0.06rem 0.15rem 0 0;*/
								background-image:url("../DengLu/img/quxiao.png");
								/*background-image:url("../DengLu/img/xianshimima.png");*/
								background-size:100% 100%;
								
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
		}
	}
</style>


