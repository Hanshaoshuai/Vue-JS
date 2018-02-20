<template>
	<div class="header">
		<div class="test_box" contenteditable="true"></div>
	</div>
</template>

<script type="text/ecmascript">
	
	export default {
		data () {
			return {
				msg: "我是组件模板的数据"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.test_box{
		width:3.2rem; 
		line-height:0.16rem;
	    min-height: 0.20rem; 
	    max-height: 0.60rem;
	    _height: 0.20rem; 
	    margin-left: auto; 
	    margin-right: auto; 
	    padding: 0.04rem; 
	    outline: 0; 
	    border-bottom: 1px solid #a0b3d6; 
	    font-size: 0.14rem; 
	    word-wrap: break-word;
	    overflow-x: hidden;
	    /*overflow-y: hidden;*/
	    /*overflow-y:visible;*/
	    &::-webkit-scrollbar{width:0;height:0}
	}
</style>
