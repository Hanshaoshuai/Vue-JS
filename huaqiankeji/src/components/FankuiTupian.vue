<template>
	<div class="tupian clearbox" id="tupian">
		<div class="left-img" id="preview">
			<label>
				<img ref="" id="imghead" src='./tianjia_gray.png'>
				<input class="inputs" ref="file" type="file" @change="previewImage()" />
			</label>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	import { Toast } from 'mint-ui';
	export default {
		props:{
//			seller:{
//				type:Object
//			}
		},
		data () {
			return {
				images:[],
				index:'0',
				zipFormData:""
			}
		},
		mounted(){
			this.zipFormData = new FormData();			//把要传的内容和参数放到   formdata中
		},
		methods:{
			previewImage(){
				var that=this;
				var file=this.$refs.file
				var div = document.getElementById('preview');
	          	var box = document.getElementById('tupian');
				if(this.index*1==3){
					Toast("亲，最多可上传三张图片！");
					return;
				}
//				console.log(file.files)
				var divs=document.createElement("div");
				var imgs=document.createElement("img");
				var spans=document.createElement("span");
				divs.id="add";
				imgs.id="png"
				divs.style.display="inline-block";
				divs.style.height="0.8rem";
				divs.id=this.index;
				divs.setAttribute("class","addbox")
				spans.style.display="inline-block";
				spans.style.width="0.26rem";
				spans.style.height="0.26rem";
				spans.style.backgroundImage="url(../../dist/u5455.png)";
				spans.style.backgroundSize="0.26rem 0.26rem";
				divs.appendChild(imgs);
				imgs.style.height="100%";
				divs.appendChild(spans);
	          	box.insertBefore(divs,box.children[0]);
	          	if(file.files && file.files[0]){
	              	var img = document.getElementById('imghead');
	              	this.index=this.index*1
	              	this.images[this.index]=file.files[0];             //文件存储起来
//	              	console.log(this.images)
	              	img.onload = function(){
	              		this.style.width="0.8rem";
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
//			              	console.log(imgsWidth)
							divs.style.width=imgsWidth;
							divs.style.position="relative";
							spans.style.position="absolute";
							spans.style.top="0rem";
							spans.style.right="0.03rem";
							divs.onclick=function(e){
								that.index=that.index*1
//								var length=that.images.length;
								that.images[this.id]="";
//								console.log(that.images)
								if ( e && e.stopPropagation ){ 
								    //因此它支持W3C的stopPropagation()方法 
								    e.stopPropagation(); 
								}else {
								    //否则，我们需要使用IE的方式来取消事件冒泡 
								    window.event.cancelBubble = true; 
								}
								this.remove(this);
								file.value="";
//								console.log(file)
//								console.log(that.images)
								that.index-=1
								that.$emit("to-parent",that.images);//广播出存的内容
							}
	              		}
	              	}
	              	reader.readAsDataURL(file.files[0]);
	              	this.index+=1;
	              	that.$emit("to-parent",that.images);//广播出存的内容
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
			width:0.8rem;
			height:0.8rem;
			overflow:hidden;
			/*border:0.006rem solid #EAEAEA;*/
			box-sizing:border-box;
			label{
				width:0.8rem;
				height:0.8rem;
				background:#fff;
				position:relative;
				overflow:hidden;
				display:flex;
				-webkit-box-pack: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    align-items: center;
				#imghead{
					height:0.8rem;
					height:0.8rem;
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
