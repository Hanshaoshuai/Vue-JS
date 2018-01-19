<template>
	<div class="headers">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.goodsListImg" alt="" />
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.className}}</span>
				</div>
				<div class="description">
					{{seller.goodsName}}/{{seller.discount}}分钟到达
				</div>
				<div v-if="seller.goodsID" class="goodsID" >
					<span class="icon" :class="classMap[seller.classID]"></span>
					<span class="text">{{seller.price}}</span>
				</div>
			</div>
			<div v-if="seller.goodsID" class="support-count" @click="showDetail">
				<span class="count">{{seller.classID}}个</span>
				<i class="icon-keyboard_arrow_right">></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller[3]}}</span>
			<i class="icon-keyboard_arrow_right">></i>
		</div>
		<div class="bacground">
			<img :src="seller[3]" alt="" />
		</div>
		<transition name="fade">
		<div v-show="detailShow" class="detail" transition="fade">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.goodsName}}</h1>
					<div class="star-wrapper">
						<star :size="48" :score="seller.classID" track-by="$index"></star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul v-if="seller.goodsID" class="supports">
						<li class="supports-item" v-for="(item,index) in seller.goodsID">
							<span class="icon" :class="classMap[index]"></span>
							<span class="text">{{seller.goodsName}}</span>
						</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="content">{{seller["3"]}}</p>
					</div>
				</div>
			</div>
			<div class="detail-close" @click="hideDetail">
				<i class="icon-close">X</i>
			</div>
		</div>
		</transition>
	</div>
</template>

<script>
	import star from "../star/star.vue"
	export default {
		props:{
			seller:{
				type:Object
			}
		},
		data(){
			return{
				detailShow:false
			}
		},
		methods:{
			showDetail(){
				this.detailShow=true;
			},
			hideDetail(){
				this.detailShow=false;
			}
		},
		created(){
			this.classMap=["decrease","discount","guarantee","invoice","special"]
		},
		components:{
			star
		}
	};
</script>

