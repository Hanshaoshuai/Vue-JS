<template>
	<div class="liebiaos">
		<div class="hang">
		<ul class="hangs">
			<!--<li class="liebiao" v-for="(item,index) in prolist" @click="play(item.classID)">
				<span>{{item.className}}</span>
			</li>-->
			
			<li @click="play(item.classID)" class="liebiao" v-for="(item,index) in prolist">
				<router-link :to="{name:'Kindlist',params:{classid:item.classID}}"><span>{{item.className}}</span></router-link>
			</li>
		</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				msg: "我是组件模板的数据list",
				bannerlist:[],
				prolist:[],
				classID:""
			}
		},
		methods:{
			play (index) {
//				alert(index)
				this.classID=index;
				localStorage.setItem("classname",index),
				console.log(localStorage.getItem("classname"))
//				window.location.href = "#/kindlist";
			}
		},
		mounted () {
//			if(localStorage.getItem("userID")&&localStorage.getItem("userID")!==""){
//					alert("ok");
				//此处调用加入购物车数据接口
//					alert(goodsID)
				this.$http.get("http://datainfo.duapp.com/shopdata/getclass.php")
				.then(function(response){
					console.log(response.body)
					this.prolist = response.body;
				})
//			}else{
//				alert("请先登录");
//				window.location.href = "login/kindlist";
//			}
			
		},
//		$route:function(){
//			alert(this.classID);
//		},
//		updated:function(){
//			
//		}
	}
</script>

<style>
	.liebiaos{
		width:100%;
		height:100%;
		overflow:hidden;
	}
	.liebiaos .hang{
		width:100%;height:60px;overflow-y:auto;border-bottom:1px #CFCFCF solid;
		/*flex-direction:column;justify-content:center;*/
	}
	.liebiaos .hang .hangs{
		width:1148px;height:60px;float:left;
	}
	.liebiaos .hang .hangs .router-link-active{
		background:#454545;color:#ffffff;height:60px;display:inline-block;
	}
	.liebiaos .hang .liebiao{
		float:left;text-align:center;
	}
	.liebiaos .hang .liebiao span{
		line-height:60px;font-size:20px;padding:0 19px 0 19px;
		
	}
	
	
</style>