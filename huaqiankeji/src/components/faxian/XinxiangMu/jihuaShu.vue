<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="./img/back.png"/></span>
				<span>商业计划书</span>
			</div>
			<div class="box" ref="box">
				<div style="width:100%;height:0.55rem;"></div>
					<div class="sousuo-content">
						<div id="dcontent" class="dcontent">
							<ul class="dlist">
								<li class="ditem" @click.stop="createDownloadTask()" ref="dataFile" style="color: #4cb6ff;">
									<span class="homepage-cap">商业计划书</span>
									<font>{{dataFile}}</font><span>{{titBox}}</span><span>{{daXiao}}</span>
								</li>
								<!--<li class="ditem" @click.stop="startDownloadTask()">启动下载任务</li>
								<li class="ditem" onclick="pauseDownloadTask()">暂停下载任务</li>
								<li class="ditem" onclick="resumeDownloadTask()">恢复下载任务</li>
								<li class="ditem" onclick="cancelDownloadTask()">取消下载任务</li>-->
								<!--<li class="ditem" onclick="clearDownloadTask()">清除所有任务</li>-->
							</ul>
						</div>
						<div id="output">
					</div>
				</div>
				<box></box>
				<div style="width:100%;height:0.5rem;"></div>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript">
//	import pdf from "vue-pdf"
	import { Field } from 'mint-ui';
	import box from "../../box.vue";
	import {common} from "../../../common/js/common.js";
	import {createDownloadTask} from "../../../common/js/xiazai.js";
	
	export default {
		props:{
			jihuaShu:{
//				type:Object
			}
		},
		data () {
			return {
				x:'1',
				urlName:"Dingzeng",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				boxUl:"",
				types:{
					type0:"Zuoshi",
					type1:"Dingzeng",
					type2:"ZhiYa",
					type3:"ZhuanlaoGu",
					type4:"ZuLin",
					type5:"Diaoyan"
				},
				dtask:null,
				xiazai:"",
				titBox:"",
				daXiao:'',
				dataFile:''
			}
		},
		mounted() {
			this.xiazai=createDownloadTask
			this.$nextTick(function() {
				this.boxUl=this.$refs.box.getElementsByTagName("ul");
				console.log(this.boxUl)
			})
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			createDownloadTask(){
				var dataFile = this.dataFile;
				var that=this;
//				var dtask=null;
				var str=''
				if ( that.dtask ) {
					plus.runtime.openFile(this.dataFile)
//					outLine( "下载任务已创建！" );
					return;
				}
			    var url = this.jihuaShu;
			    var options = {method:"GET"};
				this.dtask = plus.downloader.createDownload( url, {options},function(d, status) {
					if(status == 200) { // 下载成功
						var path = d.filename;

//								mui.toast('下载成功');
//						othis.attr('data-file',d.filename);
						that.dataFile=d.filename;
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
			    			str = '文件加载中，请稍后...'
			    		break;
			    		case 3:	// 已接收到数据
		//	    			outSet( "下载数据更新:" );
//			    			outLine( task.downloadedSize+"/"+task.totalSize );
			    			task.downloadedSize = parseInt(task.downloadedSize/1024/1024*100)/100;
							task.totalSize = parseInt(task.totalSize/1024/1024*100)/100;
							
							that.daXiao = '文件加载中，请稍后...'+task.downloadedSize + "M/" + task.totalSize+'M'
			    		break;
			    		case 4:	// 下载完成
		//	    			outSet( "下载完成！" );
		//	    			outLine( task.totalSize );
			    			str = '文件加载完成，点击打开'
						break;
			    	}
			    	if(task.downloadedSize==task.totalSize){
			    		that.daXiao="";
			    	}
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
			typeName(id){
				window.location.href="https://test.qironghome.com/bak/web/upload/2017/10/24/150883209561721rqaa.pdf";
			},
		},
		events:{
			
		},
		filters:{
		},
		updated(){
		},
		components:{
			box,
//			pdf
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
		z-index:500;
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
			z-index:510;
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
		.box::-webkit-scrollbar{width:0px}
		.box{
			overflow-y:auto;
			width:100%;
			height:100%;
			-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.sousuo-content{
				width:95%;
				margin:0 auto;
				background:#fff;
				/*margin:0.05rem 0;*/
				/*display:flex;*/
				/*flex-direction:column;*/
				.content-header{
					width:96%;
					margin:0 auto;
					padding:0.16rem 0;
					font-size:0.16rem;
					li{
						width:91.7%;
						margin:0 auto;
						color:#8c8c8c;
						.content-top{
							width:100%;
							height:0.22rem;
							display:flex;
							span{
								display:inline-block;
								width:0.97rem;
								&:first-child{
									color:#323232;
									font-size:0.18rem;
									flex:1;
								}
							}
							font{
								display:inline-block;
								width:0.58rem;
								font-size:0.12rem;
								color:#717070;
								line-height:0.18rem;
							}
						}
						.content-bottom{
							span{
								font-size:0.12rem;
								color:#cfcfcf;
							}
						}
					}
				}
			}
			.times{
				width:100%;
				height:0.3rem;
				background:#fff;
				line-height:0.3rem;
				.times_1{
					display:inline-block;
					padding-left:0.2rem;
				}
				.text-center{
					display:inline-block;
					padding:0 0.08rem;
				}
				.times-name{
					float:right;
					margin-right:0.1rem;
				}
			}
		}
	}
</style>


