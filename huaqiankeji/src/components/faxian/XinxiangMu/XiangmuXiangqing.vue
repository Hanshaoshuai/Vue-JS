<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header"></div>
			<div class="header-content" @click.stap="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>项目详情</span>
			</div>
			<div class="box">
				<div style="width:100%;height:0.55rem;"></div>
				<div class="fankiu border">
					<div class="content-food">
						<span class="laizi">来自：</span>
						<!--<img class="border" src="" alt="" />-->
						<span>&nbsp;{{data.uname}}&nbsp;</span>
						<font class="bbb border-left"></font>
						<span>{{data.short}}</span>
						<span>&nbsp;&nbsp;{{data.position}}</span>
						<div @click.stap="tousuBlock()" class="tousu"><span>投诉</span></div>
					</div>
				</div>
				<div class="tishi-bottom">
					<div class="border">
						<ul>
							<!--<li class="border-bottom"></li>-->
							<li class="tishi-center">
								<div class="content-heder">
									<span>{{data.com_short}}</span>
									<span class="text-center">（{{data.com_code}}）</span>
									<span v-if="data.type==1" class="texts">&nbsp;定增</span>
									<span v-if="data.type==2" class="texts">&nbsp;做市</span>
									<span v-if="data.type==3" class="texts">&nbsp;转老股</span>
									<span v-if="data.type==4" class="texts">&nbsp;股权质押</span>
									<span v-if="data.type==5" class="texts">&nbsp;融资租赁</span>
									<span v-if="data.type==6" class="texts">&nbsp;研报支持</span>
									<span v-if="data.type==7" class="texts">&nbsp;公司调研</span>
									<!--<span>&nbsp;{{data.type}}</span>-->
								</div>
							</li>
							<!--<li class="border-bottom"></li>-->
						</ul>
						<div class="zhuying_1">
							<div class="ferst"><span></span>投资亮点</div>
							<div class="last">
								<p>{{data.lightspot}}</p>
							</div>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>经营业绩</div>
						<div class="last lasts">
							<p>上一财年:&nbsp;营收<span style="margin-left:0.01rem;">{{data.last_year_revenue}}亿</span>&nbsp;扣非净利润<span style="margin-left:0.01rem;">{{data.last_year_profit}}万</span></p>
							<p>今年预计:&nbsp;营收<span style="margin-left:0.01rem;">{{data.predict_revenue}}亿</span>&nbsp;扣非净利润<span style="margin-left:0.01rem;">{{data.predict_profit}}万</span></p>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div v-if="data.type!=3" class="ferst"><span></span>融资计划</div>
						<div v-if="data.type==3" class="ferst"><span></span>转让计划</div>
						<div class="last">
							<p v-if="data.type==1">投前估值：<span>{{data.appraisement}}&nbsp;亿元</span></p>
							<p v-if="data.type==1">融资总额：<span>{{data.total_finance}}&nbsp;万元</span></p>
							<p v-if="data.type==1">每股价格：<span>{{data.share_price}}&nbsp;元</span></p>
							<p v-if="data.type==1">投前静态市盈率：<span>{{(data.appraisement*10000/data.last_year_profit).toFixed(1)}}&nbsp;倍</span></p>
							<p v-if="data.type==1">投后动态市盈率：<span>{{((data.appraisement*10000+data.total_finance*1)/data.predict_profit).toFixed(1)}}&nbsp;倍</span></p>
							
							<p v-if="data.type==2">投前估值：<span>{{data.appraisement}}&nbsp;亿元</span></p>
							<p v-if="data.type==2">融资总额：<span>{{data.total_finance}}&nbsp;万元</span></p>
							<p v-if="data.type==2">每股价格：<span>{{data.share_price}}&nbsp;元</span></p>
							<p v-if="data.type==2">投前静态市盈率：<span>{{(data.appraisement*10000/data.last_year_profit).toFixed(1)}}&nbsp;倍</span></p>
							<p v-if="data.type==2">投后动态市盈率：<span>{{((data.appraisement*10000+data.total_finance*1)/data.predict_profit).toFixed(1)}}&nbsp;倍</span></p>
							
							<p v-if="data.type==3">拟转股份数：<span>{{data.transfe_share}}&nbsp;万股</span></p>
							<p v-if="data.type==3">每股价格：<span>{{data.share_price}}&nbsp;元</span></p>
							<p v-if="data.type==3">融资总额：<span>{{data.transfe_share*data.share_price}}&nbsp;万元</span></p>
							<p v-if="data.type==3">企业估值：<span>{{data.appraisement}}&nbsp;亿元</span></p>
							<p v-if="data.type==3">静态市盈率：<span>{{(data.appraisement*10000/data.last_year_profit).toFixed(1)}}&nbsp;倍</span></p>
							<p v-if="data.type==3">动态市盈率：<span>{{(data.appraisement*10000/data.predict_profit).toFixed(1)}}&nbsp;倍</span></p>
							
							<p v-if="data.type==4">融资总额：<span>{{data.total_finance}}&nbsp;万元</span></p>
							<p v-if="data.type==4">质押周期：<span>{{data.pledge_time}}&nbsp;个月</span></p>
							
							<p v-if="data.type==5">融资总额：<span>{{data.total_finance}}&nbsp;万元</span></p>
							<p v-if="data.type==5">租赁周期：<span>{{data.repayment_time}}&nbsp;个月</span></p>
							
							<p v-if="data.type==7">投前估值：<span>{{data.appraisement}}&nbsp;亿元</span></p>
							<p v-if="data.type==7">融资总额：<span>{{data.total_finance}}&nbsp;万元</span></p>
							<p v-if="data.type==7">每股价格：<span>{{data.share_price}}&nbsp;元</span></p>
							<p v-if="data.type==7">投前静态市盈率：<span>{{(data.appraisement*10000/data.last_year_profit).toFixed(1)}}&nbsp;倍</span></p>
							<p v-if="data.type==7">投后动态市盈率：<span>{{((data.appraisement*10000+data.total_finance*1)/data.predict_profit).toFixed(1)}}&nbsp;倍</span></p>
							<!--<p>每股价格：<span>{{data.share_price}}&nbsp;元</span></p>
							<p>投前静态市盈率：<span>{{(data.appraisement*10000/data.last_year_profit).toFixed(1)}}&nbsp;倍</span></p>
							<p>投后动态市盈率：<span>{{((data.appraisement*10000+data.total_finance*1)/data.predict_profit).toFixed(1)}}&nbsp;倍</span></p>-->
						</div>
					</div>
					<div v-if="data.type==7" class="zhuying_1 border">
						<div class="ferst"><span></span>调研时间和地点</div>
						<div class="last">
							<p>{{data.research_address}}</p>
						</div>
					</div>
					<div v-if="data.type==3" class="zhuying_1 border" style="margin-top:0.1rem;">
						<div class="ferst"><span></span>减持原因</div>
						<div class="last">
							<p>{{data.is_hold}}</p>
						</div>
					</div>
				</div>
				<div ref="foods" class="border aaa">
					<div v-if="data.type==1" class="content-header" @click.stap="chakanBA()">
						<span>查看商业计划书（BP）</span>
						<font>{{titBox}}</font><span>{{daXiao}}</span>
					</div>
					<div v-if="data.type==1" ref="baogao" class="content-header" @click.stap="xiangguan()">
						<span>查看项目分析与尽调报告</span>
						<font ref="baogaoChild">{{titBox2}}</font><span>{{daXiao2}}</span>
					</div>
					<div v-if="data.type==2" class="content-header" @click.stap="chakanBA()">
						<span>查看商业计划书（BP）</span>
						<font>{{titBox}}</font><span>{{daXiao}}</span>
					</div>
					<div v-if="data.type==2" ref="baogao" class="content-header" @click.stap="xiangguan()">
						<span>查看项目分析与尽调报告</span>
						<font ref="baogaoChild">{{titBox2}}</font><span>{{daXiao2}}</span>
					</div>
					<div v-if="data.type==3" class="content-header" @click.stap="chakanBA()">
						<span>查看商业计划书（BP）</span>
						<font>{{titBox}}</font><span>{{daXiao}}</span>
					</div>
					<div v-if="data.type==3" ref="baogao" class="content-header" @click.stap="xiangguan()">
						<span>查看项目分析与尽调报告</span>
						<font ref="baogaoChild">{{titBox2}}</font><span>{{daXiao2}}</span>
					</div>
					<div v-if="data.type==4" class="content-header" @click.stap="chakanBA()">
						<span>查看资金用途及还款计划</span>
						<font>{{titBox}}</font><span>{{daXiao}}</span>
					</div>
					<div v-if="data.type==5" class="content-header" @click.stap="chakanBA()">
						<span>查看资金用途及还款计划</span>
						<font>{{titBox}}</font><span>{{daXiao}}</span>
					</div>
					<div v-if="data.type==7" class="content-header" @click.stap="chakanBA()">
						<span>查看商业计划书（BP）</span>
						<font>{{titBox}}</font><span>{{daXiao}}</span>
					</div>
					<div v-if="data.type==7" ref="baogao" class="content-header" @click.stap="xiangguan()">
						<span>查看项目分析与尽调报告</span>
						<font ref="baogaoChild">{{titBox2}}</font><span>{{daXiao2}}</span>
					</div>
				</div>
				<div class="times border">
					<span class="text-center">{{left}}</span>
					<span>发布</span>
					<div class="times-name">
						<font></font>
						<span class="text-center">剩余有效期&nbsp;{{right}}</span>
					</div>
				</div>
				<box></box>
				<div v-if="data.end_follow!='2'" class="butten">
					<div class="tousu"><span>保密信息，禁止传播</span></div>
					<ul>
						<li @click.stap="liuYanTo()"><span :class="liuYans"></span><p>留言询问</p></li>
						<li @click.stap="jiaoHuanTo()"><span :class="jiaoHuans"></span><p>换名片</p></li>
					</ul>
				</div>
			</div>
			<div v-if="data.end_follow!='2'" class="baoming border-top">
				<span class="border-right" :class="butenLeft" @click.stap="genJin()">{{genjins}}</span>
				<span :class="butenRight" @click.stap="buGen()">不感兴趣</span>
			</div>
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
			<transition name="fades">
				<div @click.stop="xiaoShi1()" ref="xianShi" v-show="onlyContent" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				    <div class="loadEffect" ref="padding">
						<ul v-show="firstTop">
							<li class="border-bottom" @click.stop="BugenYuanyin('营收和净利润规模偏小')"><span>营收和净利润规模偏小</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('融资估值有点贵')"><span>融资估值有点贵</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('主营业务比较传统')"><span>主营业务比较传统</span></li>
							<li class="border-bottom" @click.stop="BugenYuanyin('非关注领域')"><span>非关注领域</span></li>
							<li @click.stop="BugenYuanyin('有同事已经接触过')"><span>有同事已经接触过</span></li>
						</ul>
					</div>	
				</div>
			</transition>
			<!--1、买方身份的投诉（企业反馈）：投资机构、合格投资人、做市商、研究咨询-->
			<transition name="fades1">
				<div @click.stop="xiaoShi()" ref="xianShi" v-show="onlyContent1" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				    <div class="loadEffect" ref="padding">
						<ul>
							<li class="border-bottom" @click.stop="BugenYuanyin1('项目业绩涉嫌严重造假')"><span>项目业绩涉嫌严重造假</span></li>
							<li class="" @click.stop="BugenYuanyin1('其他原因')"><span>其他原因</span></li>
						</ul>
					</div>	
				</div>
			</transition>
			<transition name="fades2">
				<div @click.stop="xiaoShi2()" ref="xianShi" v-show="onlyContent2" class="loding" style="position: absolute;z-index: 1600; top: 0;right: 0;bottom: 0;left: 0;background-color: rgba(0,0,0,0.3);display: none;">
				    <div class="loadEffect" ref="padding">
						<ul>
							<li class="border-bottom" @click.stop="BugenYuanyin2('1')"><span>确定申请</span></li>
							<li class="" @click.stop="BugenYuanyin2('0')"><span>取消</span></li>
						</ul>
					</div>	
				</div>
			</transition>
			<router-view :srcgo="srcgo" :jihuaShu='jihuaShu'></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
