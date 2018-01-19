<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
	</div>
</template>

<script type="text/ecmascript">
	const LENGTH=5;
	const CLS_ON="on";
	const CLS_HALF="half";
	const CLS_OFF="off";
	
	export default {
		props:{
			size:{
//				type:Number
			},
			score:{
//				type:String
			}
		},
		computed:{
			starType(){
				return "star-"+this.size;
			},
			itemClasses(){
				let result=[];
				let score=Math.floor(this.score*2)/2;
				let hasDecimal=score%1!==0;
				console.log(score%1)
				let integer=Math.floor(score);
				for(let i = 0; i<integer; i++){
					result.push(CLS_ON);
				}
				if(hasDecimal){
					result.push(CLS_HALF);
				}
				while(result.length<LENGTH){
					result.push(CLS_OFF);
				}
				return result
			}
		},
		data () {
			return {
				msg: "我是组件模板的数据"
			}
		}
	}
</script>

<style lang="scss">
	.star{
		font-size:0;
		.star-item{
			display:inline-block;
			background-repeat:no-repeat;	
		}
		&.star-48{
			.star-item{
				width:0.2rem;
				height:0.2rem;
				margin-right:0.22rem;
				background-size:0.2rem 0.2rem;
				&:last-child{
					margin-right:0;
				}
				&.on{
					background-image:url("star48_on@2x.png");
				}
				&.half{
					background-image:url("star48_half@2x.png");
				}
				&.off{
					background-image:url("star48_off@2x.png");
				}
			}
		}
		&.star-36{
			.star-item{
				width:0.15rem;
				height:0.15rem;
				margin-right:0.06rem;
				background-size:0.15rem 0.15rem;
				&:last-child{
					margin-right:0;
				}
				&.on{
					background-image:url("star36_on@2x.png");
				}
				&.half{
					background-image:url("star36_half@2x.png");
				}
				&.off{
					background-image:url("star36_off@2x.png");
				}
			}
		}
		&.star-24{
			.star-item{
				width:0.1rem;
				height:0.1rem;
				margin-right:0.03rem;
				background-size:0.1rem 0.1rem;
				&:last-child{
					margin-right:0;
				}
				&.on{
					background-image:url("star24_on@2x.png");
				}
				&.half{
					background-image:url("star24_half@2x.png");
				}
				&.off{
					background-image:url("star24_off@2x.png");
				}
			}
		}
		
	}
</style>
