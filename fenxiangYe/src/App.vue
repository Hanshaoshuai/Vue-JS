<template>
  <div id="app">
			<div class="xiangmu-header"></div>
			<div class="searchBox">
				<div class="home-search">
					<img src="static/img/256x256.png"/>
				</div>
				<div class="header-name">
					<!--<font>企融直通车APP</font>-->
					<font>新三板投资人的首选项目平台</font>
					<!--<div class="header-content">
						<span>新三板投资人的首选项目平台</span>
					</div>-->
				</div>
				<div class="jifen" id="xiazai" @click.stop="xiazai()"><span>立即下载</span></div>
			</div>
			<div class="zhaiyao-list">
				<div class="zhaiyao-content">
					<div class="tishi-bottom">
						<div class="border">
							<ul>
								<li class="tishi-center">
									<div class="content-heder">
										<span>* {{shorts}} *</span>
										<span class="text-center">（{{codes}} **** ）<!--{{data.com_code}}--></span>
										<span v-if="data.type==1" class="texts">&nbsp;定增</span>
										<span v-if="data.type==2" class="texts">&nbsp;做市</span>
										<span v-if="data.type==3" class="texts">&nbsp;转老股</span>
										<span v-if="data.type==4" class="texts">&nbsp;股权质押</span>
										<span v-if="data.type==5" class="texts">&nbsp;融资租赁</span>
										<span v-if="data.type==6" class="texts">&nbsp;研报支持</span>
										<span v-if="data.type==7" class="texts">&nbsp;公司调研</span>
									</div>
								</li>
							</ul>
							<div>
								<div v-if="biaoqianId.length>0" class="zhuying_1 liangdian_1">
									<div class="ferst"><span></span>所在行业</div>
									<div ref="biaoqian" class="last">
										<font v-for="(item,index) in biaoqianId" class="bianse">{{item.title}}</font>
									</div>
								</div>
							</div>
						</div>
						<div class="border">
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
						<div class="zhuying_1 border" style="margin-bottom:0;">
							<div v-if="data.type!=3" class="ferst"><span></span>融资计划</div>
							<div v-if="data.type==3" class="ferst"><span></span>转让计划</div>
							<div class="last">
								<p v-if="data.type==1">融资总额：<span>{{data.total_finance}}万</span></p>
								<p v-if="data.type==2">融资总额：<span>{{data.total_finance}}万</span></p>
								<!--<p v-if="data.type==3">融资总额：<span>{{data.total_finance}}万</span></p>-->
								<p v-if="data.type==3">拟转股份数：<span>{{data.transfe_share}}&nbsp;万股</span></p>
								<p v-if="data.type==4">融资总额：<span>{{data.total_finance}}万</span></p>
								<p v-if="data.type==5">融资总额：<span>{{data.total_finance}}万</span></p>
								<p v-if="data.type==6">融资总额：<span>{{data.total_finance}}万</span></p>
								<p v-if="data.type==7">融资总额：<span>{{data.total_finance}}万</span></p>
							</div>
						</div>
						<!--//类型 1:企业 2:投资机构 3:合格投资人 4咨询机构 5:券商研究员 6:新三板做市商-->
						<div class="times border-topbottom">
							<span v-if="data.ctype==1" class="text-center">企业</span>
							<span v-if="data.ctype==7" class="text-center">财务顾问</span>
							<span class="text-center">{{numToTime(data.create_time)}}</span>
							<span>发布</span>
						</div>
					</div>
				</div>
			</div>
			<div v-show="block" @click.stop="diplayNone()" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:2000;background-color: rgba(0,0,0,0.3);">
				<div style="border-radius:12px;width:70%;height:132px;background:#ffffff;position:absolute;margin:auto;top:36%;left:0;right:0;">
					<div style="width:80%;height:20px;margin:0 auto;padding-top:56px;font-size:18px;text-align: center;color:#2ABDFC">
						<span>下载已链接成功</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import {URL} from './common/js/path';
	
	export default {
		name: 'app',
	  data(){
	  	return {
				data:"",
				block:false,
				showFlag:true,
				fankui:13,
				genjin:50,
				utype:true,
				sharecontent:"",
				pic:"",
				sharehref:'',
				sharehrefTitle:'',
				sharehrefDes:"",
				output:"",
				dcontent:"",
	//				numToTime:'',
				BiaoQian:[],
				biaoqianId:'',
				blockName:false,
				fenciangURL:"",
				fenxiangBiaoti:"",
				fenxiangCont:"",
				yisuoYao:false,
				ua:"",
				Xiazai:"",
				urlS:'http://www.qironghome.com/api/index.php/app/get_version',
				
				shorts:'',
				codes:""
			}
		},
		mounted(){
			this.ua=window.navigator.userAgent.toLowerCase();
			if(localStorage.getItem("type")=='1' || localStorage.getItem("type")=='7'){
				this.utype=false;
			}else{
				this.utype=true;
			}
			//项目详情
			var dataX = {
				uid:"1140",
				item_id:"59"			//	项目id
			}
			var urlXiang='http://www.qironghome.com/api/index.php/v2/common/item_detail'
			this.$http.post(urlXiang,dataX,{emulateJSON:true}).then(function(res){
				console.log(res);
				this.data=res.body.data['0']
				this.biaoqianId=res.body.data['0'].industry
				this.shorts=this.data.com_short.substr(1,1);
				this.codes=this.data.com_code.substr(0,2);
				this.$nextTick(function(){
					this.output=this.$refs.output
					this.dcontent=this.$refs.dcontent;
				});
			},function(res){
			    console.log(res.status)
			})
		},
		methods:{
			xiazai(){
				if(this.ua.indexOf("android")!=-1){
			       	this.$http.post(this.urlS,{type:"android"},{emulateJSON:true}).then(function(res){
						console.log(res);
						var data=res.body.data//下载地址
						window.location.href=data.url;
						this.block=true;
					},function(res){
					    console.log(res.status);
					})
			    }else{
			       	this.$http.post(this.urlS,{type:"ios"},{emulateJSON:true}).then(function(res){
						console.log(res);
						var data=res.body.data//下载地址
						window.location.href=data.url;
						this.block=true;
					},function(res){
					    console.log(res.status);
					})
			    }
			},
			diplayNone(){
				this.block=false;
			},
			numToTime(num){
				num = num*1000;
		    let newNum = new Date().getTime(),
		      time = new Date(num).toLocaleString(),
		      year,
		      mouth,
		      day,
		      newTime = new Date(newNum).toLocaleString();
			
//			console.log(time)
//		    time = time.replace(/\d+[\/\-]/, function(text){
//		      	year = text.match(/\d+/)[0];
//		      	return '';
//		    });
//		    if(year==undefined){
		    	time = time.replace(/\d+/, function(text){
		    		console.log(text)
			      	year = text;
			      	return '';
			    });
//		    }
//		    time = time.replace(/\d+[\/\-]/, function(text){
//		      	mouth = text.match(/\d+/)[0];
//		      	return '';
//		    });
//		    if(mouth==undefined){
		    	time = time.replace(/\d+/, function(text){
		    		console.log(text)
			      	mouth = text;
			      	return '';
			    });
//		    }
		    time = time.replace(/\d+/, function(text){
		      	day = text.match(/\d+/)[0];
		      	return '';
		    });
		    num = (newNum - num) / 1000;
//		    console.log(num)
//		    console.log(year)
//		    console.log(mouth)
//		    console.log(day)
		    if(num < 60){
		      return '刚刚';
		    } else if(num < 3600){
		      return parseInt(num / 60) + '分钟前';
		    } else if(num < 86400){
		      return parseInt(num / 3600) + '小时前';
		    } else if(year === newTime.match(/\d+/)[0]){
		      return mouth + '月' + day + '日';
		    } else {
		      return year + '年' + mouth + '月' + day + '日';
		    }
			}
		},
	  uptated(){
	  	
	  },
	  computed:{
	  	src:function(){
	  		
	  	}
	  },
	  components:{
	  }
	}
