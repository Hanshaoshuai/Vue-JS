<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="yijian">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>徐小姐</span>
			</div>
			<!--<div class="yijian-header">
				<span class="fanhui-butten" @click="yijianHind"><</span>
				<span>徐小姐</span>
			</div>-->
			<div class="content-text" ref="contentTexte">
				<div class="box" ref="boxTexte" id="box">
					<div style="width:100%;height:0.5rem;"></div>
					<div class="fankiu-my">
						<div class="fankiu-img">
							<img class="border" src="" alt="" />
						</div>
						<div class="fankiu-text">
							<span class="border">kkkkkkkkjcdh45463fisdj</span>
						</div>
					</div>
					<div class="fankiu-you">
						<div class="fankiu-text">
							<span>kkkkkkkkjcdh45463fisdj</span>
						</div>
						<div class="fankiu-img">
							<img class="border" src="" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="shuru" ref="shuru">
				<div class="tousu" @click.stop="tousuoGo()"><span>投诉</span></div>
				<ul>
					<li>
						<!--<div ref="texts" class="test_box" contenteditable="true"></div>--> 
						<textarea ref="texts" placeholder="请详输入您的问题..." class="mint-field-core" v-model="introduction"></textarea>
						<div class="fasong" @click.stop="fasong()"><span>发送</span></div>
					</li>
					<!--<li class="">
						<div><span>点击约调研前，屏蔽手机号、微信号、地址信息。</span></div>
						<div><span @click.stop="fasong()">发送</span></div>
					</li>-->
				</ul>
			</div>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import { Field } from 'mint-ui';
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
				DEHeight:"",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				tousuoContent:""
			}
		},
		mounted(){
//			this.$http.post('./index.txt',datas,{emulateJSON:true}).then(function(res){
//		        console.log(res)
//		        alert("成功");
//			},function(res){
//			    console.log(res.status);
//			})
		},
		methods:{
			yijianHind(){
				history.go(-1);
			},
			tousuoGo(){
				var contentTexte=this.$refs.contentTexte;
				this.tousuoContent="投诉成功！"
				var prent=this.$refs.boxTexte;
				var tiShi=document.createElement("div");		//提示信息内容
				var textCont=document.createElement("font");
				textCont.innerText=this.tousuoContent;						//后台获取信息插入
				tiShi.appendChild(textCont);
				prent.appendChild(tiShi);
				textCont.style.color="#b4b4b4";
				textCont.style.lineHeight="0.2rem";
				textCont.style.fontSize="0.16rem";
				textCont.style.wordWrap="break-word";
				tiShi.style.width="82%";
				tiShi.style.margin="0 auto";
				tiShi.style.padding="0.1rem 0";
				tiShi.style.textAlign="center";
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
			},
			fasong(){
//				var DEHeight;
//				this.DEHeight=DEHeight    //窗口高度
				var contentTexte=this.$refs.contentTexte;
				var prent=this.$refs.boxTexte;
				var shuru=this.$refs.shuru;				
//				var texts=this.$refs.texts.innerText;
				var texts=this.introduction;
				var Height=shuru.clientHeight		//底部高度
				console.log(shuru.clientHeight)							//显示框高度
//				contentTexte.style.height=(DEHeight-93)/100+"rem";
				var aaa=document.getElementById("box")
//				if(document.aaa.scrollTop){
					console.log(prent.offsetHeight)
					console.log(prent.scrollTop )
					console.log(contentTexte.scrollTop )
					console.log(contentTexte.scrollHeight )
//				}
				
				if(texts!=""){
					var times=new Date();           //实例化日期对象；
					var myMonth=times.getMonth();   //当前的月份；
					myMonth=myMonth+1;				//当前的月份；
					var myDate=times.getDay();      //当前的日期；
					var myHours=times.getHours();   //当前的小时；
					var myMinutes=times.getMinutes();   //当前的分钟；
					console.log(myMinutes)
					
					
					var you=document.createElement("div");			//创建元素        我要发送的
					var	neiRong=document.createElement("div");		//内容信息
					var touXiang=document.createElement("div");		//头像
					var span=document.createElement("span");
					var img=document.createElement("img");
					var imgs=document.createElement("img");
					you.setAttribute("class","fankiu-you");			//添加属性
					neiRong.setAttribute("class","fankiu-text clearbox");
					touXiang.setAttribute("class","fankiu-img");
					imgs.src="../../../../dist/you.png";
					img.setAttribute("class","border");
//					span.appendChild(imgs);
					span.innerText=texts;							//对应插入
					neiRong.appendChild(span);
					neiRong.appendChild(imgs);
					touXiang.appendChild(img);
					you.appendChild(neiRong);
					you.appendChild(touXiang);
					prent.appendChild(you);
					you.style.width="92%";						//样式4
					you.style.margin="0 auto";
					you.style.textAlign="justify";
					you.style.lineHeight="0.2rem";
					you.style.overflow="hidden";
					you.style.padding="0.05rem 0";
					neiRong.style.width="86%";
					neiRong.style.float="left";
//					neiRong.style.overflow="hidden";
					neiRong.style.position="relative";
					span.style.display="inline-block";
					span.style.padding="0.08rem 0.1rem";
					span.style.background="#ff7a59";
					span.style.color="#fff";
					span.style.float="right";
					span.style.maxWidth="77%";
					span.style.borderRadius="0.04rem";
					span.style.fontSize="0.16rem";
					span.style.border="1px solid #d4d2d2";
					span.style.wordWrap="break-word";
					touXiang.style.width="14%";
					touXiang.style.float="left";
					touXiang.style.overflow="hidden";
					img.style.width="0.38rem";
					img.style.height="0.38rem";
					img.style.background="#EAEAEA";
					img.style.float="right";
					img.style.borderRadius="0.02rem";
					imgs.style.position="absolute";
					imgs.style.width="0.08rem";
					imgs.style.height="0.11rem";
					imgs.style.top="0.09rem";
					imgs.style.right="-0.066rem";
					imgs.style.Zindex=100;
					
					var my=document.createElement("div");			//创建元素		对方要发送的
					var	neiRong=document.createElement("div");
					var touXiang=document.createElement("div");
					var span=document.createElement("span");
					var img=document.createElement("img");
					var imgs=document.createElement("img");
					my.setAttribute("class","fankiu-my");			//添加属性
					neiRong.setAttribute("class","fankiu-text");
					touXiang.setAttribute("class","fankiu-img");
					imgs.src="../../../../dist/my.png";
					img.setAttribute("class","border");
					span.innerText=texts;							//对应插入
					neiRong.appendChild(span);
					neiRong.appendChild(imgs);
					touXiang.appendChild(img);
					my.appendChild(touXiang);
					my.appendChild(neiRong);
					prent.appendChild(my);
					my.style.width="92%";						//样式4
					my.style.margin="0 auto";
					my.style.lineHeight="0.2rem";
					my.style.textAlign="justify";
					my.style.display="flex";
					my.style.padding="0.05rem 0";
					neiRong.style.width="86%";
					neiRong.style.position="relative";
//					neiRong.style.float="left";
					span.style.display="inline-block";
					span.style.padding="0.08rem 0.1rem";
					span.style.background="#fff";
					span.style.maxWidth="77%"
					span.style.borderRadius="0.04rem";
					span.style.fontSize="0.16rem";
					span.style.border="1px solid #d4d2d2";
					span.style.wordWrap="break-word";
					touXiang.style.width="14%";
//					touXiang.style.float="left";
					img.style.width="0.38rem";
					img.style.height="0.38rem";
					img.style.background="#EAEAEA";
					img.style.borderRadius="0.02rem";
					imgs.style.position="absolute";
					imgs.style.width="0.08rem";
					imgs.style.height="0.11rem";
					imgs.style.top="0.09rem";
					imgs.style.left="-0.066rem";
					imgs.style.Zindex=100;
					this.introduction="";
					
					
					var tiShi=document.createElement("div");		//提示信息内容
					var textCont=document.createElement("font");
					textCont.innerText=texts;						//后台获取信息插入
					tiShi.appendChild(textCont);
					prent.appendChild(tiShi);
					textCont.style.color="#b4b4b4";
					textCont.style.lineHeight="0.2rem";
					textCont.style.fontSize="0.16rem";
					textCont.style.wordWrap="break-word";
					tiShi.style.width="82%";
					tiShi.style.margin="0 auto";
					tiShi.style.padding="0.1rem 0";
					tiShi.style.textAlign="center";
//					tiShi.style.background="#EAEAEA";
					
					
					
					var shiJian=document.createElement("div");		//时间显示
					var shiJianCont=document.createElement("font");
					shiJianCont.innerText=myHours+":"+myMinutes;						//后台获取信息插入
					shiJian.appendChild(shiJianCont);
					prent.appendChild(shiJian);
					shiJianCont.style.color="#fff";
					shiJianCont.style.lineHeight="0.21rem";
					shiJianCont.style.fontSize="0.16rem";
					shiJianCont.style.background="#cfced2";
					shiJianCont.style.display="inline-block";
					shiJianCont.style.padding="0 0.06rem";
					shiJianCont.style.borderRadius="0.04rem";
					shiJian.style.padding="0.1rem 0";
					shiJian.style.textAlign="center";
					
					
					
					var mingPian=document.createElement("div");			//换名片申请提示
					var	mingText=document.createElement("p");
					var mingSpan=document.createElement("span");
					var mingFont=document.createElement("font");
					mingText.innerText=texts;							//后台获取信息插入
					mingSpan.innerText="同意";
					mingFont.innerText="拒绝";
					mingPian.appendChild(mingText);
					mingPian.appendChild(mingSpan);
					mingPian.appendChild(mingFont);
					prent.appendChild(mingPian);						//最终要插入到对话框内
					mingPian.style.width="2.02rem";
					mingPian.style.margin="0 auto";
					mingPian.style.minHeight="0.63rem";
					mingPian.style.position="relative";
					mingPian.style.background="#fff";
					mingText.style.lineHeight="0.21rem";
					mingText.style.fontSize="0.16rem";
					mingText.style.wordWrap="break-word";
					mingText.style.padding="0 0 0.36rem 0";
					
					mingSpan.style.position="absolute";
					mingSpan.style.left="0";
					mingSpan.style.bottom="0";
					mingSpan.style.color="#f5f4f9";
					mingSpan.style.width="46%";
					mingSpan.style.height="0.31rem";
					mingSpan.style.borderRadius="0.04rem";
					mingSpan.style.background="#ff7a59";
					mingSpan.style.lineHeight="0.31rem";
					mingSpan.style.textAlign="center";
					mingSpan.onclick=function(){				//绑定事件
						alert("同意")
					}
					mingFont.style.position="absolute";
					mingFont.style.right="0";
					mingFont.style.bottom="0";
					mingFont.style.width="46%";
					mingFont.style.height="0.31rem";
					mingFont.style.borderRadius="0.04rem";
					mingFont.style.background="#f5f4f9";
					mingFont.style.lineHeight="0.31rem";
					mingFont.style.textAlign="center";
					mingFont.onclick=function(){				//绑定事件
						alert("拒绝")
					}
					
					span.appendChild(mingPian);
					
					
					
					
					contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
				}else{
					return;
				}
			},
			watch:{
				
//				msg:function(newVal,oldVal){
//					console.log(newVal +"*********"+ oldVal)
//				}
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
	.yijian{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:1600;
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
			z-index:1700;
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
		.content-text::-webkit-scrollbar{width:0px}
		.content-text{
			position:fixed;
			width:100%;
			height:87%;
			top:0;
			left:0;
			overflow-y:auto;
			z-index:1500;
			padding-bottom:1%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.box{
				width:100%;
				height:auto;
				.fankiu-my,.fankiu-you{
					display:flex;
					padding:0.04rem 0.2rem;
					.fankiu-img{
						width:0.33rem;
						img{
							width:0.33rem;
							height:0.33rem;
							background:#EAEAEA;
						}
					}
					.fankiu-text{
						flex:1;
						margin-left:0.1rem;
						span{
							display:inline-block;
							padding:0.1rem;
							background:#fff;
						}
					}
				}
				.fankiu-you{
					text-align:right;
					.fankiu-text{
						margin-right:0.1rem;
					}
				}
			}
		}
		.shuru{
			position:fixed;
			height:12%;
			/*height:0.68rem;*/
			background:#e5e4eb;
			left:0;
			bottom:0;
			width:100%;
			z-index:2000;
			display:flex;
			align-content:center;
			align-items:center;
			justify-content:center;
			color:#fff;
			font-size: 0.16rem;
			.tousu{
				position:absolute;
				top:-0.3rem;
				right:0.16rem;
				width:0.48rem;
				height:0.15rem;
				color:#ff7a59;
				font-size:0.14rem;
				padding-top:0.01rem;
				text-align:right;
				background-image:url("./img/hong.png");
				background-size:0.14rem 0.14rem;
				background-position:0 0;
				background-repeat:no-repeat;
			}
			ul{
				width:95%;
				height:0.36rem;
				margin:0 auto;
				li{
					width:100%;
					height:0.36rem;
					/*display:flex;*/
					.test_box{
						width:3.2rem; 
						line-height:0.16rem;
					    min-height: 0.20rem; 
					    max-height: 0.60rem;
					    _height: 0.20rem; 
					    margin-left: auto; 
					    margin-right: auto; 
					    padding: 0.04rem; 
					    outline: 0; 
					    border-bottom: 1px solid #a0b3d6; 
					    font-size: 0.16rem; 
					    word-wrap: break-word;
					    overflow-x: hidden;
					    /*overflow-y: hidden;*/
					    /*overflow-y:visible;*/
					    &::-webkit-scrollbar{width:0;height:0}
					}
					.fasong{
						width:0.65rem;
						height:0.35rem;
						background:#ff7a59;
						border-radius:0.04rem;
						display:flex;
						align-content:center;
						align-items:center;
						justify-content:center;
						color:#fff;
						font-size: 0.16rem; 
						float:right;
					}
					.mint-field-core{
						resize: none;
						width:76%;
						height:0.25rem;
						padding:0.1rem 0 0 0.12rem;
						float:left;
						line-height:0.16rem;
						border-radius:0.04rem;
						&::-webkit-scrollbar{width:0;height:0}
					}
				}
			}
		}
	}
</style>


