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
				<div ref="yitouAnli" class="sousuo-content border-topbottom">
					<div class="content-header">
						<span>成功案例</span>
						<!--<font>（仅自己可见）</font>-->
						<span v-if="bianList" ref="text5" class="lasst"></span>
						<!--<span v-if="!bianList" ref='text5' class="lasst" @click.stap="baocunList()">保存</span>-->
					</div>
					<div class="xiaolv anli">
						<div v-if="!YitouList" class="anli-list border-top">
							<span>暂无案例</span>
						</div>
						<div v-for="(item,index) in YitouList" class="anli-list border-top">
							<span>
								{{item.com_short}}
								<!--<input readOnly="true" v-model="numberi" placeholder="天立泰" type="text" class="mint-field-core">-->
							</span>
							<span class="center">
								<input v-if="item.investment" readOnly="true" :placeholder="item.investment" type="text" class="mint-field-core">
								<input @blur="Blurs(item.item_id,item.id,index)" :class="Wancent" v-if="!item.investment" readOnly="true" :placeholder="item.investment" type="text" class="mint-field-core">
								<font>万</font>
							</span>
							<span style="text-align: center;">
								{{numToTime(item.create_time)}}
								<!--<input readOnly="true" v-model="numberk" placeholder="反徐小平" type="text" class="mint-field-core">-->
							</span>
						</div>
					</div>
				</div>
				<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
				<div class="guQuan">
					<div class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>团队介绍</span><span ref="bianji2" class="lasst" @click.stap="bianji('2')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul v-if="BianJi3==0" class="first">
								<li>
									<textarea v-if="textb!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="textb"></textarea>
									<textarea v-if="textb==''" readOnly="true" placeholder="暂无" class="mint-field-core ziyuanChongzu" v-model="textb"></textarea>
								</li>
							</ul>
							<ul v-if="BianJi3==1" class="first">
								<li>
									<textarea ref="first" placeholder="请用文字表述您的团队" class="mint-field-core ziyuanChongzu" v-model="textb1"></textarea>
								</li>
							</ul>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>产业资源</span><span ref="bianji3" class="lasst" @click.stap="bianji('3')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul v-if="BianJi2==0" class="first">
								<li>
									<textarea v-if="textc!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
									<textarea v-if="textc==''" readOnly="true" placeholder="暂无" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
								</li>
							</ul>
							<ul v-if="BianJi2==1" class="first">
								<li>
									<textarea ref="chanYe" placeholder="请用文字表述您所在机构能给企业带来的产业资源" class="mint-field-core ziyuanChongzu" v-model="textc1"></textarea>
								</li>
							</ul>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>并购重组</span><span ref="bianji4" class="lasst" @click.stap="bianji('4')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul v-if="BianJi4==0" class="first">
								<li>
									<textarea readOnly="true" placeholder="请用文字表述您有意愿进行收购和出售的资产" class="mint-field-core ziyuanChongzu" v-model="textd"></textarea>
								</li>
							</ul>
							<ul v-if="BianJi4==1" class="first">
								<li>
									<textarea ref="chongGou" placeholder="请用文字表述您有意愿进行收购和出售的资产" class="mint-field-core ziyuanChongzu" v-model="textd1"></textarea>
								</li>
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
	import {numToTime} from "../../../common/js/date.js";
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
				y:1,			//判断是否选择标签；》=1为选择；
				BianJi:'0',
				BianJi2:"0",
				BianJi3:"0",
				BianJi4:"0",
				BianJi5:'0',
				BiaoQian:"",
				numbera:"",
				numberb:"",
				numberc:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberh:"",
				numberi:"",
				numberj:"",
				numberk:"",
				numberToa:"",
				numberTob:"",
				numberToc:"",
				textb:'',
				textc:"",
				textd:"",
				textb1:'',
				textc1:"",
				textd1:"",
				fankui:"45",
				genjin:"458",
				introductionA:"",
				introductionB:"",
				times:20177111129,
				showFlag:true,
				tucaoShow:true,
				urlName:"Dingzeng",
				typeLi:"",
				biaoQianID:[],		//储存标签id
				biaoQianID1:[],		//储存标签id
				biaoQianID2:[],		//储存标签id
				scrollTop:"",
				YitouList:'',		//已投案例接口   已投项目列表	数据
				com_short:'',		//已投案例接口   已投项目列表	公司简称
				create_time:'',		//已投案例接口   已投项目列表	日期
				Wancent:"",
				bianList:true,
				textInputs:"",		//已投案input  DOM;
				numToTime:""
			}
		},
		mounted(){
			this.numToTime=numToTime;
			Indicator.open({spinnerType: 'fading-circle'});
//			console.log(this.userContent)
//			个人资料
			var params={
	    		token:this.$route.params.token,
	    		terminalNo:3
	    	}
			this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
				Indicator.close();
//				console.log(res);
				this.data=res.body.data;
				
				this.textb=this.data.info.team;		//原数据
				this.textc=this.data.info.resources;		//原数据
				this.textd=this.data.info.restructuring;	//原数据
				this.textb1=this.data.info.team;		//将要改变的数据
				this.textc1=this.data.info.resources;		//将要改变的数据
				this.textd1=this.data.info.restructuring;	//将要改变的数据
				
//				console.log("个人资料");
//				console.log(res);
			},function(res){
				Indicator.close();
			    console.log(res);
			})
			//已投案例接口   已投项目列表		调用
			this.YitouLiebiao();
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
				var textb1;		//将要改变的数据
				var textc1;		//将要改变的数据
				var textd1;		//将要改变的数据
				if(this.BianJi2=='0'){		//原来数据
					textc1=this.data.info.resources;
				}else{						//改后数据
					textc1=this.textc1;
				}
				if(this.BianJi3=='0'){		//原来数据
					textb1=this.data.info.team;
				}else{						//改后数据
					textb1=this.textb1;
				}
				if(this.BianJi4=='0'){		//原来数据
					textd1=this.data.info.restructuring;
				}else{						//改后数据
					textd1=this.textd1;
				}
