<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="yijian">
			<div class="yijian-header">
				<span class="fanhui-butten" @click="yijianHind"><</span>
				<span>徐小姐</span>
			</div>
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
				<ul>
					<li class="">
						<div ref="texts" class="test_box" contenteditable="true"></div> 
						<!--<textarea placeholder="请详细描述您的问题，建议添加相关截图..." class="mint-field-core" v-model="introduction"></textarea>-->
					</li>
					<li class="">
						<div><span>点击约调研前，屏蔽手机号、微信号、地址信息。</span></div>
						<div><span @click.stop="fasong()">发送</span></div>
					</li>
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
			fasong(){
//				var DEHeight;
//				this.DEHeight=DEHeight    //窗口高度
				var contentTexte=this.$refs.contentTexte;
				var prent=this.$refs.boxTexte;
				var shuru=this.$refs.shuru;				
				var texts=this.$refs.texts.innerText;
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
					var you=document.createElement("div");			//创建元素
					var	neiRong=document.createElement("div");
					var touXiang=document.createElement("div");
					var span=document.createElement("span");
					var img=document.createElement("img");
					you.setAttribute("class","fankiu-you");			//添加属性
					neiRong.setAttribute("class","fankiu-text clearbox");
					touXiang.setAttribute("class","fankiu-img");
					img.setAttribute("class","border");
					span.innerText=texts;							//对应插入
					neiRong.appendChild(span);
					touXiang.appendChild(img);
					you.appendChild(neiRong);
					you.appendChild(touXiang);
					prent.appendChild(you);
					you.style.width="90%";						//样式4
					you.style.margin="0 auto";
					you.style.textAlign="justify";
					you.style.lineHeight="0.18rem";
					you.style.overflow="hidden";
					you.style.padding="0.05rem 0";
					neiRong.style.width="87%";
					neiRong.style.float="left";
					neiRong.style.overflow="hidden";
					span.style.display="inline-block";
					span.style.padding="0.08rem 0.1rem";
					span.style.background="#fff";
					span.style.float="right";
					span.style.maxWidth="81%"
					span.style.wordWrap="break-word";
					touXiang.style.width="13%";
					touXiang.style.float="left";
					touXiang.style.overflow="hidden";
					img.style.width="0.33rem";
					img.style.height="0.33rem";
					img.style.background="#EAEAEA";
					img.style.float="right";
					
					
					var my=document.createElement("div");			//创建元素
					var	neiRong=document.createElement("div");
					var touXiang=document.createElement("div");
					var span=document.createElement("span");
					var img=document.createElement("img");
					my.setAttribute("class","fankiu-my");			//添加属性
					neiRong.setAttribute("class","fankiu-text");
					touXiang.setAttribute("class","fankiu-img");
					img.setAttribute("class","border");
					span.innerText=texts;							//对应插入
					neiRong.appendChild(span);
					touXiang.appendChild(img);
					my.appendChild(touXiang);
					my.appendChild(neiRong);
					prent.appendChild(my);
					my.style.width="90%";						//样式4
					my.style.margin="0 auto";
					my.style.lineHeight="0.18rem";
					my.style.textAlign="justify";
					my.style.display="flex";
					my.style.padding="0.05rem 0";
					neiRong.style.width="87%";
//					neiRong.style.float="left";
					span.style.display="inline-block";
					span.style.padding="0.08rem 0.1rem";
					span.style.background="#fff";
					span.style.maxWidth="80%"
					span.style.wordWrap="break-word";
					touXiang.style.width="13%";
//					touXiang.style.float="left";
					img.style.width="0.33rem";
					img.style.height="0.33rem";
					img.style.background="#EAEAEA";					
					this.$refs.texts.innerText="";
					
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
		background:#FCE7E6;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:1600;
		.yijian-header{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:0.45rem;
			font-weight:400;
			background:#01FFFF;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			z-index:1800;
			.fanhui-butten{
				position:absolute;
				display:inline-block;
				padding-left:0.3rem;
				top:0;
				left:0;
			}
		}
		.content-text{
			width:100%;
			height:86%;
			/*position:fixed;*/
			overflow-y:auto;
			z-index:1700;
			/*top:0;
			left:0;*/
			.box{
				width:100%;
				height:auto;
				/*position:fixed;
				overflow-y:auto;
				z-index:1700;
				top:0;
				left:0;*/
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
			left:0;
			bottom:0;
			width:100%;
			display:flex;
			z-index:2000;
			ul{
				flex:1;
				padding:0.1rem 0.2rem;
				background:#fff;
				li{
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
					    font-size: 0.14rem; 
					    word-wrap: break-word;
					    overflow-x: hidden;
					    /*overflow-y: hidden;*/
					    /*overflow-y:visible;*/
					    &::-webkit-scrollbar{width:0;height:0}
					}
					.mint-field-core{
						resize: none;
						width:100%;
						line-height:0.16rem;
						&::-webkit-scrollbar{width:0;height:0}
					}
					&:last-child{
						height:100%;
						padding:0.08rem 0 0 0.2rem;
						display:flex;
						div{
							&:first-child{
								flex:1;
								line-height:0.16rem;
							}
							&:last-child{
								width:0.9rem;
								height:100%;
								span{
									display:inline-block;
									padding:0.06rem 0.16rem;
									background:#00A0DC;
									border-radius:0.06rem;
									margin:0.03rem 0 0 0.1rem;
								}
							}
						}
						/*div{
							
						}*/
					}
				}
			}
		}
	}
</style>


