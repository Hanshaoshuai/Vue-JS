<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="yijian">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>意见反馈</span>
			</div>
			<div class="center-content">
				<div class="yijian-list border-topbottom">
					<div class="yijian-text">
						<span>您的意见是我们前进的动力，非常感谢您的支持！</span>
					</div>
				</div>
				<div class="yijian-content">
					<div class="content-text border-topbottom">
						<textarea placeholder="请详细描述您的问题，建议添加相关截图..." rows="4" class="mint-field-core border" v-model="introduction"></textarea>
					</div>
					<!--<div class="last number">
						<input v-model="tel" placeholder="请留下准确的联系电话，便于我们及时联系" type="number" class="mint-field-core">
					</div>-->
					<!--<div class="my-line bb mt20 mb20"><input type="tel" class="my-input feedback-tel" id="tel" placeholder="请留下准确的联系电话，便于我们及时联系"/></div>-->
				</div>
				<div class="yijian-img clearbox">
					<!--<div class="content-img border">
						<font>（最多添加2张）</font>
						<div class="img-name">
							<span>添加图片</span>
						</div>
					</div>-->
					<fankuiimg @to-parent="child" ref="child"></fankuiimg>
				</div>
			</div>
			<div class="yijian-food">
				<span @click.stop="tijiao()">提&nbsp;&nbsp;交</span>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import fankuiimg from "../FankuiTupian.vue";
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
				introduction:"",
				tel:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				formData:'',
				formData1:''
			}
		},
		mounted(){
			this.formData = new FormData();			//把要传的内容和参数放到   formdata中
//			console.log(this.$route.params.token)
			
		},
		methods:{
			yijianHind(){
				Indicator.close();
				history.go(-1);
//				this.tucaoShow=false;
			},
			child(tuPian){
				this.formData1="";
				this.formData1=tuPian;
//				console.log(tuPian)
//				console.log(this.formData)
			},
			tijiao(){
				var length=this.formData1.length;
				for(var i=1; i<=length; i++){
					if(this.formData1[i]!=""){
						this.formData.append('upload_file'+i,this.formData1[i-1]);
//						console.log('upload_file'+i)
					}
				}
//				this.formData.append('terminalNo', 3);
				var phone=/^1[34578]\d{9}$/;
//				if(!phone.test(this.tel)) {
//					Toast('输入手机号格式有误');
//					return;
//				}
//				if(this.tel==""){
//					Toast("请输入联系电话！")
//					return;
//				}
				if(this.introduction==""){
					Toast("请填写您要给出的建议内容！")
					return;
				}else{
					Indicator.open({spinnerType: 'fading-circle'});
					this.$http.post(URL.path1+'upload/photos',this.formData,{emulateJSON:true}).then(function(res){
//	                    console.log(res);
	                    Indicator.close();
						if(res.body.returnCode=='200'){
//							Toast("上传成功");
							var imgId=res.body.data
		                    var length=imgId.length;
		                    var obj=[];
		                    var x=0;
		                    for(var item in imgId){
		                    	obj[x]=imgId[item].id;
		                    	x+=1;
		                    }
							obj=obj.join(',');
//							console.log(obj)
							var data={
								token:this.$route.params.token,
								content: this.introduction,
		//						tel: this.tel,
								img:obj,
								terminalNo: '3'
							}
		//					反馈数接口
							this.$http.post(URL.path1+'other/feedback',data,{emulateJSON:true}).then(function(res){
//								console.log(res);
								Indicator.close();
								if(res.body.returnCode=='200'){
									Toast("提交成功，感谢您的支持")
									window.location.href="#/faxian"
								}
							},function(res){
								Indicator.close();
								Toast("系统繁忙请稍后再试！")
//							    console.log(res);
							})
						}else{
							Toast("上传失败请重新上传");
						}
	                },function(res){
	                	Indicator.close();
	                	Toast("系统正忙请稍后！");
	                    console.log(res);
	                });
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
			fankuiimg
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
	.yijian{
		position:fixed;
		width:100%;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:1000;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:1130;
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
		.center-content{
			width:95%;
			margin:0 auto;
		}
		.yijian-list{
			width:100%;
			height:0.6rem;
			background:#CACACA;
			margin-top:0.55rem;
			display:flex;
			align-content:center;
			justify-content:center;
			align-items:center;
			.yijian-text{
				flex:1;
				padding:0 0.1rem;
				font-size:0.16rem;
			}
		}
		.yijian-content{
			width:100%;
			height:2.4rem;
			padding-bottom:0.2rem;
			position:relative;
			display:flex;
			background:#fff;
			flex-direction:column;
			.content-text{
				flex:1;
				padding:0.1rem;
				.mint-field-core{
					width:100%;
					height:80%;
					resize: none;
					font-size:0.16rem;
				}
				.texts{
					width:100px;
					height:2rem;
				}
			}
			.last{
				flex:1;
				display:flex;
				padding:0.2rem 0.1rem;
				border-top:1px solid #ebebeb;
				/*background:#f5f4f9;*/
				.mint-field-core{
					flex:1;
					padding:0 0.1rem;
					resize: none;
					font-size:0.14rem;
					background:#f5f4f9;
					height:0.33rem;
					line-height:0.33rem;
					&::-webkit-scrollbar{width:0;height:0}
					&::-webkit-input-placeholder{
						color:#afafaf;
					}
				}
			}
		}
		.yijian-img{
			padding:0 0.1rem;
			background:#fff;
			zoom:1;
			.content-img{
				float:left;
				width:0.8rem;
				height:0.8rem;
				display: flex;
				margin-left:0.1rem;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    z-index:1200;
			    font{
		    		display:inline-block;
			    	position:absolute;
			    	font-size:0.1rem;
			    	top:0.08rem;
			    	left:0;
			    	right:0;
			    	margin:auto;
			    }
			    .img-name{
			    	width:0.3rem;
			    	height:0.3rem;
			    	font-size:0.15rem;
			    }
			}
			&.clearbox:after{
				clear:both;
				display:block;
				overflow:hidden;
				height:0;
				content:".";
			}
		}
		.yijian-food{
			width:80%;
			height:0.4rem;
			margin:auto;
			margin-top:0.6rem;
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
</style>


