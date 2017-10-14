<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>研究咨询</span>
			</div>
			<div class="type-content-list">
				<div class="type-content ferst">
					<div class="type-cont border-bottom">
						<div class="tuse">
							<font></font><span>你关注于那个行业<a></a></span>
						</div>
						<div class="content-touzi" ref="foods">
							<ul>
								<li v-for="(item,index) in BiaoQian[0]" class="src0" :id='item.id' @click.stap="types(index,item.id)">
									<span>{{item.title}}</span><font class="img1"></font>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div class="type-food" @click.stop="ToHoom()">
					<div class="type-food-text">
						<span>确定</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
//	import BScroll from "better-scroll";
//	import {formatDate} from "../../common/js/date.js";
//	import cartcontrol from "../cartcontrol/cartcontrol.vue";
//	import ratingselect from "../ratingselect/ratingselect.vue";
//	import split from "../split/split.vue";
	
	
	export default {
		props:{
			XiajiCanshu:{
//				type:Object
			}
		},
		data () {
			return {
				y:1,			//判断是否选择标签；》=1为选择；
				BiaoQian:"",
				biaoQianID:[],		//储存标签id
				biaoQianID1:"",		//储存标签id
				block:false,
				showFlag:true,
				urlName:"Dingzeng",
//				onlyContent:true,
//				times:20177111129
			}
		},
		mounted(){
	//		XiajiCanshu{
	//			id:用户id,
	//	        phone:用户电话,
	//	        nickname:res.body.data.nickname,
	//	        token:用户token；
	//		}
			var datas = {
				token:this.XiajiCanshu.token//	token	是	[string]	URL获取的参数
			}
			this.$http.post(URL.path1+'login/three',datas,{emulateJSON:true}).then(function(res){
				var data=res.body.data
				this.BiaoQian=res.body.data
				this.$nextTick(function() {
					var typeLi=this.$refs.foods.getElementsByTagName("li");
					typeLi[0].setAttribute("class","src1");
					this.biaoQianID.push(typeLi[0].id);
				});
				console.log(this.BiaoQian);
			},function(res){
			    console.log(res.status);
			})
		},
		methods:{
			yijianHind(){
//				this.showFlag=false;
				history.go(-1)
			},
			Tozhaiquan(){
				this.showFlag=true;
			},
			xuanze(index){
				
			},
			ToHoom(){			//企业和研究机构注册第二步
				var datas={
					id:this.XiajiCanshu.id,//	用户id	是	[string]			
					ctype:this.XiajiCanshu.type,//	类型 1企业 4研究机构	是	[string]		
					industry:this.biaoQianID1,	//	所属行业标签，多个用 逗号分割	是	[string]
				}
				console.log(datas)
				if(this.y>=1){
					window.location.href="#/faxian";
				}else{
					Toast("请填写完整您的信息！是否已选标签...");
					return;
				}
				this.$http.post(URL.path+'regist/com_regist2',datas,{emulateJSON:true}).then(function(res){
					if(res.body.returnCode=='200'){
						Toast('资料完善成功');
						console.log(res.body)
						window.location.href="#/faxian";
					}else{
						window.location.href="#/denglu"
						Toast(res.body.msg);
					}
				},function(res){
				    console.log(res.status);
				})
			},
			types(index,id){
				var typeLi=this.$refs.foods.getElementsByTagName("li");
				var length=typeLi.length;
				this.urlName=id;
//				for(var i=0; i<length; i++){
//					typeLi[i].setAttribute("class","src0");
//				}
//				typeLi[id].setAttribute("class","src1")
				
				if(typeLi[index].getAttribute("class")=="src1"){			//判断是否选择标签；》=1为选择；
					typeLi[index].setAttribute("class","src0")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID[z]==typeLi[index].id){
							this.biaoQianID.splice(z,1);
//							console.log(this.biaoQianID)
							this.biaoQianID1=this.biaoQianID.join()
							console.log(this.biaoQianID1)
							this.y-=1
							break;
						}
					}
				}else{
					typeLi[index].setAttribute("class","src1");
					this.y+=1;
					for(var i=0; i<this.y; i++){
						if(this.biaoQianID[i]!=typeLi[index].id){
							this.biaoQianID.push(typeLi[index].id)
							break;
						}
					}
//					console.log(this.biaoQianID)
					this.biaoQianID1=this.biaoQianID.join()
					console.log(this.biaoQianID1)
				}
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
	.type{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:300;
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
		.type-content-list::-webkit-scrollbar{width:0px;}
		.type-content-list{
			width:100%;
			height:100%;
			overflow-y:auto;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.ferst{
				padding-top:0.55rem;
				background:#fff;
			}
			.type-content{
				width:100%;
				height:auto;
				color:#3f3f3f;
				.type-cont{
					flex:1;
					padding:0.16rem 2.5%;
					background:#fff;
					font-size:0.14rem;
					.tuse{
						font{
							display:inline-block;
							position:relative;
							width:0.04rem;
							height:0.16rem;
							background:#ff7a59;
							margin-right:0.06rem;
							vertical-align:top;
							z-index:200;
						}
						span{
							display:inline-block;
							font-size:0.16rem;
							/*padding:0.26rem 0 0.06rem 0.1rem;*/
						}
						a{
							font-size:0.14rem;
							color:#ff7a59;
						}
					}
					.content-touzi{
						flex:1;
						font-size:0.14rem;
						background:#fff;
						margin-top:0.08rem;
						ul{
							width:100%;
							overflow:hidden;
							/*display:flex;*/
							/*justify-content:flex-start;*/
							li{
								float:left;
								&:nth-child(3n){
									margin-right:0;
								}
								margin-right:0.02rem;
								width:1.04rem;
								height:0.36rem;
								border-radius:0.04rem;
								color:#525252;
								background:#fff;
								box-sizing: border-box;
								position:relative;
								display:flex;
								justify-content:center;
								align-items:center;
								span{
									display:inline-block;
									font-size:0.16rem;
								}
								.img1{
									background-image:url("./img/duihao.png");
								}
							}
							.src0{
								border:0.01rem solid #ddddde;
							}
							.src1{
								border:0.01rem solid #ff7a59;
								font{
									display:inline-block;
									position:absolute;
									bottom:-0.008rem;
									right:-0.008rem;
									background-size:100% 100%;
									width:0.2rem;
									height:0.2rem;
								}
							}
						}
					}
					ul{
						font{
							color:#959595;
						}
						.shouru{
							padding:0 0.1rem;
							span{
								display:inline-block;
								width:1.13rem;
							}
						}
						.mint-field-core::-webkit-input-placeholder{
							color: #d2d2d2;
						}
						.mint-field-core{
							border:0.008rem solid #d2d2d2;
							width:0.6rem;
							margin:0;
							padding:0.04rem 0.14rem;
							margin:0.06rem 0.1rem;
						}
						li{
							display:inline-block;
							margin:0;
							padding:0.08rem 0.18rem;
							margin:0.06rem 0.1rem;
						}
					}
			   	}
			}
			.type-food{
				width:100%;
				height:0.93rem;
				padding-top:0.15rem;
				background:#fff;
				.type-food-text{
					width:100%;
					text-align:center;
				    span{
						padding:0.15rem 0.73rem;
						color:#ffffff;
						font-size:0.2rem;
						text-align:center;
						border-radius:8px;
						display:inline-block;
						background:#ff7a59;
					}
				}
			}
		}
	}
</style>


