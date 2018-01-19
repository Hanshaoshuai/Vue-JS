<template>
	<div class="shopcart">
		<div class="content" @click="toggleList">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'highlight':totalCount>0}">
						<i class="icon-shopping-cart" :class="{'highlight':totalCount>0}">@</i>
					</div>
					<div class="num" v-show="totalCount>0">{{totalCount}}</div>
				</div>
				<div class="price" :class="{'highlight':totelPrice>0}">${{totelPrice}}元</div>
				<div class="desc">另需配送费 $ {{deliveryPrice}} 元</div>
			</div>
			<div class="content-right" @click.stop="pay">
				<div class="pay" :class="payClass">
					{{payDesc}}
				</div>
			</div>
		</div>
		
		<div class="ball-container">
			<!--<transition
			    v-on:before-enter="beforeEnter"
				v-on:enter="enter"
				v-on:after-enter="afterEnter"
				v-on:enter-cancelled="enterCancelled"
			>-->
				<div v-for="ball in balls" v-show="ball.show" class="ball">
					<div class="inner"></div>
				</div>
			<!--</transition>-->
		</div>
		
		<transition name="slide-fade">
			<div class="shopcart-list" v-show="listShow">
				<div class="list-header">
					<h1 class="title">购物车</h1>
					<span class="empty" @click="empty">清空</span>
				</div>
				<div class="list-content" ref="betterscroll_list">
					<ul>
						<li class="food" v-for="food in selectFoods" v-show="food.id>0">
							<span class="name">{{food.name}}</span>
							<div class="price">
								<span class="">${{food.id*food.id}}</span>
							</div>
							<div class="cartcontrol-wrapper">
								<cartcontrol :food="food"></cartcontrol>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div @click="toggleList" class="list-mask" v-show="listShow"></div>
		</transition>
	</div>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import cartcontrol from "../cartcontrol/cartcontrol.vue";
	
	export default {
		
		props:{
			selectFoods:{
				type:Array,
				default(){
					return [
//						{
//							price:10,
//							count:2
//						}
					]
				}
			},
			deliveryPrice:{
//				type:Number,
				default:0
			},
			minPrice:{
//				type:Number,
				default:0
			},
		},
		data () {
			return {
				balls:[
					{
						show:false
					},
					{
						show:false
					},
					{
						show:false
					},
					{
						show:false
					},
					{
						show:false
					}
				],
				dropBalls:[],
				fold:true
			}
		},
		computed:{
			//计算单个产品总价函数
			totelPrice(){
				let total=0;
				this.selectFoods.forEach(function(food){
//					total+=food.price*food.count;
					total+=food.id*food.id;
				});
				return total;
			},
			//计算产品个数函数
			totalCount(){
				let count=0;
				this.selectFoods.forEach(function(food){
//					count+=food.count;
					count+=food.id;
				});
				return count;
			},
			payDesc(){
				if(this.totelPrice===0){
					return `Y${this.minPrice}元起送`;
				}else if(this.totelPrice<this.minPrice){
					let diff=this.minPrice-this.totelPrice
					return `还差Y${diff}元起送`;
				}else{
					return "去结算";
				}
			},
			payClass(){
				if(this.totelPrice<this.minPrice){
					return "not-enough";
				}else{
					return "enough";
				}
			},
			listShow(){
				if(!this.totalCount){
					this.fold=true;
					return false;
				}
				let show=!this.fold;
				if(show){
					this.$nextTick(()=>{
						if(!this.betterscroll){
							this.betterscroll=new BScroll(this.$refs.betterscroll_list,{
								click:true
							});
						}else{
							this.betterscroll.refresh();
						}
					});
				}
				return show;
			}
		},
		methods:{
			drop(el){
				console.log(el)
				for(let i=0; i<this.balls.length; i++){
					let ball=this.balls[i];
					if(!ball.show){
						ball.show=true;
						ball.el=el;
						this.dropBalls.push(ball);
						return;
					}
				}
			},
			toggleList(){
				if(!this.totalCount){
					return;
				}
				this.fold=!this.fold;
			},
			empty(){
				this.selectFoods.forEach((food)=>{
					food.id=0;
				})
			},
			pay(){
				if(this.totelPrice<this.minPrice){
					return;
				}
				window.alert(`支付${this.totelPrice}元`);
			}
//			beforeEnter: function (el) {
//				let count=this.balls.length;
//				console.log(count)
//			    // ...
//			},
//			  // 此回调函数是可选项的设置
//			  // 与 CSS 结合时使用
//			enter: function (el, done) {
//			    // ...
//			    done()
//			},
//			afterEnter: function (el) {
//			    // ...
//			},
//			enterCancelled: function (el) {
//			    // ...
//			},

//			beforeEnter: function (el) {
//		      	el.style.opacity = 0
//		      	el.style.transformOrigin = 'left'
//		    },
//		    enter: function (el, done) {
//		      	Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
//		      	Velocity(el, { fontSize: '1em' }, { complete: done })
//		    },
//		    leave: function (el, done) {
//		      	Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
//		      	Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
//		      	Velocity(el, {
//		        rotateZ: '45deg',
//		        translateY: '30px',
//		        translateX: '30px',
//		        opacity: 0
//		      	}, { complete: done })
//		    }
		},
		components:{
			cartcontrol
		}
	}