//	import {numToTime} from "../../../common/js/date.js";
	import {common} from "../../../common/js/common.js";
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	import tishi from "../../Tishi.vue";
	
	
	export default {
		props:{
			datas:{},
			XiangmuID:{},
//			userContent:{},
			left:{},
			right:{}
//			food:{
//				type:Object
//			}
		},
		data () {
			return {
				data:"",
				uid:"",
				wanchengDu:"1",   //个人资料完成度低于80%要提示    调用 tishiBlock();
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
//				showFlag:false,
				tucaoShow:true,
				liuYans:"",
				jiaoHuans:"",
				butenLeft:"butenLeft",
				butenRight:"",
				xingXi:{			//给下级提示组件要传的参数
					text:"亲，您的个人信息完成的低于80%，请前往完善资料。",
					x:"不再提醒",
					y:"确定",
					m:false,
					u:true
				},
				content:"xiangmuXiangqing",			//给下级要传的参数
				mingPian:"huanQu",
				types:"0",
				genjins:"感兴趣",
				bugen:"不感兴趣",
//				numToTime:"",
				yigenJin:0,
				onlyContent:false,
				onlyContent1:false,
				onlyContent2:false,
				firstTop:true,
				lastBottom:false,
				textcont:"备案申请成功，请等待审核",
				srcgo:"",
				jihuaShu:"",
				dtask:null,
				xiazai:"",
				titBox:"点击下载",
				daXiao:'',
				dataFile:'',
				dtask2:null,
				xiazai2:"",
				titBox2:"点击下载",
				daXiao2:'',
				dataFile2:'',
				localId:""
			}
		},
		mounted(){
			console.log("keyide")
//			this.numToTime=numToTime;
//			this.xiazai=createDownloadTask
			Indicator.open({spinnerType: 'fading-circle'});
			this.localId=this.$route.params.XiangmuID
			//项目详情
			var data = {
				token:this.$route.params.token,
				item_id:this.$route.params.XiangmuID			//	项目id
			}
//			console.log(this.data)
			this.$http.post(URL.path+'finance/item_detail',data,{emulateJSON:true}).then(function(res){
				Indicator.close();
//				console.log(res);
				this.data=res.body.data[0]
				this.srcgo=res.body.data[0].plan;//BP
				this.jihuaShu=res.body.data[0].report;
				if(this.jihuaShu==''){
					this.$nextTick(function() {
						if(this.$refs.baogao){
							this.$refs.baogao.style.color="#b8b8b8";
						}
						if(this.$refs.baogaoChild){
							this.$refs.baogaoChild.style.color="#b8b8b8";
						}
					})
				}
				if(this.data.follow==1){
					this.types=1;
					this.yigenJin=1;
					this.butenLeft="butenLeft";
					this.liuYans="liuYan";
					this.jiaoHuans="jiaoHuan";
					this.butenRight="";
					this.genjins="跟进中";
//					this.bugen="停止跟进";
				}else{
					this.yigenJin=2;
//					this.butenLeft="butenLeft";
					this.liuYans="";
					this.jiaoHuans="";
				}
//				if(this.data.follow==2){
//					this.butenLeft="";
//					this.liuYans="";
//					this.jiaoHuans="";
////					this.genjins="继续跟进"
//				}
			},function(res){
				Indicator.close();
			    console.log(res.status);
			})
			if(localStorage.getItem(this.localId)){
				this.titBox="点击打开"
			}
			if(localStorage.getItem(this.localId+'b')){
				this.titBox2="点击打开"
			}
		},
		methods:{
			yijianHind(){
				Indicator.close();
//				this.$router.go(-1)
				history.go(-1)
//				this.tucaoShow=false;
			},
//			退出投诉
			xiaoShi(){
				this.onlyContent1=false;
			},
			xiaoShi1(){
				this.onlyContent=false;
			},
			xiaoShi2(){
				this.onlyContent2=false;
			},
//			投诉显示调用
			tousuBlock(){
				var type=localStorage.getItem("type");
//				if(type=='1' || type=='7'){
					this.onlyContent1=true;
//				}else{
//					this.onlyContent=true;
//				}
			},
//			投诉调用
			BugenYuanyin1(texts){
				var farams={			//发送评论接口
					token:this.$route.params.token,
//					to_id:this.uid,					//对方id	是	[string]
					terminalNo: '3',
					rid: this.data.uid,
					content:'投诉“'+this.data.com_short+'”项目的原因：'+texts,
					ctype:6		//举报原因id
//					ctype: this.selectedID		//举报原因id
				}
//				console.log(farams)
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'account/report',farams,{emulateJSON:true}).then(function(res){
					Indicator.close();
					Toast("投诉成功")
//					Toast("提交后我们将在24小时内处理")
					this.onlyContent1=false;
//					console.log(res);
				},function(res){
					Indicator.close();
					Toast(data.msg)
				    console.log(res);
				})
			},
			BugenYuanyin2(texts){
				if(texts=='1'){
					if(this.types==1){
						var datas={								//换取名片申请提示
							token:this.$route.params.token,		//换名片接口
							to_id:this.data.uid,				//接收方id
							item_id:this.XiangmuID				//项目id
						}
//						console.log(datas)
						this.$http.post(URL.path+'chatcomment/get_card',datas,{emulateJSON:true}).then(function(res){
//							console.log("换名片申请成功");
//							console.log(res);
							if(res.body.returnCode=='200'){
								Toast("请耐心等待对方的反馈");
								this.onlyContent2=false;
	//							this.xingXi.text="请耐心等待对方的反馈"
	//							this.$refs.tishiShow.tishiBlock(this.mingPian,this.token);//CanShu是下级要传的参数
							}else{
								Toast("请耐心等待对方的反馈");
								this.onlyContent2=false;
	//							Toast("亲，您已跟进可以给对方留言或换名片啦");
							}
						},function(res){
						    console.log(res);
						    this.xingXi.text="您申请向对方换取名片失败，请稍后再试..."
							this.$refs.tishiShow.tishiBlock(this.mingPian,this.token);//CanShu是下级要传的参数
						})
					}else{
						Toast("亲，你还没有跟进是不可以向对方换取名片的");
					}
				}else{
					this.onlyContent2=false;
				}
			},
			createDownloadTask(){//下载BP
//				var yes=1;
				if(localStorage.getItem(this.localId)){
					plus.runtime.openFile(localStorage.getItem(this.localId))
//					plus.runtime.openFile(localStorage.getItem(this.localId),function(errorCB){
//						if(!errorCB){
//							yes=0;
//						}else{
//							localStorage.setItem(this.localId,'')
//						}
//					});
				}else{
	//				if(yes==0){
	//					return;
	//				}
					var that=this;
	//				var dtask=null;
					var str=''
					if ( this.dtask ) {
						plus.runtime.openFile(this.dataFile)
	//					outLine( "下载任务已创建！" );
						return;
					}
				    var url = this.srcgo;
				    var options = {method:"GET"};
					this.dtask = plus.downloader.createDownload( url, {options},function(d, status) {
						if(status == 200) { // 下载成功
							var path = d.filename;
	
	//								mui.toast('下载成功');
	//						othis.attr('data-file',d.filename);
							that.dataFile=d.filename;
							localStorage.setItem(that.localId,d.filename)
							plus.runtime.openFile(d.filename);
						} else { //下载失败
							mui.toast('下载失败' + status)
						}
					});
				    this.dtask.addEventListener( "statechanged", function(task,status){
				    	if(!that.dtask){return;}
				    	switch(task.state) {
				    		case 1: // 开始
			//	    			outLine( "开始下载..." );
				    		break;
				    		case 2: // 已连接到服务器
			//	    			outLine( "链接到服务器..." );
				    			str = '请稍后...'
				    		break;
				    		case 3:	// 已接收到数据
			//	    			outSet( "下载数据更新:" );
	//			    			outLine( task.downloadedSize+"/"+task.totalSize );
				    			task.downloadedSize = parseInt(task.downloadedSize/1024/1024*100)/100;
								task.totalSize = parseInt(task.totalSize/1024/1024*100)/100;
								
								str = '加载中...'+task.downloadedSize + "M/" + task.totalSize+'M'
				    		break;
				    		case 4:	// 下载完成
			//	    			outSet( "下载完成！" );
			//	    			outLine( task.totalSize );
				    			str = '点击打开'
							break;
				    	}
	//			    	if(task.downloadedSize==task.totalSize){
	//			    		that.daXiao="";
	//			    	}
				    	that.titBox=str;
				    });
				    this.dtask.start();
			    }
			},
			chakanBA(){
				this.createDownloadTask();
			},
			xiangguan(){
				if(this.jihuaShu==''){
					return;
				}
//				var yes=1;
				if(localStorage.getItem(this.localId+'b')){
					plus.runtime.openFile(localStorage.getItem(this.localId+'b'))
//					plus.runtime.openFile(localStorage.getItem(this.localId+'b'),function(errorCB){
//						if(!errorCB){
//							yes=0
//						}else{
//							localStorage.setItem(this.localId+'b','')
//						}
//					});
				}else{
	//				if(yes==0){
	//					return;
	//				}
					var that=this;
	//				var dtask=null;
					var str=''
					if ( this.dtask2 ) {
						plus.runtime.openFile(this.dataFile2)
	//					outLine( "下载任务已创建！" );
						return;
					}
				    var url = this.jihuaShu;
				    var options = {method:"GET"};
					this.dtask2 = plus.downloader.createDownload( url, {options},function(d, status) {
						if(status == 200) { // 下载成功
							var path = d.filename;
	
	//								mui.toast('下载成功');
	//						othis.attr('data-file',d.filename);
							that.dataFile2=d.filename;
							localStorage.setItem(that.localId+'b',d.filename)
							plus.runtime.openFile(d.filename);
						} else { //下载失败
							mui.toast('下载失败' + status)
						}
					});
				    this.dtask2.addEventListener( "statechanged", function(task,status){
				    	if(!that.dtask2){return;}
				    	switch(task.state) {
				    		case 1: // 开始
			//	    			outLine( "开始下载..." );
				    		break;
				    		case 2: // 已连接到服务器
			//	    			outLine( "链接到服务器..." );
				    			str = '请稍后...'
				    		break;
				    		case 3:	// 已接收到数据
			//	    			outSet( "下载数据更新:" );
	//			    			outLine( task.downloadedSize+"/"+task.totalSize );
				    			task.downloadedSize = parseInt(task.downloadedSize/1024/1024*100)/100;
								task.totalSize = parseInt(task.totalSize/1024/1024*100)/100;
								
								str = '加载中...'+task.downloadedSize + "M/" + task.totalSize+'M'
				    		break;
				    		case 4:	// 下载完成
			//	    			outSet( "下载完成！" );
			//	    			outLine( task.totalSize );
				    			str = '点击打开'
							break;
				    	}
	//			    	if(task.downloadedSize==task.totalSize){
	//			    		that.daXiao2="";
	//			    	}
				    	that.titBox2=str;
				    });
				    this.dtask2.start();
			    }
			},
			xiangqingBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYanTo(){
				if(this.types==1){			//跳转到留言页面
					window.location.href="#/fankuixinxi/"+this.$route.params.token+"/"+this.data.uid+'/'+this.data.uname;
				}else{
					Toast("亲，你还没有跟进是不可以给对方留言的");
				}
//				this.liuYans="liuYan";
			},
			BugenYuanyin(texts){
				this.types=0;
				this.yigenJin=1
				this.butenLeft="";
				this.liuYans="";
				this.jiaoHuans="";
				var params={
		      		token:this.$route.params.token,
		      		item_id:this.XiangmuID,		//	项目id	是	[string]		
					follow:"2"			//	跟进状态 1:跟进 2:不跟进	是	[string]
		      	}
	//			投资人更改反馈进度
				this.$http.post(URL.path+'finance/item_follow',params,{emulateJSON:true}).then(function(res){
					this.$emit("c-send",'2');
					this.yigenJin=1;
					//向对方发送不跟进消息记录
					var data = {
						token:this.$route.params.token,
						content:'您好，由于贵公司'+texts+'，我暂不跟进“'+this.data.com_short+'”本次融资安排',					//评论内容
						type:'8',
						to_id:this.data.uid
	//					uid:this.data.uid
					}
//					console.log(data)
					this.$http.post(URL.path+'chatcomment/send_msg',data,{emulateJSON:true}).then(function(res){
						if(res.body.msg=="操作成功"){
							
						}
						this.onlyContent=false;
//						console.log(res);
					},function(res){
					    console.log(res);
					})
//					console.log("跟进");
//					console.log(res.body);
				},function(res){
				    console.log(res);
				})
			},
			jiaoHuanTo(){
				this.onlyContent2=true;
//				this.jiaoHuans="jiaoHuan";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			},
			genJin(){
				if(this.data.follow==0){
					if(this.yigenJin==1){
						return;
					}
					this.yigenJin=1
					this.types=1;
					if(this.wanchengDu=="0"){
						this.$refs.tishiShow.tishiBlock(this.content);//CanShu是下级要传的参数
					}else{
						this.butenLeft="butenLeft";
						this.liuYans="liuYan";
						this.jiaoHuans="jiaoHuan";
						this.butenRight="";
						var params={
				      		token:this.$route.params.token,
				      		item_id:this.XiangmuID,		//	项目id	是	[string]		
							follow:"1"			//	跟进状态 1:跟进 2:不跟进	是	[string]
				      	}
			//			投资人更改反馈进度
						this.$http.post(URL.path+'finance/item_follow',params,{emulateJSON:true}).then(function(res){
	//						this.data=res.body.data;
							if(res.body.returnCode=='201'){
								
							}
							//向对方发送跟进消息记录
							var data = {
								token:this.$route.params.token,
								content:localStorage.getItem("name")+'您的“'+this.data.com_short+'”'+'项目有投资兴趣，将进一步跟进本次融资安排',					//评论内容
								type:'6',
								uid:this.data.uid
							}
//							console.log(data)
							this.$http.post(URL.path+'finance/demand_item',data,{emulateJSON:true}).then(function(res){
								this.$emit("c-send",'1');
								if(res.body.msg=="操作成功"){
									
								}
//								console.log(res);
								Toast("亲，您已跟进可以给对方留言或换名片啦");
							},function(res){
							    console.log(res.status);
							})
							this.genjins="跟进中"
							this.yigenJin=1;
//							this.bugen="停止跟进"
//							console.log("跟进");
//							console.log(res.body);
						},function(res){
						    console.log(res);
						})
					}
				}else{
//					Toast("亲，您已在跟进中");
					return;
//					if(this.data.end_follow==4){
//						var params={
//				      		token:this.$route.params.token,
//				      		item_id:this.XiangmuID,		//	项目id	是	[string]		
//							follow:"3"			//	跟进状态 1:停止跟进 2:已过会 3:继续跟进	是	[string]
//				      	}
//			//			投资人更改反馈进度
//						this.$http.post(URL.path+'finance/update_feedback',params,{emulateJSON:true}).then(function(res){
//		//					this.data=res.body.data;
//							if(res.body.returnCode=='201'){
//								
//							}
//							this.genjins="跟进中"
//							this.bugen="停止跟进"
//							this.types=1;
//							this.butenLeft="butenLeft";
//							this.liuYans="liuYan";
//							this.jiaoHuans="jiaoHuan";
//							this.butenRight="";
//							Toast("您跟进了该项目");
//							console.log("继续跟进");
//							console.log(res.body);
//						},function(res){
//						    console.log(res);
//						})
//					}
				}
			},
			buGen(){
				if(this.data.follow==0){
					if(this.yigenJin==1){
						return;
					}
					this.onlyContent=true;
				}else{
					
				}
//				this.butenRight="butenRight";
//				if(this.data.follow==6){
//					var params={
//			      		token:this.$route.params.token,
//			      		item_id:this.XiangmuID,		//	项目id	是	[string]		
//						follow:"1"			//	跟进状态 1:停止跟进 2:已过会 3:继续跟进	是	[string]
//			      	}
//		//			投资人更改反馈进度
//					this.$http.post(URL.path+'finance/update_feedback',params,{emulateJSON:true}).then(function(res){
//	//					this.data=res.body.data;
//						if(res.body.returnCode=='201'){
//							
//						}
//						this.types=0;
//						this.genjins="继续跟进"
//						this.bugen="停止跟进"
//						this.butenLeft="butenLeft";
//						this.liuYans="";
//						this.jiaoHuans="";
//						Toast("您已停止跟进该项目");
//						console.log("停止");
//						console.log(res.body);
//					},function(res){
//					    console.log(res);
//					})
//				}
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
			box,
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
	.fades1-enter-active {
	  	transition: all .5s ease;
	}
	.fades1-leave-active {
	  	transition: all .5s ease;
	}
	.fades1-enter, .fades1-leave-active {
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	.fades2-enter-active {
	  	transition: all .5s ease;
	}
	.fades2-leave-active {
	  	transition: all .5s ease;
	}
	.fades2-enter, .fades2-leave-active {
	  	/*transform: translateX(4.17rem);*/
	  	/*transform:rotate(360deg);*/
	  	opacity: 0;
	}
	
	.xiangmu{
		position:fixed;
		background:#f5f4f9;
		bottom:0;
		top:0;
		left:0;
		right:0;
		z-index:120;
		.xiangmu-header{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:1.53rem;
			background:#ff7a59;
			z-index:300;
		}
		.header-content{
			position:fixed;
			width:100%;
			font-weight:600;
			top:0;
			left:0;
			font-size:0.2rem;
			text-align:center;
			line-height:0.45rem;
			color:#fff;
			z-index:420;
			background:#ff7a59;
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
		.box::-webkit-scrollbar{width:0px;}
		.box{
			position:absolute;
			overflow-y:scroll;
			width:94%;
			padding-right:0.03rem;
			margin:auto;
			height:100%;
			top:0;
			left:0;
			right:0;
			z-index:310;
			-webkit-overflow-scrolling:touch;
			.fankiu{
				width:100%;
				display:flex;
				margin-bottom:0.07rem;
				box-shadow: 0.01rem 0.02rem 0.04rem #a7503a;
				.content-food{
					flex:1;
					padding:0.14rem 0.2rem;
					font-size:0.16rem;
					background:#fff;
					position:relative;
					display:flex;
					align-items:center;
					.laizi{
						color:#b8b8b8;
					}
					img{
						width:0.25rem;
						height:0.25rem;
					}
					.bbb{
						width:0.01rem;
						height:0.16rem;
						display:inline-block;
						padding-left:0.03rem;
					}
					.tousu{
						position:absolute;
						top:0.15rem;
						right:0.16rem;
						width:0.48rem;
						height:0.15rem;
						line-height:0.15rem;
						font-size:0.12rem;
						color:#b8b8b8;
						padding-top:0.01rem;
						text-align:right;
						background-image:url("./img/tousu.png");
						background-size:0.14rem 0.14rem;
						background-position:0 0;
						background-repeat:no-repeat;
					}
				}
			}
			.tishi-bottom{
				width:100%;
				/*height:0.36rem;*/
				.border{
					box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
				}
				ul{
					height:0.3rem;
					padding:0.2rem 2.5% 0.1rem 2.5%;
					display:flex;
					background:#fff;
					li{
						flex:1;
						height:0.2rem;
						line-height:0.36rem;
						text-align:center;
						font-size:0.2rem;
						color:#323232;
						/*&:first-child{
							max-width:10%;
						}
						&:last-child{
							max-width:10%;
						}
						&.tishi-center{
							width:0.57rem;
							line-height:0.36rem;
							text-align:center;
							font-size:0.2rem;
							color:#323232;
						}*/
					}
				}
				.zhuying_1{
					width:100%;
					font-size:0.16rem;
					background:#fff;
					margin-bottom:0.1rem;
					span{
						color:#2abdfc;
					}
					.ferst{
						display:flex;
						height:0.38rem;
						align-content: center;
						align-items: center;
						span{
							display:inline-block;
							position:relative;
							width:0.08rem;
							height:0.16rem;
							background:#ff7a59;
							margin-right:0.08rem;
							margin-left:-0.008rem;
							z-index:200;
						}
					}
					.last{
						flex:1;
						color:#676767;
						padding:0rem 0.14rem 0.18rem 0.14rem;
						line-height:0.26rem;
						word-break:break-all;
						/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
					}
					.lasts{
						padding-right:0rem;
					}
				}
				.lasttype{
					margin-bottom:0;
				}
			}
			.content-header{
				position:relative;
				background:#fff;
				padding:0.08rem 2.5%;
				font-size:0.16rem;
				z-index:1000;
				span{
					line-height:0.3rem;
				}
				font{
					/*position:absolute;
					top:0.04rem;
					right:0;*/
					float:right;
					display:inline-block;
					/*width:0.2rem;*/
					height:0.2rem;
					margin-top:0.06rem;
					margin-right:0.0;
					color: #4cb6ff;
					font-size:0.13rem;
					/*background-image:url("./img/jiantou.png");
					background-size:100% 100%;*/
				}
			}
			.aaa{
				box-shadow:0.01rem 0.02rem 0.04rem #dfdfdf;
			}
			.times{
				width:100%;
				height:0.33rem;
				background:#fff;
				line-height:0.34rem;
				/*margin-top:0.08rem;*/
				box-shadow:0 0.02rem 0.04rem #dedde1;
				.text-center{
					display:inline-block;
					padding:0 0.08rem;
				}
				.times-name{
					color:#ff7a59;
					font{
						display:inline-block;
						width:0.16rem;
						height:0.16rem;
						background-image:url("./img/time.png");
						background-size:100% 100%;
						margin-bottom:-0.03rem;
						margin-right:-0.04rem;
					}
					float:right;
					/*margin-right:0.1rem;*/
				}
			}
			.butten{
				width:100%;
				height:1.5rem;
				position:relative;
				.tousu{
					float:right;
					width:1.28rem;
					height:0.16rem;
					font-size:0.12rem;
					color:#b8b8b8;
					padding-top:0.01rem;
					text-align:right;
					margin:0rem 0.06rem 0.06rem 0;
					background-image:url("./img/tousu.png");
					background-size:0.14rem 0.14rem;
					background-position:0 0;
					background-repeat:no-repeat;
				}
				ul{
					display:flex;
					width:100%;
					height:0.50rem;
					margin-top:0.22rem;
					li{
						flex:1;
						color:#7d7d7d;
						display:flex;
						justify-content:center;
						align-content:center;
						align-items:center;
						flex-direction:column;
						&:first-child{
							span{
								display:inline-block;
								width:0.3rem;
								height:0.3rem;
								background-image:url("./img/liuyan.png");
								background-size:100% 100%;
							}
							.liuYan{
								background-image:url("./img/liuyan1.png");
								background-size:100% 100%;
							}
						}
						&:last-child{
							span{
								display:inline-block;
								width:0.3rem;
								height:0.3rem;
								background-image:url("./img/huan.png");
								background-size:100% 100%;
							}
							.jiaoHuan{
								background-image:url("./img/huan1.png");
								background-size:100% 100%;
							}
						}
						
					}
					p{
						text-align:center;
						margin-top:0.07rem;
					}
				}
			}
		}
		.baoming{
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
			height:0.5rem;
			display:flex;
			justify-content:center;
			align-content:center;
			align-items:center;
			background:#fff;
			box-shadow:0 0.02rem 0.04rem #dedde1;
			z-index: 320;
			span{
				flex:1;
				height:0.5rem;
				line-height:0.5rem;
				display:inline-block;
				text-align:center;
				background:#ececec;
				font-size:0.18rem;
				font{
					display:inline-block;
					width:0.18rem;
					height:0.18rem;
					background-image:url("./img/jian.png");
					background-size:100% 100%;
					margin:0 0 -0.04rem 0.06rem;
				}
			}
			.butenLeft{
				color:#fff;
				background:#ff7a59;
			}
			.butenRight{
				color:#fff;
				background:#ff7a59;
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


