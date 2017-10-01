<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>个人资料</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="guQuan">
					<div class="fankiu border-topbottom">
						<div class="content-food touBiao">
							<span>股权投资</span>
						</div>
					</div>
					<div style="width:100%;height:0.06rem;"></div>
					<div ref="guanzhuLingyu">
						<div class="fankiu border-topbottom">
							<div class="content-food">
								<span>关注领域</span>
								<span class="lasst" @click.stap="bianji('1')">编辑</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numbera" placeholder="食品、食品、食品" type="text" class="mint-field-core">
									</li>
									<!--<li>
										<input readOnly="true" v-model="numberb" placeholder="食品" type="text" class="mint-field-core">
									</li>
									<li>
										<input readOnly="true" v-model="numberc" placeholder="食品" type="text" class="mint-field-core">
									</li>-->
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom">
							<div class="content-food">
								<span>投资阶段</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberd" placeholder="天使、VC、PE" type="text" class="mint-field-core">
									</li>
									<!--<li>
										<input readOnly="true" v-model="numbere" placeholder="VC" type="text" class="mint-field-core">
									</li>
									<li>
										<input readOnly="true" v-model="numberf" placeholder="PE" type="text" class="mint-field-core">
									</li>-->
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>单个投资额</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberg" placeholder="2000万-5000万" type="text" class="mint-field-core">
									</li>
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>地域要求</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberh" placeholder="长三角、珠三角、北京" type="text" class="mint-field-core">
									</li>
								</ul>
							</div>
						</div>
					</div>
					<box style="background:#FCE7E6"></box>
					<div ref="yitouAnli" class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>已投案例</span><span  class="lasst" @click.stap="bianji('2')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<div class="anli-list border-top">
								<span>
									<input readOnly="true" v-model="numberi" placeholder="天立泰" type="text" class="mint-field-core">
								</span>
								<span class="center">
									<input readOnly="true" v-model="numberj" placeholder="58658 万" type="text" class="mint-field-core">
								</span>
								<span>
									<input readOnly="true" v-model="numberk" placeholder="反徐小平" type="text" class="mint-field-core">
								</span>
							</div>
							<div class="anli-list border-top">
								<span>
									<input readOnly="true" v-model="numberl" placeholder="天立泰" type="text" class="mint-field-core">
								</span>
								<span class="center">
									<input readOnly="true" v-model="numberm" placeholder="58658 万" type="text" class="mint-field-core">
								</span>
								<span>
									<input readOnly="true" v-model="numbern" placeholder="反徐小平" type="text" class="mint-field-core">
								</span>
							</div>
						</div>
					</div>
					<box style="background:#FCE7E6"></box>
					<div ref="chanYe" class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>产业资源</span><span  class="lasst" @click.stap="bianji('3')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul>
								<li>
									<textarea readOnly="true" placeholder="请用文字表述您所在机构能给企业带来的产业资源" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
								</li>
							</ul>
						</div>
					</div>
					<box style="background:#FCE7E6"></box>
					<div ref="chongGou" class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>并购重组</span><span  class="lasst" @click.stap="bianji('4')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul>
								<li>
									<textarea readOnly="true" placeholder="请用文字表述您有意愿进行收购和出售的资产" class="mint-field-core ziyuanChongzu" v-model="textd"></textarea>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<box style="background:#FCE7E6"></box>
				<div class="zhaiQuan">
					<box style="background:#FCE7E6"></box>
					<div class="fankiu border-topbottom bottom-a">
						<div class="content-food touBiao">
							<span>债权投资</span>
						</div>
					</div>
					<div class="fankiu border-topbottom">
						<div class="content-food">
							<span>投资方式</span>
							<span class="lasst" @click.stap="bianji()">编辑</span>
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
					<!--<div ref="chanYe" class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>企业要求</span><span  class="lasst" @click.stap="bianji('3')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul>
								<li>
									<textarea readOnly="true" placeholder="营收收入不低于2亿元" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
									<textarea readOnly="true" placeholder="净利润不低于2000万元" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
								</li>
							</ul>
						</div>
					</div>-->
					<div class="sousuo-content border-topbottom" @click.stap="zuoshiGo()">
						<div class="content-header">
							<span>企业要求</span><span  class="lasst" @click.stap="bianji('3')">编辑</span>
						</div>
						<div class="shouru">
							<div class="anli-list border-topbottom">
								<textarea readOnly="true" placeholder="营收收入不低于2亿元" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
									
							</div>
							<div class="anli-list border-topbottom">
								<textarea readOnly="true" placeholder="净利润不低于2000万元" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
							</div>
						</div>
					</div>
						
						
						
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>您能提供的年化资金成本范围</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberg" placeholder="1000万-3000万" type="text" class="mint-field-core">
									</li>
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>从接触项目到放款的时间周期不超过</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberg" placeholder="30天" type="text" class="mint-field-core">
									</li>
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>地域要求</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberh" placeholder="长三角、珠三角、北京" type="text" class="mint-field-core">
									</li>
								</ul>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>借债主题是</span>
								<ul>
									<li>
										<input readOnly="true" v-model="numberh" placeholder="万象信托有限公司" type="text" class="mint-field-core">
									</li>
								</ul>
							</div>
						</div>
					</div>
					<box style="background:#FCE7E6"></box>
					<div ref="yitouAnli" class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>已投案例</span><span  class="lasst" @click.stap="bianji('2')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<div class="anli-list border-top">
								<span>
									<input readOnly="true" v-model="numberi" placeholder="天立泰" type="text" class="mint-field-core">
								</span>
								<span class="center">
									<input readOnly="true" v-model="numberj" placeholder="58658 万" type="text" class="mint-field-core">
								</span>
								<span>
									<input readOnly="true" v-model="numberk" placeholder="反徐小平" type="text" class="mint-field-core">
								</span>
							</div>
							<div class="anli-list border-top">
								<span>
									<input readOnly="true" v-model="numberl" placeholder="天立泰" type="text" class="mint-field-core">
								</span>
								<span class="center">
									<input readOnly="true" v-model="numberm" placeholder="58658 万" type="text" class="mint-field-core">
								</span>
								<span>
									<input readOnly="true" v-model="numbern" placeholder="反徐小平" type="text" class="mint-field-core">
								</span>
							</div>
						</div>
					</div>
					
					
					
					
					
					<div class="type-content">
						<div class="type-cont">
							<span>您能提供的年化资金成本范围</span>
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
				numbera:"",
				numberb:"",
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberh:"",
				numberi:"",
				numberj:"",
				numberk:"",
				numberl:"",
				numberm:"",
				numbern:"",
				numberToa:"",
				numberTob:"",
				numberToc:"",
				textc:"",
				textd:"",
				fankui:"45",
				genjin:"458",
				introductionA:"",
				introductionB:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				urlName:"Dingzeng",
				typeLi:"",
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
				window.location.href="#/fankuixinxi/"+"dfgdfhd/12";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			},
			bianji(id){
				if(id==1){
					var textInputs = this.$refs.guanzhuLingyu.getElementsByClassName("mint-field-core");
					var length=textInputs.length;
					for(var i=0; i<length; i++){
						textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					}
					textInputs[0].focus();		//点击编辑   input获取焦点
					console.log();
				}
				if(id==2){
					var textInputs = this.$refs.yitouAnli.getElementsByClassName("mint-field-core");
					var length=textInputs.length;
					for(var i=0; i<length; i++){
						textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					}
					textInputs[0].focus();		//点击编辑   input获取焦点
					console.log();
				}
				if(id==3){
					var textInputs = this.$refs.chanYe.getElementsByClassName("mint-field-core");
					textInputs[0].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					textInputs[0].focus();		//点击编辑   input获取焦点
					console.log();
				}
				if(id==4){
					var textInputs = this.$refs.chongGou.getElementsByClassName("mint-field-core");
					textInputs[0].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					textInputs[0].focus();		//点击编辑   input获取焦点
					console.log();
				}
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
		background:#f5f4f9;
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
		.box::-webkit-scrollbar{width:0px;}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.guQuan{
				width:100%;
				margin:0 auto;
			}
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.15rem 5%;
					background:#fff;
					span{
						font-size:0.18rem;
						line-height:0.18rem;
					}
					.lasst{
						font-size:0.14rem;
						float:right;
						color:#ff7a59;
					}
					ul{
						padding-top:0.14rem;
						height:0.31rem;
						display:flex;
						justify-content:space-between;
						li{
							width:100%;
							/*width:1rem;*/
							height:0.31rem;
							float:left;
							font-size:0.16rem;
							display:inline-block;
							.mint-field-core::-webkit-input-placeholder{
							  /*color: #ff7a59;*/
							}
							.mint-field-core{
								width:100%;
								height:100%;
								/*text-align:center;*/
								line-height:0.3rem;
								/*background:#fddcd0;*/
								/*border-radius:0.2rem;*/
								/*color:#ff7a59;*/
							}
						}
					}
				}
				.touBiao{
					height:0.58rem;
					padding:0 0 0 0;
					span{
						position:absolute;
						top:0.09rem;
						left:0rem;
						display:inline-block;
						padding:0.1rem 0.21rem 0.14rem 0.21rem;
						color:#fff;
						font-size:0.18rem;
						line-height:0.19rem;
						background-image:url("../img/biaoti.png");
						background-size:100% 100%;
					}
				}
			}
			
			.dangeDiyu{
				.content-food{
					ul{
						li{
							width:100%;
							.mint-field-core::-webkit-input-placeholder{
							  color: #787777;
							}
							.mint-field-core{
								width:100%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
							}
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
					padding:0 5%;
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
				/*padding-bottom:0.2rem;*/
				/*margin:0.05rem 0;*/
				/*display:flex;*/
				/*flex-direction:column;*/
				.content-header{
					padding:0.08rem 5%;
					font-size:0.18rem;
					span{
						line-height:0.3rem;
						&:last-child{
							display:inline-block;
							float:right;
							font-size:0.14rem;
							color:#ff7a59;
						}
					}
				}
				.xiaolv{
					width:100%;
					span{
						line-height:0.16rem;
					}
					ul{
						padding:0.05rem 5%;
						li{
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
								width:100%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
							}
						}
					}
				}
				.anli{
					.anli-list{
						padding:0 5%;
						padding-left:0.33rem;
						display:flex;
						height:0.43rem;
						span{
							flex:1;
							line-height:0.43rem;
							&:nth-child(2n){
								color:#44bfff;
							}
							&:last-child{
								color:#7d7d7d;
							}
						}
						.mint-field-core{
							width:100%;
							height:100%;
							text-align:left;
							background:#fff;
							border-radius:0;
							font-size:0.16rem;
						}
						.center{
							.mint-field-core::-webkit-input-placeholder{
							  color:#44bfff;
							}
							.mint-field-core{
								color:#44bfff;
							}
						}
					}
				}
			}
			.zhaiQuan{
				width:100%;
				margin:0 auto;
				.bottom-a{
					margin-bottom:0.06rem;
				}
				.content-touzi{
					flex:1;
					font-size:0.14rem;
					background:#fff;
					ul{
					width:100%;
					height:0.37rem;
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
				.shouru{
					width:100%;
					.anli-list{
						padding:0 5%;
						.ziyuanChongzu{
							resize: none;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
						.mint-field-core{
							width:100%;
							height:0.4rem;
							text-align:left;
							background:#fff;
							border-radius:0;
							color:#787777;
							font-size:0.16rem;
						}
					}
				}
			}
			.butten{
				width:100%;
				ul{
					width:100%;
					li{
						width:100%;
						padding:0.21rem 0 0.28rem 0;
						text-align:center;
						span{
							display:inline-block;
							padding:0.11rem 0.4rem;
							background:#ff7a59;
							color:#fff;
							border-radius:0.04rem;
							border:0.008rem solid #cccccc;
						}
					}
				}
			}
		}
	}
</style>


