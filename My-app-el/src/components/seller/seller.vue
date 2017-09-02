<template>
	<div class="seller" ref="betterscroll_seller">
		<div class="seller-content">
			<div class="overview">
				<h1 class="title">{{seller.className}} ({{seller.goodsName}})</h1>
				<div class="desc">
					<star :size="36" :score="seller.classID" class="star"></star>
					<span class="text">({{seller.classID}})</span>
					<span class="text">月售{{seller.price}}单</span>
				</div>
				<ul class="remark">
					<li class="block">
						<h2>起送价</h2>
						<div class="content">
							<span class="stress">{{seller.price}}</span>元
						</div>
					</li>
					<li class="block">
						<h2>商家配送</h2>
						<div class="content">
							<span class="stress">{{seller.classID}}</span>元
						</div>
					</li>
					<li class="block">
						<h2>平均商家配送</h2>
						<div class="content">
							<span class="stress">{{seller.classID}}</span>分钟
						</div>
					</li>
				</ul>
				<div class="favorite" @click="toggleFavorite">
					<span class="icon-favorite" :class="{active:favorite}">@</span>
					<span class="text">{{favoriteText}}</span>
				</div>
			</div>
			<split></split>
			<div class="bulletin">
				<h1 class="title">公告与活动</h1>
				<div class="content-wrapper">
					<p class="content">{{_seller}}</p>
					<p class="content">{{seller.imgsUrl}}</p>
				</div>
				<ul v-if="seller.goodsID" class="supports">
					<li class="supports-item" v-for="(item,index) in seller.goodsID">
						<span class="icon" :class="classMap[index]"></span>
						<span class="text">{{seller.goodsName}}{{_width}}</span>
					</li>
				</ul>
			</div>
			<split></split>
			<div class="pics">
				<h1 class="title">商家实景</h1>
				<div class="pic-wrapper" ref="pic_list">
					<ul class="pic-list" :style="{width:_width}">
						<li class="pic-item" v-for="(pic,index) in _seller">
							<img :src="_seller[index]" style="width:1.2rem;height:0.9rem;" />
						</li>
					</ul>
				</div>
			</div>
			<split></split>
			<div class="info">
				<h1 class="title">商家信息</h1>
				<ul>
					<li class="info-item" v-for="info in seller">{{seller.goodsName}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import {saveToLocal,loadFromLocal} from '../../common/js/store';
	import star from "../star/star.vue";
	import split from "../split/split.vue";
	
	export default {
		props:{
			seller:{
//				type:Object
			}
		},
		data () {
			return {
				favorite:(()=>{
					return loadFromLocal(this.seller.id,'favorite',false)
				})()
			}
		},
		created(){
			this.classMap=["decrease","discount","guarantee","invoice","special"];
			this.$nextTick(function() {
				if(!this.betterscroll){
					this.betterscroll=new BScroll(this.$refs.betterscroll_seller,{
						click:true
					});
					this.betterscroll=new BScroll(this.$refs.pic_list,{
						scrollX:true,
//						scrollY: false,
						eventPassthrough:'vertical',
						click:true
					});
				}else{
					//重新计算高度  
					this.betterscroll.refresh();
				}
				this._initScroll();
			});
		},
		mounted(){//所有的DAM加载完后
			this.$nextTick(function() {
				if(!this.betterscroll){
					this.betterscroll=new BScroll(this.$refs.betterscroll_seller,{
						click:true
					});
					this.betterscroll=new BScroll(this.$refs.pic_list,{
						scrollX:true,
//						scrollY: false,
						eventPassthrough:'vertical',
						click:true
					});
				}else{
					//重新计算高度  
					this.betterscroll.refresh();
				}
				this._initScroll();
			});
		},
		watch:{
			'seller'(){
				this._initScroll();
			}
		},
		computed:{
			favoriteText(){
				return this.favorite ? '收藏':'未收藏'
			},
			_seller(){
				var leng=this.seller.imgsUrl;
				//转换成json格式
				leng=JSON.parse(leng)
				return leng;
			},
			_width(){
				var leng=this.seller.imgsUrl;
				//转换成json格式
				leng=JSON.parse(leng)
				if(this.seller.imgsUrl){
					let picWidth=120;
					let margin=6;
					let width=((picWidth+margin)*leng.length-margin)+"px";
//					this.$refs.pic_list.style.width=width;
					return width;
				}
			}
		},
//		mounted(){
//	
//		}
		methods:{
			toggleFavorite(event){
				if(!event._constructed){
					return;
				}
				this.favorite=!this.favorite;
				saveToLocal(this.seller.id,'favorite',this.favorite)
			},
			_initScroll(){
				if(!this.betterscroll){
					this.betterscroll=new BScroll(this.$refs.betterscroll_seller,{
						click:true
					});
					this.betterscroll=new BScroll(this.$refs.pic_list,{
						scrollX:true,
//						scrollY: false,
						eventPassthrough:'vertical',
						click:true
					});
				}else{
					//重新计算高度  
					this.betterscroll.refresh();
				}
			}
		},
		components:{
			star,
			split
		}
	}
</script>


<style lang="scss" >
	.seller{
		position:absolute;
		top:1.74rem;
		bottom:0;
		left:0;
		width:100%;
		overflow:hidden;
		.overview{
			position:relative;
			padding:0.18rem;
			.title{
				margin-bottom:0.08rem;
				line-height:0.14rem;
				color:#07111B;
				font-size:0.14rem;
			}
			.desc{
				padding-bottom:0.18rem;
				border-bottom:1px solid rgba(7,17,27,0.1);
				font-size:0;
				.star{
					display:inline-block;
					margin-right:0.08rem;
					vertical-align:top;
				}
				.text{
					display:inline-block;
					margin-right:0.12rem;
					line-height:0.18rem;
					vertical-align:top;
					font-size:0.1rem;
					color:#07111B;
				}
			}
			.remark{
				display:flex;
				padding-top:0.18rem;
				.block{
					flex:1;
					text-align:center;
					border-right:1px solid rgba(7,17,27,0.1);
					&:last-child{
						border:none;
					}
					h2{
						margin-bottom:0.04rem;
						line-height:0.1rem;
						font-size:0.1rem;
						color:#93999F;
					}
					.content{
						line-height:0.24rem;
						font-size:0.1rem;
						color:#07111B;
						.stress{
							font-size:0.24rem;
						}
					}
				}
			}
			.favorite{
				position:absolute;
				width:0.5rem;
				right:0.05rem;
				top:0.18rem;
				text-align:center;
				.icon-favorite{
					display:block;
					margin-bottom:0.04rem;
					color:#d4d6d9;
					line-height:0.24rem;
					font-size:0.24rem;
					&.active{
						color:#F01414;
					}
				}
				.text{
					line-height:0.1rem;
					font-size:0.1rem;
					color:#07111B;
				}
			}
		}
		.bulletin{
			padding:0.18rem 0.18rem 0 0.18rem;
			.title{
				margin-bottom:0.08rem;
				line-height:0.14rem;
				color:#07111B;
				font-size:0.14rem;
			}
			.content-wrapper{
				padding:0.12rem 0.16rem 0 0.12rem;
				border-bottom:1px solid rgba(7,17,27,0.1);
				.content{
					/*word-wrap:break-word;*/
					line-height:0.24rem;
					font-size:0.12rem;
					color:#F01414;
					word-break:break-all;
				}
			}
			.supports{
				.supports-item{
					line-height:0.24rem;
					padding:0.16rem;
					font-size:0;
					&:last-child{
						border:none;
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
							background-image:url("decrease_4@2x.png");
							/*background-size:0.12rem 0.12rem;*/
						}
						&.discount{
							/*bg-imge("")*/
							background-image:url("discount_4@2x.png");
							/*background-size:0.12rem 0.12rem;*/
						}
						&.guarantee{
							/*bg-imge("")*/
							background-image:url("guarantee_4@2x.png");
							/*background-size:0.12rem 0.12rem;*/
						}
						&.invoice{
							/*bg-imge("")*/
							background-image:url("invoice_4@2x.png");
							/*background-size:0.12rem 0.12rem;*/
						}
						&.special{
							/*bg-imge("")*/
							background-image:url("special_4@2x.png");
							/*background-size:0.12rem 0.12rem;*/
						}
					}
					.text{
						line-height:0.16rem;
						font-size:0.12rem;
						color:#07111B;
					}
				}
			}
		}
		.pics{
			padding:0.18rem;
			.title{
				margin-bottom:0.12rem;
				line-height:0.14rem;
				color:#07111B;
				font-size:0.14rem;
			}
			.pic-wrapper{
				width:100%;
				overflow:hidden;
				white-space:nowrap;
				.pic-list{
					font-size:0;
					.pic-item{
						display:inline-block;
						margin-right:0.06rem;
						width:1.2rem;
						height:0.9rem;
						 &:last-child{
						 	margin:0;
						 }
					}
				}
			}
		}
		.info{
			padding:0.18rem 0.18rem 0 0.18rem;
			color:#07111B;
			.title{
				padding-bottom:0.12rem;
				line-height:0.14rem;
				border-bottom:1px solid rgba(7,17,27,0.1);
				font-size:0.14rem;
			}
			.info-item{
				padding:0.16rem 0.12rem;
				line-height:0.16rem;
				border-bottom:1px solid rgba(7,17,27,0.1);
				font-size:0.12rem;
				&:last-child{
					border:none;
				}
			}
		}
	}
</style>