<style lang="scss">
	/*@import "../../common/stylus/mixin";*/
	.headers{
		color:#fff;
		position:relative;
		overflow:hidden;
		background:rgba(7,17,27,0.5);
		.content-wrapper{
			padding:0.24rem 0.12rem 0.18rem 0.24rem;
			font-size:0;
			position:relative;
			.avatar{
				display:inline-block;
				vertical-align:top;
				img{
					border-radius:0.02rem;
					width:0.64rem;
					height:0.64rem;
				}
			}
			.content{
				display:inline-block;
				margin-left:0.16rem;
				font-size:0.14rem;
				.title{
					margin:0.02rem 0 0.08rem 0;
					.brand{
						display:inline-block;
						vertical-align:top;
						width:0.3rem;
						height:0.18rem;
						background-image:url("../../../resource/img/brand@2x.png");
						background-size:0.3rem 0.18rem;
					}
					.name{
						margin-left:0.06rem;
						font-size:0.16rem;
						line-height:0.18rem;
						font-weight: bold;
					}
				}
				.description{
					margin-bottom:0.1rem;
					line-height:0.12rem;
					font-size:0.12rem;
				}
				.goodsID{
					.icon{
						display:inline-block;
						vertical-align: top;
						width:0.12rem;
						height:0.12rem;
						margin-right:0.04rem;
						background-size:0.12rem 0.12rem;
						background-repeat:no-repeat;
						&.decrease{
							/*bg-imge("")*/
							background-image:url("../../../resource/img/decrease_1@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.discount{
							/*bg-imge("")*/
							background-image:url("../../../resource/img/discount_1@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.guarantee{
							/*bg-imge("")*/
							background-image:url("../../../resource/img/guarantee_1@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.invoice{
							/*bg-imge("")*/
							background-image:url("../../../resource/img/invoice_1@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.special{
							/*bg-imge("")*/
							background-image:url("../../../resource/img/special_1@2x.png");
							background-size:0.12rem 0.12rem;
						}
					}
					.text{
						font-size:0.12rem;
						line-height:0.10rem;
					}
				}
			}
			.support-count{
				position:absolute;
				right:0.12rem;
				bottom:0.14rem;
				padding:0 0.08rem;
				height:0.24rem;
				line-height:0.24rem;
				border-radius:0.14rem;
				background:rgba(0,0,0,0.2);
				.count{
					vertical-align:top;
					font-size:0.1rem;
				}
				.icon-keyboard_arrow_right{
					margin-left:0.02rem;
					line-height:0.24rem;
					font-size:0.1rem;
				}
			}
		}
		.bulletin-wrapper{
			position:relative;
			height:0.28rem;
			line-height:0.28rem;
			padding:0 0.22rem 0 0.12rem;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			background:rgba(7,17,27,0.2);
			/*font-size:0;*/
			.bulletin-title{
				display:inline-block;
				vertical-align:top;
				margin-top:0.08rem;
				width:0.22rem;
				height:0.12rem;
				background-size:0.22rem 0.12rem;
				/*bg-image("")*/
				background-image:url("../../../resource/img/bulletin@2x.png")
			}
			.bulletin-text{
				vertical-align:top;
				font-size:0.1rem;
				margin:0 0.04rem;
			}
			.icon-keyboard_arrow_right{
				position:absolute;
				font-size:0.1rem;
				right:0.12rem;
				/*top:0.08rem;*/	
			}
		}
		.bacground{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:-1;
			filter:blur(0.1rem);
			img{
				width:100%;
				height:100%;
			}
		}
		.fade-enter-active, .fade-leave-active {
		  transition: opacity .5s
		}
		.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		  opacity: 0
		}
		.detail{
			position:fixed;
			z-index:100;
			top:0;
			left:0;
			width:100%;
			height:100%;
			/*overflow:auto;*/
			background:rgba(7,17,27,0.8);
			/*实现背景模糊*/
			backdrop-filter:blur(10px);
			.clearfix{
			    display:inline-block;
			    &:after{
			        display:block;
			        content:".";
			        height:0;
			        line-height:0;
			        clear:both;
			        visibility:hidden;
			    }
			}
			.detail-wrapper{
				width:100%;
				min-height:100%;
				.detail-main{
					margin-top:0.64rem;
					padding-bottom:0.64rem;
					.name{
						line-height:0.16rem;
						text-align:center;
						font-size:0.16rem;
						font-weight:700;
					}
					.star-wrapper{
						margin-top:0.18rem;
						padding:0.02rem 0;
						text-align:center;
					}
					.title{
						display:flex;
						width:80%;
						margin:0.28rem auto 0.24rem auto;
						.line{
							flex:1;
							position:relative;
							top:-0.06rem;
							border-bottom:1px solid rgba(255,255,255,0.2);
						}
						.text{
							padding:0 0.12rem;
							font-weight:700;
							font-size:0.14rem;
						}
					}
					.supports{
						width:80%;
						margin:0 auto;
						.supports-item{
							padding:0 0.12rem;
							margin-bottom:0.12rem;
							font-size:0;
							&:last-child{
								margin-bottom:0;
							}
							.icon{
								display:inline-block;
								width:0.16rem;
								height:0.16rem;
								vertical-align:top;
								margin-right:0.06rem;
								background-size:0.16rem 0.16rem;
								&.decrease{
									/*bg-imge("")*/
									background-image:url("decrease_2@2x.png");
									/*background-size:0.12rem 0.12rem;*/
								}
								&.discount{
									/*bg-imge("")*/
									background-image:url("discount_2@2x.png");
									/*background-size:0.12rem 0.12rem;*/
								}
								&.guarantee{
									/*bg-imge("")*/
									background-image:url("guarantee_2@2x.png");
									/*background-size:0.12rem 0.12rem;*/
								}
								&.invoice{
									/*bg-imge("")*/
									background-image:url("invoice_2@2x.png");
									/*background-size:0.12rem 0.12rem;*/
								}
								&.special{
									/*bg-imge("")*/
									background-image:url("special_2@2x.png");
									/*background-size:0.12rem 0.12rem;*/
								}
							}
							.text{
								line-height:0.16rem;
								font-size:0.12rem;
							}
						}
					}
					.bulletin{
						width:80%;
						margin:0 auto;
						.content{
							word-break:break-all;
							padding:0 0.12rem;
							line-height:0.24rem;
							font-size:0.12rem;
						}
					}
				}
			}
			.detail-close{ 
				position:relative;
				width:0.32rem;
				height:0.32rem;
				margin:-0.64rem auto 0 auto;
				clear:both;
				font-size:0.32rem;
			}
		}
	}
</style>