<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><</span>
				<span>个人资料</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.5rem;"></div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>股权投资</span>
					</div>
				</div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>关注领域</span>
						<span class="lasst">编辑</span>
						<ul>
							<li class="border">食品</li>
							<li class="border">食品</li>
							<li class="border">食品</li>
						</ul>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>投资阶段</span>
						<span class="lasst">编辑</span>
						<ul>
							<li class="border">天使</li>
							<li class="border">VC</li>
							<li class="border">PE</li>
						</ul>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="type-content">
					<div class="type-cont">
						<span>单个投资额</span>
						<ul>
							<input v-model="numbera" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							至
							<input v-model="numberToa" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							<!--<li class="border">
								<input v-model="number" placeholder="请输入数字" number="true" type="number" class="mint-field-core">
							</li>
							<li class="border">
								
							</li>-->
						</ul>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>地域要求</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >长三角、珠三角、北京</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>已投案例</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>债权投资</span>
					</div>
				</div>
				<div class="fankiu border-topbottom">
					<div class="content-food">
						<span>投资方式</span>
						<span class="lasst">编辑</span>
						<ul>
							<li class="border">融资租赁</li>
							<li class="border">股权质押</li>
							<li class="border">双创债</li>
						</ul>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>企业要求</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >营收不低于。。。</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
						<div class="anli-list">
							<span >净利润不低于。。。</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>您实际能提供的年化资金成本范围？</span>
						<ul>
							<input v-model="numberb" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							%&nbsp;至
							<input v-model="numberTob" placeholder="输入数字" number="true" type="number" class="mint-field-core border">%&nbsp;
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>您的单笔能提供的投资规模？</span>
						<ul>
							<input v-model="numberc" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							万&nbsp;至
							<input v-model="numberToc" placeholder="输入数字" number="true" type="number" class="mint-field-core border">万&nbsp;
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>从接触项目到放款的时间周期不超过？</span>
						<ul>
							<input v-model="numberd" placeholder="输入数字" number="true" type="number" class="mint-field-core border">
							天
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>您是否有地域要求（选填）？</span>
						<ul class="type-padding">
							<!--<textarea placeholder="用户填文字，后台审核的时候填写标准化的标签" rows="4" class="mint-field-core border" v-model="introductionA"></textarea>-->
							<mt-field  class="border" placeholder="用户填文字，后台审核的时候填写标准化的标签" type="textarea" rows="4" v-model="introductionA"></mt-field>
						</ul>
					</div>
				</div>
				<div class="type-content">
					<div class="type-cont">
						<span>借债主题是（选填）？</span>
						<ul class="type-padding">
							<!--<textarea placeholder="用户填文字，后台审核的时候填写标准化的标签" rows="4" class="mint-field-core border" v-model="introductionB"></textarea>-->
							<mt-field  class="border" placeholder="用户填文字，后台审核的时候填写标准化的标签" type="textarea" rows="4" v-model="introductionB"></mt-field>
						</ul>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>地域要求</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >长三角、珠三角、北京</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>借债主体</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >万象信托有限公司</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>已投项目</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
						<div class="anli-list">
							<span >天立泰</span>
							<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>产业资源</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天反徐小平反徐小平立反徐小平泰</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
					<div class="content-header">
						<span>并购重组</span><span>编辑</span>
					</div>
					<div class="xiaolv anli">
						<div class="anli-list">
							<span >天立并购重并购重组组反并购重组徐小平泰</span>
							<!--<span class="center">反徐小平</span>
							<span >58658&nbsp;万</span>-->
						</div>
					</div>
				</div>
				<box></box>
				<div class="butten">
					<ul>
						<li><span @click.stop="liuYan()">留言</span></li>
					</ul>
				</div>
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				numbera:"558",
				numberToa:"548",
				numberb:"558",
				numberTob:"548",
				numberc:"558",
				numberToc:"548",
				numberd:"558",
				fankui:"45",
				genjin:"458",
				introductionA:"",
				introductionB:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
			},
			zuoshiBlock(){
				this.tucaoShow=true;
			},
			dingzengBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYan(){
				window.location.href="#/fankuixinxi";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
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
			box
//			youhuiquan
//			fankuixinxi
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
	.xiangmu{
		position:fixed;
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:220;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#fff;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			z-index:230;
			.xiangmu-left{
				position:absolute;
				padding-left:0.3rem;
				display:inline-block;
				top:0;
				left:0;
			}
			.xiangmu-right{
				padding:0.08rem 0.1rem;
				border:0.005rem solid #93999F;
				line-height:0.12rem;
				font-size:0.14rem;
				position:absolute;
				top:0.09rem;
				right:0.1rem;
			}
		}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.1rem 0.2rem;
					line-height:0.3rem;
					font-size:0.14rem;
					background:#fff;
					span{
						font-weight:bold;
					}
					.lasst{
						float:right;
					}
					ul{
						li{
							display:inline-block;
							margin:0;
							padding:0.02rem 0.18rem;
							margin:0.06rem 0.1rem;
						}
					}
				}
			}
			.type-content{
				width:100%;
				height:auto;
				background:#fff;
				display:flex;
				.type-cont{
					flex:1;
					padding:0 0.2rem;
					span{
						display:block;
						margin:0.26rem 0 0.06rem 0.1rem;
					}
					ul{
						.mint-field-core{
							border:1px solid #2C3E50;
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
			    /*-webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;*/
			   	}
			}
			.sousuo-content{
				width:100%;
				height:auto;
				background:#fff;
				padding-bottom:0.2rem;
				/*margin:0.05rem 0;*/
				/*display:flex;*/
				/*flex-direction:column;*/
				.content-header{
					padding:0.08rem 0.2rem;
					font-size:0.2rem;
					span{
						line-height:0.3rem;
						&:last-child{
							display:inline-block;
							float:right;
						}
					}
				}
				.xiaolv{
					padding:0 0.2rem;
					span{
						line-height:0.16rem;
					}
				}
				.anli{
					padding-left:0.4rem;
					.anli-list{
						display:flex;
						width:100%;
						span{
							flex:1;
							line-height:0.2rem;
						}
						/*.center{
							padding:0 0.1rem;
						}*/
					}
				}
			}
			.butten{
				width:100%;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.08rem 0;
						text-align:center;
						span{
							display:inline-block;
							padding:0.06rem 0.16rem;
							background:#00A0DC;
							color:#fff;
							border-radius:0.04rem;
						}
					}
				}
			}
		}
	}
</style>


