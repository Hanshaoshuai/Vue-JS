<template>
  <div id="app" >
    <v-header :seller="seller"></v-header>
    <div class="tab box">
    	<div class="tab-item">
    		<router-link to="/goods">商品</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/ratings">评论</router-link>
    	</div>
    	<div class="tab-item">
    		<router-link to="/seller">商家</router-link>
    	</div>
    	<!--<div class="tab-item">
    		<a v-link="{path:'/goods'}">商品</a>
    	</div>
    	<div class="tab-item">
    		<a v-link="{path:'/ratings'}">评论</a>
    	</div>
    	<div class="tab-item">
    		<a v-link="{path:'/seller'}">商家</a>
    	</div>-->
    </div>
    <keep-alive><router-view :seller="seller"></router-view></keep-alive>
  </div>
</template>

<script>
	import {urlParse} from './common/js/util';
	import Header from './components/header/header.vue';
	
	export default {
		name: 'app',
	  data () {
	    return {
	      seller: {
	      	id:(()=>{
	      		let queryParam=urlParse();
	      		console.log(queryParam)
	      		return queryParam.id;
	      	})()
	      }
	    }
	  },
	  created(){
	  	this.$http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?id="+this.seller.id,
            {
                params:{
//							"classID":localStorage.getItem("classname")
                    "classID":2
                }
            }
        ).then((response)=>{
//      	console.log(response.body)
					//合并对象  有3个参数  第一个是返回最终合并的对象  2 3分别是要合并的；
					this.seller=Object.assign({},this.seller,this.seller = response.body[0])
					this.waitLoad = true;
//      	this.seller = response.body[0];
        	console.log(this.seller);
        },function(err){
          console.log(err);
        })
	  },
	  components:{
	  	"v-header":Header
	  }
	}
</script>

<style lang="scss">
	/*@import "./common/stylus/mixin.scss"*/
	#app{
		.tab{
			display:flex;
			width:100%;
			height:0.40rem;
			line-height:0.40rem;
			font-size:0.14rem;
			position:relative;
	    &:after{
	        display:block;
	        position:absolute;
	        left:0;
	        bottom:0;
	        width:100%;
	        border-top:1px solid rgba(7,17,27,0.1);
	        content:"";
	    }
			/*border-bottom:1px solid rgba(7,17,27,0.1);*/
			/*border-1px(rgba(7,17,27,0.1));*/
			.tab-item{
				flex:1;
				text-align:center;
				&>a{
					display:block;
					font-size:0.14rem;
					color:rgb(77,85,93);
					&.router-link-active{
						color:rgb(240,20,20);
					}
				}
			}
		}
	}
</style>
