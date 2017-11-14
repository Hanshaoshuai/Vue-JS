<template>
	<div class="xiangmu-child">
		<div class="box" ref="box">
			<div v-for="(item,index) in data" class="sousuo-content border-bottom">
				<ul ref="index1" class="content-header" index="type1"  @click.stap="typeName(item.id,item.type,item.is_send)">
					<li>
						<div class="content-top">
							<span>{{item.com_short}}{{item.com_name}}&nbsp;（{{item.com_code}}）</span>
							<!--<span>{{item.type}}</span>-->
							<span v-if="item.type==1" class="texts">定增</span>
							<span v-if="item.type==2" class="texts">做市</span>
							<span v-if="item.type==3" class="texts">转老股</span>
							<span v-if="item.type==4" class="texts">股权质押</span>
							<span v-if="item.type==5" class="texts">融资租赁</span>
							<span v-if="item.type==6" class="texts">研报支持</span>
							<span v-if="item.type==7" class="texts">公司调研</span>
							<font v-if="item.is_send=='1' && item.audit!='1'">已投递</font>
							<font v-if="item.audit=='2'">未投递</font>
							<font v-if="item.audit=='1'">已撤回</font>
						</div>
						<div class="content-bottom">
							<span>{{numToTime(item.create_time)}}</span>
						</div>
					</li>
				</ul>
			</div>
			<!--<div v-show="none" style="width:100%;height:0.08rem;background: #f5f4f9;"></div>-->
			<!--<div v-show="zanWu" style="width:100%;padding:0 12%;font-size:0.16rem;line-height:0.24rem;">暂无融资记录</div>-->
		</div>
		<!--<router-view :token="token" :XiangmuID="XiangmuID" :is_send="is_send" :type="type"></router-view>-->
	</div>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import {numToTime} from "../../../common/js/date.js";
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
//	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	
	export default {
		props:{
			token:{
//				type:Object
			}
		},
		data () {
			return {
				data:'',
				x:'1',
				urlName:"DingzengZuoshi",
				fankui:"45",
				genjin:"458",
				introduction:"",
				times:20177111129,
				showFlag:false,
				tucaoShow:true,
				boxUl:"",
				types:{
					type1:"DingzengZuoshi",
					type2:"DingzengZuoshi",
					type3:"ZhuanlaoGu1",
					type4:"ZhiYa1",
					type5:"ZuLin1",
					type7:"Diaoyan1"
				},
				XiangmuID:"",
				is_send:"",
				type:"",
				numToTime:"",
				none:false,
				zanWu:false
			}
		},
		mounted() {
			this.numToTime=numToTime;
//			Indicator.open({spinnerType: 'fading-circle'});
//			console.log(this.token)
			//项目列表（自己创建的历史融资记录）	
			var datas = {
				token:localStorage.getItem("token"),//	token	是	[string]		
				page:"",	//page	是	[string]		
				size:""	//size	是	[string]
			}
			this.$http.post(URL.path+'finance/creae_list',datas,{emulateJSON:true}).then(function(res){
				this.data=res.body.data;
//				Indicator.close();
				if(this.data.length==0){
					this.zanWu=true;
				}else{
					this.none=true;
				}
//				console.log('已投清单');
//				console.log(res.body.data);
			},function(res){
//				Indicator.close();
			    console.log(res.status);
			})
			this.$nextTick(function() {
				this.boxUl=this.$refs.box.getElementsByTagName("ul");
//				console.log(this.boxUl)
			})
		},
		methods:{
			yijianHind(){
				history.go(-1)
//				this.tucaoShow=false;
			},
			typeName(id,type,is_send){
				var Uls=this.boxUl[type]
				this.XiangmuID=id;
				this.is_send=is_send;		//是否投递过
				this.type1=type;
				this.types['type'+type]
//				console.log(this.types['type'+type])
//				window.location.href="#/wode/jilu/0/"+this.types['type'+type];
				window.location.href="#/"+this.types['type'+type]+'/'+type+'/'+id+'/'+is_send;
//				this.$refs.dingzengzuoshiShow.zuoshiBlock();
			},
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
	.xiangmu-child{
		.box{
			width:100%;
			.sousuo-content{
				width:100%;
				background:#fff;
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
								width:0.8rem;
								&:first-child{
									color:#323232;
									font-size:0.18rem;
									flex:1;
								}
							}
							font{
								display:inline-block;
								width:0.5rem;
								font-size:0.12rem;
								color:#717070;
								line-height:0.18rem;
							}
							.texts{
								text-align:center;
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