</script>

<style lang="scss">
	.shopcart{
		position:fixed;
		left:0;
		bottom:0;
		z-index:50;
		width:100%;
		height:0.48rem;
		.content{
			display:flex;
			background:#141d27;
			font-size:0;
			.content-left{
				flex:1;
				.logo-wrapper{
					display:inline-block;
					position:relative;
					top:-0.1rem;
					margin:0 0.12rem;
					padding:0.06rem;
					width:0.56rem;
					height:0.56rem;
					box-sizing:border-box;
					vertical-align:top;
					border-radius:50%;
					background:#141d27;
					z-index:100;
					.logo{
						width:100%;
						height:100%;
						border-radius:50%;
						text-align:center;
						background:#2b343c;
						&.highlight{
							background:rgb(0,160,220);
						}
						.icon-shopping-cart{
							font-size:0.24rem;
							color:#80858a;
							line-height:0.40rem;
							&.highlight{
								color:#fff
							}
						}
					}
					.num{
						position:absolute;
						overflow:hidden;
						top:0;
						right:0;
						width:0.24rem;
						height:0.16rem;
						line-height:0.16rem;
						text-align:center;
						border-radius:0.16rem;
						font-size:0.09rem;
						font-weight:700;
						color:#fff;
						background:rgb(240,20,20);
						box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,0.4);
					}
				}
				.price{
					display:inline-block;
					vertical-align:top;
					margin-top:0.12rem;
					line-height:0.24rem;
					padding-right:0.12rem;
					box-sizing:border-box;
					border-right:1px solid rgba(255,255,255,0.1);
					font-size:0.16rem;
					font-weight:700;
					color:rgba(255,255,255,0.4);
					&.highlight{
						color:#fff
					}
				}
				.desc{
					display:inline-block;
					vertical-align:top;
					margin:0.12rem 0 0 0.12rem;
					line-height:0.24rem;
					color:rgba(255,255,255,0.4);
					font-size:0.1rem;
				}
			}
			.content-right{
				flex:0 0 1.05rem;
				width:1.05rem;
				.pay{
					height:0.48rem;
					line-height:0.48rem;
					text-align:center;
					font-size:0.12rem;
					color:rgba(255,255,255,0.4);
					font-weight:700;
					&.not-enough{
						background:#2b333b;
					}
					&.enough{
						background:#00b43c;
						color:#fff;
					}
				}
			}
		}
		.ball-container{
			.ball{
				position:fixed;
				left:0.32rem;
				bottom:0.22rem;
				z-index:200;
				.inner{
					width:0.16rem;
					height:0.16rem;
					border-radius:50%;
					/*background:#00A0DC;*/
				}
			}
		}
		/*c3动画设置*/
		.slide-fade-enter-active {
		  	transition: all .8s ease;
		}
		.slide-fade-leave-active {
		  	transition: all .8s ease;
		}
		.slide-fade-enter, .slide-fade-leave-active {
		  	transform: translateY(2.17rem);
		  	/*transform:rotate(360deg);*/
		  	opacity: 0;
		}
		
		.fade-enter-active {
		  	transition: all .8s ease;
		}
		.fade-leave-active {
		  	transition: all .8s ease;
		}
		.fade-enter, .fade-leave-active {
		  	transform: translateY(2.17rem) rotateX(90deg);
		  	/*transform:rotate(360deg);*/
		  	opacity: 0;
		}
		.shopcart-list{
			position:absolute;
			left:0;
			bottom:100%;
			z-index:-1;
			width:100%;
			.list-header{
				height:0.4rem;
				line-height:0.4rem;
				padding:0 0.18rem;
				background:#f3f5f7;
				border-bottom:1px solid rgba(7,17,27,0.1);
				.title{
					float:left;
					font-size:0.14rem;
					color:#2C3E50;
				}
				.empty{
					float:right;
					font-size:0.12rem;
					color:#007AFF;
				}
			}
			.list-content{
				padding:0 0.18rem;
				max-height:2.17rem;
				overflow:hidden;
				background:#fff;
				.food{
					position:relative;
					padding:0.12rem 0;
					box-sizing:border-box;
					border-bottom:1px solid rgba(7,17,27,0.1);
				}
				.name{
					line-height:0.24rem;
					font-size:0.14rem;
					color:#333333;
				}
				.price{
					position:absolute;
					right:0.9rem;
					bottom:0.12rem;
					font-size:0.14rem;
					font-weight:700;
					color:#333333;
				}
				.cartcontrol-wrapper{
					position:absolute;
					right:0;
					bottom:0.06rem;
					
				}
			}
		}
		.list-mask{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:-2;
			/*模糊效果*/
			background-filter:blur(10px);
			background:rgba(7,17,27,0.6);
			
		}
	}
</style>
