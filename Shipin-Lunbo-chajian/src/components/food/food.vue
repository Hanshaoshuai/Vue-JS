<template>
	<transition name="fade">
		<div v-show="showFlag" class="food" ref="betterscroll_food">
			<div class="food-content">
				<div class="image-header">
					<img :src="img" alt="" />
					<div class="back" @click="hide">
						<i class="icon-arrow_lift"><</i>
					</div>
				</div>
				<div class="content">
					<h1 class="title">{{food.name}}</h1>
					<div class="detail">
						<span class="sell-count">月售{{food.id}}份</span><span class="rating">好评率{{food.id}}%</span>
					</div>
					<div class="price">
						<span class="now">${{food.id}}</span><span class="old">${{food.id}}</span>
					</div>
					<div class="cartcontrol-wrapper">
						<cartcontrol :food="food"></cartcontrol>
					</div>
					<div @click.stop.prevent="addFirst" class="buy" v-show="!food.id || food.id===0">加入购物车</div>
				</div>
				<split v-show="food.id"></split>
				<div class="info" v-show="food.id">
					<h1 class="title">商品信息{{texts}}</h1>
					<p class="text">{{food}}</p>
				</div>
				<split v-show="food.id"></split>
				<div class="rating" v-show="food.id">
					<h1 class="title">商品评价</h1>
					<ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food"></ratingselect>
					<div class="rating-wrapper">
						<ul v-show="food.id">
							<li v-show="needShow(food.id,food.name)" v-for="item in food" class="rating-item">
								<div class="user">
									<span class="name">{{food.name}}</span>
									<img class="avatar" :src="img" alt="" />
								</div>
								<div class="time">{{times | formatDate}}</div>
								<p class="text">
									<span class="icon-thumb" :class="{'icon-thumb_up':food.id==='59'}">#</span>{{food.name}}
								</p>
							</li>
						</ul>
						<div class="no-rating" v-show="!needShow(food.id,food.name)">暂无评价</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import Vue from "vue";
	import {formatDate} from "../../common/js/date.js";
	import cartcontrol from "../cartcontrol/cartcontrol.vue";
	import ratingselect from "../ratingselect/ratingselect.vue";
	import split from "../split/split.vue";
	
	const POSITIVE=0;
	const NEGATIVE=1;
	const ALL=2;
	
	export default {
		props:{
			food:{
				type:Object
			}
		},
		data () {
			return {
				times:20177111129,
				showFlag:false,
				selectType:ALL,
				onlyContent:true,
				desc:{
					all:"全部",
					positive:"推荐",
					negative:"吐槽"
				},
				texts:1,
				img:"http://g-search3.alicdn.com/img/bao/uploaded/i4/i1/TB1EmgpJXXXXXbTXVXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg_.webp"
			}
		},
		methods:{
			show(){
				this.showFlag=true;
				this.selectType=ALL;
				this.onlyContent=true;
//				dom更新后在执行使用$refs
				this.$nextTick(function() {
					if(!this.betterscroll){
						this.betterscroll=new BScroll(this.$refs.betterscroll_food,{
							click:true
						});
					}else{
						//重新计算高度  
						this.betterscroll.refresh();
					}
				});
			},
			hide(){
				this.showFlag=false;
			},
			addFirst(event){
				if(!event._constructed){
					return;
				}
				//子组件$emit方法广播操作
				this.$emit("to-parent",event.target);
				//通过Vue.set添加属性
				Vue.set(this.food,"id",1)
			},
			needShow(type,text){
				if(type==='59'||type==='246'){
					return true;
				}
//				this.$nextTick(function() {
//					this.betterscroll.refresh();
//				});
			}
		},
		events:{
			
		},
		filters:{
			formatDate(time){
				let date = new Date(time);
				return formatDate(date,'yyyy-MM-dd hh:mm');
			}
		},
		updated(){
			if(!this.betterscroll){
				this.betterscroll=new BScroll(this.$refs.betterscroll_food,{
					click:true
				});
			}else{
				//重新计算高度  
				this.betterscroll.refresh();
			}
		},
		components:{
			cartcontrol,
			ratingselect,
			split
		}
	}
</script>

<style lang="scss">
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
	.food{
		position:fixed;
		left:0;
		top:0;
		bottom:0.48rem;
		z-index:30;
		width:100%;
		background:#fff;
		.food-content{
			.image-header{
				position:relative;
				width:100%;
				height:0;
				padding-top:100%;
				img{
					position:absolute;
					top:0;
					left:0;
					width:100%;
					height:100%;
				}
				.back{
					position:absolute;
					top:0.1rem;
					padding: 0.1rem;
					.icon-arrow_lift{
						color:#fff;
						font-size:0.24rem;
					}
				}
			}
			.content{
				position:relative;
				padding:0.18rem;
				.title{
					line-height:0.14rem;
					margin-bottom:0.08rem;
					font-size:0.14rem;
					font-weight:700;
					color:#07111B
				}
				.detail{
					margin-bottom:0.18rem;
					line-height:0.1rem;
					font-size:0;
					.sell-count,.rating{
						font-size:0.1rem;
						color:#93999F;
					}
					.sell-count{
						margin-right:0.12rem;
					}
				}
				.price{
					font-weight:700;
					/*line-height:0.24rem;*/
					.now{
						margin-right:0.08rem;
						font-size:0.14rem;
						color:#f01414;
					}
					.old{
						text-decoration:line-through;
						font-size:0.1rem;
						color:#93999f;
					}
				}
				.cartcontrol-wrapper{
					position:absolute;
					right:0.12rem;
					bottom:0.12rem;
				}
				.buy{
					position:absolute;
					right:0.18rem;
					bottom:0.18rem;
					z-index:10;
					height:0.24rem;
					line-height:0.24rem;
					padding:0 0.12rem;
					box-sizing:border-box;
					border-radius:0.12rem;
					font-size:0.1rem;
					color:#fff;
					background:rgb(0,160,220);
				}
			}
			.info{
				padding:0.18rem;
				.title{
					line-height:0.14rem;
					margin-bottom:0.06rem;
					font-size:0.14rem;
					font-weight:700;
					color:#07111B;
				}
				.text{
					line-height:0.24rem;
					padding:0 0.08rem;
					font-size:0.12rem;
					color:#4D555D;
				}
			}
			.rating{
				padding-top:0.18rem;
				.title{
					line-height:0.14rem;
					margin-left:0.18rem;
					font-size:0.14rem;
					color:#4D555D;
				}
				.rating-wrapper{
					padding:0 0.18rem;
					.rating-item{
						position:relative;
						padding:0.16rem 0;
						border-bottom:1px solid rgba(7,17,27,0.1);
						.user{
							img{
								width:0.12rem;
								height:0.12rem;
							}
							position:absolute;
							right:0;
							top:0.16rem;
							font-size:0;
							line-height:0.12rem;
							.name{
								display:inline-block;
								margin-right:0.6rem;
								vertical-align:top;
								font-size:0.1rem;
								color:#93999F;
							}
							.avatar{
								border-radius:50%;
							}
						}
						.time{
							margin-bottom:0.06rem;
							line-height:0.12rem;
							font-size:0.1rem;
							color:#93999F;
						}
						.text{
							line-height:0.16rem;
							font-size:0.12rem;
							color:#07111B;
							.icon-thumb{
								margin-right:0.04rem;
							}
							.icon-thumb_up{
								line-height:0.16rem;
								margin-right:0.04rem;
								font-size:0.12rem;
							}
							.icon-thumb_up{
								color:#00A0DC;
							}
						}
					}
				}
			}
		}
	}
</style>


