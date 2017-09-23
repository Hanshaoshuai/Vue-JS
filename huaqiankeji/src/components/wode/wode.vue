<template>
	<!--<transition name="fade">-->
		<div class="wode">
			<div class="searchBox">
				<div class="home-search border">
					<img src="" alt="" />
				</div>
				<div class="header-name">
					<span>A</span>
					<div class="header-content">
						<span>天太</span>
						<span>张中</span>
					</div>
				</div>
			</div>
			
			<div class="box">
				<div class="FadeContent">
					<div style="width:100%;height:0.82rem;"></div>
					<div class="sousuo-content border-topbottom">
						<div class="content-header ziliao">
							<span>收获项目数</span>
							<span>反馈率</span>
							<span>换片率</span>
						</div>
					</div>
					<box></box>
					<div class="sousuo-content border-topbottom">
						<div class="content-header ziliao">
							<span @click.stop="ziliaoShow(type.g)">个人资料</span>
							<span>完成度88%</span>
						</div>
					</div>
					<box></box>
					<div class="sousuo-content border-topbottom">
						<div class="content-header" @click.stop="jiluGo()">
							<span>历史融资记录</span>
						</div>
					</div>
					<box></box>
					<div class="sousuo-content border-topbottom">
						<div class="content-header" @click.stop="baomingGo()">
							<span>我报名的</span>
						</div>
					</div>
					<box></box>
					<div class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>分享应用给好友</span>
						</div>
					</div>
					<box></box>
					<div class="sousuo-content border-topbottom">
						<div class="content-header"  @click.stop="biduGo()">
							<span>设置</span>
						</div>
					</div>
					<box></box>
					<div class="sousuo-content border-topbottom">
						<div class="content-header" @click.stop="gangweiGo()">
							<span>工作岗位变更</span>
						</div>
					</div>
					<!--<div style="width:100%;height:0.5rem;"></div>-->
				</div>
			</div>
			<!--<bidu ref="biduShow"></bidu>-->
			<!--<jilu ref="jiluShow"></jilu>-->
			<router-view></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import box from "../box.vue"
//	import BScroll from "better-scroll";
//	import bidu from "./RongziBidu/biDu.vue";
//	import jilu from "./RongziJilu/jiLu.vue";
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
				block:false,
				times:20177111129,
				showFlag:false,
				onlyContent:true,
				type:{
					a:"A",
					b:"B",
					c:"C",
					d:"D",
					e:"E",
					f:"F",
					g:"G",
					h:"H"
				}
			}
		},
		methods:{
			biduGo(){
//				this.$refs.biduShow.biduBlock();
				window.location.href="#/wode/shezhi/0";
			},
			ziliaoShow(id){
				window.location.href="#/wode/ziliao"+id+"/0";
			},
			jiluGo(){
				window.location.href="#/wode/jilu/0";
			},
			baomingGo(){
				window.location.href="#/wode/baoming/0";
			},
			gangweiGo(){
				window.location.href="#/wode/gangwei/0";
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
			box,
//			jilu
//			ratingselect,
//			split
		}
	}
</script>

<style lang="scss" scoped>
	.wode{
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:auto;
		    padding:0.2rem;
		    background-color: #00C850;
		    display:flex;
		    z-index:100;
		    /*span{
		    	display:inline-block;
		    	position:absolute;
		    	right:0;
		    	top:0;
		    	padding-right:0.3rem;
		    	line-height:0.45rem;
		    	z-index:10000;
		    }*/
		    .home-search {
		    	width:0.8rem;
		    	height:0.8rem;
			    background: #ffffff;
			    img{
			    	width:100%;
			    	height:100%;
			    }
			}
			.header-name{
				padding-left:0.2rem;
				height:100%;
				&>span{
					font-size:0.2rem;
					line-height:0.3rem;
				}
				.header-content{
					margin-top:0.2rem;
					span{
						&:first-child{
							display:inline-block;
							padding-right:0.1rem;
						}
					}
				}
			}
		}
		.box{
			width:100%;
			height:100%;
			overflow-y:auto;
			.FadeContent{
				width:100%;
				height:auto;
				padding:0.45rem 0;
				.sousuo-content{
					width:100%;
					height:auto;
					background:#fff;
					/*padding-bottom:0.2rem;*/
					/*margin:0.05rem 0;*/
					/*display:flex;*/
					/*flex-direction:column;*/
					.content-header{
						padding:0.08rem 0.2rem;
						font-size:0.2rem;
						span{
							line-height:0.3rem;
						}
					}
					.xiaolv{
						padding:0 0.2rem;
						display:flex;
						span{
							display:inline-block;
							padding:0.06rem 0.2rem;
							line-height:0.18rem;
							text-align:center;
						}
						.center{
							margin:0 0.1rem;
						}
					}
					.ziliao{
						display:flex;
						span{
							flex:1;
							text-align:center;
						}
					}
				}
			}
		}
	}
</style>


