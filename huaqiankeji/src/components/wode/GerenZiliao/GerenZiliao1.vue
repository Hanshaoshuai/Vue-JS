<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header">
				<span class="xiangmu-left"  @click.stap="yijianHind()"><img src="../img/back.png"/></span>
				<span>个人资料</span>
				<div @click.stap="baocun()" class="fanhui-right">
					<div>
						<font>保存</font>
					</div>
				</div>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.45rem;"></div>
				<div class="guQuan">
					<div ref="guanzhuLingyu">
						<div class="fankiu border-topbottom">
							<div class="content-food">
								<span>公司所在行业</span>
								<span ref="bianji" class="lasst" @click.stap="bianji('1')">编辑</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input readOnly="true" v-model="numbera" :placeholder="numbera" type="text" class="mint-field-core">
									</li>
								</ul>
								<div v-if="BianJi==1" class="zhuying_1 liangdian_1">
									<ul class="last" ref="biaoqian">
										<span v-for="(item,index) in BiaoQian[0]" :id='item.id' @click.stap="xuanze(index,item.id)">{{item.title}}</span>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
				<div class="sousuo-content border-topbottom">
					<div class="content-header border-topbottom">
						<span>主营业务</span><span ref="bianji3" class="lasst" @click.stap="bianji('3')">编辑</span>
					</div>
					<div class="xiaolv anli">
						<ul v-if="BianJi2==0" class="first">
							<li>
								<textarea v-if="textc!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
								<textarea v-if="textc==''" readOnly="true" placeholder="暂无填写" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
							</li>
						</ul>
						<ul v-if="BianJi2==1" class="first">
							<li>
								<textarea readOnly="true" ref="chanYe" placeholder="请填写主营业务、投资亮点等" class="mint-field-core ziyuanChongzu" v-model="textc1"></textarea>
							</li>
						</ul>
					</div>
				</div>
				<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
				<div class="zhaiQuan">
					<div class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>最近一财年的营收、扣非净利润</span><span ref="text3" class="lasst" @click.stap="bianji3('3')">编辑</span>
						</div>
						<div class="shouru">
							<div v-if="BianJi3==0">
								<div class="anli-list">
									<textarea readOnly="true" :placeholder="numberTod" class="mint-field-core ziyuanChongzu"></textarea>
										
								</div>
								<div class="anli-list border-bottom">
									<textarea readOnly="true" :placeholder="numberToc" class="mint-field-core ziyuanChongzu"></textarea>
								</div>
							</div>
							<ul v-if="BianJi3==1">
								<div>
									<span>营业收入不低于</span>
									<input ref="chanYe1" readOnly="true" v-model="numberb" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>亿元</font>
								</div>
								<div>
									<span>净利润不低于</span>
									<input ref="chanYe2" readOnly="true" v-model="numberc" placeholder="输入数字" number="true" type="number" class="mint-field-core border"><font>万</font>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<box></box>
				<box></box>
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
			userContent:{
//				type:Object
			}
		},
		data () {
			return {
				data:"",
				y:1,			//判断是否选择标签；》=1为选择；
				BianJi:'0',
				BianJi3:"0",
				BianJi2:"0",
				BiaoQian:"",
				numbera:"",
				numberb:"",
				numberc:"",
				textc:"",
				textc1:'',
				textd:"",
				texte:"",
				numberTod:"",
				numberToc:"",
				introductionA:"",
				introductionB:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				urlName:"Dingzeng",
				typeLi:"",
				biaoQianID:[],		//储存标签id
				biaoQianid:'',		//储存标签id字符串
				oDbiaoQianID:'',		//后台获取的储存标签id
				scrollTop:"",
				
				xx:[],
				yy:[],
				xx1:[],
				yy1:[]
			}
		},
		mounted(){
			Indicator.open({spinnerType: 'fading-circle'});
//			console.log(this.userContent)
//			个人资料
			var params={
	    		token:this.userContent.token,
	    	}
			this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
				Indicator.close();
				this.data=res.body.data;
				
				this.numberb=this.data.info.revenue;//营业收入不低于    将要改变的数据
				this.numberc=this.data.info.profit;//净利润不低于	将要改变的数据
				this.numberTod='营收收入不低于'+this.data.info.revenue+'万元';  //要插到页面的
				this.numberToc='净利润不低于'+this.data.info.profit+'万元';				//要插到页面的地区
				this.textd=this.data.info.revenue;//原来的数据
				this.texte=this.data.info.profit;//原来的数据
				
				this.textc=this.data.info.business;		//原数据
				this.textc1=this.data.info.business;		//将要改变的数据
				
				var SuozaiHangye=this.data.info.industry
				var x=[];
				var y=[];
				for(var item in SuozaiHangye){
					x.push(SuozaiHangye[item].id);
					this.xx.push(SuozaiHangye[item].id);
					y.push(SuozaiHangye[item].title);
				}
				this.oDbiaoQianID=x.join(',');
				this.numbera=y.join('、');
//				console.log(this.oDbiaoQianID2);
//				console.log(res);
			},function(res){
				Indicator.close();
			    console.log(res);
			})
