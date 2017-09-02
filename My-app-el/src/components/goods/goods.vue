<template>
	<div class="goods">
		<div class="menu-wrapper" ref="betterscroll_menu">
			<ul>
				<li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
					<span class="text">
						<span class="icon" :class="classMap[index]"></span>{{item.name}}
					</span>
				</li>
				<li class="menu-item">
					<span class="text">新人专区</span>
				</li>
				<li class="menu-item">
					<span class="text">新人专区</span>
				</li>
				<li class="menu-item">
					<span class="text">新人专区</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="betterscroll_foods">
			<ul>
				<li v-for="item in goods" class="dood-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li @click="selectsFood(food,$event)" v-for="food in goods" class="food-item">
							<div class="icon">
								<img :src="img" />
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.name}}</p>
								<div class="extra">
									<span class="count">月售{{food.id}}</span>
									<span>好评{{food.id}}%</span>
								</div>
								<div class="price">
									<span class="now">${{food.id}}</span>
									<span class="old">${{food.id}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<cartcontrol @to-parent="getChildData" :food="food"></cartcontrol>
								</div>
							</div>
						</li>
					</ul>
					<input type="text" placeholder="cheshi" />
				</li>
			</ul>
		</div>
		<shopcart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.classID" :min-price="seller.classID"></shopcart>
		<food ref="food" :food="selectFood"></food>
	</div>
</template>

<script type="text/ecmascript">
	import BScroll from "better-scroll";
	import shopcart from "../shopcart/shopcart.vue";
	import cartcontrol from "../cartcontrol/cartcontrol.vue";
	import food from "../food/food.vue";
	export default {
		props:{
			seller:{
				type:Object
			}
		},
		data () {
			return {
				goods:[],
				listHeight:[],//存入高度的数组
				scrollY:0,
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
				selectFood:{},
				img:"http://g-search3.alicdn.com/img/bao/uploaded/i4/i1/TB1EmgpJXXXXXbTXVXXXXXXXXXX_!!0-item_pic.jpg_180x180.jpg_.webp"
			}
		},
//		Vue中computed就是 实时计算 使用。
//		Vue检测到数据发生变动时就会执行对相应数据有引用的函数。
//		下面是一个demo。引用自己的vue.js就可以看效果。
//		利用computed可以做一些监控之类的效果。
		computed:{
			currentIndex(){
				for(let i =0; i<this.listHeight.length;i++){
					let height1=this.listHeight[i];
					let height2=this.listHeight[i+1];
//					console.log(this.listHeight)
					if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
						return i;
					}
				}
				return 0;
			},
			selectFoods(){
				let foods=[];
				this.goods.forEach((good)=>{
//					good.foods.forEach((food)=>{
						if(good){
							foods.push(good);
						}
//					});
				});
				console.log(foods)
				return foods;
			}
		},
		created(){
			this.classMap=["decrease","discount","guarantee","invoice","special","discount","guarantee","invoice"];
			
			var that=this;
			const url = "http://121.196.218.57/index.php/api/index/category/";
			this.$http({
				method:'GET',
                url:url  //this指data
			}).then(function(response){
				console.log(response.body);
				this.goods = response.body.data;
				console.log((this.goods))
//				dom更新后在执行使用$refs
				this.$nextTick(function() {
					this.initScroll();
					//计算高度的方法
					this._calculateHeight();
				});
			})
		},
		methods:{
			selectsFood(food,event){
				if(!event._constructed){
					return;
				}
				this.selectFood=food;
				this.$refs.food.show();
			},
			initScroll(){
				this.betterscroll=new BScroll(this.$refs.betterscroll_menu,{
					click:true
				});
				this.betterscroll=new BScroll(this.$refs.betterscroll_foods,{
					click:true,probeType:3//probeType：3相当于实时监听高度位置
				});
				//通过betterscroll对象监听一个scroll事件，当scroll滚动时能够暴露出来，参数pos就是位置
				this.betterscroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y));
				});
			},
			//点击联动
			selectMenu(index,event){
				if(!event._constructed){
					return;
				}
				let foodList=this.$refs.betterscroll_foods.getElementsByClassName("food-list-hook");
				let el =foodList[index];
				//再调用scrollToElement接口有两个参数一个是dom一个是滚动时间
				this.betterscroll.scrollToElement(el,300);
			},
			//滑动联动
			_calculateHeight(){
				let foodList=this.$refs.betterscroll_foods.getElementsByClassName("food-list-hook")
				let height=0;
				this.listHeight.push(height);
				for(let i =0; i<foodList.length;i++){
					let item=foodList[i];
					height+=item.clientHeight;
					this.listHeight.push(height);
					
				}
			},
//			接受子组件函数
			getChildData(target){
				this.$refs.shopcart.drop(target);
			}
		},
		components:{
			shopcart,
			cartcontrol,
			food
		},
		events:{
			
		}
	}
</script>

<!--<style lang="less" rel="stylesheet/less">

</style>-->
<style lang="scss" >
	.goods{
		position:absolute;
		display:flex;
		top:1.74rem;
		bottom:0.46rem;
		width:100%;
		overflow:hidden;
		.menu-wrapper{
			flex:0 0 0.8rem;
			width:0.8rem;
			background:#f3f5f7;
			.menu-item{
				display:table;/*垂直居中设置*/
				height:0.54rem;
				width:0.56rem;
				padding:0 0.12rem;
				line-height:0.14rem;
				&.current{
					position:relative;
					margin-top:-0.01rem;
					z-index:10;
					background:#fff;
					font-weight:700;
					.text{
						border:none;
					}
				}
				.text{
					display:table-cell;
					width:0.56rem;
					vertical-align:middle;
					border-bottom:1px solid rgba(7,17,27,0.1);
					font-size:0.12rem;
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
							background-image:url("decrease_3@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.discount{
							/*bg-imge("")*/
							background-image:url("discount_3@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.guarantee{
							/*bg-imge("")*/
							background-image:url("guarantee_3@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.invoice{
							/*bg-imge("")*/
							background-image:url("invoice_3@2x.png");
							background-size:0.12rem 0.12rem;
						}
						&.special{
							/*bg-imge("")*/
							background-image:url("special_3@2x.png");
							background-size:0.12rem 0.12rem;
						}
					}
				}
			}
		}
		.foods-wrapper{
			flex:1;
			.title{
				padding-left:0.14rem;
				height:0.26rem;
				line-height:0.26rem;
				border-left:2px solid #d9dde1;
				font-size:0.12rem;
				color:#93999f;
				background:#f3f5f7;
			}
			.food-item{
				display:flex;
				margin:0.18rem;
				padding-bottom:0.18rem;
				border-bottom:1px solid rgba(7,17,27,0.1);
				&:last-child{
					border:none;
					margin-bottom:0;
				}
				.icon{
					width:0.57rem;
					height:0.57rem;
					flex:0 0 0.57rem;
					margin-right:0.1rem;
					img{
						width:0.57rem;
						height:0.57rem;
					}
				}
				.content{
					flex:1;
					position:relative;
					.name{
						margin:0.02rem 0 0.08rem 0;
						height:0.14rem;
						line-height:0.14rem;
						font-size:0.14rem;
						color:#07111b;
					}
					.desc,.extra{
						margin-bottom:0.08rem;
						line-height:0.1rem;
						font-size:0.1rem;
						color:#93999f;
					}
					.desc{
						margin-bottom:0.08rem;
					}
					.extra{
						&.count{
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
						right:0;
						bottom:0.12rem;
					}
				}
			}
		}
	}
</style>