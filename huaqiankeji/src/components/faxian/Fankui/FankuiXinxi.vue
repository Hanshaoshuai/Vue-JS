<template>
	<!--<transition name="fade">-->
		<div v-show="tucaoShow" class="yijian">
			<div class="searchBox">
				<div class="home-search">
					<span class="fanhui-butten" @click.stop="yijianHind()"><img src="./img/back.png"/></span>
					<span>{{type}}</span>
					<div class="fanhui-right">
						<div class="tousu" @click.stop="tousuBlock()">
							<span>投诉</span>
						</div>
					</div>
				</div>
			</div>
			<div class="content-text" ref="contentTexte">
				<div class="box" ref="boxTexte" id="box">
					
				</div>
			</div>
			<div class="shuru" ref="shuru">
				<ul>
					<li>
						<textarea @click.stop="shangyi()" ref="texts" placeholder="请详输入您的问题..." class="mint-field-core" v-model="introduction"></textarea>
						<div class="fasong" @click.stop="fasong()"><span>发送</span></div>
					</li>
				</ul>
			</div>
			<!--<div ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				<div class="loadEffect" ref="padding" v-show="idBlock">
					<span class="firsts" ref="selecteds">
						<li>请选择投诉原因</li>
						<font class="src1" @click.stop="xuanZe(index,item.id)" v-for="(item,index) in selected">{{item.title}}</font>
					</span>
			        <div class='load-butten'>
				        <font @click.stop="idQueding()" class="first">确定</font>
				        <font @click.stop="idQuxiao()" class="last">取消</font>
			        </div>
				</div>	
			    <div class="loadEffect" ref="padding" v-show="contBlock">
					<span>
						<textarea ref="texts" placeholder="请输入您的投诉说明..." class="mint-field-core tousuContent" v-model="tousuContent"></textarea>
					</span>
			        <div class='load-butten'>
				        <font @click.stop="guoHui()" class="first">确定</font>
				        <font @click.stop="fangQi()" class="last">取消</font>
			        </div>
				</div>	
			</div>-->
			<!--1、买方身份的投诉（企业反馈）：投资机构、合格投资人、做市商、研究咨询-->
			<transition name="fades">
				<div @click.stop="xiaoShi()" ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				    <div class="loadEffect" ref="padding">
						<ul>
							<li class="border-bottom" @click.stop="BugenYuanyin('拒不安排到项目现场尽调')"><span>拒不安排到项目现场尽调</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('向投资方索要不合理费用')"><span>向投资方索要不合理费用</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('发布项目与实际融资项目不符')"><span>发布项目与实际融资项目不符</span></li>
							<li @click.stop="BugenYuanyin('其他原因')"><span>其他原因</span></li>
						</ul>
					</div>	
				</div>
			</transition>
			<!--2、卖方身份的投诉（投资人反馈）：企业、财务顾问-->
			<transition name="fades">
				<div @click.stop="xiaoShi()" ref="xianShi" v-show="onlyContent1" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				    <div class="loadEffect" ref="padding">
						<ul>
							<li class="border-bottom" @click.stop="BugenYuanyin('未现场拜访即索要繁琐材料')"><span>未现场拜访即索要繁琐材料</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('中介机构假冒投资机构')"><span>中介机构假冒投资机构</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('无故爽约，不尊重企业')"><span>无故爽约，不尊重企业</span></li>
							<li @click.stop="BugenYuanyin('其他原因')"><span>其他原因</span></li>
						</ul>
					</div>	
				</div>
			</transition>
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
			<router-view :uid="uid"></router-view>
		</div>
	<!--</transition>-->
</template>