</script>

<style lang="scss">
	/*@import "./common/stylus/mixin.scss"*/
	#app{
    position:fixed;
    background:#f5f4f9;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:200;
    .searchBox {
        position:fixed;
        top:0;
        left:0;
        width:100%;
        padding:0.06rem 0;
        background:#666666;
        display:flex;
        z-index:500;
        .home-search {
            position:relative;
            width:0.5rem;
            height:0.5rem;
            margin-left:4.9%;
            border-radius:0.06rem;
            overflow:hidden;
            img{
                width:100%;
                height:100%;
            }
        }
        .header-name{
            flex:1;
					 	text-align: center;
					  height: 100%;
					  color: #fff;
            font{
                display:inline-block;
                width: 100%;
                padding-top:0.18rem;
                font-size:0.15rem;
                line-height:0.16rem;
            }
            .header-content{
                margin-top:0.06rem;
                font-size:0.14rem;
                span{
                    &:first-child{
                        display:inline-block;
                        padding-right:0.13rem;
                    }
                }
            }
        }
        .jifen{
          width: 0.66rem;
				  height: 0.28rem;
				  background: #E95C3C;
				  margin:0.11rem 0.2rem 0 0;
				  font-size: 0.13rem;
				  border-radius: 0.04rem;
				  display: flex;
				  align-items: center;
				  justify-content: center;
				  color: #fff;
        }
    }
    .zhaiyao-list::-webkit-scrollbar{width:0px}
    .zhaiyao-list{
        position:absolute;
        overflow-y:scroll;
        width:100%;
//      padding-right:0.03rem;
        margin:auto;
        height:100%;
        top:0;
        left:0;
        right:0;
        z-index:310;
        -webkit-overflow-scrolling:touch;/*解决苹果滑动流畅*/
        .zhaiyao-content{
            width: 94%;
            height:auto;
            margin:0 auto;
            margin-top:0.72rem;
            padding-bottom:0.6rem;
            .tishi-bottom{
                width:100%;
                .border{
                    box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
                }
                .borders{
                    box-shadow: 0.01rem 0.02rem 0.04rem #dfdfdf;
                }
                .borderd{
                    box-shadow: 0.01rem 0rem 0.04rem #dfdfdf;
                }
                ul{
//                  height:0.3rem;
                    padding:0.2rem 2.5% 0.1rem 2.5%;
                    display:flex;
                    background:#fff;
                    li{
                        flex:1;
//                      height:0.2rem;
//                      line-height:0.36rem;
                        text-align:center;
                        font-size:0.2rem;
                        color:#323232;
                    }
                }
                .liangdian_1{
                    .last{
                        flex:1;
                        color:#676767;
                        padding:0rem 0.14rem 0.18rem 0.14rem;
                        line-height:0.26rem;
                        overflow:hidden;
                        font{
                            display:inline-block;
                            width:0.7rem;
                            height:0.22rem;
                            color:#ff7a59;
                            text-align:center;
                            float:left;
                            padding:0.04rem 0;
                            background:#fde9e2;
                            border-radius:0.04rem;
                            font-size:0.14rem;
                            line-height:0.15rem;
                            margin:0.04rem 0.07rem 0.04rem 0;
                            box-sizing:border-box;
                            border:1px solid #ff7a59;
                            &:first-child{
                                
                            }
                        }
                        p{
                            word-wrap:break-word;
                            text-align: justify;
                        }
                    }
                    .lasts{
                        padding-right:0rem;
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
                        .biancolor{
                            color:#2abdfc;
                        }
                    }
                    .lasts{
                        padding-right:0rem;
                    }
                }
                .TypeList{
                    float:left;
                    width:100%;
                    color:#ff7a59;
                    overflow:hidden;
                    span{
                        display:inline-block;
                        width:0.7rem;
                        height:0.22rem;
                        text-align:center;
                        float:left;
                        padding:0.04rem 0;
                        background:#fde9e2;
                        border-radius:0.04rem;
                        font-size:0.14rem;
                        line-height:0.15rem;
                        margin:0.04rem 0.07rem 0.04rem 0;
                        box-sizing:border-box;
                        border:1px solid #ff7a59;
                        &:first-child{
                            
                        }
                    }
                }
            }
            .times{
                width:100%;
                height:0.33rem;
                background:#fff;
                line-height:0.34rem;
                box-shadow:0.02rem 0.02rem 0.04rem #dedde1;
                .text-center{
                    display:inline-block;
                    padding:0 0 0 0.14rem;
                }
            }
        }
        
    }
    .zhaiyao-food{
        width:100%;
        height:0.45rem;
        color:#ffffff;
        background:#ff7a59;
        position: fixed;
        font-size:0.18rem;
        display:flex;
        left:0;
        bottom:0;
        -webkit-box-pack:center;
        justify-content:center;
        -webkit-box-align:center;
        align-items:center;
        z-index:320;
    }
    .tishi{
        width:50%;
        height:2rem;
        background:#fff;
        
    }
}
</style>
