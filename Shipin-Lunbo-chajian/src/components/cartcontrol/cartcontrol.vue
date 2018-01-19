<template>
	<div class="cartcontrol">
		<transition name="slide-fade">
			<div class="cart-decrease" v-show="food.id>0" @click.stop.prevent="decreaseCart">-</div>
		</transition>
		<transition name="slide">
			<div class="cart-count" v-show="food.id>0">{{food.id}}</div>
		</transition>
		<div class="cart-add" @click.stop.prevent="addCart">+</div>
	</div>
</template>

<script type="text/ecmascript">
	//引入vue接口
	import Vue from "vue";
	export default {
		props:{
			food:{
				type:Object
			}
		},
		data () {
			return {
				msg: "我是组件模板的数据"
			}
		},
		methods:{
			addCart(event){
				if(!event._constructed){
					return;
				}
				if(!this.food.id){
					//通过Vue.set添加属性
					Vue.set(this.food,"id",1);
				}else{
					this.food.id++;
				}
				//子组件$emit方法广播操作
				this.$emit("to-parent",event.target);
			},
			decreaseCart(event){
				if(!event._constructed){
					return;
				}
				if(this.food.id){
					this.food.id--;
				}
			}
		},
		created(){
			
		}
	}
</script>

<style lang="scss">
	.cartcontrol{
		font-size:0;
		/*c3动画设置*/
		.slide-fade-enter-active {
		  	transition: all .8s ease;
		}
		.slide-fade-leave-active {
		  	transition: all .8s ease;
		}
		.slide-fade-enter, .slide-fade-leave-active {
		  	transform: translateX(0.5rem) rotate(1000deg);
		  	/*transform:rotate(360deg);*/
		  	opacity: 0;
		}
		.slide-enter-active {
		  	transition: all .8s ease;
		}
		.slide-leave-active {
		  	transition: all .8s ease;
		}
		.slide-enter, .slide-leave-active {
		  	opacity: 0;
		}
		
		
		.cart-decrease,.cart-add{
			display:inline-block;
			padding:0.06rem;
			line-height:0.24rem;
			font-size:0.24rem;
			color:#00A0DC;
		}
		.cart-count{
			display:inline-block;
			padding:0.06rem;
			vertical-align:top;
			width:0.13rem;
			line-height:0.24rem;
			text-align:center;
			font-size:0.1rem;
			color:#2C3E50;
		}
		.cart-add{
			
		}
	}
</style>
