

function pahts(){
	//登录
	var datas = {
		//			URL= http://www.qironghome.com/api/index.php/login/login
		phone:"",	//手机号	是	[string]		
		pwd:"",	//md5($pwd.SA1S2D3F4G5H6J7K8L9)	是	[string]		
		version:"",	//版本号	是	[string]		
		terminalNo:"",//	terminalNo	是	[string]
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取最新的版本号		返回参数   id			返回优惠券的idid	id	是	[string]	
	//								 version	版本号	是	[string]	
	//								 type		类型	是	[string]
	var datas = {
		//			URL= http://http://www.qironghome.com/api/index.php/app/get_version
		type:"",	//android或ios	
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//处理换名片		
	var datas = {
			token"",//	token	是	[string]		
			from_id"",//	发送方id	是	[string]		
			id"",//	名片id	是	[string]		
			item_id"",//	项目id	是	[string]		
			operate"",//	操作 1:同意 2:拒绝	是	[string]			
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/card_operate',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//换名片		
	var datas = {
		token"",//	token	是	[string]		
		to_id"",//	接收方id	是	[string]		
		item_id"",//	项目id	是	[string]		
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/get_card',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取评论列表		
	var datas = {
		token"",//	token	是	[string]		
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/comment_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发送评论		
	var datas = {
		token"",//	token	是	[string]		
		to_id"",//	接收方id	是	[string]		
		content"",//	评论内容	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/send_msg',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//企业获取反馈数		返回参数	feedback_num	投资机构反馈数	是	[string]
	var datas = {
		token"",//	token	是	[string]		
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/get_feedback_num',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//投资机构收到的新项目数		返回参数	new_item	收到的新项目数	是	[string]
	var datas = {
		token"",//	token	是	[string]		
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/new_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//项目跟进操作	
	var datas = {
		token"",//	token	是	[string]		
		item_id"",//	项目id	是	[string]		
		follow"",//	1:跟进 2:不跟进	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/item_follow',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发送索要项目	
	var datas = {
		token"",//	token	是	[string]		
		id"",//	id	是	[string]			
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/send_demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//投资人索要项目	
	var datas = {
		token"",//	token	是	[string]		
		item_id"",//	项目id	是	[string]		
		type"",//	类型 1:项目 2:活动	是	[string]		
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发送项目	
	var datas = {
		token"",//	token	是	[string]		
		item_id"",//	项目id	是	[string]		
		type"",//	类型 1:项目 2:活动	是	[string]		
		to_id"",//	接受者id	是	[string]		
		status"",//	状态 1:已发送 2:未发送 3:拒绝		[string]		
		demand"",//	是否索要 1:非索要 2:索要		[string]
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/send_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//创建融资项目			返回参数	id	项目id	是	[string]
	var datas = {
		token:"",//	token	是	[string]		
		uid:"",//	创建者id	是	[string]		
		type:"",//	类型 1:定增 2:做市 3:转老股 4:股权质押 5:融资租赁 6:研报	是	[string]		
		company:"",//	公司id	是	[string]		
		com_name:"",//	公司名称	是	[string]		
		com_code:"",//	公司代码	是	[string]		
		main_business:"",//	主营业务	是	[string]		
		lightspot:"",//	投资亮点	是	[string]		
		industry:"",//	公司所在行业标签id	是	[string]		
		last_year_revenue:"",//	上一年营收（单位 万）	是	[string]		
		last_year_profit:"",//	上一年净利润（单位 万）	是	[string]		
		predict_revenue:"",//	今年预计营收(单位:万)	是	[string]		
		predict_profit:"",//	今年预计净利润(单位:万)	是	[string]		
		total_finance:"",//	融资总额(单位:万)	是	[string]		
		appraisement:"",//	投前估值(单位:万)	是	[string]		
		city:"",//	所在城市	是	[string]		
		transfe_share:"",//	拟转股份数	是	[string]		
		share_price:"",//	每股价格	是	[string]		
		is_hold:"",//	是否本人持股 1:是 2:否	是	[string]		
		research_address:"",//	调研地址	是	[string]		
		research_time:"",//	调研时间	是	[string]		
		pledge_time:"",//	质押时间周期(天)	是	[string]		
		repayment_time:"",//	还款周期(天)	是	[string]		
		face_ rate:"",//	票面利率	是	[string]		
		is_transfe:"",//	是否转股 1:是 2:否	是	[string]		
		remark:"",//	备注	是	[string]
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/create',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//项目备案			返回参数	id	id	是	[string]
	var datas = {
		token:"",//	token	是	[string]		
		com_name:"",//	公司全称	是	[string]		
		com_short:"",//	公司简称	是	[string]		
		commission:"",//	佣金协定	是	[string]		
		total_finance:"",//	投资总额 单位：万	是	[string]		
		remark:""//	有效投资认定	是	[string]
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/record',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//上传bp接口		返回参数    file	文件路径	是	[string]
	var datas = {
		token:"",//		是	[string]		
		bpfile:""//	文件	是	[file]
	}
	this.$http.post(URL.path+'api/index.php/v2/common/upload_bp',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取bp
	var datas = {
		token:"",//	token	是	[string]		
		item_id:""//	item_id	是	[string]
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/bp_exist',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取收费协议
	var datas = {
		title:"",//	标题	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/get_agreement',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取企融直通车动态数据
	var datas = {
		title:"",//	标题	是	[string]	
		content:"",//	显示内容	是	[string]	
		update_time:""//	更新时间	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/common/dynamic',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//同意收费协议
	var datas = {
		token:"",//	token	是	[string]		
		tiem_id:"",//	项目id	是	[string]		
		operate:""//	是否同意收费协议 1:同意 2:拒绝	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/agreement_operate',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//广播
	var datas = {
		page:"",//	page	是	[string]		
		size:""//	size	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/common/broadcast',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//投资人结束跟进项目
	var datas = {
		token:"",//	token	是	[string]		
		item_id:"",//	项目id	是	[string]		
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/follwo_end',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//研报申请
	var datas = {
		token:"",//	token	是	[string]		
		com_name:"",//	公司全称	是	[string]		
		com_short:""//		是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/research/research_apply',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//投融资必读和研报实例详情
	var datas = {
		id:"",//	id	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/common/research_report_detail',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//投融资必读研报实例列表
	var datas = {
		page:"",//	page	是	[string]		
		size:"",//	size	是	[string]		
		type:"",//	类型 1:融资必读 2:投资必读 3:研报实例	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/common/research_report_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//独家调研和金融快讯详情
	var datas = {
		id:"",//	id	
	}
	this.$http.post(URL.path+'api/index.php/v2/flash/flash_detail',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//独家调研和金融快讯列表		返回参数   click	浏览量	是	[string]
	var datas = {
		page:"",//	page	是	[string]		
		size:"",//	size	是	[string]		
		type:"",//	1:独家调研 2:金融快讯	是	[string]	
	}
	this.$http.post(URL.path+'api/index.php/v2/flash/flash_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取培训与咨询优惠券		返回参数   id		返回优惠券的id
	var datas = {
		token: '3',
		train_id:""  //培训与咨询id
	}
	this.$http.post(URL.path+'api/index.php/v2/train/train_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//咨询与培训列表
	var datas = {
		token: '3',
		page: this.page,
		size: this.limit,
	}
	this.$http.post(URL.path+'api/index.php/v2/train/train_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//培训与咨询详情
	var datas = {
		token: '3',
		id: this.page,
	}
	this.$http.post(URL.path+'api/index.php/v2/train/train_detail',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//创建咨询与培训
	var datas = {
		token: '3',
		title: this.page,
		sponsor: '3',			//主办方
		content: this.page,		//课程大纲
		teacher: '3',			//授课老师
		elegant_demeanour: this.page,	//风采
		time: '3',						//time
		address: this.page,				//address
		cost: '3',						//费用
		apply_end: this.page,			//截止报名时间
		discounts: '3',					//优惠
	}
	this.$http.post(URL.path+'api/index.php/v2/train/train_detail',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取线下活动列表
	var datas = {
		page: '3',			//页数
		size: this.page,	//每页显示数
	}
	this.$http.post(URL.path+'api/index.php/v2/activity/activity_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//线下活动详情
	var datas = {
		token: '3',
		id: this.page,		//活动id
	}
	this.$http.post(URL.path+'api/index.php/v2/activity/activity_detail',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发布线下活动
	var datas = {
		token: '3',
		title: this.page,		//标题
		content: '3',			//活动详细内容
		time: this.page,		//活动时间
		address: '3',			//活动地址
		guest: this.page,		//嘉宾
		sponsor: '3',						//主办方
		co-organizer:"", 				//协办方
		flow: '3',						//活动流程
	}
	this.$http.post(URL.path+'api/index.php/v2/activity/activity_create',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//处理换名片
	var datas = {
		token: '3',
		from_id:"",			//发送方id
		id: this.page,		//名片id
		item_id:"",			//项目id
		operate:""			//操作 1:同意 2:拒绝
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/card_operate',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//换名片
	var datas = {
		token: '3',
		to_id:"",			//接收方id
		item_id:"",			//项目id
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/get_card',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//获取评论列表
	var datas = {
		token: '3',
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/comment_list',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发送评论
	var datas = {
		token: '3',
		to_id:"",			//接收方id
		content:"",			//评论内容
	}
	this.$http.post(URL.path+'api/index.php/v2/chatcomment/send_msg',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//企业获取反馈数       //返回参数    feedback_num	    投资机构反馈数
	var datas = {
		token: '3',
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/get_feedback_num',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})//投资机构收到的新项目数      //返回参数    new_item	    收到的新项目数
	var datas = {
		token: '3',
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/new_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//项目跟进操作
	var datas = {
		token: '3',
		item_id:"",			//	项目id
		follow:"",			//1:跟进 2:不跟进
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/item_follow',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发送索要项目
	var datas = {
		token: '3',
		id:""			
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/send_demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//投资人索要项目
	var datas = {
		token: '3',
		item_id:"",			//	项目id
		type:"",			//类型 1:项目 2:活动
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//创建融资项目 			返回参数   id		项目id
	var datas = {
		token: '3',
		uid:"",			创建者id
		type:"",			//类型 1:定增 2:做市 3:转老股 4:股权质押
		company:"",			//公司id
		com_name:"",//	公司名称
		com_code:"",//	公司代码
		main_business:"",//	主营业务
		lightspot:"",//	投资亮点
		industry:"",//	公司所在行业标签id
		last_year_revenue:"",//	上一年营收（单位 万）
		last_year_profit:"",//	上一年净利润（单位 万）
		predict_revenue:"",//	今年预计营收(单位:万)
		predict_profit:"",//	今年预计净利润(单位:万)
		total_finance:"",//	融资总额(单位:万)	是	[string]		
		appraisement:"",//	投前估值(单位:万)	是	[string]		
		city:"",//	所在城市	是	[string]		
		transfe_share:"",//	拟转股份数	是	[string]		
		share_price:"",//	每股价格	是	[string]		
		is_hold:"",//	是否本人持股 1:是 2:否	是	[string]		
		research_address:"",//	调研地址	是	[string]		
		research_time:"",//	调研时间	是	[string]		
		pledge_time:"",//	质押时间周期(天)	是	[string]		
		repayment_time:"",//	还款周期(天)	是	[string]		
		face_ rate:"",//	票面利率	是	[string]		
		is_transfe:"",//	是否转股 1:是 2:否	是	[string]		
		remark:"",//	备注
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/create',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//发送项目
	var datas = {
		token:"",	//token	是	[string]		
		item_id:"",	//项目id	是	[string]		
		type:"",	//类型 1:项目 2:活动	是	[string]		
		to_id:"",	//接受者id	是	[string]		
		status:"",	//状态 1:已发送 2:未发送 3:拒绝		[string]		
		demand:""	//是否索要 1:非索要 2:索要		[string]
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/send_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	//视频列表
	var datas = {
		id:""//	用户id		URL= http://www.qironghome.com/api/index.php/video/video_list
	}
	this.$http.post(URL.path+'api/index.php/v2/finance/demand_item',datas,{emulateJSON:true}).then(function(res){
		var data=res.data
		console.log(res);
	},function(res){
	    console.log(res.status);
	})
	
	
}