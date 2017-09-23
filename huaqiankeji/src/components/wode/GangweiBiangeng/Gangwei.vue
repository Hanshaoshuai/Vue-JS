<template>
	<transition name="fade">
		<div class="zhuce">
			<div class="zhuce-header">
				<span class="header-left" @click.stap="fanhui"><</span>
				工作岗位变更
			</div>
			<div class="zhuce-list phones">
				<mt-field class="border-top" label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
				<!--<input type="text" placeholder="请输入手机号"/>-->
			</div>
			<div class="zhuce-list">
				<mt-field class="border-topbottom" label="验证码" placeholder="请输入验证码" v-model="captcha">
					<span class="huoqu">获取验证码</span>
				  	<!--<img src="../assets/100x100.png" height="45px" width="100px">-->
				</mt-field>
			</div>
			<div class="zhuce-content">
				<div class="cont-left">
					<span>新名片</span>
					<div class="left-img" id="preview">
						<label>
							<img ref="" id="imghead" src='./u740.png'>
							<input class="inputs" ref="file" type="file" @change="previewImage()" />
						</label>
					</div>
				</div>
			</div>
			<div class="zhuce-leixing">
				<ul>
					<div class="leixing-header">
						<span>您的身份</span>
					</div>
					<li class="border" @click.stop="xuanze(id,onlyContent)">投资机构</li>
					<li class="border">财务顾问</li>
					<li class="border">企业</li>
					<li class="border">研究咨询</li>
					<li class="border">做市场</li>
					<li class="border">合格投资人</li>
					<li class="border">后续添加</li>
					<!--<router-link to="/zhuce/type1/5">我的</router-link>-->
				</ul>
			</div>
			<div class="zhuce-food" @click.stop="zhuceCont">
				<span>申请更变</span>
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
				Type:[
					"show0",
					"show1",
					"show2",
					"show3",
					"show4",
					"show5"
				],
				id:3,
				showFlag:false,
				onlyContent:true,
			}
		},
		methods:{
			fanhui(){
				window.location.href="#/wode";
			},
			previewImage(){
				var file=this.$refs.file
				console.log(file.files)
	          	var div = document.getElementById('preview');
	          	if(file.files && file.files[0]){
	              	var img = document.getElementById('imghead');
	              	img.onload = function(){
	              		this.style.height="1rem";
//	              		console.log(this.clientWidth)
	              		var width=this.clientWidth+"px"
//	              		console.log(width)
	              		div.style.width=width;
		            }
	              	var reader = new FileReader();
	              	reader.onload = function(evt){img.src = evt.target.result;}
	              	reader.readAsDataURL(file.files[0]);
	          	}else{
	            	var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	            	file.select();
	            	var src = document.selection.createRange().text;
	            	var img = document.getElementById('imghead');
	            	img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	          	}
	        },
			zhuceCont(){
				Toast({
				  message: '您已注册成功',
				  iconClass: 'icon icon-success'
				});
				setTimeout(() => {
				  	window.location.href="#/faxian";
				}, 3500);
			},
			xuanze(id,classId){
				console.log(id)
//				var type=document.getElementById(id);
//				type.TypeShow()
//				console.log(type)
//				this.$refs.show+this.classId.TypeShow();
				window.location.href="#/zhuce/type"+id+"/"+classId;
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
		position:absolute;
		background:#ffffff;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:200;
		.zhuce-header{
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			.header-left{
				padding-left:0.3rem;
				display:inline-block;
				float:left;
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
		.zhuce-food{
			width:80%;
			height:0.4rem;
			margin:auto;
			position:absolute;
			left:0;
			right:0;
			bottom:0.2rem;
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
		.zhuce-content{
			width:100%;
			height:1.3rem;
			display: flex;
			.cont-left{
				flex:1;
				padding:0 0.3rem;
				span{
					line-height:0.4rem;
				}
				.left-img{
					margin:0 auto;
					width:1.6rem;
					height:1rem;
					overflow:hidden;
					border:0.005rem solid #EAEAEA;
					label{
						width:100%;
						height:100%;
						background:#fff;
						position:relative;
						overflow:hidden;
						display:flex;
						-webkit-box-pack: center;
					    justify-content: center;
					    -webkit-box-align: center;
					    align-items: center;
						#imghead{
							height:100%;
							filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);
						}
						.inputs{
							position:absolute;
							width:100%;
							height:100%;
							opacity:0;
							left:0rem;
							top:0rem;
							/*z-index:-1;*/
							
						}
					}
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
					padding-top:0.1rem;
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
	}
</style>


