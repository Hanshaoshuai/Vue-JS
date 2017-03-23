

<template>
	<div class="banners1">
		<ul class="list">
			<li class="lists" v-for="item in prolist">
				<span class="tu1"><img :src="item.goodsListImg" alt="" /></span>
				<font><a>{{item.className}}</a><br/>{{item.goodsName}}</font>
				<button @click="addCart(item.goodsID)">加入购物车</button>
			</li>
		</ul>
		<div id="kong"></div>
	</div>
</template>

<script>
	console.log("root home")
	console.log(__dirname)
	export default {
		test:"home测试",
		data () {
			return {
				msg: "我是组件模板的数据",
				goodsName:"",
				prolist:[],
				classID:'',
				classname:""
			}
		},
		methods:{
			play (index) {
				alert(index)
				this.classID=index;
				console.log(localStorage.getItem("classname"))
			},
			addCart (goodsID) {
				if(localStorage.getItem("userID")&&localStorage.getItem("userID")!==""){
//					alert("ok");
					//此处调用加入购物车数据接口
//					alert(goodsID)
					this.$http.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
						params:{
							userID:localStorage.getItem("userID"),
							goodsID:goodsID,
							number:1
						}
					}).then(function(response){
						console.log("cart",response.body)
					});
					if(confirm("已成功加入是否进入购物车？")){
						window.location.href = "#/cart";
					}else{
//						alert("jjjj");
					}
					
				}else{
					alert("请先登录");
					window.location.href = "#/login";
				}
			}
		},
		mounted () {
//			if(localStorage.getItem("classname")){
				this.classID=this.$route.params.classid;
				console.log(this.classID)
				var that=this;
				//请求列表数据
				this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php",
					{
						params:{
//							"classID":localStorage.getItem("classname")
							"classID":that.classID
						}
					}
				).then(function(response){
					console.log(response.body)
					this.prolist = response.body;
				},function(err){
					console.log(err);
				})
//			}
		}
	}
</script>

<style>
	.banners1{
		width:100%;
		height:100%;
		overflow-y:auto
	}
	.list{
		width:100%;
		height:auto;
		
	}
	.lists{
		width:100%;
		height:160px;
		border-bottom:1px #999999 solid;
		box-sizing:border-box;
		position:relative;
	}
	.lists .tu1{
		height:160px;display:flex;flex-direction:column;justify-content:center;float:left;margin-left:20px;
	}
	.lists font{
		width:60%;float:left;margin:30px 0 0 20px;
	}
	.lists button{
		position:absolute;right:30px;bottom:30px;
	}
	#kong{
		width:100px;height:61px;
	}
</style>

