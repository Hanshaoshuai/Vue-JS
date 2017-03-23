<template>
	<div class="header">
		<ul class="tu">
			<li class="iconfont">&#xe605;</li>
			<li class="iconfont">
				<span>&#xe6a2;</span>
				<input type="text" placeholder="请输入搜索内容" v-model="search" list="datalist"/>
				<font>&#xe65a;</font>
				<datalist id="datalist" >
					<option v-for="item of list" :value="item" :label="search" ></option>
				</datalist>
			</li>
			<li class="iconfont">&#xe604;</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		/*
		 data:function(){
		 	return {
		 		msg: "我是组件模板的数据"
		 	}
		 }
		 
		 data: () => {
		 	return {
		 		msg: "我是组件模板的数据"
		 	}
		 }
		 * */
		data () {
			return {
				msg: "我是组件模板的数据",
				search:"",
				list:[],
				timer:""//定时器
			}
		},
		methods:{
				requestData:function(url){
					//ajax请求
					this.$http.jsonp(url,{
						jsonp:"cb"
					}).then(function(response){
						console.log(JSON.parse(response.bodyText).s);
						this.list = JSON.parse(response.bodyText).s;
					})
				}
			},
			watch:{
				search:function(newVal){
					var that = this;
					clearTimeout(this.timer);
					
					this.timer=setTimeout(function(){
						//接口地址
						var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+newVal;
						that.requestData(url)
					},200)
					
					
				}
			}
	}
</script>

<style>
	.tu{
		width:100%;height:100%;display:flex;
	}
	.tu .iconfont{
		font-size:24px;
		height:100%;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.tu .iconfont:nth-child(1){
		width:50px;
	}
	.tu .iconfont:nth-child(3){
		width:50px;
	}
	.tu .iconfont:nth-child(2){
		position:relative;
		font-size:20px;
		flex:1;
	} 
	.tu .iconfont span{
		position:absolute;left:8px;top:10px;color:#d2d2d2;
	}
	.tu .iconfont font{
		position:absolute;right:8px;top:10px;color:#d2d2d2;background:#ffffff;
	}
	.tu .iconfont:nth-child(2) input{
		width:90%;height:30px;padding-left:10%;border-radius:8px;font-size:14px;color:#959595;
	}
	#datalist{
		position:absolute;right:0px;top:50px;color:#cfcfcf;
	}
	#datalist option{color:#cfcfcf;}
	/*#datalist li{white-space:normal;强制不换行;word-break:break-all;分割强制换行;word-wrap:break-word:不分割强制换行}*/
</style>