//				个人资料
				var datas={
					id:localStorage.getItem("userID"),//	用户id	是	[string]			
					ctype:localStorage.getItem("type"),			//	类型 1企业 4研究机构	是	[string]		
					industry:'',				//	所属行业标签，多个用 逗号分割	是	[string]
					team:textb1,				//	团队介绍（财务顾问）	是	[string]
					resources:textc1,
					restructuring:textd1
//					industry:			//	所属行业标签或感兴趣的行业，多个用 逗号分割	是	[string]		
//					ctype:				//	类型 1企业 4研究机构 6做市商 7财务顾问	是	[string]		
//					business:			//	直营业务（企业）
				}
//				console.log(datas)
				this.$http.post(URL.path+'regist/com_regist2',datas,{emulateJSON:true}).then(function(res){
					if(res.body.returnCode=='200'){
						Toast('您已保存成功');
//						window.location.href="#/faxian";
					}else{
//						window.location.href="#/denglu"
						Toast(res.body.msg);
					}
//					console.log(res.body)
				},function(res){
					Toast(res.status);
				    console.log(res.status);
				})
			},
			Blurs(item_id,id,index){
//				MessageBox.confirm('请您确认好之后在保存 慎重！').then(action => {
	//				保存修改投资额
					var anliParam={
			    		token:this.userContent.token,
			    		item_id:item_id,		//	项目id	是	[string]		
						send_id:id,		//	发送记录id	是	[string]		
						investment:this.textInputs[index].value		//	投资额	是	[string]
			    	}
					this.$http.post(URL.path+'finance/edit_investment',anliParam,{emulateJSON:true}).then(function(res){
//						console.log(res);
						if(res.body.returnCode=='200'){
							Toast("您已保存成功")
						}
					},function(res){
					    console.log(res);
					})
//				});
			},