//			this.$refs.box.addEventListener('scroll', this.handleScroll)	//做一个scroll监听
		},
		methods:{
			handleScroll(){
//				this.scrollTop = this.$refs.box.scrollTop
//				sessionStorage.setItem("gerenZiliaoH",scrollTop)
//			  	console.log(sessionStorage.getItem("gerenZiliaoH"))
			},
			yijianHind(){
				Indicator.close();
				history.go(-1)
			},
			baocun(){
//				console.log(this.oDbiaoQianID)
//				console.log(this.biaoQianid)
				var nuwID;
				var nuwID1;
				var max_nuwID2;
				var min_nuwID2;
				var textc1;		//将要改变的数据
				if(this.BianJi=='0'){		//原来数据
					nuwID=this.oDbiaoQianID;
				}else{						//改后数据
					nuwID=this.biaoQianid;
				}
				if(this.BianJi3=='0'){		//原来数据
					max_nuwID2=this.textd;
					min_nuwID2=this.texte;
				}else{						//改后数据
					max_nuwID2=this.numberb;
					min_nuwID2=this.numberc;
				}
				if(this.BianJi2=='0'){		//原来数据
					textc1=this.textc;
				}else{						//改后数据
					textc1=this.textc1;
				}
				var datas={
					id:localStorage.getItem("userID"),//	用户id	是	[string]			
					ctype:'1',					//	类型 1企业 4研究机构	是	[string]		
					industry:nuwID,				//	所属行业标签，多个用 逗号分割	是	[string]
					business:textc1,
					revenue:max_nuwID2,					//营收收入不低于
					profit:min_nuwID2						//净利润不低于
				}
//				console.log(datas)
				this.$http.post(URL.path+'regist/com_regist2',datas,{emulateJSON:true}).then(function(res){
					if(res.body.returnCode=='200'){
						Toast('您已保存成功');
//						console.log(res.body)
//						window.location.href="#/faxian";
					}else{
//						window.location.href="#/denglu"
						Toast(res.body.msg);
					}
				},function(res){
					Toast(res.status);
//				    console.log(res.status);
				})
			},
			zuoshiBlock(){
				this.tucaoShow=true;
			},
			dingzengBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYan(){
				window.location.href="#/fankuixinxi/"+"dfgdfhd/12";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			},
			bianji(id){
				if(id==1){
					this.y=1;
					this.y=this.xx.length;
					this.y1=this.xx1.length;
//					console.log(this.biaoQianID)
					if(this.BianJi==1){
						this.BianJi=0;
						this.$refs.bianji.innerText="编辑";
					}else{
						this.BianJi=1;
						this.$refs.bianji.innerText="取消"
						//获取标签
						var datas = {
							token:this.$route.params.token//	token	是	[string]	URL获取的参数
						}
						this.$http.post(URL.path1+'login/three',datas,{emulateJSON:true}).then(function(res){
							this.BiaoQian=res.body.data
							this.$nextTick(function() {
								var spans=this.$refs.biaoqian.getElementsByTagName("span");
								var length0=spans.length;
								var length=this.xx.length;
//								var spans1=this.$refs.biaoqian1.getElementsByTagName("span");
//								var changdu0=spans1.length;
//								var changdu=this.xx1.length;
								for(var i=0; i<length; i++){
									for(var x=0; x<length0; x++){
										if(this.xx[i]==spans[x].id){
											spans[x].setAttribute("class","bianse")
											this.biaoQianID[i]=spans[x].id;
//											return;
										}
									}
								}
								this.biaoQianid=this.biaoQianID.join()
//								for(var i=0; i<changdu; i++){
//									for(var x=0; x<changdu0; x++){
//										if(this.xx1[i]==spans1[x].id){
//											spans1[x].setAttribute("class","bianse")
//											this.biaoQianID1[i]=spans1[x].id;
////											return;
//										}
//									}
//								}
//								this.biaoQianid1=this.biaoQianID1.join()
								
							});
//							console.log(this.BiaoQian);
						},function(res){
						    console.log(res.status);
						})
					}
				}
				if(id==0){
					var textInputs = this.$refs.guquanBian.getElementsByClassName("mint-field-core");
					var length=textInputs.length;
					for(var i=0; i<length; i++){
						textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					}
					textInputs[0].focus();		//点击编辑   input获取焦点
//					console.log();
				}
				if(id==3 || id==4){
					if(id==3){
						if(this.$refs.bianji3.innerText=="编辑"){
							this.$refs.bianji3.innerText="取消";
							this.BianJi2=1;
							this.$nextTick(function() {
								this.$refs.chanYe.removeAttribute("readOnly")
								this.$refs.chanYe.focus();	//点击编辑   input获取焦点
//								console.log();
							})
						}else{
							this.$refs.bianji3.innerText="编辑";
							this.BianJi2=0;
						}
					}
				}
				if(id==4){
					var textInputs = this.$refs.yitouAnli.getElementsByClassName("mint-field-core");
					var length=textInputs.length;
					for(var i=0; i<length; i++){
						textInputs[i].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					}
					textInputs[0].focus();		//点击编辑   input获取焦点
//					console.log();
				}
			},
			bianji2(id){
				this.handleScroll();
				if(this.BianJi2==1){
					this.BianJi2=0;
					this.$refs.text2.innerText="编辑";
				}else{
					this.BianJi2=1;
					this.$refs.text2.innerText="取消"
				}
				
			},
			bianji3(){
				this.handleScroll();
				if(this.BianJi3==1){
					this.BianJi3=0;
					this.$refs.text3.innerText="编辑";
				}else{
					this.BianJi3=1;
					this.$refs.text3.innerText="取消"
					this.$nextTick(function() {
						this.$refs.chanYe1.removeAttribute("readOnly")
						this.$refs.chanYe2.removeAttribute("readOnly")
						this.$refs.chanYe1.focus();	//点击编辑   input获取焦点
//						console.log();
					})
				}
			},
			bianji4(){
				this.handleScroll();
				if(this.BianJi4==1){
					this.BianJi4=0;
					this.$refs.text4.innerText="编辑";
				}else{
					this.BianJi4=1;
					this.$refs.text4.innerText="取消"
				}
			},
			bianji5(){
				this.handleScroll();
				if(this.BianJi5==1){
					this.BianJi5=0;
					this.$refs.text5.innerText="编辑";
				}else{
					this.BianJi5=1;
					this.$refs.text5.innerText="取消"
				}
			},
			xuanze(index){
				var spans=this.$refs.biaoqian.getElementsByTagName("span");	
				var length=spans.length;
				if(spans[index].getAttribute("class")=="bianse"){			//判断是否选择标签；》=1为选择；
					spans[index].setAttribute("class","")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID[z]==spans[index].id){
							this.biaoQianID.splice(z,1);
							this.biaoQianid=this.biaoQianID.join()
//							console.log(this.biaoQianid)
							this.y-=1
							break;
						}
					}
				}else{
					if(this.y>2){
						Toast('最多可选三个');
					}else{
						spans[index].setAttribute("class","bianse");
						this.biaoQianID[this.y]=spans[index].id;
						this.y+=1;
						this.biaoQianid=this.biaoQianID.join()
//						console.log(this.biaoQianid)
					}
				}
			},
			xuanze1(index){
				var spans=this.$refs.biaoqian1.getElementsByTagName("span");	
				var length=spans.length;
				if(spans[index].getAttribute("class")=="bianse"){			//判断是否选择标签；》=1为选择；
					spans[index].setAttribute("class","")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID1[z]==spans[index].id){
							this.biaoQianID1.splice(z,1);
//							console.log(this.biaoQianID1)
							this.y-=1
							break;
						}
					}
				}else{
					if(this.y>2){
						Toast('最多可选三个');
					}else{
						spans[index].setAttribute("class","bianse");
						this.y+=1;
						for(var i=0; i<this.y; i++){
							if(this.biaoQianID1[i]!=spans[index].id){
								this.biaoQianID1.push(spans[index].id)
								break;
							}
						}
//						console.log(this.biaoQianID1)
					}
				}
			},
			types(index,id){
				var typeLi=this.$refs.foods.getElementsByTagName("li");
				var length=typeLi.length;
				this.urlName=id;
				if(typeLi[index].getAttribute("class")=="src1"){			//判断是否选择标签；》=1为选择；
					typeLi[index].setAttribute("class","src0")
					for(var z=0; z<this.y; z++){
						if(this.biaoQianID2[z]==typeLi[index].id){
							this.biaoQianID2.splice(z,1);
//							console.log(this.biaoQianID2)
							this.y-=1
							break;
						}
					}
				}else{
					typeLi[index].setAttribute("class","src1");
					this.y+=1;
					for(var i=0; i<this.y; i++){
						if(this.biaoQianID2[i]!=typeLi[index].id){
							this.biaoQianID2.push(typeLi[index].id)
							break;
						}
					}
//					console.log(this.biaoQianID2)
				}
			}
		},
		events:{
			
		},
		filters:{
//			formatDate(time){
//				let date = new Date(time);
//				return formatDate(date,'yyyy-MM-dd hh:mm');
//			}
		},
		updated(){
		},
		components:{
			box
//			youhuiquan
//			fankuixinxi
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
	  	transform: translateX(4.17rem);
	  	/*transform:rotate(360deg);*/
	  	/*opacity: 0;*/
	}
	.xiangmu{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:220;
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
			z-index:300;
			.xiangmu-left{
				position:absolute;
				height:100%;
				padding:0 0.16rem 0 0.16rem;
				display:inline-block;
				top:0.04rem;
				left:0;
				img{
					height:0.2rem;
				}
			}
			.fanhui-right{
		    	position:absolute;
		    	right:0.2rem;
		    	top:0;
		    	font-size: 0.16rem;
		    	font{
		    		display:inline-block;
					vertical-align: top;
					/*width:0.2rem;*/
					height:0.2rem;
					line-height: 0.22rem;
					margin-top:0.13rem;
					/*background-image:url("../img/bianji.png");*/
					background-size:100% 100%;
		    	}
		    }
		}
		.box::-webkit-scrollbar{width:0px;}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
			.guQuan{
				width:100%;
				margin:0 auto;
			}
			.fankiu{
				width:100%;
				display:flex;
				.content-food{
					flex:1;
					padding:0.15rem 5%;
					background:#fff;
					span{
						font-size:0.18rem;
						line-height:0.18rem;
					}
					.lasst{
						font-size:0.14rem;
						float:right;
						color:#ff7a59;
					}
					.first{
						padding-top:0.14rem;
						height:0.31rem;
						display:flex;
						justify-content:space-between;
						li{
							width:100%;
							height:0.31rem;
							float:left;
							font-size:0.16rem;
							display:inline-block;
							.mint-field-core::-webkit-input-placeholder{
							}
							.mint-field-core{
								width:100%;
								height:100%;
								line-height:0.3rem;
								color:#787777
							}
						}
					}
					.liangdian_1{
						width:100%;
						padding-top:0.14rem;
						.last{
							width:100%;
							overflow:hidden;
							span{
								display:inline-block;
								float:left;
								width:1.04rem;
								text-align:center;
								padding:0.08rem 0;
								background:#f2f2f2;
								color:#acacac;
								border-radius:0.3rem;
								margin:0 0.08rem 0.1rem 0;
								font-size:0.14rem;
							}
							span:nth-child(3n){
								margin-right:0;
							}
							.bianse{
								background:#fddcd0;
								color:#ff7a59;
							}
						}
					}
					.xiaolv{
						width:100%;
						span{
							line-height:0.16rem;
						}
						ul{
							width:100%;
							.mint-field-core::-webkit-input-placeholder{
							  color: #787777;
							}
							.ziyuanChongzu{
								resize: none;
								min-height:1.02rem;
								line-height:0.2rem;
								&::-webkit-scrollbar{width:0;height:0}
								border:1px solid #d2d2d2;
							}
							.mint-field-core{
								width:96%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
								padding:0.06rem 2%;
								margin:0.16rem 0 0 0;
							}
						}
					}
				}
				.touBiao{
					height:0.58rem;
					padding:0 0 0 0;
					span{
						position:absolute;
						top:0.09rem;
						left:0rem;
						display:inline-block;
						padding:0.1rem 0.21rem 0.14rem 0.21rem;
						color:#fff;
						font-size:0.18rem;
						line-height:0.19rem;
						background-image:url("../img/biaoti.png");
						background-size:100% 100%;
					}
				}
			}
			
			.dangeDiyu{
				.content-food{
					.first{
						li{
							width:100%;
							.mint-field-core::-webkit-input-placeholder{
							  color: #787777;
							}
							.mint-field-core{
								width:100%;
								height:100%;
								text-align:left;
								background:#fff;
								border-radius:0;
								color:#787777;
								font-size:0.16rem;
							}
						}
					}
					.type-conts{
						flex:1;
						padding:0.16rem 0 0 0;
						background:#fff;
						font-size:0.14rem;
						ul{
							width:100%;
							overflow:hidden;
							color: #787777;
							.mint-field-core::-webkit-input-placeholder{
							color: #d2d2d2;
							}
							.mint-field-core{
								border:0.008rem solid #d2d2d2;
								width:0.6rem;
								margin:0;
								padding:0.04rem 0.14rem;
								margin:0.06rem 0.1rem;
								color:#787777;
							}
						}
					}
					.last{
						padding-top:0.1rem;
						font{
							color:#959595;
						}
						.shouru{
							padding:0 0.1rem;
							span{
								display:inline-block;
								width:1.13rem;
							}
						}
						.mint-field-core::-webkit-input-placeholder{
							color: #d2d2d2;
						}
						.mint-field-core{
							border:0.008rem solid #d2d2d2;
							width:0.6rem;
							margin:0;
							padding:0.04rem 0.14rem;
							margin:0.06rem 0.1rem;
							color:#787777;
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
			.type-content{
				width:100%;
				height:auto;
				background:#fff;
				display:flex;
				.type-cont{
					flex:1;
					padding:0 5%;
					span{
						display:block;
						margin:0.26rem 0 0.06rem 0.1rem;
					}
					ul{
						.mint-field-core{
							border:1px solid #2C3E50;
							width:0.6rem;
							margin:0;
							padding:0.04rem 0.14rem;
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
			.sousuo-content{
				width:100%;
				height:auto;
				background:#fff;
				.content-header{
					padding:0.08rem 5%;
					font-size:0.18rem;
					span{
						line-height:0.3rem;
						&:last-child{
							display:inline-block;
							float:right;
							font-size:0.14rem;
							color:#ff7a59;
						}
					}
				}
				.xiaolv{
					width:100%;
					span{
						line-height:0.16rem;
					}
					ul{
						padding:0.05rem 5%;
						li{
							width:100%;
						}
						.mint-field-core::-webkit-input-placeholder{
						  color: #787777;
						}
						.mint-field-core{
							width:100%;
							height:100%;
							text-align:left;
							background:#fff;
							border-radius:0;
							color:#787777;
							font-size:0.16rem;
						}
						.ziyuanChongzu{
							resize: none;
							min-height:1.02rem;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
					}
					ul{
						.mint-field-core::-webkit-input-placeholder{
						  color: #787777;
						}
						.ziyuanChongzu{
							resize: none;
							min-height:1.02rem;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
						.mint-field-core{
							width:96%;
							height:100%;
							text-align:left;
							background:#fff;
							border-radius:0;
							color:#787777;
							font-size:0.16rem;
							padding:0.06rem 2%;
							margin:0.06rem 0 0 0;
						}
					}
				}
				.anli{
					.anli-list{
						padding:0 5%;
						padding-left:0.33rem;
						display:flex;
						height:0.43rem;
						span{
							flex:1;
							line-height:0.43rem;
							&:nth-child(2n){
								color:#44bfff;
							}
							&:last-child{
								color:#7d7d7d;
							}
						}
						.mint-field-core{
							width:100%;
							height:100%;
							text-align:left;
							background:#fff;
							border-radius:0;
							font-size:0.16rem;
						}
						.center{
							.mint-field-core::-webkit-input-placeholder{
							  color:#44bfff;
							}
							.mint-field-core{
								color:#44bfff;
							}
						}
					}
				}
			}
			.zhaiQuan{
				width:100%;
				margin:0 auto;
				.bottom-a{
					margin-bottom:0.06rem;
				}
				.content-touzi{
					flex:1;
					font-size:0.14rem;
					background:#fff;
					ul{
					width:100%;
					margin-top:0.1rem;
					height:0.37rem;
					display:flex;
					justify-content:flex-start;
						li{
							&:first-child{
								margin-right:0.06rem;
							}
							width:1.08rem;
							height:0.36rem;
							border-radius:0.04rem;
							color:#525252;
							background:#fff;
							box-sizing: border-box;
							position:relative;
							display:flex;
							justify-content:center;
							align-items:center;
							span{
								display:inline-block;
								font-size:0.16rem;
							}
							.img1{
								background-image:url("../img/duihao.png");
							}
						}
						.src0{
							border:0.01rem solid #ddddde;
						}
						.src1{
							border:0.01rem solid #ff7a59;
							font{
								display:inline-block;
								position:absolute;
								bottom:-0.008rem;
								right:-0.008rem;
								background-size:100% 100%;
								width:0.2rem;
								height:0.2rem;
							}
						}
					}
				}
				.shouru{
					width:100%;
					.anli-list{
						padding:0 5%;
						&:last-child{
							padding-bottom:0.16rem;
						}
						.ziyuanChongzu{
							resize: none;
							line-height:0.2rem;
							&::-webkit-scrollbar{width:0;height:0}
						}
						.mint-field-core{
							width:100%;
							height:0.2rem;
							text-align:left;
							background:#fff;
							border-radius:0;
							color:#787777;
							font-size:0.16rem;
						}
					}
					ul{
						padding:0 5%;
						padding-bottom:0.16rem;
						font{
							color:#959595;
						}
						span{
							display:inline-block;
							width:1.13rem;
						}
						.mint-field-core::-webkit-input-placeholder{
							color: #d2d2d2;
						}
						.mint-field-core{
							border:0.008rem solid #d2d2d2;
							width:0.6rem;
							margin:0;
							padding:0.04rem 0.14rem;
							margin:0.06rem 0.1rem;
						}
					}
				}
			}
		}
	}
</style>


