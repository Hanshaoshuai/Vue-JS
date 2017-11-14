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
					<div class="fankiu border-topbottom">
						<div class="content-food touBiao">
							<span>股权投资</span>
						</div>
					</div>
					<div style="width:100%;height:0.06rem;"></div>
					<div ref="guanzhuLingyu">
						<div class="fankiu border-topbottom">
							<div class="content-food">
								<span>关注领域</span>
								<span ref="bianji" class="lasst" @click.stap="bianji('1')">编辑</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<p class="mint-field-core">{{numbera}}</p>
										<!--<input readOnly="true" v-model="numbera" placeholder="暂无" type="text" class="mint-field-core">-->
									</li>
								</ul>
								<div v-if="BianJi==1" class="zhuying_1 liangdian_1">
									<ul class="last" ref="biaoqian">
										<span v-for="(item,index) in BiaoQian[0]" :id='item.id' @click.stap="xuanze(index,item.id)">{{item.title}}</span>
									</ul>
								</div>
							</div>
						</div>
						<div class="fankiu border-bottom">
							<div class="content-food">
								<span>投资阶段</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<p class="mint-field-core">{{numberd}}</p>
										<!--<input readOnly="true" v-model="numberd" placeholder="暂无" type="text" class="mint-field-core">-->
									</li>
								</ul>
								<div  v-if="BianJi==1" class="zhuying_1 liangdian_1" ref="foods1">
									<ul class="last"  ref="biaoqian1">
										<li v-for="(item,index) in BiaoQian[1]" class="src0" :id='item.id' @click.stap="xuanze1(index,item.id)">
											<span :id='item.id'>{{item.title}}</span><font class="img1"></font>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>单个投资额</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input readOnly="true" :placeholder="numberTod" type="text" class="mint-field-core">
									</li>
								</ul>
								<div v-if="BianJi==1" class="type-conts">
									<ul>
										<input v-model="numbere" number="true" type="number" class="mint-field-core border">
										<font>万&nbsp;至</font>
										<input v-model="numberf" number="true" type="number" class="mint-field-core border">
										<font>万&nbsp;</font>
									</ul>
								</div>
							</div>
						</div>
						<div class="fankiu border-bottom dangeDiyu">
							<div class="content-food">
								<span>地域要求</span>
								<ul v-if="BianJi==0" class="first">
									<li>
										<input v-if="texta!=''" readOnly="true" :placeholder="numberToc" type="text" class="mint-field-core">
										<input v-if="texta==''" readOnly="true" placeholder="暂无" type="text" class="mint-field-core">
									</li>
								</ul>
								<div v-if="BianJi==1" class="xiaolv">
									<ul>
										<textarea class="mint-field-core ziyuanChongzu" v-model="texta"></textarea>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div style="height:0.06rem;width:100%;background:#f5f4f9"></div>
					<div ref="guquanBian" class="sousuo-content border-topbottom">
						<div class="content-header">
							<span>已投案例</span>
							<font>（仅自己可见）</font>
							<!--<span v-if="bianList" ref='text5' class="lasst" @click.stap="bianji('0')">编辑</span>
							<span v-if="!bianList" ref='text5' class="lasst" @click.stap="baocunList()">保存</span>-->
						</div>
						<div ref="listInput" class="xiaolv anli">
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
					<div class="sousuo-content border-topbottom">
						<div class="content-header border-topbottom">
							<span>产业资源</span><span ref="bianji3" class="lasst" @click.stap="bianji('3')">编辑</span>
						</div>
						<div class="xiaolv anli">
							<ul v-if="BianJi2==0" class="first">
								<li>
									<textarea v-if="textc!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
									<textarea  v-if="textc==''" readOnly="true" placeholder="暂无" class="mint-field-core ziyuanChongzu" v-model="textc"></textarea>
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
									<textarea v-if="textd!=''" readOnly="true" placeholder="" class="mint-field-core ziyuanChongzu" v-model="textd"></textarea>
									<textarea v-if="textd==''" readOnly="true" placeholder="暂无" class="mint-field-core ziyuanChongzu" v-model="textd"></textarea>
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
				<div style="height:0.2rem;width:100%;background:#f5f4f9"></div>
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
	import { MessageBox } from 'mint-ui';
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
				y1:1,			//判断是否选择标签；》=1为选择；
				BianJi:'0',
				BianJi2:"0",
				BianJi3:"0",
				BianJi4:"0",
				BianJi5:'0',
				BiaoQian:"",
				numbera:"",
				numberd:"",
				numbere:"",
				numberf:"",
				numberg:"",
				numberh:"",
				numberi:"",
				numberk:"",
				numberToa:"",
				numberTob:"",
				numberToc:"",	//要插到页面的
				numberTod:"",	//要插到页面的
				texta:'',
				textc:"",
				textd:"",
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
				biaoQianid:'',		//储存标签id字符串	将要上传的改变数据
				oDbiaoQianID:'',		//原后台获取的储存标签id
				
				biaoQianID1:[],		//储存标签id
				biaoQianid1:'',		//储存标签id字符串	将要上传的改变数据
				oDbiaoQianID1:'',		//原后台获取的储存标签id
				
				biaoQianID2:[],		//储存标签id
				biaoQianid2:'',		//储存标签id字符串
				oDbiaoQianID2:'',		//原后台获取的储存标签id
				scrollTop:"",
				YitouList:'',		//已投案例接口   已投项目列表	数据
				com_short:'',		//已投案例接口   已投项目列表	公司简称
				create_time:'',		//已投案例接口   已投项目列表	日期
				Wancent:"",
				bianList:true,
				textInputs:"",		//已投案input  DOM;
				
				xx:[],
				yy:[],
				xx1:[],
				yy1:[],
				numToTime:""
			}
		},
		mounted(){
			this.numToTime=numToTime;
			Indicator.open({spinnerType: 'fading-circle'});
//			console.log(this.userContent)
//			个人资料
			var params={
	    		token:this.userContent.token,
	    	}
			this.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
				Indicator.close();
				this.data=res.body.data;
				this.numberToa=this.data.info.single_project_min;	//原数据
				this.numberTob=this.data.info.single_project_max;	//原数据
				this.numbere=this.data.info.single_project_min;		//将要改变的数据
				this.numberf=this.data.info.single_project_max;		//将要改变的数据
				this.numberTod=this.numberToa+'万 - '+this.numberTob+'万';  	//要插到页面的
				this.numberToc=this.data.info.territory;					//要插到页面的地区
				this.texta=this.data.info.territory;		//要插到页面的地区	将要改变的数据
				
				this.textc=this.data.info.resources;		//原数据
				this.textd=this.data.info.restructuring;	//原数据
				this.textc1=this.data.info.resources;		//将要改变的数据
				this.textd1=this.data.info.restructuring;	//将要改变的数据
				
				var fund_stage=this.data.info.fund_stage;
				var SuozaiHangye=this.data.info.interested;
				var fund_stage=this.data.info.fund_stage;
//				console.log(SuozaiHangye);
				var x=[];
				var y=[];
				var x1=[];
				var y1=[];
				for(var item in SuozaiHangye){
					x.push(SuozaiHangye[item].id);
					this.xx.push(SuozaiHangye[item].id);
					y.push(SuozaiHangye[item].title);
				}
				for(var item in fund_stage){
					x1.push(fund_stage[item].id);
					this.xx1.push(fund_stage[item].id);
					y1.push(fund_stage[item].title);
				}
				this.oDbiaoQianID=x.join(',');
				this.numbera=y.join('、');
				
				this.oDbiaoQianID1=x1.join(',');
				this.numberd=y1.join('、');
//				console.log(this.oDbiaoQianID1);
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
				var nuwID;
				var nuwID1;
				var max_nuwID2;
				var min_nuwID2;
				var territory;
				var textc1;		//将要改变的数据
				var textd1;	//将要改变的数据
				if(this.BianJi=='0'){		//原来数据
					nuwID=this.oDbiaoQianID;
					nuwID1=this.oDbiaoQianID1;
					max_nuwID2=this.numberTob;
					min_nuwID2=this.numberToa;
					territory=this.numberToc
				}else{						//改后数据
					nuwID=this.biaoQianid;
					nuwID1=this.biaoQianid1;
					max_nuwID2=this.numberf;
					min_nuwID2=this.numbere;
					territory=this.texta;
				}
				if(this.BianJi2=='0'){		//原来数据
					textc1=this.data.info.resources;
				}else{						//改后数据
					textc1=this.textc1;
				}
				if(this.BianJi4=='0'){		//原来数据
					textd1=this.data.info.restructuring;
				}else{						//改后数据
					textd1=this.textd1;
				}
				var datas={
					id:localStorage.getItem("userID"),					//	uid	是	[string]		
					investment_type:localStorage.getItem("typeID"),		//投资类型 1:股权投资 2:债权投资 3:股债兼投	是	[string]		
					interested:nuwID,						//感兴趣的行业多个用逗号分割	是	[string]		
					single_project_max:max_nuwID2,			//单笔投资最大值	是	[string]		
					single_project_min:min_nuwID2,			//单笔投资最小值	是	[string]		
					fund_stage:nuwID1,				//投资阶段 15债转股 16债权 17 新三板 62PE 63 VC 64 天使投资 75PreIPO	是	[string]		
					territory:territory,			//地域要求	是	[string]		
					investment_way:'',				//投资方式 1:定增 2:接老股 3:二级市场 4:融资租赁 5:股权质押 6:双创债	是	[string]		
					revenue_min:0,			//最低营收要求	是	[string]		
					profit_min:0,			//最低净利润要求	是	[string]		
					fund_min:0,			//最小年化资金成本范围	是	[string]		
					fund_max:0,			//最大年化资金成本范围	是	[string]		
					loan_time:0,			//放款时间	是	[string]		
					borrow:'',				//借债主体	是	[string]
					resources:textc1,
					restructuring:textd1
				}
//				console.log(datas)
				this.$http.post(URL.path+'regist/regist2',datas,{emulateJSON:true}).then(function(res){
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
				    console.log(res.status);
				})
			},
			baocunList(){
				this.Wancent="";
				this.bianList=true;
//				var textInputs = this.$refs.guquanBian.getElementsByClassName("mint-field-core");
				var length=this.textInputs.length;
				for(var i=0; i<length; i++){
					if(this.textInputs[i].getAttribute("placeholder")==""){
						if(this.textInputs[i].value==""){
							this.textInputs[i].removeAttribute("readOnly");		//点击编辑   input去除属性readOnly即可编辑
							this.Wancent="Wancent";
						}else{
							this.textInputs[i].setAttribute("readOnly","readOnly")		//点击编辑   input去除属性readOnly即可编辑
//							Toast("亲，您的数据已提交，不可重复编辑如有问题请联系客服")
						}
					}
				}
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
		    		type:'1'			//1:股权 2：债权	是	[string]
		    	}
				this.$http.post(URL.path+'finance/get_deliver_list',anliParam,{emulateJSON:true}).then(function(res){
//					console.log(res);
					if(res.body.returnCode=='200'){
						this.YitouList=res.body.data;
					}
				},function(res){
				    console.log(res);
				})
			},
			bianji(id){
				if(id==1){
					this.y=this.xx.length;
					this.y1=this.xx1.length;
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
								var spans1=this.$refs.biaoqian1.getElementsByTagName("span");
								var changdu0=spans1.length;
								var changdu=this.xx1.length;
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
								for(var i=0; i<changdu; i++){
									for(var x=0; x<changdu0; x++){
										if(this.xx1[i]==spans1[x].id){
											spans1[x].setAttribute("class","bianse")
											this.biaoQianID1[i]=spans1[x].id;
//											return;
										}
									}
								}
								this.biaoQianid1=this.biaoQianID1.join()
//								console.log(changdu);
							});
						},function(res){
						    console.log(res.status);
						})
					}
				}
				if(id==0){
					this.handleScroll();
					if(this.bianList==true){
						this.bianList=false;
						this.textInputs = this.$refs.guquanBian.getElementsByClassName("mint-field-core");
						var length=this.textInputs.length;
						for(var i=0; i<length; i++){
							if(this.textInputs[i].getAttribute("placeholder")==""){
								if(i==0){
									Toast("亲，提交时确保数据正确再保持，慎重！");
								}
								if(this.textInputs[i].value==""){
									this.textInputs[i].removeAttribute("readOnly");		//点击编辑   input去除属性readOnly即可编辑
									this.Wancent="Wancent";
								}else{
									this.textInputs[i].setAttribute("readOnly","readOnly")		//点击编辑   input去除属性readOnly即可编辑
								}
							}else{
								if(i==0){
									Toast("亲，暂无可编辑数据！");
									this.bianList=true;
								}
							}
						}
//						textInputs[0].focus();		//点击编辑   input获取焦点
//						console.log();
					}
//					textInputs[0].focus();
					
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
			bianji3(){
				this.handleScroll();
				if(this.BianJi3==1){
					this.BianJi3=0;
					this.$refs.text3.innerText="编辑";
				}else{
					this.BianJi3=1;
					this.$refs.text3.innerText="取消"
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
			bianji5(id){
				this.handleScroll();
				if(this.$refs.text5.innerText=="编辑"){
					this.$refs.text5.innerText="取消";
					var textInputs = this.$refs.yitouAnli.getElementsByClassName("mint-field-core");
					textInputs[0].removeAttribute("readOnly")		//点击编辑   input去除属性readOnly即可编辑
					textInputs[0].focus();		//点击编辑   input获取焦点
//					console.log();
				}else{
					this.$refs.text5.innerText="编辑";
					var textInputs = this.$refs.yitouAnli.getElementsByClassName("mint-field-core");
					textInputs[0].setAttribute("readOnly","readOnly")		//点击编辑   input去除属性readOnly即可编辑
					textInputs[0].focus();		//点击编辑   input获取焦点
//					console.log();
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
//					if(this.y>2){
//						Toast('最多可选三个');
//						return;
//					}else{
						spans[index].setAttribute("class","bianse");
						
						this.biaoQianID[this.y]=spans[index].id;
						this.y+=1;
						this.biaoQianid=this.biaoQianID.join()
//						console.log(this.biaoQianid)
//					}
				}
			},
			xuanze1(index){
				var spans=this.$refs.biaoqian1.getElementsByTagName("span");	
				var length=spans.length;
				if(spans[index].getAttribute("class")=="bianse"){			//判断是否选择标签；》=1为选择；
					spans[index].setAttribute("class","")
					for(var z=0; z<this.y1; z++){
						if(this.biaoQianID1[z]==spans[index].id){
							this.biaoQianID1.splice(z,1);
							this.biaoQianid1=this.biaoQianID1.join()
//							console.log(this.biaoQianid1)
							this.y1-=1
							break;
						}
					}
				}else{
//					if(this.y1>2){
//						Toast('最多可选三个');
//					}else{
						spans[index].setAttribute("class","bianse");
						this.biaoQianID1[this.y1]=spans[index].id;
						this.y1+=1;
						this.biaoQianid1=this.biaoQianID1.join()
//						console.log(this.biaoQianid1)
//					}
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
							this.biaoQianid2=this.biaoQianID2.join()
//							console.log(this.biaoQianid2)
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
					this.biaoQianid2=this.biaoQianID2.join()
//					console.log(this.biaoQianid2)
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
						/*height:0.31rem;*/
						display:flex;
						justify-content:space-between;
						li{
							width:100%;
							/*height:0.31rem;*/
							float:left;
							font-size:0.16rem;
							display:inline-block;
							.mint-field-core::-webkit-input-placeholder{
							}
							.mint-field-core{
								color: #787777;
								width:100%;
								/*height:100%;*/
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
								color: #787777;
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
								color: #787777;
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
							color: #787777;
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
								width:56%;
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