//			baocunList(){
//				this.Wancent="";
//				this.bianList=true;
////				var textInputs = this.$refs.yitouAnli.getElementsByClassName("mint-field-core");
//				var length=this.textInputs.length;
//				for(var i=0; i<length; i++){
//					if(this.textInputs[i].getAttribute("placeholder")==""){
//						if(this.textInputs[i].value==""){
//							this.textInputs[i].removeAttribute("readOnly");		//点击编辑   input去除属性readOnly即可编辑
//							this.Wancent="Wancent";
//						}else{
//							this.textInputs[i].setAttribute("readOnly","readOnly")		//点击编辑   input去除属性readOnly即可编辑
////							Toast("亲，您的数据已提交，不可重复编辑如有问题请联系客服")
//						}
//					}
//				}
//			},
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
			YitouLiebiao(){
//				已投案例接口   已投项目列表
				var anliParam={
		    		token:this.userContent.token,
		    		type:'3'			//1:股权 2：债权  3：其他	是	[string]
		    	}
				this.$http.post(URL.path+'finance/get_deliver_list',anliParam,{emulateJSON:true}).then(function(res){
//					console.log(res);
					if(res.body.returnCode=='200'){
						this.YitouList=res.body.data;
//						console.log(res.body.data.com_short)
					}
//					console.log(res)
				},function(res){
				    console.log(res);
				})
			},
			bianji(id){
				if(id==2){
					if(this.$refs.bianji2.innerText=="编辑"){
							this.$refs.bianji2.innerText="取消";
							this.BianJi3=1;
							this.$nextTick(function() {
								this.$refs.first.focus();	//点击编辑   input获取焦点
//								console.log();
							})
						}else{
							this.$refs.bianji2.innerText="编辑";
							this.BianJi3=0;
						}
				}
				if(id==3 || id==4){
					if(id==3){
						if(this.$refs.bianji3.innerText=="编辑"){
							this.$refs.bianji3.innerText="取消";
							this.BianJi2=1;
							this.$nextTick(function() {
								this.$refs.chanYe.focus();	//点击编辑   input获取焦点
//								console.log();
							})
						}else{
							this.$refs.bianji3.innerText="编辑";
							this.BianJi2=0;
						}
					}else{
						if(this.$refs.bianji4.innerText=="编辑"){
							this.$refs.bianji4.innerText="取消";
							this.BianJi4=1;
							this.$nextTick(function() {
								this.$refs.chongGou.focus();	//点击编辑   input获取焦点
//								console.log();
							})
						}else{
							this.$refs.bianji4.innerText="编辑";
							this.BianJi4=0;
						}
					}
				}
			},
//			bianji5(id){
//				this.handleScroll();
//				if(this.bianList==true){
//					this.bianList=false;
//					this.textInputs = this.$refs.yitouAnli.getElementsByClassName("mint-field-core");
//					var length=this.textInputs.length;
//					for(var i=0; i<length; i++){
//						if(this.textInputs[i].getAttribute("placeholder")==""){
//							if(i==0){
//								Toast("亲，提交时确保数据正确再保持，慎重！");
//							}
//							if(this.textInputs[i].value==""){
//								this.textInputs[i].removeAttribute("readOnly");		//点击编辑   input去除属性readOnly即可编辑
//								this.Wancent="Wancent";
//								this.textInputs[0].focus();		//点击编辑   input获取焦点
//							}else{
//								this.textInputs[i].setAttribute("readOnly","readOnly")		//点击编辑   input去除属性readOnly即可编辑
//							}
//						}else{
////							if(i==0){
////								Toast("亲，暂无可编辑数据！");
////								this.bianList=true;
////							}
//						}
//					}
//					if(length==0){
//						Toast("亲，暂无可编辑数据！");
//						this.bianList=true;
//					}
//					console.log();
//				}
//			},
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
					font{
						font-size:0.14rem;
						color:#787777;
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
							font-size:0.16rem;
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
							/*height:100%;*/
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
								width:60%;
								color:#44bfff;
								padding-left:0.06rem;
								box-sizing:border-box;
							}
							.Wancent{
								border:0.008rem solid #7d7d7d;
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
						}
					}
				}
			}
		}
	}
</style>


