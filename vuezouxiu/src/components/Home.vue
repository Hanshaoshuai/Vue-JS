<template>
	<div class="banners">
		<div class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div v-for="item in bannerlist" class="swiper-slide" style="background-color: #0f0;">
						<img :src="item" />
					</div>
					<!--<div class="swiper-slide"  style="background-color: #f00;">2</div>
					<div class="swiper-slide"  style="background-color: #00f;">3</div>-->
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="tuli">
			<ul class="list">
				<li class="lists" v-for="item in prolist">
					<!--<img :src="item.goodsListImg" alt="" /><button @click="addCart(item.goodsID)">加入购物车</button>-->
					<span class="tu1"><img :src="item.goodsListImg"/></span>
					<font><a>{{item.className}}</a><br/>{{item.goodsName}}</font>
					<button @click="addCart(item.goodsID,index)">加入购物车</button>
				</li>
			</ul>
		</div>
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
				bannerlist:[],
				prolist:[]
			}
		},
		methods:{
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
			console.log(11111)
			const url = "http://datainfo.duapp.com/shopdata/getBanner.php";
			this.$http.jsonp(url).then(function(response){
//				console.log(response.body);
				var data = response.body;
//				console.log(JSON.parse(data[0].goodsBenUrl)[0])
				var arr = [];
				for(var item of data){
					arr.push(JSON.parse(item.goodsBenUrl)[0]);
				}
//				console.log(arr)
				this.bannerlist = arr;
//				console.log(this.bannerlist)
			},function(err){
				console.log(err)
			})
			
			//请求列表数据
			this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
				.then(function(response){
					console.log(response.body)
					this.prolist = response.body;
				})
			
			
		},
		updated:function(){
			console.log("ssssssssssssssssssssssssssssssssssss")
			var swiper = new Swiper(".swiper-container",{
				direction:"horizontal",
				autoplay :3000,
				loop:true,
				autoplayDisableOnInteraction:false,
				pagination:".swiper-pagination"
			})
		}
		
	}
</script>

<style>
	.banners{
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		overflow:hidden;
	}
	.swiper-container{
		width: 100%;
		height: 200px;
		background-color: #00f;
	}
	.tuli{
		width:100%;
		flex:1;
		overflow-y:auto;
	}
	.tuli .list{
		width:100%;
		height:auto;
		
	}
	/*.lists{
		width:100%;
		height:150px;
		border-bottom:1px #999999 solid;
		box-sizing:border-box;
	}
	.lists img{width:100px;margin:0;}*/
	.cart ul .lists{
		width:100%;
		height:160px;
		border-bottom:1px #999999 solid;
		box-sizing:border-box;
		position:relative;
	}
	.lists .tu1{
		height:160px;display:flex;flex-direction:column;justify-content:center;float:left;margin-left:20px;
	}
	.lists .tu1 img{
		width:100px;
	}
	.lists font{
		width:60%;float:left;margin:30px 0 0 20px;
	}
	.lists font a{
		margin-bottom:4px;color:red;display:inline-block;
	}
	.lists button{
		position:absolute;right:30px;bottom:30px;
	}
</style>