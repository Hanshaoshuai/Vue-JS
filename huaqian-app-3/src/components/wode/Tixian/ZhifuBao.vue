<template>
	<transition name="fade">
		<div v-show="tucaoShow" class="xiangmu">
			<div class="xiangmu-header" @click.stop="yijianHind()">
				<span class="xiangmu-left"><img src="../img/back.png"/></span>
				<span>确认支付宝账号</span>
			</div>
			<div class="box" ref="wrapper">
				<div class="mui-content">
					<div class="my-line bb mt20"><input type="text" class="my-input" v-model="num" placeholder="支付宝账号" /></div>
					<div class="my-line"><input type="text" class="my-input" v-model="names" placeholder="姓名" /></div>
					<div class="report-tips mb20">请填写准确的信息</div>
					<div @click.stop="tixianGo()" class="btn">提现</div>
				</div>
			</div>
			<!--<transition name="fade1">-->
				<tixianok ref="TixianOk" :chanShu="chanShu" :fangshi="fangshi" :jinE="jinE" @to-parent="child"></tixianok>
			<!--</transition>-->
		</div>
	</transition>
</template>

<script type="text/ecmascript">
	import {URL} from '../../../common/js/path';
	import { Field } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import box from "../../box.vue";
	import tixianok from "./TixianOk.vue";
	
	export default {
		props:{
			jinE:{
//				type:Object
			}
		},
		data () {
			return {
				tucaoShow:true,
				num:"",
				names:"",
				chanShu:"",
				fangshi:"支付宝"
			}
		},
		mounted() {
			
		},
		activated(){
			
		},
		methods:{
			yijianHind(){
				Indicator.close();
//				history.go(-1)
				this.tucaoShow=false;
			},
			child(none){
				if(none==false){
					this.tucaoShow=false;
					this.num="";
					this.names="";
				}
//				console.log(none)
			},
			tixianGo(){
				console.log(this.num)
				console.log(this.name)
				console.log(this.jinE)
				var type;
				if(this.num==''){
					Toast('请输入您的支付宝账号');
					return;
				}
				if(this.names==''){
					Toast('请输入您的姓名');
					return;
				}
				var datas= {
					token: localStorage.getItem("token"),
					terminalNo: 3,
					money: this.jinE,
					type: '2',
					alipay_num:	this.name,
					alipay_name: this.name
				}
				Indicator.open({spinnerType: 'fading-circle'});
				this.$http.post(URL.path1+'pay/withdraw',datas,{emulateJSON:true}).then(function(res){ //获取订单信息接口
					console.log(res);
					Indicator.close();
					if(res.body.returnCode!=200){
						Toast(res.body.msg);
					}else{
						this.chanShu=res.body.data
						this.$refs.TixianOk.tucaoShow=true;
					}
				},function(res){
					Indicator.close();
				    console.log(res.status);
				})
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
			tixianok
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
	.fade1-enter-active {
	  	transition: all .5s ease;
	}
	.fade1-leave-active {
	  	transition: all .5s ease;
	}
	.fade1-enter, .fade1-leave-active {
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
			z-index:230;
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
		/*.box::-webkit-scrollbar{width:0px}*/
		.box{
			/*overflow-y:auto;*/
			width:100%;
			height:100%;
			/*-webkit-overflow-scrolling: touch;	/*解决苹果滑动流畅*/
			.mui-content{
				padding-top:0.55rem;
				.my-line {
				  display: flex;
				  height: .5rem;
				  padding: 0 .12rem;
				  background: #fff;
				  color: #333;
				  -webkit-box-align: center;
				  -ms-flex-align: center;
				  align-items: center;
				  -webkit-box-pack: justify;
				  -ms-flex-pack: justify;
				  justify-content: space-between;
				  font-size: .16rem;
				  .my-input {
					  	border:none;
					  	appearance: none;
					  	outline: none;
					}
				}
				.report-tips {
				  padding-left: .22rem;
				  background: url('../img/report-tip-icon.png') no-repeat left center;
				  background-size: .16rem .16rem;
				  font-size: .14rem;
				  line-height: .16rem;
				  color: #666;
				  margin-left: .16rem;
				  margin-top: .1rem;
				  margin-bottom: 0.1rem;
				}
				.btn {
					width: 92%;
	  				height: 0.45rem;
	  				font-size: 0.2rem;
	  				text-align: center;
	  				line-height: 0.45rem;
					border-radius: 0.04rem;
				  	background: #ff7a59;
				  	color: #fff;
				  	margin: 0 auto;
				}
			}
		}
	}
</style>


