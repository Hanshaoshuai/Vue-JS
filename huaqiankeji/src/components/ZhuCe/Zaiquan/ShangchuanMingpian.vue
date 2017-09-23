<template>
	<div class="tupian">
		<div class="left-img" id="preview">
			<label>
				<img ref="" id="imghead" src='./u740.png'>
				<input class="inputs" ref="file" type="file" @change="previewImage()" />
			</label>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	export default {
		props:{
//			seller:{
//				type:Object
//			}
		},
		data () {
			return {
				msg: "我是组件模板的数据"
			}
		},
		mounted(){
			
		},
		methods:{
			previewImage(){
				var file=this.$refs.file
				console.log(file.files)
	          	var div = document.getElementById('preview');
	          	if(file.files && file.files[0]){
	              	var img = document.getElementById('imghead');
	              	img.onload = function(){
	              		this.style.width="1rem";
//	              		console.log(this.clientWidth)
//	              		var width=this.clientWidth+"px"
	              		var height=this.clientHeight+"px"
//	              		console.log(width)
//	              		div.style.width=width;
	              		div.style.height=height;
		            }
	              	var reader = new FileReader();
	              	reader.onload = function(evt){img.src = evt.target.result;}
	              	reader.readAsDataURL(file.files[0]);
	          	}else{
	            	var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	            	file.select();
	            	var src = document.selection.createRange().text;
	            	var img = document.getElementById('imghead');
	            	img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	          	}
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
	.tupian{
		width:100%;
		height:auto;
		.left-img{
			margin:0 auto;
			width:1rem;
			height:1rem;
			overflow:hidden;
			border:0.005rem solid #EAEAEA;
			label{
				width:100%;
				height:100%;
				background:#fff;
				position:relative;
				overflow:hidden;
				display:flex;
				-webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
				#imghead{
					/*height:100%;*/
					filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);
				}
				.inputs{
					position:absolute;
					width:80%;
					left:0.06rem;
					top:0.1rem;
					z-index:-1;
					
				}
			}
		}
	}
	
</style>
