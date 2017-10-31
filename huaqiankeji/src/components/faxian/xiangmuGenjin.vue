<template>
	<transition name="fade">
		<div v-show="showFlag" class="wenzhang">
			<div class="xiangmu-header">
				<span v-show="fanhui" class="xiangmu-left" @click.stop="listnone1()"><img src="./img/back.png"/></span>
				<span>项目进展询问</span>
			</div>
			<div class="wenzhang-list">
				<div ref="tianjia" class="wenzhang-content">
					<div class="fankiu">
						<div class="tubiao"></div>
						<div class="content-food">
							<span>请您确认</span>
						</div>
					</div>
					<div class="donghuaGo" ref="donghuaGo">
						<div v-for="(item,index) in data" class="list-item">
							<div class="sousuo-content border-topbottom">
								<div class="content-header">
									<font></font>
									<div class="names">
										<span>{{item.com_short}}</span>&nbsp;
										<span>（{{item.com_code}}）</span>
										<span class="right2">（已确认）</span>
										<!--<span class="tue right2">停止跟进</span>-->
									</div>
								</div>
								<div ref="selecteds" class="content-bottom">
									<span class="one src1" @click.stop="xuanZe(item.item_id,'2','0',index,item.send_id)">已过会</span>
									<span class="one src1" @click.stop="xuanZe(item.item_id,'3','1',index,item.send_id)">跟进中</span>
									<span class="one src1" @click.stop="xuanZe(item.item_id,'1','2',index,item.send_id)">已放弃</span>
								</div>
								<div class="type-content">
									<div class="type-cont">
										<ul>
											<font>投资金额</font>
											<input placeholder="请输入投资金额" number="true" type="number" class="mint-field-core border">
											<span>万元&nbsp;</span>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="zhaiyao-food" @click.stop="butten()"><span>保存</span></div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../common/js/path';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	
	
	export default {
		props:{
			childnone:{
//				type:"boolean"
			},
			shifouZhuce:{}
		},
		data () {
			return {
				fanhui:false,
				data:"",
				token:"",
				XiangmuID:"",
				type:"",
				uID:"",
				block:false,
				ButtenName:"88",
				showFlag:false,
				showblock:true,
				items: [],
    			nextNum:[],
    			disnone:true,
    			onlyContent:false,
				tousuContent:"",
				selected:'',		//投诉ids
				selectedID:'3',		//投诉id
				tousuId:"",
				idBlock:true,
				contBlock:false,
				xiangmuMing:"",
				x:0,
				y:0,
				right1DOM:'',
				right2DOM:'',
				index:'',
				item_id:"",
				content:[],
				inputBlock:false,
				p:0,
				got:false
			}
		},
		mounted(){
			var token={
	    		token:localStorage.getItem("token")
	    	}
			if(this.shifouZhuce==2){
				Indicator.open({spinnerType: 'fading-circle'});
	//			项目跟进反馈列表（每月提醒一次）
				this.$http.post(URL.path+'finance/get_feedback',token,{emulateJSON:true}).then(function(res){
					Indicator.close();
					var returnCode=res.body.returnCode
					if(res.body.data.length==0){
						return;
					}
					if(returnCode=="201"){
						this.data=res.body.data;
						this.showFlag=false;
					}else{
						this.data=res.body.data;
						this.showFlag=true;
						this.$nextTick(function(){
							this.right1DOM=this.$refs.donghuaGo.getElementsByClassName("one")
							this.right2DOM=this.$refs.donghuaGo.getElementsByClassName("tue")
							console.log(this.right1DOM)
						})
					}
					console.log("每月提醒一次");
					console.log(res);
				},function(res){
					Indicator.close();
				    console.log(res);
				})
			}
		},
		methods:{
			xuanZe(item_id,follow,list,index,send_id){
				this.genjinJiekou(item_id,follow)
				var that=this;
				var inputNont=this.$refs.donghuaGo.getElementsByClassName("type-content")[index]
				var span=this.$refs.donghuaGo.getElementsByClassName("content-bottom")[index].getElementsByClassName("one")
				var queren=this.$refs.donghuaGo.getElementsByClassName("names")[index].getElementsByClassName("right2")[0]
				var queren2=this.$refs.donghuaGo.getElementsByClassName("names")[index].getElementsByClassName("right2")[0]
				var value=this.$refs.donghuaGo.getElementsByClassName("type-content")[index].getElementsByTagName("input")[0]
				var length=span.length;
//				if(!queren2){
//					return;
//				}
				if(follow!='2'){
					inputNont.setAttribute("class","type-content");
					inputNont.getElementsByClassName("mint-field-core")[0].value='';
				}else{
					inputNont.setAttribute("class","type-content inputNont");
				}
				if(follow==2){
					this.inputBlock=true;
					this.$nextTick(function(){
						if(inputNont.getAttribute("class")=="type-content inputNont"){
							console.log(inputNont.getAttribute("class"))
							value.onblur=function(){
								if(this.value!=""){
									that.content[that.p]={"item_id":item_id,"send_id":send_id,"investment":this.value}
									console.log(that.content[that.p])
									queren.setAttribute("class",'right1')
								}
								this.p+=1
							}
						}
					})
//					console.log(this.content)
				}else{
					if(queren){
						queren.setAttribute("class",'right1')
					}
				}
				for(var i=0; i<length; i++){
					span[i].setAttribute("class","one src1");
				}
				span[list].setAttribute("class","one src2");
			},
			quereng(item_id,name,index){
				var right1=this.$refs.donghuaGo.getElementsByClassName("right")[index]
				if(right1){
					return;
				}
				this.item_id=item_id
				this.index=index
				this.xiangmuMing=name;
				this.onlyContent=true;
				console.log(right1)
			},
			listnone1(){
				this.showFlag=false;
			},
			genjinJiekou(item_id,follow){//投资人更改反馈进度
				var params={
		      		token:localStorage.getItem("token"),
		      		item_id:item_id,		//	项目id	是	[string]		
					follow:follow		//	跟进状态 1:停止跟进 2:已过会 3:继续跟进	是	[string]
		      	}
				this.$http.post(URL.path+'finance/update_feedback',params,{emulateJSON:true}).then(function(res){
					if(res.body.returnCode=='201'){
						
					}
					console.log(res.body);
				},function(res){
				    console.log(res);
				})
			},
			pipeiBlock(){
				this.showFlag=true;
			},
			randomIndex: function () {
		      	return Math.floor(Math.random() * this.items.length)
		    },
		    add: function () {
		    	var tata=this;
		    	setInterval(function(){
					tata.items.splice(tata.items.length, 0, tata.nextNum++)
				},1000)
		    },
		    remove: function () {
		      	this.items.splice(this.randomIndex(), 1)
		    },
			butten(){
				this.$nextTick(function(){
//					var inputNont=this.$refs.donghuaGo.getElementsByClassName("type-content")
//					var vlength=inputNont.length;
//					var to=0;
//					for(var v=0; v<vlength; v++){
//						var vlue=inputNont[v].getElementsByClassName("inputNont")
//						if(vlue.value==''){
//							Toast("请填写投资金额！")
//							to=1;
//						}
//					}
//					if(to==1){
//						return;
//					}
					
					var queren=this.$refs.donghuaGo.getElementsByClassName("names")
					var length=queren.length;
					var chang=0;
					for(var i=0; i<length; i++){
						if(queren[i].getElementsByClassName("right1")[0]){
							chang+=1
						}
					}
					if(this.got==true){
						return;
					}
					if(chang!=length){
						console.log(chang)
						console.log(length)
						Toast("您还有没确认的或未填写金额！")
						return;
					}
					this.got=true;
					var length=this.content.length;
					var content='';
					var content2='';
					var lastcont='';
					var lastcont2='';
					if(length==0){
						this.fanhui=true;
						Toast("您已保存成功")
						return;
					}
					for(var i=0; i<length; i++){
						content=''
						for(var item in this.content[i]){
							content+='"'+item+'"'+':'+this.content[i][item]+','
						}
						for(var x=0; x<content.length-1; x++){
							content2+=content[x]
						}
						lastcont+="{"+content2+"},"
						console.log(content2);
					}
					for(var o=0; o<lastcont.length-1; o++){
						lastcont2+=lastcont[o]
					}
					lastcont='['+lastcont2+']'
		//			保存修改投资额
					var anliParam={
			    		token:localStorage.getItem("token"),
			    		item:lastcont
//			    		item:'[{"item_id":3,"send_id":132,"investment":22},{"item_id":1,"send_id":131,"investment":3}]'
			    	}
					this.$http.post(URL.path+'finance/edit_investment',anliParam,{emulateJSON:true}).then(function(res){
						console.log(res);
						if(res.body.returnCode=='200'){
							Toast("您已保存成功")
							this.fanhui=true;
							this.showFlag=false;
						}
					},function(res){
					    console.log(res);
					})
				})
			},
		},
		events:{
			
		},
		filters:{
		},
		updated(){
		},
		components:{
		}
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active {
	  	transition: all .5s ease;
	}
	.fade-leave-active {
	  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-active {
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	.list-item {
	  	/*display: inline-block;*/
	  	/*margin-right: 10px;*/
	}
	.list-enter-active, .list-leave-active {
	  	transition: all .3s;
	}
	.list-enter, .list-leave-to
	/* .list-leave-active for below version 2.1.8 */ {
	  	opacity: 0;
	  	/*transform: translateX(-4.17rem);*/
	  	transform: translateY(0.5rem);
	}
	.wenzhang{
		position:absolute;
		background:#f5f4f9;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:300;
		.xiangmu-header{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:0.46rem;
			font-weight:600;
			background:#ff7a59;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:310;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding-left:0.16rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
		}
		/*.wenzhang-list::-webkit-scrollbar{width:0px}*/
		.wenzhang-list{
			width:100%;
			height:100%;
			overflow: hidden;
			/*overflow-y:auto;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.wenzhang-content{
				width:95%;
				height:100%;
				margin:0 auto;
				overflow: hidden;
				padding:0.56rem 0 0 0;
				.fankiu{
					width:100%;
					display:flex;
					padding:0.08rem 0 0.1rem 0;
					/*align-items:center;*/
					.tubiao{
						width:0.19rem;
						height:0.17rem;
						background-image:url("./img/fei.png");
						background-size:100% 100%;
						margin:0.04rem 0.04rem 0 0.02rem;
					}
					.content-food{
						line-height:0.22rem;
						color:#6e6e6e;
						/*background:#fff;*/
						span{
							font-size:0.16rem;
						}
					}
				}
				.donghuaGo::-webkit-scrollbar{width:0px}
				.donghuaGo{
					width:100%;
					height:84%;
					overflow-y:auto;
					-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
					.sousuo-content{
						width:100%;
						height:auto;
						padding-bottom:0.12rem;
						background:#fff;
						margin-bottom:0.1rem;
						border-radius:0.02rem;
						/*border:1px solid #ff7a59;*/
						box-sizing:border-box;
						box-shadow: 0.02rem 0.02rem 0.02rem #e4e3e8;
						/*display:flex;*/
						/*flex-direction:column;*/
						.content-header{
							padding:0.1rem 0 0.08rem 0;
							font-size:0.18rem;
							display:flex;
							align-items:center;
							font{
								display:inline-block;
								position:relative;
								width:0.08rem;
								height:0.16rem;
								background:#ff7a59;
								margin-right:0.2rem;
								margin-left:-0.008rem;
								z-index:200;
							}
							.names{
								flex:1;
								padding:0.1rem;
								.border-right{
									min-width:0.55rem;
									padding-right:0.1rem;
									display:inline-block;
									margin-right:0.02rem;
								}
								.right{
									float:right;
									color:#ff7a59;
								}
								.right1{
									float:right;
									margin-right:0.19rem;
									font-size:0.16rem;
									color:#ff7a59;
									display:none;
								}
								.right2{
									display:none;
								}
							}
						}
						.content-bottom{
							width:100%;
							display:flex;
							align-items:center;
							align-content:center;
							justify-content:center;
							span{
								&:nth-child(2n){
									margin-left:0.46rem;
									margin-right:0.46rem;
								}
							}
							.src1{
			            		display:inline-block;
			            		float:left;
			            		padding:0.06rem 0.1rem;
			            		font-size: 0.14rem; 
			            		line-height: 0.15rem;
			            		border:1px solid #cfcfcf;
			            		box-sizing:border-box;
			            		border-radius:0.04rem;
			            		color:#b4b4b4;
			            		margin-bottom:0.1rem;
			            	}
			            	.src2{
			            		display:inline-block;
			            		float:left;
			            		padding:0.06rem 0.1rem;
			            		line-height: 0.15rem;
			            		font-size: 0.14rem; 
			            		background:#ff7a59;
			            		border:1px solid #cfcfcf;
			            		box-sizing:border-box;
			            		border-radius:0.04rem;
			            		color:#fff;
			            		margin-bottom:0.1rem;
			            	}
						}
						.type-content{
							width:100%;
							height:auto;
							display:none;
							.type-cont{
								flex:1;
								padding:0 0 0.04rem 0.38rem;
								background:#fff;
								font-size:0.14rem;
								ul{
									font{
										font-size:0.14rem;
										/*color:#959595;*/
									}
									span{
										color:#2abdfc;
									}
									.mint-field-core::-webkit-input-placeholder{
										color: #d2d2d2;
									}
									.mint-field-core{
										border:0.008rem solid #d2d2d2;
										width:1.2rem;
										color:#2abdfc;
										margin:0;
										padding:0.04rem 0.1rem;
										margin:0.06rem 0.1rem;
									}
									li{
										display:inline-block;
										margin:0;
										padding:0.08rem 0.18rem;
										margin:0.06rem 0.1rem;
									}
								}
						   	}
						}
						.inputNont{
							display:block;
						}
					}
					.zhaiyao-food{
						width:100%;
						height:0.45rem;
						color:#ffffff;
						/*position: fixed;*/
						font-size:0.18rem;
						display:flex;
						/*left:0;
					   	bottom:0;*/
					   	margin-top:0.3rem;
					   	margin-bottom:0.2rem;
						-webkit-box-pack:center;
						justify-content:center;
						-webkit-box-align:center;
						align-items:center;
						z-index:320;
						span{
							width:60%;
							height:100%;
							line-height:0.45rem;
							text-align:center;
							background:#ff7a59;
						}
					}
				}
			}
		}
	}
</style>


