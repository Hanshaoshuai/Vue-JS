<template>
	<div class="tupians">
		<div class="left-imgs" id="previews">
			<label>
				<img ref="" id="imgheads" src='./shangchuan.png'>
				<input class="inputs" ref="file" type="file" @change="previewImage()" />
			</label>
		</div>
	</div>
</template>

<script type="text/ecmascript">
	import {URL} from '../common/js/path';
	import { Toast } from 'mint-ui';
	export default {
		props:{
//			seller:{
//				type:Object
//			}
		},
		data () {
			return {
				touxiangID: ""
			}
		},
		mounted(){
			
		},
		methods:{
			previewImage(){
				console.log(URL.path)
				var thata=this;
				var file=this.$refs.file
				console.log(file.files[0])
	          	var div = document.getElementById('previews');
	          	if(file.files && file.files[0]){
	              	var img = document.getElementById('imgheads');
	              	img.onload = function(){
	              		if(this.clientWidth>this.clientHeight){
	              			this.style.width="0.75rem";
	              		}else{
	              			this.style.height="0.75rem";
	              		}
//	              		this.style.width="1rem";
////	              		console.log(this.clientWidth)
////	              		var width=this.clientWidth+"px"
//	              		var height=this.clientHeight+"px"
////	              		console.log(width)
////	              		div.style.width=width;
//	              		div.style.height=height;
		            }
	              	var reader = new FileReader();
	              	reader.onload = function(evt){
	              		if(!(file.files[0].type.indexOf('image')==0 && file.files[0].type && /\.(?:jpg|png|gif)$/.test(file.files[0].name)) ){  
					        Toast('图片只能是jpg,gif,png');  
					        return ;
					    } 
	              		img.src = evt.target.result;
	              		var zipFormData = new FormData();
						zipFormData.append('filename', file.files[0], 'test.zip')
	              		
	              		console.log(zipFormData)
	              		thata.shangchuan(zipFormData)
	              	}
	              	reader.readAsDataURL(file.files[0]);
	          	}else{
	            	var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	            	file.select();
	            	var src = document.selection.createRange().text;
	            	var img = document.getElementById('imgheads');
	            	img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	          	}
	        },
			shangchuan(urlfrom){
				console.log(urlfrom)
				var data={
					upload_file:urlfrom,
					terminalNo:3
				}
				this.$http.post(URL.path2+'upload/photo',data,{emulateJSON:true}).then(function(res){
                    console.log(res);
                    if(res.body.returnCode=='0011'){
						Toast(res.body.msg);
					}else{
						if(res.body.returnCode=='200'){
							this.timesgo();
						}else{
							Toast("系统正忙请稍后！");
						}
					}
                },function(res){
                	this.touxiangID='5093';
                	Toast("系统正忙请稍后！");
                    console.log(res);
                });
			},
			touxiang(){
				return this.touxiangID;
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
	.tupians{
		width:100%;
		height:auto;
		.left-imgs{
			margin:0 auto;
			width:0.75rem;
			height:0.75rem;
			overflow:hidden;
			border-radius:0.06rem;
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
				#imgheads{
					/*width:100%;*/
					height:100%;
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
