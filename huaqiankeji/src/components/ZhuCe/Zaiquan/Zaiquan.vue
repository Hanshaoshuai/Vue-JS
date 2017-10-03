<template>
	<transition name="fade">
		<div class="type" v-show="showFlag">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>债权投资</span>
			</div>
			<!--<div class="type-header" @click.stap="fanhui">
				<span class="xiangmu-left"><</span>
				债权投资
			</div>-->
			<div class="type-content-list">
				<div class="type-content ferst">
					<div class="type-cont border-bottom">
						<div class="tuse">
							<font></font><span>您倾向于生么样的投资方式？<a>（可多选）</a></span>
						</div>
						<div class="content-touzi"  ref="foods">
							<ul>
								<li class="src1" @click.stap="types('0')">
									<span>融资租赁</span><font class="img1"></font>
								</li>
								<li class="src0" @click.stap="types('1')">
									<span>股权质押</span><font class="img1"></font>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您对企业有什么要求</span>
						</div>
						<ul>
							<div class="shouru">
								<span>营业收入不低于</span>
								<input v-model="numbera" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>亿元</font>
							</div>
							<div class="shouru">
								<span>净利润不低于</span>
								<input v-model="numberToa" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>万</font>
							</div>
							<!--<li class="border">
								<input v-model="number" placeholder="请输入数字" number="true" type="number" class="mint-field-core">
							</li>
							<li class="border">
								
							</li>-->
						</ul>
					</div>
				</div>
				<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您实际能提供的年化资金成本范围？</span>
						</div>
						<ul>
							<input v-model="numberb" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;至</font>
							<input v-model="numberTob" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>%&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您的单笔能提供的投资规模？</span>
						</div>
						<ul>
							<input v-model="numberc" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>万&nbsp;至</font>
							<input v-model="numberToc" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>万&nbsp;</font>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>从接触项目到放款的时间不超过？</span>
						</div>
						<ul>
							<input v-model="numberd" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<font>天</font>
						</ul>
					</div>
				</div>
				<div style="background:#f5f4f9;width:100%;height:0.1rem;"></div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>您是否有地域要求<a>（选填）</a></span>
						</div>
						<div class="xiaolv anli">
							<ul>
								<textarea placeholder="请填写资金出借方的公司全称" class="mint-field-core ziyuanChongzu" v-model="introductionA"></textarea>
							</ul>
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<div class="tuse">
							<font></font><span>借债主题是<a>（选填）</a></span>
						</div>
						<div class="xiaolv anli">
							<ul>
								<textarea placeholder="选填..." class="mint-field-core ziyuanChongzu" v-model="introductionB"></textarea>
							</ul>
						</div>
					</div>
				</div>
				
				<div class="type-food" @click.stop="ToHoom">
					<div class="type-food-text">
						<span>进入首页</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
//	import BScroll from "better-scroll";
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
				numbera:"",
				numberToa:"",
				numberb:"",
				numberTob:"",
				numberc:"",
				numberToc:"",
				numberd:"",
				block:false,
				introductionA:"",
				introductionB:"",
				showFlag:true,
				urlName:"Dingzeng",
//				onlyContent:true,
//				times:20177111129
			}
		},
		methods:{
			yijianHind(){
//				this.showFlag=false;
				history.go(-1)
			},
			Tozhaiquan(){
				this.showFlag=true;
			},
			ToHoom(){
				window.location.href="#/faxian";
			},
			types(id){
				var typeLi=this.$refs.foods.getElementsByTagName("li");
				var length=typeLi.length;
				this.urlName=id;
				for(var i=0; i<length; i++){
					typeLi[i].setAttribute("class","src0");
				}
				typeLi[id].setAttribute("class","src1")
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
			/*.list-header{
				width:100%;
				padding-top:0.6rem;
				display: flex;
			    -webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
			    font-size:0.2rem;
			}*/
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
							display:flex;
							justify-content:flex-start;
							li{
								&:first-child{
									margin-right:0.06rem;
								}
								width:1.08rem;
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
									background-image:url("../img/duihao.png");
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
					.xiaolv{
						width:100%;
						span{
							line-height:0.16rem;
						}
						ul{
							width:100%;
							.mint-field-core::-webkit-input-placeholder{
							  color: #787777;
							}
							.ziyuanChongzu{
								resize: none;
								min-height:1.02rem;
								line-height:0.2rem;
								&::-webkit-scrollbar{width:0;height:0}
							}
							.mint-field-core{
								width:96%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
								padding:0.06rem 2%;
								margin:0.06rem 0 0 0;
							}
						}
					}
					/*.type-padding{
						padding:0.1rem;
					}*/
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


