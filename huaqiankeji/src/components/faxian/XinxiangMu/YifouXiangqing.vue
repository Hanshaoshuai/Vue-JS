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
						<div class="tousu"><span>投诉</span></div>
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
							<div class="ferst"><span></span>项目推荐</div>
							<div class="last">
								<p>{{data.lightspot}}</p>
							</div>
						</div>
					</div>
					<div class="zhuying_1 border">
						<div class="ferst"><span></span>经营业绩</div>
						<div class="last">
							<p>上一财年：营收&nbsp;<span>{{data.last_year_revenue}}亿</span>&nbsp;&nbsp;净利润&nbsp;<span>{{data.last_year_profit}}万</span></p>
							<p>今年预计：营收&nbsp;<span>{{data.predict_revenue}}亿</span>&nbsp;&nbsp;净利润&nbsp;<span>{{data.predict_profit}}万</span></p>
						</div>
					</div>
					<!--<div class="zhuying_1 border">
						<div class="ferst"><span></span>融资计划</div>
						<div class="last">
							<p>融资总额：<span>{{data.total_finance}}万</span></p>
							<p>投前估值：<span>{{data.appraisement}}万</span></p>
						</div>
					</div>-->
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
							<p v-if="data.type==4">租赁周期：<span>{{data.pledge_time}}&nbsp;个月</span></p>
							
							<p v-if="data.type==5">融资总额：<span>{{data.total_finance}}&nbsp;万元</span></p>
							<p v-if="data.type==5">质押周期：<span>{{data.repayment_time}}&nbsp;个月</span></p>
							
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
				<div class="border aaa">
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
						<!--<font></font>-->
						<!--<span class="text-center">剩余有效期{{genjin}}</span>-->
					</div>
				</div>
				<box></box>
			</div>
			<!--<youhuiquan ref="youhuiShow"></youhuiquan>-->
			<tishi ref="tishiShow" :xingXi="xingXi" :content="content"></tishi>
			<router-view></router-view>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
//	import {numToTime} from "../../../common/js/date.js";
	import { Field } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	import tishi from "../../Tishi.vue";
//	import youhuiquan from "../../shendu/PeixunZixun/YouhuiQuan.vue";
//	import fankuixinxi from "./FankuiXinxi.vue";
	
	
	export default {
		props:{
			datas:{},
			XiangmuID:{},
			userContent:{},
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
//				numToTime:"",
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
//			this.numToTime=numToTime;
			this.localId=this.$route.params.XiangmuID
			//项目详情
			var data = {
				token:this.userContent.token,
				item_id:this.$route.params.XiangmuID			//	项目id
			}
			Indicator.open({spinnerType: 'fading-circle'});
			console.log(this.data)
			this.$http.post(URL.path+'finance/item_detail',data,{emulateJSON:true}).then(function(res){
				Indicator.close();
				this.data=res.body.data[0];
				this.srcgo=res.body.data[0].plan;
				this.jihuaShu=res.body.data[0].report;
				if(this.jihuaShu==''){
					this.$nextTick(function() {
						if(this.$refs.foods){
							this.$refs.baogao.style.color="#b8b8b8";
						}
						if(this.$refs.baogaoChild){
							this.$refs.baogaoChild.style.color="#b8b8b8";
						}
					})
				}
				console.log(res);
			},function(res){
				Indicator.close();
			    console.log(res.status);
			});
			if(localStorage.getItem(this.localId)){
				this.titBox="点击打开"
			}
			if(localStorage.getItem(this.localId+'b')){
				this.titBox2="点击打开"
			}
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			createDownloadTask(){
//				var yes=1;
//				if(localStorage.getItem(this.localId)){
//					plus.runtime.openFile(localStorage.getItem(this.localId),function(errorCB){
//						if(!errorCB){
//							yes=0;
//						}else{
//							localStorage.setItem(this.localId,'')
//						}
//					});
//				}
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
//			    if(dataFile!=''){
//					plus.runtime.openFile(dataFile);
//				}else{
//					dtask.start();
//				}
//				function startDownloadTask(){
//					if ( !dtask ) {
//						outSet( "请先创建下载任务！" );
//						return;
//					}
//					dtask.start();
//				}
//				// 暂停下载任务
//				function pauseDownloadTask(){
//				    dtask.pause();
//				    outSet( "暂停下载！" );
//				}
//				// 恢复下载任务
//				function resumeDownloadTask(){
//				    dtask.resume();
//				    outSet( "恢复下载！" );
//				}
//				function cancelDownloadTask(){
//					dtask.abort();
//					dtask = null;
//					outSet( "取消下载任务！" );
//				}
//				function clearDownloadTask(){
//					
//				}
//				function startAll(){
//					plus.downloader.startAll();
//				}
			},
			chakanBA(){
				this.createDownloadTask();
			},
			xiangguan(){
				if(this.jihuaShu==''){
					
					return;
				}
//				var yes=1;
//				if(localStorage.getItem(this.localId+'b')){
//					plus.runtime.openFile(localStorage.getItem(this.localId+'b'),function(errorCB){
//						if(!errorCB){
//							yes=0
//						}else{
//							localStorage.setItem(this.localId+'b','')
//						}
//					});
//				}
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
//			    		that.daXiao2="";
//			    	}
			    	that.titBox2=str;
			    });
			    this.dtask2.start();
			},
			xiangqingBlock(){
				this.tucaoShow=true;
			},
			xinxiTo(){
				this.$refs.xinxiShow.xinxiBlock();
			},
			liuYanTo(){
				if(this.types==1){			//跳转到留言页面
					window.location.href="#/fankuixinxi/"+this.userContent.token+"/"+this.data.uid+'/1';
				}
//				this.liuYans="liuYan";
			},
			jiaoHuanTo(){
				if(this.types==1){
					var datas={								//换取名片申请提示
						token:this.$route.params.token,		//换名片接口
						to_id:this.data.uid,				//接收方id
						item_id:this.XiangmuID				//项目id
					}
					console.log(datas)
					this.$http.post(URL.path+'chatcomment/get_card',datas,{emulateJSON:true}).then(function(res){
						console.log("换名片申请成功");
						console.log(res);
						this.xingXi.text="您已申请向对方换取名片，请注意查收..."
						this.$refs.tishiShow.tishiBlock(this.mingPian,this.token);//CanShu是下级要传的参数
					},function(res){
					    console.log(res);
					    this.xingXi.text="您申请向对方换取名片失败，请稍后再试..."
						this.$refs.tishiShow.tishiBlock(this.mingPian,this.token);//CanShu是下级要传的参数
					})
				}
//				this.jiaoHuans="jiaoHuan";
			},
			baoMing(){
				this.$refs.youhuiShow.YouhuiBlock();
			},
			genJin(){
				this.types=1;
				if(this.wanchengDu==""){
					this.$refs.tishiShow.tishiBlock(this.content);//CanShu是下级要传的参数
				}else{
					this.butenLeft="butenLeft";
					this.liuYans="liuYan";
					this.jiaoHuans="jiaoHuan";
					this.butenRight="";
				}
			},
			buGen(){
				this.types=0;
//				this.butenRight="butenRight";
				this.butenLeft="";
				this.butenLeft="";
				this.liuYans="";
				this.jiaoHuans="";
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
		z-index:320;
		.xiangmu-header{
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:1.53rem;
			background:#ff7a59;
			z-index:200;
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
						/*box-shadow: 0 0.02rem 0.04rem #dedde1;*/
					}
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
					margin-right:0.02rem;
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
		}
	}
</style>


