<template>
	<div class="tupian clearbox" id="tupian">
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
				var divs=document.createElement("div");
				var imgs=document.createElement("img");
				var spans=document.createElement("span");
				divs.id="add";
				imgs.id="png"
				divs.style.display="inline-block";
				divs.style.height="1rem";
				spans.style.display="inline-block";
				spans.style.width="0.26rem";
				spans.style.height="0.26rem";
				spans.style.backgroundImage="url(../../dist/u5455.png)";
				spans.style.backgroundSize="0.26rem 0.26rem";
				divs.appendChild(imgs);
				imgs.style.height="100%";
				divs.appendChild(spans);
	          	var div = document.getElementById('preview');
	          	var box = document.getElementById('tupian');
	          	box.insertBefore(divs,box.children[0]);
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
	              	reader.onload = function(evt){
	              		imgs.src = evt.target.result;
	              		imgs.onload=function(){
	              			var imgsWidth=document.getElementById('png').clientWidth+"px";
			              	console.log(imgsWidth)
							divs.style.width=imgsWidth;
							divs.style.position="relative";
							spans.style.position="absolute";
							spans.style.top="0rem";
							spans.style.right="0.03rem";
							divs.onclick=function(e){
								if ( e && e.stopPropagation ){ 
								    //因此它支持W3C的stopPropagation()方法 
								    e.stopPropagation(); 
								}else {
								    //否则，我们需要使用IE的方式来取消事件冒泡 
								    window.event.cancelBubble = true; 
								}
								this.remove(this);
							}
	              		}
	              	}
	              	reader.readAsDataURL(file.files[0]);
	          	}else{
	            	var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	            	file.select();
	            	var src = document.selection.createRange().text;
	            	var img = document.getElementById('imghead');
	            	imgs.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
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
		zoom:1;
		&.clearbox:after{
			clear:both;
			display:block;
			overflow:hidden;
			height:0;
			content:".";
		}
		.left-img{
			display:inline-block;
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
					width:100%;
					height:100%;
					opacity:0;
					left:0rem;
					top:0rem;
					/*z-index:-1;*/
				}
			}
		}
	}
	
</style>
