<template>
	<div class="ratingselect">
		<div class="rating-type">
			<span @click.stop="select(2,$event,'59')" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">6</span></span>
			<span @click.stop="select(0,$event,'246')" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">6</span></span>
			<span @click.stop="select(1,$event,'239')" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">6</span></span>
		</div>
		<div @click.stop="toggleContent" class="switch" :class="{'on':onlyContent}">
			<span class="icon-check_circle">@</span>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	const POSITIVE=0;
	const NEGATIVE=1;
	const ALL=2;
	
	export default {
		props:{
			ratings:{
//				type:Array,
				default(){
					return [];
				}
			},
//			selectType:{
////				type:Numebe,
//				default:ALL
//			},
//			onlyContent:{
////				type:Boolean,
//				default:false
//			},
			desc:{
				type:Object,
				default(){
					return {
						all:"全部",
						positive:"满意",
						negative:"不满意"
					}
				}
			}
		},
		data () {
			return {
				selectType: 2,
				onlyContent:false
			}
		},
		computed:{
			positives(){
//				return this.ratings.filter((rating)=>{
//					return rating.rateType===POSITIVE;
//				})
			},
			negatives(){
//				return this.ratings.filter((rating)=>{
//					return rating.rateType===NEGATIVE;
//				})
			}
		},
		methods:{
			select(type,event,number){
				if(!event._constructed){
					return;
				}
				this.selectType=type;
				this.ratings.id=number;
			},
			toggleContent(event){
				if(!event._constructed){
					return;
				}
				this.onlyContent=!this.onlyContent;
			}
		}
	}
</script>

<style lang="scss">
	.ratingselect{
		.rating-type{
			padding:0.18rem 0;
			margin:0 0.18rem;
			border-bottom:1px solid rgba(7,17,27,0.1);
			font-size:0;
			.block{
				display:inline-block;
				padding:0.08rem 0.12rem;
				margin-right:0.08rem;
				border-radius:0.01rem;
				font-size:0.12rem;
				line-height:0.16rem;
				color:#4D555D;
				&.active{
					color:#fff;
				}
				&.positive{
					background:rgba(0,160,220,0.2);
					&.active{
						background:rgb(0,160,220);
					}
				}
				&.negative{
					background:rgba(77,85,93,0.2);
					&.active{
						background:rgb(77,85,93);
					}
				}
				.count{
					font-size:0.08rem;
					margin-left:0.02rem;
				}
			}
		}
		.switch{
			padding:0.12rem 0.18rem;
			line-height:0.24rem;
			border-bottom:1px solid rgba(7,17,27,0.1);
			color:#93999F;
			font-size:0;
			&.on{
				.icon-check_circle{
					color:#00c850;
				}
			}
			.icon-check_circle{
				display:inline-block;
				vertical-align:top;
				margin-right:0.04rem;
				font-size:0.24rem;
			}
			.text{
				display:inline-block;
				vertical-align:top;
				margin-right:0.04rem;
				font-size:0.12rem;
			}
		}
	}
</style>
