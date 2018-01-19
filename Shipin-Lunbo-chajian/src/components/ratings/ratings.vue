<template>
	<div class="ratings" ref="betterscroll_ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.goodsID}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家 {{seller.price}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="title">服务态度</span>
						<star :size="36" :score="seller.classID" class="star"></star>
						<span class="score">{{seller.price}}</span>
					</div>
					<div class="score-wrapper">
						<span class="title">商品评价</span>
						<star :size="36" :score="seller.classID" class="star"></star>
						<span class="score">{{seller.price}}</span>
					</div>
					<div class="dilivery-wrapper">
						<span class="title">送达时间</span>
						<span class="delivery">{{seller.price}}分钟</span>
					</div>
				</div>
			</div>
			<split></split>
			<ratingselect :select-type="selectType" :only-content="onlyContent"></ratingselect>
			<div class="rating-wrapper">
				<ul>
					<li v-for="rating in seller" class="rating-item">
						<div class="avatar">
							<img style="width:0.28rem;height:0.28rem;" :src="seller.goodsListImg" alt="" />
						</div>
						<div class="content">
							<h1 class="name">{{seller.price}}</h1>
							<div class="star-wrapper">
								<star :size="24" :score="seller.classID" class="star"></star>
								<span class="delivery">{{seller.classID}} 分钟送到</span>
							</div>
							<p class="text">{{seller.className}}</p>
							<div class="recommend">
								<span class="icon-thumb_up">#</span>
								<span class="itme" v-for="item in seller">{{seller.goodsName}}</span>
							</div>
							<div class="time">{{times | formatDate}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import {formatDate} from "../../common/js/date.js";
	import star from "../star/star.vue";
	import ratingselect from "../ratingselect/ratingselect.vue";
	import split from "../split/split.vue";
	
	const ALL=2;
	export default {
		props:{
			seller:{
//				type:Object
			}
		},
		data () {
			return {
				times:20177111129,
				showFlag:false,
				selectType:ALL,
				onlyContent:true
			}
		},
		created(){
			this.$nextTick(function() {
				if(!this.betterscroll){
					this.betterscroll=new BScroll(this.$refs.betterscroll_ratings,{
						click:true
					});
				}else{
					//重新计算高度  
					this.betterscroll.refresh();
				}
			});
		},
		filters:{
			formatDate(time){
				let date = new Date(time);
				return formatDate(date,'yyyy-MM-dd hh:mm');
			}
		},
		components:{
			star,
			split,
			ratingselect
		}
	}
</script>

<style lang="scss">
	.ratings{
		position:absolute;
		top:1.74rem;
		bottom:0;
		left:0;
		width:100%;
		overflow:hidden;
		.overview{
			display:flex;
			padding:0.18rem 0;
			.overview-left{
				flex:0 0 1.37rem;
				margin:0.06rem 0;
				width:1.37rem;
				border-right:1px solid rgba(7,17,27,0.1);
				text-align:center;
				.score{
					line-height:0.28rem;
					font-size:0.24rem;
					color:#E19900;
				}
				.title{
					margin-bottom:0.08rem;
					line-height:0.12rem;
					color:#07111B;
				}
				.rank{
					line-height:0.1rem;
					font-size:0.1rem;
					color:#93999F;
				}
			}
			.overview-right{
				flex:1;
				padding-left:0.24rem;
				margin-bottom:0.08rem;
				line-height:0.18rem;
				font-size:0;
				.title{
					display:inline-block;
					vertical-align:top;
					font-size:0.12rem;
					color:#07111B;
				}
				.star{
					display:inline-block;
					margin:0 0.12rem;
					vertical-align:top;
				}
				.score{
					display:inline-block;
					vertical-align:top;
					font-size:0.12rem;
					color:#E19900;
				}
			}
			.dilivery-wrapper{
				font-size:0;
				.title{
					line-height:0.18rem;
					font-size:0.12rem;
					color:#07111B;
				}
				.delivery{
					margin-left:0.12rem;
					font-size:0.12rem;
					color:#93999F;
				}
			}
		}
		.rating-wrapper{
			padding:0 0.18rem;
			.rating-item{
				display:flex;
				padding:0.18rem 0;
				border-bottom:1px solid rgba(7,17,27,0.1);
				.avatar{
					flex:0 0 0.28rem;
					width:0.28rem;
					margin-right:0.12rem;
					img{
						border-radius:50%;
					}
				}
				.content{
					position:relative;
					flex:1;
					.name{
						margin-bottom:0.04rem;
						line-height:0.12rem;
						font-size:0.1rem;
						color:#07111B;
					}
					.star-wrapper{
						margin-bottom:0.06rem;
						font-size:0;
						.star{
							margin-right:0.06rem;
							display:inline-block;
							vertical-align:top;
						}
						.delivery{
							display:inline-block;
							line-height:0.12rem;
							font-size:0.1rem;
							color:#07111B;
						}
					}
					.text{
						margin-bottom:0.08rem;
						line-height:0.18rem;
						color:#07111B;
						font-size:0.12rem;
					}
					.recommend{
						line-height:0.16rem;
						font-size:0;
						.icon-thumb_up,.itme{
							display:inline-block;
							margin:0 0.08rem 0.04rem 0;
							font-size:0.09rem;
						}
						.icon-thumb_up{
							color:#00A0DC;
						}
						.itme{
							padding:0 0.06rem;
							border:1px solid rgba(7,17,27,0.1);
							border-radius:1px;
							color:#93999F;
							background:#fff;
						}
					}
					.time{
						position:absolute;
						top:0;
						right:0;
						color:#93999F;
						font-size:0.1rem;
					}
				}
			}
		}
	}
</style>