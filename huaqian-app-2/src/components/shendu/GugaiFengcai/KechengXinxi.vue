<template>
	<div v-show="kechengBlock" class="tupian">
		<div class="kecheng">
			<ul>
				<li class="zhuban border-topbottom">
					<p><span class="border-right">主办方</span></p>
					<div><img src=""/></div>
					<div><img src=""/></div>
				</li>
				<li  class="dagang border-topbottom">
					<span>课程大纲</span><span @click.stop="shijianShow()"><img src="../img/xiatou.png"/></span>
				</li>
				<transition name="shijian">
				<li v-show="shijianBlock" class="shijian border-topbottom">
					<div class="cont">
						<div class="cont-top">
							<font></font>
							<span>11月1日上午2点</span>
						</div>
						<div class="cont-bottom">
							<p><span>课题</span></p>
							<p><font><img src=""/></font>管理公益辅导</p>
							<p><span>授课老师</span></p>
							<p><font><img src=""/></font>韩老师</p>
						</div>
					</div>
					<div class="cont">
						<div class="cont-top">
							<font></font>
							<span>11月1日上午2点</span>
						</div>
						<div class="cont-bottom">
							<p><span>课题</span></p>
							<p><font><img src=""/></font>管理公益辅导</p>
							<p><span>授课老师</span></p>
							<p><font><img src=""/></font>韩老师</p>
						</div>
					</div>
				</li>
				</transition>
			</ul>
		</div>
		<div class="feiyong">
			<ul>
				<li class="zhuban border-top">
					<p><span class="border-right">时间</span><font>2017年11月1日上午2点</font></p>
				</li>
				<li class="zhuban border-top">
					<p><span class="border-right">地点</span><font>杭州阿是</font></p>
				</li>
				<li class="zhuban border-topbottom">
					<p><span class="border-right">费用</span><font>￥888元</font></p>
				</li>
			</ul>
		</div>
		<div class="youhiu">
			<ul>
				<li class="zhuban border-to">
					<p><span class="border-right">截止报名时间</span><font>2017年11月1日上午2点</font></p>
				</li>
				<li class="zhuban border-bottom">
					<p><span class="border-right">优惠</span><font class="dazhe">九折</font></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	
	
	export default {
		props:{
			seller:{
				type:Object
			}
		},
		data () {
			return {
				kechengBlock:true,
				shijianBlock:false,
				kechengs:"kechengs"
			}
		},
		mounted(){
			
		},
		methods:{
			shijianShow(){
				if(this.shijianBlock==true){
					this.shijianBlock=false;
				}else{
					this.shijianBlock=true;
				}
			},
			KechengXinxiBlock(){
				this.kechengBlock=true;
			},
			KechengXinxiNone(){
				this.kechengBlock=false;
			}
		},
		uptated(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	/*@import "../../common/stylus/mixin";*/
	.shijian-enter-active {
	  	transition: all .5s ease;
	}
	.shijian-leave-active {
	  	transition: all .5s ease;
	}
	.shijian-enter, .shijian-leave-active {
	  	transform: translateY(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.tupian{
		.kecheng{
			width:100%;
			overflow:hidden;
			ul{
				width:100%;
				margin:0 auto;
				.zhuban{
					padding:0.16rem 4.25%;
					background:#fff;
					font-size:0.16rem;
					display:flex;
					margin:0.08rem 0;
					p{
						display:flex;
						-webkit-box-pack: center;
					    justify-content: center;
					    -webkit-box-align: center;
					    align-items: center;
						span{
							display:inline-block;
							padding-right:0.1rem;
							line-height:0.18rem;
						}
					}
					div{
						width:0.42rem;
						height:0.42rem;
						overflow:hidden;
						border-radius:0.22rem;
						margin-left:0.08rem;
						border:1px solid #fafafa;
					}
				}
				.dagang{
					padding:0.15rem 4.25%;
					background:#fff;
					font-size:0.16rem;
					img{
						width:0.16rem;
						padding:0.03rem 0.1rem;
						float:right;
					}
				}
				.shijian{
					padding:0.13rem 4.25%;
					background:#fff;
					.cont{
						font-size:0.16rem;
						.cont-top:after{
							display:block;clear:both;content:"";visibility:hidden;height:0;
							}
						.cont-top{
							zoom:1;
							font{
								display:inline-block;
								width:0.16rem;
								height:0.16rem;
								float:left;
								border:1px solid #ff581e;
								border-radius:0.1rem;
								margin-left:-0.08rem;
							}
							span{
								display:inline-block;
								float:left;
								margin-top:0.02rem;
								padding-left:0.06rem;
							}
						}
						.cont-bottom{
							border-left:1px solid #ff581e;
							padding:0.08rem 0.13rem 0.18rem 0.13rem;
							p{
								line-height:0.36rem;
								span{
									display:inline-block;
								}
								font{
									display:inline-block;
									width:0.26rem;
									height:0.26rem;
									/*float:left;*/
									border:2px solid #d6d5d5;
									border-radius:0.2rem;
									margin-right:0.08rem;
								}
							}
							P:nth-child(2n){
								color:#b0b0b0;
								display:flex;
								/*-webkit-box-pack:start;
							    justify-content: center;
							    -webkit-box-align:start;*/
							    align-items: center;
							}
						}
						&:last-child .cont-bottom{
							padding-bottom:0;
						}
					}
				}
			}
		}
		.feiyong,.youhiu{
			width:100%;
			ul{
				width:100%;
				margin:0 auto;
				padding:0.08rem 0;
				.zhuban{
					padding:0.16rem 4.25%;
					background:#fff;
					font-size:0.16rem;
					display:flex;
					/*margin:0.08rem 0;*/
					p{
						display:flex;
						-webkit-box-pack: center;
					    justify-content: center;
					    -webkit-box-align: center;
					    align-items: center;
						span{
							display:inline-block;
							padding-right:0.1rem;
							line-height:0.18rem;
						}
						font{
							display:inline-block;
							color:#a1a1a1;
							margin-left:0.1rem;
						}
					}
					&:last-child font{
						color:#fff;
						border-radius: 0.04rem;
						background:#ff7a59;
						padding:0.01rem 0.04rem;
					}
					&:last-child .dazhe{
						color:#ff7a59;
						background:none;
						background-image:url("../img/youhuiquan.png");
						background-size:100% 100%;
						padding:0.03rem 0.1rem 0.03rem 0.13rem;
					}
				}
			}
		}
		.youhiu{
			ul{
				padding:0 0 0.08rem 0;
			}
		}
	}
	
</style>
