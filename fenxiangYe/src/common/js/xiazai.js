export function createDownloadTask(dcontent,sharecontent,pic,sharehref,sharehrefTitle,sharehrefDes,output){
	var dtask=null;
//	function createDownloadTask(){
		if ( dtask ) {
			outLine( "下载任务已创建！" );
			return;
		}
	    var url = "http://snip.qq.com/resources/Snip_V2.0_5771.dmg";
	    var options = {method:"GET"};
		dtask = plus.downloader.createDownload( url, options );
	    dtask.addEventListener( "statechanged", function(task,status){
	    	if(!dtask){return;}
	    	switch(task.state) {
	    		case 1: // 开始
//	    			outLine( "开始下载..." );
	    		break;
	    		case 2: // 已连接到服务器
//	    			outLine( "链接到服务器..." );
	    			str = '文件加载中，请稍后...'
					break;
	    		break;
	    		case 3:	// 已接收到数据
//	    			outSet( "下载数据更新:" );
	    			outLine( task.downloadedSize+"/"+task.totalSize );
	    			task.downloadedSize = parseInt(task.downloadedSize/1024/1024*100)/100;
					task.totalSize = parseInt(task.totalSize/1024/1024*100)/100;
					
					str = '文件加载中，请稍后...'+task.downloadedSize + "M/" + task.totalSize+'M'
					break;
	    		break;
	    		case 4:	// 下载完成
	    			outSet( "下载完成！" );
	    			outLine( task.totalSize );
	    		break;
	    	}
	    } );
	    outSet( "创建下载任务成功！" );
	    dtask.start();
//	}
	function startDownloadTask(){
		if ( !dtask ) {
			outSet( "请先创建下载任务！" );
			return;
		}
		dtask.start();
	}
	// 暂停下载任务
	function pauseDownloadTask(){
	    dtask.pause();
	    outSet( "暂停下载！" );
	}
	// 恢复下载任务
	function resumeDownloadTask(){
	    dtask.resume();
	    outSet( "恢复下载！" );
	}
	function cancelDownloadTask(){
		dtask.abort();
		dtask = null;
		outSet( "取消下载任务！" );
	}
	function clearDownloadTask(){
		
	}
	function startAll(){
		plus.downloader.startAll();
	}
}