<script type="text/ecmascript">
	import {numToTime1} from "../../../common/js/date.js";
	import {URL} from '../../../common/js/path';
	import { Indicator } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import tishi from "../../Tishi.vue";
	
	export default {
		props:{
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				typeName:'',	//索要项目或索要名片   进来就执行；所需参数
				typeCont:'',	//索要项目或索要名片   进来就执行；所需参数
				from_photo:'',//发送方头像	
				from_id:"",	//发送方id
				to_id:"",	//我的id
				id:"",		//发送方名片id		
				item_id:"",	//发送方项目id		
				Token:"",
				uid:"",
				type:"",
				datas:"",		//评论详情
				datasA:"",		//发送评论
				datasB:"",		//处理换名片同意
				prent:"",		//显示内容最外层DOM元素
//				My:"",
//				You:"",
				DEHeight:"",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				tousuoContent:"",
				xingXi:{			//给下级提示组件要传的参数  提示信息
					huJiao:"呼叫",
					tianJia:"添加到手机通讯录",
				},
				content:"",
				tongxun:"ok",
				numToTime1:"",
				toName:"",
				to_photo:"",
				onlyContent:false,
				onlyContent1:false,
				tousuContent:"",
				selected:'',		//投诉ids
				selectedID:'3',		//投诉id
				tousuId:"",
				idBlock:true,
				contBlock:false
			}
		},
		mounted(){
//			this.Qingqiu()
		},
		activated(){
			this.Qingqiu();
		},
		methods:{
			xiaoShi(){
				this.onlyContent=false;
				this.onlyContent1=false;
			},
			Qingqiu(){
				this.prent=this.$refs.boxTexte;
				var contentTexte=this.$refs.contentTexte;
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
//				if(this.type==this.$route.params.type){
//					return;
//				}else{
					if(this.prent.innerHTML!=""){
						this.prent.innerHTML=""
					}
//				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.numToTime1=numToTime1
				this.fasong(this.typeName,this.typeCont)		//索要项目或索要名片   进来就执行；
				this.Token=this.$route.params.token;
				this.uid=this.$route.params.to_id;		//对方id
				this.type=this.$route.params.type;		//对方人名
				var thate=this;
				this.datas={
					token:this.Token,
					to_id:this.uid			//对方id
				}
				console.log(this.type)						//评论详情接口   随时更新信息
				thate.$http.post(URL.path+'chatcomment/comment_detail',thate.datas,{emulateJSON:true}).then(function(res){
					Indicator.close();
					this.toName=[0]['item_id']
					console.log(res);
					var cont="xxx 总经理 申请换取名片"
					var res=res.body.data;
					var length=res.length;
					if(res[0].from_id==this.uid){
						this.from_photo=res[0]['from_photo'];	//发送方头像
//						this.to_photo=res[0]['to_photo'];	//我的方头像
						this.to_photo=localStorage.getItem("photourl");	//我的方头像
					}else{
						this.from_photo=res[0]['to_photo'];	//发送方头像
//						this.to_photo=res[0]['from_photo'];	//我的方头像
						this.to_photo=localStorage.getItem("photourl");	//我的方头像
					}
					this.from_id=res[0]['from_id'];		//发送方id
					this.to_id=res[0]['to_id'];			//我的id
					this.id=res[0]['id'];					//发送方名片id	
					this.item_id=res[0]['item_id'];				//发送方项目id
					console.log(res);
					res=res.reverse();
					for(var item in res){
						if(res[item].type==1){		//type=1:评论
							if(res[item].from_id==this.uid){
								this.tousuoGo(this.numToTime1(res[item].create_time));
								this.You('0',res[item].content)
							}else{
								this.tousuoGo(this.numToTime1(res[item].create_time));
								this.My('0',res[item].content);
							}
						}
						if(res[item].type==2){		//type=2:项目请求
							if(res[item].from_id==this.uid){
								var MingPian="2";
								var DianJi=res[item].agree
								var cont=JSON.parse(res[item].content);
								var name=cont.user[1]
								this.tousuoContent=this.numToTime1(res[item].create_time);
								this.tousuoGo(this.numToTime1(res[item].create_time));
								
								this.You('1',name,cont.to_id,cont.item_id,MingPian,DianJi,res[item].id,cont.com_short)
								console.log(res[item].id)
								console.log(DianJi)
							}else{
								this.tousuoGo(this.numToTime1(res[item].create_time));
								
								this.TishiNeirong('您已成功向对方索要完整项目')
							}
						}
						if(res[item].type==4){		//type=4:发送项目
							if(res[item].from_id==this.uid){
								var cont=JSON.parse(res[item].content);
								if(cont.operate==1){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									
									this.TishiNeirong('对方已将完整项目发送给你')		//提示信息函数
								}
								if(cont.operate==2){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									
									this.TishiNeirong('对方拒绝了您索要申请完整项目')
								}
							}else{
								var cont=JSON.parse(res[item].content);
								if(cont.operate==1){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									
									this.TishiNeirong('您同意了向对方发送完整项目')		//提示信息函数
								}
								if(cont.operate==2){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									
									this.TishiNeirong('您拒绝了向对方发送完整项目')
								}
							}
						}
						if(res[item].type==3){		//type=3:名片请求
							if(res[item].from_id==this.uid){
								var MingPian="3";
								var DianJi=res[item].agree
								var i=0;
								var cont=JSON.parse(res[item].content);
								var name=cont.card[1]
								this.tousuoContent=this.numToTime1(res[item].create_time);
								this.tousuoGo(this.numToTime1(res[item].create_time));
								
								this.You('1',name,cont.id,cont.item_id,MingPian,DianJi,res[item].id)
								console.log(JSON.parse(res[item].content))
								console.log(DianJi)
								i++;
							}else{
								this.tousuoGo(this.numToTime1(res[item].create_time));
								
								this.TishiNeirong('您已成功向对方申请交换名片')
							}
						}
						if(res[item].type==5){		//type=5:发送名片
							if(res[item].from_id==this.uid){
								var MingPian="5";
								var cont=JSON.parse(res[item].content)
								if(cont.operate==1){
									cont.card[0];
									this.tousuoContent=this.numToTime1(res[item].create_time);
									this.tousuoGo(this.numToTime1(res[item].create_time));
									if(cont.card[0].id==this.uid){
										this.You('1',cont.card[0],'0','1',MingPian);
									}else{
										this.You('1',cont.card[1],'0','1',MingPian);
									}
								}
								if(cont.operate==2){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('对方拒绝了您交换名片的申请')
								}
								if(cont.operate==3){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('对方拒绝了您交换名片的申请')
								}
							}else{
								var MingPian="5";
								var cont=JSON.parse(res[item].content)
								if(cont.operate==2){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('您拒绝了对方交换名片的申请')		//提示信息函数
								}else{
									this.tousuoGo(this.numToTime1(res[item].create_time));
									
									this.TishiNeirong('您同意了对方交换名片的申请');		//提示信息函数
									
									this.tousuoGo(this.numToTime1(res[item].create_time));
									if(cont.card[1].id==this.uid){
										this.You('1',cont.card[1],'0','1',MingPian);
									}else{
										this.You('1',cont.card[0],'0','1',MingPian);
									}
								}
								if(cont.operate==3){
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('由于您长时间未反馈，系统默认拒绝名片交换申请');
								}
							}
						}
						if(res[item].type==6){		//type=6:跟进和不跟进
							var cont=JSON.parse(res[item].content);
							var follow=cont.follow;
							var com_short=cont.com_short;
							var name=cont.from_name;
							if(res[item].from_id==this.uid){
								if(follow==1){//跟进
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong(name+'对您的“'+com_short+'”'+'项目有投资兴趣，将进一步跟进本次融资安排')
								}
							}else{
								if(follow==1){//跟进
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('您对'+'“'+com_short+'”'+'项目有投资兴趣，进一步跟进本次融资安排')
								}else{
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('您放弃了'+'“'+com_short+'”'+'项目的本次融资')
								}
							}
						}
						if(res[item].type==7){		//type=7:结束项目
							var cont=JSON.parse(res[item].content);
							var follow=cont.follow;
							var com_short=cont.com_short;
							var to_name=cont.to_name;
							var from_name=cont.from_name;
							if(res[item].from_id==this.uid){
								if(follow==1){//跟进
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong(from_name+'已放弃跟进您的“'+com_short+'”'+'项目')
								}else{
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('恭喜您，'+from_name+'跟进的您的“'+com_short+'”'+'项目已过会！')
								}
							}else{
								if(follow==1){//跟进
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('您放弃跟进'+to_name+'的“'+com_short+'”'+'项目！')
								}else{
									this.tousuoGo(this.numToTime1(res[item].create_time));
									this.TishiNeirong('恭喜您，您跟进的“'+com_short+'”'+'项目已过会！')
								}
							}
						}
						if(res[item].type==8){		//type=1:评论
							if(res[item].from_id==this.uid){
								this.tousuoGo(this.numToTime1(res[item].create_time));
								this.You('0',res[item].content)
							}
						}
					}
	//					console.log(this.My);
					var type=1
	//					this.My(type,cont);		//随时更新信息
	//					this.You(type,cont)
	//					this.FasongShijian();
					this.$nextTick(function(){
						var img = this.$refs.contentTexte.getElementsByTagName("img");
						var length=img.length;
						var contentTexte=this.$refs.contentTexte;
						contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
						for (var i = 0; i < length; i++) {
							img[i].onload =function(){
								if (this.clientWidth>this.clientHeight) {
									this.style.height="100%"
									this.style.width="auto"
								}else{
									this.style.width="100%"
									this.style.height="auto"
								}
							}
						}
					})
				},function(res){
					Indicator.close();
				    console.log(res);
				})
			},
			yijianHind(){
				history.go(-1);
			},
			xuanZe(index,id){
				this.selectedID=id;
				var font=this.$refs.selecteds.getElementsByTagName("font")
				var length=font.length;
				for(var i=0; i<length; i++){
					font[i].setAttribute("class","src1");
				}
				font[index].setAttribute("class","src2");
			},
			idQueding(){
				this.contBlock=true;
				this.idBlock=false;
			},
			idQuxiao(){
				this.onlyContent=false;
			},
			tousuBlock(){
				var type=localStorage.getItem("type");
				if(type=='1' || type=='7'){
					this.onlyContent1=true;
				}else{
					this.onlyContent=true;
				}
			},
//			投诉调用
			BugenYuanyin(texts){
				var farams={			//发送评论接口
					token:this.Token,
//					to_id:this.uid,					//对方id	是	[string]
					terminalNo: '3',
					rid: this.uid,
					content:texts,
					ctype:6		//举报原因id
//					ctype: this.selectedID		//举报原因id
				}
				console.log(farams)
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'account/report',farams,{emulateJSON:true}).then(function(res){
					Indicator.close();
//					Toast("提交后我们将在24小时内处理")
					Toast("投诉成功")
					this.onlyContent=false;
					this.onlyContent1=false;
					console.log(res);
				},function(res){
					Indicator.close();
					Toast(data.msg)
				    console.log(res);
				})
			},
			tousuoGo(times){			//提示投诉信息内容按钮
				var contentTexte=this.$refs.contentTexte;
				this.tousuoContent="投诉成功！"
				var tiShi=document.createElement("div");		//提示信息内容
				var textCont=document.createElement("font");
				textCont.innerText=times;						//后台获取信息插入
				tiShi.appendChild(textCont);
				this.prent.appendChild(tiShi);
				textCont.style.color="#fff";
				textCont.style.lineHeight="0.22rem";
				textCont.style.fontSize="0.16rem";
				textCont.style.background="#cfced2";
				textCont.style.display="inline-block";
				textCont.style.padding="0 0.06rem";
				textCont.style.borderRadius="0.04rem";
				textCont.style.wordWrap="break-word";
				tiShi.style.width="82%";
				tiShi.style.margin="0 auto";
				tiShi.style.padding="0.1rem 0";
				tiShi.style.textAlign="center";
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
//				this.FasongShijian();
			},
			shangyi(){
				var contentTexte=this.$refs.contentTexte;
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
			},
			ChushiHuaTimes(){			//初始化时间函数
				var times=new Date();           //实例化日期对象；
				var myMonth=times.getMonth();   //当前的月份；
				myMonth=myMonth+1;				//当前的月份；
				var myDate=times.getDate();      //当前的日期；
				var myHours=times.getHours();   //当前的小时；
				if(times.getMinutes()<10){
					var myMinutes='0'+times.getMinutes().toString()   //当前的分钟；
				}else{
					var myMinutes=times.getMinutes();   //当前的分钟；
				}
				return myHours+":"+myMinutes;
				console.log(myMinutes)
			},
			FasongShijian(){	//发送时间显示函数
				var contentTexte=this.$refs.contentTexte;
				var shiJian=document.createElement("div");				
				var shiJianCont=document.createElement("font");
				shiJianCont.innerText=this.ChushiHuaTimes();		//调用初始化时间函数
				shiJian.appendChild(shiJianCont);
				this.prent.appendChild(shiJian);
				shiJianCont.style.color="#fff";
				shiJianCont.style.lineHeight="0.21rem";
				shiJianCont.style.fontSize="0.16rem";
				shiJianCont.style.background="#cfced2";
				shiJianCont.style.display="inline-block";
				shiJianCont.style.padding="0 0.06rem";
				shiJianCont.style.borderRadius="0.04rem";
				shiJian.style.padding="0.1rem 0";
				shiJian.style.textAlign="center";
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
			},
			My(type,cont){		//我要发送信息处理函数
				var contentTexte=this.$refs.contentTexte;
				var you=document.createElement("div");			//创建元素        我要发送的dom
				var	neiRong=document.createElement("div");		//内容信息
				var touXiang=document.createElement("div");		//头像
				var span=document.createElement("span");
				var imaF=document.createElement("div")
				var img=document.createElement("img");
				var imgs=document.createElement("div");
				you.setAttribute("class","fankiu-you");			//添加属性
				neiRong.setAttribute("class","fankiu-text clearbox");
				touXiang.setAttribute("class","fankiu-img");
//					imgs.style.backgroundImage="url('./dist/you.png')";
//				img.setAttribute("class","border");
//					span.appendChild(imgs);
				neiRong.appendChild(span);
				neiRong.appendChild(imgs);
				imaF.appendChild(img);
				touXiang.appendChild(imaF);
				you.appendChild(neiRong);
				you.appendChild(touXiang);
				this.prent.appendChild(you);
				you.style.width="92%";						//样式4
				you.style.margin="0 auto";
				you.style.textAlign="justify";
				you.style.lineHeight="0.2rem";
				you.style.overflow="hidden";
				you.style.padding="0.05rem 0";
				neiRong.style.width="86%";
				neiRong.style.float="left";
//					neiRong.style.overflow="hidden";
				neiRong.style.position="relative";
				span.style.display="inline-block";
				span.style.padding="0.08rem 0.1rem";
				span.style.background="#ff7a59";
				span.style.color="#fff";
				span.style.float="right";
				span.style.maxWidth="77%";
				span.style.borderRadius="0.04rem";
				span.style.fontSize="0.16rem";
				span.style.border="1px solid #d4d2d2";
				span.style.wordWrap="break-word";
				touXiang.style.width="14%";
				touXiang.style.float="left";
				touXiang.style.overflow="hidden";
				imaF.style.width="0.38rem";
				imaF.style.height="0.38rem";
				imaF.style.border="1px solid #d4d2d2";
				imaF.style.boxSizing="border-box";
				imaF.style.float="right";
				imaF.style.overflow="hidden";
				imaF.style.borderRadius="0.02rem";
//				img.style.width="0.38rem";
//				img.style.height="0.38rem";
				img.style.background="#EAEAEA";
				img.style.float="right";
				img.style.borderRadius="0.02rem";
				img.src=this.to_photo;
				imgs.style.position="absolute";
				imgs.style.background="#ff7a59";
				imgs.style.borderRight="0.008rem solid #d4d2d2";
				imgs.style.borderTop="0.008rem solid #d4d2d2";
//					imgs.style.border="0.008rem solid #d4d2d2";
//					imgs.style.transform="skew(50deg,0deg)";
				imgs.style.transform="rotate(45deg)";
				imgs.style.width="0.08rem";
				imgs.style.height="0.08rem";
				imgs.style.top="0.13rem";
				imgs.style.right="-0.04rem";
				imgs.style.Zindex=100;
				if(type==1){			//发送的是名片
					span.style.background="#fff";
					imgs.style.background="#fff";
					span.appendChild(this.MingpianTishi(cont));
				}else{
					span.innerHTML=cont;							//对应插入
					this.introduction="";
				}
//				this.FasongShijian();
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
			},
			You(type,cont,id,item_id,MingPian,DianJi,chat_id,com_short){		//对方要发送信息处理函数
				var contentTexte=this.$refs.contentTexte;
				var my=document.createElement("div");			//创建元素		对方要发送的dom
				var	neiRong=document.createElement("div");
				var touXiang=document.createElement("div");
				var span=document.createElement("span");
				var imaF=document.createElement("div");
				var img=document.createElement("img");
				var imgs=document.createElement("div");
				var tata=this;
				my.setAttribute("class","fankiu-my");			//添加属性
				neiRong.setAttribute("class","fankiu-text");
				touXiang.setAttribute("class","fankiu-img");
//				img.setAttribute("class","border");
//						span.innerText=texts;							//对应插入
				neiRong.appendChild(span);
				neiRong.appendChild(imgs);
				imaF.appendChild(img);
				touXiang.appendChild(imaF);
				my.appendChild(touXiang);
				my.appendChild(neiRong);
				this.prent.appendChild(my);
				my.style.width="92%";						//样式4
				my.style.margin="0 auto";
				my.style.lineHeight="0.2rem";
				my.style.textAlign="justify";
				my.style.display="flex";
				my.style.padding="0.05rem 0";
				neiRong.style.width="86%";
				neiRong.style.position="relative";
//					neiRong.style.float="left";
				span.style.display="inline-block";
				span.style.padding="0.08rem 0.1rem";
				span.style.background="#fff";
				span.style.maxWidth="77%"
				span.style.borderRadius="0.04rem";
				span.style.fontSize="0.16rem";
				span.style.border="1px solid #d4d2d2";
				span.style.wordWrap="break-word";
				touXiang.style.width="14%";
//					touXiang.style.float="left";
				imaF.style.width="0.38rem";
				imaF.style.height="0.38rem";
				imaF.style.border="1px solid #d4d2d2";
				imaF.style.boxSizing="border-box";
				imaF.style.overflow="hidden";
				imaF.style.borderRadius="0.02rem";
				imaF.onclick=function(){
	//				对方个人资料
					var params={
		//	    		token:this.userContent.token,
			    		uid:tata.uid
			    	}
					tata.$http.post(URL.path1+'account/info',params,{emulateJSON:true}).then(function(res){
						var ctype=res.body.data.ctype
						var Tid=res.body.data.info.investment_type
//						(id,Tid,uid){		//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构/研究咨询 5:券商研究员 6:新三板做市商 7:财务顾问
//						console.log(Tid)
//						(item.ctype,item.investment_type,item.uid)
						if(ctype=='2'){
							if(Tid=='0'){
								window.location.href="#/fankuixinxi/1/2/3/ziLiaoT1"+"/"+tata.uid;//1:股权投资   2:债权投资   3:股债兼投
							}else{
								window.location.href="#/fankuixinxi/1/2/3/ziLiaoT"+Tid+"/"+tata.uid;//1:股权投资   2:债权投资   3:股债兼投
							}
							
						}else{
							window.location.href="#/fankuixinxi/1/2/3/ziLiao"+ctype+"/"+tata.uid;
						}
						
						
						console.log(res);
					},function(res){
					    console.log(res);
					})
				}
//				img.style.width="0.38rem";
//				img.style.height="0.38rem";
				img.style.background="#EAEAEA";
				img.style.borderRadius="0.02rem";
				img.style.float="left";
				img.src=this.from_photo;
				imgs.style.position="absolute";
				imgs.style.background="#fff";
				imgs.style.width="0.08rem";
				imgs.style.height="0.08rem";
				imgs.style.borderLeft="0.008rem solid #d4d2d2";
				imgs.style.borderTop="0.008rem solid #d4d2d2";
				imgs.style.transform="rotate(-45deg)";
				imgs.style.top="0.13rem";
				imgs.style.left="-0.04rem";
				imgs.style.Zindex=100;
				if(type==1){			
					span.style.background="#fff";
					imgs.style.background="#fff";
					if(MingPian=="5"){
						span.appendChild(this.MingpianTishi(cont,id,item_id));
					}else{
						span.appendChild(this.HuanquSenqing(cont,id,item_id,MingPian,DianJi,chat_id,com_short));
					}
				}else{
					span.innerHTML=cont;							//对应插入
					this.introduction="";
				}
				contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
			},
			MingpianTishi(cont,name,pont){			//申请换名片处理函数
				var thata=this;
				var mingPianTishi=document.createElement("div");			//申请换名片提示   创建DOM元素
				var	NameTishi=document.createElement("p");
				var SpanTishi=document.createElement("span");
				var FontTishi=document.createElement("font");
				var	GerenTishi=document.createElement("p");
				SpanTishi.innerText=cont['uname'];							//后台获取信息插入
				FontTishi.innerText=cont['phone'];					//后台获取信息插入
				GerenTishi.innerText="个人名片";
				NameTishi.appendChild(SpanTishi);
				NameTishi.appendChild(FontTishi);
				mingPianTishi.appendChild(NameTishi);
				mingPianTishi.appendChild(GerenTishi);
//						thata.prent.appendChild(mingPianTishi);						//最终要插入到对话框内
				mingPianTishi.style.width="2.02rem";
				mingPianTishi.style.margin="0 auto";
				mingPianTishi.style.minHeight="0.56rem";
				mingPianTishi.style.fontSize="0.16rem";
				mingPianTishi.style.background="#fff";
				NameTishi.style.lineHeight="0.34rem";
				NameTishi.style.height="0.4rem";
				NameTishi.style.color="#07111B";
				SpanTishi.style.display="inline-block";
				SpanTishi.style.padding="0 0.07rem 0 0";
				GerenTishi.style.borderTop="1px solid #cfcfcf";
				GerenTishi.style.fontSize="0.13rem";
				GerenTishi.style.padding="0.06rem 0 0 0.03rem";
				GerenTishi.style.color="#b4b4b4";
				mingPianTishi.onclick=function(){		//提示添加通讯录弹框
					thata.$refs.tishiShow.tishiBlock(thata.tongxun,FontTishi.innerText);//CanShu是下级要传的参数
				}
				return mingPianTishi;
			},
			HuanquSenqing(cont,id,item_id,MingPian,DianJi,chat_id,com_short){			//换名片和发送项目申请提示处理函数
				var thata=this;
				var mingPian=document.createElement("div");			//换名片申请提示	  是否确定换名片  创建DOM元素    在对方对话框内显示
				var	mingText=document.createElement("p");
				var mingSpan=document.createElement("span");
				var mingFont=document.createElement("font");
				if(MingPian==2){
					mingText.innerText="您好，我对“"+com_short+"”有投资兴趣，申请查看完整的项目信息";		//后台获取信息插入
				}
				if(MingPian==3){
					mingText.innerText=cont['uname']+"对您的项目感兴趣，向您申请了换名片，你若7天未反馈，默认拒绝";		//后台获取信息插入
				}
				mingSpan.innerText="同意";
				mingFont.innerText="拒绝";
				mingPian.appendChild(mingText);
				mingPian.appendChild(mingSpan);
				mingPian.appendChild(mingFont);
//						thata.prent.appendChild(mingPian);						//最终要插入到对话框内
				mingPian.style.width="2.02rem";
				mingPian.style.margin="0 auto";
				mingPian.style.minHeight="0.63rem";
				mingPian.style.position="relative";
				mingPian.style.background="#fff";
				mingText.style.lineHeight="0.21rem";
				mingText.style.fontSize="0.16rem";
				mingText.style.wordWrap="break-word";
				mingText.style.padding="0 0 0.36rem 0";
				mingText.style.color="#07111B";
				mingSpan.style.position="absolute";
				mingSpan.style.left="0";
				mingSpan.style.bottom="0";
				mingSpan.style.color="#f5f4f9";
				mingSpan.style.width="46%";
				mingSpan.style.height="0.31rem";
				mingSpan.style.borderRadius="0.04rem";
				mingSpan.style.background="#ff7a59";
				mingSpan.style.lineHeight="0.31rem";
				mingSpan.style.textAlign="center";
				if(DianJi==1 || DianJi==2){
					mingSpan.style.color="#000000";
					mingSpan.style.background="#f5f4f9";
				}
				var i=0;
				mingSpan.onclick=function(){			//绑定换名片同意事件
					if(DianJi==1 || DianJi==2){
						Toast("不可重复反馈");
						return;
					}
					if(i==1){
						Toast("不可重复反馈");
//						mingSpan.style.color="#000000";
//						mingSpan.style.background="#f5f4f9";
						return;
					}
					i++;
					console.log(i)
					if(MingPian=='2'){
						thata.datasB={							//处理发送项目同意
							token:thata.$route.params.token,
							item_id:item_id,	//项目id	是	[string]
							chat_id:chat_id,			//评论id
							to_id:id,		//接受方id	是	[string]		
							operate:'1'		//1同意2拒绝	
//							demand:"2"		//是否索要 1:非索要 2:索要
						}
						console.log(thata.datasB)				//处理发送项目同意接口
						thata.$http.post(URL.path+'finance/send_demand_item',thata.datasB,{emulateJSON:true}).then(function(res){
							var data=res
							console.log("处理发送项目同意"+res);
							console.log(res);
							if(res.body.msg=="操作成功"){
								this.FasongShijian();
								this.TishiNeirong("您同意了向对方发送完整项目信息");
							}
						},function(res){
						    console.log(res);
						})
					}else{
						thata.datasB={							//处理换名片同意
							token:thata.$route.params.token,
							from_id:thata.from_id,	//发送方id	是	[string]		
							id:id,				//名片id	是	[string]		
							item_id:item_id,	//项目id	是	[string]		
							operate:"1",		//操作 1:同意 2:拒绝
							chat_id:chat_id		//评论id
						}
						console.log(thata.datasB)				//处理换名片同意接口
						thata.$http.post(URL.path+'chatcomment/card_operate',thata.datasB,{emulateJSON:true}).then(function(res){
							var data=res
							console.log("处理换名片同意"+res);
							console.log(res);
							this.FasongShijian();
							this.TishiNeirong("您同意了对方名片的申请");
						},function(res){
						    console.log(res);
						})
					}
//						thata.FasongShijian();
				}
				mingFont.style.position="absolute";
				mingFont.style.right="0";
				mingFont.style.bottom="0";
				mingFont.style.width="46%";
				mingFont.style.height="0.31rem";
				mingFont.style.borderRadius="0.04rem";
				mingFont.style.background="#f5f4f9";
				mingFont.style.lineHeight="0.31rem";
				mingFont.style.textAlign="center";
				mingFont.onclick=function(){			//绑定换名片拒绝事件
					if(DianJi==1 || DianJi==2){
						Toast("不可重复反馈");
						return;
					}
					if(i==1){
						Toast("不可重复反馈");
//						mingSpan.style.color="#000000";
//						mingSpan.style.background="#f5f4f9";
						return;
					}
					i++;
					if(MingPian=='2'){
						thata.datasB={						//处理发送项目拒绝
							token:thata.$route.params.token,
							item_id:item_id,	//项目id	是	[string]
							chat_id:chat_id,			//评论id
							to_id:id,		//接受方id	是	[string]		
							operate:'2'		//1同意2拒绝	
//							demand:"2"		//是否索要 1:非索要 2:索要
						}
						console.log(thata.datasB)			//处理发送项目拒绝接口
						thata.$http.post(URL.path+'finance/send_demand_item',thata.datasB,{emulateJSON:true}).then(function(res){
							var data=res
							console.log("处理发送项目拒绝");
							console.log(res);
							this.FasongShijian();
							this.TishiNeirong("您拒绝了向对方发送完整项目信息");
						},function(res){
						    console.log(res);
						})
					}else{
						thata.datasB={						//处理换名片拒绝
							token:thata.$route.params.token,
							from_id:thata.from_id,	//发送方id	是	[string]		
							id:id,				//名片id	是	[string]		
							item_id:item_id,	//项目id	是	[string]		
							operate:"2",		//操作 1:同意 2:拒绝
							chat_id:chat_id		//评论id
						}
						console.log(thata.datasB)			//处理换名片拒绝接口
						thata.$http.post(URL.path+'chatcomment/card_operate',thata.datasB,{emulateJSON:true}).then(function(res){
							var data=res
							console.log("处理换名片拒绝");
							console.log(res);
							this.FasongShijian();
							this.TishiNeirong("您拒绝了对方名片的申请");
						},function(res){
						    console.log(res);
						})
					}
//					thata.FasongShijian();
				}
				return mingPian;
			},
			TishiNeirong(texts){			//换名片时提示信息内容处理函数    或其他提示信息
				var tiShi=document.createElement("div");		//创建DOM元素
				var textCont=document.createElement("font");
				textCont.innerText=texts;						//插入提示信息
				tiShi.appendChild(textCont);
				this.prent.appendChild(tiShi);
				textCont.style.color="#b4b4b4";
				textCont.style.lineHeight="0.2rem";
				textCont.style.fontSize="0.16rem";
				textCont.style.wordWrap="break-word";
				tiShi.style.width="82%";
				tiShi.style.margin="0 auto";
				tiShi.style.padding="0.1rem 0";
				tiShi.style.textAlign="center";
			},
			tongyiYanzheng(){
				
			},
			fasong(typeName,typeCont){		//发送按钮
				var thata=this;
//				var DEHeight;
//				this.DEHeight=DEHeight    //窗口高度
				var contentTexte=this.$refs.contentTexte;
				var shuru=this.$refs.shuru;				
//				var texts=this.$refs.texts.innerText;
				var texts=this.introduction;		//发送内容
				var yiyou=0;
				//验证手机
		        if(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/.test(texts)){
//		        	Toast("请不要输入敏感字符")
		        	this.introduction="";
		        	texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
		        	yiyou=1;
//		        	return;
		        }
		        if(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]$/.test(texts)){
//		        	Toast("请不要输入敏感字符")
					if(yiyou==0){
			        	this.introduction="";
			        	texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
			        	yiyou=1;
			        }
//		        	return;
		        }
		         if(/^[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【](0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}|[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]$/.test(texts)){
//		        	Toast("请不要输入敏感字符")
		        	if(yiyou==0){
			        	this.introduction="";
			        	texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
			        	yiyou=1;
		        	}
//		        	return;
		        }
		        //验证电话
		        if(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
//		        if(/^(\(\d{3,4}\)[-][0-9]{6,8}){8,14}$/.test(texts)){
////					Toast('请不要输入敏感字符');
//					this.introduction="";
//					texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
////					return;
//				}
		        if(/^[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【](\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}|[！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
		        if(/^1[0-9]{4}[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="PHONE<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
//				//验证qq
				if(/^[1-9][0-9]{4,9}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="QQ<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/^[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【][1-9][0-9]{4,9}|[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="QQ<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/^[1-9][0-9]{4,9}[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="QQ<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
//				//验证微信号
				if(/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="WEIXIN<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				//验证微信号
				if(/^[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【][a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}|[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="WEIXIN<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				//验证微信号
				if(/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="WEIXIN<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
//				//邮箱
				if(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="E-MAIL<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/^[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="E-MAIL<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/@/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="E-MAIL<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				//邮编
				if(/^[1-9][0-9]{5}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="CONTACT<a>&nbsp;</a>WAY！<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/^[-_a-zA-Z0-9]{4,19}/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						texts="CONTACT<a>&nbsp;</a>WAY！<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/^[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【][-_a-zA-Z0-9]{4,19}[~|`|！|!|@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【][@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.]/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou=0){
						this.introduction="";
						texts="CONTACT<a>&nbsp;</a>WAY！<a>&nbsp;</a>NUNBER<a>&nbsp;</a>HIDDEN";
						yiyou=1;
					}
//					return;
				}
				if(/^[\u4E00-\u9FA5]{1,20}[-_a-zA-Z0-9]{5,19}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/^[\u4E00-\u9FA5]{1,20}([@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]|[-_a-zA-Z0-9]){5,19}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/^([\u4E00-\u9FA5]|[ ]|[-_a-zA-Z0-9]){1,20}([@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]|[-_a-zA-Z0-9]){5,19}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/(^([\u4E00-\u9FA5]|[ ]|[-_a-zA-Z0-9]){1,20}([@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]|[-_a-zA-Z0-9]){5,19}){1,10}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/(^([\u4E00-\u9FA5]|[ ]|[-_a-zA-Z0-9]){1,20}([@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【][\u4E00-\u9FA5]|[-_a-zA-Z0-9])){1,11}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/(^([\u4E00-\u9FA5]|[ ]|[-_a-zA-Z0-9]|([\u4E00-\u9FA5][ ][-_a-zA-Z0-9])){1,20}([@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【][\u4E00-\u9FA5]|[-_a-zA-Z0-9])){1,11}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/(^[\u4E00-\u9FA5]{1,20}|[-_a-zA-Z0-9]){5,20}[-_a-zA-Z0-9]{5,20}[\u4E00-\u9FA5]{1,20}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
			    if(/([-_a-zA-Z0-9]{5,20}[@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]){1,20}$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}if(/^[\u4E00-\u9FA5]{1,20}[@|#|$|%|&|*|:|<|>|?|^|：|\|''|""|‘|；|、|“”|‘’|’|-|——|+|=|（）|()|.|】|【]|[\da-zA-Z!@#$%^&*]$/.test(texts)){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return false;
				}
//			    if(/(^([\u4E00-\u9FA5|[-_a-zA-Z0-9\s]){1,20}([\u4E00-\u9FA5]|[-_a-zA-Z0-9\s])){1,20}$/.test(texts)){
////					Toast('请不要输入敏感字符');
//					if(yiyou==0){
//						this.introduction="";
//						var hanzi='';
//						var reg = /[\u4e00-\u9fa5]/g;   
//	        			hanzi=texts.match(reg).join("");  
//						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
//						yiyou=1;
//					}
////					return false;
//				}
				//定义敏感字符
			    var forbiddenArray =['我微信','微信','我的微信','我微信号是','我的微信号是','我邮箱是','我的邮箱是','我的邮箱是号','邮箱',
			    '我邮箱是号','我邮箱','我的邮箱','我的qq','我的qq号','我的qq号是','我qq','我的电话','我的手机','我电话是','我的电话号是','我的手机号是',
			    '邮编','加我','weixin','weinxinhao','@163.com','@qq.com','@','qq','QQ','这是我的手机号','我的手机号','手机号多少'];
			    //定义敏感字符函数
			    function forbiddenStr(str){
				//  var destString = trim(str);
			        var re = '';
			        for(var i=0;i<forbiddenArray.length;i++){
			            if(i==forbiddenArray.length-1)
			                re+=forbiddenArray[i];
			            else
			                re+=forbiddenArray[i]+"|";
			        }
			        //定义正则表示式对象
			        //利用RegExp可以动态生成正则表示式
			        var pattern = new RegExp(re,"g");
			        if(pattern.test(str)){
//			            alert('false');
			            return false;
			        }
			    }
			    var go=forbiddenStr(texts);
				if(go==false){
//					Toast('请不要输入敏感字符');
					if(yiyou==0){
						this.introduction="";
						var hanzi='';
						var reg = /[\u4e00-\u9fa5]/g;   
	        			hanzi=texts.match(reg).join("");  
						texts=hanzi+"</br>（NUNBER<a>&nbsp;</a>HIDDEN）";
						yiyou=1;
					}
//					return;
				}
				if(typeName){			//发送函数
					if(typeName==2){		//type=2:项目请求
						this.My('1',typeCont)
					}
					if(typeName==3){		//type=3:名片请求
						this.My('1',typeCont)
					}
				}
				var Height=shuru.clientHeight		//底部高度
				console.log(shuru.clientHeight)							//显示框高度
				var aaa=document.getElementById("box")
				if(texts!=""){
					this.FasongShijian();	//发送时间
//					var cont="xxx 总经理 申请换取名片"
//					var type=1					//如果tyoe=1发送的是名片
//					this.My(type,texts);		//我要发送信息处理函数
//					this.You(type,texts)		//对方要发送信息处理函数
					this.datasA={			//发送评论接口
						token:this.Token,
						to_id:this.uid,					//接收方id	是	[string]		
						content:texts,					//评论内容
						type:'1'
					}
					console.log(this.datasA)			//发送评论接口
					this.$http.post(URL.path+'chatcomment/send_msg',this.datasA,{emulateJSON:true}).then(function(res){
						var cont=texts;
						var type=0
						console.log("发送评论成功"+res);
						this.My(type,cont);		//调用发送评论函数
//						this.You(type,cont)
						this.$nextTick(function(){
							var img = this.$refs.contentTexte.getElementsByTagName("img");
							var length=img.length;
							var contentTexte=this.$refs.contentTexte;
							contentTexte.scrollTop=contentTexte.scrollHeight;  //滚动条始终在下面
							for (var i = 0; i < length; i++) {
								img[i].onload =function(){
									if (this.clientWidth>this.clientHeight) {
										this.style.height="100%"
										this.style.width="auto"
									}else{
										this.style.width="100%"
										this.style.height="auto"
									}
								}
							}
						})
					},function(res){
					    console.log(res);
					})
					this.introduction="";
				}else{
					return;
				}
			},
			watch:{
//				msg:function(newVal,oldVal){
//					console.log(newVal +"*********"+ oldVal)
//				}
			}
		},
		events:{
			
		},
		filters:{
		},
		updated(){
		},
		components:{
			tishi
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
	.fades-enter-active {
	  	transition: all .5s ease;
	}
	.fades-leave-active {
	  	transition: all .5s ease;
	}
	.fades-enter, .fades-leave-active {
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	
	.yijian{
		position:fixed;
		background:#f5f4f9;
		width:100%;
		height:100%;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:1000;
		.searchBox {
			position:fixed;
			top:0;
			left:0;
		    width: 100%;
		    height:0.45rem;
		    background-color:#ff7a59;
		    z-index:1320;
		    .home-search {
			    height: 100%;
			    line-height:0.45rem;
			    font-size: 0.2rem;
			    text-align: center;
			    color:#fff;
				.fanhui-butten{
					position:absolute;
					height:100%;
					padding-left:0.16rem;
					display:inline-block;
					top:0.04rem;
					left:0;
					z-index:1330;
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
			    		/*width:0.2rem;*/
			    		height:0.22rem;
			    		/*background-image:url("./img/lajitong.png");*/
			    		background-size:100% 100%;
			    		margin-bottom:-0.05rem;
			    	}
			    }
			    .tousu{
					/*position:absolute;
					top:0.05rem;
					right:0.16rem;*/
					width:0.48rem;
					height:0.15rem;
					color:#fff;
					font-size:0.16rem;
					padding-top:0.01rem;
					text-align:right;
					background-image:url("./img/hong.png");
					background-size:0.14rem 0.14rem;
					background-position:0 0;
					background-repeat:no-repeat;
					z-index:1310;
				}
			}
		}
		.content-text::-webkit-scrollbar{width:0px}
		.content-text{
			position:fixed;
			width:100%;
			height:87%;
			top:0;
			left:0;
			overflow-y:auto;
			z-index:1100;
			padding-bottom:1%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.box{
				width:100%;
				padding-top:0.5rem;
				height:auto;
			}
		}
		.shuru{
			position:fixed;
			height:12%;
			/*height:0.68rem;*/
			background:#e5e4eb;
			left:0;
			bottom:0;
			width:100%;
			z-index:1300;
			display:flex;
			align-content:center;
			align-items:center;
			justify-content:center;
			color:#fff;
			font-size: 0.16rem;
			ul{
				width:95%;
				height:0.36rem;
				margin:0 auto;
				li{
					width:100%;
					height:0.36rem;
					/*display:flex;*/
					.test_box{
						width:3.2rem; 
						line-height:0.16rem;
					    min-height: 0.20rem; 
					    max-height: 0.60rem;
					    _height: 0.20rem; 
					    margin-left: auto; 
					    margin-right: auto; 
					    padding: 0.04rem; 
					    outline: 0; 
					    border-bottom: 1px solid #a0b3d6; 
					    font-size: 0.16rem; 
					    word-wrap: break-word;
					    overflow-x: hidden;
					    /*overflow-y: hidden;*/
					    /*overflow-y:visible;*/
					    &::-webkit-scrollbar{width:0;height:0}
					}
					.fasong{
						width:0.65rem;
						height:0.35rem;
						background:#ff7a59;
						border-radius:0.04rem;
						display:flex;
						align-content:center;
						align-items:center;
						justify-content:center;
						color:#fff;
						font-size: 0.16rem; 
						float:right;
					}
					.mint-field-core{
						resize: none;
						width:76%;
						height:0.25rem;
						padding:0.1rem 0 0 0.12rem;
						float:left;
						line-height:0.16rem;
						border-radius:0.04rem;
						&::-webkit-scrollbar{width:0;height:0}
					}
				}
			}
		}
		.loding{
			display:flex;
			align-content:center;
			align-items:center;
			justify-content:center;
			.loadEffect{
	            width: 70%;
	            min-height: 0.40rem;
	            position: relative;
	            padding:0.2rem 0 0.3rem 0;
	            background: #fff;
	            border-radius:0.06rem;
	            .load-butten{
	            	width:100%;
	            	height:0.3rem;
	            	font{
		            	position:absolute;
		            	display:inline-block;
		            	background:#ff7a59;
		            	padding:0.06rem 0.1rem;
		            	color:#fff;
		            	border-radius:0.04rem;
		            	&.first{
		            		bottom:0.2rem;
		            		left:16%;
		            	}
		            	&.last{
		            		bottom:0.2rem;
		            		right:16%;
		            	}
		            }
	            }
	            .firsts{
	            	overflow:hidden;
	            	width: 83%;
	            	li{
	            		display:block;
	            		width:100%;
	            		font-size:0.16rem;
	            		text-align: center;
	            		padding-bottom:0.16rem;
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
	            		margin:0 0.055rem 0.06rem 0;
	            		&:nth-child(5n){
	            			margin-right:0;
	            		}
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
	            		margin:0 0.055rem 0.06rem 0;
	            		&:nth-child(5n){
	            			margin-right:0;
	            		}
	            	}
	            }
	        }
	        .loadEffect span{
	        	margin:0 auto;
	            display: block;
	            text-align:justify;
	            line-height: 0.22rem;
	            font-size: 0.16rem;
	            width: 80%;
	            .mint-field-core{
					resize: none;
					width:100%;
					min-height:0.77rem;
					line-height:0.16rem;
					&::-webkit-scrollbar{width:0;height:0}
				}
	        }
	    }
	    .loding{
			display:flex;
			align-content:center;
			align-items:center;
			justify-content:center;
			.loadEffect{
	            width: 70%;
	            min-height: 0.40rem;
	            position: relative;
	            padding:0.3rem 0;
	            background: #fff;
	            border-radius:0.06rem;
	            .load-butten{
	            	width:100%;
	            	height:0.4rem;
	            	font{
		            	position:absolute;
		            	display:inline-block;
		            	background:#ff7a59;
		            	padding:0.06rem 0.1rem;
		            	color:#fff;
		            	border-radius:0.04rem;
		            	&.first{
		            		bottom:0.2rem;
		            		left:16%;
		            	}
		            	&.last{
		            		bottom:0.2rem;
		            		right:16%;
		            	}
		            }
	            }
	        }
	        .loadEffect span{
	        	margin:0 auto;
	            display: block;
	            text-align:justify;
	            line-height: 0.22rem;
	            font-size: 0.16rem;
	            width: 80%;
	        }
	        .loadEffect{
	        	position:relative;
	        	ul{
	            	li{
	            		span{
	            			/*text-align:center;*/
	            			line-height: 0.46rem;
	            		}
	            		.last-bottom{
	            			line-height: 0.36rem;
	            		}
	            	}
	            }
	        }
	    }
	}
</style>


