<template>
	<div class="split">
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

<style lang="scss">
	.split{
		width:100%;
		height:0.16rem;
		border-top:1px solid rgba(7,17,27,0.1);
		border-bottom:1px solid rgba(7,17,27,0.1);
		background:#f3f5f7;
	}
</style>
